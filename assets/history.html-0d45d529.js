import{_ as o,p as n,q as r,Q as a,t as s,v as t,a1 as c}from"./framework-344bb0e4.js";const i={},l={id:"frontmatter-title-for-misc",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-misc","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; history --clear --long</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--clear</code> <code>(-c)</code>: Clears out the history entries</li><li><code>--long</code> <code>(-l)</code>: Show long listing of entries for sqlite history</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Get current history length</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">history</span> <span class="token operator">|</span> length
</code></pre></div><p>Show last 5 commands you have ran</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">history</span> <span class="token operator">|</span> last <span class="token number">5</span>
</code></pre></div><p>Search all the commands from history that contains &#39;cargo&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">history</span> <span class="token operator">|</span> wrap cmd <span class="token operator">|</span> where cmd <span class="token operator">=~</span> <span class="token function">cargo</span>
</code></pre></div>`,11);function m(e,u){return n(),r("div",null,[a("h1",l,[d,s(),a("code",null,t(e.$frontmatter.title),1),s(" for misc")]),a("div",p,t(e.$frontmatter.misc),1),h])}const f=o(i,[["render",m],["__file","history.html.vue"]]);export{f as default};
