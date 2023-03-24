import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './user-panel.component';
import { MyJokesComponent } from './my-jokes/my-jokes.component';
import { UserPanelRoutingModule } from './user-panel-routing.module';
import { ButtonModule } from '@shared/directives/button.directive';
import { DialogAddJokeModule } from '@shared/components/dialogs/dialog-add-joke/dialog-add-joke.module';
import { CardJokeModule } from '@shared/components/cards/card-joke/card-joke.module';
import { CardModule } from '@shared/components/cards/card/card.module';

@NgModule({
  declarations: [UserPanelComponent, MyJokesComponent],
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    DialogAddJokeModule,
    CardJokeModule,
    CardModule,
    ButtonModule,
  ],
})
export class UserPanelModule {}
