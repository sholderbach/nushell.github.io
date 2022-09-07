import{_ as e,o as t,c as p,a,t as s,d as o,e as c}from"./app.8034769a.js";const l={},r={id:"frontmatter-title",tabindex:"-1"},u=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=o(),d={style:{"white-space":"pre-wrap"}},m=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; rename ...rest --column</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the new names for the columns</li><li><code>--column {list&lt;string&gt;}</code>: column name to be changed</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Rename a column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">rename</span> my_column
</code></pre></div><p>Rename many columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b, c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">rename</span> eggs ham bacon
</code></pre></div><p>Rename a specific column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a, b, c<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">rename</span> <span class="token parameter variable">-c</span> <span class="token punctuation">[</span>a ham<span class="token punctuation">]</span>
</code></pre></div>`,11);function h(n,k){return t(),p("div",null,[a("h1",r,[u,i,a("code",null,s(n.$frontmatter.title),1)]),a("div",d,s(n.$frontmatter.usage),1),m])}const b=e(l,[["render",h],["__file","rename.html.vue"]]);export{b as default};
