import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clipboard } from '@angular/cdk/clipboard';
import { IPickedFile } from 'src/app/shared/models/customer-details.model';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent implements OnInit {

  assetUrl = environment.assetsUrl;

  //@ts-ignore
  @Input() file: IPickedFile = null;

  @Output() removeFile = new EventEmitter<IPickedFile>()
  constructor(
    private clipboard: Clipboard
  ) { }

  ngOnInit(): void {
  }

  updateFavorite() {
    //update api with liked link
    // this.link.liked = !this.link.liked;
  }

  copyLink() {
    // this.clipboard.copy(this.link.url)
  }

  openLink() {
    if (this.file.url) {
      const imageUrl = this.file.url.slice((this.file.url as string).indexOf("FileServices"))
      const url = window.location.host + "/s2/" + imageUrl
      window.open(url, "_blank");
    } else {

    }
  }

  deleteFile() {
    this.removeFile.emit(this.file)
  }
}
