import{_ as l,M as p,p as c,q as d,Q as s,t as a,N as e,U as t,a1 as o}from"./framework-344bb0e4.js";const i={},r=o(`<h1 id="处理表格" tabindex="-1"><a class="header-anchor" href="#处理表格" aria-hidden="true">#</a> 处理表格</h1><p>在 Nu 中查看数据的一种常见方式是通过表格。Nu 提供了许多处理表格的命令以方便找到你想要的内容以及将数据缩小到你需要的范围。</p><p>首先，让我们获得一个可用的表：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ files.rs      │ File │  4.6 KB │ 5 days ago
 1 │ lib.rs        │ File │   330 B │ 5 days ago
 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago
 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago
 4 │ path.rs       │ File │  2.1 KB │ 5 days ago
 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago
───┴───────────────┴──────┴─────────┴────────────
</code></pre></div><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h2>`,5),u=s("code",null,"sort-by",-1),g=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`> ls | sort-by size
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ lib.rs        │ File │   330 B │ 5 days ago
 1 │ signature.rs  │ File │  1.2 KB │ 5 days ago
 2 │ path.rs       │ File │  2.1 KB │ 5 days ago
 3 │ files.rs      │ File │  4.6 KB │ 5 days ago
 4 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
 5 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago
 6 │ parse.rs      │ File │ 49.8 KB │ 1 day ago
───┴───────────────┴──────┴─────────┴────────────
`)])],-1),h=s("p",null,'我们可以通过任何可以比较的列来对一个表进行排序。例如，我们也可以用 "name", "accessed" 或者 "modified" 列对上述内容进行排序。',-1),m=s("h2",{id:"选取",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#选取","aria-hidden":"true"},"#"),a(" 选取")],-1),_=s("code",null,"select",-1),k=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | select name size
───┬───────────────┬─────────
 # │ name          │ size
───┼───────────────┼─────────
 0 │ files.rs      │  4.6 KB
 1 │ lib.rs        │   330 B
 2 │ lite_parse.rs │  6.3 KB
 3 │ parse.rs      │ 49.8 KB
 4 │ path.rs       │  2.1 KB
 5 │ shapes.rs     │  4.7 KB
 6 │ signature.rs  │  1.2 KB
───┴───────────────┴─────────
</code></pre></div><p>这有助于创建一个更专注于我们所需的表格。接下来，假设我们只想看这个目录中最小的 5 个文件：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5
───┬──────────────┬──────┬────────┬────────────
 # │ name         │ type │ size   │ modified
───┼──────────────┼──────┼────────┼────────────
 0 │ lib.rs       │ File │  330 B │ 5 days ago
 1 │ signature.rs │ File │ 1.2 KB │ 5 days ago
 2 │ path.rs      │ File │ 2.1 KB │ 5 days ago
 3 │ files.rs     │ File │ 4.6 KB │ 5 days ago
 4 │ shapes.rs    │ File │ 4.7 KB │ 5 days ago
───┴──────────────┴──────┴────────┴────────────
</code></pre></div><p>你会注意到我们首先按大小对表进行排序以得到最小的文件，然后我们用<code>first 5</code>来返回表的前 5 行。</p><p>你也可以跳过(<code>skip</code>)不需要的行，让我们跳过上面所得 5 行中的前两行：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5 | skip 2
───┬───────────┬──────┬────────┬────────────
 # │ name      │ type │ size   │ modified
───┼───────────┼──────┼────────┼────────────
 0 │ path.rs   │ File │ 2.1 KB │ 5 days ago
 1 │ files.rs  │ File │ 4.6 KB │ 5 days ago
 2 │ shapes.rs │ File │ 4.7 KB │ 5 days ago
───┴───────────┴──────┴────────┴────────────
</code></pre></div><p>我们已将其缩小为我们关心的三行。</p><p>让我们看看其他几个用于选择数据的命令。您可能想知道为什么选取表格的行是通过数字，这是选择单行数据的便捷方式。让我们按文件名对表进行排序，然后使用 <code>select</code> 命令通过行号来选择其中的一行：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by name
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ files.rs      │ File │  4.6 KB │ 5 days ago
 1 │ lib.rs        │ File │   330 B │ 5 days ago
 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago
 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago
 4 │ path.rs       │ File │  2.1 KB │ 5 days ago
 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago
───┴───────────────┴──────┴─────────┴────────────

&gt; ls | sort-by name | select 5
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
───┴───────────────┴──────┴─────────┴────────────
</code></pre></div><h2 id="从表格提取数据" tabindex="-1"><a class="header-anchor" href="#从表格提取数据" aria-hidden="true">#</a> 从表格提取数据</h2>`,10),x=s("code",null,"get",-1),b=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`> ls | get name
───┬───────────────
 0 │ files.rs
 1 │ lib.rs
 2 │ lite_parse.rs
 3 │ parse.rs
 4 │ path.rs
 5 │ shapes.rs
 6 │ signature.rs
───┴───────────────
`)])],-1),f=s("p",null,"现在我们获得了每一个文件的文件名。",-1),v=s("code",null,"select",-1),y=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`> ls | select name
───┬───────────────
 # │ name
───┼───────────────
 0 │ files.rs
 1 │ lib.rs
 2 │ lite_parse.rs
 3 │ parse.rs
 4 │ path.rs
 5 │ shapes.rs
 6 │ signature.rs
───┴───────────────
`)])],-1),B=s("p",null,"这看起来非常相似！让我们看看能不能把这两个命令的区别说清楚：",-1),K=s("code",null,"select",-1),F=s("code",null,"get",-1),$=s("p",null,"区分这些表格的方法是 —— 列名没有了，也让我们知道这是一个我们可以处理的值的列表。",-1),z=s("code",null,"get",-1),w=s("h2",{id:"修改表格数据",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#修改表格数据","aria-hidden":"true"},"#"),a(" 修改表格数据")],-1),N=s("p",null,"除了从表中选择数据外，还可以更新其中的数据。我们可能想合并表格，添加新的列，或编辑单元格的内容等。在 Nushell 中，本节中的每个命令都会在管道中返回一个新的表而非对原表进行编辑。",-1),D=s("h3",{id:"拼接表格",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#拼接表格","aria-hidden":"true"},"#"),a(" 拼接表格")],-1),q=s("code",null,"append",-1),V=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`> let $first = [[a b]; [1 2]]
> let $second = [[a b]; [3 4]]
> $first | append $second
───┬───┬───
 # │ a │ b
───┼───┼───
 0 │ 1 │ 2
 1 │ 3 │ 4
───┴───┴───
`)])],-1),A=s("h3",{id:"合并表格",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#合并表格","aria-hidden":"true"},"#"),a(" 合并表格")],-1),C=s("code",null,"merge",-1),L=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$first</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$second</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>c d<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span> <span class="token variable">$first</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token variable">$second</span> <span class="token punctuation">}</span>
───┬───┬───┬───┬───
 <span class="token comment"># │ a │ b │ c │ d</span>
───┼───┼───┼───┼───
 <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │ <span class="token number">4</span>
───┴───┴───┴───┴───
</code></pre></div><p>让我们再加一个表格吧：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$third</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>e f<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre></div><p>我们可以将以上三个表格合并在一起，操作如下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$first</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token variable">$second</span> <span class="token punctuation">}</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token variable">$third</span> <span class="token punctuation">}</span>
───┬───┬───┬───┬───┬───┬───
 <span class="token comment"># │ a │ b │ c │ d │ e │ f</span>
───┼───┼───┼───┼───┼───┼───
 <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │ <span class="token number">5</span> │ <span class="token number">6</span>
───┴───┴───┴───┴───┴───┴───
</code></pre></div>`,5),R=s("code",null,"reduce",-1),j=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token variable">$first</span> <span class="token variable">$second</span> <span class="token variable">$third</span><span class="token punctuation">]</span> <span class="token operator">|</span> reduce <span class="token punctuation">{</span><span class="token operator">|</span>it, acc<span class="token operator">|</span> <span class="token variable">$acc</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token variable">$it</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
───┬───┬───┬───┬───┬───┬───
 <span class="token comment"># │ a │ b │ c │ d │ e │ f</span>
───┼───┼───┼───┼───┼───┼───
 <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │ <span class="token number">5</span> │ <span class="token number">6</span>
───┴───┴───┴───┴───┴───┴───
</code></pre></div><h3 id="添加新列" tabindex="-1"><a class="header-anchor" href="#添加新列" aria-hidden="true">#</a> 添加新列</h3>`,2),E=s("code",null,"insert",-1),M=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
</code></pre></div><p>让我们添加一个名为 &quot;next_edition&quot; 的列并将 2021 作为值：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021
──────────────┬──────
 edition      │ 2018
 next_edition │ 2021
──────────────┴──────
</code></pre></div><p>注意，我们如果打开原始文件，会发现内容没变：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
</code></pre></div>`,5),Q=s("code",null,"save",-1),S=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`> open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml
> open rustfmt2.toml
──────────────┬──────
 edition      │ 2018
 next_edition │ 2021
──────────────┴──────
`)])],-1),T=s("h3",{id:"更新一列",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#更新一列","aria-hidden":"true"},"#"),a(" 更新一列")],-1),U=s("code",null,"insert",-1),G=s("code",null,"update",-1),H=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`> open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
`)])],-1),I=s("p",null,"现在，用我们希望支持的下一个版本更新 edition：",-1),J=s("div",{class:"language-text","data-ext":"text"},[s("pre",{class:"language-text"},[s("code",null,`> open rustfmt.toml | update edition 2021
─────────┬──────
 edition │ 2021
─────────┴──────
`)])],-1),O=s("code",null,"upsert",-1),P=o(`<h3 id="移动列" tabindex="-1"><a class="header-anchor" href="#移动列" aria-hidden="true">#</a> 移动列</h3><p>你可以使用<code>move</code>来移动表中的列。例如，如果想把<code>ls</code>中的 &quot;name&quot; 列移到 &quot;size&quot; 列之后，我们可以这样做：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | move name --after size
╭────┬──────┬─────────┬───────────────────┬──────────────╮
│ #  │ type │  size   │       name        │   modified   │
├────┼──────┼─────────┼───────────────────┼──────────────┤
│  0 │ dir  │   256 B │ Applications      │ 3 days ago   │
│  1 │ dir  │   256 B │ Data              │ 2 weeks ago  │
│  2 │ dir  │   448 B │ Desktop           │ 2 hours ago  │
│  3 │ dir  │   192 B │ Disks             │ a week ago   │
│  4 │ dir  │   416 B │ Documents         │ 4 days ago   │
...
</code></pre></div><h3 id="重命名列" tabindex="-1"><a class="header-anchor" href="#重命名列" aria-hidden="true">#</a> 重命名列</h3><p>你也可以通过<code>rename</code>命令对表中的列进行<strong>重命名</strong>。我们可以使用这个例子来运行<code>ls</code>并重命名这些列：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | rename filename filetype filesize date
╭────┬───────────────────┬──────────┬──────────┬──────────────╮
│ #  │     filename      │ filetype │ filesize │     date     │
├────┼───────────────────┼──────────┼──────────┼──────────────┤
│  0 │ Applications      │ dir      │    256 B │ 3 days ago   │
│  1 │ Data              │ dir      │    256 B │ 2 weeks ago  │
│  2 │ Desktop           │ dir      │    448 B │ 2 hours ago  │
│  3 │ Disks             │ dir      │    192 B │ a week ago   │
│  4 │ Documents         │ dir      │    416 B │ 4 days ago   │
...
</code></pre></div>`,6);function W(X,Y){const n=p("RouterLink");return c(),d("div",null,[r,s("p",null,[a("我们可以通过调用"),e(n,{to:"/commands/docs/sort-by.html"},{default:t(()=>[u]),_:1}),a("命令对一个表进行排序，并指定需要排序的列。比如，按照文件的大小对表格进行排序：")]),g,h,m,s("p",null,[a("我们可以从表中通过选择特定的列或行来获得数据。让我们从表中选择（"),e(n,{to:"/commands/docs/select.html"},{default:t(()=>[_]),_:1}),a("）几列吧：")]),k,s("p",null,[a("到目前为止，我们在处理表格时都是将表格修剪成我们需要的样子。有时我们可能想更进一步，只看单元格本身的值，而不是取整列。比如，我们只想得到一个包含所有文件名的列表。在此，我们使用"),e(n,{to:"/commands/docs/get.html"},{default:t(()=>[x]),_:1}),a(" 命令：")]),b,f,s("p",null,[a("这可能看起来很像我们之前使用的"),e(n,{to:"/commands/docs/select.html"},{default:t(()=>[v]),_:1}),a("命令，所以也把它放在这里以便于比较：")]),y,B,s("ul",null,[s("li",null,[e(n,{to:"/commands/docs/select.html"},{default:t(()=>[K]),_:1}),a(" - 创建一个只包括指定列的新表；")]),s("li",null,[e(n,{to:"/commands/docs/get.html"},{default:t(()=>[F]),_:1}),a(" - 以列表形式返回指定列内的值；")])]),$,s("p",null,[e(n,{to:"/commands/docs/get.html"},{default:t(()=>[z]),_:1}),a("命令可以更进一步，它可以接受表中更深的数据路径。这简化了对复杂数据的处理，比如那些你可能在.json 文件中发现的结构。")]),w,N,D,s("p",null,[a("我们可以使用"),e(n,{to:"/commands/docs/append.html"},{default:t(()=>[q]),_:1}),a("将列名相同的表拼接起来：")]),V,A,s("p",null,[a("我们可以使用"),e(n,{to:"/commands/docs/merge.html"},{default:t(()=>[C]),_:1}),a("命令将两个（或多个）表格合并在一起：")]),L,s("p",null,[a("或者我们可以使用"),e(n,{to:"/commands/docs/reduce.html"},{default:t(()=>[R]),_:1}),a("命令来动态地合并所有的表格：")]),j,s("p",null,[a("我们可以使用"),e(n,{to:"/commands/docs/insert.html"},{default:t(()=>[E]),_:1}),a("命令在表中增加新列，让我们看一个例子：")]),M,s("p",null,[a("Nu 的更改是函数性更改，这意味着它们只在值上起作用，而不是试图引起永久性变更。这使我们可以在管道中进行许多不同类型的操作直到我们准备好将结果输出(如果我们选择这样做的话)。这里我们可以使用 "),e(n,{to:"/commands/docs/save.html"},{default:t(()=>[Q]),_:1}),a(" 命令保存结果：")]),S,T,s("p",null,[a("与"),e(n,{to:"/commands/docs/insert.html"},{default:t(()=>[U]),_:1}),a("命令类似，我们也可以使用"),e(n,{to:"/commands/docs/update.html"},{default:t(()=>[G]),_:1}),a("命令将某一列的内容修改为新值。为了看看效果，让我们打开同一个文件：")]),H,I,J,s("p",null,[a("你也可以使用"),e(n,{to:"/commands/docs/upsert.html"},{default:t(()=>[O]),_:1}),a("命令来插入或更新，这取决于该列是否已经存在。")]),P])}const ss=l(i,[["render",W],["__file","working_with_tables.html.vue"]]);export{ss as default};
