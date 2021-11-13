import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetStartedRoutingModule } from './get-started-routing.module';
import { GetStartedPage } from './get-started-page/get-started.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GetStartedRoutingModule
  ],
  declarations: [GetStartedPage]
})
export class GetStartedModule {}
