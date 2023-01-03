import{_ as e,z as a,A as t,a6 as s}from"./framework.3d018c9f.js";const n={},o=s(`<h1 id="parsing" tabindex="-1"><a class="header-anchor" href="#parsing" aria-hidden="true">#</a> Parsing</h1><p>Nu offers the ability to do some basic parsing.</p><p>How to parse an arbitrary pattern from a string of text into a multi-column table.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cargo</span> search shells <span class="token parameter variable">--limit</span> <span class="token number">10</span> <span class="token operator">|</span> lines <span class="token operator">|</span> parse <span class="token string">&quot;{crate_name} = {version} #{description}&quot;</span> <span class="token operator">|</span> str trim
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬──────────────┬─────────────────┬────────────────────────────────────────────────────────────────────────────────
 # │  crate_name  │     version     │                                  description
───┼──────────────┼─────────────────┼────────────────────────────────────────────────────────────────────────────────
 0 │ shells       │ &quot;0.2.0&quot;         │ Sugar-coating for invoking shell commands directly from Rust.
 1 │ pyc-shell    │ &quot;0.3.0&quot;         │ Pyc is a simple CLI application, which allows you to perform shell commands in
   │              │                 │ cyrillic and other a…
 2 │ ion-shell    │ &quot;0.0.0&quot;         │ The Ion Shell
 3 │ sheldon      │ &quot;0.6.6&quot;         │ Fast, configurable, shell plugin manager.
 4 │ nu           │ &quot;0.44.0&quot;        │ A new type of shell
 5 │ git-gamble   │ &quot;2.3.0&quot;         │ blend TCR + TDD to make sure to develop the right thing, babystep by babystep
 6 │ martin       │ &quot;1.0.0-alpha.0&quot; │ Blazing fast and lightweight PostGIS vector tiles server
 7 │ fnm          │ &quot;1.29.2&quot;        │ Fast and simple Node.js version manager
 8 │ remote_shell │ &quot;2.0.0&quot;         │ remote shell written by rust.
 9 │ sauce        │ &quot;0.6.6&quot;         │ A tool for managing directory-specific state.
───┴──────────────┴─────────────────┴────────────────────────────────────────────────────────────────────────────────
</code></pre></div>`,6),r=[o];function l(i,c){return a(),t("div",null,r)}const u=e(n,[["render",l],["__file","parsing.html.vue"]]);export{u as default};
