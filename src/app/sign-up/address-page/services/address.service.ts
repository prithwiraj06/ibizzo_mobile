import { Injectable } from "@angular/core";
import { AddressType } from "../../models/address-type.model";
@Injectable({
    providedIn: 'root'
})

export class AddressService {
    addressType: AddressType[];
    constructor() {
        this.addressType = [
            {addressTypeId: 1, addressType: 'Apartment/Flat'},
            {addressTypeId: 2, addressType: 'Individual Residence'},
            {addressTypeId: 3, addressType: 'Bakery'},
            {addressTypeId: 4, addressType: 'Hotels/Caterers'}
        ]
    }

    getAddress(): AddressType[] {
        return this.addressType;
    }
}