import { Directive, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';
import { CategoryEnum } from '../interfaces/product.enum';

@Directive({
  selector: '[appProductCategory]'
})
export class ProductCategoryDirective implements OnInit {
  @Input('appProductCategory') category!: string
  private _rendererService = inject(Renderer2);
  private _el = inject(ElementRef);

  ngOnInit(): void {
    const className = this._generateClassName();
    if(className) this._generateIcon(className);
    
  }

  private _generateClassName(): string | null {
    let className = null
    switch(this.category.toLowerCase()) {
      case CategoryEnum.GROCERY:
        className = 'bi-shop';
        break;
      case CategoryEnum.HOME_DECOR:
        className = 'bi-house';
        break;
      case CategoryEnum.SMARTPHONE:
        className = 'bi-phone-fill';
        break;
      default: 
      // className = null
      break;
    }

    return className

  }

  private _generateIcon(name: string) {
    const icon: HTMLElement = this._rendererService.createElement("i");
    icon.classList.add(name);

    const domElement = (<HTMLDivElement>this._el.nativeElement);

    this._rendererService.appendChild(domElement, icon);
  }


}
