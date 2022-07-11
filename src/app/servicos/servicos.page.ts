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

    private codigoPais = '55';
    private whatsNumero = '16982391461';
    public url = 'https://api.whatsapp.com/';
    public href: string = `${this.url}send?phone=+${this.codigoPais}${this.whatsNumero}&text=Olá Mohrana, gostaria de saber mais sobre o curso de Design de Sobrancelhas.`      ;
   

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
  if(servico.id !== 8)
    this._router.navigate(['agendamento'], navigationExtras);
  }
}
