import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { TableControllerService } from './paging-controller.service';
import { IBranchesResponse } from '../models/branches.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private baseURL = environment.appUrl;
  private branchesUrl = `${this.baseURL}/branches`;


  private httpHeaders = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("sourceCode", environment.app)
    .set("Access-Control-Allow-Origin", "*")
    .set("Content-Security-Policy", "script-src 'self'")
    .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    .set(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    .set("Content-Type", "application/json")
    .set("sourceCode", environment.app)
    .set("countryCode", environment.countryCode)
    .set("X-User-Type", "Staff")
    .set("Cache-Control", "no-cache");

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private page: TableControllerService
  ) { }



  getBranches() {
    return this.http.get<IBranchesResponse>(this.branchesUrl, { headers: this.httpHeaders });
  }
}



