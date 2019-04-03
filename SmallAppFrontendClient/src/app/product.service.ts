import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/smallapp';
  constructor(private http: HttpClient) { }
  addProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/ProductForm`, product);
  }
  deleteProduct(nid: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${nid}`, { responseType: 'text' });
  }
  viewProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
