import{_ as l,z as c,A as i,X as t,C as n,T as s,$ as o,a6 as a,Q as p}from"./framework.3d018c9f.js";const d={},u=t("h1",{id:"加载数据",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#加载数据","aria-hidden":"true"},"#"),n(" 加载数据")],-1),r=t("code",null,"ls",-1),m=t("code",null,"ps",-1),g=t("code",null,"date",-1),_=t("code",null,"sys",-1),h=t("h2",{id:"打开文件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#打开文件","aria-hidden":"true"},"#"),n(" 打开文件")],-1),k=t("code",null,"open",-1),x=t("div",{class:"language-text","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`> open editors/vscode/package.json
──────────────────┬───────────────────────────────────────────────────────────────────────────────
 name             │ lark
 description      │ Lark support for VS Code
 author           │ Lark developers
 license          │ MIT
 version          │ 1.0.0
 repository       │ [row type url]
 publisher        │ vscode
 categories       │ [table 0 rows]
 keywords         │ [table 1 rows]
 engines          │ [row vscode]
 activationEvents │ [table 1 rows]
 main             │ ./out/extension
 contributes      │ [row configuration grammars languages]
 scripts          │ [row compile postinstall test vscode:prepublish watch]
 devDependencies  │ [row @types/mocha @types/node tslint typescript vscode vscode-languageclient]
──────────────────┴───────────────────────────────────────────────────────────────────────────────
`)])],-1),v=t("code",null,"ls",-1),f=t("code",null,"get",-1),b=a(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu 目前支持直接从以下格式加载表数据：</p><ul><li>csv</li><li>eml</li><li>ics</li><li>ini</li><li>json</li><li>nuon</li><li>ods</li><li>ssv</li><li>toml</li><li>tsv</li><li>url</li><li>vcf</li><li>xlsx / xls</li><li>xml</li><li>yaml / yml</li></ul><p>但是，当你加载其他的文本文件时会发生什么呢？让我们试一试：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> README.md
</code></pre></div><p>我们会看到该文件的内容。</p><p>本质上，这些文本文件对 Nu 来说就是一个大字符串。接下来，我们将讨论如何处理这些字符串，以便从中获得我们需要的数据。</p><h2 id="处理字符串" tabindex="-1"><a class="header-anchor" href="#处理字符串" aria-hidden="true">#</a> 处理字符串</h2><p>处理来自 Nu 外部数据时一个普遍情况是，它并不总是以 Nu 理解的格式出现。通常这些数据是以字符串的形式提供给我们的。</p><p>想象一下，我们得到了这个数据文件：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>我们想要的数据都由管道（<code>|</code>）符号隔开，每人单独一行。由于 Nu 没有默认的以管道分隔的文件格式，所以我们必须自己来解析。</p><p>当我们引入这个文件时，我们需要做的第一件事是确保后续每次只处理一行：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines
───┬──────────────────────────────
 0 │ Octavia | Butler | Writer
 1 │ Bob | Ross | Painter
 2 │ Antonio | Vivaldi | Composer
───┴──────────────────────────────
</code></pre></div>`,14),y=t("code",null,"split",-1),q=t("code",null,"split",-1),w=t("code",null,"split",-1),B=t("code",null,"column",-1),C=t("div",{class:"language-text","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`> open people.txt | lines | split column "|"
───┬──────────┬───────────┬───────────
 # │ column1  │ column2   │ column3
───┼──────────┼───────────┼───────────
 0 │ Octavia  │  Butler   │  Writer
 1 │ Bob      │  Ross     │  Painter
 2 │ Antonio  │  Vivaldi  │  Composer
───┴──────────┴───────────┴───────────
`)])],-1),N=t("code",null,"trim",-1),R=t("div",{class:"language-text","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`> open people.txt | lines | split column "|" | str trim
───┬─────────┬─────────┬──────────
 # │ column1 │ column2 │ column3
───┼─────────┼─────────┼──────────
 0 │ Octavia │ Butler  │ Writer
 1 │ Bob     │ Ross    │ Painter
 2 │ Antonio │ Vivaldi │ Composer
───┴─────────┴─────────┴──────────
`)])],-1),V=t("code",null,"split",-1),A=a(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get column1
───┬─────────
 0 │ Octavia
 1 │ Bob
 2 │ Antonio
───┴─────────
</code></pre></div><p>我们也可以用自定义的列名代替默认的：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Octavia    │ Butler    │ Writer
 1 │ Bob        │ Ross      │ Painter
 2 │ Antonio    │ Vivaldi   │ Composer
───┴────────────┴───────────┴──────────
</code></pre></div><p>现在，我们的数据加载到一个表中了，我们可以使用之前对表所用的各种命令来处理它：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim | sort-by first_name
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Antonio    │ Vivaldi   │ Composer
 1 │ Bob        │ Ross      │ Painter
 2 │ Octavia    │ Butler    │ Writer
───┴────────────┴───────────┴──────────
</code></pre></div><p>其他可用于字符串的命令有：</p>`,6),j=t("li",null,[t("code",null,"str")],-1),O=t("code",null,"lines",-1),L=t("code",null,"size",-1),P=a(`<p>如果我们已经知道待处理的数据具有 Nu 能够理解的格式，则可以使用一些辅助命令，例如，我们打开一个 Rust 的 Cargo.lock 文件：</p><div class="language-toml" data-ext="toml"><pre class="language-toml"><code>&gt; open Cargo<span class="token punctuation">.</span>lock
<span class="token comment"># This file is automatically @generated by Cargo.</span>
<span class="token comment"># It is not intended for manual editing.</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">package</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;adhoc_derive&quot;</span>
<span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.2&quot;</span>
</code></pre></div><p>&quot;Cargo.lock&quot; 实际上是一个 .toml 文件，但是文件扩展名不是 .toml。没关系，我们可以使用 <code>from toml</code> 命令：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.lock | from toml
──────────┬───────────────────
 metadata │ [row 107 columns]
 package  │ [table 130 rows]
──────────┴───────────────────
</code></pre></div><p>每种 Nu 能打开并理解的结构化数据文本格式都有对应的 <code>from</code> 命令可以使用，只需要把支持的格式作为子命令传给 <code>from</code> 就可以了。</p><h2 id="以原始模式打开" tabindex="-1"><a class="header-anchor" href="#以原始模式打开" aria-hidden="true">#</a> 以原始模式打开</h2>`,6),T=t("code",null,"open",-1),W=t("code",null,"--raw",-1),S=a(`<div class="language-toml" data-ext="toml"><pre class="language-toml"><code>&gt; open Cargo<span class="token punctuation">.</span>toml --raw
<span class="token punctuation">[</span><span class="token table class-name">package</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;nu&quot;</span>
<span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.1.3&quot;</span>
<span class="token key property">authors</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Yehuda Katz &lt;wycats@gmail.com&gt;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Jonathan Turner &lt;jonathan.d.turner@gmail.com&gt;&quot;</span><span class="token punctuation">]</span>
<span class="token key property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;A shell for the GitHub era&quot;</span>
<span class="token key property">license</span> <span class="token punctuation">=</span> <span class="token string">&quot;MIT&quot;</span>
</code></pre></div><h2 id="获取-urls" tabindex="-1"><a class="header-anchor" href="#获取-urls" aria-hidden="true">#</a> 获取 URLs</h2>`,2),z=t("code",null,"fetch",-1),E=t("div",{class:"language-text","data-ext":"text"},[t("pre",{class:"language-text"},[t("code",null,`> fetch https://blog.rust-lang.org/feed.xml
──────┬───────────────────
 feed │ {record 2 fields}
──────┴───────────────────
`)])],-1);function J(I,M){const e=p("RouterLink");return c(),i("div",null,[u,t("p",null,[n("之前我们使用了"),s(e,{to:"/book/commands/ls.html"},{default:o(()=>[r]),_:1}),n("、"),s(e,{to:"/book/commands/ps.html"},{default:o(()=>[m]),_:1}),n("、"),s(e,{to:"/book/commands/date.html"},{default:o(()=>[g]),_:1}),n("和"),s(e,{to:"/book/commands/sys.html"},{default:o(()=>[_]),_:1}),n("等命令来加载关于文件、进程、日期时间和系统本身的信息。每条命令都会给我们提供一个信息表，以对其进行探索。我们也可以通过其他方式将数据载入表格以供使用。")]),h,t("p",null,[n("Nu 在处理数据方面最强大的能力之一是"),s(e,{to:"/book/commands/open.html"},{default:o(()=>[k]),_:1}),n("命令。它是一个多功能命令，可以处理许多不同的数据格式。为了说明这一点让我们试着打开一个 JSON 文件：")]),x,t("p",null,[n("与"),s(e,{to:"/book/commands/ls.html"},{default:o(()=>[v]),_:1}),n('类似，打开一个 Nu 支持的文件类型，会返回一些不仅仅是文本（或一个字节流）的东西。这里我们打开了一个来自 JavaScript 项目的 "package.json" 文件。Nu 可以识别 JSON 文本并将其解析为一个数据表。')]),t("p",null,[n("如果我们想查看当前项目的版本，我们可以使用"),s(e,{to:"/book/commands/get.html"},{default:o(()=>[f]),_:1}),n("命令：")]),b,t("p",null,[n("可以看到，我们正在处理这些行，因为我们又回到了一个表中。下一步是看看是否可以把行分割成更有用的东西。为此，我们将使用"),s(e,{to:"/book/commands/split.html"},{default:o(()=>[y]),_:1}),n("命令。"),s(e,{to:"/book/commands/split.html"},{default:o(()=>[q]),_:1}),n("，顾名思义，为我们提供了一种分割字符串的方法。我们将使用"),s(e,{to:"/book/commands/split.html"},{default:o(()=>[w]),_:1}),n("的"),B,n("子命令，将内容分成多列。我们会告诉它分隔符是什么，剩下的就由它来完成：")]),C,t("p",null,[n("这看起来差不多了，只是还有一些额外的空白字符，让我们 "),s(e,{to:"/book/commands/str_trim.html"},{default:o(()=>[N]),_:1}),n(" 掉这些空格：")]),R,t("p",null,[n("还不错，"),s(e,{to:"/book/commands/split.html"},{default:o(()=>[V]),_:1}),n("命令返回给我们可以使用的数据，还预设了默认的列名：")]),A,t("ul",null,[j,t("li",null,[s(e,{to:"/book/commands/lines.html"},{default:o(()=>[O]),_:1})]),t("li",null,[s(e,{to:"/book/commands/size.html"},{default:o(()=>[L]),_:1})])]),P,t("p",null,[n("虽然能够打开一个文件并立即使用其数据表很有帮助，但这并不总是我们想要的。为了获得原始文本，"),s(e,{to:"/book/commands/open.html"},{default:o(()=>[T]),_:1}),n("命令可以接受一个可选的"),W,n("标志：")]),S,t("p",null,[n("除了从文件系统中加载文件，你还可以通过使用"),s(e,{to:"/book/commands/fetch.html"},{default:o(()=>[z]),_:1}),n("命令来加载 URLs。这将从互联网上获取 URL 的内容并返回：")]),E])}const D=l(d,[["render",J],["__file","loading_data.html.vue"]]);export{D as default};
