import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerService } from './timer.service';

import { DocumentInterface } from './timer.service';
import { SetIntervalFunction } from './timer.service';
import { ProductFormComponent } from './product-form/product-form.component';

export const DOCUMENT = new InjectionToken<DocumentInterface>('__DOCUMENT__');
export const SET_INTERVAL_FUNCTION = new InjectionToken<SetIntervalFunction>('__SET_INTERVAL_FUNCTION__');

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, ProductFormComponent],
  bootstrap: [AppComponent],
  providers: [
    TimerService,
    { provide: DOCUMENT, useValue: window.document},
    { provide: SET_INTERVAL_FUNCTION, useValue: setInterval }
  ],
})
export class AppModule {}
