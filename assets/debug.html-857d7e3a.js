import{p as d}from"./app-c9a81c0f.js";import{_ as i,p as a,q as n,Q as e,O as c,P as u,t as _,v as l}from"./framework-344bb0e4.js";const h={computed:{commands(){return d.filter(t=>t.path.includes("/commands/docs/")).filter(t=>t.frontmatter.categories.includes("debug")).sort((t,r)=>t.title>r.title?1:r.title>t.title?-1:0)}}},p=e("h1",{id:"debug",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debug","aria-hidden":"true"},"#"),_(" Debug")],-1),m=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),f=["href"],g={style:{"white-space":"pre-wrap"}};function b(t,r,x,v,B,o){return a(),n("div",null,[p,e("table",null,[m,(a(!0),n(c,null,u(o.commands,s=>(a(),n("tr",null,[e("td",null,[e("a",{href:s.path},l(s.title),9,f)]),e("td",g,l(s.frontmatter.usage),1)]))),256))])])}const k=i(h,[["render",b],["__file","debug.html.vue"]]);export{k as default};
