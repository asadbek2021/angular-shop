import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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


  constructor(private cartService: CartService){}

  getProductName(productId: string): string {
   return this.cartService.getProductName(productId);
  }

}
