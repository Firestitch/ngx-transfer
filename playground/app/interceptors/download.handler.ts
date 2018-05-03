import { FsDownloadHandler } from '../../../src/interceptors';

export class DownloadHandler extends FsDownloadHandler {
  constructor() {
    super();
  }

  begin(params) {
    console.log('begin ', params);
  }

  error(message, error) {
    console.log('message', message);
    console.log('error', error);
  }
}
