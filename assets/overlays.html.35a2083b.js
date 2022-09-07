import{_ as r,r as d,o as l,c,a as e,b as t,w as n,d as o,e as s}from"./app.8034769a.js";const i={},h=e("h1",{id:"overlays",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overlays","aria-hidden":"true"},"#"),o(" Overlays")],-1),u=e("p",null,'Overlays act as "layers" of definitions (custom commands, aliases, environment variables) that can be activated and deactivated on demand. They resemble virtual environments found in some languages, such as Python.',-1),m=o("Note: To understand overlays, make sure to check "),v=o("Modules"),g=o(" first as overlays build on top of modules."),p=e("h2",{id:"basics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#basics","aria-hidden":"true"},"#"),o(" Basics")],-1),y=o("First, Nushell comes with one default overlay called "),_=e("code",null,"zero",-1),f=o(". You can inspect which overlays are active with the "),x=e("code",null,"overlay list",-1),b=o(" command. You should see the default overlay listed there."),w=e("p",null,"To create a new overlay, you first need a module:",-1),z=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> module spam {
    export def foo [] {
        "foo"
    }

    export alias bar = "bar"

    export env BAZ {
        "baz"
    }
}
`)])],-1),k=e("p",null,[o("We'll use this module throughout the chapter: Whenever you see "),e("code",null,"overlay add spam"),o(", assume "),e("code",null,"spam"),o(" is referring to this module.")],-1),T=o("To create the overlay, call "),O=e("code",null,"overlay add",-1),q=o(":"),N=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> overlay add spam

> foo
foo

> bar
bar

> $env.BAZ
baz

> overlay list
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 zero
 1 \u2502 spam
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),B=e("p",null,[o("In the following sections, the "),e("code",null,">"),o(" prompt will be preceded by the name of the last active overlay. "),e("code",null,"(spam)> some-command"),o(" means the "),e("code",null,"spam"),o(" overlay is the last active overlay when the command was typed.")],-1),C=e("h2",{id:"removing-an-overlay",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#removing-an-overlay","aria-hidden":"true"},"#"),o(" Removing an Overlay")],-1),F=o("If you don't need the overlay definitions anymore, call "),I=e("code",null,"overlay remove",-1),R=o(":"),A=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`(spam)> overlay remove spam

(zero)> foo
Error: Can't run executable...

(zero)> overlay list
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 zero
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),E=e("p",null,"The overlays are also scoped. Any added overlays are removed at the end of the scope:",-1),P=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> do { overlay add spam; foo }
foo

(zero)> overlay list
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 zero
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),V=o("Furthermore, "),S=e("code",null,"overlay remove",-1),Y=o(" without an argument will remove the last active overlay."),L=s(`<h2 id="overlays-are-recordable" tabindex="-1"><a class="header-anchor" href="#overlays-are-recordable" aria-hidden="true">#</a> Overlays are Recordable</h2><p>Any new definition (command, alias, environment variable) is recorded into the last active overlay:</p><div class="language-text ext-text"><pre class="language-text"><code>(zero)&gt; overlay add spam

(spam)&gt; def eggs [] { &quot;eggs&quot; }
</code></pre></div><p>Now, the <code>eggs</code> command belongs to the <code>spam</code> overlay. If we remove the overlay, we can&#39;t call it anymore:</p><div class="language-text ext-text"><pre class="language-text"><code>(spam)&gt; overlay remove spam

(zero)&gt; eggs
Error: Can&#39;t run executable...
</code></pre></div><p>But we can bring it back!</p><div class="language-text ext-text"><pre class="language-text"><code>(zero)&gt; overlay add spam

(spam)&gt; eggs
eggs
</code></pre></div><p>Overlays remember what you add to them and store that information even if you remove them. This can let you repeatedly swap between different contexts.</p>`,8),W={class:"custom-container tip"},Z=e("p",{class:"custom-container-title"},"TIP",-1),$=e("p",null,"Sometimes, after adding an overlay, you might not want custom definitions to be added into it. The solution can be to create a new empty overlay that would be used just for recording the custom changes:",-1),j=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> overlay add spam

(spam)> module scratchpad { }

(spam)> overlay add scratchpad

(scratchpad)> def eggs [] { "eggs" }
`)])],-1),D=e("p",null,[o("The "),e("code",null,"eggs"),o(" command is added into "),e("code",null,"scratchpad"),o(" while keeping "),e("code",null,"spam"),o(" intact.")],-1),H=o("To make it less verbose, you can use the "),M=e("code",null,"overlay new",-1),G=o(" command:"),J=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`(zero)> overlay add spam

(spam)> overlay new scratchpad

(scratchpad)> def eggs [] { "eggs" }
`)])],-1),K=s(`<h2 id="prefixed-overlays" tabindex="-1"><a class="header-anchor" href="#prefixed-overlays" aria-hidden="true">#</a> Prefixed Overlays</h2><p>The <code>overlay add</code> command would take all commands and aliases from the module and put them directly into the current namespace. However, you might want to keep them as subcommands behind the module&#39;s name. That&#39;s what <code>--prefix</code> is for:</p><div class="language-text ext-text"><pre class="language-text"><code>(zero)&gt; module spam {
    export def foo [] { &quot;foo&quot; }
}

(zero)&gt; overlay add --prefix spam

(spam)&gt; spam foo
foo
</code></pre></div><h2 id="rename-an-overlay" tabindex="-1"><a class="header-anchor" href="#rename-an-overlay" aria-hidden="true">#</a> Rename an Overlay</h2><p>You can change the name of the added overlay with the <code>as</code> keyword:</p><div class="language-text ext-text"><pre class="language-text"><code>(zero)&gt; module spam { export def foo [] { &quot;foo&quot; } }

(zero)&gt; overlay add spam as eggs

(eggs)&gt; foo
foo

(eggs)&gt; overlay remove eggs

(spam)&gt;
</code></pre></div><p>This can be useful if you have a generic script name, such as virtualenv&#39;s <code>activate.nu</code> but you want some more descriptive name for your overlay.</p><h2 id="preserving-definitions" tabindex="-1"><a class="header-anchor" href="#preserving-definitions" aria-hidden="true">#</a> Preserving Definitions</h2><p>Sometimes, you might want to remove an overlay, but keep all the custom definitions you added without having to redefine them in the next active overlay:</p><div class="language-text ext-text"><pre class="language-text"><code>(zero)&gt; overlay add spam

(spam)&gt; def eggs [] { &quot;eggs&quot; }

(spam)&gt; overlay remove --keep-custom spam

(zero)&gt; eggs
eggs
</code></pre></div><p>The <code>--keep-custom</code> flag does exactly that.</p><p>One can also keep a list of environment variables that were defined inside an overlay, but remove the rest, using the <code>--keep-env</code> flag:</p><div class="language-text ext-text"><pre class="language-text"><code>(zero)&gt; module spam { export def foo [] { &quot;foo&quot; }; export env FOO {&quot;foo&quot;}}

(zero)&gt; overlay add spam

(spam)&gt; overlay remove spam --keep-env [FOO]

(zero)&gt; foo
Error: Can&#39;t run executable...

(zero)&gt; $env.FOO
foo
</code></pre></div><h2 id="ordering-overlays" tabindex="-1"><a class="header-anchor" href="#ordering-overlays" aria-hidden="true">#</a> Ordering Overlays</h2><p>The overlays are arranged as a stack. If multiple overlays contain the same definition, say <code>foo</code>, the one from the last active one would take a precedence. To bring some overlay to the top of the stack, you can call <code>overlay add</code> again:</p><div class="language-text ext-text"><pre class="language-text"><code>(zero)&gt; def foo [] { &quot;foo-in-zero&quot; }

(zero)&gt; overlay add spam

(spam)&gt; foo
foo

(spam)&gt; overlay add zero

(zero)&gt; foo
foo-in-zero

(zero)&gt; overlay list
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 spam
 1 \u2502 zero
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Now, the <code>zero</code> overlay takes a precedence.</p>`,17);function Q(U,X){const a=d("RouterLink");return l(),c("div",null,[h,u,e("p",null,[e("em",null,[m,t(a,{to:"/book/modules.html"},{default:n(()=>[v]),_:1}),g])]),p,e("p",null,[y,_,f,t(a,{to:"/book/commands/overlay_list.html"},{default:n(()=>[x]),_:1}),b]),w,z,k,e("p",null,[T,t(a,{to:"/book/commands/overlay_add.html"},{default:n(()=>[O]),_:1}),q]),N,B,C,e("p",null,[F,t(a,{to:"/book/commands/overlay_remove.html"},{default:n(()=>[I]),_:1}),R]),A,E,P,e("p",null,[V,t(a,{to:"/book/commands/overlay_remove.html"},{default:n(()=>[S]),_:1}),Y]),L,e("div",W,[Z,$,j,D,e("p",null,[H,t(a,{to:"/book/commands/overlay_new.html"},{default:n(()=>[M]),_:1}),G]),J]),K])}const oe=r(i,[["render",Q],["__file","overlays.html.vue"]]);export{oe as default};
