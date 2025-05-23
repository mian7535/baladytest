import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OpenIdConnectPageRoutingModule } from './open-id-connect-routing.module';
import { OpenIdConnectPage } from './open-id-connect.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OpenIdConnectPageRoutingModule
  ],
  declarations: [OpenIdConnectPage]
})
export class OpenIdConnectPageModule {}
