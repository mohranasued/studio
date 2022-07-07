import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoModel } from './model/servicos.model';
import { ServicosService } from './services/servicos.service';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})

export class ServicosPage implements OnInit {
  public servicos: ServicoModel[] = [];
  constructor(
    private _services: ServicosService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.servicos = this._services.getServicos();
  }

  navegarParaAgendamento(servico: ServicoModel) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          nome: servico.nome,
          preco: servico.preco
      }
  };
    this._router.navigate(['agendamento'], navigationExtras);
  }
}
