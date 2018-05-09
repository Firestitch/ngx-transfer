import './styles.scss';
// import './../tools/assets/playground.scss';
// import '@firestitch/message/package/assets/styles.css';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsDownloadModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule, FsMessage } from '@firestitch/message';
import { DownloadComponent } from './app/components/first-example/download.component';
import { FS_DOWNLOAD_HANDLER } from '../src';
import { DownloadHandler } from './app/interceptors/download.handler';


@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsDownloadModule,
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
    DownloadComponent
  ],
  providers: [
    {
      provide: FS_DOWNLOAD_HANDLER,
      useClass: DownloadHandler,
      deps: [ FsMessage ]
    }
  ],
})
export class PlaygroundModule {
}
