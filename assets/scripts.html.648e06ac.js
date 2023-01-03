import{_ as p,z as d,A as r,X as s,C as a,T as e,$ as o,a6 as n,Q as c}from"./framework.3d018c9f.js";const i={},u=n(`<h1 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h1><p>在 Nushell 中，你可以用 Nushell 语言编写和运行脚本。要运行一个脚本，你可以把它作为一个参数传递给<code>nu</code>命令行程序：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu myscript.nu
</code></pre></div>`,3),h=s("code",null,"source",-1),g=s("strong",null,"当前",-1),k=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">source</span> myscript.nu
</code></pre></div><p>我们来看一个脚本文件的例子吧：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># myscript.nu</span>
def greet <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token variable">$name</span>
<span class="token punctuation">}</span>

greet <span class="token string">&quot;world&quot;</span>
</code></pre></div><p>脚本文件包含了自定义命令的定义以及主脚本本身，它将在自定义命令定义后运行。</p><p>在上面的例子中，首先<code>greet</code>是由 Nushell 解释器定义的，这使得我们之后可以调用这个定义，我们可以把上面的内容写成：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>greet <span class="token string">&quot;world&quot;</span>

def greet <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token variable">$name</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Nushell 并不要求定义必须放在脚本中调用该定义之前，你可以把定义放在你觉得舒服的地方。</p><h2 id="脚本是如何被处理的" tabindex="-1"><a class="header-anchor" href="#脚本是如何被处理的" aria-hidden="true">#</a> 脚本是如何被处理的</h2><p>在一个脚本中定义总是先运行，这样我们就可以在脚本中调用定义。</p><p>在定义运行之后, 我们从脚本文件的顶部开始, 一个接一个地运行每一组命令。</p><h2 id="脚本行" tabindex="-1"><a class="header-anchor" href="#脚本行" aria-hidden="true">#</a> 脚本行</h2><p>为了更好地理解 Nushell 是如何看待代码行的, 我们来看一个脚本的例子：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>a
b<span class="token punctuation">;</span> c <span class="token operator">|</span> d
</code></pre></div>`,13),_=s("code",null,"a",-1),b=s("code",null,"b; c | d",-1),m=n(`<h2 id="参数化脚本" tabindex="-1"><a class="header-anchor" href="#参数化脚本" aria-hidden="true">#</a> 参数化脚本</h2><p>脚本文件可以选择性地包含一个特殊的 &quot;main&quot; 命令。<code>main</code>将在任何其他 Nu 代码之后运行，主要用于向脚本添加参数。你可以在脚本名称后面传递参数（<code>nu &lt;script name&gt; &lt;script args&gt;</code>）。比如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># myscript.nu</span>

def main <span class="token punctuation">[</span>x: int<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token variable">$x</span> + <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; nu myscript.nu 100
110
</code></pre></div><h2 id="shebangs" tabindex="-1"><a class="header-anchor" href="#shebangs" aria-hidden="true">#</a> Shebangs (<code>#!</code>)</h2>`,5),x={href:"https://en.wikipedia.org/wiki/Shebang_(Unix)",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"Nu",-1),f=s("code",null,"myscript",-1),N=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env nu</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Hello World!&quot;</span>
</code></pre></div><p>此时你可以直接运行该脚本(注意：前面并没有加<code>nu</code>)：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ./myscript
Hello World<span class="token operator">!</span>
</code></pre></div>`,3);function q(y,w){const t=c("RouterLink"),l=c("ExternalLinkIcon");return d(),r("div",null,[u,s("p",null,[a("这将在一个新的 Nu 实例中运行脚本直至完成。你也可以使用"),e(t,{to:"/book/commands/source.html"},{default:o(()=>[h]),_:1}),a("在 Nu 的 "),g,a(" 实例中运行脚本：")]),k,s("p",null,[a("当这个脚本运行时，Nushell 将首先运行"),_,a("命令至完成并查看其结果。接下来，Nushell 将按照"),e(t,{to:"/zh-CN/book/types_of_data.html#%E7%BB%84"},{default:o(()=>[a('"组"部分')]),_:1}),a("中的规则运行"),b,a("。")]),m,s("p",null,[a("在 Linux 和 macOS 上，你可以选择使用 "),s("a",x,[a("Shebang"),e(l)]),a("来告诉操作系统一个文件应该被 "),v,a(" 解释。例如，在一个名为 "),f,a(" 的文件中包含以下内容：")]),N])}const L=p(i,[["render",q],["__file","scripts.html.vue"]]);export{L as default};
