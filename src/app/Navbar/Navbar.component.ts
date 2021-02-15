import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {

  enableAdmin = false;
  enableAccount = true;

  constructor() { }

  ngOnInit() {
  }

}
