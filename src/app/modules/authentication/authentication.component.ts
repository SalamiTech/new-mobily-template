import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginModel, ILoginResponse, IRole } from 'src/app/shared/models/login.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { StateStorageService } from 'src/app/shared/services/state-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  assetUrl = environment.assetsUrl;

  public loginData: ILoginModel = {
    username: '',
    password: ''
  };

  loginFormGroup: FormGroup;
  authResp: any;
  loader = false;
  constructor(
    private navigationService: NavigationService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: StateStorageService,
    private notification: NotificationService
  ) {
    // this.ILoginModel = new ILoginModel();

    this.loginFormGroup = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }


  login() {

    this.loader = true;
    this.authService.signinStaff(this.loginData).subscribe((res: ILoginResponse) => {

      console.log(res.hostHeaderInfo)

      //stop loading
      this.loader = false;

      if (res.hostHeaderInfo.responseCode === "000") {
        this.authService.saveLoginInfo(res);

        //stop users who havent been setup fron transitioning
        const _role = this.authService.getCurrentUserRole() as IRole;
        // this.navigationService.navigateToAdminDashboard();
        //redirect to dashboard based on role
        //   if(_role) this.navigationService.navigateBasedOnRole(_role);
        //   else this.notification.openSnackBar("You Havent been setup on this application yet. Please setup and try again", "Dismiss");

      } else {
        this.notification.openSnackBar("Failed signing in user", "Dismiss");
      }
    },

      (error: Error) => {
        this.notification.openSnackBar("Error occured. Please Try again", "Dismiss");
      })
  }
}
