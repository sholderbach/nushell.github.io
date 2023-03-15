import{_ as a,p as e,q as s,a1 as n}from"./framework-344bb0e4.js";const t={},o=n(`<h1 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h1><h3 id="editing-a-file-and-then-saving-the-changes" tabindex="-1"><a class="header-anchor" href="#editing-a-file-and-then-saving-the-changes" aria-hidden="true">#</a> Editing a file and then saving the changes</h3><p>Here we are making edits to <code>Cargo.toml</code>. We increase the patch version of the crate using <code>inc</code> and then save it back to the file. Use <code>help inc</code> to get more information.</p><p>Read the file&#39;s initial contents</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> get package.version
</code></pre></div><p>Output</p><p><code>0.59.0</code></p><p>Make the edit to the version number and save it.</p><p><em>Note: running this command should work but it will reorder the toml file alphabetically by section.</em></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> upsert package.version <span class="token punctuation">{</span> <span class="token operator">|</span>p<span class="token operator">|</span> <span class="token variable">$p</span> <span class="token operator">|</span> get package.version <span class="token operator">|</span> inc <span class="token parameter variable">--patch</span> <span class="token punctuation">}</span> <span class="token operator">|</span> save Cargo.toml
</code></pre></div><p>Output <em>none</em></p><p>View the changes we made to the file.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> get package.version
</code></pre></div><p>Output</p><p><code>0.59.1</code></p><hr><h3 id="parsing-a-file-in-a-non-standard-format" tabindex="-1"><a class="header-anchor" href="#parsing-a-file-in-a-non-standard-format" aria-hidden="true">#</a> Parsing a file in a non-standard format</h3><p>Suppose you have a file with the following format.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>band:album:year
Fugazi:Steady Diet of Nothing:1991
Fugazi:The Argument:2001
Fugazi:7 Songs:1988
Fugazi:Repeater:1990
Fugazi:In On The Kill Taker:1993
</code></pre></div><p>You can parse it into a table.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> bands.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;:&quot;</span> Band Album Year <span class="token operator">|</span> skip <span class="token number">1</span> <span class="token operator">|</span> sort-by Year
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>━━━┯━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━
 # │ Band   │ Album                  │ Year
───┼────────┼────────────────────────┼──────
 0 │ Fugazi │ 7 Songs                │ 1988
 1 │ Fugazi │ Repeater               │ 1990
 2 │ Fugazi │ Steady Diet of Nothing │ 1991
 3 │ Fugazi │ In On The Kill Taker   │ 1993
 4 │ Fugazi │ The Argument           │ 2001
━━━┷━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━
</code></pre></div><p>You can alternatively do this using <code>parse</code>.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">open</span> bands.txt <span class="token operator">|</span> lines <span class="token operator">|</span> parse <span class="token string">&quot;{Band}:{Album}:{Year}&quot;</span> <span class="token operator">|</span> skip <span class="token number">1</span> <span class="token operator">|</span> sort-by Year
</code></pre></div><p>Or, you can utilize the <code>headers</code> command to use the first row as a header row. The only difference would be the headers would match the case of the text file. So, in this case, the headers would be lowercase.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> bands.txt <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">|</span> headers <span class="token operator">|</span> sort-by year
</code></pre></div><hr><h3 id="word-occurrence-count-with-ripgrep" tabindex="-1"><a class="header-anchor" href="#word-occurrence-count-with-ripgrep" aria-hidden="true">#</a> Word occurrence count with Ripgrep</h3><p>Suppose you would like to check the number of lines the string &quot;Value&quot; appears per file in the nushell project, then sort those files by largest line count.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> rg <span class="token parameter variable">-c</span> Value <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;:&quot;</span> <span class="token function">file</span> line_count <span class="token operator">|</span> into int line_count <span class="token operator">|</span> sort-by line_count <span class="token operator">|</span> reverse
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬──────────────────────────────────────┬────────────
 # │ file                                 │ line_count
───┼──────────────────────────────────────┼────────────
 0 │ crates/nu-source/src/meta.rs         │         27
 1 │ crates/nu-protocol/src/value/dict.rs │         10
 2 │ src/commands/config.rs               │         10
 3 │ crates/nu_plugin_sys/src/sys.rs      │         10
 4 │ src/commands/from_bson.rs            │          9
 5 │ src/utils/data_processing.rs         │          9
 6 │ src/deserializer.rs                  │          8
 7 │ src/commands/histogram.rs            │          7
 8 │ src/commands/split_column.rs         │          6
 9 │ src/data/dict.rs                     │          6
───┴──────────────────────────────────────┴────────────
... example output limited due to large output
</code></pre></div>`,33),p=[o];function r(c,l){return e(),s("div",null,p)}const d=a(t,[["render",r],["__file","files.html.vue"]]);export{d as default};
