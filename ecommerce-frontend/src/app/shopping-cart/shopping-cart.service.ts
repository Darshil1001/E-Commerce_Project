import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';
import { CartItem } from '../cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Product): void {
    const item = this.cartItems.find(p => p.id === product.id);
    if (item) {
      item.quantity += 1;
    } else {
      this.cartItems.push(new CartItem(product));
    }
    this.cartItemsSubject.next(this.cartItems);
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(p => p.id !== productId);
    this.cartItemsSubject.next(this.cartItems);
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(p => p.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity === 0) {
        this.removeFromCart(productId);
      } else {
        this.cartItemsSubject.next(this.cartItems);
      }
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }
}
