export interface IWireTransferDetails {
  accountNumber: string;
  amount: string ;
  amountInWords:string
  currency:string
  }
  
export interface IRecipientDetails {
  accountNumber: string 
  accountName: string 
  address: string
  informationToRecipient: string 
  purposeOfTransfer: string
  }

  export interface IRecipientBankDetails {
    bankName: string 
    bankAddress: string
    swiftCode: string
    routingNumber: string
    }

    export interface IChargeDetails {
      accountNumber: string 
      accountName: string 
      address: string
      informationToRecipient: string 
      purposeOfTransfer: string
      }

      export interface ISupportingDocs {
        accountNumber: string 
        accountName: string 
        address: string
        informationToRecipient: string 
        purposeOfTransfer: string
        }
        export interface IReviewDetails {
          wireTransfer: {
          accountNumber: string;
          amount: string ;
          amountInWords:string
          currency:string
        },
        recipientDetails: {
          accountNumber: string 
          accountName: string 
          address: string
          informationToRecipient: string 
          purposeOfTransfer: string
        },
        recipientBankDetails: {
          bankName: string 
          bankAddress: string
          swiftCode: string
          routingNumber: string
          }
      }
        export class SupportingDocs implements ISupportingDocs {
        
        
          constructor() { }
          accountNumber: string = "";
          accountName: string = "";
          address: string = "";
          informationToRecipient: string = "";
          purposeOfTransfer: string = "";
        }
        
      export class ChargeDetails implements IChargeDetails {
      
      
        constructor() { }
        accountNumber: string = "";
        accountName: string = "";
        address: string = "";
        informationToRecipient: string = "";
        purposeOfTransfer: string = "";
      }
      
    export class RecipientBankDetails implements IRecipientBankDetails {
    
    
      constructor() { }
      bankName: string = "";
      bankAddress: string = "";
      swiftCode: string= "";
      intermediaryBankSwiftCode: string= "";
      intermediaryBankCorrespondent: string= "";
      routingNumber: string = "";
    }
  
  export class RecipientDetails implements IRecipientDetails {
  
  
    constructor() { }
    accountNumber: string = "";
    accountName: string = "";
    address: string = "";
    informationToRecipient: string = "";
    purposeOfTransfer: string = "";
  }

    
    export class WireTransferDetails implements IWireTransferDetails {
    
    
      constructor() { }
      accountNumber: string = "";
      amount: string = "";
      amountInWords: string = "";
      currency: string = "";
    }


