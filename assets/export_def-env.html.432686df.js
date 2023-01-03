import{_ as s,z as o,A as r,X as a,C as n,D as t,a6 as c}from"./framework.3d018c9f.js";const i={},l={id:"frontmatter-title-for-core",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),p={class:"command-title"},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export def-env (name) (params) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: definition name</li><li><code>params</code>: parameters</li><li><code>block</code>: body of the definition</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html

=== EXTRA NOTE ===
All blocks are scoped, including variable definition and environment variable changes.

Because of this, the following doesn&#39;t work:

export def-env cd_with_fallback [arg = &quot;&quot;] {
    let fall_back_path = &quot;/tmp&quot;
    if $arg != &quot;&quot; {
        cd $arg
    } else {
        cd $fall_back_path
    }
}

Instead, you have to use cd in the top level scope:

export def-env cd_with_fallback [arg = &quot;&quot;] {
    let fall_back_path = &quot;/tmp&quot;
    let path = if $arg != &quot;&quot; {
        $arg
    } else {
        $fall_back_path
    }
    cd $path
}
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Define a custom command that participates in the environment in a module and call it</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module foo <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> def-env bar <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> let-env FOO_BAR <span class="token operator">=</span> <span class="token string">&quot;BAZ&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> use foo bar<span class="token punctuation">;</span> bar<span class="token punctuation">;</span> <span class="token variable">$env</span>.FOO_BAR
</code></pre></div>`,9);function h(e,f){return o(),r("div",null,[a("h1",l,[d,n(),a("code",null,t(e.$frontmatter.title),1),n(" for core")]),a("div",p,t(e.$frontmatter.core),1),u])}const _=s(i,[["render",h],["__file","export_def-env.html.vue"]]);export{_ as default};
