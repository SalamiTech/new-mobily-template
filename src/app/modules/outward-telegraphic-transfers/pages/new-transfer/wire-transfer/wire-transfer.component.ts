import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/shared/constants/app.constants';
import { APIService } from 'src/app/shared/services/api.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';
import { WireTransferDetails, IWireTransferDetails } from 'src/app/shared/models/ott-form-details.model';

@Component({
  selector: 'app-wire-transfer',
  templateUrl: './wire-transfer.component.html',
  styleUrls: ['./wire-transfer.component.scss']
})


export class WireTransferComponent {
@Input() wireTransferDetails: IWireTransferDetails = new WireTransferDetails();
@Output() nextForm = new EventEmitter<number>()
@Output() previousForm = new EventEmitter<number>()
assetUrl = environment.assetsUrl;

wireTransferDetailsFormGroup: FormGroup;
accounts ={
  accountName: "Patrick Adu-Amankah",
  accountNumbers:[ 9040007913952, 90400074578568 ]
}

constructor(
  private _formBuilder: FormBuilder,
  private router: Router,
  private apiService: APIService,
  private notification: NotificationService
) {
  //@ts-ignore
  this.wireTransferDetailsFormGroup = this._formBuilder.group({ //@ts-ignore
    accountNumber: [ '', Validators.required], //@ts-ignore
    amount: [ '', Validators.required], //@ts-ignore
    amountInWords: [ '', Validators.required], //@ts-ignore
    currency: [ '', Validators.required], //@ts-ignore
  });
  
  
}
}
