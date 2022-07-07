import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendamentoPageRoutingModule } from './agendamento-routing.module';

import { AgendamentoPage } from './agendamento.page';
import { HorarioService } from './services/horarios.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendamentoPageRoutingModule
  ],
  providers: [HorarioService],
  declarations: [AgendamentoPage,]
})
export class AgendamentoPageModule {}
