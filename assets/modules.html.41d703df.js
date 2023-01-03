import{_ as p,z as l,A as c,X as s,C as n,T as e,$ as t,a6 as o,Q as r}from"./framework.3d018c9f.js";const i={},u=o(`<h1 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h1><p>与其他许多编程语言类似，Nushell 也有模块，可以让你将自定义的命令导入到当前作用域中。 然而，由于 Nushell 也是一个 Shell，模块还允许你导入环境变量，可以用来方便地激活/停用各种环境配置。</p><p><em>注意! 目前对模块的实现是相当基本的，并将在未来进一步扩展。例如，目前还不能从一个模块中导入另一个模块。</em></p><h2 id="基础知识" tabindex="-1"><a class="header-anchor" href="#基础知识" aria-hidden="true">#</a> 基础知识</h2><p>一个简单的模块可以像这样定义：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module greetings <span class="token punctuation">{</span>
     <span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
         $<span class="token string">&quot;hello (<span class="token variable">$name</span>)!&quot;</span>
     <span class="token punctuation">}</span>

     <span class="token builtin class-name">export</span> def hi <span class="token punctuation">[</span>where: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
         $<span class="token string">&quot;hi (<span class="token variable">$where</span>)!&quot;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>或者在一个与你要创建的模块名相同的文件中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># greetings.nu</span>

<span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hello (<span class="token variable">$name</span>)!&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> def hi <span class="token punctuation">[</span>where: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hi (<span class="token variable">$where</span>)!&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>我们在 <code>greetings</code> 模块中定义了 <code>hello</code> 和 <code>hi</code> 两个自定义命令。<code>export</code>关键字使得以后可以从模块中导入该命令。</p>`,9),d=s("code",null,"def",-1),h=s("code",null,"export",-1),g=s("code",null,"def-env",-1),k=s("code",null,"def-env",-1),m=s("h2",{id:"使用模块",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#使用模块","aria-hidden":"true"},"#"),n(" 使用模块")],-1),b=s("code",null,"use",-1),v=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings

<span class="token operator">&gt;</span> greetings hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> greetings hi <span class="token string">&quot;there&quot;</span>
hi there<span class="token operator">!</span>
</code></pre></div><p><code>hello</code>和<code>hi</code>命令现在可以通过<code>greetings</code>前缀被调用。</p><h2 id="导入符号" tabindex="-1"><a class="header-anchor" href="#导入符号" aria-hidden="true">#</a> 导入符号</h2>`,3),_=s("code",null,"use",-1),f=s("strong",null,"导入模式",-1),q=o(`<p><code>use greetings</code></p><p>导入所有以模块名称为前缀的符号（我们在前面的例子中看到了这个）。</p><p><code>use greetings hello</code></p><p><code>hello</code>符号将被直接导入，没有任何前缀。</p><p><code>use greetings [ hello, hi ] </code></p><p>直接导入多个符号，没有任何前缀。</p><p><code>use greetings *</code></p><p>你也可以使用模块名称和<code>*</code> glob 来直接导入所有的名称，且不需要任何前缀。</p><h2 id="模块文件" tabindex="-1"><a class="header-anchor" href="#模块文件" aria-hidden="true">#</a> 模块文件</h2><p>Nushell 让你隐含地把一个源文件当作一个模块。 让我们先把模块定义的主体保存到一个文件中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># greetings.nu</span>

<span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hello (<span class="token variable">$name</span>)!&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> def hi <span class="token punctuation">[</span>where: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hi (<span class="token variable">$where</span>)!&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),x=s("code",null,"use",-1),$=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu

<span class="token operator">&gt;</span> greetings hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> greetings hi <span class="token string">&quot;there&quot;</span>
hi there<span class="token operator">!</span>
</code></pre></div><p>Nushell 会自动从文件名（&quot;greetings&quot;，没有&quot;.nu&quot;扩展名）推断出模块的名称。所以你可以通过文件名而不是模块名配合使用上述任何导入模式来完成导入。</p><h2 id="本地自定义命令" tabindex="-1"><a class="header-anchor" href="#本地自定义命令" aria-hidden="true">#</a> 本地自定义命令</h2><p>任何在模块中定义的自定义命令，如果没有<code>export</code>关键字，将只在该模块的作用域内工作：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># greetings.nu</span>

<span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    greetings-helper <span class="token string">&quot;hello&quot;</span> <span class="token string">&quot;world&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> def hi <span class="token punctuation">[</span>where: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    greetings-helper <span class="token string">&quot;hi&quot;</span> <span class="token string">&quot;there&quot;</span>
<span class="token punctuation">}</span>

def greetings-helper <span class="token punctuation">[</span>greeting: string, subject: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;(<span class="token variable">$greeting</span>) (<span class="token variable">$subject</span>)!&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>然后，在 Nushell 里我们可以从 &quot;greetings.nu&quot; 中导入所有定义：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu *

<span class="token operator">&gt;</span> hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> hi <span class="token string">&quot;there&quot;</span>
hi there<span class="token operator">!</span>

<span class="token operator">&gt;</span> greetings-helper <span class="token string">&quot;foo&quot;</span> <span class="token string">&quot;bar&quot;</span>  <span class="token comment"># fails because &#39;greetings-helper&#39; is not exported</span>
</code></pre></div><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2>`,8),w=s("code",null,"let-env",-1),N=s("code",null,"load-env",-1),O=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># greetings.nu</span>

<span class="token builtin class-name">export</span> <span class="token function">env</span> MYNAME <span class="token punctuation">{</span> <span class="token string">&quot;Arthur, King of the Britons&quot;</span> <span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hello (<span class="token variable">$name</span>)&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>use</code> 的工作方式与自定义命令相同：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu

<span class="token operator">&gt;</span> <span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token string">&quot;greetings MYNAME&quot;</span>
Arthur, King of the Britons

<span class="token operator">&gt;</span> greetings hello <span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token string">&quot;greetings MYNAME&quot;</span>
hello Arthur, King of the Britons<span class="token operator">!</span>
</code></pre></div>`,3),M=s("code",null,"MYNAME",-1),L=s("code",null,"{ ...}",-1),A=s("code",null,"use",-1),E=s("code",null,"random",-1),R=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module roll <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> <span class="token function">env</span> ROLL <span class="token punctuation">{</span> random dice <span class="token operator">|</span> into string <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token operator">&gt;</span> use roll ROLL

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.ROLL
<span class="token number">4</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.ROLL
<span class="token number">4</span>

<span class="token operator">&gt;</span> use roll ROLL

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.ROLL
<span class="token number">6</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.ROLL
<span class="token number">6</span>
</code></pre></div><h2 id="导出符号" tabindex="-1"><a class="header-anchor" href="#导出符号" aria-hidden="true">#</a> 导出符号</h2><p>如上所述，你可以从模块中导出定义和环境变量。这可以让你更容易地将相关的定义分组，并导出你想公开的定义。</p><p>你还可以导出别名和外部声明(extern)，并在需要时才使用这些功能。导出外部声明也让你有能力隐藏模块中的自定义自动补全命令，这样它们就不必成为全局命名空间的一部分。</p><p>下面是所有你可以导出的列表：</p><ul><li><code>export def</code> - 导出一个自定义命令</li><li><code>export def-env</code> - 导出一个自定义环境命令</li><li><code>export env</code> - 导出一个环境变量</li><li><code>export alias</code> - 导出一个别名</li><li><code>export extern</code> - 导出一个已知外部命令的定义</li></ul><h2 id="隐藏" tabindex="-1"><a class="header-anchor" href="#隐藏" aria-hidden="true">#</a> 隐藏</h2>`,7),Y=s("code",null,"hide",-1),B=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span>

<span class="token operator">&gt;</span> foo
foo

<span class="token operator">&gt;</span> hide foo

<span class="token operator">&gt;</span> foo  <span class="token comment"># error! command not found!</span>
</code></pre></div>`,1),F=s("code",null,"hide",-1),K=s("code",null,"use",-1),C=o(`<p><code>hide foo</code> 或者 <code>hide greetings</code></p><ul><li>如果该名称是一个自定义的命令或环境变量，则直接隐藏它。否则：</li><li>如果名字是一个模块的名称，则隐藏所有以模块名称为前缀的导出。</li></ul><p><code>hide greetings hello</code></p><ul><li>隐藏带前缀的命令或环境变量</li></ul><p><code>hide greetings [hello, hi]</code></p><ul><li>隐藏带前缀的若干个命令或环境变量</li></ul><p><code>hide greetings *</code></p><ul><li>隐藏模块的所有的导出，不含前缀</li></ul><p>让我们看几个例子。前面已经看到了直接隐藏一个自定义命令的例子，现在让我们试试环境变量：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env FOO <span class="token operator">=</span> <span class="token string">&quot;FOO&quot;</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.FOO
FOO

<span class="token operator">&gt;</span> hide FOO

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.FOO  <span class="token comment"># error! environment variable not found!</span>
</code></pre></div><p>第一种情况也适用于从一个模块导入的命令/环境变量（使用上面定义的 &quot;greetings.nu&quot; 文件）：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu *

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.MYNAME
Arthur, King of the Britons

<span class="token operator">&gt;</span> hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> hide MYNAME

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.MYNAME  <span class="token comment"># error! environment variable not found!</span>

<span class="token operator">&gt;</span> hide hello

<span class="token operator">&gt;</span> hello <span class="token string">&quot;world&quot;</span> <span class="token comment"># error! command not found!</span>
</code></pre></div><p>最后，当名称为模块名时（假设是之前的<code>greetings</code>模块）：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu

<span class="token operator">&gt;</span> <span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token string">&quot;greetings MYNAME&quot;</span>
Arthur, King of the Britons

<span class="token operator">&gt;</span> greetings hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> hide greetings

<span class="token operator">&gt;</span> <span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token string">&quot;greetings MYNAME&quot;</span>  <span class="token comment"># error! environment variable not found!</span>

<span class="token operator">&gt;</span> greetings hello <span class="token string">&quot;world&quot;</span> <span class="token comment"># error! command not found!</span>
</code></pre></div>`,14);function V(j,z){const a=r("RouterLink");return l(),c("div",null,[u,s("p",null,[n("与"),e(a,{to:"/book/commands/def.html"},{default:t(()=>[d]),_:1}),n("类似，也可以用"),h,n("关键字标记"),e(a,{to:"/book/commands/def-env.html"},{default:t(()=>[g]),_:1}),n("（你可以在"),e(a,{to:"/zh-CN/book/environment.html"},{default:t(()=>[n("环境")]),_:1}),n("章节中了解更多关于"),e(a,{to:"/book/commands/def-env.html"},{default:t(()=>[k]),_:1}),n("的信息）。")]),m,s("p",null,[n("模块本身并不做任何事情，要使用模块导出的定义，我们需要"),e(a,{to:"/book/commands/use.html"},{default:t(()=>[b]),_:1}),n("它：")]),v,s("p",null,[n("一般来说，"),e(a,{to:"/book/commands/use.html"},{default:t(()=>[_]),_:1}),n("关键词后面的任何内容都会形成一个"),f,n("，它控制着符号的导入方式。 导入模式可以是以下的一种：")]),q,s("p",null,[n("现在，你可以直接在文件上调用"),e(a,{to:"/book/commands/use.html"},{default:t(()=>[x]),_:1}),n("：")]),$,s("p",null,[n("到目前为止，我们只是用模块来导入自定义命令，用同样的方法导出环境变量也是可能的。 其语法与你可能习惯的"),e(a,{to:"/book/commands/let-env.html"},{default:t(()=>[w]),_:1}),n("或"),e(a,{to:"/book/commands/load-env.html"},{default:t(()=>[N]),_:1}),n("等命令略有不同：")]),O,s("p",null,[n("你可能注意到我们没有直接给"),M,n("赋值，相反，我们给了它一个代码块（"),L,n("），它在我们每次调用"),e(a,{to:"/book/commands/use.html"},{default:t(()=>[A]),_:1}),n("时都会被执行。例如，我们可以用"),e(a,{to:"/book/commands/random.html"},{default:t(()=>[E]),_:1}),n("命令来演示这一点：")]),R,s("p",null,[n('任何自定义命令、别名或环境变量, 无论是否从模块中导入, 都可以被 "隐藏", 以恢复之前的定义。 (注意，现在还不能从模块中导出别名，但它们仍然可以被隐藏。) 我们用'),e(a,{to:"/book/commands/hide.html"},{default:t(()=>[Y]),_:1}),n("命令来实现隐藏：")]),B,s("p",null,[e(a,{to:"/book/commands/hide.html"},{default:t(()=>[F]),_:1}),n("命令也接受导入模式，就像"),e(a,{to:"/book/commands/use.html"},{default:t(()=>[K]),_:1}),n("那样。不过，导入模式的解释略有不同。它可以是下面中的一种：")]),C])}const T=p(i,[["render",V],["__file","modules.html.vue"]]);export{T as default};
