import { Component } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ProductService } from '../../helpers/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
})
export class ProductDashboardComponent {
  productList: Product[] = [];
  openForm: boolean = false
  constructor(public _productService: ProductService) {
    this.productList = this._productService.getProducts()
    
  }
  delete(id: number) {
    setTimeout(() => {
      this._productService.deleteItemById(id);
      alert(`Product (id: ${id}) has deleted`)

    }, 1000)
   
  }
}
