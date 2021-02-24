import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bell Collection Tool';

  constructor(
    private router: Router, 
    private translate: TranslateService){

  }

  ngOnInit(){
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}
