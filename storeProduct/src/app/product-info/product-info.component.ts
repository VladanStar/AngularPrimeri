import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
// import { Product } from '../models/product.model';
import { ActivatedRoute } from '@angular/router';
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
    private productService: ProductService
  ) {

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
}
