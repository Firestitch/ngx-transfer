import './styles.scss';
// import './../tools/assets/playground.scss';
// import '@firestitch/message/package/assets/styles.css';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsTransferModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule, FsMessage } from '@firestitch/message';
import { TransferComponent } from './app/components/first-example/transfer.component';
import { FS_TRANSFER_HANDLER } from '../src';
import { TransferHandler } from './app/handlers/transfer.handler';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsTransferModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    FsMessageModule
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    TransferComponent
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
