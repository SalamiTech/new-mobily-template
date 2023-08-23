import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { NewTransferComponent } from './pages/new-transfer/new-transfer.component';
import { WireTransferComponent } from './pages/new-transfer/wire-transfer/wire-transfer.component';
import { OttDashboardComponent } from './pages/ott-dashboard/ott-dashboard.component';


const routes: Routes = [


  {
    path: 'new-transfer', component: NewTransferComponent,

  },
  { path: "**", pathMatch: "prefix", redirectTo: "welcome" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
