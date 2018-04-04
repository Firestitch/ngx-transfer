import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsDownloadComponent } from './components';
import { FsDownloadService } from './services';

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
