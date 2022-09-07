import{_ as e,o as t,c as o,a,t as n,d as p,e as r}from"./app.8034769a.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=p(),d={style:{"white-space":"pre-wrap"}},h=r(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; grid --width --color --separator</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--width {int}</code>: number of terminal columns wide (not output columns)</li><li><code>--color</code>: draw output with color</li><li><code>--separator {string}</code>: character to separate grid with</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>grid was built to give a concise gridded layout for ls. however,
it determines what to put in the grid by looking for a column named
&#39;name&#39;. this works great for tables and records but for lists we
need to do something different. such as with &#39;[one two three] | grid&#39;
it creates a fake column called &#39;name&#39; for these values so that it
prints out the list properly.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Render a simple list to a grid</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> a b c<span class="token punctuation">]</span> <span class="token operator">|</span> grid
</code></pre></div><p>The above example is the same as:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> a b c<span class="token punctuation">]</span> <span class="token operator">|</span> wrap name <span class="token operator">|</span> grid
</code></pre></div><p>Render a record to a grid</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>name: <span class="token string">&#39;foo&#39;</span>, b: <span class="token number">1</span>, c: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token operator">|</span> grid
</code></pre></div><p>Render a list of records to a grid</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>name: <span class="token string">&#39;A&#39;</span>, v: <span class="token number">1</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>name: <span class="token string">&#39;B&#39;</span>, v: <span class="token number">2</span><span class="token punctuation">}</span> <span class="token punctuation">{</span>name: <span class="token string">&#39;C&#39;</span>, v: <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">|</span> grid
</code></pre></div><p>Render a table with &#39;name&#39; column in it to a grid</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name patch<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.0 false<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.1</span>.1 true<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">0.2</span>.0 false<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> grid
</code></pre></div>`,17);function g(s,k){return t(),o("div",null,[a("h1",l,[i,u,a("code",null,n(s.$frontmatter.title),1)]),a("div",d,n(s.$frontmatter.usage),1),h])}const b=e(c,[["render",g],["__file","grid.html.vue"]]);export{b as default};
