import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit{

  carts!: Cart[];
  totalCost: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService){}

  ngOnInit() {
    this.carts = this.cartService.getCarts();
    this.totalCost = this.cartService.totalCost;
    this.totalQuantity = this.cartService.totalQuantity;
  }


  tracByCarts(_: number, item: Cart) {
    return item.id;
  }

}
