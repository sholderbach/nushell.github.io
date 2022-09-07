import{_ as s,o,c as r,a as e,t,d as n,e as l}from"./app.8034769a.js";const c={},d={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=n(),h={style:{"white-space":"pre-wrap"}},m=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from toml </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts toml formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a = 1&#39;</span> <span class="token operator">|</span> from toml
</code></pre></div><p>Converts toml formatted string to table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a = 1
b = [1, 2]&#39;</span> <span class="token operator">|</span> from toml
</code></pre></div>`,7);function _(a,f){return o(),r("div",null,[e("h1",d,[i,p,e("code",null,t(a.$frontmatter.title),1)]),e("div",h,t(a.$frontmatter.usage),1),m])}const u=s(c,[["render",_],["__file","from_toml.html.vue"]]);export{u as default};
