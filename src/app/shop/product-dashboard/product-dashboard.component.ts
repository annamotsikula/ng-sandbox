import { Component, Inject } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ProductService } from '../../helpers/services/product.service';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
})
export class ProductDashboardComponent {
  productList: Product[] = [];
  openForm: boolean = false;

  disableClick = false;

  constructor(public _productService: ProductService) {
    this._productService.getProducts().subscribe(result => {
      console.log(result)
      this.productList = result
    })

  }
  delete(id: number) {
    setTimeout(() => {
      this._productService.deleteItemById(id);
      alert(`Product (id: ${id}) has deleted`)

    }, 1000)
  }

  addProduct(newProduct: any) {
    if (this.disableClick) return
    this.disableClick = true
    this._productService.addProduct(newProduct).pipe(
      finalize(() => this.disableClick = false)
    ).subscribe(() => {
      console.log('Product Added')
      // this.disableClick = false
    });

 }


}
