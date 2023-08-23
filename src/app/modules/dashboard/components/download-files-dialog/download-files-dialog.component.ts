import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-download-files-dialog',
  templateUrl: 'download-files-dialog.component.html',
  styleUrls: ['./download-files-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DownloadFilesDialogComponent implements OnInit {

  comment: string = "";
  assetUrl = environment.assetsUrl;
  message = "";
  checkerId = ""
  //@ts-ignore
  commentFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

   this.message =  this.data.message;
    this.checkerId = this.data.checkerId;
    
  }

  ngOnInit(): void {
    this.commentFormGroup = this._formBuilder.group({ //@ts-ignore
      checkerId: new FormControl({ value: this.data.checkerId, disabled: true }, Validators.required), //@ts-ignore
      comment: new FormControl({ value: this.comment }, Validators.required),
    });
  }


  onNoClick(): void {
    this.dialogRef.close(null);
  }

  closeDialog() {
    this.dialogRef.close(null);
  }

  
  transformTerms(url : string){
    // https://ghprdgodigisrv2.gh.sbicdirectory.com:8002/terms/Signaturecard.pdf

      if(window.location.host.indexOf("e.uat.stanbic")  >= 0 || window.location.host.indexOf("e.stanbic")  >= 0 ){
        return  'https://e.stanbic.com.gh:8002/'+url
      }else if(window.location.host.indexOf("ghprdgodigi")  >= 0 || window.location.host.indexOf("ghuatgodigi")  >= 0){
        return  'https://ghprdgodigisrv2.gh.sbicdirectory.com:8002/'+url
      }

      //TODO: refactor useless useless case
      return  'https://ghprdgodigisrv2.gh.sbicdirectory.com:8002/'+url
  }

  transformFileServices(url : string){
      
  if(window.location.host.indexOf("e.uat.stanbic") >= 0|| window.location.host.indexOf("e.stanbic")  >= 0 ){
    return  'https://e.uat.stanbic.com.gh/s2/'+url
  }else if(window.location.host.indexOf("ghprdgodigi")  >= 0 || window.location.host.indexOf("ghuatgodigi")  >= 0){
    return  'https://ghuatgodigisrv2.gh.sbicdirectory.com:7102/'+url
  }

  //TODO: refactor useless useless case
  return  'https://ghuatgodigisrv2.gh.sbicdirectory.com:7102/'+url
  }
}
