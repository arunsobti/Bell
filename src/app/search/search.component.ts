import { Component, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchService} from '../../services/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup ({
    userID: new FormControl(""),
    PEIN: new FormControl(""),
    firstName: new FormControl(""),
    lastName: new FormControl("")
    });

  constructor(public searchService: SearchService) { 
  }

  ngOnInit() {
  }

  search() {
//    console.log( this.searchForm.controls["userID"].value);
//    console.log( this.searchForm.value.userID);
    this.searchService.search(this.searchForm);

  }


}
