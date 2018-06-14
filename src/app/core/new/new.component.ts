import { LoginService } from './../../shared/services/login.service';
import { Customer } from './../../shared/models/Customer';
import { Component} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { New } from '../../shared/models/New';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  
  customer: Observable<Customer> = new Observable<Customer>();
  subscription: Subscription;

  user: Customer;
  news: New[];


  constructor(private _ls: LoginService) {
   /*   this.subscription = _ls.getCustomer().subscribe((data) => {
        console.log("Subscriber got data >>>>> " + data);
      });*/
      this.user = JSON.parse(localStorage.getItem('user'));
      this.news = this.user.news;
   }
  
}
