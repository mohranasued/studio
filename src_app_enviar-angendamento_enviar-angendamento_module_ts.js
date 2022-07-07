"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_enviar-angendamento_enviar-angendamento_module_ts"],{

/***/ 5982:
/*!***************************************************************************!*\
  !*** ./src/app/enviar-angendamento/enviar-angendamento-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviarAngendamentoPageRoutingModule": () => (/* binding */ EnviarAngendamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _enviar_angendamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enviar-angendamento.page */ 1732);




const routes = [
    {
        path: '',
        component: _enviar_angendamento_page__WEBPACK_IMPORTED_MODULE_0__.EnviarAngendamentoPage
    }
];
let EnviarAngendamentoPageRoutingModule = class EnviarAngendamentoPageRoutingModule {
};
EnviarAngendamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EnviarAngendamentoPageRoutingModule);



/***/ }),

/***/ 5878:
/*!*******************************************************************!*\
  !*** ./src/app/enviar-angendamento/enviar-angendamento.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviarAngendamentoPageModule": () => (/* binding */ EnviarAngendamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _enviar_angendamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enviar-angendamento-routing.module */ 5982);
/* harmony import */ var _enviar_angendamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enviar-angendamento.page */ 1732);
/* harmony import */ var _services_enviar_agendamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/enviar-agendamento.service */ 4368);








let EnviarAngendamentoPageModule = class EnviarAngendamentoPageModule {
};
EnviarAngendamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _enviar_angendamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.EnviarAngendamentoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        providers: [_services_enviar_agendamento_service__WEBPACK_IMPORTED_MODULE_2__.EnviarAgendamentoService],
        declarations: [_enviar_angendamento_page__WEBPACK_IMPORTED_MODULE_1__.EnviarAngendamentoPage]
    })
], EnviarAngendamentoPageModule);



/***/ }),

/***/ 1732:
/*!*****************************************************************!*\
  !*** ./src/app/enviar-angendamento/enviar-angendamento.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviarAngendamentoPage": () => (/* binding */ EnviarAngendamentoPage)
/* harmony export */ });
/* harmony import */ var E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _enviar_angendamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enviar-angendamento.page.html?ngResource */ 4622);
/* harmony import */ var _enviar_angendamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enviar-angendamento.page.scss?ngResource */ 5551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _model_info_cliente_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/info-cliente.model */ 4493);
/* harmony import */ var _services_enviar_agendamento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/enviar-agendamento.service */ 4368);










let EnviarAngendamentoPage = class EnviarAngendamentoPage {
  constructor(fb, alertController, activatedRoute, _services, router) {
    this.fb = fb;
    this.alertController = alertController;
    this.activatedRoute = activatedRoute;
    this._services = _services;
    this.router = router;
    this.infoAgendamento = this.fb.group({
      nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      sobrenome: [''],
      celular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      observacao: ['']
    });
    this.nome = '';
    this.preco = 0;
    this.data = '';
    this.hora = '';
    this.href = '';
    this.codigoPais = '55';
    this.whatsNumero = '16982391461';
    this.url = 'https://api.whatsapp.com/';
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params) {
        this.nome = params.nome;
        this.preco = params.preco;
        this.data = params.data;
        this.hora = params.hora;
        this.href = `${this.url}send?phone=+${this.codigoPais}${this.whatsNumero}&text=Olá, confirmo meu horário dia ${this.data} às ${this.hora}.`;
        console.log(this.href);
      }
    });
  }

  enviarInformacoes() {
    var _this = this;

    return (0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.infoAgendamento.valid) {
        const alerta = yield _this.alertController.create({
          header: 'Atenção',
          message: `Por favor, preencha aos menos primeiro nome e celular para facilitar entrar em contato, obrigada 😉`,
          buttons: [{
            text: 'Ok',
            role: 'confirm',
            handler: () => {
              _this.alertController.dismiss();
            }
          }]
        });
        yield alerta.present();
      } else {
        const infoCliente = new _model_info_cliente_model__WEBPACK_IMPORTED_MODULE_3__.InfoClienteModel();
        infoCliente.nome = _this.infoAgendamento.value.nome;
        infoCliente.sobrenome = _this.infoAgendamento.value.sobrenome;
        infoCliente.celular = _this.infoAgendamento.value.celular;
        infoCliente.observacao = _this.infoAgendamento.value.observacao;
        infoCliente.data = _this.data;
        infoCliente.hora = _this.hora;

        _this._services.adicionarInfoCliente(infoCliente).then(() => {
          _this._services.adicionarReserva(_this.data, _this.hora).then( /*#__PURE__*/(0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const alerta = yield _this.alertController.create({
              header: 'Sucesso',
              message: `Agendamento realizado com sucesso, te aguardo anciosamente, obrigada!`,
              buttons: [{
                text: 'Ok',
                role: 'confirm',
                handler: () => {
                  _this.alertController.dismiss();

                  _this.router.navigate(['home']);
                }
              }]
            });
            yield alerta.present();
          })).catch( /*#__PURE__*/(0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const alerta = yield _this.alertController.create({
              header: 'Error',
              message: `Ops, ocorreu um erro ao enviar os seus dados, por favor tente novamente!`,
              buttons: [{
                text: 'Ok',
                role: 'confirm',
                handler: () => {
                  _this.alertController.dismiss();
                }
              }]
            });
            yield alerta.present();
          }));
        }).catch( /*#__PURE__*/(0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          const alerta = yield _this.alertController.create({
            header: 'Error',
            message: `Ops, ocorreu um erro ao enviar os seus dados, por favor tente novamente!`,
            buttons: [{
              text: 'Ok',
              role: 'confirm',
              handler: () => {
                _this.alertController.dismiss();
              }
            }]
          });
          yield alerta.present();
        }));
      }
    })();
  }

};

EnviarAngendamentoPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _services_enviar_agendamento_service__WEBPACK_IMPORTED_MODULE_4__.EnviarAgendamentoService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

EnviarAngendamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-enviar-angendamento',
  template: _enviar_angendamento_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_enviar_angendamento_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EnviarAngendamentoPage);


/***/ }),

/***/ 4493:
/*!*****************************************************************!*\
  !*** ./src/app/enviar-angendamento/model/info-cliente.model.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoClienteModel": () => (/* binding */ InfoClienteModel)
/* harmony export */ });
class InfoClienteModel {
}


/***/ }),

/***/ 4368:
/*!****************************************************************************!*\
  !*** ./src/app/enviar-angendamento/services/enviar-agendamento.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnviarAgendamentoService": () => (/* binding */ EnviarAgendamentoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ 2535);




let EnviarAgendamentoService = class EnviarAgendamentoService {
    constructor(_firestore) {
        this._firestore = _firestore;
    }
    adicionarReserva(dia, hora) {
        const agendaDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this._firestore, `agendamento/${dia}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(agendaDocRef, { horarios: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.arrayUnion)(hora) });
    }
    adicionarInfoCliente(infoCliente) {
        const agendaDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this._firestore, `agendadas/${uuid__WEBPACK_IMPORTED_MODULE_1__["default"]()}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.setDoc)(agendaDocRef, {
            nome: infoCliente.nome,
            sobrenome: infoCliente.sobrenome ?? '',
            celular: infoCliente.celular,
            observacao: infoCliente.observacao ?? '',
            data: infoCliente.data,
            hora: infoCliente.hora
        });
    }
};
EnviarAgendamentoService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore }
];
EnviarAgendamentoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], EnviarAgendamentoService);



/***/ }),

/***/ 8970:
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 6421:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 3054:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 231);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ 2535:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 6421);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 3054);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ 231:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 8970);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ 5551:
/*!******************************************************************************!*\
  !*** ./src/app/enviar-angendamento/enviar-angendamento.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnZpYXItYW5nZW5kYW1lbnRvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4622:
/*!******************************************************************************!*\
  !*** ./src/app/enviar-angendamento/enviar-angendamento.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Confirmar agendamento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <form [formGroup]=\"infoAgendamento\">\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            Agendar dia {{ data }} às {{ hora }}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Nome</ion-label>\n            <ion-input formControlName=\"nome\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Sobrenome</ion-label>\n            <ion-input formControlName=\"sobrenome\"></ion-input>\n          </ion-item>        \n        </ion-col>      \n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Celular</ion-label>\n            <ion-input formControlName=\"celular\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>    \n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Observações?</ion-label>\n            <ion-textarea formControlName=\"observacao\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"enviarInformacoes()\">\n            <ion-icon slot=\"end\" name=\"logo-whatsapp\"></ion-icon>          \n            <ion-label>\n              CONFIRMAR VIA WHATSAPP\n            </ion-label>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_enviar-angendamento_enviar-angendamento_module_ts.js.map