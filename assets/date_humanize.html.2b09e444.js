import{_ as s,o as n,c as o,a as e,t,d as r,e as i}from"./app.8034769a.js";const d={},c={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),l=r(),p={style:{"white-space":"pre-wrap"}},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; date humanize </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Print a &#39;humanized&#39; format for the date, relative to now.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> humanize
</code></pre></div><p>Print a &#39;humanized&#39; format for the date, relative to now.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;2021-10-22 20:00:12 +01:00&quot;</span> <span class="token operator">|</span> <span class="token function">date</span> humanize
</code></pre></div>`,7);function m(a,_){return n(),o("div",null,[e("h1",c,[h,l,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),u])}const g=s(d,[["render",m],["__file","date_humanize.html.vue"]]);export{g as default};
