import{_ as s,r,o as i,c as l,f as a,a as e,b as o,d as n}from"./app.8034769a.js";const h={},d=e("h1",{id:"nushell-0-42",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-42","aria-hidden":"true"},"#"),n(" Nushell 0.42")],-1),_=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),c=e("p",null,"Today, we're releasing 0.42 of Nu. This release is a bugfix release of 0.41.",-1),u=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),n(" Where to get it")],-1),g=n("Nu 0.42 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.42.0",target:"_blank",rel:"noopener noreferrer"},p=n("pre-built binaries"),b=n(" or from "),m={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=n("crates.io"),y=n(". If you have Rust installed you can install it using "),k=e("code",null,"cargo install nu",-1),x=n("."),N=e("p",null,[n("If you want all the goodies, you can install "),e("code",null,"cargo install nu --features=extra"),n(".")],-1),q=e("p",null,[n("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),e("code",null,"cargo install nu_plugin_<plugin name>"),n(".")],-1),v=e("h1",{id:"what-s-new",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),n(" What's New")],-1),A=e("h2",{id:"fixes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fixes","aria-hidden":"true"},"#"),n(" Fixes")],-1),I=n("Can optionally "),B={href:"https://github.com/nushell/nushell/pull/4219",target:"_blank",rel:"noopener noreferrer"},E=n("use an insecure SSL cert"),T=n(" (nibon7)"),L=n("Fixed a crash "),V={href:"https://github.com/nushell/nushell/pull/4226",target:"_blank",rel:"noopener noreferrer"},W=n("when viewing text files"),C=n(" (nibon7)"),F=n("Build fixed for "),R={href:"https://github.com/nushell/nushell/pull/4192",target:"_blank",rel:"noopener noreferrer"},S=n("NetBSD"),j=n(" (0323pin)"),P=e("h2",{id:"breaking-change",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#breaking-change","aria-hidden":"true"},"#"),n(" Breaking change")],-1),D=n("For naming consistency, "),G={href:"https://github.com/nushell/nushell/pull/4189",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"into column_path",-1),z=n(" is now "),H=e("code",null,"into column-path",-1),J=n(" (hustcer)"),K=e("h1",{id:"engine-q-progress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#engine-q-progress","aria-hidden":"true"},"#"),n(" Engine-q progress")],-1),M=n("At this point, we're now 100% focused on getting engine-q done. Over "),Q={href:"https://github.com/nushell/engine-q/pulls?page=1&q=is%3Apr+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"},U=n("120 PRs"),X=n(" have been merged into engine-q since the last Nushell release and another "),Y={href:"https://github.com/nushell/reedline/pulls?q=is%3Apr+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"},Z=n("20 PRs in reedline"),$=n("."),ee=n("Engine-q is now able to be used as a standalone shell. It includes the full set of dataframe functionality and most of the nushell commands. We aren't yet making nightly builds available, but you should be able to "),ne={href:"https://github.com/nushell/engine-q",target:"_blank",rel:"noopener noreferrer"},te=n("clone and build engine-q"),oe=n(" on your machine in the same way you might grab the latest Nushell. As you try out engine-q, also give a read over the "),se={href:"https://github.com/nushell/engine-q/issues/522",target:"_blank",rel:"noopener noreferrer"},re=n("in-progress breaking change list"),ie=n(", as it shows where the new engine will differ from Nushell's current engine."),le=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),n(" Looking forward")],-1),ae=n("There are still "),he={href:"https://github.com/nushell/engine-q/issues/242",target:"_blank",rel:"noopener noreferrer"},de=n("some commands left to port"),_e=n(" if you'd like to jump in and give porting a try. If you're interested, you can also help us by testing out engine-q itself as a shell and report your experiences with it. And of course, come join us on the "),ce={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},ue=n("discord"),ge=n(". We'd be happy to show you around.");function fe(pe,be){const t=r("ExternalLinkIcon");return i(),l("div",null,[d,_,c,a(" more "),u,e("p",null,[g,e("a",f,[p,o(t)]),b,e("a",m,[w,o(t)]),y,k,x]),N,q,v,A,e("ul",null,[e("li",null,[I,e("a",B,[E,o(t)]),T]),e("li",null,[L,e("a",V,[W,o(t)]),C]),e("li",null,[F,e("a",R,[S,o(t)]),j])]),P,e("ul",null,[e("li",null,[D,e("a",G,[O,z,H,o(t)]),J])]),K,e("p",null,[M,e("a",Q,[U,o(t)]),X,e("a",Y,[Z,o(t)]),$]),e("p",null,[ee,e("a",ne,[te,o(t)]),oe,e("a",se,[re,o(t)]),ie]),le,e("p",null,[ae,e("a",he,[de,o(t)]),_e,e("a",ce,[ue,o(t)]),ge])])}const we=s(h,[["render",fe],["__file","2021-12-28-nushell_0_42.html.vue"]]);export{we as default};
