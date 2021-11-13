import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  templateUrl: 'otp.page.html',
  styleUrls: ['otp.page.scss'],
})
export class OtpPage implements OnInit{
  otp: number;
  config :any = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '30px',
      'height': '30px',
      'border-radius': '0px',
      'font-size': '20px',
      'border-left': 'none',
      'border-right': 'none',
      'border-top': 'none',
      'border-color': 'black',
      'outline': 'none'
    }
  };
  invalidOtp: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit() {
    
  }

  onOtpChange(otp) {
    this.otp = otp;
  }

  resendOtp() {
    
  }
  
  validateOtp() {
    this._router.navigate(['/sign-up/address'])
  }

}
