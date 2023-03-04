import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products: Product[];

  constructor() {
    this.products = [
      new Product(101, 'Iphone 13', 1200, 'large telephone in the world'),
      new Product(102, 'Iphone 12', 1000, 'medium telephone in the world'),
      new Product(103, 'Iphone 11', 1100, 'small telephone in the world'),
    ];
  }
  public getProducts(): Product[] {
    return this.products;
  }
}
