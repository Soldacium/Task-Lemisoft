import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
} from '@angular/core';

@Directive({
  selector: '[styled-link]',
})
export class LinkDirective {
  @Input() active = false;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.filter = 'brightness(95%)';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.style.filter = 'brightness(100%)';
  }

  constructor(private el: ElementRef) {
    const linkStyle = el.nativeElement.style;
    linkStyle.border = 'none';
    linkStyle['font-weight'] = '700';
    linkStyle.padding = '0.5rem 1rem';
    linkStyle.transition = '0.2s ease';
    linkStyle.cursor = 'pointer';
    linkStyle.color = 'black';
    if (this.active) {
      linkStyle.color = 'var(--color-yellow)';
    }
  }
}

@NgModule({
  declarations: [LinkDirective],
  exports: [LinkDirective],
})
export class LinkModule {}
