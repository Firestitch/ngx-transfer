import { Component } from '@angular/core';
import { FsTransferService } from '../../../../src/services';

@Component({
  selector: 'failed',
  templateUrl: 'failed.component.html',
  styles: ['mat-form-field { width: 100%; }']
})
export class FailedComponent {

  public url = 'https://boilerplate.firestitch.com/api/dummy/download?exception=Error message from server';

  constructor(private _transfer: FsTransferService) {}

  public request() {
    this._transfer.post(
      this.url,
      { parameter: 'value', array: { key: 'value' }}
    );
  }
}
