import { InjectionToken } from '@angular/core';
import { FsDownloadHandler } from './interceptors';

export const FS_DOWNLOAD_HANDLER = new InjectionToken<FsDownloadHandler>('fs-download.request_interceptors');
