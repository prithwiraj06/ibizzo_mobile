import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login-page/login.page';
import { OtpPage } from './otp-page/otp.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
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
export class LoginPageRoutingModule {}
