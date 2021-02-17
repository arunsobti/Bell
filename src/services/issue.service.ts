import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class IssueService {

  public show: boolean = false;
  public result:any  = [];
  private data = [
    {"recordId": "1", "customerId":"cs001", "creationDate": "2019-01-31", "trackingDate":"2019-01-31", "amount": "1426.85", "updatedBy": "ez60088", "issue": "this is a test", "status": "Pending"},
    {"recordId": "2", "customerId":"cs001", "creationDate": "2018-07-14", "trackingDate":"2018-07-27", "amount": "223.56", "updatedBy": "ez60088", "issue": "this is a test", "status": "Pending"},
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

    this.reload();
  }

  reload() {
    this.show = false;
    setTimeout(() => this.show = true);
  }

  reset() {
    this.result = [];
  }

  save(issueForm: FormGroup) {

    let recordId = issueForm.value.recordId;
    let customerId = issueForm.value.customerId;
    let issue = issueForm.value.issue;
    let creationDate = issueForm.value.creationDate;
    let issueTrackingDate = issueForm.value.issueTrackingDate;
    let status = issueForm.value.status;
    let amount = issueForm.value.amount;
    let updatedBy = issueForm.value.updatedBy;
    let remark = issueForm.value.remark;

    this.data.push(issueForm.value);
    this.search(customerId );

    /*
    // newRecord: string[]  = [];
    // this.newRecord = issueForm.valueChanges;
    let record = this.data.find(x => x.recordId === recordId);
    // let index = this.data.indexOf(this.rec

    if (record != null && record?.recordId == recordId) {
      this.data[1] = issueForm.value;
    }
    */

  }

}
