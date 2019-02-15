import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public config = environment;

  public handlerCode = `import { FsTransferHandler } from '@firestitch/transfer';
import { FsMessage } from '@firestitch/message';

export class TransferHandler extends FsTransferHandler {
  constructor(private fsMessage: FsMessage) {
    super();
  }

  begin(params) {
    this.fsMessage.info('Starting download...');
  }

  error(data, raw) {
    const message = data && data.message ? data.message : 'There was a problem with the download';
    this.fsMessage.error(message);
  }
}`;

  public moduleCode = `
import { FS_TRANSFER_HANDLER } from '@firestitch/transfer';
import { TransferHandler } from './app/handlers/transfer.handler';


@NgModule({
  imports: [
    FsTransferModule
  ],
  providers: [
    {
      provide: FS_TRANSFER_HANDLER,
      useClass: TransferHandler,
      deps: [ FsMessage ]
    }
  ]
})`;
}
