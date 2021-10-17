import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.page.html',
  styleUrls: ['sign-up.page.scss'],
})
export class SignUpPage implements OnInit{
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  emailValidationIcon: string = '';
  emailValidationIconColor: string = '';
  showEmailValidationIcon: boolean = false;
  invalidCredentials: boolean = false;
  signUpForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.signUpForm = this._formBuilder.group({
      userName: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  navigateToLogin() {
    this._router.navigate(['/login']);
  }

  validateEmail() {
    if(this.signUpForm.get('email').value.length > 0) {
      this.showEmailValidationIcon = true;
      this.emailValidationIcon = 'checkmark';
      this.emailValidationIconColor = 'success';
      // if(email is valid) {
      //   this.emailValidationIcon = 'checkmark';
      //   this.emailValidationIconColor = 'success';
      // }
      // else {
      //   this.emailValidationIcon = 'close';
      //   this.emailValidationIconColor = 'danger';
      // }
    }
  }

  onEmailInput() {
    this.showEmailValidationIcon = false;
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  
  onFormSubmit() {
    console.log(this.signUpForm.value)
  }

}
