import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FooterComponent } from './footer/footer.component';

import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
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
  MatRadioModule,
  MatSelectModule
} from '@angular/material';

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
    MatRadioModule,
    MatSelectModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  declarations: [
    FooterComponent,
    LoginComponent,
    SigninComponent
  ],
  exports: [
    FooterComponent,
    SigninComponent,
    LoginComponent
  ],
  providers: []
})
export class GeneralModule { }
