import{_ as r,r as a,o as l,c as d,a as e,b as n,w as o,d as t,e as i}from"./app.8034769a.js";const p={},h=e("h1",{id:"scripts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scripts","aria-hidden":"true"},"#"),t(" Scripts")],-1),u=e("p",null,[t("In Nushell, you can write and run scripts in the Nushell language. To run a script, you can pass it as an argument to the "),e("code",null,"nu"),t(" commandline application:")],-1),_=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> nu myscript.nu
`)])],-1),g=t("This will run the script to completion in a new instance of Nu. You can also run scripts inside the "),m=e("em",null,"current",-1),f=t(" instance of Nu using "),x=e("code",null,"source",-1),b=t(":"),w=i(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; source myscript.nu
</code></pre></div><p>Let&#39;s look at an example script file:</p><div class="language-text ext-text"><pre class="language-text"><code># myscript.nu
def greet [name] {
  echo &quot;hello&quot; $name
}

greet &quot;world&quot;
</code></pre></div><p>A script file defines the definitions for custom commands as well as the main script itself, which will run after the custom commands are defined.</p><p>In the above, first <code>greet</code> is defined by the Nushell interpreter. This allows us to later call this definition. We could have written the above as:</p><div class="language-text ext-text"><pre class="language-text"><code>greet &quot;world&quot;

def greet [name] {
  echo &quot;hello&quot; $name
}
</code></pre></div><p>There is no requirement that definitions have to come before the parts of the script that call the definitions, allowing you to put them where you feel comfortable.</p><h2 id="how-scripts-are-processed" tabindex="-1"><a class="header-anchor" href="#how-scripts-are-processed" aria-hidden="true">#</a> How scripts are processed</h2><p>In a script, definitions run first. This allows us to call the definitions using the calls in the script.</p><p>After the definitions run, we start at the top of the script file and run each group of commands one after another.</p><h2 id="script-lines" tabindex="-1"><a class="header-anchor" href="#script-lines" aria-hidden="true">#</a> Script lines</h2><p>To better understand how Nushell sees lines of code, let&#39;s take a look at an example script:</p><div class="language-text ext-text"><pre class="language-text"><code>a
b; c | d
</code></pre></div>`,13),v=t("When this script is run, Nushell will first run the "),k=e("code",null,"a",-1),y=t(" command to completion and view its results. Next, Nushell will run "),N=e("code",null,"b; c | d",-1),q=t(" following the rules in the "),S=t('"Groups" section'),T=t("."),L=i(`<h2 id="parameterizing-scripts" tabindex="-1"><a class="header-anchor" href="#parameterizing-scripts" aria-hidden="true">#</a> Parameterizing Scripts</h2><p>Script files can optionally contain a special &quot;main&quot; command. <code>main</code> will be run after any other Nu code, and is primarily used to add parameters to scripts. You can pass arguments to scripts after the script name (<code>nu &lt;script name&gt; &lt;script args&gt;</code>).</p><p>For example:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># myscript.nu</span>

def main <span class="token punctuation">[</span>x: int<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token variable">$x</span> + <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; nu myscript.nu 100
110
</code></pre></div><h2 id="shebangs" tabindex="-1"><a class="header-anchor" href="#shebangs" aria-hidden="true">#</a> Shebangs (<code>#!</code>)</h2>`,6),I=t("On Linux and macOS you can optionally use a "),V={href:"https://en.wikipedia.org/wiki/Shebang_(Unix)",target:"_blank",rel:"noopener noreferrer"},W=t("shebang"),z=t(" to tell the OS that a file should be interpreted by Nu. For example, with the following in a file named "),B=e("code",null,"myscript",-1),E=t(":"),H=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`#!/usr/bin/env nu
echo "Hello World!"
`)])],-1),O=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ./myscript
Hello World!
`)])],-1);function $(A,C){const s=a("RouterLink"),c=a("ExternalLinkIcon");return l(),d("div",null,[h,u,_,e("p",null,[g,m,f,n(s,{to:"/book/commands/source.html"},{default:o(()=>[x]),_:1}),b]),w,e("p",null,[v,k,y,N,q,n(s,{to:"/book/types_of_data.html#groups"},{default:o(()=>[S]),_:1}),T]),L,e("p",null,[I,e("a",V,[W,n(c)]),z,B,E]),H,O])}const R=r(p,[["render",$],["__file","scripts.html.vue"]]);export{R as default};
