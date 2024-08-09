import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { ItemCategoryService } from './item-category/item-category.service';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCategoryComponent,
    ProductListComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [ItemCategoryService, provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }
