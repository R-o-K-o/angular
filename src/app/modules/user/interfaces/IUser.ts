import {IAddress} from "./IAddress";
import {ICompany} from "./ICompany";

export interface IUser{
  id: number,
  name: string,
  username: string,
  phone: string,
  email: string,
  website: string,
  address: IAddress,
  company: ICompany,
}
