"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9292],{9292:(N,v,c)=>{c.r(v),c.d(v,{EnviarAngendamentoPageModule:()=>x});var p=c(6895),l=c(4719),t=c(7181),u=c(506),m=c(5861);class A{}var g,n=c(6738),d=c(2875),b=new Uint8Array(16);function y(){if(!g&&!(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(b)}const Z=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,C=function E(o){return"string"==typeof o&&Z.test(o)};for(var i=[],f=0;f<256;++f)i.push((f+256).toString(16).substr(1));const R=function P(o,r,e){var a=(o=o||{}).random||(o.rng||y)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,r){e=e||0;for(var s=0;s<16;++s)r[e+s]=a[s];return r}return function w(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(i[o[r+0]]+i[o[r+1]]+i[o[r+2]]+i[o[r+3]]+"-"+i[o[r+4]]+i[o[r+5]]+"-"+i[o[r+6]]+i[o[r+7]]+"-"+i[o[r+8]]+i[o[r+9]]+"-"+i[o[r+10]]+i[o[r+11]]+i[o[r+12]]+i[o[r+13]]+i[o[r+14]]+i[o[r+15]]).toLowerCase();if(!C(e))throw TypeError("Stringified UUID is invalid");return e}(a)};let h=(()=>{class o{constructor(e){this._firestore=e}adicionarReserva(e,a){const s=(0,d.JU)(this._firestore,`agendamento/${e}`);return(0,d.pl)(s,{horarios:(0,d.vr)(a)},{merge:!0})}adicionarInfoCliente(e){const a=(0,d.JU)(this._firestore,`agendadas/${R()}`);return(0,d.pl)(a,{nome:e.nome,sobrenome:e.sobrenome??"",celular:e.celular,observacao:e.observacao??"",data:e.data,hora:e.hora,servico:e.servico,preco:e.precoServico})}}return o.\u0275fac=function(e){return new(e||o)(n.LFG(d.gg))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const T=[{path:"",component:(()=>{class o{constructor(e,a,s,S,$){this.fb=e,this.alertController=a,this.activatedRoute=s,this._services=S,this.router=$,this.infoAgendamento=this.fb.group({nome:["",l.kI.required],sobrenome:[""],celular:["",l.kI.required],observacao:[""]}),this.nome="",this.preco=0,this.data="",this.hora="",this.href="",this.codigoPais="55",this.whatsNumero="16982391461",this.url="https://api.whatsapp.com/"}ngOnInit(){this.activatedRoute.queryParams.subscribe(e=>{e&&(this.nome=e.nome,this.preco=e.preco,this.data=e.data,this.hora=e.hora)})}enviarInformacoes(){var e=this;return(0,m.Z)(function*(){if(e.infoAgendamento.valid){e.href=`${e.url}send?phone=+${e.codigoPais}${e.whatsNumero}&text=Ol\xe1 Mohrana, sou ${e.infoAgendamento.value.nome} ${e.infoAgendamento.value.sobrenome}, gostaria de confirmar meu hor\xe1rio dia ${e.data} \xe0s ${e.hora} para o servi\xe7o de ${e.nome}.`;const a=new A;a.nome=e.infoAgendamento.value.nome,a.sobrenome=e.infoAgendamento.value.sobrenome,a.celular=e.infoAgendamento.value.celular,a.observacao=e.infoAgendamento.value.observacao,a.data=e.data,a.hora=e.hora,a.servico=e.nome,a.precoServico=e.preco,e._services.adicionarInfoCliente(a).then(()=>{e._services.adicionarReserva(e.data,e.hora).then((0,m.Z)(function*(){yield(yield e.alertController.create({header:"Sucesso",message:"Agendamento realizado com sucesso, toque em OK para me avisar via whatsapp, obrigada ;)",buttons:[{text:"OK",role:"confirm",handler:()=>{e.alertController.dismiss(),e.confirmarWhatsApp(),e.router.navigate(["home"])}}]})).present()})).catch((0,m.Z)(function*(){yield(yield e.alertController.create({header:"Error",message:"Ops, ocorreu um erro ao enviar os seus dados, por favor tente novamente!",buttons:[{text:"Ok",role:"confirm",handler:()=>{e.alertController.dismiss()}}]})).present()}))}).catch((0,m.Z)(function*(){yield(yield e.alertController.create({header:"Error",message:"Ops, ocorreu um erro ao enviar os seus dados, por favor tente novamente!",buttons:[{text:"Ok",role:"confirm",handler:()=>{e.alertController.dismiss()}}]})).present()}))}else yield(yield e.alertController.create({header:"Aten\xe7\xe3o",message:"Por favor, preencha aos menos primeiro nome e celular para facilitar entrar em contato, obrigada \u{1f609}",buttons:[{text:"Ok",role:"confirm",handler:()=>{e.alertController.dismiss()}}]})).present()})()}confirmarWhatsApp(){window.open(this.href)}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(l.qu),n.Y36(t.Br),n.Y36(u.gz),n.Y36(h),n.Y36(u.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-enviar-angendamento"]],decls:40,vars:3,consts:[["slot","start"],[3,"formGroup"],["position","stacked"],["formControlName","nome"],["formControlName","sobrenome"],["type","number","formControlName","celular"],["formControlName","observacao"],["expand","block",3,"click"]],template:function(e,a){1&e&&(n.TgZ(0,"ion-header")(1,"ion-toolbar"),n._UZ(2,"ion-back-button",0),n.TgZ(3,"ion-title"),n._uU(4,"Confirmar agendamento"),n.qZA()()(),n.TgZ(5,"ion-content")(6,"ion-grid")(7,"form",1)(8,"ion-row")(9,"ion-col")(10,"ion-label"),n._uU(11),n.qZA()()(),n.TgZ(12,"ion-row")(13,"ion-col")(14,"ion-item")(15,"ion-label",2),n._uU(16,"Nome"),n.qZA(),n._UZ(17,"ion-input",3),n.qZA()(),n.TgZ(18,"ion-col")(19,"ion-item")(20,"ion-label",2),n._uU(21,"Sobrenome"),n.qZA(),n._UZ(22,"ion-input",4),n.qZA()()(),n.TgZ(23,"ion-row")(24,"ion-col")(25,"ion-item")(26,"ion-label",2),n._uU(27,"Celular"),n.qZA(),n._UZ(28,"ion-input",5),n.qZA()()(),n.TgZ(29,"ion-row")(30,"ion-col")(31,"ion-item")(32,"ion-label",2),n._uU(33,"Observa\xe7\xf5es?"),n.qZA(),n._UZ(34,"ion-textarea",6),n.qZA()()(),n.TgZ(35,"ion-row")(36,"ion-col")(37,"ion-button",7),n.NdJ("click",function(){return a.enviarInformacoes()}),n.TgZ(38,"ion-label"),n._uU(39," CONFIRMAR AGENDA "),n.qZA()()()()()()()),2&e&&(n.xp6(7),n.Q6J("formGroup",a.infoAgendamento),n.xp6(4),n.AsE(" Agendar dia ",a.data," \xe0s ",a.hora," "))},dependencies:[l._Y,l.JJ,l.JL,t.oU,t.YG,t.wI,t.W2,t.jY,t.Gu,t.pK,t.Ie,t.Q$,t.Nd,t.g2,t.sr,t.wd,t.as,t.j9,t.cs,l.sg,l.u]}),o})()}];let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.Bz.forChild(T),u.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[h],imports:[p.ez,l.u5,t.Pc,I,l.u5,l.UX]}),o})()}}]);