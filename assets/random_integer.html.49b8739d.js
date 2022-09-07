import{_ as s,o as t,c as r,a as e,t as n,d as o,e as d}from"./app.8034769a.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=o(),h={style:{"white-space":"pre-wrap"}},g=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; random integer (range)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>range</code>: Range of values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Generate an unconstrained random integer</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer
</code></pre></div><p>Generate a random integer less than or equal to 500</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token punctuation">..</span><span class="token number">500</span>
</code></pre></div><p>Generate a random integer greater than or equal to 100000</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token number">100000</span><span class="token punctuation">..</span>
</code></pre></div><p>Generate a random integer between 1 and 10</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> random integer <span class="token number">1</span><span class="token punctuation">..</span><span class="token number">10</span>
</code></pre></div>`,13);function u(a,m){return t(),r("div",null,[e("h1",i,[p,l,e("code",null,n(a.$frontmatter.title),1)]),e("div",h,n(a.$frontmatter.usage),1),g])}const b=s(c,[["render",u],["__file","random_integer.html.vue"]]);export{b as default};
