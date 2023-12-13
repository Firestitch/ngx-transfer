import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { FsExampleModule } from '@firestitch/example';
import { FsMessage, FsMessageModule } from '@firestitch/message';
import { FS_TRANSFER_HANDLER, FsTransferModule } from '@firestitch/transfer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FailedComponent } from './components/failed/failed.component';
import { SuccessComponent } from './components/success/success.component';
import { TransferHandler } from './handlers/transfer.handler';
import { AppMaterialModule } from './material.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsTransferModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    FsMessageModule,
  ],
  declarations: [
    AppComponent,
    SuccessComponent,
    FailedComponent,
  ],
  providers: [
    {
      provide: FS_TRANSFER_HANDLER,
      useClass: TransferHandler,
      deps: [FsMessage],
    },
  ],
})
export class PlaygroundModule {
}
