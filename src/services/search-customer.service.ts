import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class SearchCustomerService {
public result:any  = [];
private data = [
  {"accountNumber":"1133224433", "MASTNAC":"", "customerNumber":"","CRDDST":"","action":"2020-07-19","workflow":"DD","agency":"","province":"","agent":"Arun Sobti","goldenKeyName":"","goldenKeyNumber":"","subBusinessUnit":"","customerName":"Dilawri Automobiles", "suspectAmount":"16428.26", "balanceDue":"16428.26"}
];



  search(searchForm: FormGroup) {

    this.reset();

    for(var i = 0; i < this.data.length; i++)
    {
        this.result.push(this.data[i]);
    }
  //  return this.result;
  }

  reset() {
    this.result = [];
  }
}
