import{_ as r,z as o,A as n,X as e,C as t,D as s,a6 as c}from"./framework.3d018c9f.js";const d={},l={id:"frontmatter-title-for-formats",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),m={class:"command-title"},p=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from eml --preview-body</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--preview-body {int}</code>: How many bytes of the body to preview</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert eml structured data into record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com

Test&#39;</span> <span class="token operator">|</span> from eml
</code></pre></div><p>Convert eml structured data into record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;From: test@email.com
Subject: Welcome
To: someone@somewhere.com

Test&#39;</span> <span class="token operator">|</span> from eml <span class="token parameter variable">-b</span> <span class="token number">1</span>
</code></pre></div>`,9);function h(a,f){return o(),n("div",null,[e("h1",l,[i,t(),e("code",null,s(a.$frontmatter.title),1),t(" for formats")]),e("div",m,s(a.$frontmatter.formats),1),p])}const _=r(d,[["render",h],["__file","from_eml.html.vue"]]);export{_ as default};
