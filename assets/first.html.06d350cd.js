import{_ as o,z as r,A as p,X as a,C as n,D as e,a6 as t}from"./framework.3d018c9f.js";const c={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; first </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return the first row of a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> first
</code></pre></div><p>Return the first two rows of a dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> first <span class="token number">2</span>
</code></pre></div>`,7),h={id:"frontmatter-title-for-expression",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),m={class:"command-title"},k=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; first </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Creates a first expression from a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> first
</code></pre></div>`,5),b={id:"frontmatter-title-for-filters",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),_={class:"command-title"},x=t(`<h2 id="signature-2" tabindex="-1"><a class="header-anchor" href="#signature-2" aria-hidden="true">#</a> Signature</h2><p><code>&gt; first (rows)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>rows</code>: starting from the front, the number of rows to return</li></ul><h2 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h2><p>Return the first item of a list/table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> first
</code></pre></div><p>Return the first 2 items of a list/table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> first <span class="token number">2</span>
</code></pre></div><p>Return the first 2 bytes of a binary value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>01 <span class="token number">23</span> <span class="token number">45</span><span class="token punctuation">]</span> <span class="token operator">|</span> first <span class="token number">2</span>
</code></pre></div>`,11);function v(s,w){return r(),p("div",null,[a("h1",i,[l,n(),a("code",null,e(s.$frontmatter.title),1),n(" for dataframe")]),a("div",d,e(s.$frontmatter.dataframe),1),u,a("h1",h,[f,n(),a("code",null,e(s.$frontmatter.title),1),n(" for expression")]),a("div",m,e(s.$frontmatter.expression),1),k,a("h1",b,[g,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",_,e(s.$frontmatter.filters),1),x])}const R=o(c,[["render",v],["__file","first.html.vue"]]);export{R as default};
