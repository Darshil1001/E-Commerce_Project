import { Component, OnInit } from '@angular/core';
import { ItemCategoryService } from './item-category.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.css']
})
export class ItemCategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private itemCategoryService: ItemCategoryService) { }

  ngOnInit(): void {
    this.itemCategoryService.getAllCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }
}
