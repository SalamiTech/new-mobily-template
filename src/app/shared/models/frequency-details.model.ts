
export interface ILoanDetails {
    loanAmount: string;
    dateOfEstablishment: string;
    loanType: string;
  }
  export class LoanDetails implements ILoanDetails {


    constructor() { }
    loanAmount: string = "";
    dateOfEstablishment: string = "";
    loanType: string = "";
  
  }
  
  
  export interface IFrequencyDetails {
    percentageTBB: string;
    timeline: string;
    amountDue: string;
    dueDate: string;
    notes:string
  }
  export class FrequencyDetails implements IFrequencyDetails {


    constructor() { }
    percentageTBB: string = "";
    timeline: string = "";
    amountDue: string = "";
    dueDate: string = "";
    notes: string = "";
  }
  
  
  export interface FileInfo {
    fileName: string;
    filePath: string;
  }
  
  