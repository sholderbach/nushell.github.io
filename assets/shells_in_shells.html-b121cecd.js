import{_ as l,M as a,p as i,q as c,Q as e,t,N as n,U as s,a1 as h}from"./framework-344bb0e4.js";const r={},d=h(`<h1 id="shells-in-shells" tabindex="-1"><a class="header-anchor" href="#shells-in-shells" aria-hidden="true">#</a> Shells in shells</h1><h2 id="working-in-multiple-directories" tabindex="-1"><a class="header-anchor" href="#working-in-multiple-directories" aria-hidden="true">#</a> Working in multiple directories</h2><p>While it&#39;s common to work in one directory, it can be handy to work in multiple places at the same time. For this, Nu offers the concept of &quot;shells&quot;. As the name implies, they&#39;re a way of running multiple shells in one, allowing you to quickly jump between working directories and more.</p><p>To get started, let&#39;s enter a directory:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathant/Source/nushell(main)&gt; enter ../book
/home/jonathant/Source/book(main)&gt; ls
────┬────────────────────┬──────┬────────┬─────────────
 #  │ name               │ type │ size   │ modified
────┼────────────────────┼──────┼────────┼─────────────
  0 │ 404.html           │ File │  429 B │ 2 hours ago
  1 │ CONTRIBUTING.md    │ File │  955 B │ 2 hours ago
  2 │ Gemfile            │ File │ 1.1 KB │ 2 hours ago
  3 │ Gemfile.lock       │ File │ 6.9 KB │ 2 hours ago
</code></pre></div>`,5),u=e("code",null,"cd",-1),m=e("code",null,"shells",-1),_=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`/home/jonathan/Source/book(main)> shells
───┬────────┬────────────┬─────────────────────────
 # │ active │    name    │          path
───┼────────┼────────────┼─────────────────────────
 0 │ false  │ filesystem │ /home/jt/Source/nushell
 1 │ true   │ filesystem │ /home/jt/Source/book
 2 │ false  │ filesystem │ /home/jt/Source/music
───┴────────┴────────────┴─────────────────────────

`)])],-1),g=e("code",null,"shells",-1),p=e("code",null,"n",-1),f=e("code",null,"p",-1),w=e("code",null,"g",-1),x=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`/home/jonathant/Source/book(main)> n
/home/jonathant/Source/nushell(main)> p
/home/jonathant/Source/book(main)> g 2
/home/jonathant/Source/music(main)>
`)])],-1),k=e("p",null,"We can see the directory changing, but we're always able to get back to a previous directory we were working on. This allows us to work in multiple directories in the same session.",-1),y=e("h2",{id:"exiting-the-shell",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exiting-the-shell","aria-hidden":"true"},"#"),t(" Exiting the shell")],-1),b=e("code",null,"enter",-1),v=e("code",null,"exit",-1),j=e("p",null,[t("You can always quit Nu, even if multiple shells are active by passing the "),e("code",null,"--now"),t(" flag to the exit command. Like so: "),e("code",null,"exit --now")],-1);function S(N,B){const o=a("RouterLink");return i(),c("div",null,[d,e("p",null,[t("Entering is similar to changing directories (as we saw with the "),n(o,{to:"/commands/docs/cd.html"},{default:s(()=>[u]),_:1}),t(" command). This allows you to jump into a directory to work in it. Instead of changing the directory, we now are in two directories. To see this more clearly, we can use the "),n(o,{to:"/commands/docs/shells.html"},{default:s(()=>[m]),_:1}),t(" command to list the current directories we have active:")]),_,e("p",null,[t("The "),n(o,{to:"/commands/docs/shells.html"},{default:s(()=>[g]),_:1}),t(' command shows us there are three shells currently active: our original "nushell" source directory and now this new "book" directory.')]),e("p",null,[t("We can jump between these shells with the "),n(o,{to:"/commands/docs/n.html"},{default:s(()=>[p]),_:1}),t(", "),n(o,{to:"/commands/docs/p.html"},{default:s(()=>[f]),_:1}),t(" and "),n(o,{to:"/commands/docs/g.html"},{default:s(()=>[w]),_:1}),t(' shortcuts, short for "next", "previous" and "goto":')]),x,k,y,e("p",null,[t("You can leave a shell you have "),n(o,{to:"/commands/docs/enter.html"},{default:s(()=>[b]),_:1}),t("ed using the "),n(o,{to:"/commands/docs/exit.html"},{default:s(()=>[v]),_:1}),t(" command. If this is the last open shell, Nu will quit.")]),j])}const q=l(r,[["render",S],["__file","shells_in_shells.html.vue"]]);export{q as default};
