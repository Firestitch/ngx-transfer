export interface FsApiBaseHander {
  begin(params);
  error(error, config);
}

export class FsDownloadHandler implements FsApiBaseHander {
  constructor() {}

  begin(params) {}
  error(data, raw) {}
}
