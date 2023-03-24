import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[styled-button]',
})
export class ButtonDirective implements OnInit {
  backgroundColor = '';
  textColor = '';
  highlightTextColor = '';
  highlightBackgroundColor = '';

  @Input('color') color: 'success' | 'danger' | 'basic' | 'white' = 'basic';
  @Input('isActive') active = false;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.filter = 'brightness(95%)';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.style.filter = 'brightness(100%)';
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setColorScheme();
    this.setStaticStyling();
  }

  setColorScheme() {
    switch (this.color) {
      case 'basic':
        this.backgroundColor = 'var(--color-yellow)';
        this.textColor = 'var(--color-black)';
        break;
      case 'danger':
        this.backgroundColor = 'var(--color-red)';
        this.textColor = 'var(--color-white)';
        break;
      case 'success':
        this.backgroundColor = 'var(--color-green)';
        this.textColor = 'var(--color-white)';
        break;
      case 'white':
        this.backgroundColor = 'var(--color-white)';
        this.textColor = 'var(--color-yellow)';
        break;

      default:
        break;
    }
  }

  setStaticStyling() {
    const buttonStyle = this.el.nativeElement.style;
    buttonStyle.backgroundColor = this.backgroundColor;
    buttonStyle.border = 'none';
    buttonStyle.padding = '13px 26px';
    buttonStyle.transition = '0.2s ease';
    buttonStyle.cursor = 'pointer';
    buttonStyle['border-radius'] = 'var(--border-radius-small)';
    buttonStyle['font-weight'] = 700;
    buttonStyle.color = this.textColor;
    if (this.active) {
      buttonStyle.backgroundColor = '#232323';
    }
  }
}

@NgModule({
  declarations: [ButtonDirective],
  exports: [ButtonDirective],
})
export class ButtonModule {}
