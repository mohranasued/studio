import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InfoClienteModel } from './model/info-cliente.model';
import { EnviarAgendamentoService } from './services/enviar-agendamento.service';

@Component({
  selector: 'app-enviar-angendamento',
  templateUrl: './enviar-angendamento.page.html',
  styleUrls: ['./enviar-angendamento.page.scss'],
})
export class EnviarAngendamentoPage implements OnInit {

  constructor(
    private fb: FormBuilder,    
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private _services: EnviarAgendamentoService,
    private router: Router
  ) { }

  infoAgendamento = this.fb.group({
    nome: ['', Validators.required],
    sobrenome: [''],
    celular: ['', Validators.required],
    observacao: ['']
  });
  public nome: string = '';
  public preco: number = 0;
  public data: string = '';
  public hora: string = '';
  public href: string = '';
  private codigoPais = '55';
  private whatsNumero = '16982391461';
  public url = 'https://api.whatsapp.com/';
;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params){
        this.nome = params.nome;
        this.preco = params.preco;
        this.data = params.data;
        this.hora = params.hora;        
      }
    });
  }

  async enviarInformacoes() {    
    if(!this.infoAgendamento.valid) {
      this.href = `${this.url}send?phone=+${this.codigoPais}${this.whatsNumero}&text=Olá Mohrana, sou ${this.infoAgendamento.value.nome} ${this.infoAgendamento.value.sobrenome}, gostaria de confirmar meu horário dia ${this.data} às ${this.hora}.`
      const alerta = await this.alertController.create({
        header: 'Atenção',
        message: `Por favor, preencha aos menos primeiro nome e celular para facilitar entrar em contato, obrigada 😉`,
        buttons: [
          {
            text: 'Ok',
            role: 'confirm',
            handler: () => {
              this.alertController.dismiss();
            }
          },    
        ]
      });
      await alerta.present();
    } else {      
      const infoCliente = new InfoClienteModel();
      infoCliente.nome = this.infoAgendamento.value.nome;
      infoCliente.sobrenome = this.infoAgendamento.value.sobrenome;
      infoCliente.celular = this.infoAgendamento.value.celular;
      infoCliente.observacao = this.infoAgendamento.value.observacao;
      infoCliente.data = this.data;
      infoCliente.hora = this.hora;
      infoCliente.servico = this.nome;
      infoCliente.precoServico = this.preco;

      this._services.adicionarInfoCliente(infoCliente).then(() => {
        this._services.adicionarReserva(this.data, this.hora).then(async() => {
          const alerta = await this.alertController.create({
            header: 'Sucesso',
            message: `Agendamento realizado com sucesso, toque em OK para me avisar via whatsapp, obrigada ;)`,
            buttons: [
              {
                text: 'OK',
                role: 'confirm',
                handler: () => {
                  this.alertController.dismiss();
                  this.confirmarWhatsApp();
                  this.router.navigate(['home']);
                }
              },    
            ]
          });
  
          await alerta.present();
        }).catch(async () => {
          const alerta = await this.alertController.create({
            header: 'Error',
            message: `Ops, ocorreu um erro ao enviar os seus dados, por favor tente novamente!`,
            buttons: [
              {
                text: 'Ok',
                role: 'confirm',
                handler: () => {
                  this.alertController.dismiss();
                }
              },    
            ]
          });
  
          await alerta.present();
        });
      }).catch(async () => {
        const alerta = await this.alertController.create({
          header: 'Error',
          message: `Ops, ocorreu um erro ao enviar os seus dados, por favor tente novamente!`,
          buttons: [
            {
              text: 'Ok',
              role: 'confirm',
              handler: () => {
                this.alertController.dismiss();
              }
            },    
          ]
        });

        await alerta.present();
      })
    }
  }
  
  confirmarWhatsApp()      
  {
    window.open(this.href);
  }
}

