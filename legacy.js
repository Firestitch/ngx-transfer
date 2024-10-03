const fs = require('fs');
const path = require('path');

const walk = (dir, regex) => {
  try {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        // Recurse into subdir
        results = [...results, ...walk(file)];
      } else {
        // Is a file
        results.push(file);
      }
    });
    return results;
  } catch (error) {
    console.error(`Error when walking dir ${dir}`, error);
  }
};

const edit = (filePath, regex, replaceVal) => {
  const oldContent = fs.readFileSync(filePath, {encoding: 'utf8'});
  const newContent = oldContent.replace(regex, replaceVal);
  fs.writeFileSync(filePath, newContent, {encoding: 'utf-8'});
  console.log(`Edited file: ${filePath}`);
};

const main = () => {

  ['playground', 'src'].forEach((dir) => {
    walk(dir)
      .forEach(filePath => edit(filePath, new RegExp('MatLegacy[^\\s]* as ', 'g'), ''));
    
    walk(dir)
        .forEach(filePath => edit(filePath, new RegExp('/legacy-', 'g'), '/'));
  });
};

main();