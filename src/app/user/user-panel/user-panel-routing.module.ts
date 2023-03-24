import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyJokesComponent } from './my-jokes/my-jokes.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-jokes',
  },
  {
    path: 'my-jokes',
    component: MyJokesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPanelRoutingModule {}
