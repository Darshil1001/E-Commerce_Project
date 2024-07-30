import { Product } from './product';

export class CartItem extends Product {
  quantity: number;

  constructor(product: Product, quantity: number = 1) {
    super(product.id, product.name, product.price, product.imgUrl, product.description);
    this.quantity = quantity;
  }
}
