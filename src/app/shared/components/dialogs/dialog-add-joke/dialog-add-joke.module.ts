import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from '@shared/components/cards/card/card.module';
import { ButtonModule } from '@shared/directives/button.directive';
import { InputModule } from '@shared/directives/input.directive';
import { DialogModule } from '../dialog/dialog.module';
import { DialogAddJokeComponent } from './dialog-add-joke.component';

@NgModule({
  declarations: [DialogAddJokeComponent],
  imports: [
    DialogModule,
    CardModule,
    CommonModule,
    ButtonModule,
    InputModule,
    ReactiveFormsModule,
  ],
  exports: [DialogAddJokeComponent],
})
export class DialogAddJokeModule {
  // theoretically could be combined to a new "add joke" component with a button...
}
