import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { ProductsService } from 'src/app/product/services/products.service';
import { Product } from 'src/app/product/model/product.model';

const carts: Cart[] = [
  {
    id: '1',
    productId: '2',
    productCount: 3
  },
  {
    id: '2',
    productId: '4',
    productCount: 4
  }
];

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts: Cart[] = carts;

  constructor(private productService: ProductsService) { }

  getCarts(): Cart[] {
    return this.carts.slice();
  }

  getProductName(productId: string): string {
    return this.productService.getProduct(productId).name;
  }

  addCart(product: Product) {
    const cart = this.carts.find(cart => cart.productId === product.id);
    if(cart != null) {
      const index = this.carts.findIndex(c => c.id === cart.id);
      this.carts[index] = {...cart, productCount: cart.productCount + 1};
      return;
    }

    const newCart: Cart = {
      id: `${this.carts.length + 1}`,
      productId: product.id,
      productCount: 1
    };
    this.carts.push(newCart);
    return;
  }
}
