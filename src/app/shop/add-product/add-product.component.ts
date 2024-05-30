import { Component } from '@angular/core';
import { ProductService } from '../../helpers/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  newProduct = {
    title: "",
    price: 0,
    category: "",
    description: ""
  }

  constructor(private _service: ProductService) {

  }
  addProduct() {
    this._service.addProduct(this.newProduct);
    alert('Product has added')

  }
}
