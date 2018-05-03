import { Component } from '@angular/core';
import { FsDownloadService } from '../../../../src/services';

@Component({
  selector: 'first-example',
  templateUrl: 'first-example.component.html'
})
export class FirstExampleComponent {
  constructor(private _download: FsDownloadService) {

  }

  public test() {
    this._download.download(
      'https://boilerplate.firestitch.com/api/dummy/download?exception=errormessage',
      'post',
      { test: 1, test2: { hi: '123'}}
    );
  }
}
