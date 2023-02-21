import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  product!: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter();


  onAddToCart(){
    this.addToCart.emit(this.product);
  }

}
