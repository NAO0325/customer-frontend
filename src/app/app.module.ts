import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomertypeComponent } from './components/add-customertype/add-customertype.component';
import { CustomertypeDetailsComponent } from './components/customertype-details/customertype-details.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomertypeListComponent } from './components/customertype-list/customertype-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomertypeComponent,
    CustomertypeDetailsComponent,
    CustomertypeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
