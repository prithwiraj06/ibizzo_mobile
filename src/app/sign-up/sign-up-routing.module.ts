import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpPageRoutingModule {}
