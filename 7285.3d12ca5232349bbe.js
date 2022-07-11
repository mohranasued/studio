"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7285],{7285:(sa,y,d)=>{d.r(y),d.d(y,{AdministracaoPageModule:()=>ia});var A=d(6895),v=d(4719),o=d(7181),M=d(506),c=d(5861),u=d(3466),p=d(2993),f={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}},b=d(8990);const C={date:(0,b.Z)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,b.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,b.Z)({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var D={lastWeek:function(t,i,e){var n=t.getUTCDay();return"'"+(0===n||6===n?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"},l=d(4380);const N={ordinalNumber:function H(t,i){var e=Number(t),r=String((i||{}).unit);return"week"===r||"isoWeek"===r?e+"\xaa":e+"\xba"},era:(0,l.Z)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:(0,l.Z)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,l.Z)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:(0,l.Z)({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,l.Z)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})};var g=d(8480);const Z={code:"pt-BR",formatDistance:function x(t,i,e){var n;return e=e||{},n="string"==typeof f[t]?f[t]:1===i?f[t].one:f[t].other.replace("{{count}}",i),e.addSuffix?e.comparison>0?"em "+n:"h\xe1 "+n:n},formatLong:C,formatRelative:function F(t,i,e,n){var r=D[t];return"function"==typeof r?r(i,e,n):r},localize:N,match:{ordinalNumber:(0,d(941).Z)({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,g.Z)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:(0,g.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,g.Z)({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:(0,g.Z)({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:(0,g.Z)({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var a=d(6738),m=d(2875);let P=(()=>{class t{constructor(e){this._firestore=e}buscarAgendamentos(e){var n=this;return(0,c.Z)(function*(){const r=(0,m.IO)((0,m.hJ)(n._firestore,"agendadas"),(0,m.ar)("data","==",e));return(yield(0,m.PL)(r)).docs.map(h=>({...h.data(),id:h.id}))})()}removerReservaAgendadas(e){var n=this;return(0,c.Z)(function*(){console.log(e);const r=(0,m.JU)(n._firestore,`agendadas/${e}`);return(0,m.oe)(r)})()}removerReservaAgendamento(e,n){const r=(0,m.JU)(this._firestore,`agendamento/${e}`);return(0,m.pl)(r,{horarios:(0,m.Ab)(n)},{merge:!0})}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(m.gg))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function ta(t,i){if(1&t){const e=a.EpF();a.TgZ(0,"ion-card")(1,"ion-card-header")(2,"ion-card-subtitle"),a._uU(3),a.qZA(),a.TgZ(4,"ion-card-title"),a._uU(5),a.qZA()(),a.TgZ(6,"ion-card-content")(7,"ion-item")(8,"ion-label")(9,"strong"),a._uU(10,"Servi\xe7o: "),a.qZA(),a._uU(11),a.qZA()(),a.TgZ(12,"ion-item")(13,"ion-label")(14,"strong"),a._uU(15,"Celular: "),a.qZA(),a._uU(16),a.qZA()(),a.TgZ(17,"ion-item")(18,"ion-label",7)(19,"strong"),a._uU(20,"Observa\xe7\xe3o: "),a.qZA(),a._uU(21),a.qZA()()(),a.TgZ(22,"ion-footer")(23,"ion-button",8),a.NdJ("click",function(){const s=a.CHM(e).$implicit,h=a.oxw();return a.KtG(h.removerReservaAgendamentos(s.id,s.data,s.hora))}),a._uU(24,"CANCELAR AGENDA"),a.qZA()()()}if(2&t){const e=i.$implicit;a.xp6(3),a.AsE("",e.data," ",e.hora,""),a.xp6(2),a.AsE("",e.nome," ",e.sobrenome,""),a.xp6(6),a.hij(" ",e.servico," "),a.xp6(5),a.hij(" ",e.celular," "),a.xp6(5),a.hij(" ",e.observacao," ")}}function na(t,i){if(1&t){const e=a.EpF();a.TgZ(0,"ion-content")(1,"ion-toolbar")(2,"ion-title"),a._uU(3,"Filtrar data"),a.qZA(),a.TgZ(4,"ion-buttons",9)(5,"ion-button",10),a.NdJ("click",function(){a.CHM(e),a.oxw();const r=a.MAs(13);return a.KtG(r.dismiss())}),a._uU(6,"Fechar"),a.qZA()()(),a.TgZ(7,"ion-row",11)(8,"ion-datetime",12),a.NdJ("ngModelChange",function(r){a.CHM(e);const s=a.oxw();return a.KtG(s.dataSelecionada=r)}),a.qZA()(),a.TgZ(9,"ion-row",11)(10,"ion-label")(11,"strong"),a._uU(12),a.qZA()()(),a.TgZ(13,"ion-row",11)(14,"ion-col")(15,"ion-button",13),a.NdJ("click",function(){a.CHM(e);const r=a.oxw();return a.KtG(r.buscaHorariosDisponiveis())}),a._uU(16,"FILTRAR"),a.qZA()()()()}if(2&t){const e=a.oxw();a.xp6(8),a.Q6J("ngModel",e.dataSelecionada),a.xp6(4),a.hij(" ",e.formatarData(e.dataSelecionada)," ")}}const oa=[{path:"",component:(()=>{class t{constructor(e,n){this._service=e,this.alertController=n,this.agendadas=[],this.dataHojeFormatada=(0,u.Z)(new Date,"EEEE, 'dia' dd 'de' MMMM'",{locale:Z}),this.dataSelecionada=(new Date).toISOString()}ngOnInit(){var e=this;return(0,c.Z)(function*(){const n=(0,u.Z)(new Date,"dd-MM-yyyy");yield e.carregaAgendamentos(n)})()}carregaAgendamentos(e){var n=this;return(0,c.Z)(function*(){n.agendadas=yield n._service.buscarAgendamentos(e)})()}buscaHorariosDisponiveis(){var e=this;return(0,c.Z)(function*(){const n=(0,u.Z)((0,p.Z)(e.dataSelecionada),"dd-MM-yyyy");e.agendadas=yield e._service.buscarAgendamentos(n),e.modal.dismiss()})()}formatarData(e){return(0,u.Z)((0,p.Z)(e),"EEEE, 'Dia' dd 'de' MMMM'",{locale:Z})}removerReservaAgendamentos(e,n,r){var s=this;return(0,c.Z)(function*(){yield(yield s.alertController.create({header:"Aten\xe7\xe3o",message:"Confirma o cancelamento desse agendamento?",buttons:[{text:"Cancelar",role:"cancel",handler:()=>{s.alertController.dismiss()}},{text:"Sim",role:"confirm",handler:()=>{s._service.removerReservaAgendadas(e).then(()=>{s._service.removerReservaAgendamento(n,r).then((0,c.Z)(function*(){const da=(0,u.Z)((0,p.Z)(s.dataSelecionada),"dd-MM-yyyy");yield s.carregaAgendamentos(da)}))})}}]})).present()})()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(P),a.Y36(o.Br))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-administracao"]],viewQuery:function(e,n){if(1&e&&a.Gf(o.ki,5),2&e){let r;a.iGM(r=a.CRH())&&(n.modal=r.first)}},decls:15,vars:2,consts:[["fullscreen","",1,"ion-padding"],[4,"ngFor","ngForOf"],["vertical","top","horizontal","end","slot","fixed"],["id","open-modal"],["name","filter-outline"],["trigger","open-modal"],["modal",""],[1,"ion-text-wrap"],["expand","block","color","danger",3,"click"],["slot","end"],["color","light",3,"click"],[1,"ion-padding","ion-justify-content-center"],["locale","pt-BR","color","rose",3,"ngModel","ngModelChange"],["expand","block","color","success",3,"click"]],template:function(e,n){1&e&&(a.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),a._uU(3,"Administrar agendamentos"),a.qZA()()(),a.TgZ(4,"ion-content",0)(5,"ion-label"),a._uU(6),a.qZA(),a.TgZ(7,"ion-list"),a.YNc(8,ta,25,7,"ion-card",1),a.qZA(),a.TgZ(9,"ion-fab",2)(10,"ion-fab-button",3),a._UZ(11,"ion-icon",4),a.qZA()(),a.TgZ(12,"ion-modal",5,6),a.YNc(14,na,17,2,"ng-template"),a.qZA()()),2&e&&(a.xp6(6),a.hij("Agendamentos do ",n.dataHojeFormatada,""),a.xp6(2),a.Q6J("ngForOf",n.agendadas))},dependencies:[A.sg,v.JJ,v.On,o.YG,o.Sm,o.PM,o.FN,o.Zi,o.tO,o.Dq,o.wI,o.W2,o.x4,o.IJ,o.W4,o.fr,o.Gu,o.gu,o.Ie,o.Q$,o.q_,o.ki,o.Nd,o.sr,o.wd,o.QI],styles:["ion-modal[_ngcontent-%COMP%]{--border-radius: 16px;--box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)}ion-modal[_ngcontent-%COMP%]::part(backdrop){background:rgb(209,213,219);opacity:1}ion-modal[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background: rgb(14 116 144);--color: white}"]}),t})()}];let ra=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[M.Bz.forChild(oa),M.Bz]}),t})(),ia=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[P],imports:[A.ez,v.u5,o.Pc,ra]}),t})()}}]);