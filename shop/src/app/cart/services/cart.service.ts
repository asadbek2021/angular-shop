import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { ProductsService } from 'src/app/product/services/products.service';
import { Product } from 'src/app/product/model/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  get totalCost(): number {
    return this.carts.reduce((total,cart) => {
      const product = this.productService.getProduct(cart.productId);
      return total + (product.price * cart.productCount);
    }, 0)
  };
  get totalQuantity(): number {
    return this.carts.reduce((total, cart)=> cart.productCount + total, 0);
  };

  private carts: Cart[] = [];


  constructor(private productService: ProductsService) { }

  getCarts(): Cart[] {
    return this.carts;
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
