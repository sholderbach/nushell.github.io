import{_ as o,z as s,A as r,X as e,C as n,D as t,a6 as c}from"./framework.3d018c9f.js";const l={},i={id:"frontmatter-title-for-core",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-core","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; def-env (def_name) (params) (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>def_name</code>: definition name</li><li><code>params</code>: parameters</li><li><code>block</code>: body of the definition</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html

=== EXTRA NOTE ===
All blocks are scoped, including variable definition and environment variable changes.

Because of this, the following doesn&#39;t work:

def-env cd_with_fallback [arg = &quot;&quot;] {
    let fall_back_path = &quot;/tmp&quot;
    if $arg != &quot;&quot; {
        cd $arg
    } else {
        cd $fall_back_path
    }
}

Instead, you have to use cd in the top level scope:

def-env cd_with_fallback [arg = &quot;&quot;] {
    let fall_back_path = &quot;/tmp&quot;
    let path = if $arg != &quot;&quot; {
        $arg
    } else {
        $fall_back_path
    }
    cd $path
}
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set environment variable by call a custom command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def-env foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> let-env BAR <span class="token operator">=</span> <span class="token string">&quot;BAZ&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> foo<span class="token punctuation">;</span> <span class="token variable">$env</span>.BAR
</code></pre></div>`,9);function u(a,f){return s(),r("div",null,[e("h1",i,[d,n(),e("code",null,t(a.$frontmatter.title),1),n(" for core")]),e("div",p,t(a.$frontmatter.core),1),h])}const _=o(l,[["render",u],["__file","def-env.html.vue"]]);export{_ as default};
