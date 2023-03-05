import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
// import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../services/cart-service.service';

// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
})
export class ProductInfoComponent implements OnInit, OnDestroy {
   public product:any;
  public paramMapSub: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartServiceService)
  {

  }

  ngOnInit(): void {

    this.paramMapSub = this.route.paramMap.subscribe((params) => {
console.log(this.paramMapSub)
      const pId: number = Number(params.get('productId'));

      this.productService.getProducts().forEach((p) => {
console.log(this.product)
        if (p.productId === pId) {
          this.product = p;
        }
      });
    });
  }
ngOnDestroy(): void {
  if (this.paramMapSub !== null) {
    this.paramMapSub.unsubscribe();
    }
}

public addToCart() {
  this.cartService.addToCart(this.product);
   window.alert('Your product has been added to the cart!');
   }

}
