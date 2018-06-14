import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { GeneralModule } from './general/general.module';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';

import {
  MatSidenavModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    SharedModule,
    GeneralModule,
    CoreModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
