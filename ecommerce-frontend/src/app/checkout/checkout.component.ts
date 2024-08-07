import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.shoppingCartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.renderOrderSummary();
      this.togglePlaceOrderButton();
    });

    const checkoutForm = this.elementRef.nativeElement.querySelector('#checkout-form');
    if (checkoutForm) {
      this.renderer.listen(checkoutForm, 'submit', (event: any) => this.onSubmit(event));
    }
  }

  renderOrderSummary(): void {
    const container = this.elementRef.nativeElement.querySelector('#order-summary-container');
    if (container) {
      container.innerHTML = '';

      this.cartItems.forEach(item => {
        const summaryItem = this.renderer.createElement('div');
        this.renderer.setProperty(summaryItem, 'innerHTML', `${item.name} - ${item.quantity} x ${item.price}$`);
        this.renderer.appendChild(container, summaryItem);
      });

      const totalPrice = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      const totalElement = this.renderer.createElement('h4');
      this.renderer.setProperty(totalElement, 'innerText', `Total: ${totalPrice}$`);
      this.renderer.appendChild(container, totalElement);
    }
  }

  togglePlaceOrderButton(): void {
    const placeOrderButton = this.elementRef.nativeElement.querySelector('button[type="submit"]');
    if (this.cartItems.length === 0) {
      this.renderer.setStyle(placeOrderButton, 'display', 'none');
    } else {
      this.renderer.setStyle(placeOrderButton, 'display', 'block');
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    alert('Order placed successfully!');
    this.shoppingCartService.clearCart();
    this.togglePlaceOrderButton();
    // Optionally, navigate to a confirmation page
  }
}
