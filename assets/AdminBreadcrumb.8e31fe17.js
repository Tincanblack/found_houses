import{_ as d,r as i,o as a,c as s,b as c,a as t,f as r,t as o,s as m}from"./index.d7f95996.js";const l={},b={class:"p-3 bg-white shadow-sm rounded mb-4",style:{"--bs-breadcrumb-divider":"'\\F285'"},"aria-label":"breadcrumb"},u={class:"breadcrumb text-dark"},_={class:"breadcrumb-item"},k={key:0,class:"breadcrumb-item"},f={key:1,class:"breadcrumb-item"},h={key:2,class:"breadcrumb-item"};function p(n,x){const e=i("RouterLink");return a(),s("nav",b,[c("ol",u,[c("li",_,[t(e,{to:"/admin/",class:"breadcrumb-link text-decoration-none"},{default:r(()=>[o("\u9996\u9801")]),_:1})]),n.$route.name==="casesManage"?(a(),s("li",k,[t(e,{to:"/admin/cases",class:"breadcrumb-link text-decoration-none"},{default:r(()=>[o("\u6848\u4EF6\u7BA1\u7406 ")]),_:1})])):n.$route.name==="newsManage"?(a(),s("li",f,[t(e,{to:"/admin/news",class:"breadcrumb-link text-decoration-none"},{default:r(()=>[o("\u623F\u8A0A\u7BA1\u7406")]),_:1})])):n.$route.name==="reservesManage"?(a(),s("li",h,[t(e,{to:"/admin/reserves",class:"breadcrumb-link text-decoration-none"},{default:r(()=>[o("\u8AEE\u8A62\u8868\u55AE\u7BA1\u7406")]),_:1})])):m("",!0)])])}const w=d(l,[["render",p]]);export{w as A};