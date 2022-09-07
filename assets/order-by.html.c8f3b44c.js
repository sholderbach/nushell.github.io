import{_ as n,o as r,c as t,a as e,t as s,d as o,e as c}from"./app.8034769a.js";const l={},d={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=o(),h={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; order-by ...select --ascending --nulls-first</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...select</code>: Select expression(s) on the table</li><li><code>--ascending</code>: Order by ascending values</li><li><code>--nulls-first</code>: Show nulls first in order</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>orders query by a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> order-by a
    <span class="token operator">|</span> describe
</code></pre></div><p>orders query by column a ascending and by column b</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> a
    <span class="token operator">|</span> order-by a <span class="token parameter variable">--ascending</span>
    <span class="token operator">|</span> order-by b
    <span class="token operator">|</span> describe
</code></pre></div>`,9);function b(a,f){return r(),t("div",null,[e("h1",d,[p,i,e("code",null,s(a.$frontmatter.title),1)]),e("div",h,s(a.$frontmatter.usage),1),u])}const _=n(l,[["render",b],["__file","order-by.html.vue"]]);export{_ as default};
