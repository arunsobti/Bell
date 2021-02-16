import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
  

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLang(e: Event){
    e.preventDefault();
    console.log("Change language event fired");
    const curLang = this.translate.currentLang;
    this.translate.use(curLang === 'en' ? 'fr' : 'en');
  }
}
