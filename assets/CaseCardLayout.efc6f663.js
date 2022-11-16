import{_ as g,r as h,o as a,c as s,a as f,f as b,b as t,d as _,x as m,t as o,u as i,s as d,F as v,y,n as l}from"./index.e276e35f.js";const k={props:{item:{type:Object,default(){return{}}},compareCases:{type:Array,default(){return[]}},cardLoading:{type:Boolean}}},x={class:"case-item__card case-item__card--cardStyle"},C={key:0,class:"card-image"},L={class:"card-tag"},w={key:0,class:"tag"},F={key:0,class:"badge tag__element--sec"},B=t("i",{class:"bi bi-arrow-down"},null,-1),N={class:"card-price"},V={class:"card-price__price card-price__price--selling"},S=t("span",{class:"card-price__price-unit"},"\u842C",-1),T={key:0,class:"card-price__price card-price__price--origin fs-6"},A=["src"],D={class:"card-body"},R={class:"card-title text-truncate fw-bold"},U={class:"card-text"},j={class:"card-text-list"},q={class:"card-text-list__item"},z={class:"card-text-list__item"},E={class:"card-text-list__item"},I={key:0,class:"card-footer text-center"},O={class:"btn-group"},P=t("i",{class:"bi bi-bookmark-x"},null,-1);function G(n,r,e,H,J,K){const u=h("RouterLink");return a(),s("div",{class:l(["card",{"is-loading":e.cardLoading}])},[f(u,{class:"text-decoration-none rounded-0 text-dark",to:`/case/${e.item.id}`},{default:b(()=>[t("div",x,[e.item.imageUrl?(a(),s("div",C,[_(t("div",L,[e.item.origin_price!==e.item.price?(a(),s("div",w,[e.item.origin_price&&e.item.price?(a(),s("span",F,[B,o(" "+i(n.$format.calToPercent(e.item.origin_price,e.item.price,"discount")),1)])):d("",!0)])):d("",!0),(a(!0),s(v,null,y(n.$format.filterItemTag(e.item),c=>(a(),s("div",{class:"tag",key:c},[t("span",{class:l(["badge tag__element",{"tag__element--third":c==="\u65B0\u4E0A\u67B6","tag__element--fourth":c==="\u4F4E\u7E3D\u50F9","tag__element--main":c==="\u5E97\u9577\u63A8\u85A6"}])},i(c),3)]))),128))],512),[[m,!e.cardLoading]]),_(t("div",N,[t("span",V,[o(i(n.$format.currencyFormat(e.item.price))+" ",1),S]),e.item.origin_price!==e.item.price?(a(),s("small",T,[t("del",null,i(n.$format.currencyFormat(e.item.origin_price))+" \u842C",1)])):d("",!0)],512),[[m,!e.cardLoading]]),t("img",{class:"img-fluid",src:e.item.imageUrl,alt:""},null,8,A)])):d("",!0),t("div",D,[t("h5",R,i(e.cardLoading?"":e.item.title),1),t("div",U,[t("div",j,[t("span",q,i(e.cardLoading?"":e.item.squareFeet+"\u576A"),1),t("span",z,i(e.cardLoading?"":n.$format.patternFormat(e.item.pattern)),1),t("span",E,i(e.cardLoading?"":e.item.houseAge+"\u5E74"),1)])])])])]),_:1},8,["to"]),n.$route.name==="collections"?(a(),s("div",I,[t("div",O,[t("button",{class:"btn btn-danger",onClick:r[0]||(r[0]=c=>this.$emit("emit-handle-collection",e.item.id))},[P,o(" \u53D6\u6D88\u6536\u85CF ")]),t("button",{class:"btn btn-success text-white",onClick:r[1]||(r[1]=c=>this.$emit("emit-handle-compare",e.item.id))},[t("i",{class:l(["bi",e.compareCases.includes(e.item.id)?"bi-file-x":"bi-files"])},null,2),o(" "+i(e.compareCases.includes(e.item.id)?"\u53D6\u6D88":"\u52A0\u5165")+"\u6BD4\u8F03 ",1)])])])):d("",!0)],2)}const Q=g(k,[["render",G]]);export{Q as C};