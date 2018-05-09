import { InjectionToken } from '@angular/core';
import { FsDownloadHandler } from './handlers';

export const FS_DOWNLOAD_HANDLER = new InjectionToken<FsDownloadHandler>('fs-download.request_interceptors');
