import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ProductService } from '../../helpers/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() btnClick : EventEmitter<void> = new EventEmitter<void>()
  service = inject(ProductService)


}
