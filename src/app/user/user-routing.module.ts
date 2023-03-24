import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user-panel',
  },
  {
    path: 'user-panel',
    loadChildren: () =>
      import('@user/user-panel/user-panel.module').then(
        (m) => m.UserPanelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
