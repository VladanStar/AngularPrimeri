import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public items: Product[] = [];
  constructor(private cartService: CartServiceService) {
    this.items = this.cartService.getItems();
  }
  ngOnInit(): void {}
}
