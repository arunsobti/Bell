import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IssueService} from '../../services/issue.service'
import { ModalService } from '../_modal';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  issueForm = new FormGroup ({
    issue: new FormControl(""),
    creationDate: new FormControl(""),
    issueTrackingDate: new FormControl(""),
    status: new FormControl(""),
    amount: new FormControl(""),
    updatedBy: new FormControl(""),
    remark: new FormControl("")
  });


  constructor(public modalService: ModalService, public issueService: IssueService) { 
  }
  
  ngOnInit() {
  }

  
  search(customerId: string) {
    //    console.log( this.searchForm.controls["userID"].value);
    //    console.log( this.searchForm.value.userID);
        this.issueService.search(customerId);
    
  }


}
