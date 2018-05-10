import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsTransferService } from './services';

@NgModule({
  imports: [
    CommonModule,
  ],
  entryComponents: [
  ],
  providers: [
    FsTransferService,
  ],
})
export class FsTransferModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsTransferModule,
      providers: [FsTransferService]
    };
  }
}
