import{_ as p,M as l,p as c,q as u,Q as s,t as n,N as e,U as t,a1 as o}from"./framework-344bb0e4.js";const i={},r=s("h1",{id:"介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),n(" 介绍")],-1),d=s("p",null,"你好，欢迎来到 Nushell 项目。这个项目的目标是继承 Unix Shell 中用管道把简单的命令连接在一起的理念，并将其带到更具现代风格的开发中。",-1),m=s("p",null,"Nu 汲取了很多常见领域的灵感：传统 Shell 比如 Bash、基于对象的 Shell 比如 PowerShell、逐步类型化的语言比如 TypeScript、函数式编程、系统编程，等等。但是，Nu 并不试图成为万金油，而是把精力集中在做好这几件事上:",-1),k=s("ul",null,[s("li",null,"作为一个具有现代感的灵活的跨平台 Shell；"),s("li",null,"作为一种现代的编程语言，解决与数据有关的问题；"),s("li",null,"给予清晰的错误信息和干净的 IDE 支持；")],-1),h=s("p",null,"了解 Nu 能做什么的最简单的方法是从一些例子开始，所以让我们深入了解一下。",-1),b=s("code",null,"ls",-1),_=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
╭────┬───────────────────────┬──────┬───────────┬─────────────╮
│ <span class="token comment">#  │         name          │ type │   size    │  modified   │</span>
├────┼───────────────────────┼──────┼───────────┼─────────────┤
│  <span class="token number">0</span> │ <span class="token number">404</span>.html              │ <span class="token function">file</span> │     <span class="token number">429</span> B │ <span class="token number">3</span> days ago  │
│  <span class="token number">1</span> │ CONTRIBUTING.md       │ <span class="token function">file</span> │     <span class="token number">955</span> B │ <span class="token number">8</span> mins ago  │
│  <span class="token number">2</span> │ Gemfile               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">3</span> │ Gemfile.lock          │ <span class="token function">file</span> │   <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">4</span> │ LICENSE               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">5</span> │ README.md             │ <span class="token function">file</span> │     <span class="token number">213</span> B │ <span class="token number">3</span> days ago  │
<span class="token punctuation">..</span>.
</code></pre></div><p>该表不仅仅是以不同的方式显示目录，就像电子表格中的表一样，它还允许我们以更加互动的方式来处理数据。</p>`,2),g=s("code",null,"ls",-1),f=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
╭────┬───────────────────────┬──────┬───────────┬─────────────╮
│ <span class="token comment">#  │         name          │ type │   size    │  modified   │</span>
├────┼───────────────────────┼──────┼───────────┼─────────────┤
│  <span class="token number">0</span> │ Gemfile.lock          │ <span class="token function">file</span> │   <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">1</span> │ SUMMARY.md            │ <span class="token function">file</span> │   <span class="token number">3.7</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">2</span> │ Gemfile               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">3</span> │ LICENSE               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">4</span> │ CONTRIBUTING.md       │ <span class="token function">file</span> │     <span class="token number">955</span> B │ <span class="token number">9</span> mins ago  │
│  <span class="token number">5</span> │ books.md              │ <span class="token function">file</span> │     <span class="token number">687</span> B │ <span class="token number">3</span> days ago  │
<span class="token punctuation">..</span>.
</code></pre></div>`,1),v=s("code",null,"ls",-1),y=s("code",null,"sort-by",-1),x=s("code",null,"ls",-1),B=s("code",null,"reverse",-1),N=s("code",null,"ls",-1),G=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
╭───┬───────────────────┬──────┬─────────┬────────────╮
│ <span class="token comment"># │       name        │ type │  size   │  modified  │</span>
├───┼───────────────────┼──────┼─────────┼────────────┤
│ <span class="token number">0</span> │ Gemfile           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">1</span> │ Gemfile.lock      │ <span class="token function">file</span> │ <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">2</span> │ LICENSE           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">3</span> │ SUMMARY.md        │ <span class="token function">file</span> │ <span class="token number">3.7</span> KiB │ <span class="token number">3</span> days ago │
╰───┴───────────────────┴──────┴─────────┴────────────╯
</code></pre></div><p>就像在 Unix 哲学中一样，能够让命令相互对话给我们提供了在许多不同的组合中对命令进行混搭的方法。我们来看看一个不同的命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮
│  <span class="token comment">#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │</span>
├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤
│   <span class="token number">0</span> │ <span class="token number">7570</span> │ nu                   │ Running │  <span class="token number">1.96</span> │  <span class="token number">23.2</span> MiB │ <span class="token number">32.8</span> GiB │
│   <span class="token number">1</span> │ <span class="token number">3533</span> │ remindd              │ Sleep   │  <span class="token number">0.00</span> │ <span class="token number">103.6</span> MiB │ <span class="token number">32.3</span> GiB │
│   <span class="token number">2</span> │ <span class="token number">3495</span> │ TVCacheExtension     │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">11.9</span> MiB │ <span class="token number">32.2</span> GiB │
│   <span class="token number">3</span> │ <span class="token number">3490</span> │ MusicCacheExtension  │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">12.9</span> MiB │ <span class="token number">32.2</span> GiB │
<span class="token punctuation">..</span>.
</code></pre></div>`,3),S=s("code",null,"ps",-1),w=s("code",null,"ls",-1),C=s("code",null,"ps",-1),E=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮
│ <span class="token comment"># │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │</span>
├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">1583</span> │ Terminal       │ Running │  <span class="token number">20.69</span> │ <span class="token number">127.8</span> MiB │ <span class="token number">33.0</span> GiB │
│ <span class="token number">1</span> │  <span class="token number">579</span> │ photoanalysisd │ Running │ <span class="token number">139.50</span> │  <span class="token number">99.9</span> MiB │ <span class="token number">32.3</span> GiB │
╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯
</code></pre></div>`,1),M=s("code",null,"ls",-1),U=s("code",null,"ps",-1),K=s("code",null,"date",-1),T=s("code",null,"sys",-1),R=o(`<p>运行<code>date now</code>输出关于当前日期和时间的信息：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 <span class="token parameter variable">-08:00</span>
</code></pre></div><p>为了将获得的日期以表格形式展示，我们可以把它输入到 <code>date to-table</code>中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
╭───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────╮
│ <span class="token comment"># │ year │ month │ day │ hour │ minute │ second │ timezone │</span>
├───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">2022</span> │     <span class="token number">3</span> │   <span class="token number">7</span> │   <span class="token number">14</span> │     <span class="token number">45</span> │      <span class="token number">3</span> │ <span class="token parameter variable">-08:00</span>   │
╰───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────╯
</code></pre></div>`,4),j=s("code",null,"sys",-1),I=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
╭───────┬───────────────────╮
│ <span class="token function">host</span>  │ <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> │
│ cpu   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
│ disks │ <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    │
│ mem   │ <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> │
│ temp  │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     │
│ net   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
╰───────┴───────────────────╯
</code></pre></div>`,1),A=s("code",null,"sys",-1),L=s("em",null,[s("code",null,"get")],-1),z=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
╭────────────────┬────────────────────────╮
│ name           │ Debian GNU/Linux       │
│ os version     │ <span class="token number">11</span>                     │
│ kernel version │ <span class="token number">5.10</span>.92-v8+            │
│ <span class="token function">hostname</span>       │ lifeless               │
│ <span class="token function">uptime</span>         │ 19day 21hr 34min 45sec │
│ sessions       │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          │
╰────────────────┴────────────────────────╯
</code></pre></div>`,1),q=s("code",null,"get",-1),V=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
╭───┬────╮
│ <span class="token number">0</span> │ jt │
╰───┴────╯
</code></pre></div><p>现在，系统中只有一个名为 &quot;jt&quot; 的用户。你会注意到，我们可以传递一个列路径（<code>host.sessions.name</code>部分），而不仅仅是简单的列名称。Nu 会接受列路径并输出表中相应的数据。</p><p>你可能已经注意到其他一些不同之处：我们没有一个数据表，而只有一个元素：即字符串 &quot;jt&quot;。Nu 既能处理数据表，也能处理字符串。字符串是使用 Nu 外部命令的一个重要部分。</p>`,3),D=s("code",null,"echo",-1),P=s("code",null,"^",-1),F=s("code",null,"echo",-1),O=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div><p>敏锐的读者可能会发现这看起来和我们之前的非常相似！确实如此，但有一个重要的区别：我们用前面的值调用了<code>^echo</code>。这允许我们把数据从 Nu 中传到外部命令<code>echo</code>（或者 Nu 之外的任何命令，比如<code>git</code>）。</p><h3 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助" aria-hidden="true">#</a> 获取帮助</h3>`,3),Y=s("code",null,"help",-1),J=s("code",null,"help commands",-1),Q=s("code",null,"help -f <topic>",-1),W=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
Explore and manipulate paths.

There are three ways to represent a path:

* As a path literal, e.g., <span class="token string">&#39;/home/viking/spam.txt&#39;</span>
* As a structured path: a table with <span class="token string">&#39;parent&#39;</span>, <span class="token string">&#39;stem&#39;</span>, and <span class="token string">&#39;extension&#39;</span> <span class="token punctuation">(</span>and
* <span class="token string">&#39;prefix&#39;</span> on Windows<span class="token punctuation">)</span> columns. This <span class="token function">format</span> is produced by the <span class="token string">&#39;path parse&#39;</span>
  subcommand.
* As an inner list of path parts, e.g., <span class="token string">&#39;[[ / home viking spam.txt ]]&#39;</span><span class="token builtin class-name">.</span>
  Splitting into parts is <span class="token keyword">done</span> by the <span class="token variable"><span class="token variable">\`</span>path <span class="token function">split</span><span class="token variable">\`</span></span> command.

All subcommands accept all three variants as an input. Furthermore, the <span class="token string">&#39;path
join&#39;</span> subcommand can be used to <span class="token function">join</span> the structured path or path parts back into
the path literal.

Usage:
  <span class="token operator">&gt;</span> path

Subcommands:
  path <span class="token function">basename</span> - Get the final component of a path
  path <span class="token function">dirname</span> - Get the parent directory of a path
  path exists - Check whether a path exists
  path <span class="token function">expand</span> - Try to <span class="token function">expand</span> a path to its absolute form
  path <span class="token function">join</span> - Join a structured path or a list of path parts.
  path parse - Convert a path into structured data.
  path relative-to - Get a path as relative to another path.
  path <span class="token function">split</span> - Split a path into parts by a separator.
  path <span class="token builtin class-name">type</span> - Get the <span class="token builtin class-name">type</span> of the object a path refers to <span class="token punctuation">(</span>e.g., file, dir, symlink<span class="token punctuation">)</span>

Flags:
  -h, <span class="token parameter variable">--help</span>
      Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,1);function $(H,X){const a=l("RouterLink");return c(),u("div",null,[r,d,m,k,h,s("p",null,[n("当你运行"),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[b]),_:1}),n("这样的命令时，你会注意到的第一件事是，你得到的不是一个文本块，而是一个结构化的表格：")]),_,s("p",null,[n("我们要做的第一件事是按大小对我们的表进行排序。要做到这一点，我们将从"),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[g]),_:1}),n("中获取输出，并将其输入到一个可以根据列的内容对表进行排序的命令中：")]),f,s("p",null,[n("你可以看到，为了达到这个目的，我们没有向"),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[v]),_:1}),n("传递命令行参数。取而代之的是，我们使用了 Nu 提供的"),y,n("命令来对"),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[x]),_:1}),n("命令的输出进行排序。为了在顶部看到最大的文件，我们还使用了"),e(a,{to:"/commands/docs/reverse.html"},{default:t(()=>[B]),_:1}),n("命令。")]),s("p",null,[n("Nu 提供了许多可以对表进行操作的命令，例如，我们可以过滤"),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[N]),_:1}),n("表的内容，使其只显示超过 1 千字节的文件。")]),G,s("p",null,[n("如果你使用过 Linux，你可能对"),e(a,{to:"/commands/docs/ps.html"},{default:t(()=>[S]),_:1}),n("命令很熟悉。通过它，我们可以得到一个当前系统正在运行的所有进程的列表，它们的状态是什么，以及它们的名字是什么，我们还可以看到这些进程的 CPU 负载。")]),s("p",null,[n("如果我们想显示那些正在活跃使用 CPU 的进程呢？就像我们之前对"),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[w]),_:1}),n("命令所做的那样，我们也可以利用"),e(a,{to:"/commands/docs/ps.html"},{default:t(()=>[C]),_:1}),n("命令返回给我们的表格来做到：")]),E,s("p",null,[n("到目前为止，我们一直在使用"),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[M]),_:1}),n("和"),e(a,{to:"/commands/docs/ps.html"},{default:t(()=>[U]),_:1}),n("来列出文件和进程。Nu 还提供了其他可以创建有用信息表格的命令。接下来，让我们试一下"),e(a,{to:"/commands/docs/date.html"},{default:t(()=>[K]),_:1}),n("和"),e(a,{to:"/commands/docs/sys.html"},{default:t(()=>[T]),_:1}),n("。")]),R,s("p",null,[n("运行"),e(a,{to:"/commands/docs/sys.html"},{default:t(()=>[j]),_:1}),n("可以得到 Nu 所运行的系统的信息：")]),I,s("p",null,[n("这与我们之前看到的表格有些不同。"),e(a,{to:"/commands/docs/sys.html"},{default:t(()=>[A]),_:1}),n("命令输出了一个在单元格中包含结构化表格而非简单值的表格。要查看这些数据，我们需要 "),L,n(" 待查看的列：")]),z,s("p",null,[e(a,{to:"/commands/docs/get.html"},{default:t(()=>[q]),_:1}),n('命令让我们深入表的某一列内容中。在这里，我们要查看的是 "host" 列，它包含了 Nu 正在运行的主机的信息：操作系统名称、主机名、CPU，以及更多。让我们来获取系统上的用户名：')]),V,s("p",null,[n("让我们看看字符串在 Nu 外部命令里面是如何工作的。我们以之前的例子为例，运行外部的"),D,n("命令（"),P,n("告诉 Nu 不要使用内置的"),e(a,{to:"/commands/docs/echo.html"},{default:t(()=>[F]),_:1}),n("命令）：")]),O,s("p",null,[n("任何 Nu 的内置命令的帮助文本都可以通过"),e(a,{to:"/commands/docs/help.html"},{default:t(()=>[Y]),_:1}),n("命令来找到。要查看所有命令，请运行"),J,n("。你也可以通过执行"),Q,n("来搜索一个主题：")]),W])}const ss=p(i,[["render",$],["__file","index.html.vue"]]);export{ss as default};
