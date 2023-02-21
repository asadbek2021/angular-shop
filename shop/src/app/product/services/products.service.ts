import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../model/product.model';

const products: Product[]=[
  {
    id: '1',
    name: "2E Gaming HyperDrive Lite Wireless, Black",
    description: "Sensor - PixArt3325, Dpi max - 10000",
    price: 44,
    category: ProductCategory.Mouses,
    isAvailable: true,
  },
  {
    id: '2',
    name: "2E Gaming HyperSpeed Lite Wireless, RGB Black",
    description: "Sensor - PixArtPWM3325, Dpi max - 7600",
    price: 43,
    category: ProductCategory.Mouses,
    isAvailable: false,
  },
  {
    id: '3',
    name: "AOURUS M3",
    description: "Sensor - PixArtPWM3988, Dpi max - 6400",
    price: 37,
    category: ProductCategory.Mouses,
    isAvailable: true,
  },
  {
    id: '4',
    name: "HyperX Alloy Origins 60 Pink [HyperX Red Linear]",
    description: "Type - mechanical, switch - red linear",
    price: 110,
    category: ProductCategory.Keyboards,
    isAvailable: true
  },
  {
    id: '5',
    name: "Keychron C1 RGB Hot-Swap, Gateron Red [C1H1]",
    description: "Type - mechanical, switch - gateron red",
    price: 85,
    category: ProductCategory.Keyboards,
    isAvailable: true
  },
  {
    id:'6',
    name: "Asus ROG Delta Core",
    description: "Connection type - wired mini-Jack 3.5mm",
    price: 101,
    category: ProductCategory.HeadPhones,
    isAvailable: false
  },
  {
    id: '7',
    name: "LENRUE Computer Speakers",
    description: "Connection type - wired usb-c",
    price: 19,
    category: ProductCategory.Speakers,
    isAvailable: true
  },
  {
    id: '8',
    name: "Aorus FI32Q",
    description: "Type - IPS, resolution: 2560x1440, Max fps - 165Hz",
    price: 1000,
    category: ProductCategory.Monitors,
    isAvailable: true
  },
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return products;
  }

  getProduct(productId: string): Product {
    return this.getProducts().find(product => product.id === productId)!;
  }

}
