import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { SearchComponent } from './search/search.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchCustomerComponent } from './customer/search-customer/search-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SharedService} from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { UniversalTranslateLoader} from './shared/localization/universal-translate-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SubNavComponent } from './Navbar/sub-nav/sub-nav.component';
import { IssueComponent } from './issue/issue.component';
import { HeaderComponent } from './header/header.component';

import { AgGridModule } from "@ag-grid-community/angular";



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
      SearchCustomerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass:UniversalTranslateLoader
      }
    }),
    AgGridModule.withComponents([])
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
