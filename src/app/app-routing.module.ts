import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomertypeListComponent } from './components/customertype-list/customertype-list.component';
import { CustomertypeDetailsComponent } from './components/customertype-details/customertype-details.component';
import { AddCustomertypeComponent } from './components/add-customertype/add-customertype.component';

const routes: Routes = [
  { path: '', redirectTo: 'customertype', pathMatch: 'full' },
  { path: 'customertype', component: CustomertypeListComponent },
  { path: 'customertype/:id', component: CustomertypeDetailsComponent },
  { path: 'add', component: AddCustomertypeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
