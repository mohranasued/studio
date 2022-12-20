"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_administracao_administracao_module_ts"],{

/***/ 8842:
/*!***************************************************************!*\
  !*** ./src/app/administracao/administracao-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoPageRoutingModule": () => (/* binding */ AdministracaoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _administracao_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao.page */ 9630);




const routes = [
    {
        path: '',
        component: _administracao_page__WEBPACK_IMPORTED_MODULE_0__.AdministracaoPage
    }
];
let AdministracaoPageRoutingModule = class AdministracaoPageRoutingModule {
};
AdministracaoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdministracaoPageRoutingModule);



/***/ }),

/***/ 2624:
/*!*******************************************************!*\
  !*** ./src/app/administracao/administracao.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoPageModule": () => (/* binding */ AdministracaoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _administracao_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./administracao-routing.module */ 8842);
/* harmony import */ var _administracao_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao.page */ 9630);
/* harmony import */ var _services_administracao_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/administracao.services */ 1231);








let AdministracaoPageModule = class AdministracaoPageModule {
};
AdministracaoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _administracao_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdministracaoPageRoutingModule
        ],
        providers: [_services_administracao_services__WEBPACK_IMPORTED_MODULE_2__.AdministracaoServices],
        declarations: [_administracao_page__WEBPACK_IMPORTED_MODULE_1__.AdministracaoPage]
    })
], AdministracaoPageModule);



/***/ }),

/***/ 9630:
/*!*****************************************************!*\
  !*** ./src/app/administracao/administracao.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoPage": () => (/* binding */ AdministracaoPage)
/* harmony export */ });
/* harmony import */ var E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _administracao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administracao.page.html?ngResource */ 4950);
/* harmony import */ var _administracao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administracao.page.scss?ngResource */ 5482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 6527);
/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/locale/pt-BR */ 6842);
/* harmony import */ var _services_administracao_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/administracao.services */ 1231);









let AdministracaoPage = class AdministracaoPage {
  constructor(_service, alertController) {
    this._service = _service;
    this.alertController = alertController;
    this.agendadas = [];
    this.dataHojeFormatada = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), "EEEE, 'dia' dd 'de' MMMM'", {
      locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__["default"]
    });
    this.dataSelecionada = new Date().toISOString();
  }

  ngOnInit() {
    var _this = this;

    return (0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dataFormatadaQuery = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(), 'dd-MM-yyyy');
      yield _this.carregaAgendamentos(dataFormatadaQuery);
    })();
  }

  carregaAgendamentos(dataQuery) {
    var _this2 = this;

    return (0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.agendadas = yield _this2._service.buscarAgendamentos(dataQuery);
    })();
  }

  buscaHorariosDisponiveis() {
    var _this3 = this;

    return (0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const dataFormatadaQuery = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(_this3.dataSelecionada), 'dd-MM-yyyy');
      _this3.agendadas = yield _this3._service.buscarAgendamentos(dataFormatadaQuery);

      _this3.modal.dismiss();
    })();
  }

  formatarData(dataRecebida) {
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(dataRecebida), "EEEE, 'Dia' dd 'de' MMMM'", {
      locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_5__["default"]
    });
  }

  removerReservaAgendamentos(id, data, hora) {
    var _this4 = this;

    return (0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alerta = yield _this4.alertController.create({
        header: 'Atenção',
        message: `Confirma o cancelamento desse agendamento?`,
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            _this4.alertController.dismiss();
          }
        }, {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            _this4._service.removerReservaAgendadas(id).then(() => {
              _this4._service.removerReservaAgendamento(data, hora).then( /*#__PURE__*/(0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                const dataQuery = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(_this4.dataSelecionada), 'dd-MM-yyyy');
                yield _this4.carregaAgendamentos(dataQuery);
              }));
            });
          }
        }]
      });
      yield alerta.present();
    })();
  }

};

AdministracaoPage.ctorParameters = () => [{
  type: _services_administracao_services__WEBPACK_IMPORTED_MODULE_3__.AdministracaoServices
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}];

AdministracaoPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonModal]
  }]
};
AdministracaoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-administracao',
  template: _administracao_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_administracao_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdministracaoPage);


/***/ }),

/***/ 1231:
/*!******************************************************************!*\
  !*** ./src/app/administracao/services/administracao.services.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdministracaoServices": () => (/* binding */ AdministracaoServices)
/* harmony export */ });
/* harmony import */ var E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);




let AdministracaoServices = class AdministracaoServices {
  constructor(_firestore) {
    this._firestore = _firestore;
  }

  buscarAgendamentos(data) {
    var _this = this;

    return (0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_this._firestore, 'agendadas'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('data', '==', data));
      const snapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(q);
      return snapshot.docs.map(doc => ({ ...doc.data(),
        id: doc.id
      }));
    })();
  }

  removerReservaAgendadas(id) {
    var _this2 = this;

    return (0,E_Repos_AgendaAe_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(id); //const q = query(collection(this._firestore, `agendadas/${id}`)/*, where('dir', '==', id)*/);   

      const agendaDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_this2._firestore, `agendadas/${id}`);
      return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(agendaDocRef);
    })();
  }

  removerReservaAgendamento(dia, hora) {
    const agendaDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this._firestore, `agendamento/${dia}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(agendaDocRef, {
      horarios: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.arrayRemove)(hora)
    }, {
      merge: true
    });
  }

};

AdministracaoServices.ctorParameters = () => [{
  type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore
}];

AdministracaoServices = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AdministracaoServices);


/***/ }),

/***/ 9180:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/pt-BR/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'menos de um segundo',
    other: 'menos de {{count}} segundos'
  },
  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos'
  },
  halfAMinute: 'meio minuto',
  lessThanXMinutes: {
    one: 'menos de um minuto',
    other: 'menos de {{count}} minutos'
  },
  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos'
  },
  aboutXHours: {
    one: 'cerca de 1 hora',
    other: 'cerca de {{count}} horas'
  },
  xHours: {
    one: '1 hora',
    other: '{{count}} horas'
  },
  xDays: {
    one: '1 dia',
    other: '{{count}} dias'
  },
  aboutXWeeks: {
    one: 'cerca de 1 semana',
    other: 'cerca de {{count}} semanas'
  },
  xWeeks: {
    one: '1 semana',
    other: '{{count}} semanas'
  },
  aboutXMonths: {
    one: 'cerca de 1 mês',
    other: 'cerca de {{count}} meses'
  },
  xMonths: {
    one: '1 mês',
    other: '{{count}} meses'
  },
  aboutXYears: {
    one: 'cerca de 1 ano',
    other: 'cerca de {{count}} anos'
  },
  xYears: {
    one: '1 ano',
    other: '{{count}} anos'
  },
  overXYears: {
    one: 'mais de 1 ano',
    other: 'mais de {{count}} anos'
  },
  almostXYears: {
    one: 'quase 1 ano',
    other: 'quase {{count}} anos'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'em ' + result;
    } else {
      return 'há ' + result;
    }
  }

  return result;
}

/***/ }),

/***/ 5833:
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/pt-BR/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ 4711);

var dateFormats = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: 'd MMM y',
  short: 'dd/MM/yyyy'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ 5303:
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/pt-BR/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatRelative)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: function (date, _baseDate, _options) {
    var weekday = date.getUTCDay();
    var last = weekday === 0 || weekday === 6 ? 'último' : 'última';
    return "'" + last + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: 'P'
};
function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];

  if (typeof format === 'function') {
    return format(date, baseDate, options);
  }

  return format;
}

/***/ }),

/***/ 3365:
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/pt-BR/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ 7850);

var eraValues = {
  narrow: ['AC', 'DC'],
  abbreviated: ['AC', 'DC'],
  wide: ['antes de cristo', 'depois de cristo']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
};
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  wide: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
};
var dayValues = {
  narrow: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  short: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
  abbreviated: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
  wide: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da tarde',
    night: 'da noite'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da tarde',
    night: 'da noite'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da tarde',
    night: 'da noite'
  }
};

function ordinalNumber(dirtyNumber, dirtyOptions) {
  var number = Number(dirtyNumber);
  var options = dirtyOptions || {};
  var unit = String(options.unit);

  if (unit === 'week' || unit === 'isoWeek') {
    return number + 'ª';
  }

  return number + 'º';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ 6532:
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/pt-BR/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ 4094);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ 7002);


var matchOrdinalNumberPattern = /^(\d+)[ºªo]?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
  wide: /^(antes de cristo|depois de cristo)/i
};
var parseEraPatterns = {
  any: [/^ac/i, /^dc/i],
  wide: [/^antes de cristo/i, /^depois de cristo/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmajsond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
};
var matchDayPatterns = {
  narrow: /^(dom|[23456]ª?|s[aá]b)/i,
  short: /^(dom|[23456]ª?|s[aá]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
  wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
};
var parseDayPatterns = {
  short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
  any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn|^meia[-\s]noite/i,
    noon: /^md|^meio[-\s]dia/i,
    morning: /manhã/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noite/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ 6842:
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/pt-BR/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ 9180);
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ 5833);
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ 5303);
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ 3365);
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ 6532);





/**
 * @type {Locale}
 * @category Locales
 * @summary Portuguese locale (Brazil).
 * @language Portuguese
 * @iso-639-2 por
 * @author Lucas Duailibe [@duailibe]{@link https://github.com/duailibe}
 * @author Yago Carballo [@yagocarballo]{@link https://github.com/YagoCarballo}
 */

var locale = {
  code: 'pt-BR',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ 5482:
/*!******************************************************************!*\
  !*** ./src/app/administracao/administracao.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-modal {\n  --border-radius: 16px;\n  --box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n}\n\nion-modal::part(backdrop) {\n  background: rgb(209, 213, 219);\n  opacity: 1;\n}\n\nion-modal ion-toolbar {\n  --background: rgb(14 116 144);\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluaXN0cmFjYW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQUE7RUFDQSxnRkFBQTtBQUFKOztBQUdFO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0U7RUFDRSw2QkFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJhZG1pbmlzdHJhY2FvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tb2RhbCB7XHJcbiAgICAvLyAtLWhlaWdodDogNTAlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tb2RhbDo6cGFydChiYWNrZHJvcCkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDksIDIxMywgMjE5KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tb2RhbCBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigxNCAxMTYgMTQ0KTtcclxuICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 4950:
/*!******************************************************************!*\
  !*** ./src/app/administracao/administracao.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Administrar agendamentos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen>\n  <ion-label>Agendamentos do {{ dataHojeFormatada }}</ion-label>\n  <ion-list>\n    <ion-card *ngFor=\"let reserva of agendadas\">\n      <ion-card-header>\n        <ion-card-subtitle>{{ reserva.data }} {{ reserva.hora }}</ion-card-subtitle>\n        <ion-card-title>{{ reserva.nome }} {{ reserva.sobrenome }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label>\n            <strong>Serviço: </strong>\n            {{ reserva.servico }}\n          </ion-label>\n        </ion-item>        \n        <ion-item>\n          <ion-label>\n            <strong>Celular: </strong>\n            {{ reserva.celular }}\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">\n            <strong>Observação: </strong>\n            {{ reserva.observacao }}\n          </ion-label>\n        </ion-item>        \n      </ion-card-content>\n      <ion-footer>\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"removerReservaAgendamentos(reserva.id, reserva.data, reserva.hora)\">CANCELAR AGENDA</ion-button>\n      </ion-footer>\n    </ion-card>\n  </ion-list>\n  \n  <!-- fab placed to the top end -->\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button id=\"open-modal\">\n      <ion-icon name=\"filter-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-modal #modal trigger=\"open-modal\">\n    <ng-template>\n      <ion-content>\n        <ion-toolbar>\n          <ion-title>Filtrar data</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button color=\"light\" (click)=\"modal.dismiss()\">Fechar</ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-row class=\"ion-padding ion-justify-content-center\">  \n          <ion-datetime locale=\"pt-BR\" [(ngModel)]=\"dataSelecionada\" color=\"rose\"></ion-datetime>\n        </ion-row>\n        <ion-row class=\"ion-padding ion-justify-content-center\">  \n          <ion-label>\n            <strong>\n              {{ formatarData(dataSelecionada) }}\n            </strong>\n          </ion-label>\n        </ion-row>\n\n        <ion-row class=\"ion-padding ion-justify-content-center\">\n          <ion-col>\n            <ion-button expand=\"block\" color=\"success\" (click)=\"buscaHorariosDisponiveis()\">FILTRAR</ion-button>\n          </ion-col>\n        </ion-row>        \n      </ion-content>\n    </ng-template>\n  </ion-modal>  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_administracao_administracao_module_ts.js.map