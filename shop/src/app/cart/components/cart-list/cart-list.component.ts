import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnChanges {

  carts!: Cart[];

  constructor(private cartService: CartService){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit() {
    this.carts = this.cartService.getCarts();
  }


  tracByCarts(index: number, item: Cart) {
    return item.id;
  }

}
