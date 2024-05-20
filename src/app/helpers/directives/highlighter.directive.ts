import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  private elem: HTMLElement
  constructor(private _el: ElementRef) {
    this.elem = this._el.nativeElement
    this.elem.style.fontSize = '20px'
  }
  
  @HostBinding('style.backgroundColor') backGroundColor: string = 'yellow';

  @HostListener('click') onClick() {
    console.log('click');
    this.elem.style.textDecoration = 'line-through';
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Mouse enter');
    this.backGroundColor = 'purple'

  }
  @HostListener('mouseleave') onMouseLeave() {
    console.log('Mouse leave');
    this.backGroundColor = 'orange'
    // this.elem.style.backgroundColor = 'orange'
  }
   
  

}
