import{_ as n,p as r,q as o,Q as e,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const d={},i={id:"frontmatter-title-for-strings",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; detect columns --skip --no-headers</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--skip {int}</code>: number of rows to skip before detecting</li><li><code>--no-headers</code> <code>(-n)</code>: don&#39;t detect headers</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Splits string across multiple columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;a b c&#39;</span> <span class="token operator">|</span> detect columns <span class="token parameter variable">-n</span>
</code></pre></div><p>Splits a multi-line string into columns with headers detected</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">$&#39;c1 c2 c3(char nl)a b c&#39;</span> <span class="token operator">|</span> detect columns
</code></pre></div>`,9);function m(a,u){return r(),o("div",null,[e("h1",i,[l,s(),e("code",null,t(a.$frontmatter.title),1),s(" for strings")]),e("div",p,t(a.$frontmatter.strings),1),h])}const f=n(d,[["render",m],["__file","detect_columns.html.vue"]]);export{f as default};
