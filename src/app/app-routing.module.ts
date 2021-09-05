import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './components/base/base.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'dream', pathMatch: 'full' },
  {
    path: 'dream', children: [

      { path: '', component: BaseComponent },

      {
        path: ':code', component: BaseComponent
      },
    ]
  },
  {
    path: 'getuser', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
