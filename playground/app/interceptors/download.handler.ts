import { FsDownloadHandler } from '../../../src/interceptors/base';

export class DownloadHandler extends FsDownloadHandler {
  constructor() {
    super();
  }

  begin(params) {
    console.log('begin ', params);
  }
}
