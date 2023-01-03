import{_ as s,z as o,A as n,X as a,C as t,D as r,a6 as c}from"./framework.3d018c9f.js";const d={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),l={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from vcf </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts ics formatted string to table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;BEGIN:VCARD
N:Foo
FN:Bar
EMAIL:foo@bar.com
END:VCARD&#39;</span> <span class="token operator">|</span> from vcf
</code></pre></div>`,5);function m(e,p){return o(),n("div",null,[a("h1",i,[f,t(),a("code",null,r(e.$frontmatter.title),1),t(" for formats")]),a("div",l,r(e.$frontmatter.formats),1),h])}const u=s(d,[["render",m],["__file","from_vcf.html.vue"]]);export{u as default};
