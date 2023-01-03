import{_ as s,z as o,A as r,X as e,C as n,D as t,a6 as c}from"./framework.3d018c9f.js";const p={},i={id:"frontmatter-title-for-env",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-env","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export-env (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run to set the environment</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set an environment variable</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> export-env <span class="token punctuation">{</span> let-env SPAM <span class="token operator">=</span> <span class="token string">&#39;eggs&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Set an environment variable and examine its value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> export-env <span class="token punctuation">{</span> let-env SPAM <span class="token operator">=</span> <span class="token string">&#39;eggs&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token variable">$env</span>.SPAM
</code></pre></div>`,9);function u(a,v){return o(),r("div",null,[e("h1",i,[l,n(),e("code",null,t(a.$frontmatter.title),1),n(" for env")]),e("div",d,t(a.$frontmatter.env),1),h])}const g=s(p,[["render",u],["__file","export-env.html.vue"]]);export{g as default};
