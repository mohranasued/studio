"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7707],{7707:(M,f,r)=>{r.r(f),r.d(f,{AgendamentoPageModule:()=>T});var m=r(6895),A=r(4719),a=r(7181),u=r(506),y=r(5861),D=r(3466),p=r(2993),e=r(6738),h=r(2875);let v=(()=>{class n{constructor(o){this._firestore=o}buscaHorariosDisponiveis(o){const t=(0,h.JU)(this._firestore,`agendamento/${o}`);return(0,h._1)(t)}}return n.\u0275fac=function(o){return new(o||n)(e.LFG(h.gg))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function Z(n,s){if(1&n){const o=e.EpF();e.TgZ(0,"ion-item")(1,"ion-button",6),e.NdJ("click",function(){const c=e.CHM(o).$implicit,i=e.oxw();return e.KtG(i.reservarData(c.hora))}),e._uU(2),e.qZA()()}if(2&n){const o=s.$implicit;e.xp6(1),e.Q6J("disabled",!o.disponivel)("color",o.disponivel?"success":"danger"),e.xp6(1),e.Oqu(o.hora)}}const P=[{path:"",component:(()=>{class n{constructor(o,t,d,c){this.router=o,this._service=t,this.alertController=d,this.activatedRoute=c,this.horariosDisponives=[],this.diaDocRef="",this.nome="",this.preco=0,this.isWeekday=i=>{const l=new Date(i),g=l.getUTCDay(),b=new Date(2022,6,14,21),R=new Date(2022,6,15,21);return 0!==g&&1!==g&&l.valueOf()!=b.valueOf()&&l.valueOf()!=R.valueOf()}}ngOnInit(){this.activatedRoute.queryParams.subscribe(o=>{o&&(this.nome=o.nome,this.preco=o.preco)})}buscaHorariosDisponiveis(o){this.diaDocRef=(0,D.Z)((0,p.Z)(o.detail.value),"dd-MM-yyyy");const t=this._service.buscaHorariosDisponiveis(this.diaDocRef),d=(0,p.Z)(o.detail.value).getUTCDay();console.log(d);const c=0==d?Array.from({length:9},(i,l)=>l+7).map(i=>({hora:`${i}:00`,disponivel:!0})):Array.from({length:11},(i,l)=>l+7).map(i=>({hora:`${i}:00`,disponivel:!0}));t.subscribe(i=>{i?(this.horariosDisponives=c,i.horarios.forEach(l=>{this.horariosDisponives.find(g=>g.hora==l).disponivel=!1})):this.horariosDisponives=c})}reservarData(o){var t=this;return(0,y.Z)(function*(){const d={queryParams:{nome:t.nome,preco:t.preco,data:t.diaDocRef,hora:o}};yield(yield t.alertController.create({header:"Confirma\xe7\xe3o",message:`Confirma o agendamento no dia ${t.diaDocRef} \xe0s ${o} ?`,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{t.alertController.dismiss()}},{text:"Ok",role:"confirm",handler:()=>{t.router.navigate(["enviar-angendamento"],d)}}]})).present()})()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(u.F0),e.Y36(v),e.Y36(a.Br),e.Y36(u.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-agendamento"]],decls:27,vars:9,consts:[["slot","start"],["fullscreen","",1,"ion-padding"],[1,"ion-padding"],["locale","pt-BR",3,"isDateEnabled","ionChange"],["lines","none"],[4,"ngFor","ngForOf"],["expand","block",3,"disabled","color","click"]],template:function(o,t){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar"),e._UZ(2,"ion-back-button",0),e.TgZ(3,"ion-title"),e._uU(4,"Agendar Hor\xe1rio"),e.qZA()()(),e.TgZ(5,"ion-content",1)(6,"ion-item")(7,"ion-row")(8,"ion-col")(9,"ion-label")(10,"strong"),e._uU(11," Servi\xe7o: "),e.qZA()()(),e.TgZ(12,"ion-col"),e._uU(13),e.qZA()()(),e.TgZ(14,"ion-item")(15,"ion-row")(16,"ion-col")(17,"ion-label")(18,"strong"),e._uU(19," Valor: "),e.qZA()()(),e.TgZ(20,"ion-col"),e._uU(21),e.ALo(22,"currency"),e.qZA()()(),e.TgZ(23,"ion-item",2)(24,"ion-datetime",3),e.NdJ("ionChange",function(c){return t.buscaHorariosDisponiveis(c)}),e.qZA()(),e.TgZ(25,"ion-list",4),e.YNc(26,Z,3,3,"ion-item",5),e.qZA()()),2&o&&(e.xp6(13),e.hij(" ",t.nome," "),e.xp6(8),e.hij(" ",e.gM2(22,4,t.preco,"BRL",!0,"1.2")," "),e.xp6(3),e.Q6J("isDateEnabled",t.isWeekday),e.xp6(2),e.Q6J("ngForOf",t.horariosDisponives))},dependencies:[m.sg,a.oU,a.YG,a.wI,a.W2,a.x4,a.Gu,a.Ie,a.Q$,a.q_,a.Nd,a.sr,a.wd,a.QI,a.cs,m.H9],styles:["ion-button[_ngcontent-%COMP%]{width:100%}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(P),u.Bz]}),n})(),T=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[v],imports:[m.ez,A.u5,a.Pc,C]}),n})()}}]);