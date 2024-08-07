import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from '../cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.shoppingCartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.updateCartDisplay();
    });

    // Add event listeners for buttons
    const clearCartButton = this.elementRef.nativeElement.querySelector('#clear-cart-button');
    const checkoutButton = this.elementRef.nativeElement.querySelector('#checkout-button');

    if (clearCartButton) {
      this.renderer.listen(clearCartButton, 'click', () => this.clearCart());
    }

    if (checkoutButton) {
      this.renderer.listen(checkoutButton, 'click', () => this.checkout());
    }
  }

  updateCartDisplay(): void {
    const cartItemsContainer = this.elementRef.nativeElement.querySelector('#cart-items-container');
    const emptyCartAlert = this.elementRef.nativeElement.querySelector('#empty-cart-alert');
    const clearCartButton = this.elementRef.nativeElement.querySelector('#clear-cart-button');
    const checkoutButton = this.elementRef.nativeElement.querySelector('#checkout-button');

    // Clear existing items
    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = '';
    }

    if (this.cartItems.length === 0) {
      if (emptyCartAlert) {
        this.renderer.setStyle(emptyCartAlert, 'display', 'block');
      }
      if (clearCartButton) {
        this.renderer.setStyle(clearCartButton, 'display', 'none');
      }
      if (checkoutButton) {
        this.renderer.setStyle(checkoutButton, 'display', 'none');
      }
    } else {
      if (emptyCartAlert) {
        this.renderer.setStyle(emptyCartAlert, 'display', 'none');
      }
      if (clearCartButton) {
        this.renderer.setStyle(clearCartButton, 'display', 'block');
      }
      if (checkoutButton) {
        this.renderer.setStyle(checkoutButton, 'display', 'block');
      }

      this.cartItems.forEach(item => {
        if (cartItemsContainer) {
          const card = this.renderer.createElement('div');
          this.renderer.addClass(card, 'card');
          this.renderer.addClass(card, 'mb-3');

          const cardBody = this.renderer.createElement('div');
          this.renderer.addClass(cardBody, 'card-body');
          this.renderer.addClass(cardBody, 'd-flex');
          this.renderer.addClass(cardBody, 'justify-content-between');
          this.renderer.addClass(cardBody, 'align-items-center');

          const cardTitle = this.renderer.createElement('h5');
          this.renderer.addClass(cardTitle, 'card-title');
          this.renderer.setProperty(cardTitle, 'innerText', item.name);

          const cardPrice = this.renderer.createElement('p');
          this.renderer.addClass(cardPrice, 'card-text');
          this.renderer.setProperty(cardPrice, 'innerText', `Price: ${item.price}$`);

          const quantityContainer = this.renderer.createElement('p');
          this.renderer.addClass(quantityContainer, 'card-text');
          this.renderer.addClass(quantityContainer, 'quantity-container');

          const quantityLabel = this.renderer.createElement('strong');
          this.renderer.setProperty(quantityLabel, 'innerText', 'Quantity:');
          this.renderer.addClass(quantityLabel, 'quantity-label');
          this.renderer.appendChild(quantityContainer, quantityLabel);

          const quantityInput = this.renderer.createElement('input');
          this.renderer.setProperty(quantityInput, 'type', 'number');
          this.renderer.setProperty(quantityInput, 'value', item.quantity);
          this.renderer.setProperty(quantityInput, 'min', 0);
          this.renderer.addClass(quantityInput, 'form-control');
          this.renderer.addClass(quantityInput, 'd-inline-block');
          this.renderer.setStyle(quantityInput, 'width', '60px');
          this.renderer.listen(quantityInput, 'change', (event: any) => this.updateQuantity(item.id, event.target.value));

          this.renderer.appendChild(quantityContainer, quantityInput);
          this.renderer.appendChild(cardBody, cardTitle);
          this.renderer.appendChild(cardBody, cardPrice);
          this.renderer.appendChild(cardBody, quantityContainer);

          const removeButton = this.renderer.createElement('button');
          this.renderer.addClass(removeButton, 'btn');
          this.renderer.addClass(removeButton, 'btn-danger');
          this.renderer.setProperty(removeButton, 'innerText', 'Remove');
          this.renderer.listen(removeButton, 'click', () => this.removeItem(item.id));

          this.renderer.appendChild(cardBody, removeButton);
          this.renderer.appendChild(card, cardBody);
          this.renderer.appendChild(cartItemsContainer, card);
        }
      });
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(p => p.id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity === 0) {
        this.removeItem(productId);
      } else {
        this.shoppingCartService.updateQuantity(productId, quantity);
      }
    }
  }

  removeItem(productId: number): void {
    this.shoppingCartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.shoppingCartService.clearCart();
  }

  checkout(): void {
    this.router.navigate(['/checkout']);
  }
}
