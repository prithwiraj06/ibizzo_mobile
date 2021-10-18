import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login-page/login.page';
import { OtpPage } from './otp-page/otp.page';
import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [LoginPage, OtpPage]
})
export class LoginPageModule {}
