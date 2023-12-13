import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
  ],
})
export class FsTransferModule {
  static forRoot(): ModuleWithProviders<FsTransferModule> {
    return {
      ngModule: FsTransferModule,
    };
  }
}
