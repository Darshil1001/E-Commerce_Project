import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from '../cart-item';

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
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.shoppingCartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.updateCartDisplay();
    });
  }

  updateCartDisplay(): void {
    const cartItemsContainer = this.elementRef.nativeElement.querySelector('#cart-items-container');
    const emptyCartAlert = this.elementRef.nativeElement.querySelector('#empty-cart-alert');
    const clearCartButton = this.elementRef.nativeElement.querySelector('#clear-cart-button');

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
    } else {
      if (emptyCartAlert) {
        this.renderer.setStyle(emptyCartAlert, 'display', 'none');
      }
      if (clearCartButton) {
        this.renderer.setStyle(clearCartButton, 'display', 'block');
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

          const cardContent = `
            <div>
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text"><strong>Price:</strong> ${item.price}$</p>
              <p class="card-text">
                <strong>Quantity:</strong>
                <input type="number" value="${item.quantity}" min="0" class="form-control d-inline-block" style="width: 60px;" onchange="updateQuantity(${item.id}, this.value)">
              </p>
            </div>
          `;

          this.renderer.setProperty(cardBody, 'innerHTML', cardContent);

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
    this.shoppingCartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number): void {
    this.shoppingCartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.shoppingCartService.clearCart();
  }
}
