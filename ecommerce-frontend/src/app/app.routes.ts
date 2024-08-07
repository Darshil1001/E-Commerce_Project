import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

export const routes: Routes = [
  { path: '', component: ItemCategoryComponent },
  { path: ':categoryId/products', component: ProductListComponent },
  { path: ':productId/productDetail', component: ProductDetailComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'admin-login', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
