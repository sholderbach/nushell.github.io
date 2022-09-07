import{_ as s,o as r,c as o,a as e,t,d as n,e as i}from"./app.8034769a.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=n(),p={style:{"white-space":"pre-wrap"}},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; tutor (search) --find</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>search</code>: item to search for, or &#39;list&#39; to list available tutorials</li><li><code>--find {string}</code>: Search tutorial for a phrase</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Begin the tutorial</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> tutor begin
</code></pre></div><p>Search a tutorial by phrase</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> tutor <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">$in</span>&quot;</span>
</code></pre></div>`,9);function f(a,g){return r(),o("div",null,[e("h1",l,[d,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",p,t(a.$frontmatter.usage),1),u])}const m=s(c,[["render",f],["__file","tutor.html.vue"]]);export{m as default};
