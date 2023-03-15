import{_ as t,p,q as o,Q as a,t as n,v as e,a1 as c}from"./framework-344bb0e4.js";const r={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),u={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; any (predicate)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>predicate</code>: a closure that must evaluate to a boolean</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Check if any row&#39;s status is the string &#39;DOWN&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>status<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>UP<span class="token punctuation">]</span> <span class="token punctuation">[</span>DOWN<span class="token punctuation">]</span> <span class="token punctuation">[</span>UP<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> any <span class="token punctuation">{</span><span class="token operator">|</span>el<span class="token operator">|</span> <span class="token variable">$el</span>.status <span class="token operator">==</span> DOWN <span class="token punctuation">}</span>
</code></pre></div><p>Check that any item is a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> any <span class="token punctuation">{</span> <span class="token punctuation">(</span><span class="token variable">$in</span> <span class="token operator">|</span> describe<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;string&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Check if any value is equal to twice its own index</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">9</span> <span class="token number">8</span> <span class="token number">7</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> enumerate <span class="token operator">|</span> any <span class="token punctuation">{</span><span class="token operator">|</span>i<span class="token operator">|</span> <span class="token variable">$i</span>.item <span class="token operator">==</span> <span class="token variable">$i</span>.index * <span class="token number">2</span> <span class="token punctuation">}</span>
</code></pre></div><p>Check if any of the values are odd, using a stored closure</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> cond <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">|</span>e<span class="token operator">|</span> <span class="token variable">$e</span> mod <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">4</span> <span class="token number">1</span> <span class="token number">6</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> any <span class="token variable">$cond</span>
</code></pre></div>`,13);function d(s,h){return p(),o("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for filters")]),a("div",u,e(s.$frontmatter.filters),1),k])}const b=t(r,[["render",d],["__file","any.html.vue"]]);export{b as default};
