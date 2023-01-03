import{_ as a,z as n,A as s,a6 as e}from"./framework.3d018c9f.js";const t={},o=e(`<h1 id="parsing-git-log" tabindex="-1"><a class="header-anchor" href="#parsing-git-log" aria-hidden="true">#</a> Parsing Git Log</h1><h1 id="let-s-parse-git-log" tabindex="-1"><a class="header-anchor" href="#let-s-parse-git-log" aria-hidden="true">#</a> Let&#39;s parse git log</h1><p>This <code>git log</code> command is interesting but you can&#39;t do a lot with it like this.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log
</code></pre></div><p>Let&#39;s make it more parsable</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span><span class="token string">&quot;%h|%s|%aN|%aE|%aD&quot;</span> <span class="token parameter variable">-n</span> <span class="token number">25</span>
</code></pre></div><p>This will work but I&#39;ve been burnt by this in the past when a pipe <code>|</code> gets injected in the commits.</p><p>So, let&#39;s try again with something that most likely won&#39;t show up in commits, <code>»¦«</code>. Also, since we&#39;re not using a pipe now we don&#39;t have to use quotes around the pretty format string. Notice that the output is just a bunch of strings.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">5</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>42f1874a»¦«Update some examples and docs (#4682)»¦«Justin Ma»¦«hustcer@outlook.com»¦«Tue, 1 Mar 2022 21:05:29 +0800
2a89936b»¦«Move to latest stable crossterm, with fix (#4684)»¦«JT»¦«547158+jntrnr@users.noreply.github.com»¦«Tue, 1 Mar 2022 07:05:46 -0500
ece5e7db»¦«dataframe list command (#4681)»¦«Fernando Herrera»¦«fernando.j.herrera@gmail.com»¦«Tue, 1 Mar 2022 11:41:13 +0000
a6a96b29»¦«Add binary literals (#4680)»¦«JT»¦«547158+jntrnr@users.noreply.github.com»¦«Mon, 28 Feb 2022 18:31:53 -0500
e3100e6a»¦«Fix alias in \`docs/sample_config/config.toml\` (#4669)»¦«Luca Trevisani»¦«lucatrv@hotmail.com»¦«Mon, 28 Feb 2022 22:47:14 +0100
</code></pre></div><p>Ahh, much better. Now that we have the raw data, let&#39;s try to parse it with nu.</p><p>First we need to get it in lines or rows. Notice that the output is now in a table format.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token operator">|</span> lines
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬─────────────────────────────────────────────────────────────────────────────────────────────────
 0 │ 42f1874a»¦«Update some examples and docs (#4682)»¦«Justin Ma»¦«hustcer@outlook.com»¦«Tue, 1 Mar
   │ 2022 21:05:29 +0800
 1 │ 2a89936b»¦«Move to latest stable crossterm, with fix
   │ (#4684)»¦«JT»¦«547158+jntrnr@users.noreply.github.com»¦«Tue, 1 Mar 2022 07:05:46 -0500
 2 │ ece5e7db»¦«dataframe list command (#4681)»¦«Fernando
   │ Herrera»¦«fernando.j.herrera@gmail.com»¦«Tue, 1 Mar 2022 11:41:13 +0000
 3 │ a6a96b29»¦«Add binary literals (#4680)»¦«JT»¦«547158+jntrnr@users.noreply.github.com»¦«Mon, 28
   │ Feb 2022 18:31:53 -0500
 4 │ e3100e6a»¦«Fix alias in \`docs/sample_config/config.toml\` (#4669)»¦«Luca
   │ Trevisani»¦«lucatrv@hotmail.com»¦«Mon, 28 Feb 2022 22:47:14 +0100
───┴─────────────────────────────────────────────────────────────────────────────────────────────────
</code></pre></div><p>That&#39;s more like nushell, but it would be nice to have some columns.</p><p>We used the delimiter <code>»¦«</code> specifically so we can create columns so let&#39;s use it like this.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬──────────┬──────────────────────┬──────────────────┬──────────────────────┬──────────────────
 # │ column1  │       column2        │     column3      │       column4        │     column5
───┼──────────┼──────────────────────┼──────────────────┼──────────────────────┼──────────────────
 0 │ 42f1874a │ Update some examples │ Justin Ma        │ hustcer@outlook.com  │ Tue, 1 Mar 2022
   │          │ and docs (#4682)     │                  │                      │ 21:05:29 +0800
 1 │ 2a89936b │ Move to latest       │ JT               │ 547158+jntrnr@users. │ Tue, 1 Mar 2022
   │          │ stable crossterm,    │                  │ noreply.github.com   │ 07:05:46 -0500
   │          │ with fix (#4684)     │                  │                      │
 2 │ ece5e7db │ dataframe list       │ Fernando Herrera │ fernando.j.herrera@g │ Tue, 1 Mar 2022
   │          │ command (#4681)      │                  │ mail.com             │ 11:41:13 +0000
 3 │ a6a96b29 │ Add binary literals  │ JT               │ 547158+jntrnr@users. │ Mon, 28 Feb 2022
   │          │ (#4680)              │                  │ noreply.github.com   │ 18:31:53 -0500
 4 │ e3100e6a │ Fix alias in         │ Luca Trevisani   │ lucatrv@hotmail.com  │ Mon, 28 Feb 2022
   │          │ \`docs/sample_config/ │                  │                      │ 22:47:14 +0100
   │          │ config.toml\`         │                  │                      │
   │          │ (#4669)              │                  │                      │
───┴──────────┴──────────────────────┴──────────────────┴──────────────────────┴──────────────────
</code></pre></div><p>Yay, for columns! But wait, it would really be nice if those columns had something other than generically named column names.</p><p>Let&#39;s try adding the columns names to <code>split column</code> like this.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span>
</code></pre></div><p>Ahhh, that looks much better.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬──────────┬──────────────────────┬──────────────────┬──────────────────────┬──────────────────
 # │  commit  │       subject        │       name       │        email         │       date
───┼──────────┼──────────────────────┼──────────────────┼──────────────────────┼──────────────────
 0 │ 42f1874a │ Update some examples │ Justin Ma        │ hustcer@outlook.com  │ Tue, 1 Mar 2022
   │          │ and docs (#4682)     │                  │                      │ 21:05:29 +0800
 1 │ 2a89936b │ Move to latest       │ JT               │ 547158+jntrnr@users. │ Tue, 1 Mar 2022
   │          │ stable crossterm,    │                  │ noreply.github.com   │ 07:05:46 -0500
   │          │ with fix (#4684)     │                  │                      │
 2 │ ece5e7db │ dataframe list       │ Fernando Herrera │ fernando.j.herrera@g │ Tue, 1 Mar 2022
   │          │ command (#4681)      │                  │ mail.com             │ 11:41:13 +0000
 3 │ a6a96b29 │ Add binary literals  │ JT               │ 547158+jntrnr@users. │ Mon, 28 Feb 2022
   │          │ (#4680)              │                  │ noreply.github.com   │ 18:31:53 -0500
 4 │ e3100e6a │ Fix alias in         │ Luca Trevisani   │ lucatrv@hotmail.com  │ Mon, 28 Feb 2022
   │          │ \`docs/sample_config/ │                  │                      │ 22:47:14 +0100
   │          │ config.toml\`         │                  │                      │
   │          │ (#4669)              │                  │                      │
───┴──────────┴──────────────────────┴──────────────────┴──────────────────────┴──────────────────
</code></pre></div><p>Hmmm, that date string is a string. If it were a date vs a string it could be used for sorting by date. The way we do that is we have to convert the datetime to a real datetime and update the column. Try this.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span>
</code></pre></div><p>Now this looks more nu-ish</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬──────────┬──────────────────────────┬──────────────────┬──────────────────────────┬──────────────
 # │  commit  │         subject          │       name       │          email           │     date
───┼──────────┼──────────────────────────┼──────────────────┼──────────────────────────┼──────────────
 0 │ 42f1874a │ Update some examples and │ Justin Ma        │ hustcer@outlook.com      │ 7 hours ago
   │          │ docs (#4682)             │                  │                          │
 1 │ 2a89936b │ Move to latest stable    │ JT               │ 547158+jntrnr@users.nore │ 8 hours ago
   │          │ crossterm, with fix      │                  │ ply.github.com           │
   │          │ (#4684)                  │                  │                          │
 2 │ ece5e7db │ dataframe list command   │ Fernando Herrera │ fernando.j.herrera@gmail │ 8 hours ago
   │          │ (#4681)                  │                  │ .com                     │
 3 │ a6a96b29 │ Add binary literals      │ JT               │ 547158+jntrnr@users.nore │ 20 hours ago
   │          │ (#4680)                  │                  │ ply.github.com           │
 4 │ e3100e6a │ Fix alias in             │ Luca Trevisani   │ lucatrv@hotmail.com      │ a day ago
   │          │ \`docs/sample_config/conf │                  │                          │
   │          │ ig.toml\`                 │                  │                          │
   │          │ (#4669)                  │                  │                          │
───┴──────────┴──────────────────────────┴──────────────────┴──────────────────────────┴──────────────
</code></pre></div><p>If we want to revert back to a date string we can do something like this with the <code>nth</code> command and the <code>get</code> command.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">5</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token number">3</span> <span class="token operator">|</span> get <span class="token function">date</span> <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token operator">|</span> get <span class="token number">0</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>Mon, 28 Feb 2022 18:31:53 -0500
</code></pre></div><p>Cool! Now that we have a real datetime we can do some interesting things with it like <code>group-by</code> or <code>sort-by</code> or <code>where</code>. Let&#39;s try <code>sort-by</code> first</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by <span class="token function">date</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>────┬──────────┬──────────────────────────┬───────────────────┬─────────────────────────┬──────────────
 #  │  commit  │         subject          │       name        │          email          │     date
────┼──────────┼──────────────────────────┼───────────────────┼─────────────────────────┼──────────────
  0 │ 0c3ea636 │ Add support for stderr   │ JT                │ 547158+jntrnr@users.nor │ 4 days ago
    │          │ and exit code (#4647)    │                   │ eply.github.com         │
  1 │ ed46f0ea │ fix: add missing         │ Jae-Heon Ji       │ 32578710+jaeheonji@user │ 3 days ago
    │          │ metadata for \`ls_colors\` │                   │ s.noreply.github.com    │
    │          │ (#4603)                  │                   │                         │
  2 │ 3eca43c0 │ Plugins without file     │ Fernando Herrera  │ fernando.j.herrera@gmai │ 3 days ago
    │          │ (#4650)                  │                   │ l.com                   │
  3 │ 11bc0565 │ Find with regex flag     │ Fernando Herrera  │ fernando.j.herrera@gmai │ 3 days ago
    │          │ (#4649)                  │                   │ l.com                   │
  4 │ d2bd71d2 │ add LAST_EXIT_CODE       │ LordMZTE          │ lord@mzte.de            │ 3 days ago
    │          │ variable (#4655)         │                   │                         │
  5 │ 799fa984 │ Update reedline, revert  │ Stefan Holderbach │ sholderbach@users.norep │ 3 days ago
    │          │ crossterm (#4657)        │                   │ ly.github.com           │
  6 │ 995757c0 │ flags for find (#4663)   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │                          │                   │ l.com                   │
  7 │ 446c2aab │ Lets internals also      │ JT                │ 547158+jntrnr@users.nor │ 2 days ago
    │          │ have exit codes (#4664)  │                   │ eply.github.com         │
  8 │ 10ceac99 │ menu keybindings in      │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │ default file (#4651)     │                   │ l.com                   │
  9 │ 4ebbe07d │ Polars upgrade (#4665)   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │                          │                   │ l.com                   │
 10 │ 78192100 │ Add shortcircuiting      │ JT                │ 547158+jntrnr@users.nor │ 2 days ago
    │          │ boolean operators        │                   │ eply.github.com         │
    │          │ (#4668)                  │                   │                         │
 11 │ 796d4920 │ add char separators      │ Darren Schroeder  │ 343840+fdncred@users.no │ 2 days ago
    │          │ (#4667)                  │                   │ reply.github.com        │
 12 │ 0f437589 │ add last exit code to    │ Darren Schroeder  │ 343840+fdncred@users.no │ 2 days ago
    │          │ starship parameters      │                   │ reply.github.com        │
    │          │ (#4670)                  │                   │                         │
 13 │ ef70c8db │ Date parse refactor      │ Jonathan Moore    │ jtm170330@utdallas.edu  │ 2 days ago
    │          │ (#4661)                  │                   │                         │
 14 │ 10364c4f │ don&#39;t use table          │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ compaction in to nuon if │                   │ eply.github.com         │
    │          │ not a table (#4671)      │                   │                         │
 15 │ eec17304 │ Add profiling build      │ Stefan Holderbach │ sholderbach@users.norep │ a day ago
    │          │ profile and symbol strip │                   │ ly.github.com           │
    │          │ (#4630)                  │                   │                         │
 16 │ d6a6c4b0 │ Add back in default      │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ keybindings (#4673)      │                   │ eply.github.com         │
 17 │ 0924975b │ Use default_config.nu    │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ by default (#4675)       │                   │ eply.github.com         │
 18 │ b09acdb7 │ Fix unsupported type     │ Justin Ma         │ hustcer@outlook.com     │ a day ago
    │          │ message for some math    │                   │                         │
    │          │ related commands (#4672) │                   │                         │
 19 │ cb5c61d2 │ Fix open ended ranges    │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ (#4677)                  │                   │ eply.github.com         │
 20 │ e3100e6a │ Fix alias in             │ Luca Trevisani    │ lucatrv@hotmail.com     │ a day ago
    │          │ \`docs/sample_config/con  │                   │                         │
    │          │ fig.toml\`                │                   │                         │
    │          │ (#4669)                  │                   │                         │
 21 │ a6a96b29 │ Add binary literals      │ JT                │ 547158+jntrnr@users.nor │ 20 hours ago
    │          │ (#4680)                  │                   │ eply.github.com         │
 22 │ ece5e7db │ dataframe list command   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 8 hours ago
    │          │ (#4681)                  │                   │ l.com                   │
 23 │ 2a89936b │ Move to latest stable    │ JT                │ 547158+jntrnr@users.nor │ 8 hours ago
    │          │ crossterm, with fix      │                   │ eply.github.com         │
    │          │ (#4684)                  │                   │                         │
 24 │ 42f1874a │ Update some examples     │ Justin Ma         │ hustcer@outlook.com     │ 7 hours ago
    │          │ and docs (#4682)         │                   │                         │
────┴──────────┴──────────────────────────┴───────────────────┴─────────────────────────┴──────────────
</code></pre></div><p>That&#39;s neat but what if I want it sorted in the opposite order? Try the <code>reverse</code> command and notice the newest commits are at the top.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by <span class="token function">date</span> <span class="token operator">|</span> reverse
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>────┬──────────┬──────────────────────────┬───────────────────┬─────────────────────────┬──────────────
 #  │  commit  │         subject          │       name        │          email          │     date
────┼──────────┼──────────────────────────┼───────────────────┼─────────────────────────┼──────────────
  0 │ 42f1874a │ Update some examples     │ Justin Ma         │ hustcer@outlook.com     │ 7 hours ago
    │          │ and docs (#4682)         │                   │                         │
  1 │ 2a89936b │ Move to latest stable    │ JT                │ 547158+jntrnr@users.nor │ 8 hours ago
    │          │ crossterm, with fix      │                   │ eply.github.com         │
    │          │ (#4684)                  │                   │                         │
  2 │ ece5e7db │ dataframe list command   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 8 hours ago
    │          │ (#4681)                  │                   │ l.com                   │
  3 │ a6a96b29 │ Add binary literals      │ JT                │ 547158+jntrnr@users.nor │ 20 hours ago
    │          │ (#4680)                  │                   │ eply.github.com         │
  4 │ e3100e6a │ Fix alias in             │ Luca Trevisani    │ lucatrv@hotmail.com     │ a day ago
    │          │ \`docs/sample_config/con  │                   │                         │
    │          │ fig.toml\`                │                   │                         │
    │          │ (#4669)                  │                   │                         │
  5 │ cb5c61d2 │ Fix open ended ranges    │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ (#4677)                  │                   │ eply.github.com         │
  6 │ b09acdb7 │ Fix unsupported type     │ Justin Ma         │ hustcer@outlook.com     │ a day ago
    │          │ message for some math    │                   │                         │
    │          │ related commands (#4672) │                   │                         │
  7 │ 0924975b │ Use default_config.nu    │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ by default (#4675)       │                   │ eply.github.com         │
  8 │ d6a6c4b0 │ Add back in default      │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ keybindings (#4673)      │                   │ eply.github.com         │
  9 │ eec17304 │ Add profiling build      │ Stefan Holderbach │ sholderbach@users.norep │ a day ago
    │          │ profile and symbol strip │                   │ ly.github.com           │
    │          │ (#4630)                  │                   │                         │
 10 │ 10364c4f │ don&#39;t use table          │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ compaction in to nuon if │                   │ eply.github.com         │
    │          │ not a table (#4671)      │                   │                         │
 11 │ ef70c8db │ Date parse refactor      │ Jonathan Moore    │ jtm170330@utdallas.edu  │ 2 days ago
    │          │ (#4661)                  │                   │                         │
 12 │ 0f437589 │ add last exit code to    │ Darren Schroeder  │ 343840+fdncred@users.no │ 2 days ago
    │          │ starship parameters      │                   │ reply.github.com        │
    │          │ (#4670)                  │                   │                         │
 13 │ 796d4920 │ add char separators      │ Darren Schroeder  │ 343840+fdncred@users.no │ 2 days ago
    │          │ (#4667)                  │                   │ reply.github.com        │
 14 │ 78192100 │ Add shortcircuiting      │ JT                │ 547158+jntrnr@users.nor │ 2 days ago
    │          │ boolean operators        │                   │ eply.github.com         │
    │          │ (#4668)                  │                   │                         │
 15 │ 4ebbe07d │ Polars upgrade (#4665)   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │                          │                   │ l.com                   │
 16 │ 10ceac99 │ menu keybindings in      │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │ default file (#4651)     │                   │ l.com                   │
 17 │ 446c2aab │ Lets internals also      │ JT                │ 547158+jntrnr@users.nor │ 2 days ago
    │          │ have exit codes (#4664)  │                   │ eply.github.com         │
 18 │ 995757c0 │ flags for find (#4663)   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │                          │                   │ l.com                   │
 19 │ 799fa984 │ Update reedline, revert  │ Stefan Holderbach │ sholderbach@users.norep │ 3 days ago
    │          │ crossterm (#4657)        │                   │ ly.github.com           │
 20 │ d2bd71d2 │ add LAST_EXIT_CODE       │ LordMZTE          │ lord@mzte.de            │ 3 days ago
    │          │ variable (#4655)         │                   │                         │
 21 │ 11bc0565 │ Find with regex flag     │ Fernando Herrera  │ fernando.j.herrera@gmai │ 3 days ago
    │          │ (#4649)                  │                   │ l.com                   │
 22 │ 3eca43c0 │ Plugins without file     │ Fernando Herrera  │ fernando.j.herrera@gmai │ 3 days ago
    │          │ (#4650)                  │                   │ l.com                   │
 23 │ ed46f0ea │ fix: add missing         │ Jae-Heon Ji       │ 32578710+jaeheonji@user │ 3 days ago
    │          │ metadata for \`ls_colors\` │                   │ s.noreply.github.com    │
    │          │ (#4603)                  │                   │                         │
 24 │ 0c3ea636 │ Add support for stderr   │ JT                │ 547158+jntrnr@users.nor │ 4 days ago
    │          │ and exit code (#4647)    │                   │ eply.github.com         │
────┴──────────┴──────────────────────────┴───────────────────┴─────────────────────────┴──────────────
</code></pre></div><p>Now let&#39;s try <code>group-by</code> and see what happens. This is a tiny bit tricky because dates are tricky. When you use <code>group-by</code> on dates you have to remember to use the <code>group-by date</code> subcommand so it&#39;s <code>group-by date date_column_name</code>.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">}</span> <span class="token operator">|</span> group-by <span class="token function">date</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>────────────┬────────────────
 2022-03-01 │ [table 3 rows]
 2022-02-28 │ [table 8 rows]
 2022-02-27 │ [table 8 rows]
 2022-02-26 │ [table 5 rows]
 2022-02-25 │ [table 1 row]
────────────┴────────────────
</code></pre></div><p>This would look better if we transpose the data and name the columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">}</span> <span class="token operator">|</span> group-by <span class="token function">date</span> <span class="token operator">|</span> transpose <span class="token function">date</span> count
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬────────────┬────────────────
 # │    date    │     count
───┼────────────┼────────────────
 0 │ 2022-03-01 │ [table 3 rows]
 1 │ 2022-02-28 │ [table 8 rows]
 2 │ 2022-02-27 │ [table 8 rows]
 3 │ 2022-02-26 │ [table 5 rows]
 4 │ 2022-02-25 │ [table 1 row]
───┴────────────┴────────────────
</code></pre></div><p>How about <code>where</code> now? Show only the records that are less than a year old.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">365</span>day<span class="token punctuation">))</span></span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>────┬──────────┬──────────────────────────┬───────────────────┬─────────────────────────┬──────────────
 #  │  commit  │         subject          │       name        │          email          │     date
────┼──────────┼──────────────────────────┼───────────────────┼─────────────────────────┼──────────────
  0 │ 42f1874a │ Update some examples     │ Justin Ma         │ hustcer@outlook.com     │ 7 hours ago
    │          │ and docs (#4682)         │                   │                         │
  1 │ 2a89936b │ Move to latest stable    │ JT                │ 547158+jntrnr@users.nor │ 8 hours ago
    │          │ crossterm, with fix      │                   │ eply.github.com         │
    │          │ (#4684)                  │                   │                         │
  2 │ ece5e7db │ dataframe list command   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 8 hours ago
    │          │ (#4681)                  │                   │ l.com                   │
  3 │ a6a96b29 │ Add binary literals      │ JT                │ 547158+jntrnr@users.nor │ 21 hours ago
    │          │ (#4680)                  │                   │ eply.github.com         │
  4 │ e3100e6a │ Fix alias in             │ Luca Trevisani    │ lucatrv@hotmail.com     │ a day ago
    │          │ \`docs/sample_config/con  │                   │                         │
    │          │ fig.toml\`                │                   │                         │
    │          │ (#4669)                  │                   │                         │
  5 │ cb5c61d2 │ Fix open ended ranges    │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ (#4677)                  │                   │ eply.github.com         │
  6 │ b09acdb7 │ Fix unsupported type     │ Justin Ma         │ hustcer@outlook.com     │ a day ago
    │          │ message for some math    │                   │                         │
    │          │ related commands (#4672) │                   │                         │
  7 │ 0924975b │ Use default_config.nu    │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ by default (#4675)       │                   │ eply.github.com         │
  8 │ d6a6c4b0 │ Add back in default      │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ keybindings (#4673)      │                   │ eply.github.com         │
  9 │ eec17304 │ Add profiling build      │ Stefan Holderbach │ sholderbach@users.norep │ a day ago
    │          │ profile and symbol strip │                   │ ly.github.com           │
    │          │ (#4630)                  │                   │                         │
 10 │ 10364c4f │ don&#39;t use table          │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ compaction in to nuon if │                   │ eply.github.com         │
    │          │ not a table (#4671)      │                   │                         │
 11 │ ef70c8db │ Date parse refactor      │ Jonathan Moore    │ jtm170330@utdallas.edu  │ 2 days ago
    │          │ (#4661)                  │                   │                         │
 12 │ 0f437589 │ add last exit code to    │ Darren Schroeder  │ 343840+fdncred@users.no │ 2 days ago
    │          │ starship parameters      │                   │ reply.github.com        │
    │          │ (#4670)                  │                   │                         │
 13 │ 796d4920 │ add char separators      │ Darren Schroeder  │ 343840+fdncred@users.no │ 2 days ago
    │          │ (#4667)                  │                   │ reply.github.com        │
 14 │ 78192100 │ Add shortcircuiting      │ JT                │ 547158+jntrnr@users.nor │ 2 days ago
    │          │ boolean operators        │                   │ eply.github.com         │
    │          │ (#4668)                  │                   │                         │
 15 │ 4ebbe07d │ Polars upgrade (#4665)   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │                          │                   │ l.com                   │
 16 │ 10ceac99 │ menu keybindings in      │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │ default file (#4651)     │                   │ l.com                   │
 17 │ 446c2aab │ Lets internals also      │ JT                │ 547158+jntrnr@users.nor │ 2 days ago
    │          │ have exit codes (#4664)  │                   │ eply.github.com         │
 18 │ 995757c0 │ flags for find (#4663)   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │                          │                   │ l.com                   │
 19 │ 799fa984 │ Update reedline, revert  │ Stefan Holderbach │ sholderbach@users.norep │ 3 days ago
    │          │ crossterm (#4657)        │                   │ ly.github.com           │
 20 │ d2bd71d2 │ add LAST_EXIT_CODE       │ LordMZTE          │ lord@mzte.de            │ 3 days ago
    │          │ variable (#4655)         │                   │                         │
 21 │ 11bc0565 │ Find with regex flag     │ Fernando Herrera  │ fernando.j.herrera@gmai │ 3 days ago
    │          │ (#4649)                  │                   │ l.com                   │
 22 │ 3eca43c0 │ Plugins without file     │ Fernando Herrera  │ fernando.j.herrera@gmai │ 3 days ago
    │          │ (#4650)                  │                   │ l.com                   │
 23 │ ed46f0ea │ fix: add missing         │ Jae-Heon Ji       │ 32578710+jaeheonji@user │ 3 days ago
    │          │ metadata for \`ls_colors\` │                   │ s.noreply.github.com    │
    │          │ (#4603)                  │                   │                         │
 24 │ 0c3ea636 │ Add support for stderr   │ JT                │ 547158+jntrnr@users.nor │ 4 days ago
    │          │ and exit code (#4647)    │                   │ eply.github.com         │
────┴──────────┴──────────────────────────┴───────────────────┴─────────────────────────┴──────────────
...
</code></pre></div><p>Or even show me all the commits in the last 7 days.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token parameter variable">-n</span> <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">7</span>day<span class="token punctuation">))</span></span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>────┬──────────┬──────────────────────────┬───────────────────┬─────────────────────────┬──────────────
 #  │  commit  │         subject          │       name        │          email          │     date
────┼──────────┼──────────────────────────┼───────────────────┼─────────────────────────┼──────────────
  0 │ 42f1874a │ Update some examples     │ Justin Ma         │ hustcer@outlook.com     │ 7 hours ago
    │          │ and docs (#4682)         │                   │                         │
  1 │ 2a89936b │ Move to latest stable    │ JT                │ 547158+jntrnr@users.nor │ 8 hours ago
    │          │ crossterm, with fix      │                   │ eply.github.com         │
    │          │ (#4684)                  │                   │                         │
  2 │ ece5e7db │ dataframe list command   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 8 hours ago
    │          │ (#4681)                  │                   │ l.com                   │
  3 │ a6a96b29 │ Add binary literals      │ JT                │ 547158+jntrnr@users.nor │ 21 hours ago
    │          │ (#4680)                  │                   │ eply.github.com         │
  4 │ e3100e6a │ Fix alias in             │ Luca Trevisani    │ lucatrv@hotmail.com     │ a day ago
    │          │ \`docs/sample_config/con  │                   │                         │
    │          │ fig.toml\`                │                   │                         │
    │          │ (#4669)                  │                   │                         │
  5 │ cb5c61d2 │ Fix open ended ranges    │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ (#4677)                  │                   │ eply.github.com         │
  6 │ b09acdb7 │ Fix unsupported type     │ Justin Ma         │ hustcer@outlook.com     │ a day ago
    │          │ message for some math    │                   │                         │
    │          │ related commands (#4672) │                   │                         │
  7 │ 0924975b │ Use default_config.nu    │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ by default (#4675)       │                   │ eply.github.com         │
  8 │ d6a6c4b0 │ Add back in default      │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ keybindings (#4673)      │                   │ eply.github.com         │
  9 │ eec17304 │ Add profiling build      │ Stefan Holderbach │ sholderbach@users.norep │ a day ago
    │          │ profile and symbol strip │                   │ ly.github.com           │
    │          │ (#4630)                  │                   │                         │
 10 │ 10364c4f │ don&#39;t use table          │ JT                │ 547158+jntrnr@users.nor │ a day ago
    │          │ compaction in to nuon if │                   │ eply.github.com         │
    │          │ not a table (#4671)      │                   │                         │
 11 │ ef70c8db │ Date parse refactor      │ Jonathan Moore    │ jtm170330@utdallas.edu  │ 2 days ago
    │          │ (#4661)                  │                   │                         │
 12 │ 0f437589 │ add last exit code to    │ Darren Schroeder  │ 343840+fdncred@users.no │ 2 days ago
    │          │ starship parameters      │                   │ reply.github.com        │
    │          │ (#4670)                  │                   │                         │
 13 │ 796d4920 │ add char separators      │ Darren Schroeder  │ 343840+fdncred@users.no │ 2 days ago
    │          │ (#4667)                  │                   │ reply.github.com        │
 14 │ 78192100 │ Add shortcircuiting      │ JT                │ 547158+jntrnr@users.nor │ 2 days ago
    │          │ boolean operators        │                   │ eply.github.com         │
    │          │ (#4668)                  │                   │                         │
 15 │ 4ebbe07d │ Polars upgrade (#4665)   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │                          │                   │ l.com                   │
 16 │ 10ceac99 │ menu keybindings in      │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │ default file (#4651)     │                   │ l.com                   │
 17 │ 446c2aab │ Lets internals also      │ JT                │ 547158+jntrnr@users.nor │ 2 days ago
    │          │ have exit codes (#4664)  │                   │ eply.github.com         │
 18 │ 995757c0 │ flags for find (#4663)   │ Fernando Herrera  │ fernando.j.herrera@gmai │ 2 days ago
    │          │                          │                   │ l.com                   │
 19 │ 799fa984 │ Update reedline, revert  │ Stefan Holderbach │ sholderbach@users.norep │ 3 days ago
    │          │ crossterm (#4657)        │                   │ ly.github.com           │
 20 │ d2bd71d2 │ add LAST_EXIT_CODE       │ LordMZTE          │ lord@mzte.de            │ 3 days ago
    │          │ variable (#4655)         │                   │                         │
 21 │ 11bc0565 │ Find with regex flag     │ Fernando Herrera  │ fernando.j.herrera@gmai │ 3 days ago
    │          │ (#4649)                  │                   │ l.com                   │
 22 │ 3eca43c0 │ Plugins without file     │ Fernando Herrera  │ fernando.j.herrera@gmai │ 3 days ago
    │          │ (#4650)                  │                   │ l.com                   │
 23 │ ed46f0ea │ fix: add missing         │ Jae-Heon Ji       │ 32578710+jaeheonji@user │ 3 days ago
    │          │ metadata for \`ls_colors\` │                   │ s.noreply.github.com    │
    │          │ (#4603)                  │                   │                         │
 24 │ 0c3ea636 │ Add support for stderr   │ JT                │ 547158+jntrnr@users.nor │ 4 days ago
    │          │ and exit code (#4647)    │                   │ eply.github.com         │
────┴──────────┴──────────────────────────┴───────────────────┴─────────────────────────┴──────────────
</code></pre></div><p>Now, with the 365 day slice of data, let&#39;s <code>group-by</code> name where the commits are less than a year old. This table has a lot of columns so it&#39;s unreadable. However, if we <code>group-by</code> name and <code>transpose</code> the table things will look much cleaner. <code>Pivot</code> takes rows and turns them into columns or turns columns into rows.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">365</span>day<span class="token punctuation">))</span></span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>─────┬─────────────────────────────────┬──────────────────
  #  │             column0             │     column1
─────┼─────────────────────────────────┼──────────────────
   0 │ Justin Ma                       │ [table 21 rows]
   1 │ JT                              │ [table 851 rows]
   2 │ Fernando Herrera                │ [table 176 rows]
   3 │ Luca Trevisani                  │ [table 1 row]
   4 │ Stefan Holderbach               │ [table 19 rows]
   5 │ Jonathan Moore                  │ [table 2 rows]
   6 │ Darren Schroeder                │ [table 242 rows]
   7 │ LordMZTE                        │ [table 1 row]
   8 │ Jae-Heon Ji                     │ [table 10 rows]
   9 │ zkldi                           │ [table 1 row]
  10 │ Michael Angerman                │ [table 61 rows]
...
</code></pre></div><p>Side note: If you happen to get errors, pay attention to the error message. For instance, this error means that the data being returned from <code>git log</code> is somehow incomplete. Specifically, there is a missing date column. I&#39;ve seen git commands work perfectly on Windows and not work at all on Linux or Mac. I&#39;m not sure why. If you run into this issue, one easy way to temporarily avoid it is to limit <code>git log</code> results to a certain number like <code>git log -n 100</code>.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>error: Unknown column
  ┌─ shell:1:124
  │
1 │ git log --pretty=%h»¦«%s»¦«%aN»¦«%aE»¦«%aD | lines | split column &quot;»¦«&quot; commit subject name email date | upsert date {|d| $d.date | into datetime} | where ($it.date &gt; ((date now) - 365day))
  │                                                                                                                              ^^^^
  │                                                                                                                              │
  │                                                                                                                              There isn&#39;t a column named &#39;date&#39;
  │                                                                                                                              Perhaps you meant &#39;commit&#39;? Columns available: commit, subject
</code></pre></div><p>Here&#39;s one tip for dealing with this error. We have a <code>do</code> command that has an <code>--ignore_errors</code> parameter. This is how you&#39;d use it in the above example, if it were giving errors.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token keyword">do</span> <span class="token parameter variable">-i</span> <span class="token punctuation">{</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token punctuation">}</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">365</span>day<span class="token punctuation">))</span></span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose
</code></pre></div><p>Now, back to parsing. What if we throw in the <code>sort-by</code> and <code>reverse</code> commands for good measure? Also, while we&#39;re in there, let&#39;s get rid of the <code>[table 21 rows]</code> thing too. We do that by using the <code>length</code> command on each row of column1.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">365</span>day<span class="token punctuation">))</span></span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose <span class="token operator">|</span> upsert column1 <span class="token punctuation">{</span><span class="token operator">|</span>c<span class="token operator">|</span> <span class="token variable">$c</span>.column1 <span class="token operator">|</span> length<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by column1 <span class="token operator">|</span> reverse
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>─────┬─────────────────────────────────┬─────────
  #  │             column0             │ column1
─────┼─────────────────────────────────┼─────────
   0 │ JT                              │     851
   1 │ Darren Schroeder                │     242
   2 │ Fernando Herrera                │     176
   3 │ Jakub Žádník                    │     136
   4 │ Michael Angerman                │      61
   5 │ Andrés N. Robalino              │      29
   6 │ Luccas Mateus                   │      27
   7 │ Stefan Stanciulescu             │      27
   8 │ Jonathan Turner                 │      23
   9 │ Tanishq Kancharla               │      21
  10 │ Justin Ma                       │      21
  11 │ onthebridgetonowhere            │      20
  12 │ xiuxiu62                        │      19
...
</code></pre></div><p>This is still a lot of data so let&#39;s just look at the top 10 and use the <code>rename</code> command to name the columns. We could&#39;ve also provided the column names with the <code>transpose</code> command.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose <span class="token operator">|</span> upsert column1 <span class="token punctuation">{</span><span class="token operator">|</span>c<span class="token operator">|</span> <span class="token variable">$c</span>.column1 <span class="token operator">|</span> length<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by column1 <span class="token operator">|</span> <span class="token function">rename</span> name commits <span class="token operator">|</span> reverse <span class="token operator">|</span> first <span class="token number">10</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬────────────────────┬─────────
 # │        name        │ commits
───┼────────────────────┼─────────
 0 │ Jonathan Turner    │    1420
 1 │ JT                 │     851
 2 │ Andrés N. Robalino │     383
 3 │ Darren Schroeder   │     380
 4 │ Fernando Herrera   │     176
 5 │ Yehuda Katz        │     165
 6 │ Jakub Žádník       │     140
 7 │ Joseph T. Lyons    │      87
 8 │ Michael Angerman   │      71
 9 │ Jason Gedge        │      67
───┴────────────────────┴─────────
</code></pre></div><p>And there you have it. The top 10 committers and we learned a little bit of parsing along the way.</p><p>Here&#39;s one last little known command. Perhaps you don&#39;t want your table numbered starting with 0. Here&#39;s a way to change that with the <code>table</code> command.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>%h»¦«%s»¦«%aN»¦«%aE»¦«%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;»¦«&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose <span class="token operator">|</span> upsert column1 <span class="token punctuation">{</span><span class="token operator">|</span>c<span class="token operator">|</span> <span class="token variable">$c</span>.column1 <span class="token operator">|</span> length<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by column1 <span class="token operator">|</span> <span class="token function">rename</span> name commits <span class="token operator">|</span> reverse <span class="token operator">|</span> first <span class="token number">10</span> <span class="token operator">|</span> table <span class="token parameter variable">-n</span> <span class="token number">1</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>────┬────────────────────┬─────────
 #  │        name        │ commits
────┼────────────────────┼─────────
  1 │ Jonathan Turner    │    1420
  2 │ JT                 │     851
  3 │ Andrés N. Robalino │     383
  4 │ Darren Schroeder   │     380
  5 │ Fernando Herrera   │     176
  6 │ Yehuda Katz        │     165
  7 │ Jakub Žádník       │     140
  8 │ Joseph T. Lyons    │      87
  9 │ Michael Angerman   │      71
 10 │ Jason Gedge        │      67
</code></pre></div><p>Created on 11/9/2020 with Nushell on Windows 10. Updated on 3/1/2022 with Nushell on Windows 10.</p><table><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>version</td><td>0.59.0</td></tr><tr><td>branch</td><td>main</td></tr><tr><td>short_commit</td><td>b09acdb7</td></tr><tr><td>commit_hash</td><td>b09acdb7f98ec9694cfb223222577bc02ebba4a4</td></tr><tr><td>commit_date</td><td>2022-02-28 15:14:33 +00:00</td></tr><tr><td>build_os</td><td>windows-x86_64</td></tr><tr><td>rust_version</td><td>rustc 1.59.0 (9d1b2106e 2022-02-23)</td></tr><tr><td>rust_channel</td><td>stable-x86_64-pc-windows-msvc</td></tr><tr><td>cargo_version</td><td>cargo 1.59.0 (49d8809dc 2022-02-10)</td></tr><tr><td>pkg_version</td><td>0.59.0</td></tr><tr><td>build_time</td><td>2022-02-28 16:16:00 -06:00</td></tr><tr><td>build_rust_channel</td><td>debug</td></tr><tr><td>features</td><td>dataframe, default, trash, which, zip</td></tr><tr><td>installed_plugins</td><td>gstat</td></tr></tbody></table>`,67),r=[o];function p(c,l){return n(),s("div",null,r)}const i=a(t,[["render",p],["__file","parsing_git_log.html.vue"]]);export{i as default};
