import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 

import { ItemCategoryComponent } from './item-category.component';
import { ItemCategoryService } from './item-category.service';

@NgModule({
  declarations: [
    ItemCategoryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ItemCategoryService
  ],
  exports: [
    ItemCategoryComponent
  ]
})
export class ItemCategoryModule { }
