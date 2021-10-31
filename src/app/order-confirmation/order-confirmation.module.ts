import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderConfirmationPageRoutingModule } from './order-confirmation-.routing';
import { OrderConfirmationPage } from './order-confirmation-page/order-confirmation-page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OrderConfirmationPageRoutingModule
  ],
  declarations: [OrderConfirmationPage]
})
export class OrderConfirmationPageModule {}
