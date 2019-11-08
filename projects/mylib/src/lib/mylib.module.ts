import { NgModule } from '@angular/core';
import { MylibComponent } from './mylib.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [MylibComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
  ],
  exports: [MylibComponent]
})
export class MylibModule { }
