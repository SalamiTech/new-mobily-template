import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'login',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'dashboard',
    data: {
      expectedRole: []
    },
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },  {
    path: 'ott',
    data: {
      expectedRole: []
    },
    loadChildren: () =>
      import('./modules/outward-telegraphic-transfers/outward-telegraphic-transfers.module').then((m) => m.OutwardTelegraphicTransfersModule),
  },
  { path: "**", pathMatch: "prefix", redirectTo: "" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
