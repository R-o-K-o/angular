import {IGeo} from "./user.address.geo.interface";

export interface IAddress{
  city: string,
  street: string,
  suite: string,
  zipcode: string,
  geo: IGeo,
}
