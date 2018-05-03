import { Inject, Injectable, Optional } from '@angular/core';
import { guid } from '@firestitch/common/util';
import { FS_DOWNLOAD_HANDLER } from '../fs-dowload-providers';
import { FsDownloadHandler } from '../interceptors/base';


@Injectable()
export class FsDownloadService {

  constructor(
    // Custom interceptors
    @Optional() @Inject(FS_DOWNLOAD_HANDLER) private handler: FsDownloadHandler,
  ) {
    (window as any).test = () => {
      console.log('hi!');
      // console.log(iframe.contentWindow.document.body.innerHTML);
    }
  }

  public download(path, method = 'get', parameters = {}) {
    this.handler.begin(parameters);
    const uniqID = guid();

    const container = this.initContainer();
    const iframe = this.initFrame(uniqID);
    const form = this.initForm(path, method, parameters, uniqID);

    container.appendChild(form);
    container.appendChild(iframe);

    document.body.appendChild(container);
    // iframe.contentWindow.document.body.appendChild(form);
    form.submit();


    // iframe.remove();
  }

  private initContainer() {
    const container = document.createElement('div');
    container.classList.add('former-container');
    container.setAttribute('style', 'display: none');
    container.setAttribute('data-type', 'iframe');

    return container;
  }

  private initFrame(uniqID) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'about:blank');
    iframe.setAttribute('name', uniqID);
    iframe.setAttribute('id', `former-iframe-${uniqID}`);
    iframe.setAttribute('class', 'former-iframe');

    iframe.setAttribute('style', 'display: none;');
    // iframe.setAttribute('onload', 'test()');

    iframe.onload = () => {
      console.log('test');
      const fr = (document.getElementById(`former-iframe-${uniqID}`) as any);
      const iframeDocument = fr.contentDocument || fr.contentWindow.document;
      console.log(iframeDocument);
      console.log(iframe.getElementsByTagName('body'));
    };

    return iframe;
  }

  private initForm(path, method, parameters, uniqID) {
    const form = document.createElement('form');
    form.setAttribute('action', path);
    form.setAttribute('method', method);
    form.setAttribute('target', uniqID);

    for (const paramKey in parameters) {
      if (parameters.hasOwnProperty(paramKey)) {
        let value = parameters[paramKey];
        if (value instanceof Object) { value = JSON.stringify(value); }

        const paramInput = document.createElement('input');
        paramInput.setAttribute('type', 'hidden');
        paramInput.setAttribute('name', paramKey);
        paramInput.setAttribute('value', value);

        form.appendChild(paramInput);
      }
    }

    return form;
  }
}
