"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9292],{9292:(S,h,d)=>{d.r(h),d.d(h,{EnviarAngendamentoPageModule:()=>x});var p=d(6895),l=d(4719),a=d(7181),u=d(506),m=d(5861);class A{}var g,n=d(6738),c=d(2875),b=new Uint8Array(16);function y(){if(!g&&!(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(b)}const Z=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,C=function E(o){return"string"==typeof o&&Z.test(o)};for(var i=[],f=0;f<256;++f)i.push((f+256).toString(16).substr(1));const R=function P(o,t,e){var r=(o=o||{}).random||(o.rng||y)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){e=e||0;for(var s=0;s<16;++s)t[e+s]=r[s];return t}return function w(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(i[o[t+0]]+i[o[t+1]]+i[o[t+2]]+i[o[t+3]]+"-"+i[o[t+4]]+i[o[t+5]]+"-"+i[o[t+6]]+i[o[t+7]]+"-"+i[o[t+8]]+i[o[t+9]]+"-"+i[o[t+10]]+i[o[t+11]]+i[o[t+12]]+i[o[t+13]]+i[o[t+14]]+i[o[t+15]]).toLowerCase();if(!C(e))throw TypeError("Stringified UUID is invalid");return e}(r)};let v=(()=>{class o{constructor(e){this._firestore=e}adicionarReserva(e,r){const s=(0,c.JU)(this._firestore,`agendamento/${e}`);return(0,c.pl)(s,{horarios:(0,c.vr)(r)},{merge:!0})}adicionarInfoCliente(e){const r=(0,c.JU)(this._firestore,`agendadas/${R()}`);return(0,c.pl)(r,{nome:e.nome,sobrenome:e.sobrenome??"",celular:e.celular,observacao:e.observacao??"",data:e.data,hora:e.hora})}}return o.\u0275fac=function(e){return new(e||o)(n.LFG(c.gg))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const T=[{path:"",component:(()=>{class o{constructor(e,r,s,N,O){this.fb=e,this.alertController=r,this.activatedRoute=s,this._services=N,this.router=O,this.infoAgendamento=this.fb.group({nome:["",l.kI.required],sobrenome:[""],celular:["",l.kI.required],observacao:[""]}),this.nome="",this.preco=0,this.data="",this.hora="",this.href="",this.codigoPais="55",this.whatsNumero="16982391461",this.url="https://api.whatsapp.com/"}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{e&&(this.nome=e.nome,this.preco=e.preco,this.data=e.data,this.hora=e.hora,this.href=`${this.url}send?phone=+${this.codigoPais}${this.whatsNumero}&text=Ol\xe1, confirmo meu hor\xe1rio dia ${this.data} \xe0s ${this.hora}.`,console.log(this.href))})}enviarInformacoes(){var e=this;return(0,m.Z)(function*(){if(e.infoAgendamento.valid){const r=new A;r.nome=e.infoAgendamento.value.nome,r.sobrenome=e.infoAgendamento.value.sobrenome,r.celular=e.infoAgendamento.value.celular,r.observacao=e.infoAgendamento.value.observacao,r.data=e.data,r.hora=e.hora,e._services.adicionarInfoCliente(r).then(()=>{e._services.adicionarReserva(e.data,e.hora).then((0,m.Z)(function*(){yield(yield e.alertController.create({header:"Sucesso",message:"Agendamento realizado com sucesso, toque em OK para me avisar via whatsapp, obrigada ;)",buttons:[{text:"OK",role:"confirm",handler:()=>{e.alertController.dismiss(),e.confirmarWhatsApp(),e.router.navigate(["home"])}}]})).present()})).catch((0,m.Z)(function*(){yield(yield e.alertController.create({header:"Error",message:"Ops, ocorreu um erro ao enviar os seus dados, por favor tente novamente!",buttons:[{text:"Ok",role:"confirm",handler:()=>{e.alertController.dismiss()}}]})).present()}))}).catch((0,m.Z)(function*(){yield(yield e.alertController.create({header:"Error",message:"Ops, ocorreu um erro ao enviar os seus dados, por favor tente novamente!",buttons:[{text:"Ok",role:"confirm",handler:()=>{e.alertController.dismiss()}}]})).present()}))}else yield(yield e.alertController.create({header:"Aten\xe7\xe3o",message:"Por favor, preencha aos menos primeiro nome e celular para facilitar entrar em contato, obrigada \u{1f609}",buttons:[{text:"Ok",role:"confirm",handler:()=>{e.alertController.dismiss()}}]})).present()})()}confirmarWhatsApp(){window.open(this.href)}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(l.qu),n.Y36(a.Br),n.Y36(u.gz),n.Y36(v),n.Y36(u.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-enviar-angendamento"]],decls:40,vars:3,consts:[["slot","start"],[3,"formGroup"],["position","stacked"],["formControlName","nome"],["formControlName","sobrenome"],["formControlName","celular"],["formControlName","observacao"],["expand","block",3,"click"]],template:function(e,r){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar"),n._UZ(2,"ion-back-button",0),n.TgZ(3,"ion-title"),n._uU(4,"Confirmar agendamento"),n.qZA()()(),n.TgZ(5,"ion-content")(6,"ion-grid")(7,"form",1)(8,"ion-row")(9,"ion-col")(10,"ion-label"),n._uU(11),n.qZA()()(),n.TgZ(12,"ion-row")(13,"ion-col")(14,"ion-item")(15,"ion-label",2),n._uU(16,"Nome"),n.qZA(),n._UZ(17,"ion-input",3),n.qZA()(),n.TgZ(18,"ion-col")(19,"ion-item")(20,"ion-label",2),n._uU(21,"Sobrenome"),n.qZA(),n._UZ(22,"ion-input",4),n.qZA()()(),n.TgZ(23,"ion-row")(24,"ion-col")(25,"ion-item")(26,"ion-label",2),n._uU(27,"Celular"),n.qZA(),n._UZ(28,"ion-input",5),n.qZA()()(),n.TgZ(29,"ion-row")(30,"ion-col")(31,"ion-item")(32,"ion-label",2),n._uU(33,"Observa\xe7\xf5es?"),n.qZA(),n._UZ(34,"ion-textarea",6),n.qZA()()(),n.TgZ(35,"ion-row")(36,"ion-col")(37,"ion-button",7),n.NdJ("click",function(){return r.enviarInformacoes()}),n.TgZ(38,"ion-label"),n._uU(39," CONFIRMAR AGENDA "),n.qZA()()()()()()()),2&e&&(n.xp6(7),n.Q6J("formGroup",r.infoAgendamento),n.xp6(4),n.AsE(" Agendar dia ",r.data," \xe0s ",r.hora," "))},dependencies:[l._Y,l.JJ,l.JL,a.oU,a.YG,a.wI,a.W2,a.jY,a.Gu,a.pK,a.Ie,a.Q$,a.Nd,a.g2,a.sr,a.wd,a.j9,a.cs,l.sg,l.u]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.Bz.forChild(T),u.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[v],imports:[p.ez,l.u5,a.Pc,I,l.u5,l.UX]}),o})()}}]);