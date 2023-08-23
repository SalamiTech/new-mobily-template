import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/shared/constants/app.constants';
import { APIService } from 'src/app/shared/services/api.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';
import { RecipientDetails, IRecipientDetails } from 'src/app/shared/models/ott-form-details.model';

@Component({
  selector: 'app-recipient-information',
  templateUrl: './recipient-information.component.html',
  styleUrls: ['./recipient-information.component.scss']
})
export class RecipientInformationComponent {
  @Input() recipientDetails: IRecipientDetails = new RecipientDetails();
  @Output() nextForm = new EventEmitter<number>()
  @Output() previousForm = new EventEmitter<number>()
  assetUrl = environment.assetsUrl;
  
  recipientDetailsFormGroup: FormGroup;
  accounts = {
    accountName: "Patrick Adu-Amankah",
    address:"G 165 Sakumono",
    accountNumbers:[9040007913952,90400074578568]
  }
  
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private apiService: APIService,
    private notification: NotificationService
  ) {
    //@ts-ignore
    this.recipientDetailsFormGroup = this._formBuilder.group({ //@ts-ignore
      accountNumber: [ this.accounts.accountNumbers[1], Validators.required], //@ts-ignore
      accountName: [ this.accounts.accountName, Validators.required], //@ts-ignore
      address: [ this.accounts.address, Validators.required], //@ts-ignore
      purposeOfTransfer: [ '', Validators.required], //@ts-ignore
      informationToRecipient: [ '', Validators.required], //@ts-ignore
    });
    
    
  }
  }
  