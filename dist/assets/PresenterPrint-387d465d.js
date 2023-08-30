import{d,i as _,a as u,u as h,b as p,c as m,e as f,f as n,g as t,t as o,h as a,F as g,r as v,n as x,j as b,o as i,k as y,l as N,m as k,p as C,q as P,_ as S}from"./index-b242cd37.js";import{N as w}from"./NoteDisplay-0158ef7b.js";const D={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},L={class:"text-lg"},T={class:"font-bold flex gap-2"},F={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},A=d({__name:"PresenterPrint",setup(M){_(u),h(`
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
`),p({title:`Notes - ${m.title}`});const l=f(()=>b.slice(0,-1).map(s=>{var r;return(r=s.meta)==null?void 0:r.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,r)=>(i(),n("div",{id:"page-root",style:x(a(P))},[t("div",D,[t("div",V,[t("h1",j,o(a(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(i(!0),n(g,null,v(a(l),(e,c)=>(i(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",T,[t("div",F,o(e==null?void 0:e.no)+"/"+o(a(y)),1),N(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(l).length-1?(i(),n("hr",z)):C("v-if",!0)]))),128))])],4))}}),I=S(A,[["__file","C:/Users/tddia/OneDrive - Delicious Insights/Bureau/Conferences et Articles/Smashing Conf Freiburg 2023/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{I as default};
