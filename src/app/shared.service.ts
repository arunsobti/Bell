import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 readonly  APIUrl= 'http://localhost:4200/api';

  constructor(private http:HttpClient) { }

  // LIST CUSTOMER(s)
  getCustomerList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/customer/1') ;
    //return this.http.get<any>(this.APIUrl + '/customer'); <-- should be this, but we're hardoding for demo
  }

  // GET CUSTOMER
  getCustomer(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/customer/1');
  }
  // SAVE CUSTOMER
  addCustomer(val: any) {
    return this.http.post(this.APIUrl + '/customer', val);
  }

  //PATCH (update) customer
  updateCustomer(val: any) {
    return this.http.patch(this.APIUrl + '/customer', val);
  }

}
