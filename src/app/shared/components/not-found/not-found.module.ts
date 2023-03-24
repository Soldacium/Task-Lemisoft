import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@shared/directives/button.directive';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, ButtonModule],
  exports: [NotFoundComponent],
})
export class NotFoundModule {}
