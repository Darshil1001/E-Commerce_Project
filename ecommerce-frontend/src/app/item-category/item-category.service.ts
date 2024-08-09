import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Category } from '../category.model';

@Injectable({
  providedIn: 'root'
})
export class ItemCategoryService {
  private apiUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  createCategory(category: Category) {
    return this.http.post(this.apiUrl+"/addCategory", category);
  }

  getCategory(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateCategory(category: Category) {
    return this.http.put(`${this.apiUrl}/${category.id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
}
