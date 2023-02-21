import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Cart } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {

  @Input()
  cart!: Cart;

  @Output() increaseQuantity: EventEmitter<void> = new EventEmitter();
  @Output() decreaseQuantity: EventEmitter<void> = new EventEmitter();
  @Output() deleteCart: EventEmitter<void> = new EventEmitter();


  constructor(private cartService: CartService){}

  onQuantityIncrease() {
    this.increaseQuantity.emit()
  }

  onQuantityDecrease() {
    this.increaseQuantity.emit()
  }

  onDeleteItem() {
    this.deleteCart.emit();
  }

  getProductName(productId: string): string {
    return this.cartService.getProductName(productId);
  }

}
