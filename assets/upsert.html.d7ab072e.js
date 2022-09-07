import{_ as e,o as t,c as p,a as s,t as n,d as o,e as c}from"./app.8034769a.js";const l={},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=o(),k={style:{"white-space":"pre-wrap"}},d=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; upsert (field) (replacement value)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>field</code>: the name of the column to update or insert</li><li><code>replacement value</code>: the new value to give the cell(s)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Update a column value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> upsert name <span class="token string">&#39;Nushell&#39;</span>
</code></pre></div><p>Insert a new column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;nu&#39;</span>, <span class="token string">&#39;stars&#39;</span><span class="token builtin class-name">:</span> <span class="token number">5</span><span class="token punctuation">}</span> <span class="token operator">|</span> upsert language <span class="token string">&#39;Rust&#39;</span>
</code></pre></div><p>Use in block form for more involved updating logic</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>count fruit<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> upsert count <span class="token punctuation">{</span><span class="token operator">|</span>f<span class="token operator">|</span> <span class="token variable">$f</span>.count + <span class="token number">1</span><span class="token punctuation">}</span>
</code></pre></div><p>Use in block form for more involved updating logic</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>project, authors<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;nu&#39;</span>, <span class="token punctuation">[</span><span class="token string">&#39;Andr\xE9s&#39;</span>, <span class="token string">&#39;JT&#39;</span>, <span class="token string">&#39;Yehuda&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> upsert authors <span class="token punctuation">{</span><span class="token operator">|</span>a<span class="token operator">|</span> <span class="token variable">$a</span>.authors <span class="token operator">|</span> str collect <span class="token string">&#39;,&#39;</span><span class="token punctuation">}</span>
</code></pre></div>`,13);function h(a,g){return t(),p("div",null,[s("h1",r,[i,u,s("code",null,n(a.$frontmatter.title),1)]),s("div",k,n(a.$frontmatter.usage),1),d])}const b=e(l,[["render",h],["__file","upsert.html.vue"]]);export{b as default};
