import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/shared/constants/app.constants';
import { APIService } from 'src/app/shared/services/api.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';


//Models
import { ILoanDetails, LoanDetails, FrequencyDetails, IFrequencyDetails } from 'src/app/shared/models/frequency-details.model';

@Component({
  selector: 'app-frequency-details',
  templateUrl: './frequency-details.component.html',
  styleUrls: ['./frequency-details.component.scss']
})
export class FrequencyDetailsComponent {
  @Input() loanDetails: ILoanDetails = new LoanDetails();
  @Input() frequencyDetails: IFrequencyDetails = new FrequencyDetails();



  TYPING_TIMEOUT = 1000

  assetUrl = environment.assetsUrl;


  //@ts-ignore
  frequencyDetailsFormGroup: FormGroup;

  authResp: any;
  loader = false;

  
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private apiService: APIService,
    private notification: NotificationService
  ) {
    //@ts-ignore
    this.frequencyDetailsFormGroup = this._formBuilder.group({ //@ts-ignore
      loanAmount: [ '', Validators.required], //@ts-ignore
      loanType: [ '', Validators.required], //@ts-ignore
      loanAmount: [ '', Validators.required], //@ts-ignore
      loanAmountDue: [ '', Validators.required], //@ts-ignore

      percentageTBB: [ '', Validators.required], //@ts-ignore
      freqTimeline: [ '', Validators.required], //@ts-ignore
      notes: [ '', Validators.required], //@ts-ignore
      loanDueDate: [ '', Validators.required], //@ts-ignore
      notes: [ '', Validators.required], //@ts-ignore
      // originatorAccName: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(2)]),
      // // receiverAccCountry: [this.accountDetails.receiverAccCountry || '', Validators.required], //@ts-ignore
      // // receiverBank: [this.accountDetails.receiverBank || '', Validators.required], //@ts-ignore
      // receiverAccNumber: [ '' || '', Validators.required], //@ts-ignore
      // receiverAccName: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(2)]),
      // // address: new FormControl({ value: this.accountDetails.address }, [Validators.required, Validators.minLength(2)]),
      // // cimsId: new FormControl({ value: this.accountDetails.cimsId }, [Validators.required, Validators.minLength(2)]),
      // // branchcode: new FormControl({ value: this.accountDetails.cimsId }, [Validators.required, Validators.minLength(2)]),
    });
}
}