import{_ as t,z as o,A as r,X as e,C as a,T as i,a6 as n,Q as p}from"./framework.3d018c9f.js";const l={},c=n(`<h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1><p>To get the most out of nu, it is important to setup your path and env for easy access. There are other ways to view these values and variables, however setting up your nu configuration will make it much easier as these have cross-platform support.</p><hr><h3 id="configure-your-path-and-other-environment-variables" tabindex="-1"><a class="header-anchor" href="#configure-your-path-and-other-environment-variables" aria-hidden="true">#</a> Configure your path and other environment variables</h3><p>In order to configure your path in nushell you&#39;ll need to modify your <code>PATH</code> environment variable in your <code>config.nu</code> file. Open your <code>config.nu</code> file and put an entry in it like <code>let-env PATH = &quot;path1;path2;path3&quot;</code> ensuring that you use the proper path separation character, which is different by platform.</p><p>Alternately, if you want to change your path temporarily, you can do the same command at the prompt.</p><p>If you want to append a folder to your <code>PATH</code> environment variable you can do that too using the <code>append</code> or <code>prepend</code> command like this:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env <span class="token environment constant">PATH</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token environment constant">PATH</span> <span class="token operator">|</span> append <span class="token string">&quot;some/other/path&quot;</span><span class="token punctuation">)</span>
</code></pre></div>`,8),u={href:"https://github.com/nushell/nushell/blob/main/docs/Environment_Variables.md",target:"_blank",rel:"noopener noreferrer"},h=n(`<h3 id="how-to-list-your-environment-variables" tabindex="-1"><a class="header-anchor" href="#how-to-list-your-environment-variables" aria-hidden="true">#</a> How to list your environment variables</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>─────────────────────────────────┬────────────────────────────────────────────
 ALLUSERSPROFILE                 │ C:\\ProgramData
 CARGO_PKG_AUTHORS               │ The Nu Project Contributors
 CARGO_PKG_DESCRIPTION           │ A new type of shell
 CARGO_PKG_HOMEPAGE              │ https://www.nushell.sh
 CARGO_PKG_LICENSE               │ MIT
 CARGO_PKG_LICENSE_FILE          │
 CARGO_PKG_NAME                  │ nu
 CARGO_PKG_REPOSITORY            │ https://github.com/nushell/nushell
 CARGO_PKG_VERSION               │ 0.59.0
 CARGO_PKG_VERSION_MAJOR         │ 0
</code></pre></div><p>or for a more detailed view, use our new <code>env</code> command.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">env</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>────┬─────────────────────────────┬─────────────────────────────┬─────────────────────────────┬──────────────────────────────
 #  │            name             │            type             │            value            │             raw
────┼─────────────────────────────┼─────────────────────────────┼─────────────────────────────┼──────────────────────────────
  0 │ ALLUSERSPROFILE             │ string                      │ C:\\ProgramData              │ C:\\ProgramData
  1 │ APPDATA                     │ string                      │ C:\\Users\\someuser10\\AppData │ C:\\Users\\someuser10\\AppData
    │                             │                             │ \\Roaming                    │ \\Roaming
  2 │ CARGO                       │ string                      │ \\\\?\\C:\\Users\\someuser10\\.ru │ \\\\?\\C:\\Users\\someuser10\\.ru
    │                             │                             │ stup\\toolchains\\stable-x86_ │ stup\\toolchains\\stable-x86_
    │                             │                             │ 64-pc-windows-msvc\\bin\\carg │ 64-pc-windows-msvc\\bin\\carg
    │                             │                             │ o.exe                       │ o.exe
  3 │ CARGO_HOME                  │ string                      │ C:\\Users\\someuser10\\.cargo  │ C:\\Users\\someuser10\\.cargo
  4 │ CARGO_MANIFEST_DIR          │ string                      │ C:\\Users\\someuser10\\source\\ │ C:\\Users\\someuser10\\source\\
    │                             │                             │ repos\\forks\\nushell         │ repos\\forks\\nushell
  5 │ CARGO_PKG_AUTHORS           │ string                      │ The Nu Project Contributors │ The Nu Project Contributors
  6 │ CARGO_PKG_DESCRIPTION       │ string                      │ A new type of shell         │ A new type of shell
  7 │ CARGO_PKG_HOMEPAGE          │ string                      │ https://www.nushell.sh      │ https://www.nushell.sh
  8 │ CARGO_PKG_LICENSE           │ string                      │ MIT                         │ MIT
  9 │ CARGO_PKG_LICENSE_FILE      │ string                      │                             │
 10 │ CARGO_PKG_NAME              │ string                      │ nu                          │ nu
 11 │ CARGO_PKG_REPOSITORY        │ string                      │ https://github.com/nushell/ │ https://github.com/nushell/
</code></pre></div><hr><h3 id="how-to-get-a-single-environment-variable-s-value" tabindex="-1"><a class="header-anchor" href="#how-to-get-a-single-environment-variable-s-value" aria-hidden="true">#</a> How to get a single environment variable&#39;s value</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$env</span>.APPDATA
</code></pre></div><p>or</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">env</span> <span class="token operator">|</span> where name <span class="token operator">==</span> APPDATA
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬─────────┬────────┬─────────────────────────────────────┬─────────────────────────────────────
 # │  name   │  type  │                value                │                 raw
───┼─────────┼────────┼─────────────────────────────────────┼─────────────────────────────────────
 0 │ APPDATA │ string │ C:\\Users\\someuser10\\AppData\\Roaming │ C:\\Users\\someuser10\\AppData\\Roaming
───┴─────────┴────────┴─────────────────────────────────────┴─────────────────────────────────────
</code></pre></div>`,14);function d(g,m){const s=p("ExternalLinkIcon");return o(),r("div",null,[c,e("p",null,[a("For more detailed instructions, see the environment variables documentation "),e("a",u,[a("here"),i(s)])]),h])}const _=t(l,[["render",d],["__file","setup.html.vue"]]);export{_ as default};
