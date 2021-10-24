import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-numer',
  templateUrl: 'phone-number.page.html',
  styleUrls: ['phone-number.page.scss'],
})
export class PhoneNumberPage implements OnInit{

  mobileNumberForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.mobileNumberForm = this._formBuilder.group({
      phoneNo: ['', [Validators.required]]
    })
  }
  
  onFormSubmit() {
    console.log(this.mobileNumberForm.value);
    this._router.navigate(['/sign-up/otp'])
  }

}
