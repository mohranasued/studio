"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_agendamento_agendamento_module_ts"],{

/***/ 8757:
/*!***********************************************************!*\
  !*** ./src/app/agendamento/agendamento-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendamentoPageRoutingModule": () => (/* binding */ AgendamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _agendamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agendamento.page */ 8682);




const routes = [
    {
        path: '',
        component: _agendamento_page__WEBPACK_IMPORTED_MODULE_0__.AgendamentoPage
    }
];
let AgendamentoPageRoutingModule = class AgendamentoPageRoutingModule {
};
AgendamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgendamentoPageRoutingModule);



/***/ }),

/***/ 1242:
/*!***************************************************!*\
  !*** ./src/app/agendamento/agendamento.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendamentoPageModule": () => (/* binding */ AgendamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agendamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agendamento-routing.module */ 8757);
/* harmony import */ var _agendamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agendamento.page */ 8682);
/* harmony import */ var _services_horarios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/horarios.service */ 131);








let AgendamentoPageModule = class AgendamentoPageModule {
};
AgendamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _agendamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgendamentoPageRoutingModule
        ],
        providers: [_services_horarios_service__WEBPACK_IMPORTED_MODULE_2__.HorarioService],
        declarations: [_agendamento_page__WEBPACK_IMPORTED_MODULE_1__.AgendamentoPage,]
    })
], AgendamentoPageModule);



/***/ }),

/***/ 8682:
/*!*************************************************!*\
  !*** ./src/app/agendamento/agendamento.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgendamentoPage": () => (/* binding */ AgendamentoPage)
/* harmony export */ });
/* harmony import */ var E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agendamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agendamento.page.html?ngResource */ 1407);
/* harmony import */ var _agendamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agendamento.page.scss?ngResource */ 4393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 6527);
/* harmony import */ var _services_horarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/horarios.service */ 131);









let AgendamentoPage = class AgendamentoPage {
  constructor(router, _service, alertController, activatedRoute) {
    this.router = router;
    this._service = _service;
    this.alertController = alertController;
    this.activatedRoute = activatedRoute;
    this.horariosDisponives = [];
    this.diaDocRef = '';
    this.nome = '';
    this.preco = 0;

    this.isWeekday = dateString => {
      const date = new Date(dateString);
      const utcDay = date.getUTCDay();
      const x = new Date(2022, 6, 14, 21);
      const y = new Date(2022, 6, 15, 21); // console.log('data-calendario ==========')
      // console.log(date);
      // console.log('data-calendario ==========')
      // console.log('data-configurado ==========')
      // console.log(x);
      // console.log(y);
      // console.log('data-configurado ==========')

      /**
       * Date will be enabled if it is not
       * Sunday or Saturday
       */

      return utcDay !== 0 && utcDay !== 1 && date.valueOf() != x.valueOf() && date.valueOf() != y.valueOf();
    };
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        this.nome = params.nome;
        this.preco = params.preco;
      }
    });
  }

  buscaHorariosDisponiveis($event) {
    this.diaDocRef = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])($event.detail.value), 'dd-MM-yyyy');

    const docData = this._service.buscaHorariosDisponiveis(this.diaDocRef);

    const dataParaIdentificarRangeHoras = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])($event.detail.value).getUTCDay();
    console.log(dataParaIdentificarRangeHoras);
    const horasDisponiveisPadrao = dataParaIdentificarRangeHoras == 0 ? Array.from({
      length: 9
    }, (_, i) => i + 7).map(x => {
      return {
        hora: `${x}:00`,
        disponivel: true
      };
    }) : Array.from({
      length: 11
    }, (_, i) => i + 7).map(x => {
      return {
        hora: `${x}:00`,
        disponivel: true
      };
    });
    docData.subscribe(response => {
      if (response) {
        this.horariosDisponives = horasDisponiveisPadrao;
        response.horarios.forEach(hora => {
          this.horariosDisponives.find(x => x.hora == hora).disponivel = false;
        });
      } else {
        this.horariosDisponives = horasDisponiveisPadrao;
      }
    });
  }

  reservarData(hora) {
    var _this = this;

    return (0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const navigationExtras = {
        queryParams: {
          nome: _this.nome,
          preco: _this.preco,
          data: _this.diaDocRef,
          hora: hora
        }
      };
      const alerta = yield _this.alertController.create({
        header: 'Confirmação',
        message: `Confirma o agendamento no dia ${_this.diaDocRef} às ${hora} ?`,
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            _this.alertController.dismiss();
          }
        }, {
          text: 'Ok',
          role: 'confirm',
          handler: () => {
            _this.router.navigate(['enviar-angendamento'], navigationExtras);
          }
        }]
      });
      yield alerta.present();
    })();
  }

};

AgendamentoPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_horarios_service__WEBPACK_IMPORTED_MODULE_3__.HorarioService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}];

AgendamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-agendamento',
  template: _agendamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_agendamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AgendamentoPage);


/***/ }),

/***/ 131:
/*!**********************************************************!*\
  !*** ./src/app/agendamento/services/horarios.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorarioService": () => (/* binding */ HorarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);



let HorarioService = class HorarioService {
    constructor(_firestore) {
        this._firestore = _firestore;
    }
    buscaHorariosDisponiveis(dia) {
        const agendaDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this._firestore, `agendamento/${dia}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.docData)(agendaDocRef);
    }
};
HorarioService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore }
];
HorarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], HorarioService);



/***/ }),

/***/ 4393:
/*!**************************************************************!*\
  !*** ./src/app/agendamento/agendamento.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFnZW5kYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJhZ2VuZGFtZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG59Il19 */";

/***/ }),

/***/ 1407:
/*!**************************************************************!*\
  !*** ./src/app/agendamento/agendamento.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Agendar Horário</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen>\n  <ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-label>\n          <strong>\n            Serviço:        \n          </strong> \n        </ion-label>\n      </ion-col>\n      <ion-col>\n        {{ nome }}\n      </ion-col>\n    </ion-row>\n  </ion-item>\n  <ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-label>\n          <strong>\n            Valor:        \n          </strong> \n        </ion-label>\n      </ion-col>\n      <ion-col>\n        {{ preco | currency : 'BRL' : true : '1.2' }}\n      </ion-col>   \n    </ion-row>\n  </ion-item>\n  <ion-item class=\"ion-padding\">\n    <ion-datetime locale=\"pt-BR\" [isDateEnabled]=\"isWeekday\" (ionChange)=\"buscaHorariosDisponiveis($event)\">\n    </ion-datetime>\n  </ion-item>\n  <ion-list lines=\"none\">\n    <ion-item *ngFor=\"let horario of horariosDisponives\">\n      <ion-button [disabled]=\"!horario.disponivel\" [color]=\"horario.disponivel ? 'success' : 'danger'\" expand=\"block\" (click)=\"reservarData(horario.hora)\">{{ horario.hora }}</ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_agendamento_agendamento_module_ts.js.map