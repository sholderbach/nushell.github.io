import{_ as c,M as p,p as l,q as r,Q as n,t as a,N as s,U as u,a1 as t}from"./framework-344bb0e4.js";const k={},d=t('<h1 id="dataframes" tabindex="-1"><a class="header-anchor" href="#dataframes" aria-hidden="true">#</a> DataFrames</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>DataFrame 相关命令从 0.33.1 版本开始支持</p></div><p>正如我们到目前为止所看到的，Nushell 把数据处理作为其主要任务。<code>Lists</code> 和 <code>Tables</code>的存在是为了帮助你循环处理值，以便执行多种操作或轻而易举地找到数据。然而，在某些操作中，基于行的数据布局并不是处理数据的最有效方式，特别是在处理极其庞大的文件时。对于大型数据集的<code>group-by</code>或<code>join</code>等操作，如果不使用适当的数据格式，会占用大量的内存，并可能耗费大量的计算时间。</p>',3),i=n("code",null,"DataFrame",-1),m=n("code",null,"DataFrame",-1),b={href:"https://arrow.apache.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/pola-rs/polars",target:"_blank",rel:"noopener noreferrer"},g={href:"https://h2oai.github.io/db-benchmark/",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"你现在可能想知道这个组合能有多快，以及它如何能使数据工作更容易、更可靠。出于这个原因，让我们在本页开始时介绍一下处理数据时的常见操作的性能测试情况。",-1),f=n("h2",{id:"性能测试对比",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#性能测试对比","aria-hidden":"true"},"#"),a(" 性能测试对比")],-1),_={href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"dataframe",-1),F=n("blockquote",null,[n("p",null,"系统细节：本节介绍的性能测试是用一台配备 Intel(R) Core(TM) i7-10710U （CPU @1.10GHz 1.61GHz）和 16 GB 内存的机器运行的。"),n("p",null,"所有的例子都在 Nushell 0.33.1 版本上运行。")],-1),w=n("h3",{id:"文件信息",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#文件信息","aria-hidden":"true"},"#"),a(" 文件信息")],-1),x={href:"https://www.stats.govt.nz/assets/Uploads/New-Zealand-business-demography-statistics/New-Zealand-business-demography-statistics-At-February-2020/Download-data/Geographic-units-by-industry-and-statistical-area-2000-2020-descending-order-CSV.zip",target:"_blank",rel:"noopener noreferrer"},$=t(`<p>该数据集有 5 列，5,429,252 行。我们可以通过使用<code>ls-df</code>命令来检查：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span>open-df .<span class="token punctuation">\\</span>Data7602DescendingYearOrder.csv<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> ls-df

───┬──────┬─────────┬─────────
 <span class="token comment"># │ name │  rows   │ columns</span>
───┼──────┼─────────┼─────────
 <span class="token number">0</span> │ <span class="token variable">$df</span>  │ <span class="token number">5429252</span> │ <span class="token number">5</span>
───┴──────┴─────────┴─────────
</code></pre></div><p>我们可以用 <code>first</code> 看一下文件的第一行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> first

───┬──────────┬─────────┬──────┬───────────┬──────────
 <span class="token comment"># │ anzsic06 │  Area   │ year │ geo_count │ ec_count</span>
───┼──────────┼─────────┼──────┼───────────┼──────────
 <span class="token number">0</span> │ A        │ A100100 │ <span class="token number">2000</span> │        <span class="token number">96</span> │      <span class="token number">130</span>
 <span class="token number">1</span> │ A        │ A100200 │ <span class="token number">2000</span> │       <span class="token number">198</span> │      <span class="token number">110</span>
 <span class="token number">2</span> │ A        │ A100300 │ <span class="token number">2000</span> │        <span class="token number">42</span> │       <span class="token number">25</span>
 <span class="token number">3</span> │ A        │ A100400 │ <span class="token number">2000</span> │        <span class="token number">66</span> │       <span class="token number">40</span>
 <span class="token number">4</span> │ A        │ A100500 │ <span class="token number">2000</span> │        <span class="token number">63</span> │       <span class="token number">40</span>
───┴──────────┴─────────┴──────┴───────────┴──────────
</code></pre></div><p>...最后，我们可以了解一下推断出的数据类型：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> dtypes

───┬───────────┬───────
 <span class="token comment"># │  column   │ dtype</span>
───┼───────────┼───────
 <span class="token number">0</span> │ anzsic06  │ str
 <span class="token number">1</span> │ Area      │ str
 <span class="token number">2</span> │ year      │ i64
 <span class="token number">3</span> │ geo_count │ i64
 <span class="token number">4</span> │ ec_count  │ i64
───┴───────────┴───────
</code></pre></div><h3 id="加载文件" tabindex="-1"><a class="header-anchor" href="#加载文件" aria-hidden="true">#</a> 加载文件</h3>`,7),y=n("code",null,"open",-1),q=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>open .<span class="token punctuation">\\</span>Data7602DescendingYearOrder.csv<span class="token punctuation">}</span>

───┬─────────────────────────
 <span class="token comment"># │        real time</span>
───┼─────────────────────────
 <span class="token number">0</span> │ 30sec 479ms 614us 400ns
───┴─────────────────────────
</code></pre></div><p>使用原生的 Nushell 功能加载文件需要 30 秒。对于加载 500 万条记录来说，这还算不错！但我们可以做得更好一些。</p><p>现在让我们使用 Pandas。我们将使用以下脚本来加载文件：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&quot;Data7602DescendingYearOrder.csv&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>而它的性能测试结果是：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>python load.py<span class="token punctuation">}</span>

───┬───────────────────────
 <span class="token comment"># │       real time</span>
───┼───────────────────────
 <span class="token number">0</span> │ 2sec 91ms 872us 900ns
───┴───────────────────────
</code></pre></div><p>这是一个很大的进步，从 30 秒到 2 秒。干得好，Pandas!</p><p>也许我们加载数据可以再快一点，这一次我们将使用 Nushell 的 <code>open-df</code> 命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>open-df .<span class="token punctuation">\\</span>Data7602DescendingYearOrder.csv<span class="token punctuation">}</span>

───┬───────────────────
 <span class="token comment"># │     real time</span>
───┼───────────────────
 <span class="token number">0</span> │ 601ms 700us 700ns
───┴───────────────────
</code></pre></div><p>这一次，我们花了 0.6 秒。一点也不差。</p><h3 id="group-by比较" tabindex="-1"><a class="header-anchor" href="#group-by比较" aria-hidden="true">#</a> <code>Group-by</code>比较</h3><p>这次让我们做一个稍微复杂的操作。我们将按年份对数据进行分组，并根据<code>geo_count</code>列对分组求和。</p><p>同样，我们要从 Nushell 的原生命令开始：</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果你想运行这个例子，请注意接下来的命令将使用大量的内存，在该命令执行期间可能会影响你的系统性能。</p></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>
	<span class="token function">open</span> .<span class="token punctuation">\\</span>Data7602DescendingYearOrder.csv
	<span class="token operator">|</span> group-by year
	<span class="token operator">|</span> transpose header rows
	<span class="token operator">|</span> upsert rows <span class="token punctuation">{</span> get rows <span class="token operator">|</span> math <span class="token function">sum</span> <span class="token punctuation">}</span>
	<span class="token operator">|</span> flatten
<span class="token punctuation">}</span>

───┬────────────────────────
 <span class="token comment"># │       real time</span>
───┼────────────────────────
 <span class="token number">0</span> │ 6min 30sec 622ms 312us
───┴────────────────────────
</code></pre></div><p>所以，执行这个聚合操作需要 6 分钟。</p><p>让我们试试在<code>pandas</code>中进行同样的操作：</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&quot;Data7602DescendingYearOrder.csv&quot;</span><span class="token punctuation">)</span>
res <span class="token operator">=</span> df<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&quot;year&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;geo_count&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre></div><p>而性能测试的结果是：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>python .<span class="token punctuation">\\</span>load.py<span class="token punctuation">}</span>

───┬────────────────────────
 <span class="token comment"># │       real time</span>
───┼────────────────────────
 <span class="token number">0</span> │ 1sec 966ms 954us 800ns
───┴────────────────────────
</code></pre></div><p>一点也不差！同样，Pandas 设法在很短的时间内完成了它。</p><p>为了进行比较，让我们试试 Nushell DataFrames。我们要把所有的操作放在一个<code>nu</code>文件中，以确保我们做的是类似的操作：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> open-df Data7602DescendingYearOrder.csv
<span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span> <span class="token operator">|</span> group-by year <span class="token operator">|</span> agg <span class="token punctuation">(</span>col geo_count <span class="token operator">|</span> <span class="token function">sum</span><span class="token punctuation">))</span>
<span class="token variable">$res</span>
</code></pre></div><p>当使用 DataFrames 时的性能测试结果是：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>source load.nu<span class="token punctuation">}</span>

───┬───────────────────
 <span class="token comment"># │     real time</span>
───┼───────────────────
 <span class="token number">0</span> │ 557ms 658us 500ns
───┴───────────────────
</code></pre></div><p>幸运的是，Nushell DataFrame 设法将时间再次减半。这不是很好吗？</p><p>正如你所看到的，Nushell 的<code>DataFrame</code>命令和现在最常见的做数据分析的工具一样快。这个发行版中的命令有可能成为你做数据分析的首选工具。通过组合复杂的 Nushell 管道，你可以以一种可靠的方式从数据中提取信息。</p><h2 id="使用-dataframes" tabindex="-1"><a class="header-anchor" href="#使用-dataframes" aria-hidden="true">#</a> 使用 DataFrames</h2><p>在看到了可以用<code>DataFrame</code>命令完成的事情之后，现在是时候开始测试它们了。首先，让我们创建一个样本 CSV 文件，该文件将成为我们的样本 DataFrame，并与示例一起使用。在你喜欢的编辑器中粘贴下面几行来创建样本 csv 文件：</p><div class="language-csv" data-ext="csv"><pre class="language-csv"><code><span class="token value">int_1</span><span class="token punctuation">,</span><span class="token value">int_2</span><span class="token punctuation">,</span><span class="token value">float_1</span><span class="token punctuation">,</span><span class="token value">float_2</span><span class="token punctuation">,</span><span class="token value">first</span><span class="token punctuation">,</span><span class="token value">second</span><span class="token punctuation">,</span><span class="token value">third</span><span class="token punctuation">,</span><span class="token value">word</span>
<span class="token value">1</span><span class="token punctuation">,</span><span class="token value">11</span><span class="token punctuation">,</span><span class="token value">0.1</span><span class="token punctuation">,</span><span class="token value">1.0</span><span class="token punctuation">,</span><span class="token value">a</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">first</span>
<span class="token value">2</span><span class="token punctuation">,</span><span class="token value">12</span><span class="token punctuation">,</span><span class="token value">0.2</span><span class="token punctuation">,</span><span class="token value">1.0</span><span class="token punctuation">,</span><span class="token value">a</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">second</span>
<span class="token value">3</span><span class="token punctuation">,</span><span class="token value">13</span><span class="token punctuation">,</span><span class="token value">0.3</span><span class="token punctuation">,</span><span class="token value">2.0</span><span class="token punctuation">,</span><span class="token value">a</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">third</span>
<span class="token value">4</span><span class="token punctuation">,</span><span class="token value">14</span><span class="token punctuation">,</span><span class="token value">0.4</span><span class="token punctuation">,</span><span class="token value">3.0</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">a</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">second</span>
<span class="token value">0</span><span class="token punctuation">,</span><span class="token value">15</span><span class="token punctuation">,</span><span class="token value">0.5</span><span class="token punctuation">,</span><span class="token value">4.0</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">a</span><span class="token punctuation">,</span><span class="token value">a</span><span class="token punctuation">,</span><span class="token value">third</span>
<span class="token value">6</span><span class="token punctuation">,</span><span class="token value">16</span><span class="token punctuation">,</span><span class="token value">0.6</span><span class="token punctuation">,</span><span class="token value">5.0</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">a</span><span class="token punctuation">,</span><span class="token value">a</span><span class="token punctuation">,</span><span class="token value">second</span>
<span class="token value">7</span><span class="token punctuation">,</span><span class="token value">17</span><span class="token punctuation">,</span><span class="token value">0.7</span><span class="token punctuation">,</span><span class="token value">6.0</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">a</span><span class="token punctuation">,</span><span class="token value">third</span>
<span class="token value">8</span><span class="token punctuation">,</span><span class="token value">18</span><span class="token punctuation">,</span><span class="token value">0.8</span><span class="token punctuation">,</span><span class="token value">7.0</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">eight</span>
<span class="token value">9</span><span class="token punctuation">,</span><span class="token value">19</span><span class="token punctuation">,</span><span class="token value">0.9</span><span class="token punctuation">,</span><span class="token value">8.0</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">ninth</span>
<span class="token value">0</span><span class="token punctuation">,</span><span class="token value">10</span><span class="token punctuation">,</span><span class="token value">0.0</span><span class="token punctuation">,</span><span class="token value">9.0</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">c</span><span class="token punctuation">,</span><span class="token value">b</span><span class="token punctuation">,</span><span class="token value">ninth</span>
</code></pre></div><p>保存该文件并随意命名，在这些例子中，该文件将被称为 <code>test_small.csv</code>。</p><p>现在，要将该文件作为 DataFrame 进行读取，请使用 <code>open-df</code> 命令，如下所示：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> open-df test_small.csv
</code></pre></div><p>这应该会在内存中创建一个值 <code>$df</code>，用来存放我们刚刚创建的数据。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>open-df</code> 命令可以读取 <strong>csv</strong> 或 <strong>parquet</strong> 文件。</p></div><p>要查看存储在内存中的所有 DataFrames，你可以使用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ls-df

───┬──────┬──────┬─────────
 <span class="token comment"># │ name │ rows │ columns</span>
───┼──────┼──────┼─────────
 <span class="token number">0</span> │ <span class="token variable">$df</span>  │ <span class="token number">10</span>   │ <span class="token number">8</span>
───┴──────┴──────┴─────────
</code></pre></div><p>正如你所看到的，该命令显示了所创建的 DataFrame 以及关于它们的基本信息。</p><p>如果你想看到加载的 DataFrame 的预览，你可以将 DataFrame 变量发送到流中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────
 <span class="token number">0</span> │     <span class="token number">1</span> │    <span class="token number">11</span> │  <span class="token number">0.1000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ first
 <span class="token number">1</span> │     <span class="token number">2</span> │    <span class="token number">12</span> │  <span class="token number">0.2000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ second
 <span class="token number">2</span> │     <span class="token number">3</span> │    <span class="token number">13</span> │  <span class="token number">0.3000</span> │  <span class="token number">2.0000</span> │ a     │ b      │ c     │ third
 <span class="token number">3</span> │     <span class="token number">4</span> │    <span class="token number">14</span> │  <span class="token number">0.4000</span> │  <span class="token number">3.0000</span> │ b     │ a      │ c     │ second
 <span class="token number">4</span> │     <span class="token number">0</span> │    <span class="token number">15</span> │  <span class="token number">0.5000</span> │  <span class="token number">4.0000</span> │ b     │ a      │ a     │ third
 <span class="token number">5</span> │     <span class="token number">6</span> │    <span class="token number">16</span> │  <span class="token number">0.6000</span> │  <span class="token number">5.0000</span> │ b     │ a      │ a     │ second
 <span class="token number">6</span> │     <span class="token number">7</span> │    <span class="token number">17</span> │  <span class="token number">0.7000</span> │  <span class="token number">6.0000</span> │ b     │ c      │ a     │ third
 <span class="token number">7</span> │     <span class="token number">8</span> │    <span class="token number">18</span> │  <span class="token number">0.8000</span> │  <span class="token number">7.0000</span> │ c     │ c      │ b     │ eight
 <span class="token number">8</span> │     <span class="token number">9</span> │    <span class="token number">19</span> │  <span class="token number">0.9000</span> │  <span class="token number">8.0000</span> │ c     │ c      │ b     │ ninth
 <span class="token number">9</span> │     <span class="token number">0</span> │    <span class="token number">10</span> │  <span class="token number">0.0000</span> │  <span class="token number">9.0000</span> │ c     │ c      │ b     │ ninth
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────
</code></pre></div><p>有了内存中的 DataFrame，我们就可以开始对 <code>DataFrame</code> 进行列操作。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果你想看到所有可用的 DataFrame 命令，你可以使用 <code>$nu.scope.commands | where category =~ dataframe</code>。</p></div><h2 id="基本聚合" tabindex="-1"><a class="header-anchor" href="#基本聚合" aria-hidden="true">#</a> 基本聚合</h2><p>让我们从 DataFrame 的基本聚合开始，通过使用<code>aggregate</code>命令对<code>df</code>中存在的所有列进行求和：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> <span class="token function">sum</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬──────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │ word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼──────
 <span class="token number">0</span> │    <span class="token number">40</span> │   <span class="token number">145</span> │  <span class="token number">4.5000</span> │ <span class="token number">46.0000</span> │       │        │       │
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴──────
</code></pre></div><p>正如你所看到的，聚合函数(<code>aggregate</code>)为那些有意义的列计算出了总和。如果你想过滤掉文本列，你可以使用<code>select</code>命令来选择你想要的列。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$df</span> <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> <span class="token keyword">select</span> int_1 int_2 float_1 float_2

───┬───────┬───────┬─────────┬─────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2</span>
───┼───────┼───────┼─────────┼─────────
 <span class="token number">0</span> │    <span class="token number">40</span> │   <span class="token number">145</span> │  <span class="token number">4.5000</span> │ <span class="token number">46.0000</span>
───┴───────┴───────┴─────────┴─────────
</code></pre></div><p>你甚至可以像存储任何其他 Nushell 变量一样存储这个聚合的结果：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span> <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> <span class="token keyword">select</span> int_1 int_2 float_1 float_2<span class="token punctuation">)</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>输入 <code>let res = ( !! )</code> 并按回车，这将自动完成之前执行的命令。注意 ( 和 !! 之间的空格。</p></div><p>现在我们有两个 DataFrame 存储在内存中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ls-df

───┬──────┬──────┬─────────
 <span class="token comment"># │ name │ rows │ columns</span>
───┼──────┼──────┼─────────
 <span class="token number">0</span> │ <span class="token variable">$df</span>  │ <span class="token number">10</span>   │ <span class="token number">8</span>
 <span class="token number">1</span> │ <span class="token variable">$res</span> │ <span class="token number">1</span>    │ <span class="token number">4</span>
───┴──────┴──────┴─────────
</code></pre></div><p>很整洁，不是吗？</p><p>你可以在 DataFrame 上进行若干聚合，以便从中提取基本信息，也可以对你的全新 DataFrame 进行基本数据分析。</p><h2 id="连接-dataframe" tabindex="-1"><a class="header-anchor" href="#连接-dataframe" aria-hidden="true">#</a> 连接 DataFrame</h2><p>也可以用一个列作为参考来连接(<code>join</code>)两个 DataFrame。我们将把我们的迷你 DataFrame 与另一个迷你 DataFrame 连接起来。在另一个文件中复制这些行，并创建相应的 DataFrame（在以下例子中，我们将称之为<code>test_small_a.csv</code>）。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>int_1,int_2,float_1,float_2,first
9,14,0.4,3.0,a
8,13,0.3,2.0,a
7,12,0.2,1.0,a
6,11,0.1,0.0,b
</code></pre></div><p>我们使用 <code>open-df</code> 命令来创建新的变量：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> df_a <span class="token operator">=</span> open-df test_small_a.csv
</code></pre></div><p>现在，当第二个 DataFrame 加载到内存中时，我们可以使用左边 DataFrame 的<code>int_1</code>列和右边 DataFrame 的<code>int_1</code>列来连接它们。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> <span class="token function">join</span> <span class="token variable">$df_a</span> int_1 int_1

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬─────────┬─────────────┬───────────────┬───────────────┬─────────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word   │ int_2_right │ float_1_right │ float_2_right │ first_right</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼─────────┼─────────────┼───────────────┼───────────────┼─────────────
 <span class="token number">0</span> │     <span class="token number">6</span> │    <span class="token number">16</span> │  <span class="token number">0.6000</span> │  <span class="token number">5.0000</span> │ b     │ a      │ a     │ second  │          <span class="token number">11</span> │        <span class="token number">0.1000</span> │        <span class="token number">0.0000</span> │ b
 <span class="token number">1</span> │     <span class="token number">7</span> │    <span class="token number">17</span> │  <span class="token number">0.7000</span> │  <span class="token number">6.0000</span> │ b     │ c      │ a     │ third   │          <span class="token number">12</span> │        <span class="token number">0.2000</span> │        <span class="token number">1.0000</span> │ a
 <span class="token number">2</span> │     <span class="token number">8</span> │    <span class="token number">18</span> │  <span class="token number">0.8000</span> │  <span class="token number">7.0000</span> │ c     │ c      │ b     │ eight   │          <span class="token number">13</span> │        <span class="token number">0.3000</span> │        <span class="token number">2.0000</span> │ a
 <span class="token number">3</span> │     <span class="token number">9</span> │    <span class="token number">19</span> │  <span class="token number">0.9000</span> │  <span class="token number">8.0000</span> │ c     │ c      │ b     │ ninth   │          <span class="token number">14</span> │        <span class="token number">0.4000</span> │        <span class="token number">3.0000</span> │ a
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴─────────┴─────────────┴───────────────┴───────────────┴─────────────
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在<code>Nu</code>中，当一个命令有多个参数，并期望得到多个值时，我们用方括号<code>[]</code>来包裹这些值。在<code>join</code>的情况下，我们可以对多个列进行连接，只要它们具有相同的类型，例如我们可以这样做：<code>$df | join $df_a [int_1 int_2] [int_1 int_2]</code>。</p></div><p>默认情况下，连接命令做的是内连接，也就是说，它将保留两个 DataFrame 都有相同值的记录。你可以选择一个左联接来保留左边 DataFrame 中缺失的行。你也可以保存这个结果，以便在以后的操作中使用它。</p><h2 id="dataframe-分组" tabindex="-1"><a class="header-anchor" href="#dataframe-分组" aria-hidden="true">#</a> DataFrame 分组</h2><p>可以用 DataFrame 进行的最强大的操作之一是<code>group-by</code>。这个命令将允许你根据一个分组条件进行聚合操作。在 Nushell 中，<code>GroupBy</code>是一种可以被存储和重复使用的对象，可以被用于多个聚合。这是很方便的，因为在进行分组时，创建分组对是最昂贵的运算，如果你打算用同一个分组条件进行多个操作，就没有必要重复该运算。</p><p>要创建一个<code>GroupBy</code>对象，你只需要使用<code>group-by</code>命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> group <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span> <span class="token operator">|</span> group-by first<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$group</span>

 LazyGroupBy │ apply aggregation to complete execution plan
</code></pre></div><p>当打印 <code>GroupBy</code> 对象时，我们可以看到它在后台是一个懒惰的操作，等待着通过添加一个聚合来完成。使用 <code>GroupBy</code> 我们可以在一个列上创建聚合</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$group</span> <span class="token operator">|</span> agg <span class="token punctuation">(</span>col int_1 <span class="token operator">|</span> <span class="token function">sum</span><span class="token punctuation">)</span>

───┬───────┬───────────┬
 <span class="token comment"># │ first │ int_1     │</span>
───┼───────┼───────────┼
 <span class="token number">0</span> │ a     │         <span class="token number">6</span> │
 <span class="token number">1</span> │ b     │        <span class="token number">17</span> │
 <span class="token number">2</span> │ c     │        <span class="token number">17</span> │
───┴───────┴───────────┴
</code></pre></div><p>或者我们可以在相同或不同的列上定义多个聚合：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$group</span> <span class="token operator">|</span> agg <span class="token punctuation">[</span>
	<span class="token punctuation">(</span>col int_1 <span class="token operator">|</span> n-unique<span class="token punctuation">)</span>
	<span class="token punctuation">(</span>col int_2 <span class="token operator">|</span> min<span class="token punctuation">)</span>
	<span class="token punctuation">(</span>col float_1 <span class="token operator">|</span> <span class="token function">sum</span><span class="token punctuation">)</span>
	<span class="token punctuation">(</span>col float_2 <span class="token operator">|</span> count<span class="token punctuation">)</span>
<span class="token punctuation">]</span> <span class="token operator">|</span> sort-by first

───┬───────┬───────────┬───────────┬─────────────┬─────────────
 <span class="token comment"># │ first │ int_1     │ int_2     │ float_1     │ float_2</span>
───┼───────┼───────────┼───────────┼─────────────┼─────────────
 <span class="token number">0</span> │ a     │         <span class="token number">3</span> │        <span class="token number">11</span> │      <span class="token number">0.6000</span> │      <span class="token number">3</span>
 <span class="token number">1</span> │ b     │         <span class="token number">4</span> │        <span class="token number">14</span> │      <span class="token number">2.2000</span> │      <span class="token number">4</span>
 <span class="token number">2</span> │ c     │         <span class="token number">3</span> │        <span class="token number">10</span> │      <span class="token number">1.7000</span> │      <span class="token number">3</span>
───┴───────┴───────────┴───────────┴─────────────┴─────────────
</code></pre></div><p>正如你所看到的，<code>GroupBy</code>对象是一个非常强大的变量，在你操作数据集时，它值得被保留在内存中。</p><h2 id="创建-dataframes" tabindex="-1"><a class="header-anchor" href="#创建-dataframes" aria-hidden="true">#</a> 创建 DataFrames</h2><p>也可以从基本的 Nushell 基础类型，如整数、小数或字符串，来构建 DataFrames。让我们使用 <code>into df</code> 命令来创建一个小的 DataFrame：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$a</span>

───┬───┬───
 <span class="token comment"># │ b │ a</span>
───┼───┼───
 <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">1</span>
 <span class="token number">1</span> │ <span class="token number">4</span> │ <span class="token number">3</span>
 <span class="token number">2</span> │ <span class="token number">6</span> │ <span class="token number">5</span>
───┴───┴───
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>目前，并不是所有的 Nushell 基本类型都可以转换为 DataFrame。随着 DataFrame 功能的成熟，这一点将在未来发生变化。</p></div><p>我们可以在一个 DataFrame 中添加列，以创建一个新的变量。作为一个例子，让我们在迷你 DataFrame <code>$a</code> 上添加两列：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token operator">|</span> with-column <span class="token variable">$a</span>.a <span class="token parameter variable">--name</span> a2 <span class="token operator">|</span> with-column <span class="token variable">$a</span>.a <span class="token parameter variable">--name</span> a3<span class="token punctuation">)</span>

───┬───┬───┬────┬────
 <span class="token comment"># │ b │ a │ a2 │ a3</span>
───┼───┼───┼────┼────
 <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">1</span> │  <span class="token number">1</span> │  <span class="token number">1</span>
 <span class="token number">1</span> │ <span class="token number">4</span> │ <span class="token number">3</span> │  <span class="token number">3</span> │  <span class="token number">3</span>
 <span class="token number">2</span> │ <span class="token number">6</span> │ <span class="token number">5</span> │  <span class="token number">5</span> │  <span class="token number">5</span>
───┴───┴───┴────┴────
</code></pre></div><p>Nushell 强大的管道语法允许我们通过从其他 DataFrame 中获取数据并将其附加到这些 DataFrame 中来创建新的 DataFrame。现在，如果你列出你的 DataFrame，你会看到总共有四个：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ls-df

───┬───────┬──────┬─────────
 <span class="token comment"># │  name │ rows │ columns</span>
───┼───────┼──────┼─────────
 <span class="token number">0</span> │ <span class="token variable">$a</span>    │ <span class="token number">3</span>    │ <span class="token number">2</span>
 <span class="token number">1</span> │ <span class="token variable">$a2</span>   │ <span class="token number">3</span>    │ <span class="token number">4</span>
 <span class="token number">2</span> │ <span class="token variable">$df_a</span> │ <span class="token number">4</span>    │ <span class="token number">5</span>
 <span class="token number">3</span> │ <span class="token variable">$df</span>   │ <span class="token number">10</span>   │ <span class="token number">8</span>
───┴───────┴──────┴─────────
</code></pre></div>`,80),N=n("strong",null,"Apache Arrow",-1),S=n("strong",null,"Polars",-1),A={href:"https://arrow.apache.org/docs/format/Columnar.html",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"$a",-1),G=n("code",null,"$a2",-1),B=n("code",null,"into df",-1),T=t(`<h2 id="使用系列" tabindex="-1"><a class="header-anchor" href="#使用系列" aria-hidden="true">#</a> 使用系列</h2><p>系列(<code>Series</code>) 是 <code>DataFrame</code> 的基本组成部分。每个系列代表一个具有相同数据类型的列，我们可以创建多个不同类型的系列，如浮点、整型或字符串。</p><p>让我们通过使用 <code>into df</code> 命令创建一个系列，来开始我们对系列的探索：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> new <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">9</span> <span class="token number">8</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new</span>

───┬───
 <span class="token comment"># │ 0</span>
───┼───
 <span class="token number">0</span> │ <span class="token number">9</span>
 <span class="token number">1</span> │ <span class="token number">8</span>
 <span class="token number">2</span> │ <span class="token number">4</span>
───┴───
</code></pre></div><p>我们从一个整数列表创建了一个新的系列（我们也可以用浮点数或字符串做同样的事情）。</p><p>系列已经定义了自己的基本操作，它们可以用来创建其他系列。让我们通过对先前创建的列进行一些运算来创建一个新的系列：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> new_2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$new</span> * <span class="token number">3</span> + <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new_2</span>

───┬────
 <span class="token comment"># │ 0</span>
───┼────
 <span class="token number">0</span> │ <span class="token number">37</span>
 <span class="token number">1</span> │ <span class="token number">34</span>
 <span class="token number">2</span> │ <span class="token number">22</span>
───┴────
</code></pre></div><p>现在我们有一个新的系列，它是通过对前一个变量进行基本操作而构建的。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如果你想看看你在内存中存储了多少变量，你可以使用<code>$nu.scope.vars</code>。</p></div><p>让我们重新命名我们之前的系列为 <code>memorable</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> new_2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$new_2</span> <span class="token operator">|</span> <span class="token function">rename</span> <span class="token string">&quot;0&quot;</span> memorable<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new_2</span>

───┬───────────
 <span class="token comment"># │ memorable</span>
───┼───────────
 <span class="token number">0</span> │        <span class="token number">37</span>
 <span class="token number">1</span> │        <span class="token number">34</span>
 <span class="token number">2</span> │        <span class="token number">22</span>
───┴───────────
</code></pre></div><p>只要两个系列的数据类型相同，我们也可以对它们进行基本操作：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$new</span> - <span class="token variable">$new_2</span>

───┬──────────
 <span class="token comment"># │ sub_0_0</span>
───┼──────────
 <span class="token number">0</span> │     <span class="token parameter variable">-28</span>
 <span class="token number">1</span> │     <span class="token parameter variable">-26</span>
 <span class="token number">2</span> │     <span class="token parameter variable">-18</span>
───┴──────────
</code></pre></div><p>而且我们可以将它们添加到先前定义的 DataFrames 中：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> new_df <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token operator">|</span> with-column <span class="token variable">$new</span> <span class="token parameter variable">--name</span> new_col<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new_df</span>

───┬───┬───┬─────────
 <span class="token comment"># │ b │ a │ new_col</span>
───┼───┼───┼─────────
 <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">1</span> │       <span class="token number">9</span>
 <span class="token number">1</span> │ <span class="token number">4</span> │ <span class="token number">3</span> │       <span class="token number">8</span>
 <span class="token number">2</span> │ <span class="token number">6</span> │ <span class="token number">5</span> │       <span class="token number">4</span>
───┴───┴───┴─────────
</code></pre></div><p>存储在 DataFrame 中的系列也可以直接使用，例如，我们可以将列<code>a</code>和<code>b</code>相乘来创建一个新系列：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$new_df</span>.a * <span class="token variable">$new_df</span>.b

───┬─────────
 <span class="token comment"># │ mul_a_b</span>
───┼─────────
 <span class="token number">0</span> │       <span class="token number">2</span>
 <span class="token number">1</span> │      <span class="token number">12</span>
 <span class="token number">2</span> │      <span class="token number">30</span>
───┴─────────
</code></pre></div><p>我们可以开始使用管道，以创建新的列和 DataFrames：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$new_df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$new_df</span> <span class="token operator">|</span> with-column <span class="token punctuation">(</span><span class="token variable">$new_df</span>.a * <span class="token variable">$new_df</span>.b / <span class="token variable">$new_df</span>.new_col<span class="token punctuation">)</span> <span class="token parameter variable">--name</span> my_sum<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$new_df</span>

───┬───┬───┬─────────┬────────
 <span class="token comment"># │ b │ a │ new_col │ my_sum</span>
───┼───┼───┼─────────┼────────
 <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">1</span> │       <span class="token number">9</span> │      <span class="token number">0</span>
 <span class="token number">1</span> │ <span class="token number">4</span> │ <span class="token number">3</span> │       <span class="token number">8</span> │      <span class="token number">1</span>
 <span class="token number">2</span> │ <span class="token number">6</span> │ <span class="token number">5</span> │       <span class="token number">4</span> │      <span class="token number">7</span>
───┴───┴───┴─────────┴────────
</code></pre></div><p>Nushell 的管道系统可以帮助你创建非常有趣的工作流程。</p><h2 id="系列和掩码" tabindex="-1"><a class="header-anchor" href="#系列和掩码" aria-hidden="true">#</a> 系列和掩码</h2><p>在使用 DataFrames 时，系列还有另一个关键用途，那就是我们可以用它们来建立布尔掩码（Mask）。让我们先用等于运算符创建一个简单的掩码：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> mask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$new</span> <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$mask</span>

───┬─────────
 <span class="token comment"># │ new_col</span>
───┼─────────
 <span class="token number">0</span> │ <span class="token boolean">false</span>
 <span class="token number">1</span> │ <span class="token boolean">true</span>
 <span class="token number">2</span> │ <span class="token boolean">false</span>
───┴─────────
</code></pre></div><p>有了这个掩码，我们现在可以过滤一个 DataFrame，像这样：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$new_df</span> <span class="token operator">|</span> filter-with <span class="token variable">$mask</span>

───┬───┬───┬─────────┬────────
 <span class="token comment"># │ a │ b │ new_col │ my_sum</span>
───┼───┼───┼─────────┼────────
 <span class="token number">0</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │       <span class="token number">8</span> │      <span class="token number">1</span>
───┴───┴───┴─────────┴────────
</code></pre></div><p>现在我们有一个新的 DataFrame，其中只有掩码为真的值。</p><p>掩码也可以从 Nushell 列表中创建，比如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> mask1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>true <span class="token boolean">true</span> false<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new_df</span> <span class="token operator">|</span> filter-with <span class="token variable">$mask1</span>

───┬───┬───┬─────────┬────────
 <span class="token comment"># │ a │ b │ new_col │ my_sum</span>
───┼───┼───┼─────────┼────────
 <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │       <span class="token number">9</span> │      <span class="token number">0</span>
 <span class="token number">1</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │       <span class="token number">8</span> │      <span class="token number">1</span>
───┴───┴───┴─────────┴────────
</code></pre></div><p>为了创建复杂的掩码，我们可以使用<code>AND</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$mask</span> and <span class="token variable">$mask1</span>

───┬──────────────────
 <span class="token comment"># │ and_new_col_mask</span>
───┼──────────────────
 <span class="token number">0</span> │ <span class="token boolean">false</span>
 <span class="token number">1</span> │ <span class="token boolean">true</span>
 <span class="token number">2</span> │ <span class="token boolean">false</span>
───┴──────────────────
</code></pre></div><p>或者 <code>OR</code> 操作：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$mask</span> or <span class="token variable">$mask1</span>

───┬─────────────────
 <span class="token comment"># │ or_new_col_mask</span>
───┼─────────────────
 <span class="token number">0</span> │ <span class="token boolean">true</span>
 <span class="token number">1</span> │ <span class="token boolean">true</span>
 <span class="token number">2</span> │ <span class="token boolean">false</span>
───┴─────────────────
</code></pre></div><p>我们也可以通过检查某些值是否存在于其他系列来创建一个掩码。使用我们创建的第一个 DataFrame，我们可以这样做：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> mask3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.first <span class="token operator">|</span> is-in <span class="token punctuation">(</span><span class="token punctuation">[</span>b c<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">))</span>

───┬──────
 <span class="token comment"># │ first</span>
───┼───────
 <span class="token number">0</span> │ <span class="token boolean">false</span>
 <span class="token number">1</span> │ <span class="token boolean">false</span>
 <span class="token number">2</span> │ <span class="token boolean">false</span>
 <span class="token number">3</span> │ <span class="token boolean">true</span>
 <span class="token number">4</span> │ <span class="token boolean">true</span>
 <span class="token number">5</span> │ <span class="token boolean">true</span>
 <span class="token number">6</span> │ <span class="token boolean">true</span>
 <span class="token number">7</span> │ <span class="token boolean">true</span>
 <span class="token number">8</span> │ <span class="token boolean">true</span>
 <span class="token number">9</span> │ <span class="token boolean">true</span>
───┴───────
</code></pre></div><p>而这个新的掩码可以用来过滤 DataFrame</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> filter-with <span class="token variable">$mask3</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬─────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼─────────
 <span class="token number">0</span> │     <span class="token number">4</span> │    <span class="token number">14</span> │  <span class="token number">0.4000</span> │  <span class="token number">3.0000</span> │ b     │ a      │ c     │ second
 <span class="token number">1</span> │     <span class="token number">0</span> │    <span class="token number">15</span> │  <span class="token number">0.5000</span> │  <span class="token number">4.0000</span> │ b     │ a      │ a     │ third
 <span class="token number">2</span> │     <span class="token number">6</span> │    <span class="token number">16</span> │  <span class="token number">0.6000</span> │  <span class="token number">5.0000</span> │ b     │ a      │ a     │ second
 <span class="token number">3</span> │     <span class="token number">7</span> │    <span class="token number">17</span> │  <span class="token number">0.7000</span> │  <span class="token number">6.0000</span> │ b     │ c      │ a     │ third
 <span class="token number">4</span> │     <span class="token number">8</span> │    <span class="token number">18</span> │  <span class="token number">0.8000</span> │  <span class="token number">7.0000</span> │ c     │ c      │ b     │ eight
 <span class="token number">5</span> │     <span class="token number">9</span> │    <span class="token number">19</span> │  <span class="token number">0.9000</span> │  <span class="token number">8.0000</span> │ c     │ c      │ b     │ ninth
 <span class="token number">6</span> │     <span class="token number">0</span> │    <span class="token number">10</span> │  <span class="token number">0.0000</span> │  <span class="token number">9.0000</span> │ c     │ c      │ b     │ ninth
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴─────────
</code></pre></div><p>另一个可以用掩码进行的操作是设置或替换一个系列的值。例如，我们可以改变列<code>first</code>中的值，如果该值包含<code>a</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span>.first <span class="token operator">|</span> <span class="token builtin class-name">set</span> new <span class="token parameter variable">--mask</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.first <span class="token operator">=~</span> a<span class="token punctuation">)</span>

───┬────────
 <span class="token comment"># │ string</span>
───┼────────
 <span class="token number">0</span> │ new
 <span class="token number">1</span> │ new
 <span class="token number">2</span> │ new
 <span class="token number">3</span> │ b
 <span class="token number">4</span> │ b
 <span class="token number">5</span> │ b
 <span class="token number">6</span> │ b
 <span class="token number">7</span> │ c
 <span class="token number">8</span> │ c
 <span class="token number">9</span> │ c
───┴────────
</code></pre></div><h2 id="系列作为索引" tabindex="-1"><a class="header-anchor" href="#系列作为索引" aria-hidden="true">#</a> 系列作为索引</h2><p>系列也可以作为过滤 DataFrame 的一种方式，将它们作为索引列表使用。例如，假设我们想从原始 DataFrame 中获取第1、4和6行。针对这一点，我们可以使用以下命令来提取这些信息：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> take <span class="token variable">$indices</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────
 <span class="token number">0</span> │     <span class="token number">2</span> │    <span class="token number">12</span> │  <span class="token number">0.2000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ second
 <span class="token number">1</span> │     <span class="token number">0</span> │    <span class="token number">15</span> │  <span class="token number">0.5000</span> │  <span class="token number">4.0000</span> │ b     │ a      │ a     │ third
 <span class="token number">2</span> │     <span class="token number">7</span> │    <span class="token number">17</span> │  <span class="token number">0.7000</span> │  <span class="token number">6.0000</span> │ b     │ c      │ a     │ third
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────
</code></pre></div><p>命令 <code>take</code> 非常方便，特别是当我们把它与其他命令混合使用时。 假设我们想提取 <code>first</code> 列中含有第一个重复的元素的的所有记录。为了做到这一点，我们可以使用 <code>arg-unique</code> 命令，如下例所示：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.first <span class="token operator">|</span> arg-unique<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> take <span class="token variable">$indices</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────
 <span class="token number">0</span> │     <span class="token number">1</span> │    <span class="token number">11</span> │  <span class="token number">0.1000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ first
 <span class="token number">1</span> │     <span class="token number">4</span> │    <span class="token number">14</span> │  <span class="token number">0.4000</span> │  <span class="token number">3.0000</span> │ b     │ a      │ c     │ second
 <span class="token number">2</span> │     <span class="token number">8</span> │    <span class="token number">18</span> │  <span class="token number">0.8000</span> │  <span class="token number">7.0000</span> │ c     │ c      │ b     │ eight
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────
</code></pre></div><p>或者，如果我们想使用一个特定的列来创建一个新的有序 DataFrame，该怎么办？我们可以使用<code>arg-sort</code>来完成这个任务。在下一个例子中，我们可以通过<code>word</code>列对 DataFrame 进行排序：</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>同样的结果也可以用<code>sort</code>命令来完成。</p></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.word <span class="token operator">|</span> arg-sort<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> take <span class="token variable">$indices</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────
 <span class="token number">0</span> │     <span class="token number">8</span> │    <span class="token number">18</span> │  <span class="token number">0.8000</span> │  <span class="token number">7.0000</span> │ c     │ c      │ b     │ eight
 <span class="token number">1</span> │     <span class="token number">1</span> │    <span class="token number">11</span> │  <span class="token number">0.1000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ first
 <span class="token number">2</span> │     <span class="token number">9</span> │    <span class="token number">19</span> │  <span class="token number">0.9000</span> │  <span class="token number">8.0000</span> │ c     │ c      │ b     │ ninth
 <span class="token number">3</span> │     <span class="token number">0</span> │    <span class="token number">10</span> │  <span class="token number">0.0000</span> │  <span class="token number">9.0000</span> │ c     │ c      │ b     │ ninth
 <span class="token number">4</span> │     <span class="token number">2</span> │    <span class="token number">12</span> │  <span class="token number">0.2000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ second
 <span class="token number">5</span> │     <span class="token number">4</span> │    <span class="token number">14</span> │  <span class="token number">0.4000</span> │  <span class="token number">3.0000</span> │ b     │ a      │ c     │ second
 <span class="token number">6</span> │     <span class="token number">6</span> │    <span class="token number">16</span> │  <span class="token number">0.6000</span> │  <span class="token number">5.0000</span> │ b     │ a      │ a     │ second
 <span class="token number">7</span> │     <span class="token number">3</span> │    <span class="token number">13</span> │  <span class="token number">0.3000</span> │  <span class="token number">2.0000</span> │ a     │ b      │ c     │ third
 <span class="token number">8</span> │     <span class="token number">0</span> │    <span class="token number">15</span> │  <span class="token number">0.5000</span> │  <span class="token number">4.0000</span> │ b     │ a      │ a     │ third
 <span class="token number">9</span> │     <span class="token number">7</span> │    <span class="token number">17</span> │  <span class="token number">0.7000</span> │  <span class="token number">6.0000</span> │ b     │ c      │ a     │ third
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────
</code></pre></div><p>最后，我们可以通过在标记的索引中设置一个新值来创建新的系列。请看下一条命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&gt;</span> <span class="token variable">$df</span>.int_1 <span class="token operator">|</span> set-with-idx <span class="token number">123</span> <span class="token parameter variable">--indices</span> <span class="token variable">$indices</span>

───┬───────
 <span class="token comment"># │ int_1</span>
───┼───────
 <span class="token number">0</span> │   <span class="token number">123</span>
 <span class="token number">1</span> │     <span class="token number">2</span>
 <span class="token number">2</span> │   <span class="token number">123</span>
 <span class="token number">3</span> │     <span class="token number">4</span>
 <span class="token number">4</span> │     <span class="token number">0</span>
 <span class="token number">5</span> │     <span class="token number">6</span>
 <span class="token number">6</span> │     <span class="token number">7</span>
 <span class="token number">7</span> │     <span class="token number">8</span>
 <span class="token number">8</span> │     <span class="token number">9</span>
 <span class="token number">9</span> │     <span class="token number">0</span>
───┴───────
</code></pre></div><h2 id="唯一值" tabindex="-1"><a class="header-anchor" href="#唯一值" aria-hidden="true">#</a> 唯一值</h2><p>另一个可以用<code>Series</code>完成的操作是在一个列表或列中搜索唯一值。让我们再次使用我们创建的第一个 DataFrame 来测试这些操作。</p><p>第一个也是最常见的操作是<code>value_counts</code>。这个命令计算出一个系列中存在的唯一值的数量。例如，我们可以用它来计算 <code>first</code> 列各值的出现次数：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span>.first <span class="token operator">|</span> value-counts

───┬───────┬────────
 <span class="token comment"># │ first │ counts</span>
───┼───────┼────────
 <span class="token number">0</span> │ b     │      <span class="token number">4</span>
 <span class="token number">1</span> │ c     │      <span class="token number">3</span>
 <span class="token number">2</span> │ a     │      <span class="token number">3</span>
───┴───────┴────────
</code></pre></div><p>正如预期的那样，该命令返回一个新的 DataFrame，可以用来做更多的查询。</p><p>继续我们对 <code>Series</code> 的探索，我们要做的下一件事是只从一个系列中获得唯一值，像这样：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span>.first <span class="token operator">|</span> unique

───┬───────
 <span class="token comment"># │ first</span>
───┼───────
 <span class="token number">0</span> │ c
 <span class="token number">1</span> │ b
 <span class="token number">2</span> │ a
───┴───────
</code></pre></div><p>或者我们可以得到一个掩码，用来过滤出数据唯一或重复的行。例如，我们可以选择列 <code>word</code> 中含唯一值的行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> filter-with <span class="token punctuation">(</span><span class="token variable">$df</span>.word <span class="token operator">|</span> is-unique<span class="token punctuation">)</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬───────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │ word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼───────
 <span class="token number">0</span> │     <span class="token number">1</span> │    <span class="token number">11</span> │  <span class="token number">0.1000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ first
 <span class="token number">1</span> │     <span class="token number">8</span> │    <span class="token number">18</span> │  <span class="token number">0.8000</span> │  <span class="token number">7.0000</span> │ c     │ c      │ b     │ eight
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴───────
</code></pre></div><p>或所有含重复值的行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> filter-with <span class="token punctuation">(</span><span class="token variable">$df</span>.word <span class="token operator">|</span> is-duplicated<span class="token punctuation">)</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────
 <span class="token number">0</span> │     <span class="token number">2</span> │    <span class="token number">12</span> │  <span class="token number">0.2000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ second
 <span class="token number">1</span> │     <span class="token number">3</span> │    <span class="token number">13</span> │  <span class="token number">0.3000</span> │  <span class="token number">2.0000</span> │ a     │ b      │ c     │ third
 <span class="token number">2</span> │     <span class="token number">4</span> │    <span class="token number">14</span> │  <span class="token number">0.4000</span> │  <span class="token number">3.0000</span> │ b     │ a      │ c     │ second
 <span class="token number">3</span> │     <span class="token number">0</span> │    <span class="token number">15</span> │  <span class="token number">0.5000</span> │  <span class="token number">4.0000</span> │ b     │ a      │ a     │ third
 <span class="token number">4</span> │     <span class="token number">6</span> │    <span class="token number">16</span> │  <span class="token number">0.6000</span> │  <span class="token number">5.0000</span> │ b     │ a      │ a     │ second
 <span class="token number">5</span> │     <span class="token number">7</span> │    <span class="token number">17</span> │  <span class="token number">0.7000</span> │  <span class="token number">6.0000</span> │ b     │ c      │ a     │ third
 <span class="token number">6</span> │     <span class="token number">9</span> │    <span class="token number">19</span> │  <span class="token number">0.9000</span> │  <span class="token number">8.0000</span> │ c     │ c      │ b     │ ninth
 <span class="token number">7</span> │     <span class="token number">0</span> │    <span class="token number">10</span> │  <span class="token number">0.0000</span> │  <span class="token number">9.0000</span> │ c     │ c      │ b     │ ninth
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────
</code></pre></div><h2 id="惰性-dataframe" tabindex="-1"><a class="header-anchor" href="#惰性-dataframe" aria-hidden="true">#</a> 惰性 Dataframe</h2><p>惰性 Dataframe 是一种通过创建逻辑计划来查询数据的方法。这种方法的优点是，在你需要提取数据之前，该计划 永远不会被评估。这样，你可以把聚合、连接和选择连在一起，一旦你对所选操作感到满意，就可以收集数据。</p><p>让我们创建一个惰性 Dataframe 的小例子：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> a<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> b<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> c<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> d<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$a</span>
────────────────┬────────────────────────────────────────────────
 plan           │ DATAFRAME<span class="token punctuation">(</span>in-memory<span class="token punctuation">)</span>: <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span>, <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                │     project */2 columns    <span class="token operator">|</span>    details: None<span class="token punctuation">;</span>
                │     selection: <span class="token string">&quot;None&quot;</span>
 optimized_plan │ DATAFRAME<span class="token punctuation">(</span>in-memory<span class="token punctuation">)</span>: <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span>, <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                │     project */2 columns    <span class="token operator">|</span>    details: None<span class="token punctuation">;</span>
                │     selection: <span class="token string">&quot;None&quot;</span>
────────────────┴────────────────────────────────────────────────
</code></pre></div><p>正如你所看到的，产生的 Dataframe 还没有被评估，它以一组可以对数据进行操作的指令的形式存在。 如果你要收集这个 Dataframe，你会得到如下结果：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$a</span> <span class="token operator">|</span> collect
───┬───┬───
 <span class="token comment"># │ a │ b</span>
───┼───┼───
 <span class="token number">0</span> │ <span class="token number">1</span> │ a
 <span class="token number">1</span> │ <span class="token number">2</span> │ b
 <span class="token number">2</span> │ <span class="token number">3</span> │ c
 <span class="token number">3</span> │ <span class="token number">4</span> │ d
───┴───┴───
</code></pre></div><p>正如你所看到的，<code>collect</code> 命令执行了计划并为你创建了一个 Nushell 表。</p><p>所有的 Dataframe 操作都应该能与惰性或者非惰性的 Dataframe 一起工作。为了兼容，这些操作在后台 进行了转换。然而，为了利用惰性操作的优势，我们建议只对惰性 Dataframe 使用惰性操作。</p><p>要找到所有惰性 Dataframe 操作，你可以使用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$nu</span>.scope.commands <span class="token operator">|</span> where category <span class="token operator">=~</span> lazyframe
</code></pre></div><p>在定义了你的惰性 Dataframe 后，我们可以开始对它进行链式操作。例如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$a</span>
:::   <span class="token operator">|</span> reverse
:::   <span class="token operator">|</span> with-column <span class="token punctuation">[</span>
:::      <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> * <span class="token number">2</span> <span class="token operator">|</span> as double_a<span class="token punctuation">)</span>
:::      <span class="token punctuation">((</span>col a<span class="token punctuation">)</span> / <span class="token number">2</span> <span class="token operator">|</span> as half_a<span class="token punctuation">)</span>
:::   <span class="token punctuation">]</span>
:::   <span class="token operator">|</span> collect
───┬───┬───┬──────────┬────────
 <span class="token comment"># │ a │ b │ double_a │ half_a</span>
───┼───┼───┼──────────┼────────
 <span class="token number">0</span> │ <span class="token number">4</span> │ d │        <span class="token number">8</span> │      <span class="token number">2</span>
 <span class="token number">1</span> │ <span class="token number">3</span> │ c │        <span class="token number">6</span> │      <span class="token number">1</span>
 <span class="token number">2</span> │ <span class="token number">2</span> │ b │        <span class="token number">4</span> │      <span class="token number">1</span>
 <span class="token number">3</span> │ <span class="token number">1</span> │ a │        <span class="token number">2</span> │      <span class="token number">0</span>
───┴───┴───┴──────────┴────────
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>你可以使用行缓存编辑器来轻松地格式化你的查询（ctr + o）</p></div><p>这个查询使用惰性 <code>reverse</code> 命令来反转 Dataframe，使用 <code>with-column</code> 命令并使用 <code>expressions</code> 来创建新的两列。 <code>expression</code> 用于定义在惰性 Dataframe 上执行的操作。当它们组合在一起时，就形成了整个由惰性命令来查询数据的 指令集。要列出所有产生表达式的命令，你可以使用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$nu</span>.scope.commands <span class="token operator">|</span> where category <span class="token operator">=~</span> expression
</code></pre></div><p>在我们前面的例子中，我们使用 <code>col</code> 命令来表示列 <code>a</code> 将被乘以2，然后它将被命名为 <code>double_a</code>。 在某些情况下，可以推断出 <code>col</code> 命令的使用，例如，使用 <code>select</code> 命令，我们可以只使用一个字符串：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$a</span> <span class="token operator">|</span> <span class="token keyword">select</span> a <span class="token operator">|</span> collect
</code></pre></div><p>或者使用 <code>col</code> 命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$a</span> <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token punctuation">(</span>col a<span class="token punctuation">)</span> <span class="token operator">|</span> collect
</code></pre></div><p>让我们尝试更复杂的东西，从一个惰性 Dataframe 中创建聚合：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy <span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$a</span>
:::   <span class="token operator">|</span> group-by name
:::   <span class="token operator">|</span> agg <span class="token punctuation">[</span>
:::       <span class="token punctuation">(</span>col value <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> as <span class="token function">sum</span><span class="token punctuation">)</span>
:::       <span class="token punctuation">(</span>col value <span class="token operator">|</span> mean <span class="token operator">|</span> as mean<span class="token punctuation">)</span>
:::     <span class="token punctuation">]</span>
:::   <span class="token operator">|</span> collect
───┬──────┬─────┬──────
 <span class="token comment"># │ name │ sum │ mean</span>
───┼──────┼─────┼──────
 <span class="token number">0</span> │ two  │   <span class="token number">5</span> │ <span class="token number">2.50</span>
 <span class="token number">1</span> │ one  │   <span class="token number">2</span> │ <span class="token number">1.00</span>
───┴──────┴─────┴──────
</code></pre></div><p>我们可以在一个还没有被收集的惰性 Dataframe 上进行连接操作。让我们把产生的分组连接到原来的惰性 Dataframe 中去吧</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy <span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> group <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$a</span>
:::   <span class="token operator">|</span> group-by name
:::   <span class="token operator">|</span> agg <span class="token punctuation">[</span>
:::       <span class="token punctuation">(</span>col value <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> as <span class="token function">sum</span><span class="token punctuation">)</span>
:::       <span class="token punctuation">(</span>col value <span class="token operator">|</span> mean <span class="token operator">|</span> as mean<span class="token punctuation">)</span>
:::     <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$a</span> <span class="token operator">|</span> <span class="token function">join</span> <span class="token variable">$group</span> name name <span class="token operator">|</span> collect
───┬──────┬───────┬─────┬──────
 <span class="token comment"># │ name │ value │ sum │ mean</span>
───┼──────┼───────┼─────┼──────
 <span class="token number">0</span> │ one  │     <span class="token number">1</span> │   <span class="token number">2</span> │ <span class="token number">1.00</span>
 <span class="token number">1</span> │ two  │     <span class="token number">2</span> │   <span class="token number">5</span> │ <span class="token number">2.50</span>
 <span class="token number">2</span> │ one  │     <span class="token number">1</span> │   <span class="token number">2</span> │ <span class="token number">1.00</span>
 <span class="token number">3</span> │ two  │     <span class="token number">3</span> │   <span class="token number">5</span> │ <span class="token number">2.50</span>
───┴──────┴───────┴─────┴──────
</code></pre></div><p>正如你所看到的，惰性 Dataframe 是一个强大的结构，它可以让你使用灵活的语法来查询数据，从而极快地获得结果。</p><h2 id="dataframe-命令" tabindex="-1"><a class="header-anchor" href="#dataframe-命令" aria-hidden="true">#</a> Dataframe 命令</h2><p>到目前为止，我们已经看到了很多可以使用 <code>DataFrame</code> 相关命令的操作。然而，到目前为止，我们所使用的命令并不包括所有可用来处理数据的命令，请放心，随着该功能的稳定，还会有更多的命令。</p><p>下表列出了可用的<code>DataFrame</code>命令及其描述，并尽可能显示其类似的 Nushell 命令。</p><table><thead><tr><th>命令名</th><th>应用于</th><th>描述</th><th>Nushell 类似命令</th></tr></thead><tbody><tr><td>aggregate</td><td>DataFrame, GroupBy, Series</td><td>在一个 DataFrame、GroupBy 或系列对象上执行聚合操作</td><td>math</td></tr><tr><td>all-false</td><td>Series</td><td>如果所有的值都是假的，则返回真</td><td></td></tr><tr><td>all-true</td><td>Series</td><td>如果所有的值都是真的，则返回真</td><td>all</td></tr><tr><td>arg-max</td><td>Series</td><td>返回系列中最大值的索引</td><td></td></tr><tr><td>arg-min</td><td>Series</td><td>返回系列中最小值的索引</td><td></td></tr><tr><td>arg-sort</td><td>Series</td><td>返回排序后的系列的索引</td><td></td></tr><tr><td>arg-true</td><td>Series</td><td>返回值为真的索引</td><td></td></tr><tr><td>arg-unique</td><td>Series</td><td>返回唯一值的索引</td><td></td></tr><tr><td>count-null</td><td>Series</td><td>计算空值</td><td></td></tr><tr><td>count-unique</td><td>Series</td><td>计算唯一值</td><td></td></tr><tr><td>drop</td><td>DataFrame</td><td>通过删除选定的列来创建一个新的 DataFrame</td><td>drop</td></tr><tr><td>drop-duplicates</td><td>DataFrame</td><td>删除 DataFrame 中的重复值</td><td></td></tr><tr><td>drop-nulls</td><td>DataFrame, Series</td><td>丢弃 DataFrame 中的空值</td><td></td></tr><tr><td>dtypes</td><td>DataFrame</td><td>显示 DataFrame 的数据类型</td><td></td></tr><tr><td>filter-with</td><td>DataFrame</td><td>使用 Mask 作为参考来过滤 DataFrame</td><td></td></tr><tr><td>first</td><td>DataFrame</td><td>用第一行创建新的 DataFrame</td><td>first</td></tr><tr><td>get</td><td>DataFrame</td><td>用选定的列创建 DataFrame</td><td>get</td></tr><tr><td>group-by</td><td>DataFrame</td><td>创建一个 GroupBy 对象，可用于其他聚合</td><td>group-by</td></tr><tr><td>is-duplicated</td><td>Series</td><td>创建表示重复值的 Mask</td><td></td></tr><tr><td>is-in</td><td>Series</td><td>检查一个系列的元素是否包含在右边的系列中</td><td>in</td></tr><tr><td>is-not-null</td><td>Series</td><td>创建值为非空的 Mask</td><td></td></tr><tr><td>is-null</td><td>Series</td><td>创建值为空的 Mask</td><td><code>&lt;column_name&gt; == $nothing</code></td></tr><tr><td>is-unique</td><td>Series</td><td>创建表示唯一值的 Mask</td><td></td></tr><tr><td>join</td><td>DataFrame</td><td>使用列作为参考来连接一个 DataFrame</td><td></td></tr><tr><td>last</td><td>DataFrame</td><td>用最后几行创建新的 DataFrame</td><td>last</td></tr><tr><td>ls-df</td><td></td><td>列出已存储的 DataFrame</td><td></td></tr><tr><td>melt</td><td>DataFrame</td><td>将一个 DataFrame 从宽格式转为长格式</td><td></td></tr><tr><td>not</td><td>Series Inverts boolean mask</td><td></td><td></td></tr><tr><td>open</td><td></td><td>从 csv 文件中加载 DataFrame</td><td>open</td></tr><tr><td>pivot</td><td>GroupBy</td><td>在 GroupBy 对象上执行透视操作</td><td>pivot</td></tr><tr><td>rename</td><td>Dataframe, Series</td><td>重命名一个系列</td><td>rename</td></tr><tr><td>sample</td><td>DataFrame</td><td>创建样本 DataFrame</td><td></td></tr><tr><td>select</td><td>DataFrame</td><td>用选定的列创建一个新的 DataFrame</td><td>select</td></tr><tr><td>set</td><td>Series</td><td>在给定的 Mask 为真时设置值</td><td></td></tr><tr><td>set-with-idx</td><td>Series</td><td>设置给定索引中的值</td><td></td></tr><tr><td>shift</td><td>Series</td><td>将值移到一个给定的时段</td><td></td></tr><tr><td>show</td><td>DataFrame</td><td>将 DataFrame 的一个部分转换为一个表或列表值</td><td></td></tr><tr><td>slice</td><td>DataFrame</td><td>从行的切片中创建新的 DataFrame</td><td></td></tr><tr><td>sort-by</td><td>DataFrame, Series</td><td>创建新的排序 DataFrame 或系列</td><td>sort</td></tr><tr><td>take</td><td>DataFrame, Series</td><td>使用给定的索引创建新的 DataFrame</td><td></td></tr><tr><td>to csv</td><td>DataFrame</td><td>将 DataFrame 保存为 csv 文件</td><td>to csv</td></tr><tr><td>into df</td><td></td><td>将一个管道里的表或列表转换为 DataFrame</td><td></td></tr><tr><td>dummies</td><td>DataFrame</td><td>创建一个带有假值的新 DataFrame</td><td></td></tr><tr><td>to parquet</td><td>DataFrame</td><td>将 DataFrame 保存到 parquet 文件中</td><td></td></tr><tr><td>unique</td><td>Series</td><td>返回一个系列中的唯一值</td><td>uniq</td></tr><tr><td>value-counts</td><td>Series</td><td>返回一个带有系列中唯一值的计数的 DataFrame</td><td></td></tr><tr><td>where</td><td>DataFrame</td><td>过滤 DataFrame 以符合条件</td><td>where</td></tr><tr><td>with-column</td><td>DataFrame</td><td>在 DataFrame 中添加一个系列</td><td><code>insert &lt;column_name&gt; &lt;value&gt; | upsert &lt;column_name&gt; { &lt;new_value&gt; }</code></td></tr></tbody></table><h2 id="dataframes-的未来" tabindex="-1"><a class="header-anchor" href="#dataframes-的未来" aria-hidden="true">#</a> DataFrames 的未来</h2><p>我们希望在本页结束时，你已经牢固掌握了如何使用 DataFrame 相关命令。正如你所看到的，它们提供了强大的操作，可以帮助你更快更原生地处理数据。</p><p>然而，DataFrames 的未来仍然是非常实验性的，随着这些命令的成熟，新的命令和利用这些命令的工具将被加入。例如，DataFrames 的下一步是引入惰性 DataFrames，这将允许你定义复杂的数据操作，这些操作将在你决定 &quot;<strong>完成</strong>&quot; 这个管道时才被执行。这将使 Nushell 有机会选择最佳计划来查询你所要求的数据。</p><p>请继续访问本书，以查看 DataFrames 的最新情况，以及它们如何帮助你更快更有效地处理数据。</p>`,91);function I(z,M){const e=p("ExternalLinkIcon"),o=p("RouterLink");return l(),r("div",null,[d,n("p",null,[a("出于这个原因，Nushell 引入了"),i,a("结构。"),m,a("以列格式存储数据，以 "),n("a",b,[a("Apache Arrow"),s(e)]),a(" 规范为基础，并使用 "),n("a",h,[a("Polars"),s(e)]),a(" 作为执行极其 "),n("a",g,[a("快速列式操作"),s(e)]),a(" 的马达。")]),v,f,n("p",null,[a("在这个小的性能测试练习中，我们将比较本地的 Nushell 原生命令、Nushell DataFrame 相关命令和"),n("a",_,[a("Python Pandas"),s(e)]),a("命令。暂时不要太在意"),D,a("命令，它们将在本页后面的章节中解释。")]),F,w,n("p",null,[a("我们将用于性能测试的文件是 "),n("a",x,[a("新西兰商业人口统计"),s(e)]),a(" 数据集。 如果你想尝试这些测试，请下载该文件。")]),$,n("p",null,[a("让我们先来比较一下各种方法的加载时间。首先，我们将使用 Nushell 的"),s(o,{to:"/commands/docs/open.html"},{default:u(()=>[y]),_:1}),a("命令加载数据：")]),q,n("p",null,[a("值得一提的是，在使用 DataFrame 时，内存是如何被优化的呢？这要感谢 "),N,a(" 和 "),S,a("。在一个非常简单的表示中，DataFrame 中的每一列都是一个 Arrow 数组，它使用了几种内存规格，以塞满尽可能多的数据（查看 "),n("a",A,[a("Arrow 列格式"),s(e)]),a(" ）；另一个优化技巧是，只要有可能，DataFrame 中的列就会在多个 DataFrame 之间共享，避免了相同数据的内存重复占用。这意味着 DataFrame "),P,a("和"),G,a("共享我们用 "),B,a(" 命令创建的两个列。由于这个原因，不能改变 DataFrame 中某一列的值。然而，你可以根据其他列或 DataFrame 的数据创建新的列。")]),T])}const O=c(k,[["render",I],["__file","dataframes.html.vue"]]);export{O as default};
