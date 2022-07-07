"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_servicos_servicos_module_ts"],{

/***/ 3331:
/*!*******************************************************!*\
  !*** ./src/app/servicos/services/servicos.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicosService": () => (/* binding */ ServicosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let ServicosService = class ServicosService {
    constructor() { }
    getServicos() {
        return [
            {
                id: 1,
                nome: 'Design Estratégico',
                descricao: 'É uma técnica aonde fazemos a epilação correta dos fios, deixando elas harmônicas e tem como objetivo valorizar o rosto e expressão da cliente. Para isso, é levado em consideração o mapeamento e estrutura do seu rosto dentro do visagismo.',
                imgUrl: '../../assets/img/img01.jpeg',
                preco: 35
            },
            {
                id: 2,
                nome: 'Design Estratégico + Henna',
                descricao: 'Henna tem a função de corrigir pequenas falhas, alongar e realçar as sobrancelhas. Com a durabilidade na pele de 5 a 8 dias.',
                imgUrl: '../../assets/img/img02.jpeg',
                preco: 45
            },
            {
                id: 3,
                nome: 'Design Estratégico + Tintura',
                descricao: 'A tintura tem como função colorir os fios brancos , sem agredir os fios , durabilidade de 20 a 30 dias.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 45
            },
            {
                id: 4,
                nome: 'Epilação de Buço',
                descricao: 'Função de remover os pelos do buço com auxílio de cera.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 8
            },
            {
                id: 5,
                nome: 'Brow Lamination',
                descricao: 'Essa técnica usa a sobrancelha natural da pessoa e com a ajuda de produtos químicos, a deixa com aspecto de volumosa e com os pelos mais alinhados”,  durabilidade de 40 a 60 dias.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 100
            },
            {
                id: 6,
                nome: 'Micropigmentação Labial',
                descricao: 'Com a micropigmentação você conquista lábios com a cor que você deseja, podendo ser em tons mais naturais até aos mais vibrantes, como o vermelho. Também pode corrigir assimetrias e imperfeições como cicatrizes! Técnica realizada com auxílio de anestésico tópico.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 320
            },
            {
                id: 7,
                nome: 'Nanopigmentação Sombrancelhas',
                descricao: 'Implantação de um pigmento na primeira camada da pele , aproximando a aparência dos pelos reais da sobrancelha. E também temos o efeito Shadow que aparenta o efeito da henna , ambas com durabilidade de 8 a 12 meses.',
                imgUrl: '../../assets/img/img03.jpeg',
                preco: 320
            },
        ];
    }
};
ServicosService.ctorParameters = () => [];
ServicosService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ServicosService);



/***/ }),

/***/ 4790:
/*!*****************************************************!*\
  !*** ./src/app/servicos/servicos-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicosPageRoutingModule": () => (/* binding */ ServicosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _servicos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicos.page */ 6291);




const routes = [
    {
        path: '',
        component: _servicos_page__WEBPACK_IMPORTED_MODULE_0__.ServicosPage
    }
];
let ServicosPageRoutingModule = class ServicosPageRoutingModule {
};
ServicosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServicosPageRoutingModule);



/***/ }),

/***/ 699:
/*!*********************************************!*\
  !*** ./src/app/servicos/servicos.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicosPageModule": () => (/* binding */ ServicosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _servicos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicos-routing.module */ 4790);
/* harmony import */ var _servicos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicos.page */ 6291);
/* harmony import */ var _services_servicos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/servicos.service */ 3331);








let ServicosPageModule = class ServicosPageModule {
};
ServicosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _servicos_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServicosPageRoutingModule
        ],
        providers: [_services_servicos_service__WEBPACK_IMPORTED_MODULE_2__.ServicosService],
        declarations: [_servicos_page__WEBPACK_IMPORTED_MODULE_1__.ServicosPage]
    })
], ServicosPageModule);



/***/ }),

/***/ 6291:
/*!*******************************************!*\
  !*** ./src/app/servicos/servicos.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicosPage": () => (/* binding */ ServicosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _servicos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicos.page.html?ngResource */ 9968);
/* harmony import */ var _servicos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicos.page.scss?ngResource */ 2263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_servicos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/servicos.service */ 3331);






let ServicosPage = class ServicosPage {
    constructor(_services, _router) {
        this._services = _services;
        this._router = _router;
        this.servicos = [];
    }
    ngOnInit() {
        this.servicos = this._services.getServicos();
    }
    navegarParaAgendamento(servico) {
        const navigationExtras = {
            queryParams: {
                nome: servico.nome,
                preco: servico.preco
            }
        };
        this._router.navigate(['agendamento'], navigationExtras);
    }
};
ServicosPage.ctorParameters = () => [
    { type: _services_servicos_service__WEBPACK_IMPORTED_MODULE_2__.ServicosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ServicosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-servicos',
        template: _servicos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_servicos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ServicosPage);



/***/ }),

/***/ 2263:
/*!********************************************************!*\
  !*** ./src/app/servicos/servicos.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".moeda {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY29zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzZXJ2aWNvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9lZGEge1xyXG4gICAgY29sb3I6IGdyZWVuXHJcbn0iXX0= */";

/***/ }),

/***/ 9968:
/*!********************************************************!*\
  !*** ./src/app/servicos/servicos.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Selecione um Serviço</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen>\n  <ion-card *ngFor=\"let item of servicos\" (click)=\"navegarParaAgendamento(item)\">\n    <div>\n      <ion-img [src]=\"item.imgUrl\" [alt]=\"item.nome\"></ion-img>\n    </div>\n    <ion-card-header>\n      <ion-card-subtitle class=\"moeda\">{{ item.preco | currency : 'BRL' : true : '1.2' }}</ion-card-subtitle>\n      <ion-card-title>{{ item.nome }}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>{{ item.descricao }}</ion-card-content>\n  </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_servicos_servicos_module_ts.js.map