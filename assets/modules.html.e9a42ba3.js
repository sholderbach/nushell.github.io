import{_ as l,r as a,o as d,c as r,a as e,b as n,w as s,e as i,d as t}from"./app.8034769a.js";const h={},u=i(`<h1 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h1><p>Similar to many other programming languages, Nushell also has modules that let you import custom commands into a current scope. However, since Nushell is also a shell, modules allow you to import environment variables which can be used to conveniently activate/deactivate various environments.</p><p><em>Note! The current implementation of modules is quite bare-bones and will be expanded in the future. For example, it is not yet possible to import a module from within a module.</em></p><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> Basics</h2><p>A simple module can be defined like this:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; module greetings {
     export def hello [name: string] {
         $&quot;hello ($name)!&quot;
     }

     export def hi [where: string] {
         $&quot;hi ($where)!&quot;
     }
}
</code></pre></div><p>or in a file named the same as the module you want to create:</p><div class="language-text ext-text"><pre class="language-text"><code># greetings.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}
</code></pre></div><p>We defined <code>hello</code> and <code>hi</code> custom commands inside a <code>greetings</code> module.</p><p>The <code>export</code> keyword makes it possible to later import the commands from the module.</p>`,10),c=t("Similar to "),m=e("code",null,"def",-1),g=t(", it is also possible to mark "),p=e("code",null,"def-env",-1),_=t(" with the "),f=e("code",null,"export",-1),x=t(" keyword (you can learn more about "),v=e("code",null,"def-env",-1),b=t(" in the "),w=t("Environment"),y=t(" chapter)."),q=e("h2",{id:"using-modules",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-modules","aria-hidden":"true"},"#"),t(" Using modules")],-1),k=t("By itself, the module does not do anything. To use what the module exports, we need to "),$=e("code",null,"use",-1),N=t(" it."),L=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> use greetings

> greetings hello "world"
hello world!

> greetings hi "there"
hi there!
`)])],-1),M=e("p",null,[t("The "),e("code",null,"hello"),t(" and "),e("code",null,"hi"),t(" commands are now available with the "),e("code",null,"greetings"),t(" prefix.")],-1),O=e("h2",{id:"importing-symbols",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#importing-symbols","aria-hidden":"true"},"#"),t(" Importing symbols")],-1),A=t("In general, anything after the "),E=e("code",null,"use",-1),T=t(" keyword forms an "),Y=e("strong",null,"import pattern",-1),B=t(" which controls how the symbols are imported. The import pattern can be one of the following:"),I=i(`<p><code>use greetings</code></p><p>Imports all symbols with the module name as a prefix (we saw this in the previous example).</p><p><code>use greetings hello</code></p><p>The <code>hello</code> symbol will be imported directly without any prefix.</p><p><code>use greetings [ hello, hi ]</code></p><p>Imports multiple symbols directly without any prefix</p><p><code>use greetings *</code></p><p>You can also use the module name and the <code>*</code> glob to import all names directly without any prefix</p><h2 id="module-files" tabindex="-1"><a class="header-anchor" href="#module-files" aria-hidden="true">#</a> Module Files</h2><p>Nushell lets you implicitly treat a source file as a module. Let&#39;s start by saving the body of the module definition into a file:</p><div class="language-text ext-text"><pre class="language-text"><code># greetings.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}
</code></pre></div>`,11),R=t("Now, you can call "),F=e("code",null,"use",-1),H=t(" directly on the file:"),K=i(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; use greetings.nu

&gt; greetings hello &quot;world&quot;
hello world!

&gt; greetings hi &quot;there&quot;
hi there!
</code></pre></div><p>Nushell automatically infers the module&#39;s name from the stem of the file (&quot;greetings&quot; without the &quot;.nu&quot; extension). You can use any import patterns as described above with the file name instead of the module name.</p><h2 id="local-custom-commands" tabindex="-1"><a class="header-anchor" href="#local-custom-commands" aria-hidden="true">#</a> Local Custom Commands</h2><p>Any custom commands defined in a module without the <code>export</code> keyword will work only in the module&#39;s scope:</p><div class="language-text ext-text"><pre class="language-text"><code># greetings.nu

export def hello [name: string] {
    greetings-helper &quot;hello&quot; &quot;world&quot;
}

export def hi [where: string] {
    greetings-helper &quot;hi&quot; &quot;there&quot;
}

def greetings-helper [greeting: string, subject: string] {
    $&quot;($greeting) ($subject)!&quot;
}
</code></pre></div><p>Then, in Nushell we import all definitions from the &quot;greetings.nu&quot;:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; use greetings.nu *

&gt; hello &quot;world&quot;
hello world!

&gt; hi &quot;there&quot;
hi there!

&gt; greetings-helper &quot;foo&quot; &quot;bar&quot;  # fails because &#39;greetings-helper&#39; is not exported
</code></pre></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2>`,8),V=t("So far we used modules just to import custom commands. It is possible to export environment variables the same way. The syntax is slightly different than what you might be used to from commands like "),j=e("code",null,"let-env",-1),C=t(" or "),S=e("code",null,"load-env",-1),W=t(":"),U=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`# greetings.nu

export env MYNAME { "Arthur, King of the Britons" }

export def hello [name: string] {
    $"hello ($name)"
}
`)])],-1),z=e("p",null,[e("code",null,"use"),t(" works the same way as with custom commands:")],-1),D=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> use greetings.nu

> $env."greetings MYNAME"
Arthur, King of the Britons

> greetings hello $env."greetings MYNAME"
hello Arthur, King of the Britons!
`)])],-1),G=t("You can notice we do not assign the value to "),J=e("code",null,"MYNAME",-1),P=t(" directly. Instead, we give it a block of code ("),Q=e("code",null,"{ ...}",-1),X=t(") that gets evaluated every time we call "),Z=e("code",null,"use",-1),ee=t(". We can demonstrate this property, for example, with the "),te=e("code",null,"random",-1),oe=t(" command:"),ne=i(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; module roll { export env ROLL { random dice | into string } }

&gt; use roll ROLL

&gt; $env.ROLL
4

&gt; $env.ROLL
4

&gt; use roll ROLL

&gt; $env.ROLL
6

&gt; $env.ROLL
6
</code></pre></div><h2 id="exporting-symbols" tabindex="-1"><a class="header-anchor" href="#exporting-symbols" aria-hidden="true">#</a> Exporting symbols</h2><p>As mentioned above, you can export definitions and environment variables from modules. This lets you more easily group related definitions together and export the ones you want to make public.</p><p>You can also export aliases and externs, giving you a way to only use these features when you need. Exporting externs also gives you the ability to hide custom completion commands in a module, so they don&#39;t have to be part of the global namespace.</p><p>Here&#39;s the full list of ways you can export:</p><ul><li><code>export def</code> - export a custom command</li><li><code>export def-env</code> - export a custom environment command</li><li><code>export env</code> - export an environment variable</li><li><code>export alias</code> - export an alias</li><li><code>export extern</code> - export a known external definition</li></ul><h2 id="hiding" tabindex="-1"><a class="header-anchor" href="#hiding" aria-hidden="true">#</a> Hiding</h2>`,7),se=t('Any custom command, alias or environment variable, imported from a module or not, can be "hidden", restoring the previous definition. (Note, it is not yet possible to export aliases from modules but they can still be hidden.) We do this with the '),ie=e("code",null,"hide",-1),le=t(" command:"),ae=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> def foo [] { "foo" }

> foo
foo

> hide foo

> foo  # error! command not found!
`)])],-1),de=t("The "),re=e("code",null,"hide",-1),he=t(" command also accepts import patterns, just like "),ue=e("code",null,"use",-1),ce=t(". The import pattern is interpreted slightly differently, though. It can be one of the following:"),me=i(`<p><code>hide foo</code> or <code>hide greetings</code></p><ul><li>If the name is a custom command or an environment variable, hides it directly. Otherwise:</li><li>If the name is a module name, hides all of its exports prefixed with the module name</li></ul><p><code>hide greetings hello</code></p><ul><li>Hides only the prefixed command / environment variable</li></ul><p><code>hide greetings [hello, hi]</code></p><ul><li>Hides only the prefixed commands / environment variables</li></ul><p><code>hide greetings *</code></p><ul><li>Hides all of the module&#39;s exports, without the prefix</li></ul><p>Let&#39;s show these with examples. We saw direct hiding of a custom command already. Let&#39;s try environment variables:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env FOO = &quot;FOO&quot;

&gt; $env.FOO
FOO

&gt; hide FOO

&gt; $env.FOO  # error! environment variable not found!
</code></pre></div><p>The first case also applies to commands / environment variables brought from a module (using the &quot;greetings.nu&quot; file defined above):</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; use greetings.nu *

&gt; $env.MYNAME
Arthur, King of the Britons

&gt; hello &quot;world&quot;
hello world!

&gt; hide MYNAME

&gt; $env.MYNAME  # error! environment variable not found!

&gt; hide hello

&gt; hello &quot;world&quot; # error! command not found!
</code></pre></div><p>And finally, when the name is the module name (assuming the previous <code>greetings</code> module):</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; use greetings.nu

&gt; $env.&quot;greetings MYNAME&quot;
Arthur, King of the Britons

&gt; greetings hello &quot;world&quot;
hello world!

&gt; hide greetings

&gt; $env.&quot;greetings MYNAME&quot;  # error! environment variable not found!

&gt; greetings hello &quot;world&quot; # error! command not found!
</code></pre></div>`,14);function ge(pe,_e){const o=a("RouterLink");return d(),r("div",null,[u,e("p",null,[c,n(o,{to:"/book/commands/def.html"},{default:s(()=>[m]),_:1}),g,n(o,{to:"/book/commands/def-env.html"},{default:s(()=>[p]),_:1}),_,f,x,n(o,{to:"/book/commands/def-env.html"},{default:s(()=>[v]),_:1}),b,n(o,{to:"/book/environment.html"},{default:s(()=>[w]),_:1}),y]),q,e("p",null,[k,n(o,{to:"/book/commands/use.html"},{default:s(()=>[$]),_:1}),N]),L,M,O,e("p",null,[A,n(o,{to:"/book/commands/use.html"},{default:s(()=>[E]),_:1}),T,Y,B]),I,e("p",null,[R,n(o,{to:"/book/commands/use.html"},{default:s(()=>[F]),_:1}),H]),K,e("p",null,[V,n(o,{to:"/book/commands/let-env.html"},{default:s(()=>[j]),_:1}),C,n(o,{to:"/book/commands/load-env.html"},{default:s(()=>[S]),_:1}),W]),U,z,D,e("p",null,[G,J,P,Q,X,n(o,{to:"/book/commands/use.html"},{default:s(()=>[Z]),_:1}),ee,n(o,{to:"/book/commands/random.html"},{default:s(()=>[te]),_:1}),oe]),ne,e("p",null,[se,n(o,{to:"/book/commands/hide.html"},{default:s(()=>[ie]),_:1}),le]),ae,e("p",null,[de,n(o,{to:"/book/commands/hide.html"},{default:s(()=>[re]),_:1}),he,n(o,{to:"/book/commands/use.html"},{default:s(()=>[ue]),_:1}),ce]),me])}const xe=l(h,[["render",ge],["__file","modules.html.vue"]]);export{xe as default};
