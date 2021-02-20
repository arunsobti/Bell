import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from 'src/app/_modal';
import { SearchCustomerService} from '../../../services/search-customer.service'


@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.scss']
})
export class SearchCustomerComponent implements OnInit {

  searchForm = new FormGroup ({});

  private initialize() {

    this.searchForm = new FormGroup ({
      accountNumber: new FormControl(""),
      MASTNAC: new FormControl(""),
      customerNumber: new FormControl(""),
      CRDDST: new FormControl(""),
      action: new FormControl(""),
      workflow: new FormControl(""),
      agency: new FormControl(""),
      province: new FormControl(""),
      agent: new FormControl(""),
      goldenKeyName: new FormControl(""),
      goldenKeyNumber: new FormControl(""),
      subBusinessUnit: new FormControl("")
      });  
  }

  constructor(public searchCustomerService: SearchCustomerService, public modalSerivce: ModalService) { 

    this.initialize();
  }

  ngOnInit() {
  }

  search() {

    this.searchCustomerService.search(this.searchForm);
  }


}
