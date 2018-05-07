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
    this._download.post(
      '/api/dummy/download',
      { test: 1, test2: { hi: '123'}}
    );
  }

  public error() {
    this._download.post(
      '/api/dummy/download?exception=Error message from server',
      { test: 1, test2: { hi: '123'}}
    );
  }
}
