import{_ as a,r as n,o as s,c as l,a as e,b as r,w as i,d as t}from"./app.8034769a.js";const h={},c=e("h1",{id:"metadata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#metadata","aria-hidden":"true"},"#"),t(" Metadata")],-1),d=e("p",null,"In using Nu, you may have come across times where you felt like there was something extra going on behind the scenes. For example, let's say that you try to open a file that Nu supports only to forget and try to convert again:",-1),u=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml | from toml
error: Expected a string from pipeline
- shell:1:18
1 | open Cargo.toml | from toml
  |                   ^^^^^^^^^ requires string input
- shell:1:5
1 | open Cargo.toml | from toml
  |      ---------- object originates from here
`)])],-1),m=e("p",null,[t("The error message tells us not only that what we gave "),e("code",null,"from toml"),t(" wasn't a string, but also where the value originally came from. How would it know that?")],-1),g=e("p",null,"Values that flow through a pipeline in Nu often have a set of additional information, or metadata, attached to them. These are known as tags, like the tags on an item in a store. These tags don't affect the data, but they give Nu a way to improve the experience of working with that data.",-1),p=t("Let's run the "),_=e("code",null,"open",-1),f=t(" command again, but this time, we'll look at the tags it gives back:"),w=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml | metadata
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 span   \u2502 {record 2 fields}
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),x=e("p",null,"Currently, we track only the span of where values come from. Let's take a closer look at that:",-1),k=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml | metadata | get span
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500
 start \u2502 5
 end   \u2502 15
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500
`)])],-1),v=e("p",null,`The span "start" and "end" here refer to where the underline will be in the line. If you count over 5, and then count up to 15, you'll see it lines up with the "Cargo.toml" filename. This is how the error we saw earlier knew what to underline.`,-1);function y(b,C){const o=n("RouterLink");return s(),l("div",null,[c,d,u,m,g,e("p",null,[p,r(o,{to:"/book/commands/open.html"},{default:i(()=>[_]),_:1}),f]),w,x,k,v])}const T=a(h,[["render",y],["__file","metadata.html.vue"]]);export{T as default};
