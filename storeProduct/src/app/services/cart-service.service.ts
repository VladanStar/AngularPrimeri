import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
private items:Product[]= [];
  constructor() { }

  public addToCart(product: Product): void {
     this.items.push(product);
     }

     public getItems(): Product[] {
     return this.items;
     }

     public clearCart(): Product[] {
       this.items = [];
       return this.items;
      }
}
