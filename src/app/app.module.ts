import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MylibModule } from 'mylib';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MylibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
