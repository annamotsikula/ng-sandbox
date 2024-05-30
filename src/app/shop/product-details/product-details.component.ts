import { Component, inject } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ProductService } from '../../helpers/services/product.service';
import { Product } from '../../helpers/interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  product: Product | undefined

  ngOnInit() {
    const routeParam: string = this.route.snapshot.params['id'];
    this.product = this.productService.getProductById(Number(routeParam));

    
    // const routeParamId = this._routeSnapshnot.params['id']

  }
}
