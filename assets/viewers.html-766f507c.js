import{p as o}from"./app-c9a81c0f.js";import{_ as c,p as a,q as n,Q as e,O as d,P as u,t as _,v as i}from"./framework-344bb0e4.js";const h={computed:{commands(){return o.filter(t=>t.path.includes("/commands/docs/")).filter(t=>t.frontmatter.categories.includes("viewers")).sort((t,r)=>t.title>r.title?1:r.title>t.title?-1:0)}}},p=e("h1",{id:"viewers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#viewers","aria-hidden":"true"},"#"),_(" Viewers")],-1),m=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),f=["href"],v={style:{"white-space":"pre-wrap"}};function w(t,r,g,x,B,l){return a(),n("div",null,[p,e("table",null,[m,(a(!0),n(d,null,u(l.commands,s=>(a(),n("tr",null,[e("td",null,[e("a",{href:s.path},i(s.title),9,f)]),e("td",v,i(s.frontmatter.usage),1)]))),256))])])}const k=c(h,[["render",w],["__file","viewers.html.vue"]]);export{k as default};
