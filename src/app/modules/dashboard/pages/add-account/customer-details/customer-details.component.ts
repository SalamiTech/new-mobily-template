//Dependencies
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/shared/constants/app.constants';
import { APIService } from 'src/app/shared/services/api.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';


//Models
import { CIFDetails, ICIFDetails } from 'src/app/shared/models/customer-details.model';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
  @Input() cifDetails: ICIFDetails = new CIFDetails();




  TYPING_TIMEOUT = 1000

  assetUrl = environment.assetsUrl;


  //@ts-ignore
  accountDetailsFormGroup: FormGroup;

  authResp: any;
  loader = false;

  
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private apiService: APIService,
    private notification: NotificationService
  ) {
    //@ts-ignore
    this.accountDetailsFormGroup = this._formBuilder.group({ //@ts-ignore
      cifNumber: [ '', Validators.required], //@ts-ignore
      // originatorAccName: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(2)]),
      // // receiverAccCountry: [this.accountDetails.receiverAccCountry || '', Validators.required], //@ts-ignore
      // // receiverBank: [this.accountDetails.receiverBank || '', Validators.required], //@ts-ignore
      // receiverAccNumber: [ '' || '', Validators.required], //@ts-ignore
      // receiverAccName: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.minLength(2)]),
      // // address: new FormControl({ value: this.accountDetails.address }, [Validators.required, Validators.minLength(2)]),
      // // cimsId: new FormControl({ value: this.accountDetails.cimsId }, [Validators.required, Validators.minLength(2)]),
      // // branchcode: new FormControl({ value: this.accountDetails.cimsId }, [Validators.required, Validators.minLength(2)]),
    });


    // this.accountDetailsFormGroup.get('originatorAccNumber')?.valueChanges.subscribe(value => {
    //   if (!this.accountDetailsFormGroup.get('originatorAccNumber')?.valid) {
    //     this.accountDetails.originatorAccName = ""
    //   }
    // });

    //remove the account name when the account number changes
    // this.accountDetailsFormGroup.get('receiverAccNumber')?.valueChanges.subscribe(value => {
    //   if(!this.originatorAccount){
    //     this.accountDetails.receiverAccName = ""
    //   }
    // });

  }

  // lookUpAccountNumber() {

  //   // Clear the timeout if it has already been set.
  //   // This will prevent the previous task from executing
  //   // if it has been less than <MILLISECONDS>
  //   if (this.timeoutTracker) clearTimeout(this.timeoutTracker);

  //   this.timeoutTracker = setTimeout(() => {

  //     if (this.accountDetails.originatorAccNumber.length >= 7) {
  //       this.apiService.accountLookUp(this.accountDetails.originatorAccNumber).subscribe((account: IOriginatorAccountDetailsResponse) => {

  //         if (account.headerResponse.responseCode === AppConstant.SUCCESS_CODE) {
  //           this.originatorAccount = account;
  //           this.originatorAccountChanged.emit(this.originatorAccount);
  //           this.accountDetails.originatorAccName = account.accountName;
  //         } else {
  //           this.notification.openSnackBar(account.headerResponse.responseMessage, AppConstant.DISMISS);
  //           this.accountDetails.originatorAccName = "";

  //         }
  //       });
  //     }
  //   }, this.TYPING_TIMEOUT);
  // }


  // lookUpReceiverAccountNumber() {

  //   if (!this.receiverBank?.country && !this.receiverBank?.institutionBic) {

  //     this.notification.openSnackBar(AppConstant.SELECT_COUNTRY, AppConstant.DISMISS);

  //     return;
  //   }

  //   const payload: INameEnquiryRequest = {
  //     headerRequest: RequestHeaderInfo.Instance(),
  //     destinationCountryCode: this.receiverBank.country,
  //     beneficiaryAccountNo: this.accountDetails.receiverAccNumber,
  //     destinationInstitutionBic: this.receiverBank.institutionBic,
  //     destinationInstitutionId: this.receiverBank.institutionId
  //   }

  //   // Clear the timeout if it has already been set.
  //   // This will prevent the previous task from executing
  //   // if it has been less than <MILLISECONDS>
  //   if (this.timeoutTracker) clearTimeout(this.timeoutTracker);

  //   this.timeoutTracker = setTimeout(() => {

  //     if (this.accountDetails.receiverAccNumber.length >= 7) {
  //       this.apiService.getNameEnquiry(payload).subscribe((account: INameEnquiryResponse) => {

  //         if (account.headerResponse.responseCode === AppConstant.SUCCESS_CODE) {
  //           this.accountDetails.receiverAccName = account.beneficiaryAccountName;
  //         } else {
  //           this.notification.openSnackBar(account.headerResponse.responseMessage, AppConstant.DISMISS);

  //           //clear the old details
  //           this.accountDetails.receiverAccName = "";

  //         }
  //       })
  //     }

  //   }, this.TYPING_TIMEOUT);


  // }
}
