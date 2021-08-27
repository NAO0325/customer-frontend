import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customertype } from 'src/app/models/customertype.model';
import { CustomertypeService } from 'src/app/services/customertype.service';

@Component({
  selector: 'app-customertype-details',
  templateUrl: './customertype-details.component.html',
  styleUrls: ['./customertype-details.component.css']
})
export class CustomertypeDetailsComponent implements OnInit {

  currentType: Customertype = {
    typeName:''
  };
  message = '';

  constructor(
    private customertypeService: CustomertypeService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.message = '';
    this.getType(this.route.snapshot.params.id);
  }

  getType(id: string): void {
    this.customertypeService.get(id)
      .subscribe(
        data => {
          this.currentType = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateType(): void {
    this.customertypeService.update(this.currentType.idtype, this.currentType)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteType(): void {
    this.customertypeService.delete(this.currentType.idtype)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/customertype']);
        },
        error => {
          console.log(error);
        });
  }
}

