import{_ as t,z as e,A as p,X as s,C as a,T as o,$ as c,a6 as l,Q as r}from"./framework.3d018c9f.js";const i={},u=s("h1",{id:"创建你自己的错误",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建你自己的错误","aria-hidden":"true"},"#"),a(" 创建你自己的错误")],-1),d=l(`<ul><li>错误的标题</li><li>错误信息的标签，其中包括标签的文本和要标注下划线的范围</li></ul><p>你可以使用<code>error make</code>命令来创建你自己的错误信息。例如，假设你有自己的名为<code>my-command</code>的命令，你想给调用者一个错误信息，说明传入的一个参数有问题。</p><p>首先，你可以从参数的来源中获取标注范围：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> span <span class="token operator">=</span> <span class="token punctuation">(</span>metadata <span class="token variable">$x</span><span class="token punctuation">)</span>.span<span class="token punctuation">;</span>
</code></pre></div><p>接下来你可以通过 <code>error make</code> 命令来创建一个错误，该命令需要一个可以描述待创建错误的记录作为输入：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>error <span class="token function">make</span> <span class="token punctuation">{</span>msg: <span class="token string">&quot;this is fishy&quot;</span>, label: <span class="token punctuation">{</span>text: <span class="token string">&quot;fish right here&quot;</span>, start: <span class="token variable">$span</span>.start, end: <span class="token variable">$span</span>.end <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div><p>与你的自定义命令放在一起后，它可能看起来像这样：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def my-command <span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> span <span class="token operator">=</span> <span class="token punctuation">(</span>metadata <span class="token variable">$x</span><span class="token punctuation">)</span>.span<span class="token punctuation">;</span>
    error <span class="token function">make</span> <span class="token punctuation">{</span>
        msg: <span class="token string">&quot;this is fishy&quot;</span>,
        label: <span class="token punctuation">{</span>
            text: <span class="token string">&quot;fish right here&quot;</span>,
            start: <span class="token variable">$span</span>.start,
            end: <span class="token variable">$span</span>.end
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>现在当传入一个值调用时，我们会看到一个错误信息返回：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> my-command <span class="token number">100</span>

Error:
  × this is fishy
   ╭─<span class="token punctuation">[</span>entry <span class="token comment">#5:1:1]</span>
 <span class="token number">1</span> │ my-command <span class="token number">100</span>
   ·            ─┬─
   ·             ╰── fish right here
   ╰────
</code></pre></div>`,10);function k(h,m){const n=r("RouterLink");return e(),p("div",null,[u,s("p",null,[a("使用 "),o(n,{to:"/zh-CN/book/metadata.html"},{default:c(()=>[a("元数据")]),_:1}),a(" 信息，你可以创建自己的自定义错误，错误信息由多个部分构成：")]),d])}const b=t(i,[["render",k],["__file","creating_errors.html.vue"]]);export{b as default};
