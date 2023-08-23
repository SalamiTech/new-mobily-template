import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/shared/constants/app.constants';
import { APIService } from 'src/app/shared/services/api.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';
import { ChargeDetails, IChargeDetails } from 'src/app/shared/models/ott-form-details.model';
@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})

export class ChargesComponent {
  @Input() chargeDetails: IChargeDetails = new ChargeDetails();
  @Output() nextForm = new EventEmitter<number>()
  @Output() previousForm = new EventEmitter<number>()
  assetUrl = environment.assetsUrl;
  
  chargeDetailsFormGroup: FormGroup;
  accounts = {
    accountName: "Patrick Adu-Amankwah",
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
    this.chargeDetailsFormGroup = this._formBuilder.group({ //@ts-ignore
      stanbicCharges: [ '', Validators.required], //@ts-ignore
      chargeBearer: [ '', Validators.required], //@ts-ignore
    });
    
    
  }
  }
