import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dir2]',
})
export class Dir2Directive {
  @HostBinding('style.width.px') width: number;
  @HostListener('click') myfunc(userinput: string) {
    this.width = 400;
  }
  constructor() {}
}
