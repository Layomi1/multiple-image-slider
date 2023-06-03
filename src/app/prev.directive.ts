import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  prevFunc() {
    let elm = this.el.nativeElement.parentElement.parentElement.children[0];
    let image = elm.getElementsByClassName('img');
    elm.prepend(image[image.length - 1]);
  }
}
