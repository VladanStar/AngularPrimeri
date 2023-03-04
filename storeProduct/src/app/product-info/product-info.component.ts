import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
  public products:Product[];

  constructor( private productService:ProductService){
  this.products=this.productService.getProducts();

  }
  ngOnInit(): void {

  }
}
