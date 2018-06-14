import { AppComponent } from './app.component';
import { NewComponent } from './core/new/new.component';
import { SigninComponent } from './general/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './general/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'new', component: NewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }