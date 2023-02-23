import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') itemBackground = 'auto'
  @HostBinding('style.color') fontColor = 'auto'

  constructor() { }

  @HostListener('mouseover') onMouseOver() {
    this.itemBackground = '#0d6efd'
    this.fontColor = '#fff'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.itemBackground = '#fff'
    this.fontColor = '#000'
  }
}
