import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchDropdownModule } from 'src/app/shared/lib/search-dropdown/search-dropdown.module';
import { MaterialModule } from 'src/app/material.module';
import { ServicesComponent } from './pages/home/services/services.component';
import { AddAccountComponent } from './pages/add-account/add-account.component';
import { ApplicationCompleteComponent } from './pages/add-account/application-complete/application-complete.component';
import { AddReviewComponent } from './pages/add-account/review/review.component';
import { CDKProgressStepper } from './components/stepper-component/stepper-component.component';
import { DashboardSubHeaderComponent } from './components/dashboard-subheader/dashboard-subheader.component';
import { CustomerDetailsComponent } from './pages/add-account/customer-details/customer-details.component';
import { FrequencyDetailsComponent } from './pages/add-account/frequency-details/frequency-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    AddAccountComponent,
    ApplicationCompleteComponent,
    AddReviewComponent,
    CDKProgressStepper,
    DashboardSubHeaderComponent,
    CustomerDetailsComponent,
    FrequencyDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    RoutingModule,
    MaterialModule,
    SearchDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class DashboardModule { }
