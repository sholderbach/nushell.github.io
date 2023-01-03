import{_ as s,z as r,A as i,X as e,C as a,D as n,a6 as o}from"./framework.3d018c9f.js";const d={},l={id:"frontmatter-title-for-strings",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=o('<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; print ...rest --no-newline --stderr</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: the values to print</li><li><code>--no-newline</code>: print without inserting a newline for the line ending</li><li><code>--stderr</code>: print to stderr instead of stdout</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>Unlike `echo`, this command does not return any value (`print | describe` will return &quot;nothing&quot;).\nSince this command has no output, there is no point in piping it with other commands.\n\n`print` may be used inside blocks of code (e.g.: hooks) to display text during execution without interfering with the pipeline.\n</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Print &#39;hello world&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> print <span class="token string">&quot;hello world&quot;</span>\n</code></pre></div><p>Print the sum of 2 and 3</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> print <span class="token punctuation">(</span><span class="token number">2</span> + <span class="token number">3</span><span class="token punctuation">)</span>\n</code></pre></div>',11);function u(t,g){return r(),i("div",null,[e("h1",l,[c,a(),e("code",null,n(t.$frontmatter.title),1),a(" for strings")]),e("div",h,n(t.$frontmatter.strings),1),p])}const f=s(d,[["render",u],["__file","print.html.vue"]]);export{f as default};
