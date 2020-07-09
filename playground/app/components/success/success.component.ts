import { Component } from '@angular/core';
import { FsTransferService } from '@firestitch/transfer';


@Component({
  selector: 'success',
  templateUrl: 'success.component.html',
  styles: ['mat-form-field { width: 100%; }']
})
export class SuccessComponent {

  public url = 'https://boilerplate.firestitch.com/api/dummy/download';

  constructor(private _transfer: FsTransferService) {}

  public request() {
    this._request();
  }

  private _request() {
    this._transfer.post(
      this.url,
      {
        sleep: 2,
        format: 'csv',
        string: 'value',
        object: { key: 'value', value: { name: 'Test' } },
        array: ['1', '2', '3'],
        date: new Date()
      }
    );
  }
}
