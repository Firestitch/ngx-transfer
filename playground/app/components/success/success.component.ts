import { Component, inject } from '@angular/core';
import { FsTransferService } from '@firestitch/transfer';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'success',
    templateUrl: 'success.component.html',
    styles: ['mat-form-field { width: 100%; }'],
    standalone: true,
    imports: [
        MatFormField,
        MatInput,
        FormsModule,
        MatButton,
    ],
})
export class SuccessComponent {
  private _transfer = inject(FsTransferService);


  public url = 'dummy/download';

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
