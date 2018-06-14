import { Customer } from './../../shared/models/Customer';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  options: FormGroup;
  customer: Customer = new Customer();
  favoriteNew: string;
  
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }
  
  get validateForm(){
    return this.options.valid;
  }
  
  createForm() {
    this.options = this.fb.group({
      name: [null, Validators.required],
      user: [null, Validators.required],
      password: [null, Validators.required],
      gender: ['', Validators.required],
      kindOfFavoriteNew: ['', Validators.required]
    });
  }
  
  public Signin(){
    if(this.validateForm){
      this.customer.name = this.options.value['name'];
      this.customer.user = this.options.value['user'];
      this.customer.password = this.options.value['password'];
      this.customer.gender = this.options.value['gender'];
      this.favoriteNew = this.options.value['kindOfFavoriteNew'];
      console.log(this.customer);
      console.log(this.favoriteNew);
    }
  }
  
  
  
}
