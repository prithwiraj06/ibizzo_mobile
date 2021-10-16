import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit{
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  invalidCredentials: boolean = false;

  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  navigateToForgotPassword() {
    this._router.navigate(['/forgot-password'])
  }
  
  onFormSubmit() {
    console.log(this.loginForm.value)
  }

}
