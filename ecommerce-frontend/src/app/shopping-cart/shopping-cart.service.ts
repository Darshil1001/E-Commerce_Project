import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';
import { CartItem } from '../cart-item';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  private STORAGE_KEY = 'cartItems';

  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadCartFromSession();
  }

  addToCart(product: Product): void {
    const item = this.cartItems.find(p => p.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToSession();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(p => p.id !== productId);
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToSession();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(p => p.id === productId);
    if (item) {
      item.quantity = quantity;
    }
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToSession();
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartToSession();
  }

  private loadCartFromSession(): void {
    if (isPlatformBrowser(this.platformId)) {
      const storedCart = sessionStorage.getItem(this.STORAGE_KEY);
      if (storedCart) {
        this.cartItems = JSON.parse(storedCart);
        this.cartItems.forEach(item => {
          const storedQuantity = sessionStorage.getItem(`${this.STORAGE_KEY}_${item.id}`);
          if (storedQuantity) {
            item.quantity = parseInt(storedQuantity, 10);
          }
        });
        this.cartItemsSubject.next(this.cartItems);
      }
    }
  }

  private saveCartToSession(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cartItems));
    }
  }
}