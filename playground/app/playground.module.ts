import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FsTransferModule, FS_TRANSFER_HANDLER } from '@firestitch/transfer';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule, FsMessage } from '@firestitch/message';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { SuccessComponent } from './components/success/success.component';
import { FailedComponent } from './components/failed/failed.component';
import { TransferHandler } from './handlers/transfer.handler';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsTransferModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule.forRoot(),
    ToastrModule.forRoot({ preventDuplicates: true }),
    FsMessageModule.forRoot(),
    FsMessageModule
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    SuccessComponent,
    FailedComponent
  ],
  providers: [
    {
      provide: FS_TRANSFER_HANDLER,
      useClass: TransferHandler,
      deps: [ FsMessage ]
    }
  ],
})
export class PlaygroundModule {
}
