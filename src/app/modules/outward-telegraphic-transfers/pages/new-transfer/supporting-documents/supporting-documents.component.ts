import { Component, EventEmitter, Input, OnChanges, OnInit, Output, HostListener, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from 'src/app/shared/constants/app.constants';
import { APIService } from 'src/app/shared/services/api.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';
import { SupportingDocs, ISupportingDocs } from 'src/app/shared/models/ott-form-details.model';
import { DragDrop } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-supporting-documents',
  templateUrl: './supporting-documents.component.html',
  styleUrls: ['./supporting-documents.component.scss']
})
export class SupportingDocumentsComponent {
  @Input() supDocsDetails: ISupportingDocs = new SupportingDocs();
  @Output() nextForm = new EventEmitter<number>()
  @Output() previousForm = new EventEmitter<number>()
  @Output() private filesChangeEmiter : EventEmitter<File[]> = new EventEmitter();

  dropArea = document.getElementsByClassName('card-upload-section')
    assetUrl = environment.assetsUrl;
  isDragOver = false
  ismouseOver = false
  isUploaded = false
  docs = [{name:"Proof of Residence", fileImage:'', isUploaded:false, fileName:'' },{name:"Letter of Credit", fileImage:'', fileName:'', isUploaded:false}]


  DraggedOver(event:any, docName:string){
    event.preventDefault();
    event.stopPropagation();
    const spanElement = event.target as HTMLInputElement;
    document.getElementById(docName)?.classList.add('upload-dragover')
  }

  DragLeft(event:any, docName:string){
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false
    document.getElementById(docName)?.classList.remove('upload-dragover')
    

  }

  onDrop(event:any, docName:string){
  
    event.preventDefault()
    event.stopPropagation()

    this.isDragOver = false
    const files = event.dataTransfer?.files;
    console.log(files[0].name);
    this.docs.forEach(doc =>{if(doc.name == docName)doc.isUploaded = true})
    this.docs.forEach(doc =>{if(doc.name == docName)doc.fileName = files[0].name})
  }

  onFileChange(event: Event, docName:string): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length === 1) {
      // Handle the single selected file
      console.log(fileInput.files[0].name);

      // Set the uploaded file name
      const uploadedFileName = fileInput.files[0].name;
      this.docs.forEach(doc =>{if(doc.name == docName)doc.isUploaded = true})
      this.docs.forEach(doc =>{if(doc.name == docName)doc.fileName = uploadedFileName})
    }
  

  }

deleteFile(docName:string){
  this.docs.forEach(doc =>{if(doc.name == docName)doc.isUploaded = false})
  this.docs.forEach(doc =>{if(doc.name == docName)doc.fileName = ''})
}

}
