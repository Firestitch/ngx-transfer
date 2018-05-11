import { Component } from '@angular/core';
import { FsTransferService } from '../../../../src/services';

@Component({
  selector: 'success',
  templateUrl: 'success.component.html',
  styles: ['mat-form-field { width: 100%; }']
})
export class SuccessComponent {

  public url = 'https://boilerplate.firestitch.com/api/dummy/download';

  constructor(private _transfer: FsTransferService) {}

  public request() {
    this._transfer.post(
      this.url,
      { parameter: 'value', array: { key: 'value' }}
    );
  }
}
