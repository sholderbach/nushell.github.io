import{_ as t,o as n,c as o,a,t as s,d as r,e as p}from"./app.8034769a.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),h={style:{"white-space":"pre-wrap"}},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; to text </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs data as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">|</span> to text
</code></pre></div><p>Outputs external data as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> <span class="token builtin class-name">help</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">find</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;^ &#39;</span> <span class="token operator">|</span>  to text
</code></pre></div><p>Outputs records as simple text</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span>  to text
</code></pre></div>`,9);function g(e,_){return n(),o("div",null,[a("h1",l,[i,d,a("code",null,s(e.$frontmatter.title),1)]),a("div",h,s(e.$frontmatter.usage),1),u])}const m=t(c,[["render",g],["__file","to_text.html.vue"]]);export{m as default};
