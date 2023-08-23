import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PROGRESS_STATE } from 'src/app/shared/constants/app.constants';
import { ICIFDetails, CIFDetails } from 'src/app/shared/models/customer-details.model';
import { ILoanDetails, LoanDetails } from 'src/app/shared/models/frequency-details.model';
import { APIService } from 'src/app/shared/services/api.service';
import { TableControllerService } from 'src/app/shared/services/paging-controller.service';
import { environment } from 'src/environments/environment';
import { getDateFormat } from 'src/app/shared/utils/date.utils';

export interface uploadDetails {
  title: string
}

@Component({
  selector: 'app-add-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class AddReviewComponent  implements OnInit {

  @Input() accountDetails: ICIFDetails = new CIFDetails();


  @Input() transactionDetails: ILoanDetails = new LoanDetails();

  //@ts-ignore
  @Input() receiverBank : IPartner;
  
  //@ts-ignore
  @Input() originatorAccount : IOriginatorAccountDetailsResponse;

  //@ts-ignore
  @Input() rates : IRatesResponse;

 //@ts-ignore
 @Input() countriesMap : Map<string,ICountry> = new Map();



//  localCurrency = AppConstant.TRANSFER_CURRENCY;


 //NB: receiver amount & originator amt are swapped in invoiced case
 receiverAmt = 0.0;
 originatorAmt = 0.0;


constructor(private _formBuilder: FormBuilder) {
  
}

ngOnInit(): void {
  //This is done to prevent the two way binding at the transaction details page
  if(this.transactionDetails+"" ==='true'){
    const temp  = this.transactionDetails.dateOfEstablishment;
    this.receiverAmt = 1000;
    this.originatorAmt =5000;
  }else{
    this.receiverAmt = 30;
    this.originatorAmt =200;
  }
}

getBenInfo() {

}


getCountryByCode(code : string){
  return this.countriesMap.get(code)?.name || "";
}



getCurrentDate(){
  return getDateFormat(new Date())
}


totalDebitted(){
  return (parseFloat(this.rates.totalCharge) + (this.transactionDetails.loanAmount));
}

// validateRateType(rate : ICharge){
//   return validateRateType(this.localCurrency, rate);
//  }


 convertToNumber(amount : any){
    return amount ? parseFloat(amount) : 0.00;
 }
}
