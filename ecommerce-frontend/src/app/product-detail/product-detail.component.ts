import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Product | undefined;
  productId: number | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = +params.get('productId')!;
      this.productService.getProductById(this.productId).subscribe(data => {
        this.product = data;
      });
    });
  }
}
