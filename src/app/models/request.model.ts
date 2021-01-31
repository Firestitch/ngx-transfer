export class Request {

  public method: string;
  public path: string;
  public params: any = {};

  public constructor(method: string, path: string, params: object) {
    this.method = method;
    this.path = path;
    this.params = params;
  }

  public clone(data: { path?: string, method?: string, params?: object }): Request {
    return Object.assign({}, this, data);
  }
}
