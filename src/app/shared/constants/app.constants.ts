
export class AppConstant {
  static APP_NAME = 'BCC ACCOUNT OPENING';

  static DEFAULT_ERROR_MESSAGE = 'FAILED, PLEASE TRY AGAIN';
  static SETUP_DEFAULT_MESSAGE =
    'You have not been setup on this application. Please setup and try again';
  static DISMISS = 'Dismiss';
  static ERROR_TRY_AGAIN = 'Error occured. Please Try again';
  static FAILED_SIGN_IN = 'Failed signing in user';
  static SUCCESS_CODE = '000';


}



export enum PROGRESS_STATE {
  LOADING = 1,
  FAILED = 2,
  DONE = 3,
  COMPLETE = 4,
}

export enum REQUEST_STATE {
  ALL = 'ALL',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  AUTHORISED = 'AUTHORISED',
  REJECTED = 'REJECTED ',
}

