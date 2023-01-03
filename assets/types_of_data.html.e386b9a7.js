import{_ as n,z as s,A as l,X as e,C as a,T as d,$ as o,a6 as c,Q as i}from"./framework.3d018c9f.js";const r={},p=e("h1",{id:"数据类型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据类型","aria-hidden":"true"},"#"),a(" 数据类型")],-1),h=e("p",null,'传统上，Unix Shell 命令之间使用字符串文本进行通信。一个命令通过标准输出（通常缩写为 "stdout"）输出文本，另一个命令通过标准输入（或 "stdin"）读入文本，以此来让两个命令进行通信。',-1),u=e("p",null,"我们可以认为这种通信是基于字符串的。",-1),g=e("p",null,"Nu 在其命令中采用了这种方法，并将其扩展到包括其他类型的数据。目前，Nu 支持两种数据类型：简单的和结构化的数据。",-1),b=e("p",null,"像许多编程语言一样，Nu 使用一组简单和结构化的数据类型对数据进行建模。简单的数据类型包括整数、浮点数、字符串、布尔、日期和路径。它还包括一个用于表示文件大小的特殊类型。",-1),x=e("code",null,"describe",-1),m=c(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; 42 | describe
</code></pre></div><h2 id="整数" tabindex="-1"><a class="header-anchor" href="#整数" aria-hidden="true">#</a> 整数</h2><p>整数（或整形）数字：例子包括 1、5 和 100。 你可以用 <code>into int</code> 命令将一个字符串转换成一个整数：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">|</span> into int
</code></pre></div><h2 id="小数" tabindex="-1"><a class="header-anchor" href="#小数" aria-hidden="true">#</a> 小数</h2><p>小数是指带有一些小数成分的数字，例如，1.5，2.0，和 15.333。 你可以用 <code>into decimal</code> 命令将一个字符串转换成一个小数：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;1.2&quot;</span> <span class="token operator">|</span> into decimal
</code></pre></div><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><p>代表文本的字符串。在 Nushell 中，我们有几种方法可以表示字符串：</p><p><strong>双引号</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>&quot;my message&quot;
</code></pre></div><p>双引号是最常见的引号形式，只要是需要文字的地方，你都可能看到。</p><p><strong>单引号</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>&#39;my message&#39;
</code></pre></div><p>单引号也生成一个字符串值，就像双引号一样。这里的区别是，它们允许你在文本中使用双引号，例如：<code>&#39;他说：&quot;你能帮我拿下杯子吗？&quot;&#39;</code>。</p><p><strong>字符串插值</strong></p><p>Nushell 支持字符串插值，允许你在以<code>$</code>为前缀的字符串中运行子表达式。比如：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo $&quot;6 x 7 = (6 * 7)&quot;
6 x 7 = 42
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | each { |it| echo $&quot;($it.name) is ($it.size)&quot; }
───┬─────────────────────
 0 │ genawait is 4.1 KB
 1 │ learncpp is 4.1 KB
 2 │ nuscripts is 4.1 KB
───┴─────────────────────
</code></pre></div><p><strong>裸字符串</strong></p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo hello
</code></pre></div><p>Nushell 的一个独特特征是，你也可以创建一个没有任何引号的单字字符串。</p><p>上面的内容和如下写法是一样的：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo &quot;hello&quot;
</code></pre></div><p>通过 <code>into &lt;type&gt;</code> 命令将一个字符串转换为另一种类型：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;1&quot;</span> <span class="token operator">|</span> into int
<span class="token operator">&gt;</span> <span class="token string">&quot;1.2&quot;</span> <span class="token operator">|</span> into decimal
</code></pre></div>`,26),_=c(`<h2 id="文本行" tabindex="-1"><a class="header-anchor" href="#文本行" aria-hidden="true">#</a> 文本行</h2><p>文本行(Lines)是具有隐含的操作系统特定行结尾的字符串。使用时需要加上操作系统特定的行尾标识。</p><h2 id="列路径" tabindex="-1"><a class="header-anchor" href="#列路径" aria-hidden="true">#</a> 列路径</h2><p>列路径(Column Paths)是指通过表格到特定子表、列、行或单元格的路径。</p><p>例如) <code>open data.toml | get foo.0.bar</code>中的值<code>foo.0.bar</code></p><h2 id="glob-模式-通配符" tabindex="-1"><a class="header-anchor" href="#glob-模式-通配符" aria-hidden="true">#</a> Glob 模式（通配符）</h2><p>在 Nushell 中，文件操作也允许你传入一个 glob 模式，有时被称为 &quot;通配符&quot;。这允许你给出一个可以匹配多个文件路径的模式。</p><p>最常见的模式是 <code>*</code>，它将匹配所有的路径。通常，你会看到这个模式被用作另一个模式的一部分，例如<code>*.bak</code>和<code>temp\\*</code>。</p><p>在 Nushell 中，我们也支持通过双 <code>*</code> 来遍历其他目录内嵌套得更深的路径。例如，<code>ls **/*</code>将列出所有嵌套在当前目录下的非隐藏路径。</p><p>除了<code>*</code>，还有<code>?</code>模式，它将匹配一个单一的字符。例如，你可以通过使用模式<code>p???</code>来匹配 &quot;port&quot;。</p><h2 id="布尔类型" tabindex="-1"><a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a> 布尔类型</h2><p>布尔类型是指真或假的状态。它通常用于一个比较的结果，而非直接使用该值。</p><p>布尔类型的两个值是<code>true</code>和<code>false</code>。</p><h2 id="日期" tabindex="-1"><a class="header-anchor" href="#日期" aria-hidden="true">#</a> 日期</h2><p>日期和时间被保存在日期(Date)值类型中。系统使用的日期值是有时区的，默认使用 UTC 时区。</p><p>日期有三种形式，基于 RFC 3339 标准：</p><ul><li>日期: <ul><li><code>2022-02-02</code></li></ul></li><li>日期和时间 (GMT 格式): <ul><li><code>2022-02-02T14:30:00</code></li></ul></li><li>包含时区的日期和时间: <ul><li><code>2022-02-02T14:30:00+05:00</code></li></ul></li></ul><h2 id="时间间隔" tabindex="-1"><a class="header-anchor" href="#时间间隔" aria-hidden="true">#</a> 时间间隔</h2><p>时间间隔(Duration)表示时间的长短。一秒钟、五周和一年都是时间间隔。</p><p>Eg) <code>1wk</code>是一个星期的时间间隔。</p><p>下表显示了目前支持的所有时间间隔：</p><table><thead><tr><th>Duration</th><th>时长</th></tr></thead><tbody><tr><td><code>1ns</code></td><td>1 纳秒</td></tr><tr><td><code>1us</code></td><td>1 微秒</td></tr><tr><td><code>1ms</code></td><td>1 毫秒</td></tr><tr><td><code>1sec</code></td><td>1 秒</td></tr><tr><td><code>1min</code></td><td>1 分钟</td></tr><tr><td><code>1hr</code></td><td>1 小时</td></tr><tr><td><code>1day</code></td><td>1 天</td></tr><tr><td><code>1wk</code></td><td>1 周</td></tr><tr><td><code>1month</code></td><td>一个月 (30 天)</td></tr><tr><td><code>1yr</code></td><td>一年 (365 天)</td></tr><tr><td><code>1dec</code></td><td>十年 (10 * 365 天)</td></tr></tbody></table><h2 id="区间" tabindex="-1"><a class="header-anchor" href="#区间" aria-hidden="true">#</a> 区间</h2><p>区间(Ranges)是一种表达从开始到结束的数值序列的方式。它们的形式是<code>&#39;start&#39; + &#39;..&#39; + &#39;end&#39;</code>。例如，范围 <code>1..3</code>表示数字 1、2、和 3。</p><h2 id="闭区间和开区间" tabindex="-1"><a class="header-anchor" href="#闭区间和开区间" aria-hidden="true">#</a> 闭区间和开区间</h2><p>默认情况下，区间是包含性的，也就是说，结束值被算作区间的一部分。区间<code>1..3</code>包括数字<code>3</code>作为区间内的最后一个值。</p><p>有时，你可能想要一个达到某个数字的区间，但在输出中不包含该数字。对于这种情况，你可以使用<code>..&lt;</code>代替<code>..</code>。例如，<code>1..&lt;5</code>包含数字 1、2、3 和 4。</p><h2 id="开放式区间" tabindex="-1"><a class="header-anchor" href="#开放式区间" aria-hidden="true">#</a> 开放式区间</h2><p>区间也可以是开放式的。你可以去掉区间的起点或终点，使其成为开放式的。</p><p>比方说，你想从 3 开始计数，但你心里没有一个具体的终点。你可以用 <code>3..</code> 这个区间来表示。当你在右边使用一个无限制的区间时，请记住，这将持续计数尽可能长的时间，这可能是一个非常长的时间，你可能会在 <code>first</code> 这样的命令中使用开放式区间，这样你就可以从区间中取出你想要的指定数量的元素。</p><p>你也可以使区间的开始部分开放。在这种情况下，Nushell 将从<code>0</code>开始向上计数。区间<code>..2</code>包含数字 0、1 和 2。</p><h2 id="文件大小" tabindex="-1"><a class="header-anchor" href="#文件大小" aria-hidden="true">#</a> 文件大小</h2><p>文件大小(File Sizes)保存在一种特殊的称为字节的整数类型中。例如包括 <code>100b</code>, <code>15kb</code>, 和 <code>100mb</code>。</p><p>文件大小单位的完整列表是：</p><ul><li><code>b</code>: bytes</li><li><code>kb</code>: kilobytes (aka 1000 bytes)</li><li><code>mb</code>: megabytes</li><li><code>gb</code>: gigabytes</li><li><code>tb</code>: terabytes</li><li><code>pb</code>: petabytes</li><li><code>eb</code>: exabytes</li><li><code>zb</code>: zettabyte</li><li><code>kib</code>: kibibytes (aka 1024 bytes)</li><li><code>mib</code>: mebibytes</li><li><code>gib</code>: gibibytes</li><li><code>tib</code>: tebibytes</li><li><code>pib</code>: pebibytes</li><li><code>eib</code>: exbibyte</li><li><code>zib</code>: zebibyte</li></ul><h2 id="二进制数据" tabindex="-1"><a class="header-anchor" href="#二进制数据" aria-hidden="true">#</a> 二进制数据</h2><p>二进制数据，像图像文件的数据一样，是一组原始字节。</p><p>你可以使用 <code>0x[...]</code> 、 <code>0b[...]</code> 或 <code>0o[...]</code> 的形式将二进制写成一个字面值：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; 0x[1F FF]   # 十六进制
&gt; 0b[1 1010]  # 二进制
&gt; 0o[377]     # 八进制
</code></pre></div><p>不完整的字节将用零来填充。</p><h2 id="结构化数据" tabindex="-1"><a class="header-anchor" href="#结构化数据" aria-hidden="true">#</a> 结构化数据</h2><p>结构化数据是在简单数据的基础上建立的。例如，结构化数据给我们提供了一种在同一数值中表示多个整数的方法，而不是一个单一的整数。目前支持的结构化数据类型有：记录、列表和表格。</p><h2 id="记录" tabindex="-1"><a class="header-anchor" href="#记录" aria-hidden="true">#</a> 记录</h2><p>记录(Records)持有键值对，很像 JSON 中的对象。由于这些记录有时会有很多字段，所以记录是从上到下打印的，而不是从左到右：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo {name: sam, rank: 10}
╭──────┬─────╮
│ name │ sam │
│ rank │ 10  │
╰──────┴─────╯
</code></pre></div><p>你可以将其转换到一个表然后遍历该记录：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo {name: sam, rank: 10} | transpose key value
╭───┬──────┬───────╮
│ # │ key  │ value │
├───┼──────┼───────┤
│ 0 │ name │  sam  │
│ 1 │ rank │   10  │
╰───┴──────┴───────╯
</code></pre></div><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2><p>列表(Lists)可以容纳一个以上的值。这些可以是简单的值，也可以容纳行，而一组记录的组合通常被称为 &quot;表&quot;。</p><p>例如，一个字符串的列表：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo [sam fred george]
───┬────────
 0 │ sam
 1 │ fred
 2 │ george
───┴────────
</code></pre></div><h2 id="表" tabindex="-1"><a class="header-anchor" href="#表" aria-hidden="true">#</a> 表</h2><p>表(Table)是 Nushell 的一个核心数据结构。当你运行 Nushell 命令时，你会发现许多命令都会将表作为输出返回。表由行和列组成。</p><p>我们可以创建自己的表，就像我们创建一个列表一样。因为表也包含列，而不仅仅是值，所以我们需要传入列的名称：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo [[column1, column2]; [Value1, Value2]]
───┬─────────┬─────────
 # │ column1 │ column2
───┼─────────┼─────────
 0 │ Value1  │ Value2
───┴─────────┴─────────
</code></pre></div><p>我们还可以创建一个有多行数据的表格：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo [[column1, column2]; [Value1, Value2] [Value3, Value4]]
───┬─────────┬─────────
 # │ column1 │ column2
───┼─────────┼─────────
 0 │ Value1  │ Value2
 1 │ Value3  │ Value4
───┴─────────┴─────────
</code></pre></div><p>你也可以通过一个记录列表来创建表格:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo [{name: sam, rank: 10}, {name: bob, rank: 7}]
╭───┬──────┬──────╮
│ # │ name │ rank │
├───┼──────┼──────┤
│ 0 │ sam  │   10 │
│ 1 │ bob  │    7 │
╰───┴──────┴──────╯
</code></pre></div><h2 id="块" tabindex="-1"><a class="header-anchor" href="#块" aria-hidden="true">#</a> 块</h2><p>块(Blocks)表示 Nu 中的一个代码块。例如，在命令 <code>each { |it| echo $it }</code> 中，块是包含在大括号中的部分，<code>{ |it| echo $it }</code>。如果有必要，可以在一对管道符号（例如，<code>|it|</code>）之间指定块参数。</p>`,61),k=e("code",null,"each",-1),v=e("code",null,"$it",-1),f=e("code",null,"each { |x| echo $x }",-1),y=e("code",null,"each { |it| echo $it }",-1),q=c(`<h2 id="组" tabindex="-1"><a class="header-anchor" href="#组" aria-hidden="true">#</a> 组</h2><p>以此为例：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>foo <span class="token punctuation">{</span>
  line1
  line2<span class="token punctuation">;</span> line3 <span class="token operator">|</span> line4
<span class="token punctuation">}</span>
</code></pre></div><p>在该代码块内，你有两个独立的组(Groups)直到运行完毕。组是一个以分号分隔的管道集合，其中最后一个管道会输出到屏幕。</p><ul><li><code>line1</code> 是一个独立的组，所以该命令将运行到结束并显示在屏幕上。</li><li><code>line2</code> 是第二组中的一个管道。它会运行，但其内容不会在屏幕上显示。</li><li><code>line3</code> | <code>line4</code> 是第二组中的第二个管道。它会运行并且它的内容会在屏幕上显示。</li></ul>`,5);function N(V,$){const t=i("RouterLink");return s(),l("div",null,[p,h,u,g,b,e("p",null,[a("你可以通过 "),d(t,{to:"/book/commands/describe.html"},{default:o(()=>[x]),_:1}),a(" 命令获取一个值的类型：")]),m,e("p",null,[a("另见 "),d(t,{to:"/zh-CN/book/loading_data.html#%E5%A4%84%E7%90%86%E5%AD%97%E7%AC%A6%E4%B8%B2"},{default:o(()=>[a("字符串的使用")]),_:1}),a("。")]),_,e("p",null,[a("块是表示可以在每行数据上执行的代码的一种有效方法。在"),d(t,{to:"/book/commands/each.html"},{default:o(()=>[k]),_:1}),a("块中使用"),v,a("作为参数名是惯例，但并不是必须的："),f,a("与"),y,a("的结果相同。")]),q])}const z=n(r,[["render",N],["__file","types_of_data.html.vue"]]);export{z as default};
