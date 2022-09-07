import{_ as e,o as t,c as p,a as s,t as n,d as o,e as c}from"./app.8034769a.js";const l={},i={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=o(),k={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; take (indices)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>indices</code>: list of indices used to take data</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Takes selected rows from dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> take <span class="token variable">$indices</span>
</code></pre></div><p>Takes selected rows from series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> series <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">1</span> <span class="token number">5</span> <span class="token number">2</span> <span class="token number">4</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$series</span> <span class="token operator">|</span> take <span class="token variable">$indices</span>
</code></pre></div>`,9);function m(a,h){return t(),p("div",null,[s("h1",i,[r,u,s("code",null,n(a.$frontmatter.title),1)]),s("div",k,n(a.$frontmatter.usage),1),d])}const f=e(l,[["render",m],["__file","_take.html.vue"]]);export{f as default};
