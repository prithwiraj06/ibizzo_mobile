import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressType } from '../models/address-type.model';
import { AddressService } from './services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: 'address.page.html',
  styleUrls: ['address.page.scss'],
})
export class AddressPage implements OnInit{
  addressTypes: AddressType[] = [];
  addressForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _addressService:AddressService) { }

  ngOnInit() {
    this.addressTypes = this._addressService.getAddress();
    this.addressForm = this._formBuilder.group({
      pinCode: ['', [Validators.required]],
      typeOfResidence: ['', [Validators.required]]
    })
  }

  addressTypeChange(item:AddressType) {
    console.log(item)
  }

  onFormSubmit() {
    this._router.navigate(['/tabs/home']);
  }

}
