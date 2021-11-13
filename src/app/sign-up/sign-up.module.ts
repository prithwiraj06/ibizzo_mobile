import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { SignUpPage } from './sign-up-page/sign-up.page';
import { PhoneNumberPage } from './phone-number-page/phone-number.page';
import { OtpPage } from './otp-page/otp.page';
import { NgOtpInputModule } from 'ng-otp-input';
import { AddressPage } from './address-page/address.page';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    NgOtpInputModule,
    IonicSelectableModule
  ],
  declarations: [SignUpPage, PhoneNumberPage, OtpPage, AddressPage]
})
export class SignUpPageModule {}
