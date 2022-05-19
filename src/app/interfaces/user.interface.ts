import {IAddress} from "./user.address.interfase";
import {ICompany} from "./user.company.interface";

export interface IUser{
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: IAddress,
  company: ICompany,
}
