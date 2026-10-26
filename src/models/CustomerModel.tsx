import type AccountModel from "./AccountModel";
import type AddressModel from "./AddressModel";

export default interface CustomerModel {
    id?:any;
    firstName?:string,
    lastName?:string,
    tckn?:string,
    birthOfDate?:string,
    address?:AddressModel,
    account?:AccountModel
}