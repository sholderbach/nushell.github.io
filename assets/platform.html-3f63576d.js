import{p as i}from"./app-c9a81c0f.js";import{_ as c,p as s,q as l,Q as t,O as d,P as p,t as m,v as o}from"./framework-344bb0e4.js";const f={computed:{commands(){return i.filter(e=>e.path.includes("/commands/docs/")).filter(e=>e.frontmatter.categories.includes("platform")).sort((e,r)=>e.title>r.title?1:r.title>e.title?-1:0)}}},u=t("h1",{id:"platform",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#platform","aria-hidden":"true"},"#"),m(" Platform")],-1),_=t("tr",null,[t("th",null,"Command"),t("th",null,"Description")],-1),h=["href"],g={style:{"white-space":"pre-wrap"}};function x(e,r,v,B,$,n){return s(),l("div",null,[u,t("table",null,[_,(s(!0),l(d,null,p(n.commands,a=>(s(),l("tr",null,[t("td",null,[t("a",{href:a.path},o(a.title),9,h)]),t("td",g,o(a.frontmatter.usage),1)]))),256))])])}const y=c(f,[["render",x],["__file","platform.html.vue"]]);export{y as default};
