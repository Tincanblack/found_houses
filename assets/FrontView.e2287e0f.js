import{C as J,_ as b,r as S,o as T,c as $,b as s,a as i,f as _,t as c,u as Q,s as U,n as x,F as Z}from"./index.d7f95996.js";import{b as X,c as tt,r as et,e as st}from"./base-component.2f511bb0.js";var I={exports:{}};/*!
  * Bootstrap collapse.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(l,u){(function(a,g){l.exports=g(X(),tt(),et(),st())})(J,function(a,g,d,p){const n=r=>r&&typeof r=="object"&&"default"in r?r:{default:r},h=n(g),m=n(d),k=n(p),F="collapse",w=".bs.collapse",O=".data-api",V=`show${w}`,B=`shown${w}`,H=`hide${w}`,R=`hidden${w}`,Y=`click${w}${O}`,y="show",v="collapse",L="collapsing",M="collapsed",P=`:scope .${v} .${v}`,z="collapse-horizontal",q="width",j="height",G=".collapse.show, .collapse.collapsing",N='[data-bs-toggle="collapse"]',K={parent:null,toggle:!0},W={parent:"(null|element)",toggle:"boolean"};class E extends k.default{constructor(t,o){super(t,o),this._isTransitioning=!1,this._triggerArray=[];const e=m.default.find(N);for(const f of e){const A=a.getSelectorFromElement(f),D=m.default.find(A).filter(C=>C===this._element);A!==null&&D.length&&this._triggerArray.push(f)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return K}static get DefaultType(){return W}static get NAME(){return F}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(G).filter(C=>C!==this._element).map(C=>E.getOrCreateInstance(C,{toggle:!1}))),t.length&&t[0]._isTransitioning||h.default.trigger(this._element,V).defaultPrevented)return;for(const C of t)C.hide();const e=this._getDimension();this._element.classList.remove(v),this._element.classList.add(L),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const f=()=>{this._isTransitioning=!1,this._element.classList.remove(L),this._element.classList.add(v,y),this._element.style[e]="",h.default.trigger(this._element,B)},D=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback(f,this._element,!0),this._element.style[e]=`${this._element[D]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.default.trigger(this._element,H).defaultPrevented)return;const o=this._getDimension();this._element.style[o]=`${this._element.getBoundingClientRect()[o]}px`,a.reflow(this._element),this._element.classList.add(L),this._element.classList.remove(v,y);for(const f of this._triggerArray){const A=a.getElementFromSelector(f);A&&!this._isShown(A)&&this._addAriaAndCollapsedClass([f],!1)}this._isTransitioning=!0;const e=()=>{this._isTransitioning=!1,this._element.classList.remove(L),this._element.classList.add(v),h.default.trigger(this._element,R)};this._element.style[o]="",this._queueCallback(e,this._element,!0)}_isShown(t=this._element){return t.classList.contains(y)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=a.getElement(t.parent),t}_getDimension(){return this._element.classList.contains(z)?q:j}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(N);for(const o of t){const e=a.getElementFromSelector(o);e&&this._addAriaAndCollapsedClass([o],this._isShown(e))}}_getFirstLevelChildren(t){const o=m.default.find(P,this._config.parent);return m.default.find(t,this._config.parent).filter(e=>!o.includes(e))}_addAriaAndCollapsedClass(t,o){if(!!t.length)for(const e of t)e.classList.toggle(M,!o),e.setAttribute("aria-expanded",o)}static jQueryInterface(t){const o={};return typeof t=="string"&&/show|hide/.test(t)&&(o.toggle=!1),this.each(function(){const e=E.getOrCreateInstance(this,o);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}return h.default.on(document,Y,N,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();const t=a.getSelectorFromElement(this),o=m.default.find(t);for(const e of o)E.getOrCreateInstance(e,{toggle:!1}).toggle()}),a.defineJQueryPlugin(E),E})})(I);const nt=I.exports,ot={data(){return{collapse:""}},methods:{toggleCollapse(){this.collapse.toggle()},closeCollapse(){this.collapse.hide()}},mounted(){this.collapse=new nt(this.$refs.collapse,{toggle:!1})}},lt="/found_houses/assets/logo.0e683de9.svg",it={data(){return{collectionCaseCount:0,navStyle:{shadow:""}}},inject:["emitter"],mixins:[ot],methods:{navScrollShadow(){const l=window.scrollY;l>30?this.navStyle.shadow="shadow-sm":l<30&&(this.navStyle.shadow="")},getCollectionCount(){JSON.parse(localStorage.getItem("collection_case"))?this.collectionCaseCount=JSON.parse(localStorage.getItem("collection_case")).length:this.collectionCaseCount=0}},mounted(){this.getCollectionCount(),this.emitter.on("get-collection",l=>{this.collectionCaseCount=l.length}),window.addEventListener("scroll",this.navScrollShadow)}},at={class:"container"},ct=s("img",{src:lt,alt:"\u5FC3\u5100\u623F\u5C4B",width:"140"},null,-1),rt=s("span",{class:"navbar-toggler-icon"},null,-1),_t=[rt],dt={class:"navbar-collapse collapse",id:"navbarCollapse",ref:"collapse"},ht={class:"navbar-nav flex-md-row ms-md-auto align-items-md-center"},ut={class:"nav-item"},gt={class:"nav-item"},pt={class:"nav-item"},mt={class:"nav-item"},ft={key:0,class:"nav-link__count translate-middle badge rounded-pill"},Ct=s("span",{class:"visually-hidden"},"unread messages",-1);function vt(l,u,a,g,d,p){const n=S("RouterLink");return T(),$("nav",{class:x(["navbar navbar-expand-md sticky-top navbar-light bg-white",[d.navStyle.shadow]])},[s("div",at,[i(n,{class:"navbar-brand",to:"/"},{default:_(()=>[ct]),_:1}),s("button",{class:"navbar-toggler collapsed",type:"button",onClick:u[0]||(u[0]=(...h)=>l.toggleCollapse&&l.toggleCollapse(...h))},_t),s("div",dt,[s("ul",ht,[s("li",ut,[i(n,{class:"nav-link",to:"/cases",onClick:l.closeCollapse},{default:_(()=>[c("\u627E\u623F")]),_:1},8,["onClick"])]),s("li",gt,[i(n,{class:"nav-link",to:"/news",onClick:l.closeCollapse},{default:_(()=>[c("\u623F\u8A0A\u65B0\u77E5")]),_:1},8,["onClick"])]),s("li",pt,[i(n,{class:"nav-link",to:"/reserve"},{default:_(()=>[c("\u67E5\u8A62\u9810\u7D04")]),_:1})]),s("li",mt,[i(n,{class:"nav-link",to:"/collections",onClick:l.closeCollapse},{default:_(()=>[c("\u6536\u85CF\u540D\u55AE "),d.collectionCaseCount?(T(),$("span",ft,[c(Q(d.collectionCaseCount),1),Ct])):U("",!0)]),_:1},8,["onClick"])])])],512)])],2)}const Et=b(it,[["render",vt]]),At={data(){return{scrollY:0}},methods:{watchScroll(){this.scrollY=window.scrollY},backToTop(){document.documentElement.scrollTop=0}},mounted(){window.addEventListener("scroll",this.watchScroll)}},St=s("div",{class:"bg-primary text-white px-3 py-2 rounded-1"},[s("i",{class:"bi bi-chevron-up"})],-1),wt=[St];function Tt(l,u,a,g,d,p){return T(),$("button",{class:x([d.scrollY<50?"d-none":"","side-navigation__button--to-top"]),onClick:u[0]||(u[0]=(...n)=>p.backToTop&&p.backToTop(...n))},wt,2)}const $t=b(At,[["render",Tt]]),Lt={},bt={class:"footer py-3 bg-dark"},kt={class:"container-fluid"},yt={class:"footer-nav nav justify-content-center pb-3 mb-3"},Nt={class:"nav-item"},Dt={class:"nav-item"},xt={class:"nav-item"},It={class:"nav-item"},Ft={class:"nav-item"},Ot=s("p",{class:"text-center text-light m-0"},[c(" Copyright 2022. \u5FC3\u5100\u623F\u5C4B found_houses All rights reserved. "),s("br"),c(" \u672C\u7DB2\u7AD9\u6240\u4F7F\u7528\u5230\u7684\u8CC7\u6599\u7686\u70BA\u5404\u7DB2\u7AD9\u6240\u63D0\u4F9B\uFF0C\u5167\u5BB9\u50C5\u4F9B\u500B\u4EBA\u5B78\u8853\u7814\u7A76\u4F7F\u7528\uFF0C\u4E0D\u63D0\u4F9B\u5546\u696D\u7528\u9014 ")],-1);function Vt(l,u,a,g,d,p){const n=S("RouterLink");return T(),$("footer",bt,[s("div",kt,[s("ul",yt,[s("li",Nt,[i(n,{class:"nav-link px-2 text-light",to:"/cases"},{default:_(()=>[c("\u627E\u623F")]),_:1})]),s("li",Dt,[i(n,{class:"nav-link px-2 text-light",to:"/news"},{default:_(()=>[c("\u623F\u8A0A\u65B0\u77E5")]),_:1})]),s("li",xt,[i(n,{class:"nav-link px-2 text-light",to:"/collections"},{default:_(()=>[c("\u6536\u85CF\u540D\u55AE ")]),_:1})]),s("li",It,[i(n,{class:"nav-link px-2 text-light",to:"/reserve"},{default:_(()=>[c("\u67E5\u8A62\u9810\u7D04")]),_:1})]),s("li",Ft,[i(n,{class:"nav-link px-2 text-light",to:"/admin"},{default:_(()=>[c("\u5F8C\u53F0\u767B\u5165")]),_:1})])]),Ot])])}const Bt=b(Lt,[["render",Vt]]),Ht={components:{FrontNav:Et,FooterBar:Bt,BackToTop:$t}};function Rt(l,u,a,g,d,p){const n=S("FrontNav"),h=S("RouterView"),m=S("BackToTop"),k=S("FooterBar");return T(),$(Z,null,[i(n),i(h),i(m),i(k)],64)}const zt=b(Ht,[["render",Rt]]);export{zt as default};