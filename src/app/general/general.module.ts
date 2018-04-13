import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { BodyComponent } from './body/body.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatDialogModule,
  MatListModule,
  MatDatepickerModule,
  MatSidenavModule,
  MatExpansionModule,
  MatNativeDateModule,
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    MatMenuModule,
    BrowserModule,
    MatStepperModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatListModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatNativeDateModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    BodyComponent,
    LoginComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    BodyComponent,
    LoginComponent
  ]
})
export class GeneralModule { }
