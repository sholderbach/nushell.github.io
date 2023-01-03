import{_ as o,z as p,A as r,X as a,C as e,D as n,a6 as t}from"./framework.3d018c9f.js";const c={},l={id:"frontmatter-title-for-dataframe",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; get </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns the selected column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> get a
</code></pre></div>`,5),u={id:"frontmatter-title-for-filters",tabindex:"-1"},g=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),k={class:"command-title"},m=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; get (cell_path) ...rest --ignore-errors --sensitive</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>cell_path</code>: the cell path to the data</li><li><code>...rest</code>: additional cell paths</li><li><code>--ignore-errors</code>: when there are empty cells, instead of erroring out, replace them with nothing</li><li><code>--sensitive</code>: get path in a case sensitive manner</li></ul><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Get an item from a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> get <span class="token number">1</span>
</code></pre></div><p>Get a column from a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>A: A0<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> get A
</code></pre></div><p>Get a cell from a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>A: A0<span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> get <span class="token number">0</span>.A
</code></pre></div><p>Extract the name of files as a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name
</code></pre></div><p>Extract the name of the 3rd entry of a file list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name.2
</code></pre></div><p>Extract the name of the 3rd entry of a file list (alternative)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get <span class="token number">2</span>.name
</code></pre></div><p>Extract the cpu list from the sys information record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get cpu
</code></pre></div><p>Getting Path/PATH in a case insensitive way</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span> <span class="token operator">|</span> get paTH
</code></pre></div><p>Getting Path in a case sensitive way, won&#39;t work for &#39;PATH&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span> <span class="token operator">|</span> get <span class="token parameter variable">-s</span> Path
</code></pre></div>`,23);function f(s,b){return p(),r("div",null,[a("h1",l,[i,e(),a("code",null,n(s.$frontmatter.title),1),e(" for dataframe")]),a("div",d,n(s.$frontmatter.dataframe),1),h,a("h1",u,[g,e(),a("code",null,n(s.$frontmatter.title),1),e(" for filters")]),a("div",k,n(s.$frontmatter.filters),1),m])}const x=o(c,[["render",f],["__file","get.html.vue"]]);export{x as default};
