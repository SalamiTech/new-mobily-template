import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/home/services/services.component';

import { AddAccountComponent } from './pages/add-account/add-account.component';

const routes: Routes = [


  {
    path: 'home', component: HomeComponent,

    children: [
      {
        path: "",
        // canActivate: [AuthGuardService],
        component: ServicesComponent
      },
      {
        path: "services",
        // canActivate: [AuthGuardService],
        component: ServicesComponent
      },
      
      { path: "", pathMatch: "prefix", redirectTo: "/welcome" },
    ]
  },
  {
    path: "add_account",
    // canActivate: [AuthGuardService],
    component: AddAccountComponent
  },
  { path: "**", pathMatch: "prefix", redirectTo: "welcome" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
