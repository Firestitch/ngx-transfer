import { Injectable } from '@angular/core';
import { FsApi, RequestMethod } from '@firestitch/api';


@Injectable({
  providedIn: 'root',
})
export class FsTransferService {

  constructor(
    private _api: FsApi,
  ) {}

  public post(path, parameters = {}) {
    return this.request(path, RequestMethod.Post, parameters);
  }

  public request(path, method: RequestMethod, data = {}) {
    this._api.createApiFile(path, { method, data })
      .download();
  }
}
