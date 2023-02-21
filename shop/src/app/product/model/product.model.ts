export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
}

export enum ProductCategory {
  Laptops="Laptops",
  Mouses="Mouses",
  Keyboards="Keyboards",
  Speakers="Speakers",
  HeadPhones="HeadPhones",
  Monitors="Monitors"
}
