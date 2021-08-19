import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule)},
  { path: 'signin', loadChildren: () => import('../app/pages/signin/signin.module').then(m => m.SigninModule)},

  { path: 'dashboard', loadChildren: () => import('../app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
