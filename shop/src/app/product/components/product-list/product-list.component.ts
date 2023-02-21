import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Product[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ){}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAddToCart(product: Product) {
    this.cartService.addCart(product);
  }


}
