import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { Customertype } from 'src/app/models/customertype.model';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomertypeService } from 'src/app/services/customertype.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  types?: Customertype[];
  customers?: Customer[];
  currentCustomer?: Customer;
  currentIndex = -1;

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomertypeService) { }

  ngOnInit(): void {
    this.retrieveTypes();
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.customerService.getAll()
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = undefined;
    this.currentIndex = -1;
  }

  setActiveCustomer(type: Customer, index: number): void {
    this.currentCustomer = type;
    this.currentIndex = index;
  }

  retrieveTypes(): void {
    this.customerTypeService.getAll()
      .subscribe(
        data => {
          this.types = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  nameType(idtype: number): any {
    let name: String = '';
    if (this.types) {
      for (let i = 0; i < this.types.length; i++) {
        if(this.types[i].idtype === idtype){
           return this.types[i].typeName;
        }
      }
    }
    return name;
  }

}
