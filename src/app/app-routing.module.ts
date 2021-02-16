import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { IssueComponent } from '../issue/issue.component';
import { CustomerComponent} from './customer/customer.component';

const routes: Routes = [
  {path:'search', component:SearchComponent},
  {path:'issue', component:IssueComponent},
  {path:'customer', component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
