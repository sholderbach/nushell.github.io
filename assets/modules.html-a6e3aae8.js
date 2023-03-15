import{_ as a,M as d,p as i,q as r,Q as e,t,N as n,U as l,a1 as s}from"./framework-344bb0e4.js";const u={},c=s(`<h1 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h1><p>Similar to many other programming languages, Nushell also has modules that let you import custom commands into a current scope. However, since Nushell is also a shell, modules allow you to import environment variables which can be used to conveniently activate/deactivate various environments.</p><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> Basics</h2><p>A simple module can be defined like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; module greetings {
     export def hello [name: string] {
         $&quot;hello ($name)!&quot;
     }

     export def hi [where: string] {
         $&quot;hi ($where)!&quot;
     }
}
</code></pre></div><p>or in a file named the same as the module you want to create:</p><div class="language-text" data-ext="text"><pre class="language-text"><code># greetings.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}
</code></pre></div><p>We defined <code>hello</code> and <code>hi</code> custom commands inside a <code>greetings</code> module.</p>`,8),h=e("code",null,"export",-1),m=e("code",null,"def",-1),p=e("code",null,"def-env",-1),g=e("code",null,"export",-1),_=e("code",null,"def-env",-1),x=e("h2",{id:"using-modules",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-modules","aria-hidden":"true"},"#"),t(" Using modules")],-1),f=e("code",null,"use",-1),v=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> use greetings

> greetings hello "world"
hello world!

> greetings hi "there"
hi there!
`)])],-1),w=e("p",null,[t("The "),e("code",null,"hello"),t(" and "),e("code",null,"hi"),t(" commands are now available with the "),e("code",null,"greetings"),t(" prefix.")],-1),y=e("h2",{id:"importing-symbols",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#importing-symbols","aria-hidden":"true"},"#"),t(" Importing symbols")],-1),b=e("code",null,"use",-1),q=e("strong",null,"import pattern",-1),$=s(`<p><code>use greetings</code></p><p>Imports all symbols with the module name as a prefix (we saw this in the previous example).</p><p><code>use greetings hello</code></p><p>The <code>hello</code> symbol will be imported directly without any prefix.</p><p><code>use greetings [ hello, hi ]</code></p><p>Imports multiple symbols directly without any prefix.</p><p><code>use greetings *</code></p><p>You can also use the module name and the <code>*</code> glob to import all names directly without any prefix.</p><h2 id="module-files" tabindex="-1"><a class="header-anchor" href="#module-files" aria-hidden="true">#</a> Module Files</h2><p>Nushell lets you implicitly treat a source file as a module. Let&#39;s start by saving the body of the module definition into a file:</p><div class="language-text" data-ext="text"><pre class="language-text"><code># greetings.nu

export def hello [name: string] {
    $&quot;hello ($name)!&quot;
}

export def hi [where: string] {
    $&quot;hi ($where)!&quot;
}
</code></pre></div>`,11),k=e("code",null,"use",-1),E=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> use greetings.nu

> greetings hello "world"
hello world!

> greetings hi "there"
hi there!
`)])],-1),M=e("p",null,`Nushell automatically infers the module's name from the stem of the file ("greetings" without the ".nu" extension). You can use any import patterns as described above with the file name instead of the module name.`,-1),N=e("h2",{id:"local-custom-commands",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-custom-commands","aria-hidden":"true"},"#"),t(" Local Custom Commands")],-1),O=e("code",null,"export",-1),T=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code># greetings.nu

export def hello [name: string] {
    greetings-helper &quot;hello&quot; &quot;world&quot;
}

export def hi [where: string] {
    greetings-helper &quot;hi&quot; &quot;there&quot;
}

def greetings-helper [greeting: string, subject: string] {
    $&quot;($greeting) ($subject)!&quot;
}
</code></pre></div><p>Then, in Nushell we import all definitions from the &quot;greetings.nu&quot;:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; use greetings.nu *

&gt; hello &quot;world&quot;
hello world!

&gt; hi &quot;there&quot;
hi there!

&gt; greetings-helper &quot;foo&quot; &quot;bar&quot;  # fails because &#39;greetings-helper&#39; is not exported
</code></pre></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2>`,4),H=e("code",null,"export-env",-1),A=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`# greetings.nu

export-env {
    let-env MYNAME = "Arthur, King of the Britons"
}

export def hello [] {
    $"hello ($env.MYNAME)"
}
`)])],-1),Y=e("code",null,"use",-1),P=e("code",null,"export-env",-1),B=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> use greetings.nu

> $env.MYNAME
Arthur, King of the Britons

> greetings hello
hello Arthur, King of the Britons!
`)])],-1),I={class:"custom-container tip"},R=e("p",{class:"custom-container-title"},"TIP",-1),S=e("code",null,"let-env",-1),V=e("code",null,"export-env {...}",-1),F=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`export-env {
    def tmp [] { "tmp" }
    def other [] { "other" }

    let len = (tmp | str length)

    load-env {
        OTHER_ENV: (other)
        TMP_LEN: $len
    }
}
`)])],-1),L=e("p",null,[t("Only "),e("code",null,"$env.TMP_LEN"),t(" and "),e("code",null,"$env.OTHER_ENV"),t(" are preserved after evaluating the "),e("code",null,"export-env"),t(" module.")],-1),U=e("code",null,"export use",-1),j=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code># purpose.nu
export use greetings.nu
export-env {let-env MYPURPOSE = &quot;to build an empire.&quot;}

export def greeting_purpose [] {
    $&quot;Hello ($env.MYNAME). My purpose is ($env.MYPURPOSE)&quot;
}

</code></pre></div><p>and then use it</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; use purpose.nu
&gt; purpose greeeting_purpose
</code></pre></div><p>However, this won&#39;t work, because the module would not export its environment unless defined manually, like so:</p><div class="language-text" data-ext="text"><pre class="language-text"><code># purpose.nu

# preserves its environment
export-env {
    use greetings.nu
    let-env MYPURPOSE = &quot;to build an empire.&quot;
}

export def greeting_purpose [] {
    $&quot;Hello ($env.MYNAME). My purpose is ($env.MYPURPOSE)&quot;
}

</code></pre></div><p>Now, everything is exported properly</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; use purpose.nu
&gt; purpose greeting_purpose
Hello Arthur, King of the Britons. My purpose is to build an empire.
</code></pre></div><h2 id="exporting-symbols" tabindex="-1"><a class="header-anchor" href="#exporting-symbols" aria-hidden="true">#</a> Exporting symbols</h2>`,8),C=e("code",null,"def",-1),K=e("code",null,"def-env",-1),W=e("code",null,"alias",-1),z=e("code",null,"extern",-1),Q=e("p",null,"Here's the full list of ways you can export:",-1),D=e("code",null,"export def",-1),G=e("code",null,"export def-env",-1),J=e("code",null,"export alias",-1),X=e("code",null,"export extern",-1),Z=e("code",null,"export use",-1),ee=e("h2",{id:"hiding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hiding","aria-hidden":"true"},"#"),t(" Hiding")],-1),te=e("code",null,"hide",-1),oe=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> def foo [] { "foo" }

> foo
foo

> hide foo

> foo  # error! command not found!
`)])],-1),ne=e("code",null,"hide",-1),le=e("code",null,"use",-1),se=s('<p><code>hide foo</code> or <code>hide greetings</code></p><ul><li>If the name is a custom command or an environment variable, hides it directly. Otherwise:</li><li>If the name is a module name, hides all of its exports prefixed with the module name</li></ul><p><code>hide greetings hello</code></p><ul><li>Hides only the prefixed command / environment variable</li></ul><p><code>hide greetings [hello, hi]</code></p><ul><li>Hides only the prefixed commands / environment variables</li></ul><p><code>hide greetings *</code></p><ul><li>Hides all of the module&#39;s exports, without the prefix</li></ul><h2 id="hiding-environment-variables" tabindex="-1"><a class="header-anchor" href="#hiding-environment-variables" aria-hidden="true">#</a> Hiding Environment Variables</h2>',9),ae=e("code",null,"hide-env",-1),de=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = "FOO"

> $env.FOO
FOO

> hide-env FOO

> $env.FOO  # error! environment variable not found!
`)])],-1);function ie(re,ue){const o=d("RouterLink");return i(),r("div",null,[c,e("p",null,[t("The "),n(o,{to:"/commands/docs/export.html"},{default:l(()=>[h]),_:1}),t(" keyword makes it possible to later import the commands from the module.")]),e("p",null,[t("Similar to "),n(o,{to:"/commands/docs/def.html"},{default:l(()=>[m]),_:1}),t(", it is also possible to mark "),n(o,{to:"/commands/docs/def-env.html"},{default:l(()=>[p]),_:1}),t(" with the "),n(o,{to:"/commands/docs/export.html"},{default:l(()=>[g]),_:1}),t(" keyword (you can learn more about "),n(o,{to:"/commands/docs/def-env.html"},{default:l(()=>[_]),_:1}),t(" in the "),n(o,{to:"/book/environment.html"},{default:l(()=>[t("Environment")]),_:1}),t(" chapter).")]),x,e("p",null,[t("By itself, the module does not do anything. To use what the module exports, we need to "),n(o,{to:"/commands/docs/use.html"},{default:l(()=>[f]),_:1}),t(" it.")]),v,w,y,e("p",null,[t("In general, anything after the "),n(o,{to:"/commands/docs/use.html"},{default:l(()=>[b]),_:1}),t(" keyword forms an "),q,t(" which controls how the symbols are imported. The import pattern can be one of the following:")]),$,e("p",null,[t("Now, you can call "),n(o,{to:"/commands/docs/use.html"},{default:l(()=>[k]),_:1}),t(" directly on the file:")]),E,M,N,e("p",null,[t("Any custom commands defined in a module without the "),n(o,{to:"/commands/docs/export.html"},{default:l(()=>[O]),_:1}),t(" keyword will work only in the module's scope:")]),T,e("p",null,[t("So far we used modules just to import custom commands. However, modules can also define an environment using "),n(o,{to:"/commands/docs/export-env.html"},{default:l(()=>[H]),_:1}),t(":")]),A,e("p",null,[n(o,{to:"/commands/docs/use.html"},{default:l(()=>[Y]),_:1}),t(" will run the code inside the "),n(o,{to:"/commands/docs/export-env.html"},{default:l(()=>[P]),_:1}),t(" block and merge its environment into the current scope:")]),B,e("div",I,[R,e("p",null,[t("You might wonder why we can't just define "),n(o,{to:"/commands/docs/let-env.html"},{default:l(()=>[S]),_:1}),t(" at the top of the module. The reason is that the "),V,t(" block keeps its scope separate from the rest of the module which makes it more organized. You can put a complex code defining your environment without polluting the namespace of the module, for example:")]),F,L]),e("p",null,[t("If you also want to keep your variables in separate modules and export its environment, you could try to "),n(o,{to:"/commands/docs/export_use.html"},{default:l(()=>[U]),_:1}),t(" it:")]),j,e("p",null,[t("Apart from "),n(o,{to:"/commands/docs/def.html"},{default:l(()=>[C]),_:1}),t(" and "),n(o,{to:"/commands/docs/def-env.html"},{default:l(()=>[K]),_:1}),t(", you can also export "),n(o,{to:"/commands/docs/alias.html"},{default:l(()=>[W]),_:1}),t("es and "),n(o,{to:"/commands/docs/extern.html"},{default:l(()=>[z]),_:1}),t("s, giving you a way to only use these features when you need. Exporting externs also gives you the ability to hide custom completion commands in a module, so they don't have to be part of the global namespace.")]),Q,e("ul",null,[e("li",null,[n(o,{to:"/commands/docs/export_def.html"},{default:l(()=>[D]),_:1}),t(" - export a custom command")]),e("li",null,[n(o,{to:"/commands/docs/export_def-env.html"},{default:l(()=>[G]),_:1}),t(" - export a custom environment command")]),e("li",null,[n(o,{to:"/commands/docs/export_alias.html"},{default:l(()=>[J]),_:1}),t(" - export an alias")]),e("li",null,[n(o,{to:"/commands/docs/export_extern.html"},{default:l(()=>[X]),_:1}),t(" - export a known external definition")]),e("li",null,[n(o,{to:"/commands/docs/export_use.html"},{default:l(()=>[Z]),_:1}),t(" - use definitions from a module and export them from this module")])]),ee,e("p",null,[t('Any custom command or alias, imported from a module or not, can be "hidden", restoring the previous definition. We do this with the '),n(o,{to:"/commands/docs/hide.html"},{default:l(()=>[te]),_:1}),t(" command:")]),oe,e("p",null,[t("The "),n(o,{to:"/commands/docs/hide.html"},{default:l(()=>[ne]),_:1}),t(" command also accepts import patterns, just like "),n(o,{to:"/commands/docs/use.html"},{default:l(()=>[le]),_:1}),t(". The import pattern is interpreted slightly differently, though. It can be one of the following:")]),se,e("p",null,[t("Environment variables can be hidden with "),n(o,{to:"/commands/docs/hide-env.html"},{default:l(()=>[ae]),_:1}),t(":")]),de])}const he=a(u,[["render",ie],["__file","modules.html.vue"]]);export{he as default};
