import { Component, OnInit } from '@angular/core';
import { Customertype } from 'src/app/models/customertype.model';
import { CustomertypeService } from 'src/app/services/customertype.service';

@Component({
  selector: 'app-customertype-list',
  templateUrl: './customertype-list.component.html',
  styleUrls: ['./customertype-list.component.css']
})
export class CustomertypeListComponent implements OnInit {

  types?: Customertype[];
  currentType?: Customertype;
  currentIndex = -1;

  constructor(private customerTypeService: CustomertypeService) { }

  ngOnInit(): void {
    this.retrieveTypes();
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

  refreshList(): void {
    this.retrieveTypes();
    this.currentType = undefined;
    this.currentIndex = -1;
  }

  setActiveType(type: Customertype, index: number): void {
    this.currentType = type;
    this.currentIndex = index;
  }

}
