import{_ as t,z as o,A as p,X as a,C as n,D as e,a6 as i}from"./framework.3d018c9f.js";const l={},c={id:"frontmatter-title-for-conversions",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#frontmatter-title-for-conversions","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into sqlite (file_name) --table_name</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>file_name</code>: Specify the filename to save the database to</li><li><code>--table_name {string}</code>: Specify table name to store the data in</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert ls entries into a SQLite database with &#39;main&#39; as the table name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> into sqlite my_ls.db
</code></pre></div><p>Convert ls entries into a SQLite database with &#39;my_table&#39; as the table name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> into sqlite my_ls.db <span class="token parameter variable">-t</span> my_table
</code></pre></div><p>Convert table literal into a SQLite database with &#39;main&#39; as the table name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>-----<span class="token punctuation">]</span> <span class="token punctuation">[</span>someone<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>somename<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token string">&#39;(((((&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into sqlite filename.db
</code></pre></div><p>Convert a variety of values in table literal form into a SQLite database</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span>one <span class="token number">2</span> <span class="token number">5.2</span> six <span class="token boolean">true</span> 100mib 25sec<span class="token punctuation">]</span> <span class="token operator">|</span> into sqlite variety.db
</code></pre></div>`,13);function h(s,m){return o(),p("div",null,[a("h1",c,[r,n(),a("code",null,e(s.$frontmatter.title),1),n(" for conversions")]),a("div",d,e(s.$frontmatter.conversions),1),u])}const b=t(l,[["render",h],["__file","into_sqlite.html.vue"]]);export{b as default};
