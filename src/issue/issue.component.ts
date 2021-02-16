import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IssueService} from '../services/issue.service'
import { ModalService } from '../app/_modal';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

    constructor(public issueService: IssueService, public modalService: ModalService) { 
    }
  
  ngOnInit() {
  }

  
  search(customerId: string) {
    //    console.log( this.searchForm.controls["userID"].value);
    //    console.log( this.searchForm.value.userID);
        this.issueService.search(customerId);
    
  }
    

}
