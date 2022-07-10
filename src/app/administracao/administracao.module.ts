import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministracaoPageRoutingModule } from './administracao-routing.module';

import { AdministracaoPage } from './administracao.page';
import { AdministracaoServices } from './services/administracao.services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministracaoPageRoutingModule
  ],
  providers: [AdministracaoServices],
  declarations: [AdministracaoPage]
})
export class AdministracaoPageModule {}
