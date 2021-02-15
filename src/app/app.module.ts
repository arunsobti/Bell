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
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './Navbar/admin/admin.component';
import { AccountComponent } from './Navbar/account/account.component';

@NgModule({
  declarations: [			
    AppComponent,
      TopbarComponent,
      NavbarComponent,
      SearchComponent,
      HomeComponent,
      CustomerComponent,
      AdminComponent,
      AccountComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
