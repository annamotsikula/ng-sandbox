import { Component, inject } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { ProductService } from '../../helpers/services/product.service';
import { Product, ProductImage } from '../../helpers/interfaces/product.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  product: Product | undefined;

  images: ProductImage[] = []

  ngOnInit() {
    this.product = this.route.snapshot.data['singleProduct'];
    if(this.product) {
      this.images = this.product.images.map((i, index) => {
                if (index === 0) {
                  return { src: i, selected: true }
                } else {
                  return { src: i, selected: false }
                }
              });
    }
  }

  setThumbnail(image: ProductImage) {
    console.log(image)
    // if(this.initialImage === image.src) {
    //   return
    // }
    this.images.forEach(i => i.selected = false);
    image.selected = true


  }

  onhover(img: ProductImage) {
    this.setThumbnail(img)
  }
}
