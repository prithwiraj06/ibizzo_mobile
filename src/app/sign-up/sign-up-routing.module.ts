import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressPage } from './address-page/address.page';
import { OtpPage } from './otp-page/otp.page';
import { PhoneNumberPage } from './phone-number-page/phone-number.page';
import { SignUpPage } from './sign-up-page/sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage,
  },
  {
    path: 'phone-number',
    component: PhoneNumberPage
  },
  {
    path: 'otp',
    component: OtpPage
  },
  {
    path: 'address',
    component: AddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpPageRoutingModule {}
