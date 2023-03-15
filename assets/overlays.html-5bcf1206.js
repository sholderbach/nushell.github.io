import{_ as p,M as c,p as l,q as u,Q as a,t as n,N as o,U as e,a1 as s}from"./framework-344bb0e4.js";const r={},i=a("h1",{id:"覆层",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#覆层","aria-hidden":"true"},"#"),n(" 覆层")],-1),d=a("p",null,'覆层(Overlays)作为各种定义（自定义命令、别名、环境变量）的"层"，可以根据需要激活和停用。 它们类似于某些语言中的虚拟环境，如 Python。',-1),k=a("h2",{id:"基础",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#基础","aria-hidden":"true"},"#"),n(" 基础")],-1),g=a("code",null,"zero",-1),h=a("code",null,"overlay list",-1),m=s(`<p>要创建一个新的覆层，你首先需要一个模块：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span>
    <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;foo&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token builtin class-name">export</span> <span class="token builtin class-name">alias</span> bar <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span>

    <span class="token builtin class-name">export</span> <span class="token function">env</span> BAZ <span class="token punctuation">{</span>
        <span class="token string">&quot;baz&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>我们将在本章中使用这个模块。每当你看到 <code>overlay use spam</code>，就应该知道 <code>spam</code> 是指这个模块。</p>`,3),v=a("code",null,"overlay use",-1),_=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> overlay use spam

<span class="token operator">&gt;</span> foo
foo

<span class="token operator">&gt;</span> bar
bar

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.BAZ
baz

<span class="token operator">&gt;</span> overlay list
───┬──────
 <span class="token number">0</span> │ zero
 <span class="token number">1</span> │ spam
───┴──────
</code></pre></div><p>在下面的章节中，<code>&gt;</code> 的提示语前面会有最后一个活动覆层的名称。 <code>(spam)&gt; some-command</code> 表示当输入命令时，<code>spam</code> 覆层是最后活动的覆层。</p><h2 id="移除覆层" tabindex="-1"><a class="header-anchor" href="#移除覆层" aria-hidden="true">#</a> 移除覆层</h2>`,3),b=a("code",null,"overlay hide",-1),f=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay hide spam

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> foo
Error: Can&#39;t run executable<span class="token punctuation">..</span>.

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay list
───┬──────
 <span class="token number">0</span> │ zero
───┴──────
</code></pre></div><p>覆层也是有作用域的。 任何添加的覆层都会在作用域结束时被移除：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span> overlay use spam<span class="token punctuation">;</span> foo <span class="token punctuation">}</span>
foo

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay list
───┬──────
 <span class="token number">0</span> │ zero
───┴──────
</code></pre></div>`,3),y=a("code",null,"overlay hide",-1),x=s(`<h2 id="覆层是可记录的" tabindex="-1"><a class="header-anchor" href="#覆层是可记录的" aria-hidden="true">#</a> 覆层是可记录的</h2><p>任何新的定义（命令、别名、环境变量）都会被记录到最后一个活动的覆层：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay use spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> def eggs <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p>现在，<code>eggs</code> 命令属于 <code>spam</code> 覆层。 如果我们删除该覆层，我们就不能再调用它：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay hide spam

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> eggs
Error: Can&#39;t run executable<span class="token punctuation">..</span>.
</code></pre></div><p>但是，我们可以把它找回来!</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay use spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> eggs
eggs
</code></pre></div><p>覆层会记住你所添加的内容，即使你删除了它们，也会储存这些信息。 这可以让你在不同的上下文中反复切换。</p>`,8),z={class:"custom-container tip"},q=s(`<p class="custom-container-title">TIP</p><p>有时，在添加一个覆层后，你可能不希望自定义对象被添加到其中。 解决的办法是创建一个新的空的覆层，只用来记录自定义的变化：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay use spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> module scratchpad <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay use scratchpad

<span class="token punctuation">(</span>scratchpad<span class="token punctuation">)</span><span class="token operator">&gt;</span> def eggs <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p><code>eggs</code> 命令被添加到 <code>scratchpad</code> 中，同时保持 <code>spam</code> 不变。</p>`,4),N=a("em",null,"0.64 版本新增：",-1),w=a("code",null,"overlay new",-1),B=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay use spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay new scratchpad

<span class="token punctuation">(</span>scratchpad<span class="token punctuation">)</span><span class="token operator">&gt;</span> def eggs <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>
</code></pre></div>`,1),C=s(`<h2 id="保存定义" tabindex="-1"><a class="header-anchor" href="#保存定义" aria-hidden="true">#</a> 保存定义</h2><p>有时，你可能想删除一个覆层，但保留所有你添加的自定义定义，而不必在下一个活动覆层中重新定义它们：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay use spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> def eggs <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay hide --keep-custom spam

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> eggs
eggs
</code></pre></div><p><code>--keep-custom</code> 标志正是用来做这个的。</p><h2 id="覆层顺序" tabindex="-1"><a class="header-anchor" href="#覆层顺序" aria-hidden="true">#</a> 覆层顺序</h2><p>覆层被排成一个堆栈。 如果多个覆层包含相同的定义，比如 <code>foo</code>，最后一个活动的覆层将优先。 要把某个覆层放到堆栈的顶部，你可以再次调用 <code>overlay use</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo-in-zero&quot;</span> <span class="token punctuation">}</span>

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay use spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> foo
foo

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay use zero

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> foo
foo-in-zero

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay list
───┬──────
 <span class="token number">0</span> │ spam
 <span class="token number">1</span> │ zero
───┴──────
</code></pre></div><p>现在，<code>zero</code> 覆层具有优先权。</p>`,8);function V(E,A){const t=c("RouterLink");return l(),u("div",null,[i,d,a("p",null,[a("em",null,[n("注意：要了解覆层，请确保先查看 "),o(t,{to:"/zh-CN/book/modules.html"},{default:e(()=>[n("模块")]),_:1}),n("，因为覆层是建立在模块之上的。")])]),k,a("p",null,[n("首先，Nushell 有一个默认的覆层，叫做 "),g,n("。 你可以用 "),o(t,{to:"/commands/docs/overlay_list.html"},{default:e(()=>[h]),_:1}),n(" 命令检查哪些覆层是活动的。 你应该可以看到默认的覆层显示在那里。")]),m,a("p",null,[n("要创建覆层，请调用 "),o(t,{to:"/commands/docs/overlay_add.html"},{default:e(()=>[v]),_:1}),n("。")]),_,a("p",null,[n("如果你不再需要叠加定义，请调用 "),o(t,{to:"/commands/docs/overlay_remove.html"},{default:e(()=>[b]),_:1}),n("：")]),f,a("p",null,[n("此外，"),o(t,{to:"/commands/docs/overlay_remove.html"},{default:e(()=>[y]),_:1}),n(" 在没有参数的情况下，将删除最后一个活动的覆层。")]),x,a("div",z,[q,a("p",null,[N,n(" 为了让上述步骤不那么冗长，你可以使用 "),o(t,{to:"/commands/docs/overlay_new.html"},{default:e(()=>[w]),_:1}),n(" 命令：")]),B]),C])}const P=p(r,[["render",V],["__file","overlays.html.vue"]]);export{P as default};
