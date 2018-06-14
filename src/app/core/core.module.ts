import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewComponent } from './new/new.component';

import {
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule
  ],
  providers: [
   
  ],
  exports:[
      NewComponent
  ]
})
export class CoreModule { }