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
    length: 5,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '50px',
      'height': '50px'
    }
  };
  constructor(private _router: Router) { }

  ngOnInit() {
    
  }

  onOtpChange(otp) {
    this.otp = otp;
  }

  navigateToDashboard() {
    this._router.navigate(['/dashboard']);
  }
  
  onFormSubmit() {
  }

}
