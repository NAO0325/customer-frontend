import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Customertype } from 'src/app/models/customertype.model';
import { CustomerService } from 'src/app/services/customer.service';
import { CustomertypeService } from 'src/app/services/customertype.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  types?: Customertype[];
  currentCustomer: Customer = {
    idtype: 0,
    dni: '',
    customerName: '',
    contact: '',
    region: ''
  };
  message = '';

  constructor(
    private customerService: CustomerService,
    private customerTypeService: CustomertypeService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.message = '';
    this.retrieveTypes();
    this.getCustomer(this.route.snapshot.params.id);
  }

  getCustomer(id: string): void {
    this.customerService.get(id)
      .subscribe(
        data => {
          this.currentCustomer = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCustomer(): void {
    this.customerService.update(this.currentCustomer.idcustomer, this.currentCustomer)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteCustomer(): void {
    this.customerService.delete(this.currentCustomer.idcustomer)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/customer']);
        },
        error => {
          console.log(error);
        });
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
