import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class IssueService {

  public result:any  = [];
  private data = [
    {"customerId":"cs001", "creationDate": "2019-01-31", "trackingDate":"2019-01-31", "amount": "1426.85", "updatedBy": "ez60088"},
    {"customerId":"cs001", "creationDate": "2018-07-14", "trackingDate":"2018-07-27", "amount": "223.56", "updatedBy": "ez60088"},
  ];

  search(customerId: string) {

    this.reset();

    for(var i = 0; i < this.data.length; i++)
    {
      if (customerId != '' && this.data[i].customerId == customerId)
      {
        this.result.push(this.data[i]);
      }
    }
  }

  reset() {
    this.result = [];
  }
}
