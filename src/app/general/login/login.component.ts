import { LoginService } from '../../shared/services/login.service';
import { Customer } from '../../shared/models/Customer';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  options: FormGroup;
  customer: Customer = new Customer();
  
  constructor(private _ls: LoginService, private fb: FormBuilder, private router:Router) {
    this.createForm();
  }
  
  createForm() {
    this.options = this.fb.group({
      user: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
  
  get validateForm() {
    return this.options.valid;
  }
  
  onLogin() {
    if (this.validateForm) {
      const exist = this._ls.login();
      exist.subscribe(response => {
        response['customers'].forEach(element => {
          if (element.user == this.customer.user && element.password == this.customer.password) {
           // this._ls.setCustomer(true);
            localStorage.setItem('user', JSON.stringify(element));
            this.router.navigate(['home']);
          }
        });
      });
    }
  }

}
