export class Request {

  public method: string;
  public path: string;
  params: any = {};

  constructor(method, path, params) {
    this.method = method;
    this.path   = path;
    this.params = params;
  }
}
