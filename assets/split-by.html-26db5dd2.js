import{_ as e,p,q as o,Q as a,t as n,v as t,a1 as l}from"./framework-344bb0e4.js";const r={},c={id:"frontmatter-title-for-default",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),u={class:"command-title"},d=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; split-by (splitter)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>splitter</code>: the splitter value to use</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>split items by column named &quot;lang&quot;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>
                    <span class="token string">&#39;2019&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                      <span class="token punctuation">{</span> name: <span class="token string">&#39;andres&#39;</span>, lang: <span class="token string">&#39;rb&#39;</span>, year: <span class="token string">&#39;2019&#39;</span> <span class="token punctuation">}</span>,
                      <span class="token punctuation">{</span> name: <span class="token string">&#39;jt&#39;</span>, lang: <span class="token string">&#39;rs&#39;</span>, year: <span class="token string">&#39;2019&#39;</span> <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>,
                    <span class="token string">&#39;2021&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                      <span class="token punctuation">{</span> name: <span class="token string">&#39;storm&#39;</span>, lang: <span class="token string">&#39;rs&#39;</span>, <span class="token string">&#39;year&#39;</span><span class="token builtin class-name">:</span> <span class="token string">&#39;2021&#39;</span> <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span> <span class="token operator">|</span> split-by lang

</code></pre></div>`,7);function h(s,k){return p(),o("div",null,[a("h1",c,[i,n(),a("code",null,t(s.$frontmatter.title),1),n(" for default")]),a("div",u,t(s.$frontmatter.default),1),d])}const g=e(r,[["render",h],["__file","split-by.html.vue"]]);export{g as default};
