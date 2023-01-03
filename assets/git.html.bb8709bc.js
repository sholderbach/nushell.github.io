import{_ as a,z as e,A as s,a6 as n}from"./framework.3d018c9f.js";const t={},o=n(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><p>Nu can help with common <code>Git</code> tasks like removing all local branches which have been merged into master.</p><h3 id="delete-git-merged-branches" tabindex="-1"><a class="header-anchor" href="#delete-git-merged-branches" aria-hidden="true">#</a> Delete git merged branches</h3><p><strong>Warning</strong>: This command will hard delete the merged branches from your machine. You may want to check the branches selected for deletion by omitting the last git command.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> branch <span class="token parameter variable">--merged</span> <span class="token operator">|</span> lines <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">!=</span> <span class="token string">&quot;* master&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$it</span> <span class="token operator">!=</span> <span class="token string">&quot;* main&quot;</span><span class="token punctuation">)</span> <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">|</span>br<span class="token operator">|</span> <span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token punctuation">(</span><span class="token variable">$br</span> <span class="token operator">|</span> str trim<span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token operator">|</span> str trim
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬───────────────────────────────────────────
 0 │ Deleted branch start_urls (was fc01bb45).
───┴───────────────────────────────────────────
</code></pre></div><p>Parse formatted commit messages (more details in the parsing git log section)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%aN»¦«%s»¦«%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> sha1 committer desc merged_at <span class="token operator">|</span> first <span class="token number">10</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬──────────┬───────────────────┬───────────────────────────────────────────────────────┬─────────────────────────────────
 # │   sha1   │     committer     │                         desc                          │            merged_at
───┼──────────┼───────────────────┼───────────────────────────────────────────────────────┼─────────────────────────────────
 0 │ 42f1874a │ Justin Ma         │ Update some examples and docs (#4682)                 │ Tue, 1 Mar 2022 21:05:29 +0800
 1 │ 2a89936b │ JT                │ Move to latest stable crossterm, with fix (#4684)     │ Tue, 1 Mar 2022 07:05:46 -0500
 2 │ ece5e7db │ Fernando Herrera  │ dataframe list command (#4681)                        │ Tue, 1 Mar 2022 11:41:13 +0000
 3 │ a6a96b29 │ JT                │ Add binary literals (#4680)                           │ Mon, 28 Feb 2022 18:31:53 -0500
 4 │ e3100e6a │ Luca Trevisani    │ Fix alias in \`docs/sample_config/config.toml\` (#4669) │ Mon, 28 Feb 2022 22:47:14 +0100
 5 │ cb5c61d2 │ JT                │ Fix open ended ranges (#4677)                         │ Mon, 28 Feb 2022 11:15:31 -0500
 6 │ b09acdb7 │ Justin Ma         │ Fix unsupported type message for some math related    │ Mon, 28 Feb 2022 23:14:33 +0800
   │          │                   │ commands (#4672)                                      │
 7 │ 0924975b │ JT                │ Use default_config.nu by default (#4675)              │ Mon, 28 Feb 2022 10:12:08 -0500
 8 │ d6a6c4b0 │ JT                │ Add back in default keybindings (#4673)               │ Mon, 28 Feb 2022 08:54:40 -0500
 9 │ eec17304 │ Stefan Holderbach │ Add profiling build profile and symbol strip (#4630)  │ Mon, 28 Feb 2022 13:13:24 +0100
───┴──────────┴───────────────────┴───────────────────────────────────────────────────────┴─────────────────────────────────
</code></pre></div><hr><h3 id="view-git-comitter-activity-as-a-histogram" tabindex="-1"><a class="header-anchor" href="#view-git-comitter-activity-as-a-histogram" aria-hidden="true">#</a> View git comitter activity as a <code>histogram</code></h3><p><em>Note: the <code>histogram</code> command is not yet ported to the latest version</em></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%aN»¦«%s»¦«%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> sha1 committer desc merged_at <span class="token operator">|</span> histogram committer merger <span class="token operator">|</span> sort-by merger <span class="token operator">|</span> reverse
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>━━━━┯━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 #  │ committer           │ merger
────┼─────────────────────┼──────────────────────────────────────────────────────────────────────────────────────────────────────
  0 │ Jonathan Turner     │ ****************************************************************************************************
  1 │ Andrés N. Robalino  │ ***********************
  2 │ Yehuda Katz         │ **************
  3 │ est31               │ *****
  4 │ Thomas Hartmann     │ ****
  5 │ Sean Hellum         │ **
  6 │ Patrick Meredith    │ **
  7 │ Fahmi Akbar Wildana │ **
  8 │ Vanessa Sochat      │ *
  9 │ Shaurya Shubham     │ *
 10 │ Pirmin Kalberer     │ *
 11 │ Odin Dutton         │ *
 12 │ Jonathan Rothberg   │ *
 ━━━┷━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
</code></pre></div>`,16),r=[o];function p(c,i){return e(),s("div",null,r)}const d=a(t,[["render",p],["__file","git.html.vue"]]);export{d as default};
