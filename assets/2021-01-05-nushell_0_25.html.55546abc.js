import{_ as n,r as s,o as i,c as l,f as r,a as e,b as o,d as a,e as d}from"./app.8034769a.js";const c={},h=e("h1",{id:"nushell-0-25",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-25","aria-hidden":"true"},"#"),a(" Nushell 0.25")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=e("p",null,"Today, we're releasing 0.25 of Nu. It's one of the largest releases we've ever done. With it Nushell grows from being a shell to being a full scripting language as well.",-1),g=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),m=a("Nu 0.25 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.25.1",target:"_blank",rel:"noopener noreferrer"},x=a("pre-built binaries"),_=a(" or from "),b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=a("crates.io"),v=a(". If you have Rust installed you can install it using "),y=e("code",null,"cargo install nu",-1),k=a("."),N=e("p",null,[a("If you want all the goodies, you can install "),e("code",null,"cargo install nu --features=extra"),a(".")],-1),q=e("p",null,[a("As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use "),e("code",null,"cargo install nu_plugin_<plugin name>"),a(".")],-1),T=e("h1",{id:"what-s-new",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-new","aria-hidden":"true"},"#"),a(" What's New")],-1),$=a("Lots of new features in this release. If you'd like to watch a demonstration, we can also watch a "),E={href:"https://www.youtube.com/watch?v=PO6EW7_a1tE",target:"_blank",rel:"noopener noreferrer"},I=a("video showing off the new features"),W=a("."),A=d(`<h2 id="custom-commands" tabindex="-1"><a class="header-anchor" href="#custom-commands" aria-hidden="true">#</a> Custom commands</h2><p>A long-requested feature for Nushell is to have scripting capability. A key piece of this story is the ability to make your own commands in addition to those built into Nu.</p><p>With 0.25, you can now make your own custom commands:</p><div class="language-text ext-text"><pre class="language-text"><code>def add [x, y] {
    = $x + $y
}

add 1 5
</code></pre></div><p>The definitions are created in the scope where you define them, and are visible before any of the script body runs. This allows you to have written the above like so:</p><div class="language-text ext-text"><pre class="language-text"><code>add 1 5

def add [x, y] {
    = $x + $y
}
</code></pre></div><p>There are a few other important features of custom commands. The first is that you can optionally add a type annotation to each parameter you take in. These type annotations tell the parser how to parse arguments given to the function and tell the type checker what is allowed to be passed in.</p><div class="language-text ext-text"><pre class="language-text"><code>def add [x:int, y] {
    = $x + $y
}

add &quot;bob&quot; 4
</code></pre></div><p>Now if you run the example, you&#39;ll see a type error like this:</p><div class="language-text ext-text"><pre class="language-text"><code>error: Type Error
  \u250C\u2500 shell:5:5
  \u2502
5 \u2502 add &quot;bob&quot; 4
  \u2502     ^^^^^ Expected int, found &quot;bob&quot;
</code></pre></div><p>Here&#39;s a list of the types that are allowed:</p><ul><li>int - an integer</li><li>string - a string</li><li>path - a filepath</li><li>table - a table</li><li>unit - a number with a unit (like <code>10kb</code>)</li><li>number - an integer or decimal number</li><li>pattern - a glob pattern (like <code>foo*</code>)</li><li>range - a numeric range (like <code>1..10</code>)</li><li>block - a code block (like <code>{ ls }</code>)</li><li>any - any of the above types (this is assumed if you leave off the type)</li></ul><p><em>Note: Nushell is whitespace-significant, so the variable + &#39;:&#39; + type need to be united as one, without spaces.</em></p><p>You can also create flags for your commands:</p><div class="language-text ext-text"><pre class="language-text"><code>def create-item(name, --age:int) { ... }

create-item &quot;driver&quot; --age 20
</code></pre></div><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>You can now also define variables using <code>let</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>let name = &quot;Nushell&quot;
echo $name
</code></pre></div><p>These variables are created in the scope they&#39;re defined in.</p><p>If, for example, we had written this instead:</p><div class="language-text ext-text"><pre class="language-text"><code>do {
    let $name = &quot;Nu&quot;
    echo $name   # prints &quot;Nu&quot;
}
echo $name       # this will fail
</code></pre></div><p>Once we leave the block above, the <code>name</code> variable is no longer visible.</p><p>These variables are <strong>immutable</strong> and need to be initialized as they are defined.</p><p>Along with variables, we also support &quot;shadowing&quot;, so that you can create a variable inside of a scope, and have it &quot;shadow&quot; the variable of the same name outside of the scope:</p><div class="language-text ext-text"><pre class="language-text"><code>let size = 10
do {
    let size = 5
    echo $size     # prints 5
}
echo $size         # prints 10
</code></pre></div><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment variables</h2><p>You can also use <code>let-env</code> to create environment variables. Just like variables, they are created in the scope they&#39;re defined.</p><div class="language-text ext-text"><pre class="language-text"><code>let-env TRACE = on
echo $nu.env.TRACE   # prints &#39;on&#39;
</code></pre></div><h2 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases" aria-hidden="true">#</a> Aliases</h2><p>With 0.25, we&#39;ve also changed how aliases work to be more like a text expansion, in the spirit of how aliases work in shells like Bash.</p><div class="language-text ext-text"><pre class="language-text"><code>alias ll = ls -l
ll -a
</code></pre></div><p>This lets you alias a larger command to a smaller name, and then also pass additional arguments and flags to it.</p><h2 id="source-ing" tabindex="-1"><a class="header-anchor" href="#source-ing" aria-hidden="true">#</a> Source-ing</h2><p>You can now also <code>source</code> a script, so that the definitions and code of that script runs in the current scope and context.</p><p>Let&#39;s say we had a file called definitions.nu:</p><div class="language-text ext-text"><pre class="language-text"><code># definitions.nu
def add [x, y] {
    = x + y
}
</code></pre></div><p>We can later use the definitions in this file using <code>source</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>source definitions.nu

add 3 7
</code></pre></div><p>Like variables and definitions, the definitions we <code>source</code> are put into the current scope.</p><div class="language-text ext-text"><pre class="language-text"><code>do {
    source definitions.nu
    echo $(add 3 7)      # prints 10
}
echo $(add 1 11)         # errors, \`add\` isn&#39;t in scope here
</code></pre></div><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h2><ul><li>Please note that the <code>alias</code> command no longer works the same way it did pre-0.25</li></ul><p>Pre-0.25, aliases worked similarly to how <code>def</code> works now. We used multiple arguments, and each was optional:</p><div class="language-text ext-text"><pre class="language-text"><code>alias mycmd [a b c d] { myverylongcommand $a $b $c $d }
</code></pre></div><p>With 0.25, we no longer pass parameters to alias this way. Instead, think of the aliased name being replaced by the right hand side. To update the previous alias to 0.25, we can write:</p><div class="language-text ext-text"><pre class="language-text"><code>alias mycmd = myverylongcommand
</code></pre></div><p>Calling <code>mycmd 1 2</code> now expands to <code>myverylongcommand 1 2</code> and then runs the expanded command.</p><h2 id="improvements" tabindex="-1"><a class="header-anchor" href="#improvements" aria-hidden="true">#</a> Improvements</h2>`,48),L=e("li",null,[a("the "),e("code",null,"which"),a(" command now shows if the name points to an alias or custom command (LhKipp)")],-1),C=a("you can configure the "),V={href:"https://github.com/nushell/nushell/pull/2829",target:"_blank",rel:"noopener noreferrer"},z=a("style that primities are shown"),B=a(" (fdncred)"),Y=a("optionally you can "),P={href:"https://github.com/nushell/nushell/pull/2794",target:"_blank",rel:"noopener noreferrer"},R=a("highlight trailing spaces"),J=a(" (fdncred)"),K=e("li",null,[a("we support comments now, using "),e("code",null,"#"),a(" (jonathandturner)")],-1),O=e("li",null,[a("better information for debugging in "),e("code",null,"version"),a(" (gillespiecd)")],-1),S=e("li",null,"Thanks to all those who landed general improvements too! (baoyachi, scrabsha, stormasm, max-sixty, ArturKovacs, JosephTLyons)",-1),j=e("h1",{id:"looking-forward",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#looking-forward","aria-hidden":"true"},"#"),a(" Looking forward")],-1),H=e("p",null,"This update opens a lot of doors to what's possible with Nushell. There are a few areas we'd like to explore with it: better autocompletions, describing external commands, and more. We'd also really like to hear your feedback on the release so we can continue to improve the overall experience of using Nu.",-1);function D(F,G){const t=s("ExternalLinkIcon");return i(),l("div",null,[h,u,p,r(" more "),g,e("p",null,[m,e("a",f,[x,o(t)]),_,e("a",b,[w,o(t)]),v,y,k]),N,q,T,e("p",null,[$,e("a",E,[I,o(t)]),W]),A,e("ul",null,[L,e("li",null,[C,e("a",V,[z,o(t)]),B]),e("li",null,[Y,e("a",P,[R,o(t)]),J]),K,O,S]),j,H])}const Q=n(c,[["render",D],["__file","2021-01-05-nushell_0_25.html.vue"]]);export{Q as default};
