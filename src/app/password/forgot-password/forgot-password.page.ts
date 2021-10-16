import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.page.html',
  styleUrls: ['forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit{
  forgotPasswordForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  
  
  onFormSubmit() {
    console.log(this.forgotPasswordForm.value)
  }

}
