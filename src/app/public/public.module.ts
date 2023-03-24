import { DialogAddJokeModule } from '@shared/components/dialogs/dialog-add-joke/dialog-add-joke.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke/joke.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PublicRoutingModule } from './public-routing.module';

import { InputModule } from '@shared/directives/input.directive';
import { ButtonModule } from '@shared/directives/button.directive';
import { CardJokeModule } from '@shared/components/cards/card-joke/card-joke.module';
import { DialogModule } from '@shared/components/dialogs/dialog/dialog.module';
import { CardModule } from '@shared/components/cards/card/card.module';

@NgModule({
  declarations: [JokeComponent, WelcomeComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CardJokeModule,
    DialogModule,
    DialogAddJokeModule,
    CardModule,
    InputModule,
    ButtonModule,
  ],
})
export class PublicModule {}
