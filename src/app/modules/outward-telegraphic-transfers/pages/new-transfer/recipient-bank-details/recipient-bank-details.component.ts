import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/shared/constants/app.constants';
import { APIService } from 'src/app/shared/services/api.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';
import { IRecipientBankDetails, RecipientBankDetails } from 'src/app/shared/models/ott-form-details.model';
@Component({
  selector: 'app-recipient-bank-details',
  templateUrl: './recipient-bank-details.component.html',
  styleUrls: ['./recipient-bank-details.component.scss']
})
export class RecipientBankDetailsComponent {
  @Input() recipientBankDetails: IRecipientBankDetails = new RecipientBankDetails();
  @Output() nextForm = new EventEmitter<number>()
  @Output() previousForm = new EventEmitter<number>()
  assetUrl = environment.assetsUrl;
  isIntermediaryFlag:boolean = false
  isIntermediaryBank: string = '';
  recipientBankDetailsFormGroup: FormGroup;
  accounts = {
    bankName:["Stanbic Bank Ghana"],
    accountName: "Patrick Adu-Amankah",
    address:"G 165 Sakumono",
    accountNumbers:[79152,90568],
    
  }

  
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private apiService: APIService,
    private notification: NotificationService
  ) {
    //@ts-ignore
    this.recipientBankDetailsFormGroup = this._formBuilder.group({ //@ts-ignore
      bankName: [ "Stanbic Bank", Validators.required], //@ts-ignore
      swiftCode: [ "0104", Validators.required], //@ts-ignore
      bankAddress: [ "Airport City", Validators.required], //@ts-ignore
      routingNumber: [ '', Validators.required], //@ts-ignore
    });
    
    
  }
  isIntermediary(){
    console.log(this.isIntermediaryBank )
    if (this.isIntermediaryBank == "Yes"){ this.isIntermediaryFlag = true}
    else{this.isIntermediaryFlag = false}
  }
  }