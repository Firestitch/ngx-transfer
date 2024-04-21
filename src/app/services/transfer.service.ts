import { Inject, Injectable, Optional } from '@angular/core';
import { guid } from '@firestitch/common';
import { FsApi, RequestMethod } from '@firestitch/api';

import { format } from 'date-fns';
import { FS_TRANSFER_HANDLER } from '../fs-transfer-providers';
import { FsTransferHandler } from '../handlers/transfer.handler';
import { Request } from '../models/request.model';


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
