import{p as i}from"./app-c9a81c0f.js";import{_ as c,p as n,q as a,Q as t,O as d,P as u,t as _,v as o}from"./framework-344bb0e4.js";const h={computed:{commands(){return i.filter(e=>e.path.includes("/commands/docs/")).filter(e=>e.frontmatter.categories.includes("network")).sort((e,r)=>e.title>r.title?1:r.title>e.title?-1:0)}}},p=t("h1",{id:"network",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#network","aria-hidden":"true"},"#"),_(" Network")],-1),m=t("tr",null,[t("th",null,"Command"),t("th",null,"Description")],-1),f=["href"],k={style:{"white-space":"pre-wrap"}};function w(e,r,g,x,v,l){return n(),a("div",null,[p,t("table",null,[m,(n(!0),a(d,null,u(l.commands,s=>(n(),a("tr",null,[t("td",null,[t("a",{href:s.path},o(s.title),9,f)]),t("td",k,o(s.frontmatter.usage),1)]))),256))])])}const $=c(h,[["render",w],["__file","network.html.vue"]]);export{$ as default};
