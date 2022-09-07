import{_ as e,o as n,c as o,a,t,d as c,e as r}from"./app.8034769a.js";const p={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=c(),h={style:{"white-space":"pre-wrap"}},u=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bytes starts-with (pattern) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>pattern</code>: the pattern to match</li><li><code>...rest</code>: optionally matches prefix of text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if binary starts with <code>0x[1F FF AA]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes starts-with 0x<span class="token punctuation">[</span>1F FF AA<span class="token punctuation">]</span>
</code></pre></div><p>Checks if binary starts with <code>0x[1F]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes starts-with 0x<span class="token punctuation">[</span>1F<span class="token punctuation">]</span>
</code></pre></div><p>Checks if binary starts with <code>0x[1F]</code></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 0x<span class="token punctuation">[</span>1F FF AA AA<span class="token punctuation">]</span> <span class="token operator">|</span> bytes starts-with 0x<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span>
</code></pre></div>`,11);function k(s,x){return n(),o("div",null,[a("h1",i,[l,d,a("code",null,t(s.$frontmatter.title),1)]),a("div",h,t(s.$frontmatter.usage),1),u])}const b=e(p,[["render",k],["__file","bytes_starts-with.html.vue"]]);export{b as default};
