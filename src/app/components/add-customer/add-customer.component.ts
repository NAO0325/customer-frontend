import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { Customertype } from 'src/app/models/customertype.model';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomertypeService } from 'src/app/services/customertype.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  types?: Customertype[];
  customer: Customer = {
    idtype: 0,
    dni: '',
    customerName: '',
    contact: '',
    region: ''
  };
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomertypeService) { }

  ngOnInit(): void {
    this.retrieveTypes();
  }

  saveCustomer(): void {
    this.customerService.create(this.customer)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = {
      idtype: 0,
      dni: '',
      customerName: '',
      contact: '',
      region: ''
    };
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

}
