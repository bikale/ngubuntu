import {
  Directive,
  ElementRef,
  HostBinding,
  Renderer2,
  Input,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[ourdirc]',
})
export class OurdircDirective {
  public initialSize = 12;
  @Input() visible: boolean;
  @Input() size: number;
  @HostListener('click') myfunc() {
    this.initialSize = this.initialSize * this.size;
    this.render.setStyle(
      this.host.nativeElement,
      'fontSize',
      this.initialSize + 'px'
    );
  }
  constructor(private host: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    if (this.visible == false) {
      this.render.setStyle(this.host.nativeElement, 'display', 'none');
    }
    this.render.setStyle(
      this.host.nativeElement,
      'fontSize',
      this.initialSize + 'px'
    );
  }
}
