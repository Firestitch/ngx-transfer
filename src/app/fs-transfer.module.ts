import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsTransferService } from './services/transfer.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  entryComponents: [
  ],
  providers: [],
})
export class FsTransferModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsTransferModule,
      providers: [FsTransferService]
    };
  }
}
