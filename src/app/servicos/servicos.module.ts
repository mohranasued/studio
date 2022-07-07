import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosPageRoutingModule } from './servicos-routing.module';

import { ServicosPage } from './servicos.page';
import { ServicosService } from './services/servicos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosPageRoutingModule
  ],
  providers: [ServicosService],
  declarations: [ServicosPage]
})
export class ServicosPageModule {}
