import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../model/product.model';

const products: Product[]=[
  {
    name: "2E Gaming HyperDrive Lite Wireless, Black",
    description: "Sensor - PixArt3325, Dpi max - 10000",
    price: 44,
    category: ProductCategory.Mouses,
    isAvailable:true,
  },
  {
    name: "2E Gaming HyperSpeed Lite Wireless, RGB Black",
    description: "Sensor - PixArtPWM3325, Dpi max - 7600",
    price: 43,
    category: ProductCategory.Mouses,
    isAvailable:true,
  },
  {
    name: "AOURUS M3",
    description: "Sensor - PixArtPWM3988, Dpi max - 6400",
    price: 37,
    category: ProductCategory.Mouses,
    isAvailable:true,
  },
  {
    name: "HyperX Alloy Origins 60 Pink [HyperX Red Linear]",
    description: "Type - mechanical, switch - red linear",
    price: 110,
    category: ProductCategory.Keyboards,
    isAvailable: true
  },
  {
    name: "Keychron C1 RGB Hot-Swap, Gateron Red [C1H1]",
    description: "Type - mechanical, switch - gateron red",
    price: 85,
    category: ProductCategory.Keyboards,
    isAvailable: true
  },
  {
    name: "Asus ROG Delta Core",
    description: "Connection type - wired mini-Jack 3.5mm",
    price: 101,
    category: ProductCategory.HeadPhones,
    isAvailable: true
  },
  {
    name: "LENRUE Computer Speakers",
    description: "Connection type - wired usb-c",
    price: 19,
    category: ProductCategory.Speakers,
    isAvailable: true
  },
  {
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

}
