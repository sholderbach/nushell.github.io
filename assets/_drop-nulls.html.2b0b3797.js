import{_ as t,o as e,c as p,a,t as n,d as o,e as c}from"./app.8034769a.js";const l={},r={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=o(),k={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; drop-nulls (subset)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>subset</code>: subset of columns to drop nulls</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>drop null values in dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.b / <span class="token variable">$df</span>.b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span> <span class="token operator">|</span> with-column <span class="token variable">$res</span> <span class="token parameter variable">--name</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$a</span> <span class="token operator">|</span> drop-nulls
</code></pre></div><p>drop null values in dataframe</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">(</span><span class="token variable">$s</span> / <span class="token variable">$s</span><span class="token punctuation">)</span> <span class="token operator">|</span> drop-nulls
</code></pre></div>`,9);function h(s,b){return e(),p("div",null,[a("h1",r,[u,i,a("code",null,n(s.$frontmatter.title),1)]),a("div",k,n(s.$frontmatter.usage),1),d])}const f=t(l,[["render",h],["__file","_drop-nulls.html.vue"]]);export{f as default};
