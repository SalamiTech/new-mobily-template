
export interface IPickedFile {
    file: File | null;
    name: string;
    url: string | ArrayBuffer;
    isUploaded: boolean;
  }
  
  
  export interface MultipleFileUploadResponse {
    responseCode: string;
    responseMsg: string;
    fileInfo: FileInfo[];
  }
  
  
  export interface FileInfo {
    fileName: string;
    filePath: string;
  }
  
  