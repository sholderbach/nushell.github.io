import{_ as t,z as r,A as o,X as a,C as s,D as n,a6 as c}from"./framework.3d018c9f.js";const p={},l={id:"frontmatter-title-for-dataframe-or-lazyframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe-or-lazyframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; unique </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns unique values from a series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> unique
</code></pre></div><p>Creates a is unique expression from a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> unique
</code></pre></div>`,7);function m(e,h){return r(),o("div",null,[a("h1",l,[i,s(),a("code",null,n(e.$frontmatter.title),1),s(" for dataframe or lazyframe")]),a("div",d,n(e.$frontmatter.dataframe_or_lazyframe),1),u])}const _=t(p,[["render",m],["__file","unique.html.vue"]]);export{_ as default};
