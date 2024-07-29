import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';
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

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${productId}/productDetail`);
  //   return this.http.get<Product>(`${this.apiUrl}/${productId}/productDetail`)
  //   .pipe(
  //     tap(
  //       product => console.log('Product details received:', product),
  //       error => console.error('Error fetching product details:', error)
  //     ),
  //     catchError(error => {
  //       console.error('Error in getProductById:', error);
  //       throw error;
  //     })
  //   );
  }

}
