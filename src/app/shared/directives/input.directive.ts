import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
} from '@angular/core';

@Directive({
  selector: '[styled-input]',
})
export class InputDirective {
  backgroundColor = 'var(--color-white)';
  textColor = 'var(--color-black)';
  highlightTextColor = '';
  highlightBackgroundColor = '';

  @Input() color: 'basic' | 'white' = 'basic';
  @Input() active = false;

  constructor(private el: ElementRef) {
    this.setStaticStyling();
  }

  setStaticStyling() {
    const inputStyle = this.el.nativeElement.style;
    inputStyle.backgroundColor = this.backgroundColor;
    inputStyle.border = '1px solid var(--color-gray)';
    inputStyle.padding = '13px 8px';
    inputStyle.transition = '0.2s ease background-color';
    inputStyle.color = this.textColor;
    if (this.active) {
      inputStyle.backgroundColor = '#232323';
    }
  }
}

@NgModule({
  declarations: [InputDirective],
  exports: [InputDirective],
})
export class InputModule {}
