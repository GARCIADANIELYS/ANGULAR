import { ProductI } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public apiUrl: string = "https://648acc3a17f1536d65e9b4a7.mockapi.io/api/project/products/";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>(`${this.apiUrl}`);
  }

  public getProductsDetail(id: string): Observable<ProductI> {
   return this.http.get<ProductI>(`${this.apiUrl}${id}`)
  }
}