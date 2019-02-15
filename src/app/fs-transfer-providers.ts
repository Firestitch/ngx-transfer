import { InjectionToken } from '@angular/core';
import { FsTransferHandler } from './handlers/transfer.handler';

export const FS_TRANSFER_HANDLER = new InjectionToken<FsTransferHandler>('fs-transfer.request_interceptors');
