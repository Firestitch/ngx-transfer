import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsDownloadComponent } from './components';
import { FsDownloadService } from './services';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/test';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsDownloadComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    FsDownloadComponent,
  ],
  providers: [
    FsDownloadService,
    HttpClientModule,
  ],
})
export class FsDownloadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsDownloadModule,
      providers: [FsDownloadService]
    };
  }
}
