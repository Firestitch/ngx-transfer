import { FsTransferHandler, Request } from '@firestitch/transfer';
import { FsMessage } from '@firestitch/message';

export class TransferHandler extends FsTransferHandler {
  constructor(private fsMessage: FsMessage) {
    super();
  }

  public begin(request: Request) {
    console.log('begin ', request);

    this.fsMessage.info('Starting download...');
    return request.clone({ path: `https://specify.dev.firestitch.com/api/${request.path}` })
  }

  public error(data, raw) {

    const message = data && data.message ? data.message : 'There was a problem with the download';

    this.fsMessage.error(message);
    console.log('error', data);
  }
}
