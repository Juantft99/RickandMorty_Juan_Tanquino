import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MundosPageRoutingModule } from './mundos-routing.module';

import { MundosPage } from './mundos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MundosPageRoutingModule
  ],
  declarations: [MundosPage]
})
export class MundosPageModule {}
