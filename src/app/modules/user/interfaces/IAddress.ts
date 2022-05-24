import {IGeo} from "./IGeo";

export interface IAddress{
  city: string,
  street: string,
  suite: string,
  zipcode: string,
  geo: IGeo,
}
