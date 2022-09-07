import{_ as a,o as e,c as s,e as n}from"./app.8034769a.js";const t={},o=n(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><p>Nu can help with common <code>Git</code> tasks like removing all local branches which have been merged into master.</p><h3 id="delete-git-merged-branches" tabindex="-1"><a class="header-anchor" href="#delete-git-merged-branches" aria-hidden="true">#</a> Delete git merged branches</h3><p><strong>Warning</strong>: This command will hard delete the merged branches from your machine. You may want to check the branches selected for deletion by omitting the last git command.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> branch <span class="token parameter variable">--merged</span> <span class="token operator">|</span> lines <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span> <span class="token operator">!=</span> <span class="token string">&quot;* master&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$it</span> <span class="token operator">!=</span> <span class="token string">&quot;* main&quot;</span><span class="token punctuation">)</span> <span class="token operator">|</span> each <span class="token punctuation">{</span><span class="token operator">|</span>br<span class="token operator">|</span> <span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token punctuation">(</span><span class="token variable">$br</span> <span class="token operator">|</span> str trim<span class="token punctuation">)</span> <span class="token punctuation">}</span> <span class="token operator">|</span> str trim
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Deleted branch start_urls (was fc01bb45).
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Parse formatted commit messages (more details in the parsing git log section)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h\xBB\xA6\xAB%aN\xBB\xA6\xAB%s\xBB\xA6\xAB%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> sha1 committer desc merged_at <span class="token operator">|</span> first <span class="token number">10</span>
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502   sha1   \u2502     committer     \u2502                         desc                          \u2502            merged_at
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 42f1874a \u2502 Justin Ma         \u2502 Update some examples and docs (#4682)                 \u2502 Tue, 1 Mar 2022 21:05:29 +0800
 1 \u2502 2a89936b \u2502 JT                \u2502 Move to latest stable crossterm, with fix (#4684)     \u2502 Tue, 1 Mar 2022 07:05:46 -0500
 2 \u2502 ece5e7db \u2502 Fernando Herrera  \u2502 dataframe list command (#4681)                        \u2502 Tue, 1 Mar 2022 11:41:13 +0000
 3 \u2502 a6a96b29 \u2502 JT                \u2502 Add binary literals (#4680)                           \u2502 Mon, 28 Feb 2022 18:31:53 -0500
 4 \u2502 e3100e6a \u2502 Luca Trevisani    \u2502 Fix alias in \`docs/sample_config/config.toml\` (#4669) \u2502 Mon, 28 Feb 2022 22:47:14 +0100
 5 \u2502 cb5c61d2 \u2502 JT                \u2502 Fix open ended ranges (#4677)                         \u2502 Mon, 28 Feb 2022 11:15:31 -0500
 6 \u2502 b09acdb7 \u2502 Justin Ma         \u2502 Fix unsupported type message for some math related    \u2502 Mon, 28 Feb 2022 23:14:33 +0800
   \u2502          \u2502                   \u2502 commands (#4672)                                      \u2502
 7 \u2502 0924975b \u2502 JT                \u2502 Use default_config.nu by default (#4675)              \u2502 Mon, 28 Feb 2022 10:12:08 -0500
 8 \u2502 d6a6c4b0 \u2502 JT                \u2502 Add back in default keybindings (#4673)               \u2502 Mon, 28 Feb 2022 08:54:40 -0500
 9 \u2502 eec17304 \u2502 Stefan Holderbach \u2502 Add profiling build profile and symbol strip (#4630)  \u2502 Mon, 28 Feb 2022 13:13:24 +0100
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><hr><h3 id="view-git-comitter-activity-as-a-histogram" tabindex="-1"><a class="header-anchor" href="#view-git-comitter-activity-as-a-histogram" aria-hidden="true">#</a> View git comitter activity as a <code>histogram</code></h3><p><em>Note: the <code>histogram</code> command is not yet ported to the latest version</em></p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h\xBB\xA6\xAB%aN\xBB\xA6\xAB%s\xBB\xA6\xAB%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> sha1 committer desc merged_at <span class="token operator">|</span> histogram committer merger <span class="token operator">|</span> sort-by merger <span class="token operator">|</span> reverse
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u252F\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
 #  \u2502 committer           \u2502 merger
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 Jonathan Turner     \u2502 ****************************************************************************************************
  1 \u2502 Andr\xE9s N. Robalino  \u2502 ***********************
  2 \u2502 Yehuda Katz         \u2502 **************
  3 \u2502 est31               \u2502 *****
  4 \u2502 Thomas Hartmann     \u2502 ****
  5 \u2502 Sean Hellum         \u2502 **
  6 \u2502 Patrick Meredith    \u2502 **
  7 \u2502 Fahmi Akbar Wildana \u2502 **
  8 \u2502 Vanessa Sochat      \u2502 *
  9 \u2502 Shaurya Shubham     \u2502 *
 10 \u2502 Pirmin Kalberer     \u2502 *
 11 \u2502 Odin Dutton         \u2502 *
 12 \u2502 Jonathan Rothberg   \u2502 *
 \u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2537\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
</code></pre></div>`,16),r=[o];function p(c,i){return e(),s("div",null,r)}const d=a(t,[["render",p],["__file","git.html.vue"]]);export{d as default};
