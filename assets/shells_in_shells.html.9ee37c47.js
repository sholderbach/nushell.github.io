import{_ as i,z as l,A as r,X as e,C as t,T as n,$ as s,a6 as a,Q as h}from"./framework.3d018c9f.js";const c={},d=a(`<h1 id="shells-in-shells" tabindex="-1"><a class="header-anchor" href="#shells-in-shells" aria-hidden="true">#</a> Shells in shells</h1><h2 id="working-in-multiple-directories" tabindex="-1"><a class="header-anchor" href="#working-in-multiple-directories" aria-hidden="true">#</a> Working in multiple directories</h2><p>While it&#39;s common to work in one directory, it can be handy to work in multiple places at the same time. For this, Nu offers the concept of &quot;shells&quot;. As the name implies, they&#39;re a way of running multiple shells in one, allowing you to quickly jump between working directories and more.</p><p>To get started, let&#39;s enter a directory:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathant/Source/nushell(main)&gt; enter ../book
/home/jonathant/Source/book(main)&gt; ls
────┬────────────────────┬──────┬────────┬─────────────
 #  │ name               │ type │ size   │ modified
────┼────────────────────┼──────┼────────┼─────────────
  0 │ 404.html           │ File │  429 B │ 2 hours ago
  1 │ CONTRIBUTING.md    │ File │  955 B │ 2 hours ago
  2 │ Gemfile            │ File │ 1.1 KB │ 2 hours ago
  3 │ Gemfile.lock       │ File │ 6.9 KB │ 2 hours ago
</code></pre></div>`,5),u=e("code",null,"cd",-1),m=e("code",null,"shells",-1),g=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`/home/jonathan/Source/book(main)> shells
───┬────────┬────────────┬─────────────────────────
 # │ active │    name    │          path
───┼────────┼────────────┼─────────────────────────
 0 │ false  │ filesystem │ /home/jt/Source/nushell
 1 │ true   │ filesystem │ /home/jt/Source/book
 2 │ false  │ filesystem │ /home/jt/Source/music
───┴────────┴────────────┴─────────────────────────

`)])],-1),p=e("code",null,"shells",-1),w=a(`<p>We can jump between these shells with the <code>n</code>, <code>p</code> and <code>g</code> shortcuts, short for &quot;next&quot;, &quot;previous&quot; and &quot;goto&quot;:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathant/Source/book(main)&gt; n
/home/jonathant/Source/nushell(main)&gt; p
/home/jonathant/Source/book(main)&gt; g 2
/home/jonathant/Source/music(main)&gt;
</code></pre></div><p>We can see the directory changing, but we&#39;re always able to get back to a previous directory we were working on. This allows us to work in multiple directories in the same session.</p><h2 id="exiting-the-shell" tabindex="-1"><a class="header-anchor" href="#exiting-the-shell" aria-hidden="true">#</a> Exiting the shell</h2><p>You can leave a shell you have <code>enter</code>ed using the <code>exit</code> command. If this is the last open shell, Nu will quit.</p><p>You can always quit Nu, even if multiple shells are active by passing the <code>--now</code> flag to the exit command. Like so: <code>exit --now</code></p>`,6);function _(f,x){const o=h("RouterLink");return l(),r("div",null,[d,e("p",null,[t("Entering is similar to changing directories (as we saw with the "),u,t(" command). This allows you to jump into a directory to work in it. Instead of changing the directory, we now are in two directories. To see this more clearly, we can use the "),n(o,{to:"/book/commands/shells.html"},{default:s(()=>[m]),_:1}),t(" command to list the current directories we have active:")]),g,e("p",null,[t("The "),n(o,{to:"/book/commands/shells.html"},{default:s(()=>[p]),_:1}),t(' command shows us there are three shells currently active: our original "nushell" source directory and now this new "book" directory.')]),w])}const y=i(c,[["render",_],["__file","shells_in_shells.html.vue"]]);export{y as default};
