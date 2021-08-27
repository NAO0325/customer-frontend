import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customertype } from '../models/customertype.model';

const baseUrl = 'http://localhost:9090/api/customertype';

@Injectable({
  providedIn: 'root'
})
export class CustomertypeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customertype[]> {
    return this.http.get<Customertype[]>(baseUrl + '/listAll');
  }

  get(id: any): Observable<Customertype> {
    const params = new HttpParams()
      .set('id', id);
      return this.http.post(baseUrl + '/findById', params).pipe(
        map(response => response as Customertype)
      );
  }

  create(customertype: Customertype): Observable<any> {
    return this.http.post(baseUrl + '/insert', customertype);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.post(baseUrl + '/update', data);
  }

  delete(id: any): Observable<any> {
    const params = new HttpParams()
      .set('id', id);
      return this.http.post(baseUrl + '/deleteById', params).pipe(
        map(response => response as Customertype)
      );
  }
}
