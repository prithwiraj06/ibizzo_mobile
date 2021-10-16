import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordPage } from './forgot-password/forgot-password.page';
import { PasswordRoutingModule } from './password-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PasswordRoutingModule
  ],
  declarations: [ForgotPasswordPage]
})
export class PasswordModule {}
