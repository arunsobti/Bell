import { Component, Input, Output, OnInit  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService} from '../../services/search.service'

import { ModuleRegistry, GridApi} from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';


ModuleRegistry.registerModules([ClientSideRowModelModule]);


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
 
  columnDefs = [
    { field: 'userID', headerName: 'User ID', sortable: true, filter: true, checkboxSelection: false },
    { field: 'PEIN', headerName: 'PEIN', sortable: true, filter: true },
    { field: 'firstName', headerName: 'First Name', sortable: true, filter: true },
    { field: 'lastName', headerName: 'Last Name', sortable: true, filter: true },
    { field: 'manager', headerName: 'Manager', sortable: true, filter: true },
    { field: 'role', headerName: 'Role', sortable: true, filter: true }
  ];


  rowData: string[] = [];
  defaultColDef = {};
  pageSize = 5;
  rowSelection;
  rowGroupPanelShow;
 
  constructor(public searchService: SearchService) { 

    this.defaultColDef = {
      editable: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    };
    
    this.rowSelection = 'multiple';
    this.rowGroupPanelShow = 'always';
  }

onGridReady = (params: Event) => {

  //  this.api = params.api;
  //this.columnApi = params.columnApi;

}
  ngOnInit() {
  }

  search() {
//    console.log( this.searchForm.controls["userID"].value);
//    console.log( this.searchForm.value.userID);
    this.rowData = this.searchService.search(this.searchForm);

  }


}
