import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css']
})
export class SubNavComponent implements OnInit {

  enableAccount: boolean = false;
  enableAdmin: boolean = false;
  constructor() { }

  @Input() submenu: string = "";
  ngOnInit(): void {

    this.enableAccount = (this.submenu === 'account');
    this.enableAdmin = (this.submenu === 'admin');
  }

}
