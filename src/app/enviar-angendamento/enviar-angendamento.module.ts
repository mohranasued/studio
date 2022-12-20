import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarAngendamentoPageRoutingModule } from './enviar-angendamento-routing.module';

import { EnviarAngendamentoPage } from './enviar-angendamento.page';
import { EnviarAgendamentoService } from './services/enviar-agendamento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviarAngendamentoPageRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [EnviarAgendamentoService],
  declarations: [EnviarAngendamentoPage]
})
export class EnviarAngendamentoPageModule {}
