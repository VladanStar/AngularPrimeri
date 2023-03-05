import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(product: Product[]): number {
    return product.map(p => p.price).reduceRight((acc, next) => acc + next);
     }

}
