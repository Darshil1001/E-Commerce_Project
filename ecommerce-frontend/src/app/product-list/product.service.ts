import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  getProductsByCategory(categoryId: number): Observable<any> {
    return this.http.get<Product[]>(`${this.apiUrl}/${categoryId}/products`);
  }
}
