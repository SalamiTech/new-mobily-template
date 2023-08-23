import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/shared/constants/app.constants';
import { APIService } from 'src/app/shared/services/api.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';
import { IReviewDetails } from 'src/app/shared/models/ott-form-details.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Output() nextForm = new EventEmitter<number>()
  @Output() previousForm = new EventEmitter<number>()
  assetUrl = environment.assetsUrl;
  
  reviewFormGroup: FormGroup;
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
    this.reviewFormGroup = this._formBuilder.group({ //@ts-ignore
      'wireTransfer': this._formBuilder.group({
      accountNumber: [ this.accounts.accountNumbers[1], Validators.required], //@ts-ignore
      amount: [ '1000', Validators.required], //@ts-ignore
      amountInWords: [ 'One Thousand Ghana Cedis', Validators.required], //@ts-ignore
     }),
    'recipientDetails': this._formBuilder.group({ 
      accountNumber: [ this.accounts.accountNumbers[1], Validators.required], //@ts-ignore
      accountName: [ this.accounts.accountName, Validators.required], //@ts-ignore
      address: [ this.accounts.address, Validators.required], //@ts-ignore
      purposeOfTransfer: [ '', Validators.required], //@ts-ignore
      informationToRecipient: [ '', Validators.required], //@ts-ignore
    }),
    'recipientBankDetails': this._formBuilder.group({ //@ts-ignore
      bankName: [ "Stanbic Bank", Validators.required], //@ts-ignore
      swiftCode: [ "0104", Validators.required], //@ts-ignore
      bankAddress: [ this.accounts.address, Validators.required], //@ts-ignore
      routingNumber: [ '', Validators.required], //@ts-ignore
    }),
    'charges': this._formBuilder.group({ //@ts-ignore
      stanbicCharges: [ this.accounts.accountNumbers[1], Validators.required], //@ts-ignore
      chargeBearer: [ '', Validators.required], //@ts-ignore
    })
    });
    
    
  }
  }
  