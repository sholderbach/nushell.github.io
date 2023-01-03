import{_ as l,z as c,A as d,X as e,C as t,T as a,$ as s,a6 as i,Q as o}from"./framework.3d018c9f.js";const p={},u=e("h1",{id:"scripts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scripts","aria-hidden":"true"},"#"),t(" Scripts")],-1),h=e("p",null,[t("In Nushell, you can write and run scripts in the Nushell language. To run a script, you can pass it as an argument to the "),e("code",null,"nu"),t(" commandline application:")],-1),m=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> nu myscript.nu
`)])],-1),g=e("em",null,"current",-1),f=e("code",null,"source",-1),x=i(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; source myscript.nu
</code></pre></div><p>Let&#39;s look at an example script file:</p><div class="language-text" data-ext="text"><pre class="language-text"><code># myscript.nu
def greet [name] {
  [&quot;hello&quot; $name]
}

greet &quot;world&quot;
</code></pre></div><p>A script file defines the definitions for custom commands as well as the main script itself, which will run after the custom commands are defined.</p><p>In the above, first <code>greet</code> is defined by the Nushell interpreter. This allows us to later call this definition. We could have written the above as:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>greet &quot;world&quot;

def greet [name] {
  [&quot;hello&quot; $name]
}
</code></pre></div><p>There is no requirement that definitions have to come before the parts of the script that call the definitions, allowing you to put them where you feel comfortable.</p><h2 id="how-scripts-are-processed" tabindex="-1"><a class="header-anchor" href="#how-scripts-are-processed" aria-hidden="true">#</a> How scripts are processed</h2><p>In a script, definitions run first. This allows us to call the definitions using the calls in the script.</p><p>After the definitions run, we start at the top of the script file and run each group of commands one after another.</p><h2 id="script-lines" tabindex="-1"><a class="header-anchor" href="#script-lines" aria-hidden="true">#</a> Script lines</h2><p>To better understand how Nushell sees lines of code, let&#39;s take a look at an example script:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>a
b; c | d
</code></pre></div>`,13),_=e("code",null,"a",-1),b=e("code",null,"b; c | d",-1),w=i(`<h2 id="parameterizing-scripts" tabindex="-1"><a class="header-anchor" href="#parameterizing-scripts" aria-hidden="true">#</a> Parameterizing Scripts</h2><p>Script files can optionally contain a special &quot;main&quot; command. <code>main</code> will be run after any other Nu code, and is primarily used to add parameters to scripts. You can pass arguments to scripts after the script name (<code>nu &lt;script name&gt; &lt;script args&gt;</code>).</p><p>For example:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># myscript.nu</span>

def main <span class="token punctuation">[</span>x: int<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token variable">$x</span> + <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; nu myscript.nu 100
110
</code></pre></div><h2 id="shebangs" tabindex="-1"><a class="header-anchor" href="#shebangs" aria-hidden="true">#</a> Shebangs (<code>#!</code>)</h2>`,6),v={href:"https://en.wikipedia.org/wiki/Shebang_(Unix)",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"myscript",-1),y=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`#!/usr/bin/env nu
"Hello World!"
`)])],-1),N=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ./myscript
Hello World!
`)])],-1);function q(S,T){const n=o("RouterLink"),r=o("ExternalLinkIcon");return c(),d("div",null,[u,h,m,e("p",null,[t("This will run the script to completion in a new instance of Nu. You can also run scripts inside the "),g,t(" instance of Nu using "),a(n,{to:"/book/commands/source.html"},{default:s(()=>[f]),_:1}),t(":")]),x,e("p",null,[t("When this script is run, Nushell will first run the "),_,t(" command to completion and view its results. Next, Nushell will run "),b,t(" following the rules in the "),a(n,{to:"/book/pipelines.html#semicolons"},{default:s(()=>[t('"Semicolons" section')]),_:1}),t(".")]),w,e("p",null,[t("On Linux and macOS you can optionally use a "),e("a",v,[t("shebang"),a(r)]),t(" to tell the OS that a file should be interpreted by Nu. For example, with the following in a file named "),k,t(":")]),y,N])}const I=l(p,[["render",q],["__file","scripts.html.vue"]]);export{I as default};
