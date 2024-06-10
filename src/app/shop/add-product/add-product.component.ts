import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() emitAdd = new EventEmitter()

  constructor() {

  }
  addProduct() {
    this.emitAdd.emit(this.newProduct)
    // this._service.addProduct(this.newProduct).subscribe((res) => {
    //   console.log(res)
    //   alert('Product has added')
    // });

  }
}
