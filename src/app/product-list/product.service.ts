import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ProductService {

  
   private productUrl = 'api/products/products.json';

   constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<IProduct[]>(this.productUrl);
  }

}