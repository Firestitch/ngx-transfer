import { Inject, Injectable, Optional } from '@angular/core';
import { guid } from '@firestitch/common';

import { FS_TRANSFER_HANDLER } from '../fs-transfer-providers';
import { FsTransferHandler } from '../handlers/transfer.handler';
import { Request } from '../models/request.model';
import { isArray, isObject } from 'lodash-es';
import { format } from 'date-fns';


@Injectable()
export class FsTransferService {

  constructor(
    // Custom interceptors
    @Optional() @Inject(FS_TRANSFER_HANDLER) private handler: FsTransferHandler,
  ) {
  }

  public post(path, parameters = {}) {
    return this.request(path, 'post', parameters);
  }

  public request(path, method = 'get', parameters = {}) {
    const request = new Request(method, path, parameters);

    this.handler.begin(request);
    const uniqID = guid();

    const container = this.initContainer();
    const iframe = this.initFrame(uniqID);
    const form = this.initForm(path, method, parameters, uniqID);

    container.appendChild(form);
    container.appendChild(iframe);

    document.body.appendChild(container);
    form.submit();
    iframe.setAttribute('submitted', 'true');
  }

  private initContainer() {
    const prevFrame = document.getElementById('former-container');
    if (prevFrame) { prevFrame.remove(); }

    const container = document.createElement('div');
    container.setAttribute('id', 'former-container');
    container.setAttribute('style', 'display: none');
    container.setAttribute('data-type', 'iframe');

    return container;
  }

  private initFrame(uniqID) {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'about:blank');
    iframe.setAttribute('name', `former-iframe-${uniqID}`);
    iframe.setAttribute('id', `former-iframe-${uniqID}`);
    iframe.setAttribute('class', 'former-iframe');
    iframe.setAttribute('style', 'display: none;');

    iframe.onload = (event: any) => {

      if (!event.target.hasAttribute('submitted')) {
        return;
      }

      let data: any = {};
      let raw = '';

      try {

        const iframeBody = iframe.contentWindow.document.body;
        raw = iframeBody.innerText;

        data = JSON.parse(raw);
      } catch (e) {}

      this.handler.error(data, raw);
    };

    return iframe;
  }

  private initForm(path, method, parameters, uniqID) {
    const form = document.createElement('form');
    form.setAttribute('action', path);
    form.setAttribute('method', method);
    form.setAttribute('target', `former-iframe-${uniqID}`);

    this._objectToForm(parameters, form);

    return form;
  }

  private _objectToForm(target, form, namespace = null, level = 0) {

    level++;
    // Depth limit
    if (level > 10) {
      throw Error('Maximum call stack size exceeded');
    }

    if (target === void 0 || target === null) {
      return;
    }

    Object.keys(target).forEach((property) => {
      let item = target[property];
      const formKey = namespace ? `${namespace}[${property}]` : property;

      if (item && typeof item === 'object') {
        this._objectToForm(item, form, formKey, level)
      } else {

        if (item instanceof Date) {
          item = format(item, `yyyy-MM-dd'T'HH:mm:ssxxx`);
        }

        const paramInput = document.createElement('input');
        paramInput.setAttribute('type', 'hidden');
        paramInput.setAttribute('name', formKey);
        paramInput.setAttribute('value', item);

        form.appendChild(paramInput);
      }
    });
  }

}
