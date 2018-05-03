import { Component } from '@angular/core';
import { FsDownloadService } from '../../../../src/services';

@Component({
  selector: 'download',
  templateUrl: 'download.component.html'
})
export class DownloadComponent {
  constructor(private _download: FsDownloadService) {

  }

  public request() {
    this._download.download(
      '/api/dummy/download',
      'post',
      { test: 1, test2: { hi: '123'}}
    );
  }

  public error() {
    this._download.download(
      '/api/dummy/download?exception=errormessage',
      'post',
      { test: 1, test2: { hi: '123'}}
    );
  }
}
