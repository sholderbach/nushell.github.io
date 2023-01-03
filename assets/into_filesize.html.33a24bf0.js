import{_ as t,z as o,A as p,X as a,C as e,D as n,a6 as i}from"./framework.3d018c9f.js";const r={},c={id:"frontmatter-title-for-conversions",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into filesize ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: for a data structure input, convert data at the given cell paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert string to filesize in table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>bytes<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3.2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>2kb<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into filesize bytes
</code></pre></div><p>Convert string to filesize</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">|</span> into filesize
</code></pre></div><p>Convert decimal to filesize</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">8.3</span> <span class="token operator">|</span> into filesize
</code></pre></div><p>Convert int to filesize</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token operator">|</span> into filesize
</code></pre></div><p>Convert file size to filesize</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> 4KB <span class="token operator">|</span> into filesize
</code></pre></div>`,15);function h(s,g){return o(),p("div",null,[a("h1",c,[l,e(),a("code",null,n(s.$frontmatter.title),1),e(" for conversions")]),a("div",d,n(s.$frontmatter.conversions),1),u])}const k=t(r,[["render",h],["__file","into_filesize.html.vue"]]);export{k as default};
