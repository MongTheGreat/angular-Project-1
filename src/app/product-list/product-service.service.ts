import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from './product';

@Injectable({
  providedIn:'root'
})
export class ProductServiceService {

  private prodcutUrl = 'api/products/products.json';
  constructor(private http: HttpClient) { }
  getProdcust(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.prodcutUrl);
  }
  

}