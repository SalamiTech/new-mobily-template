import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardHeaderComponent implements OnInit {
  ngOnInit(): void {

  }

  assetUrl = environment.assetsUrl;

}
