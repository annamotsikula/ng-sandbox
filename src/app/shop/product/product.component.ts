import { Component, EventEmitter, Input, Output, inject, output } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ProductService } from '../../helpers/services/product.service';
import { CartService } from '../../helpers/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  // @Output() btnClick : EventEmitter<void> = new EventEmitter<void>();
  btnClick = output()
  service = inject(ProductService);

  addToCart() {
    this.btnClick.emit();
  }

}
