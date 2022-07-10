import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { HorariosDisponiveisFirebaseModel } from './model/horarios-disponiveis-firebase.model';
import { HorasDeTrabalho } from './model/horarios-disponiveis.model';
import { HorarioService } from './services/horarios.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  public horariosDisponives: HorasDeTrabalho[] = [];
  public diaDocRef: string = '';
  public nome: string = '';
  public preco: number = 0;
  constructor(
    private router: Router,
    private _service: HorarioService,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params){
        this.nome = params.nome;
        this.preco = params.preco;
        console.log(this.nome );
        console.log(this.preco);
      }
    });
  }

  buscaHorariosDisponiveis($event: any) {
    this.diaDocRef = format(parseISO($event.detail.value), 'dd-MM-yyyy');
    const docData = this._service.buscaHorariosDisponiveis(this.diaDocRef);
    const dataParaIdentificarRangeHoras = parseISO($event.detail.value).getUTCDay();
    console.log(dataParaIdentificarRangeHoras);
    const horasDisponiveisPadrao = dataParaIdentificarRangeHoras == 0 ? Array.from({length: 9}, (_, i) => i + 7).map((x) => { return {hora: `${x}:00`, disponivel: true}}) : Array.from({length: 11}, (_, i) => i + 7).map((x) => { return {hora: `${x}:00`, disponivel: true}});

    docData.subscribe((response: HorariosDisponiveisFirebaseModel) => {
      if(response) {
        this.horariosDisponives = horasDisponiveisPadrao;
        response.horarios.forEach(hora => {
          this.horariosDisponives.find(x => x.hora == hora).disponivel = false;
        });
      } else {
        this.horariosDisponives = horasDisponiveisPadrao;
      }
    })
  }

  async reservarData(hora: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          nome: this.nome,
          preco: this.preco,
          data: this.diaDocRef,
          hora: hora
      }
    };

    const alerta = await this.alertController.create({
      header: 'Confirmação',
      message: `Confirma o agendamento no dia ${this.diaDocRef} às ${hora} ?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.alertController.dismiss();
          }
        },
        {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['enviar-angendamento'], navigationExtras);
          }
        },    
      ]
    });

    await alerta.present();
  }

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    
    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 1;
  }
}
