import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service'
import { IssueComponent } from 'src/app/issue/issue.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  isShowDiv = false;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
  
  constructor(private service:SharedService) { }

  @Input() customer:any;
  @Input() CustomerList:any=[];

  expandCustomerBody: boolean = true;

  ngOnInit(): void {
    this.getCustomerList();
  }


  getCustomerList() {
    this.service.getCustomerList().subscribe(data =>{
      this.CustomerList=data;
    });

  }

  showHide(section :string, e:Event){
    e.preventDefault();
    if(section === 'customerDataBody'){
      this.expandCustomerBody = !this.expandCustomerBody;
    }
  }
}
