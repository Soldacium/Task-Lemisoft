import { CommonModule } from '@angular/common';
import { ButtonModule } from '@shared/directives/button.directive';
import { CardModule } from './../card/card.module';
import { NgModule } from '@angular/core';
import { DialogModule } from '@shared/components/dialogs/dialog/dialog.module';

import { CardJokeComponent } from './card-joke.component';
import { InputModule } from '@shared/directives/input.directive';

@NgModule({
  declarations: [CardJokeComponent],
  imports: [DialogModule, CardModule, ButtonModule, InputModule, CommonModule],
  exports: [CardJokeComponent],
})
export class CardJokeModule {}
