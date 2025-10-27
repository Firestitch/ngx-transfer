import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { FS_TRANSFER_HANDLER, FsTransferModule } from '@firestitch/transfer';
import { TransferHandler } from './app/handlers/transfer.handler';
import { FsMessage, FsMessageModule } from '@firestitch/message';
import { FS_API_REQUEST_INTERCEPTOR, FsApiModule } from '@firestitch/api';
import { ApiInterceptorFactory } from './app/interceptors';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FsExampleModule } from '@firestitch/example';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FsTransferModule.forRoot(), FormsModule, FsExampleModule.forRoot(), FsMessageModule.forRoot(), FsApiModule.forRoot(), FsMessageModule),
        {
            provide: FS_TRANSFER_HANDLER,
            useClass: TransferHandler,
            deps: [FsMessage],
        },
        {
            provide: FS_API_REQUEST_INTERCEPTOR,
            useFactory: ApiInterceptorFactory,
        },
        provideAnimations(),
    ]
})
  .catch(err => console.error(err));

