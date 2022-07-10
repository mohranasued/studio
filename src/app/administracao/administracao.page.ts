import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { AgendadasModel } from './model/agendadas.model';
import { AdministracaoServices } from './services/administracao.services';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.page.html',
  styleUrls: ['./administracao.page.scss'],
})
export class AdministracaoPage implements OnInit {

  constructor(
    private _service: AdministracaoServices,
    private alertController: AlertController,
  ) { }
  @ViewChild(IonModal) modal: IonModal;
  public agendadas: AgendadasModel[] = [];
  public dataHojeFormatada =  format(new Date(), "EEEE, 'dia' dd 'de' MMMM'", { locale: ptBR });

  public dataSelecionada = new Date().toISOString();
 
  async ngOnInit() {
    const dataFormatadaQuery = format(new Date(), 'dd-MM-yyyy');
    await this.carregaAgendamentos(dataFormatadaQuery);
  }

  async carregaAgendamentos(dataQuery: string) {
    this.agendadas = await this._service.buscarAgendamentos(dataQuery);
  }

  async buscaHorariosDisponiveis(){
    const dataFormatadaQuery = format(parseISO(this.dataSelecionada), 'dd-MM-yyyy');
    this.agendadas = await this._service.buscarAgendamentos(dataFormatadaQuery);
    this.modal.dismiss();
  }

  formatarData(dataRecebida: string){
    return format(parseISO(dataRecebida), "EEEE, 'Dia' dd 'de' MMMM'", { locale: ptBR });
  }

  async removerReservaAgendamentos(id: string, data: string, hora: string) {
    const alerta = await this.alertController.create({
      header: 'Atenção',
      message: `Confirma o cancelamento desse agendamento?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.alertController.dismiss();
          }
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this._service.removerReservaAgendadas(id).then(() => {
              this._service.removerReservaAgendamento(data, hora).then(async () => {
                const dataQuery = format(parseISO(this.dataSelecionada), 'dd-MM-yyyy'); 
                await this.carregaAgendamentos(dataQuery);
              })
            })
          }
        },    
      ]
    });

    await alerta.present();
  }
}
