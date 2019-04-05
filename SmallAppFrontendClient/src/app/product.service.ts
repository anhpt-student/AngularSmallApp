import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = '/api/products';

  constructor(private http: HttpClient) { }

  getProduct(nid: number): Observable<Object> {
    // return this.http.get(`${this.baseUrl}/${nid}`);
    return this.http.get(`${this.baseUrl}/${nid}`);
  }

  createProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  // updateProduct(nid: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${nid}`, value);
  // }

  deleteProduct(nid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${nid}`, { responseType: 'text' });
  }

  getProductsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}