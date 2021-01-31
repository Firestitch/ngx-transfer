import { Request } from '../models/request.model';

export class FsTransferHandler {

  public begin(request: Request): Request {
    return request;
  }

  public error(data: any, raw: string) {}
}
