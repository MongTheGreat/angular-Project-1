import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from './product';
import{catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class ProductServiceService {

  private prodcutUrl = 'api/products/products.json';
  constructor(private http: HttpClient) { }
  getProdcust(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.prodcutUrl).pipe(
                tap(data=> console.log('All: ' + JSON.stringify(data)))
                catchError(this.handleError)


    );
   
  }
  private handleError(err: HttpErrorResponse){

}