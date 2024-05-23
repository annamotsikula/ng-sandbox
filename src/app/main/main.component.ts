import { Component } from '@angular/core';
import { Product } from '../helpers/interfaces/product.interface';
import { ProductService } from '../helpers/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  productList: Product[] = [];
  openForm: boolean = false
  constructor(public _productService: ProductService) {
    this.productList = this._productService.getProducts()
    
  }
  add() {
   
  }
}
