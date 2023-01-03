import{_ as e,z as a,A as s,a6 as t}from"./framework.3d018c9f.js";const n={},o=t(`<h1 id="native-shell-programs" tabindex="-1"><a class="header-anchor" href="#native-shell-programs" aria-hidden="true">#</a> Native Shell Programs</h1><p>Nu allows you to access native shell programs by escaping the program name with <code>^</code>.</p><p><code>sc</code> is a Windows CMD program that is used for communicating with the Service Control Manager</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ^sc queryex eventlog <span class="token operator">|</span> lines <span class="token operator">|</span> str trim <span class="token operator">|</span> parse <span class="token string">&quot;{key}: {value}&quot;</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬────────────────────┬────────────
 # │        key         │   value
───┼────────────────────┼────────────
 0 │ SERVICE_NAME       │ eventlog
 1 │ TYPE               │ 30  WIN32
 2 │ STATE              │ 4  RUNNING
 3 │ WIN32_EXIT_CODE    │ 0  (0x0)
 4 │ SERVICE_EXIT_CODE  │ 0  (0x0)
 5 │ CHECKPOINT         │ 0x0
 6 │ WAIT_HINT          │ 0x0
 7 │ PID                │ 3452
───┴────────────────────┴────────────
</code></pre></div>`,6),r=[o];function c(l,p){return a(),s("div",null,r)}const d=e(n,[["render",c],["__file","native_shell_programs.html.vue"]]);export{d as default};
