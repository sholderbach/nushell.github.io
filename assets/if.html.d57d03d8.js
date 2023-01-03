import{_ as t,z as o,A as c,X as a,C as n,D as e,a6 as p}from"./framework.3d018c9f.js";const r={},l={id:"frontmatter-title-for-core",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; if (cond) (then_block) (else_expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>cond</code>: condition to check</li><li><code>then_block</code>: block to run if check succeeds</li><li><code>else_expression</code>: expression or block to run if check fails</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Output a value if a condition matches, otherwise return nothing</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> <span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span> <span class="token string">&#39;yes!&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Output a value if a condition matches, else return another value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span> <span class="token string">&#39;yes!&#39;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token string">&#39;no!&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Chain multiple if&#39;s together</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span> <span class="token string">&#39;yes!&#39;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token number">4</span> <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">{</span> <span class="token string">&#39;no!&#39;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token string">&#39;okay!&#39;</span> <span class="token punctuation">}</span>
</code></pre></div>`,13);function h(s,k){return o(),c("div",null,[a("h1",l,[i,n(),a("code",null,e(s.$frontmatter.title),1),n(" for core")]),a("div",d,e(s.$frontmatter.core),1),u])}const f=t(r,[["render",h],["__file","if.html.vue"]]);export{f as default};
