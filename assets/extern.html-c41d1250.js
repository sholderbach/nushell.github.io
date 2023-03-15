import{_ as n,p as s,q as o,Q as e,t,v as r,a1 as i}from"./framework-344bb0e4.js";const c={},d={id:"frontmatter-title-for-core",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),l={class:"command-title"},p=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; extern (def_name) (params)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>def_name</code>: definition name</li><li><code>params</code>: parameters</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>This command is a parser keyword. For details, check: https://www.nushell.sh/book/thinking_in_nu.html</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Write a signature for an external command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> extern <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>text: string<span class="token punctuation">]</span>
</code></pre></div>`,9);function m(a,u){return s(),o("div",null,[e("h1",d,[h,t(),e("code",null,r(a.$frontmatter.title),1),t(" for core")]),e("div",l,r(a.$frontmatter.core),1),p])}const _=n(c,[["render",m],["__file","extern.html.vue"]]);export{_ as default};
