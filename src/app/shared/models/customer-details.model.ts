
export interface ICIFDetails {
  cifNumber: string;
  customerAccName: string ;
}


export class CIFDetails implements ICIFDetails {


  constructor() { }
  cifNumber: string = "";
  customerAccName: string = "";

}