import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../models/customer.model';
import { Customertype } from '../models/customertype.model';

const baseUrl = 'http://localhost:9090/api/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customertype[]>(baseUrl + '/listAll');
  }

  get(id: any): Observable<Customer> {
    const params = new HttpParams()
      .set('id', id);
      return this.http.post(baseUrl + '/findById', params).pipe(
        map(response => response as Customer)
      );
  }

  create(customertype: Customer): Observable<any> {
    return this.http.post(baseUrl + '/insert', customertype);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.post(baseUrl + '/update', data);
  }

  delete(id: any): Observable<any> {
    const params = new HttpParams()
      .set('id', id);
      return this.http.post(baseUrl + '/deleteById', params).pipe(
        map(response => response as Customer)
      );
  }
}
