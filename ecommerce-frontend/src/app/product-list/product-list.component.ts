// src/app/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from '../product';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  product: Product | undefined;
  categoryId: number | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = +params.get('categoryId')!;
      this.productService.getProductsByCategory(this.categoryId).subscribe(data => {
        this.products = data;
      });
    });
  }

 
  addToCart(product: Product): void {
    this.shoppingCartService.addToCart(product);
    this.router.navigate(['/cart']);
  }
}
