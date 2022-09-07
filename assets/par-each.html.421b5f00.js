import{_ as n,o as t,c as p,a,t as e,d as o,e as r}from"./app.8034769a.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),u={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; par-each (block) --numbered</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run</li><li><code>--numbered</code>: iterate with an index</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Multiplies elements in list</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> par-each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token number">2</span> * <span class="token variable">$it</span> <span class="token punctuation">}</span>
</code></pre></div><p>Iterate over each element, print the matching value and its index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> par-each <span class="token parameter variable">-n</span> <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token keyword">if</span> <span class="token variable">$it</span>.item <span class="token operator">==</span> <span class="token number">2</span> <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> $<span class="token string">&quot;found 2 at (<span class="token variable">$it</span>.index)!&quot;</span><span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre></div>`,9);function k(s,m){return t(),p("div",null,[a("h1",l,[i,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",u,e(s.$frontmatter.usage),1),h])}const _=n(c,[["render",k],["__file","par-each.html.vue"]]);export{_ as default};
