"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3804],{3804:(Ce,z,P)=>{P.r(z),P.d(z,{ion_popover:()=>Z});var L=P(5861),f=P(7205),j=P(5729),R=P(1878),A=P(3756),E=P(3280),H=P(2854),J=P(9753),m=P(9442);const K=(o,e,r)=>{const t=e.getBoundingClientRect(),n=t.height;let i=t.width;return"cover"===o&&r&&(i=r.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}},te=(o,e,r)=>{let t=[];switch(e){case"hover":let n;t=[{eventName:"mouseenter",callback:(i=(0,L.Z)(function*(s){s.stopPropagation(),n&&clearTimeout(n),n=setTimeout(()=>{(0,A.r)(()=>{r.presentFromTrigger(s),n=void 0})},100)}),function(a){return i.apply(this,arguments)})},{eventName:"mouseleave",callback:i=>{n&&clearTimeout(n);const s=i.relatedTarget;!s||s.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;case"context-menu":t=[{eventName:"contextmenu",callback:i=>{i.preventDefault(),r.presentFromTrigger(i)}},{eventName:"click",callback:i=>i.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}];break;default:t=[{eventName:"click",callback:i=>r.presentFromTrigger(i)},{eventName:"ionPopoverActivateTrigger",callback:i=>r.presentFromTrigger(i,!0)}]}var i;return t.forEach(({eventName:n,callback:i})=>o.addEventListener(n,i)),o.setAttribute("data-ion-popover-trigger","true"),()=>{t.forEach(({eventName:n,callback:i})=>o.removeEventListener(n,i)),o.removeAttribute("data-ion-popover-trigger")}},U=(o,e)=>e&&"ION-ITEM"===e.tagName?o.findIndex(r=>r===e):-1,$=o=>{const r=(0,A.g)(o).querySelector("button");r&&(0,A.r)(()=>r.focus())},ie=o=>{const e=function(){var r=(0,L.Z)(function*(t){var n;const i=document.activeElement;let s=[];const a=null===(n=t.target)||void 0===n?void 0:n.tagName;if("ION-POPOVER"===a||"ION-ITEM"===a){try{s=Array.from(o.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch{}switch(t.key){case"ArrowLeft":(yield o.getParentPopover())&&o.dismiss(void 0,void 0,!1);break;case"ArrowDown":t.preventDefault();const l=((o,e)=>o[U(o,e)+1])(s,i);void 0!==l&&$(l);break;case"ArrowUp":t.preventDefault();const g=((o,e)=>o[U(o,e)-1])(s,i);void 0!==g&&$(g);break;case"Home":t.preventDefault();const d=s[0];void 0!==d&&$(d);break;case"End":t.preventDefault();const h=s[s.length-1];void 0!==h&&$(h);break;case"ArrowRight":case" ":case"Enter":if(i&&(o=>o.hasAttribute("data-ion-popover-trigger"))(i)){const v=new CustomEvent("ionPopoverActivateTrigger");i.dispatchEvent(v)}}}});return function(n){return r.apply(this,arguments)}}();return o.addEventListener("keydown",e),()=>o.removeEventListener("keydown",e)},V=(o,e,r,t,n,i,s,a,c,l,g)=>{var d;let h={top:0,left:0,width:0,height:0};if("event"===i){if(!g)return c;h={top:g.clientY,left:g.clientX,width:1,height:1}}else{const p=g,_=l||(null===(d=p?.detail)||void 0===d?void 0:d.ionShadowTarget)||p?.target;if(!_)return c;const y=_.getBoundingClientRect();h={top:y.top,left:y.left,width:y.width,height:y.height}}const v=ce(s,h,e,r,t,n,o),b=pe(a,s,h,e,r),w=v.top+b.top,k=v.left+b.left,{arrowTop:u,arrowLeft:D}=ae(s,t,n,w,k,e,r,o),{originX:x,originY:T}=se(s,a,o);return{top:w,left:k,referenceCoordinates:h,arrowTop:u,arrowLeft:D,originX:x,originY:T}},se=(o,e,r)=>{switch(o){case"top":return{originX:F(e),originY:"bottom"};case"bottom":return{originX:F(e),originY:"top"};case"left":return{originX:"right",originY:N(e)};case"right":return{originX:"left",originY:N(e)};case"start":return{originX:r?"left":"right",originY:N(e)};case"end":return{originX:r?"right":"left",originY:N(e)}}},F=o=>{switch(o){case"start":return"left";case"center":return"center";case"end":return"right"}},N=o=>{switch(o){case"start":return"top";case"center":return"center";case"end":return"bottom"}},ae=(o,e,r,t,n,i,s,a)=>{const c={arrowTop:t+s/2-e/2,arrowLeft:n+i-e/2},l={arrowTop:t+s/2-e/2,arrowLeft:n-1.5*e};switch(o){case"top":return{arrowTop:t+s,arrowLeft:n+i/2-e/2};case"bottom":return{arrowTop:t-r,arrowLeft:n+i/2-e/2};case"left":return c;case"right":return l;case"start":return a?l:c;case"end":return a?c:l;default:return{arrowTop:0,arrowLeft:0}}},ce=(o,e,r,t,n,i,s)=>{const a={top:e.top,left:e.left-r-n},c={top:e.top,left:e.left+e.width+n};switch(o){case"top":return{top:e.top-t-i,left:e.left};case"right":return c;case"bottom":return{top:e.top+e.height+i,left:e.left};case"left":return a;case"start":return s?c:a;case"end":return s?a:c}},pe=(o,e,r,t,n)=>{switch(o){case"center":return de(e,r,t,n);case"end":return le(e,r,t,n);default:return{top:0,left:0}}},le=(o,e,r,t)=>{switch(o){case"start":case"end":case"left":case"right":return{top:-(t-e.height),left:0};default:return{top:0,left:-(r-e.width)}}},de=(o,e,r,t)=>{switch(o){case"start":case"end":case"left":case"right":return{top:-(t/2-e.height/2),left:0};default:return{top:0,left:-(r/2-e.width/2)}}},q=(o,e,r,t,n,i,s,a,c,l,g,d,h=0,v=0,b=0)=>{let w=h;const k=v;let x,u=r,D=e,T=l,I=g,p=!1,_=!1;const y=d?d.top+d.height:i/2-a/2,O=d?d.height:0;let S=!1;return u<t+c?(u=t,p=!0,T="left"):s+t+u+c>n&&(_=!0,u=n-s-t,T="right"),y+O+a>i&&("top"===o||"bottom"===o)&&(y-a>0?(D=Math.max(12,y-a-O-(b-1)),w=D+a,I="bottom",S=!0):x=t),{top:D,left:u,bottom:x,originX:T,originY:I,checkSafeAreaLeft:p,checkSafeAreaRight:_,arrowTop:w,arrowLeft:k,addPopoverBottomClass:S}},ve=(o,e)=>{var r;const{event:t,size:n,trigger:i,reference:s,side:a,align:c}=e,l=o.ownerDocument,g="rtl"===l.dir,d=l.defaultView.innerWidth,h=l.defaultView.innerHeight,v=(0,A.g)(o),b=v.querySelector(".popover-content"),w=v.querySelector(".popover-arrow"),k=i||(null===(r=t?.detail)||void 0===r?void 0:r.ionShadowTarget)||t?.target,{contentWidth:u,contentHeight:D}=K(n,b,k),{arrowWidth:x,arrowHeight:T}=(o=>{if(!o)return{arrowWidth:0,arrowHeight:0};const{width:e,height:r}=o.getBoundingClientRect();return{arrowWidth:e,arrowHeight:r}})(w),p=V(g,u,D,x,T,s,a,c,{top:h/2-D/2,left:d/2-u/2,originX:g?"right":"left",originY:"top"},i,t),_="cover"===n?0:5,y="cover"===n?0:25,{originX:O,originY:S,top:M,left:C,bottom:W,checkSafeAreaLeft:Y,checkSafeAreaRight:ke,arrowTop:De,arrowLeft:Ae,addPopoverBottomClass:Te}=q(a,p.top,p.left,_,d,h,u,D,y,p.originX,p.originY,p.referenceCoordinates,p.arrowTop,p.arrowLeft,T),Ie=(0,m.c)(),B=(0,m.c)(),G=(0,m.c)();return B.addElement(v.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),G.addElement(v.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Ie.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===n&&o.style.setProperty("--width",`${u}px`),Te&&o.classList.add("popover-bottom"),void 0!==W&&b.style.setProperty("bottom",`${W}px`);let X=`${C}px`;Y&&(X=`${C}px + var(--ion-safe-area-left, 0)`),ke&&(X=`${C}px - var(--ion-safe-area-right, 0)`),b.style.setProperty("top",`calc(${M}px + var(--offset-y, 0))`),b.style.setProperty("left",`calc(${X} + var(--offset-x, 0))`),b.style.setProperty("transform-origin",`${S} ${O}`),null!==w&&(((o,e=!1,r,t)=>!(!r&&!t||"top"!==o&&"bottom"!==o&&e))(a,p.top!==M||p.left!==C,t,i)?(w.style.setProperty("top",`calc(${De}px + var(--offset-y, 0))`),w.style.setProperty("left",`calc(${Ae}px + var(--offset-x, 0))`)):w.style.setProperty("display","none"))}).addAnimation([B,G])},ue=o=>{const e=(0,A.g)(o),r=e.querySelector(".popover-content"),t=e.querySelector(".popover-arrow"),n=(0,m.c)(),i=(0,m.c)(),s=(0,m.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(()=>{o.style.removeProperty("--width"),o.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),t&&(t.style.removeProperty("top"),t.style.removeProperty("left"),t.style.removeProperty("display"))}).duration(300).addAnimation([i,s])},ge=(o,e)=>{var r;const{event:t,size:n,trigger:i,reference:s,side:a,align:c}=e,l=o.ownerDocument,g="rtl"===l.dir,d=l.defaultView.innerWidth,h=l.defaultView.innerHeight,v=(0,A.g)(o),b=v.querySelector(".popover-content"),w=i||(null===(r=t?.detail)||void 0===r?void 0:r.ionShadowTarget)||t?.target,{contentWidth:k,contentHeight:u}=K(n,b,w),x=V(g,k,u,0,0,s,a,c,{top:h/2-u/2,left:d/2-k/2,originX:g?"right":"left",originY:"top"},i,t),T="cover"===n?0:12,{originX:I,originY:p,top:_,left:y,bottom:O}=q(a,x.top,x.left,T,d,h,k,u,0,x.originX,x.originY,x.referenceCoordinates),S=(0,m.c)(),M=(0,m.c)(),C=(0,m.c)(),W=(0,m.c)(),Y=(0,m.c)();return M.addElement(v.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),C.addElement(v.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),W.addElement(b).beforeStyles({top:`calc(${_}px + var(--offset-y, 0px))`,left:`calc(${y}px + var(--offset-x, 0px))`,"transform-origin":`${p} ${I}`}).beforeAddWrite(()=>{void 0!==O&&b.style.setProperty("bottom",`${O}px`)}).fromTo("transform","scale(0.8)","scale(1)"),Y.addElement(v.querySelector(".popover-viewport")).fromTo("opacity",.01,1),S.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===n&&o.style.setProperty("--width",`${k}px`),"bottom"===p&&o.classList.add("popover-bottom")}).addAnimation([M,C,W,Y])},be=o=>{const e=(0,A.g)(o),r=e.querySelector(".popover-content"),t=(0,m.c)(),n=(0,m.c)(),i=(0,m.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.easing("ease").afterAddWrite(()=>{o.style.removeProperty("--width"),o.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},Z=class{constructor(o){(0,f.r)(this,o),this.didPresent=(0,f.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,f.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,f.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,f.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,f.e)(this,"didPresent",7),this.willPresentShorthand=(0,f.e)(this,"willPresent",7),this.willDismissShorthand=(0,f.e)(this,"willDismiss",7),this.didDismissShorthand=(0,f.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=Pe++,this.coreDelegate=(0,R.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.onBackdropTap=()=>{this.dismiss(void 0,E.B)},this.onLifecycle=e=>{const r=this.usersElement,t=ye[e.type];if(r&&t){const n=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:r,el:t,destroyTriggerInteraction:n}=this;n&&n();const i=this.triggerEl=void 0!==e?document.getElementById(e):null;!i||(this.destroyTriggerInteraction=te(i,r,t))},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:r}=this;e&&e(),this.destroyKeyboardInteraction=ie(r)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:r,triggerAction:t,triggerEl:n,el:i}=this;!r||!n||(e&&e(),this.destroyDismissInteraction=((o,e,r,t)=>{let n=[];const s=(0,A.g)(t).querySelector(".popover-content");return n="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==o&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==o?r.dismiss(void 0,void 0,!1):a.stopPropagation()}}],n.forEach(({eventName:a,callback:c})=>s.addEventListener(a,c)),()=>{n.forEach(({eventName:a,callback:c})=>s.removeEventListener(a,c))}})(n,t,i,r))}}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(o,e){!0===o&&!1===e?this.present():!1===o&&!0===e&&this.dismiss()}connectedCallback(){(0,E.e)(this.el)}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-popover-${this.popoverIndex}`,this.parentPopover=this.el.closest(`ion-popover:not(#${this.popoverId})`),void 0===this.alignment&&(this.alignment="ios"===(0,j.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:o,isOpen:e}=this;!0===e&&(0,A.r)(()=>this.present()),o&&(0,A.a)(o,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}presentFromTrigger(o,e=!1){var r=this;return(0,L.Z)(function*(){r.focusDescendantOnPresent=e,yield r.present(o),r.focusDescendantOnPresent=!1})()}getDelegate(o=!1){if(this.workingDelegate&&!o)return{delegate:this.workingDelegate,inline:this.inline};const r=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}present(o){var e=this;return(0,L.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const r=Object.assign(Object.assign({},e.componentProps),{popover:e.el}),{inline:t,delegate:n}=e.getDelegate(!0);e.usersElement=yield(0,R.a)(n,e.el,e.component,["popover-viewport"],r,t),yield(0,J.e)(e.usersElement),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),e.currentTransition=(0,E.d)(e,"popoverEnter",ve,ge,{event:o||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),yield e.currentTransition,e.currentTransition=void 0,e.focusDescendantOnPresent&&(0,E.j)(e.el,e.el)})()}dismiss(o,e,r=!0){var t=this;return(0,L.Z)(function*(){void 0!==t.currentTransition&&(yield t.currentTransition);const{destroyKeyboardInteraction:n,destroyDismissInteraction:i}=t;r&&t.parentPopover&&t.parentPopover.dismiss(o,e,r),t.currentTransition=(0,E.f)(t,o,e,"popoverLeave",ue,be,t.event);const s=yield t.currentTransition;if(s){n&&(n(),t.destroyKeyboardInteraction=void 0),i&&(i(),t.destroyDismissInteraction=void 0);const{delegate:a}=t.getDelegate();yield(0,R.d)(a,t.usersElement)}return t.currentTransition=void 0,s})()}getParentPopover(){var o=this;return(0,L.Z)(function*(){return o.parentPopover})()}onDidDismiss(){return(0,E.g)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,E.g)(this.el,"ionPopoverWillDismiss")}render(){const o=(0,j.b)(this),{onLifecycle:e,popoverId:r,parentPopover:t,dismissOnSelect:n,side:i,arrow:s,htmlAttributes:a}=this,c=(0,j.a)("desktop"),l=s&&!t;return(0,f.h)(f.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},a,{style:{zIndex:`${2e4+this.overlayIndex}`},id:r,class:Object.assign(Object.assign({},(0,H.g)(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":c,[`popover-side-${i}`]:!0,"popover-nested":!!t}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!t&&(0,f.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,f.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:n?()=>this.dismiss():void 0},l&&(0,f.h)("div",{class:"popover-arrow",part:"arrow"}),(0,f.h)("div",{class:"popover-content",part:"content"},(0,f.h)("slot",null))))}get el(){return(0,f.i)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},ye={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};let Pe=0;Z.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}]);