export interface FsApiBaseHander {
  success(event, config);
  error(error, config);
  complete(config);
}

export class FsDownloadHandler implements FsApiBaseHander {
  constructor() {}

  begin(params) {}
  success(event, config) {}
  error(error, config) {}
  complete(config) {}
}
