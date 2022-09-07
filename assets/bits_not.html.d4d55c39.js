import{_ as n,o as t,c as o,a,t as e,d as r,e as p}from"./app.8034769a.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=r(),d={style:{"white-space":"pre-wrap"}},b=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bits not --signed --number-bytes</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--signed</code>: always treat input number as a signed number</li><li><code>--number-bytes {string}</code>: the size of unsigned number in bytes, it can be 1, 2, 4, 8, auto</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply logical negation to a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits not
</code></pre></div><p>Apply logical negation to a list of numbers, treat input as 2 bytes number</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits not <span class="token parameter variable">-n</span> <span class="token number">2</span>
</code></pre></div><p>Apply logical negation to a list of numbers, treat input as signed number</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits not <span class="token parameter variable">-s</span>
</code></pre></div>`,11);function h(s,m){return t(),o("div",null,[a("h1",i,[l,u,a("code",null,e(s.$frontmatter.title),1)]),a("div",d,e(s.$frontmatter.usage),1),b])}const k=n(c,[["render",h],["__file","bits_not.html.vue"]]);export{k as default};
