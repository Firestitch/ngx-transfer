import { FsDownloadHandler } from '../../../src/interceptors';
import { FsMessage } from '@firestitch/message';

export class DownloadHandler extends FsDownloadHandler {
  constructor(private fsMessage: FsMessage) {
    super();
  }

  begin(params) {
    console.log('begin ', params);
    this.fsMessage.info('Starting download...');
  }

  error(data, raw) {

    const message = data && data.message ? data.message : 'There was a problem with the download';

    this.fsMessage.error(message);
    console.log('error', data);
  }
}
