import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTransferComponent } from './pages/new-transfer/new-transfer.component';
import { OttDashboardComponent } from './pages/ott-dashboard/ott-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoutingModule } from './routing.module';
import { WireTransferComponent } from './pages/new-transfer/wire-transfer/wire-transfer.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipientInformationComponent } from './pages/new-transfer/recipient-information/recipient-information.component';
import { RecipientBankDetailsComponent } from './pages/new-transfer/recipient-bank-details/recipient-bank-details.component';
import { SupportingDocumentsComponent } from './pages/new-transfer/supporting-documents/supporting-documents.component';
import { ChargesComponent } from './pages/new-transfer/charges/charges.component';
import { ReviewComponent } from './pages/new-transfer/review/review.component';
import { ConfirmationComponent } from './pages/new-transfer/confirmation/confirmation.component';

@NgModule({
  declarations: [
    NewTransferComponent,
    WireTransferComponent,
    OttDashboardComponent,
    RecipientInformationComponent,
    RecipientBankDetailsComponent,
    SupportingDocumentsComponent,
    ChargesComponent,
    ReviewComponent,
    ConfirmationComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ]
})
export class OutwardTelegraphicTransfersModule { }
