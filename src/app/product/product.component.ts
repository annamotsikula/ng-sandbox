import { Component, Input } from '@angular/core';
import { Product } from '../helpers/interfaces/product.interface';
import { CategoryEnum } from '../helpers/interfaces/product.enum';
import { ProductService } from '../helpers/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  productCategoryEnum = CategoryEnum;

  addIcon() {
    console.log(this.product)
    switch (this.product.category) {
      case CategoryEnum.GROCERY:
        return 'bi-shop'
      case CategoryEnum.HOME_DECOR:
        return 'bi-house';
      case CategoryEnum.SMARTPHONE:
        return 'bi-phone-fill'
      default:
        return ''
    }

  }


}
