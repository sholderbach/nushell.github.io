import{_ as e,o as a,c as s,e as n}from"./app.8034769a.js";const t={},o=n(`<h1 id="native-shell-programs" tabindex="-1"><a class="header-anchor" href="#native-shell-programs" aria-hidden="true">#</a> Native Shell Programs</h1><p>Nu allows you to access native shell programs by escaping the program name with <code>^</code>.</p><p><code>sc</code> is a Windows CMD program that is used for communicating with the Service Control Manager</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ^sc queryex eventlog <span class="token operator">|</span> lines <span class="token operator">|</span> str trim <span class="token operator">|</span> parse <span class="token string">&quot;{key}: {value}&quot;</span>
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502        key         \u2502   value
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 SERVICE_NAME       \u2502 eventlog
 1 \u2502 TYPE               \u2502 30  WIN32
 2 \u2502 STATE              \u2502 4  RUNNING
 3 \u2502 WIN32_EXIT_CODE    \u2502 0  (0x0)
 4 \u2502 SERVICE_EXIT_CODE  \u2502 0  (0x0)
 5 \u2502 CHECKPOINT         \u2502 0x0
 6 \u2502 WAIT_HINT          \u2502 0x0
 7 \u2502 PID                \u2502 3452
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,6),r=[o];function c(l,p){return a(),s("div",null,r)}const d=e(t,[["render",c],["__file","native_shell_programs.html.vue"]]);export{d as default};
