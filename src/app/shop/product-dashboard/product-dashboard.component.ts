import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ProductService } from '../../helpers/services/product.service';
import { debounceTime, filter, finalize, fromEvent, map, switchMap, tap } from 'rxjs';
import { PaginationService } from '../../helpers/services/pagination.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
})
export class ProductDashboardComponent implements AfterViewInit {
  productList: Product[] = [];
  openForm: boolean = false;

  disableClick = false;
  searchInput = new FormControl("")
  @ViewChild('search') search! : ElementRef<HTMLInputElement>
  constructor(public _productService: ProductService, private _paginatorService: PaginationService) {

    // this.searchInput.valueChanges.pipe(
    //   debounceTime(1000),
    //   filter(key => typeof key === 'string' && key.length > 2),
    //   switchMap(key => this._productService.searchProduct(key as string))
    // ).subscribe(result => this.productList = result)

    this._paginatorService.currentPage$.pipe(
      switchMap((page) => this._productService.getProducts(30, 30*(page-1 )))
    ).subscribe((result) => {
      this.productList = result
    })

  }

  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'keyup').pipe(
      debounceTime(1000),
      map(event => (event.target as HTMLInputElement).value),
      filter(value => value.length > 2),
      switchMap(key => this._productService.searchProduct(key as string))
    ).subscribe(result => this.productList = result)
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
