import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IssueService} from '../../services/issue.service'
import { ModalService } from '../_modal';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  private customerId: string = "";
  private today = new Date();

  issueForm = new FormGroup ({
    recordId: new FormControl(""),
    customerId: new FormControl(""),
    issue: new FormControl(""),
    creationDate: new FormControl(this.formatDate()),
    trackingDate: new FormControl(this.formatDate()),
    status: new FormControl(""),
    amount: new FormControl(""),
    updatedBy: new FormControl("ez001"),
    remark: new FormControl("")
  });


  private formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

  constructor(public modalService: ModalService, public issueService: IssueService, private route: ActivatedRoute) { 
  }
  
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.customerId = params['customerId']
      this.issueForm.value.customerId = this.customerId;
    });

    

    if (this.customerId == null) {

      console.log ('error customerId should not be null');
      return;
    }
    // this.search(customerId);
  }

  
  search() {
    if (this.customerId == null) {

      console.log ('error customerId should not be null');
      return;
    }
    this.issueService.search(this.customerId);
  }

  save() {
    
    this.issueForm.value.customerId = this.customerId;
    this.issueService.save(this.issueForm);
  }

  isShowDiv = false;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  
}
