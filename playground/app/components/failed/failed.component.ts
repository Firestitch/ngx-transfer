import { Component } from '@angular/core';
import { FsTransferService } from '@firestitch/transfer';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'failed',
    templateUrl: 'failed.component.html',
    styles: ['mat-form-field { width: 100%; }'],
    standalone: true,
    imports: [MatFormField, MatInput, FormsModule, MatButton]
})
export class FailedComponent {

  public url = 'dummy/download?exception=Error message from server';

  constructor(private _transfer: FsTransferService) {}

  public request() {
    this._transfer.post(
      this.url,
      {
        parameter: 'value',
        array: { key: 'value' },
        undefined: undefined,
      }
    );
  }
}
