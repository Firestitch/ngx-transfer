import { Component } from '@angular/core';
import { FsTransferService } from '../../../../src/services';

@Component({
  selector: 'transfer',
  templateUrl: 'transfer.component.html'
})
export class TransferComponent {
  constructor(private _transfer: FsTransferService) {

  }

  public request() {
    this._transfer.post(
      '/api/dummy/download',
      { test: 1, test2: { hi: '123'}}
    );
  }

  public error() {
    this._transfer.post(
      '/api/dummy/download?exception=Error message from server',
      { test: 1, test2: { hi: '123'}}
    );
  }
}
