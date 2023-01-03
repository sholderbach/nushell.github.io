import{_ as e,z as a,A as s,a6 as n}from"./framework.3d018c9f.js";const t={},o=n(`<h1 id="system" tabindex="-1"><a class="header-anchor" href="#system" aria-hidden="true">#</a> System</h1><p>Nu offers many commands and plugins that help navigate a command-line interface, interface with the filesystem, and monitor your system.</p><h3 id="view-all-files-in-the-current-directory" tabindex="-1"><a class="header-anchor" href="#view-all-files-in-the-current-directory" aria-hidden="true">#</a> View all files in the current directory</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">file</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>────┬─────────────────────────────────┬──────┬──────────┬────────────────
 #  │              name               │ type │   size   │    modified
────┼─────────────────────────────────┼──────┼──────────┼────────────────
  0 │ CODE_OF_CONDUCT.md              │ file │   3.5 KB │ 10 months ago
  1 │ CONTRIBUTING.md                 │ file │   1.8 KB │ 10 months ago
  2 │ Cargo.lock                      │ file │ 118.4 KB │ 2 hours ago
  3 │ Cargo.toml                      │ file │   4.1 KB │ 2 hours ago
  4 │ Cargo.toml.old                  │ file │   7.2 KB │ 2 weeks ago
  5 │ LICENSE                         │ file │   1.1 KB │ 4 months ago
  6 │ Makefile.toml                   │ file │    473 B │ 10 months ago
  7 │ README.build.txt                │ file │    193 B │ 10 months ago
  8 │ README.md                       │ file │  15.8 KB │ 3 days ago
  9 │ bands.txt                       │ file │    156 B │ 2 hours ago
 10 │ extra_features_cargo_install.sh │ file │     54 B │ 4 months ago
 11 │ files                           │ file │      3 B │ an hour ago
 12 │ payload.json                    │ file │     88 B │ 21 minutes ago
 13 │ rustfmt.toml                    │ file │     16 B │ 10 months ago
 14 │ urls.json                       │ file │    182 B │ 25 minutes ago
────┴─────────────────────────────────┴──────┴──────────┴────────────────
</code></pre></div><hr><h3 id="view-all-directories-in-the-current-directory" tabindex="-1"><a class="header-anchor" href="#view-all-directories-in-the-current-directory" aria-hidden="true">#</a> View all directories in the current directory</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> <span class="token function">dir</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>────┬───────────┬──────┬─────────┬───────────────
 #  │   name    │ type │  size   │   modified
────┼───────────┼──────┼─────────┼───────────────
  0 │ .azureold │ dir  │     0 B │ 3 weeks ago
  1 │ .cargo    │ dir  │     0 B │ 10 months ago
  2 │ .vscode   │ dir  │     0 B │ 10 months ago
  3 │ crates    │ dir  │ 12.3 KB │ 3 weeks ago
  4 │ docs      │ dir  │  4.1 KB │ a day ago
  5 │ images    │ dir  │  4.1 KB │ 2 weeks ago
  6 │ pkg_mgrs  │ dir  │     0 B │ 10 months ago
  7 │ samples   │ dir  │     0 B │ 10 months ago
  8 │ src       │ dir  │  4.1 KB │ 3 hours ago
  9 │ target    │ dir  │     0 B │ 2 weeks ago
 10 │ tests     │ dir  │     0 B │ 4 months ago
 11 │ wix       │ dir  │     0 B │ 2 weeks ago
────┴───────────┴──────┴─────────┴───────────────
</code></pre></div><hr><h3 id="find-processes-sorted-by-greatest-cpu-utilization" tabindex="-1"><a class="header-anchor" href="#find-processes-sorted-by-greatest-cpu-utilization" aria-hidden="true">#</a> Find processes sorted by greatest cpu utilization.</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">|</span> sort-by cpu <span class="token operator">|</span> reverse
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬───────┬────────────────────┬───────┬─────────┬─────────
 # │  pid  │        name        │  cpu  │   mem   │ virtual
───┼───────┼────────────────────┼───────┼─────────┼─────────
 0 │ 11928 │ nu.exe             │ 32.12 │ 47.7 MB │ 20.9 MB
 1 │ 11728 │ Teams.exe          │ 10.71 │ 53.8 MB │ 50.8 MB
 2 │ 21460 │ msedgewebview2.exe │  8.43 │ 54.0 MB │ 36.8 MB
───┴───────┴────────────────────┴───────┴─────────┴─────────
</code></pre></div><hr><h3 id="find-and-kill-a-hanging-process" tabindex="-1"><a class="header-anchor" href="#find-and-kill-a-hanging-process" aria-hidden="true">#</a> Find and kill a hanging process</h3><p>Sometimes a process doesn&#39;t shut down correctly. Using <code>ps</code> it&#39;s fairly easy to find the pid of this process.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where name <span class="token operator">==</span> Notepad2.exe
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬──────┬──────────────┬──────┬─────────┬─────────
 # │ pid  │     name     │ cpu  │   mem   │ virtual
───┼──────┼──────────────┼──────┼─────────┼─────────
 0 │ 9268 │ Notepad2.exe │ 0.00 │ 32.0 MB │  9.8 MB
───┴──────┴──────────────┴──────┴─────────┴─────────
</code></pre></div><p>This process can be sent the kill signal in a one-liner:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where name <span class="token operator">==</span> Notepad2.exe <span class="token operator">|</span> get pid.0 <span class="token operator">|</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$in</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬────────────────────────────────────────────────────────────────
 0 │ SUCCESS: Sent termination signal to the process with PID 9268.
───┴────────────────────────────────────────────────────────────────
</code></pre></div><p>Notes:</p><ul><li><code>kill</code> is Linux/Unix specific command, it is not built-in to nu.</li><li>filtering with the <code>where</code> command, as shown above, is case-sensitive.</li></ul><hr><h3 id="pipeline-content-to-clipboard" tabindex="-1"><a class="header-anchor" href="#pipeline-content-to-clipboard" aria-hidden="true">#</a> Pipeline content to clipboard</h3><p><em>Note: clip/clipboard-cli is has not been ported yet in the new version</em></p><p>Add the output of a pipeline to your clipboard. Note, this currently needs to be string output.</p><p>Note that <code>clip</code> is not yet enabled by default. If the output of <code>version | get features</code> contains <code>clipboard-cli</code> then your copy of NuShell contains <code>clip</code>. If <code>clip</code> is not available, then your operating system may provide a command that performs a similar function e.g. <code>clip</code> on Windows or <code>pbcopy</code> on macOS.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>sys <span class="token operator">|</span> get mem <span class="token operator">|</span> to json <span class="token operator">|</span> clip
</code></pre></div><p>Output pasted from <code>clip</code> 😃</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">34047156000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;free&quot;</span><span class="token operator">:</span> <span class="token number">19571089000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;swap total&quot;</span><span class="token operator">:</span> <span class="token number">7516192000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;swap free&quot;</span><span class="token operator">:</span> <span class="token number">7516192000</span>
<span class="token punctuation">}</span>
</code></pre></div>`,36),p=[o];function r(i,c){return a(),s("div",null,p)}const d=e(t,[["render",r],["__file","system.html.vue"]]);export{d as default};
