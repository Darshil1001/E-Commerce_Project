import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: ItemCategoryComponent },
  { path: ':categoryId/products', component: ProductListComponent },
  { path: ':productId/productDetail', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
