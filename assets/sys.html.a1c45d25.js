import{_ as t,o as n,c as o,a as e,t as s,d as r,e as c}from"./app.8034769a.js";const p={},i={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=r(),l={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sys </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Show info about the system</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
</code></pre></div><p>Show the os system name with get</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>sys<span class="token punctuation">)</span>.host <span class="token operator">|</span> get name
</code></pre></div><p>Show the os system name</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">(</span>sys<span class="token punctuation">)</span>.host.name
</code></pre></div>`,9);function g(a,m){return n(),o("div",null,[e("h1",i,[d,h,e("code",null,s(a.$frontmatter.title),1)]),e("div",l,s(a.$frontmatter.usage),1),u])}const f=t(p,[["render",g],["__file","sys.html.vue"]]);export{f as default};
