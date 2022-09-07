import{_ as e,o as t,c as o,a as s,t as n,d as p,e as c}from"./app.8034769a.js";const r={},l={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=p(),u={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; if (cond) (then_block) (else_expression)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>cond</code>: condition to check</li><li><code>then_block</code>: block to run if check succeeds</li><li><code>else_expression</code>: expression or block to run if check fails</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Output a value if a condition matches, otherwise return nothing</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> <span class="token number">2</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span> <span class="token string">&#39;yes!&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Output a value if a condition matches, else return another value</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span> <span class="token string">&#39;yes!&#39;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token string">&#39;no!&#39;</span> <span class="token punctuation">}</span>
</code></pre></div><p>Chain multiple if&#39;s together</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token keyword">if</span> <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token punctuation">{</span> <span class="token string">&#39;yes!&#39;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token number">4</span> <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">{</span> <span class="token string">&#39;no!&#39;</span> <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token string">&#39;okay!&#39;</span> <span class="token punctuation">}</span>
</code></pre></div>`,13);function k(a,g){return t(),o("div",null,[s("h1",l,[i,d,s("code",null,n(a.$frontmatter.title),1)]),s("div",u,n(a.$frontmatter.usage),1),h])}const f=e(r,[["render",k],["__file","if.html.vue"]]);export{f as default};
