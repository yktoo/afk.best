/// <reference types="@angular/localize" />
import { enableProdMode, provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideRouting } from './app/provide-routing';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouting(),
        provideZonelessChangeDetection(),
    ],
})
    .catch(err => console.error(err));
