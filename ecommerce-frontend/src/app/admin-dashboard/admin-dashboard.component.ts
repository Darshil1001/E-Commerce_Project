import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemCategoryService } from '../item-category/item-category.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private http: HttpClient, private categoryService: ItemCategoryService) { }

  ngOnInit(): void {
    this.setupEventListeners();
    this.loadCategories();
  }

  setupEventListeners() {
    const categoryBtn = document.getElementById('category-btn');
    const itemBtn = document.getElementById('item-btn');
    const categorySection = document.getElementById('category-section');
    const itemSection = document.getElementById('item-section');

    if (categoryBtn && itemBtn && categorySection && itemSection) {
      categoryBtn.addEventListener('click', () => {
        categorySection.style.display = 'block';
        itemSection.style.display = 'none';
      });

      itemBtn.addEventListener('click', () => {
        itemSection.style.display = 'block';
        categorySection.style.display = 'none';
      });
    }

    const createCategoryForm = document.getElementById('create-category-form');
    if (createCategoryForm) {
      createCategoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const categoryName = (<HTMLInputElement>document.getElementById('category-name')).value;
        this.createCategory(categoryName);
      });
    }

    const updateCategoryForm = document.getElementById('update-category-form');
    if (updateCategoryForm) {
      updateCategoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const categoryId = parseInt((<HTMLInputElement>document.getElementById('update-category-id')).value, 10);
        const categoryName = (<HTMLInputElement>document.getElementById('update-category-name')).value;
        this.updateCategory(categoryId, categoryName);
      });
    }

    const deleteCategoryForm = document.getElementById('delete-category-form');
    if (deleteCategoryForm) {
      deleteCategoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const categoryId = parseInt((<HTMLInputElement>document.getElementById('delete-category-id')).value, 10);
        this.deleteCategory(categoryId);
      });
    }
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe(categories => {
      const categoryList = document.getElementById('category-list')?.getElementsByTagName('ul')[0];
      if (categoryList) {
        categoryList.innerHTML = '';
        categories.forEach(category => {
          const li = document.createElement('li');
          li.className = 'list-group-item';
          li.textContent = `ID: ${category.id}, Name: ${category.name}`;
          categoryList.appendChild(li);
        });
      }
    });
  }

  createCategory(name: string) {
    const category = { name } as Category;
    this.categoryService.createCategory(category).subscribe(() => {
      this.loadCategories();
      alert('Category created successfully!');
    });
  }

  updateCategory(id: number, name: string) {
    const category = { id, name } as Category;
    this.categoryService.updateCategory(category).subscribe(() => {
      this.loadCategories();
      alert('Category updated successfully!');
    });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.loadCategories();
      alert('Category deleted successfully!');
    });
  }

  
}
