import{p as o}from"./app-c9a81c0f.js";import{_ as c,p as n,q as a,Q as t,O as d,P as u,t as _,v as i}from"./framework-344bb0e4.js";const h={computed:{commands(){return o.filter(e=>e.path.includes("/commands/docs/")).filter(e=>e.frontmatter.categories.includes("strings")).sort((e,s)=>e.title>s.title?1:s.title>e.title?-1:0)}}},p=t("h1",{id:"strings",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#strings","aria-hidden":"true"},"#"),_(" Strings")],-1),m=t("tr",null,[t("th",null,"Command"),t("th",null,"Description")],-1),f=["href"],g={style:{"white-space":"pre-wrap"}};function x(e,s,v,B,$,l){return n(),a("div",null,[p,t("table",null,[m,(n(!0),a(d,null,u(l.commands,r=>(n(),a("tr",null,[t("td",null,[t("a",{href:r.path},i(r.title),9,f)]),t("td",g,i(r.frontmatter.usage),1)]))),256))])])}const y=c(h,[["render",x],["__file","strings.html.vue"]]);export{y as default};
