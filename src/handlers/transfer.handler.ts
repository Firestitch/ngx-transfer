export interface FsApiBaseHander {
  begin(params);
  error(error, config);
}

export class FsTransferHandler implements FsApiBaseHander {
  constructor() {}

  begin(params) {}
  error(data, raw) {}
}
