import{_ as e,o as t,c as p,a,t as n,d as o,e as r}from"./app.8034769a.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=o(),d={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; sort-by ...columns --reverse --insensitive --natural</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...columns</code>: the column(s) to sort by</li><li><code>--reverse</code>: Sort in reverse order</li><li><code>--insensitive</code>: Sort string-based columns case-insensitively</li><li><code>--natural</code>: Sort alphanumeric string-based columns naturally</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>sort the list by increasing value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by
</code></pre></div><p>sort the list by decreasing value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">2</span> <span class="token number">0</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-r</span>
</code></pre></div><p>sort a list of strings</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by
</code></pre></div><p>sort a list of strings in reverse</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>betty amy sarah<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-r</span>
</code></pre></div><p>sort a list of alphanumeric strings naturally</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>test1 test11 test2<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-n</span>
</code></pre></div><p>Sort strings (case-insensitive)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-i</span>
</code></pre></div><p>Sort strings (reversed case-insensitive)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>airplane Truck Car<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span>
</code></pre></div><p>Sort a table by its column (reversed order)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>fruit count<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>apple <span class="token number">9</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>pear <span class="token number">3</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>orange <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> sort-by fruit <span class="token parameter variable">-r</span>
</code></pre></div>`,21);function k(s,b){return t(),p("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),h])}const m=e(c,[["render",k],["__file","sort-by.html.vue"]]);export{m as default};
