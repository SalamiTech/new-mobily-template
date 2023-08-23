import { Component, HostListener, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,

} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PROGRESS_STATE } from 'src/app/shared/constants/app.constants';
import { WireTransferComponent } from './wire-transfer/wire-transfer.component';

import { APIService } from 'src/app/shared/services/api.service';
import {
  EventBusService,
} from 'src/app/shared/services/event-bus.service';

import { TableControllerService } from 'src/app/shared/services/paging-controller.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss', './side-nav.component.scss']
})
export class NewTransferComponent {
  assetUrl = environment.assetsUrl;
  navigationPosition = 0;
  totalSteps: number = 7;
  isWireTransferValid = false
  isRecipientDetailsValid = false
  isRecipientBankValid = false
  cardTitle = ""
  cardInstruction = ""
  steps =["Wire Transfer", "Recipient Details", "Recipient Bank Details", "Supporting Documents", "Charges", "Review"]
  step = this.steps[this.navigationPosition]
  nextForm(page:number) {
this.navigationPosition = page
const pg = page
this.step = this.steps[pg]

  }
}
