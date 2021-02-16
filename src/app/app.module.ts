import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { SearchComponent } from './search/search.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SharedService} from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { UniversalTranslateLoader} from './shared/localization/universal-translate-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SubNavComponent } from './Navbar/sub-nav/sub-nav.component';
import { IssueComponent } from '../issue/issue.component';
import { ModalModule } from './_modal';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [				
      AppComponent,
      TopbarComponent,
      NavbarComponent,
      SearchComponent,
      HomeComponent,
      CustomerComponent,
      IssueComponent,
      SubNavComponent,
      HeaderComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass:UniversalTranslateLoader
      }
    })
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
