import { Component, OnInit } from '@angular/core';
import { Customertype } from 'src/app/models/customertype.model';
import { CustomertypeService } from 'src/app/services/customertype.service';

@Component({
  selector: 'app-add-customertype',
  templateUrl: './add-customertype.component.html',
  styleUrls: ['./add-customertype.component.css']
})
export class AddCustomertypeComponent implements OnInit {

  customerType: Customertype = {
    typeName: ''
  };
  submitted = false;

  constructor(private customerTypeService: CustomertypeService) { }

  ngOnInit(): void {
  }

  saveCustomerType(): void {
    this.customerTypeService.create(this.customerType)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCustomerType(): void {
    this.submitted = false;
    this.customerType = {
      typeName: ''
    };
  }

}
