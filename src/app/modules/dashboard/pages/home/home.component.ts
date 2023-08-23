import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';
import { ITablePageController } from 'src/app/shared/models/paging.model';
import { TableControllerService } from 'src/app/shared/services/paging-controller.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './side-nav.component.scss']
})
export class HomeComponent implements OnInit {
  pageController: ITablePageController;
  assetUrl = environment.assetsUrl;

  mobileState = true;
  toggleMobile = false;

  constructor(
    private api: APIService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private pager : TableControllerService,
  ) {
    this.pageController = this.pager.pageController;
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 767px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        // hide stuff  
        this.toggleMobile = true;
        this.mobileState = false;
      } else {
        // show stuff
        this.toggleMobile = false;
        this.mobileState = true;
      }
    });

  }

  ngOnInit(): void {



  }

  toggelGettingStarted(){

  }
}
