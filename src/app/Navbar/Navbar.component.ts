import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  enableAdmin:boolean = false;
  enableAccount:boolean = true;
  langCode: string;
  submenu: string = ""; 
  showChildItems:boolean = false;

  constructor(public translate: TranslateService) {
    this.langCode = translate.currentLang;
   
   }

  ngOnInit() {
    this.submenu = "admin";
    this.enableAdmin = true;
    this.enableAccount = false;
  }

  toggleChildMenu(e: Event){
    e.preventDefault();
    this.showChildItems = !(this.showChildItems) ;
  }
}
