import { Component, HostListener, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,

} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PROGRESS_STATE } from 'src/app/shared/constants/app.constants';

import { APIService } from 'src/app/shared/services/api.service';
import {
  EventBusService,
} from 'src/app/shared/services/event-bus.service';

import { TableControllerService } from 'src/app/shared/services/paging-controller.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss', './side-nav.component.scss']
})
export class AddAccountComponent implements OnInit {
  assetUrl = environment.assetsUrl;
  isFreqValid = false
  isCustomerValid = false
  isReviewValid = false
  navigationPosition = 0;
  totalSteps = 2;



  PAGE_STATE: PROGRESS_STATE = PROGRESS_STATE.DONE;
  PROGRESS = PROGRESS_STATE;



  constructor(
    private pager: TableControllerService,
    private api: APIService,

    private readonly eventBusService: EventBusService,
    private spinner: NgxSpinnerService,
  ) {


  }



  ngAfterViewChecked() { }

  ngOnInit(): void { }



  previousForm() {

    if(this.navigationPosition >0) this.navigationPosition--;
    this.isCustomerValid = false
    this.isFreqValid = false
    this.isReviewValid = false
  }

  nextForm() {

    if(this.navigationPosition < this.totalSteps) this.navigationPosition++;
  
    if(this.navigationPosition ==1 ){
      this.isCustomerValid = true
      this.isFreqValid = false
      this.isReviewValid = false
    }
    if(this.navigationPosition ==2 ){
      this.isCustomerValid = true
      this.isFreqValid = true
      this.isReviewValid = false
    }
  }

  navigateToForm($event: any) {

  }



  // @HostListener('window:beforeunload', ['$event'])
  // showMessage($event: any) {
  //   $event.returnValue = 'Your data will be lost!';
  // }

  updateSelectedIndex($event : any){

  }
}
