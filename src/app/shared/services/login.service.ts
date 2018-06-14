import { Customer } from '../../shared/models/Customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  
  customer = new Subject<boolean>();
  
  constructor(private http: HttpClient) { }
  
 login (){
    // return this.http.get<Customer>('../../../../assets/customers.json');
    return this.http.get<Customer>('https://9f8b4059-3407-44ca-9c4d-5807bb657cc9.mock.pstmn.io/customers');
}

 setCustomer(customer: boolean) {
  this.customer.next(customer);
}

 getCustomer(): Observable<boolean>{
    return this.customer.asObservable();
  }
}
