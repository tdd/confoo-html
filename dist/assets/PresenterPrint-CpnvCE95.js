import{d as _,a0 as d,a1 as h,h as m,g as p,W as u,o as s,b as n,e as t,Z as a,a as r,F as f,S as g,A as v,E as x,a2 as y,j as b,k,f as N,_ as P}from"./index-Fa9_gWUG.js";import{N as w}from"./NoteDisplay-C8pCESBR.js";const S={class:"m-4"},V={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},A=_({__name:"PresenterPrint",setup(C){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const c=p(()=>u.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(s(),n("div",{id:"page-root",style:v(r(x))},[t("div",S,[t("div",V,[t("h1",L,a(r(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(s(!0),n(f,null,g(c.value,(e,i)=>(s(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(r(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),j])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(s(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),M=P(A,[["__file","/Users/christophe.porteneuve/Personal/talks/confoo-html/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
