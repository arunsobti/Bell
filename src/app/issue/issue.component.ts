import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IssueService} from '../../services/issue.service'
import {ActivatedRoute} from '@angular/router';
import { SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  private customerId: string = "";
  private today = new Date();
  @Input() customerIssues:any;
  @Input() CustomerIssuesList:any=[];
  
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

  constructor(private service:SharedService, public issueService: IssueService, private route: ActivatedRoute) { 
  }
  
  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.customerId = params['customerId']
      this.issueForm.value.customerId = this.customerId;
    });

    this.getCustomerIssuesList();

    if (this.customerId == null) {

      console.log ('error customerId should not be null');
      return;
    }
    // this.search(customerId);
  }

  getCustomerIssuesList() {
    this.service.getCustomerList().subscribe(data =>{
      this.CustomerIssuesList=data;
    });
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

  open(modal: string) {

    let modalElement = document.getElementById(modal);

    if(modalElement != null) {

      modalElement.style.display = "block";
    }
  }

  close(modal: string) {

  }
}
