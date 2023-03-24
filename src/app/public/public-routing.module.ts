import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeComponent } from './joke/joke.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'joke/:id',
    component: JokeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
