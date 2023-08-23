import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { IGenerateOTPResponse, IValidateOTPRequest, IValidateOTPResponse } from '../models/authentication.model';
import { ILoginModel, ILoginResponse, IRole, IStaffInfo } from '../models/login.model';
import { StateStorageService } from './state-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  authUrl = environment.authUrl;

  private baseURL = environment.appUrl;
  private baseUrlOTP = `${this.baseURL}/proxy/v2/otpgenerate`;
  staffLogin = environment.authUrl;

  private httpHeaders = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("sourceCode", environment.app)
    .set("Access-Control-Allow-Origin", "*")
    .set("Content-Security-Policy", "script-src 'self'")
    .set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    .set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    .set("Content-Type", "application/json")
    .set("countryCode", environment.countryCode)
    .set("X-User-Type", "Staff")
    .set("Cache-Control", "no-cache");

  constructor(
    private router: Router,
    public jwtHelper: JwtHelperService,
    private httpClient: HttpClient,
    private store: StateStorageService
  ) {
    const appUrl = `${window.location.protocol}//${window.location.host}`.split(
      '/app'
    )[0];
    this.httpHeaders = this.httpHeaders.set(
      'applicationUrl',
      appUrl
    );
  }




  getOTP(phoneOrEmail: string, type = 'number') {
    const httpOptions = {
      headers: this.httpHeaders
    };
    return this.httpClient.get<IGenerateOTPResponse>(this.baseUrlOTP + `?type=number&query=${phoneOrEmail}&mode=ALL`, httpOptions);
  }






  public hasIRole(expectedIRole: string) {
    const token = localStorage.getItem('currentUserRole');
    // decode the token to get its payload
    const tokenPayload: any = decode(token || "");

    const IRoles = tokenPayload.IRoles.filter((IRole: any) => IRole.toLowerCase() === expectedIRole.toLowerCase());
    if (IRoles.length >= 1) {
      return true;
    }
    return false;
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    // Check whether the token is expired and return
    // true or false
    if (!token) return false;
    return !this.jwtHelper.isTokenExpired(token);
  }


  signin(data: ILoginModel) {
    const httpOptions = {
      headers: this.httpHeaders
    };
    return this.httpClient.post<ILoginResponse>(this.authUrl, data, httpOptions);
  }


  /**
   * Removes a token from the LocalStorage
   */
  logout() {
    localStorage.removeItem('currentUser');
  }

  /**
   * Saves a User token to the LocalStorage
   * @param token - the users token
   */
  saveUserToken(token: string) {
    // localStorage.setItem('currentUser', JSON.stringify(x.token));
    localStorage.setItem('currentUser', token);
  }


  /**
 * Saves a User token to the LocalStorage
 * @param IStaffInfo - IStaffInfo
 */
  saveUserInfo(staffInfo: IStaffInfo) {
    localStorage.setItem('currentUserInfo', JSON.stringify(staffInfo));
  }


  /**
 * Saves a Users role to the LocalStorage
 * @param IRole[] - IRole[]
 */
  saveUserRole(roles: IRole[]) {
    for (const role of roles) {
      if (role.app === environment.app) {
        localStorage.setItem('currentUserRole', JSON.stringify(role));
      }
    }
  }


  /**
 * Returns A IRole
 * @returns IRole - returns an  users role
 */
  getCurrentUserRole(): IRole | null {
    const _role = localStorage.getItem('currentUserRole');
    if (!_role) return null;
    const role: IRole = JSON.parse(_role);
    if (!role) return null;

    return role;
  }


  /**
   * Returns A IStaffInfo
   * @returns IStaffInfo - returns an  user
   */
  getCurrentUser(): IStaffInfo | null {

    const _user = localStorage.getItem('currentUserInfo');

    if (!_user) return null;
    const user: IStaffInfo = JSON.parse(_user);
    if (!user) return null;

    return user;
  }


  /**
 * Returns An Observable user
 * @returns string - returns a  user token
 */
  getCurrentToken() {

    const token = localStorage.getItem('currentUser');

    return token || null;

  }

  saveLoginInfo(res: ILoginResponse) {
    this.logout();

    //store the token
    this.saveUserToken(res.token);
  }


  signinStaff(data: ILoginModel) {
    const httpOptions = {
      headers: this.httpHeaders
    };
    return this.httpClient.post<ILoginResponse>(this.staffLogin, data, httpOptions);

  }
}
