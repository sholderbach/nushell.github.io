import{p as c}from"./app-c9a81c0f.js";import{_ as i,p as a,q as o,Q as e,O as d,P as u,t as _,v as n}from"./framework-344bb0e4.js";const h={computed:{commands(){return c.filter(t=>t.path.includes("/commands/docs/")).filter(t=>t.frontmatter.categories.includes("core")).sort((t,r)=>t.title>r.title?1:r.title>t.title?-1:0)}}},p=e("h1",{id:"core",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#core","aria-hidden":"true"},"#"),_(" Core")],-1),m=e("tr",null,[e("th",null,"Command"),e("th",null,"Description")],-1),f=["href"],g={style:{"white-space":"pre-wrap"}};function x(t,r,v,B,$,l){return a(),o("div",null,[p,e("table",null,[m,(a(!0),o(d,null,u(l.commands,s=>(a(),o("tr",null,[e("td",null,[e("a",{href:s.path},n(s.title),9,f)]),e("td",g,n(s.frontmatter.usage),1)]))),256))])])}const y=i(h,[["render",x],["__file","core.html.vue"]]);export{y as default};
