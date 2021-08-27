import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomertypeListComponent } from './components/customertype-list/customertype-list.component';
import { CustomertypeDetailsComponent } from './components/customertype-details/customertype-details.component';
import { AddCustomertypeComponent } from './components/add-customertype/add-customertype.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

const routes: Routes = [
  { path: '', redirectTo: 'customertype', pathMatch: 'full' },
  { path: 'customertype', component: CustomertypeListComponent },
  { path: 'customertype/:id', component: CustomertypeDetailsComponent },
  { path: 'add', component: AddCustomertypeComponent },
  { path: 'customer', component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerDetailsComponent },
  { path: 'addcustomer', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
