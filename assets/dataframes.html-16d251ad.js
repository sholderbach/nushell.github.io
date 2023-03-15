import{_ as l,M as c,p as r,q as u,Q as a,t as n,N as s,U as t,a1 as o}from"./framework-344bb0e4.js";const i={},d=a("h1",{id:"dataframes",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#dataframes","aria-hidden":"true"},"#"),n(" Dataframes")],-1),m={class:"custom-container warning"},k=a("p",{class:"custom-container-title"},"WARNING",-1),b=a("code",null,"cargo build --features dataframe",-1),h=a("em",null,"not",-1),g=a("p",null,[n("As we have seen so far, Nushell makes working with data its main priority. "),a("code",null,"Lists"),n(" and "),a("code",null,"Tables"),n(" are there to help you cycle through values in order to perform multiple operations or find data in a breeze. However, there are certain operations where a row-based data layout is not the most efficient way to process data, especially when working with extremely large files. Operations like group-by or join using large datasets can be costly memory-wise, and may lead to large computation times if they are not done using the appropriate data format.")],-1),f=a("code",null,"DataFrame",-1),v=a("code",null,"DataFrame",-1),w={href:"https://arrow.apache.org/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/pola-rs/polars",target:"_blank",rel:"noopener noreferrer"},y={href:"https://h2oai.github.io/db-benchmark/",target:"_blank",rel:"noopener noreferrer"},x=a("p",null,"You may be wondering now how fast this combo could be, and how could it make working with data easier and more reliable. For this reason, let's start this page by presenting benchmarks on common operations that are done when processing data.",-1),$=a("h2",{id:"benchmark-comparisons",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#benchmark-comparisons","aria-hidden":"true"},"#"),n(" Benchmark comparisons")],-1),D={href:"https://pandas.pydata.org/",target:"_blank",rel:"noopener noreferrer"},q=a("code",null,"dataframe",-1),S=a("blockquote",null,[a("p",null,"System Details: The benchmarks presented in this section were run using a machine with a processor Intel(R) Core(TM) i7-10710U (CPU @1.10GHz 1.61 GHz) and 16 gb of RAM."),a("p",null,"All examples were run on Nushell version 0.33.1.")],-1),A=a("h3",{id:"file-information",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#file-information","aria-hidden":"true"},"#"),n(" File information")],-1),F={href:"https://www.stats.govt.nz/assets/Uploads/New-Zealand-business-demography-statistics/New-Zealand-business-demography-statistics-At-February-2020/Download-data/Geographic-units-by-industry-and-statistical-area-2000-2020-descending-order-CSV.zip",target:"_blank",rel:"noopener noreferrer"},T=o(`<p>The dataset has 5 columns and 5,429,252 rows. We can check that by using the <code>ls-df</code> command:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span>open-df .<span class="token punctuation">\\</span>Data7602DescendingYearOrder.csv<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> ls-df

───┬──────┬─────────┬─────────
 <span class="token comment"># │ name │  rows   │ columns</span>
───┼──────┼─────────┼─────────
 <span class="token number">0</span> │ <span class="token variable">$df</span>  │ <span class="token number">5429252</span> │ <span class="token number">5</span>
───┴──────┴─────────┴─────────
</code></pre></div>`,2),N=a("code",null,"first",-1),z=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> first

───┬──────────┬─────────┬──────┬───────────┬──────────
 <span class="token comment"># │ anzsic06 │  Area   │ year │ geo_count │ ec_count</span>
───┼──────────┼─────────┼──────┼───────────┼──────────
 <span class="token number">0</span> │ A        │ A100100 │ <span class="token number">2000</span> │        <span class="token number">96</span> │      <span class="token number">130</span>
 <span class="token number">1</span> │ A        │ A100200 │ <span class="token number">2000</span> │       <span class="token number">198</span> │      <span class="token number">110</span>
 <span class="token number">2</span> │ A        │ A100300 │ <span class="token number">2000</span> │        <span class="token number">42</span> │       <span class="token number">25</span>
 <span class="token number">3</span> │ A        │ A100400 │ <span class="token number">2000</span> │        <span class="token number">66</span> │       <span class="token number">40</span>
 <span class="token number">4</span> │ A        │ A100500 │ <span class="token number">2000</span> │        <span class="token number">63</span> │       <span class="token number">40</span>
───┴──────────┴─────────┴──────┴───────────┴──────────
</code></pre></div><p>...and finally, we can get an idea of the inferred data types:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> dtypes

───┬───────────┬───────
 <span class="token comment"># │  column   │ dtype</span>
───┼───────────┼───────
 <span class="token number">0</span> │ anzsic06  │ str
 <span class="token number">1</span> │ Area      │ str
 <span class="token number">2</span> │ year      │ i64
 <span class="token number">3</span> │ geo_count │ i64
 <span class="token number">4</span> │ ec_count  │ i64
───┴───────────┴───────
</code></pre></div><h3 id="loading-the-file" tabindex="-1"><a class="header-anchor" href="#loading-the-file" aria-hidden="true">#</a> Loading the file</h3>`,4),L=a("code",null,"open",-1),C=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>open .<span class="token punctuation">\\</span>Data7602DescendingYearOrder.csv<span class="token punctuation">}</span>

───┬─────────────────────────
 <span class="token comment"># │        real time</span>
───┼─────────────────────────
 <span class="token number">0</span> │ 30sec 479ms 614us 400ns
───┴─────────────────────────
</code></pre></div><p>Loading the file using native Nushell functionality took 30 seconds. Not bad for loading five million records! But we can do a bit better than that.</p><p>Let&#39;s now use Pandas. We are going to use the next script to load the file:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&quot;Data7602DescendingYearOrder.csv&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>And the benchmark for it is:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>python load.py<span class="token punctuation">}</span>

───┬───────────────────────
 <span class="token comment"># │       real time</span>
───┼───────────────────────
 <span class="token number">0</span> │ 2sec 91ms 872us 900ns
───┴───────────────────────
</code></pre></div><p>That is a great improvement, from 30 seconds to 2 seconds. Nicely done, Pandas!</p><p>Probably we can load the data a bit faster. This time we will use Nushell&#39;s <code>open-df</code> command:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>open-df .<span class="token punctuation">\\</span>Data7602DescendingYearOrder.csv<span class="token punctuation">}</span>

───┬───────────────────
 <span class="token comment"># │     real time</span>
───┼───────────────────
 <span class="token number">0</span> │ 601ms 700us 700ns
───┴───────────────────
</code></pre></div><p>This time it took us 0.6 seconds. Not bad at all.</p><h3 id="group-by-comparison" tabindex="-1"><a class="header-anchor" href="#group-by-comparison" aria-hidden="true">#</a> Group-by comparison</h3><p>Let&#39;s do a slightly more complex operation this time. We are going to group the data by year, and add groups using the column <code>geo_count</code>.</p><p>Again, we are going to start with a Nushell native command.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you want to run this example, be aware that the next command will use a large amount of memory. This may affect the performance of your system while this is being executed.</p></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>
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
</code></pre></div><p>So, six minutes to perform this aggregated operation.</p><p>Let&#39;s try the same operation in pandas:</p><div class="language-python" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

df <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_csv<span class="token punctuation">(</span><span class="token string">&quot;Data7602DescendingYearOrder.csv&quot;</span><span class="token punctuation">)</span>
res <span class="token operator">=</span> df<span class="token punctuation">.</span>groupby<span class="token punctuation">(</span><span class="token string">&quot;year&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&quot;geo_count&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre></div><p>And the result from the benchmark is:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>python .<span class="token punctuation">\\</span>load.py<span class="token punctuation">}</span>

───┬────────────────────────
 <span class="token comment"># │       real time</span>
───┼────────────────────────
 <span class="token number">0</span> │ 1sec 966ms 954us 800ns
───┴────────────────────────
</code></pre></div><p>Not bad at all. Again, pandas managed to get it done in a fraction of the time.</p><p>To finish the comparison, let&#39;s try Nushell dataframes. We are going to put all the operations in one <code>nu</code> file, to make sure we are doing similar operations:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> open-df Data7602DescendingYearOrder.csv
<span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span> <span class="token operator">|</span> group-by year <span class="token operator">|</span> agg <span class="token punctuation">(</span>col geo_count <span class="token operator">|</span> <span class="token function">sum</span><span class="token punctuation">))</span>
<span class="token variable">$res</span>
</code></pre></div><p>and the benchmark with dataframes is:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> benchmark <span class="token punctuation">{</span>source load.nu<span class="token punctuation">}</span>

───┬───────────────────
 <span class="token comment"># │     real time</span>
───┼───────────────────
 <span class="token number">0</span> │ 557ms 658us 500ns
───┴───────────────────
</code></pre></div><p>Luckily Nushell dataframes managed to halve the time again. Isn&#39;t that great?</p><p>As you can see, Nushell&#39;s <code>Dataframe</code> commands are as fast as the most common tools that exist today to do data analysis. The commands that are included in this release have the potential to become your go-to tool for doing data analysis. By composing complex Nushell pipelines, you can extract information from data in a reliable way.</p><h2 id="working-with-dataframes" tabindex="-1"><a class="header-anchor" href="#working-with-dataframes" aria-hidden="true">#</a> Working with Dataframes</h2><p>After seeing a glimpse of the things that can be done with <code>Dataframe</code> commands, now it is time to start testing them. To begin let&#39;s create a sample CSV file that will become our sample dataframe that we will be using along with the examples. In your favorite file editor paste the next lines to create out sample csv file.</p><div class="language-csv" data-ext="csv"><pre class="language-csv"><code><span class="token value">int_1</span><span class="token punctuation">,</span><span class="token value">int_2</span><span class="token punctuation">,</span><span class="token value">float_1</span><span class="token punctuation">,</span><span class="token value">float_2</span><span class="token punctuation">,</span><span class="token value">first</span><span class="token punctuation">,</span><span class="token value">second</span><span class="token punctuation">,</span><span class="token value">third</span><span class="token punctuation">,</span><span class="token value">word</span>
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
</code></pre></div><p>Save the file and name it however you want to, for the sake of these examples the file will be called <code>test_small.csv</code>.</p><p>Now, to read that file as a dataframe use the <code>open-df</code> command like this:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> open-df test_small.csv
</code></pre></div><p>This should create the value <code>$df</code> in memory which holds the data we just created.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The command <code>open-df</code> can read either <strong>csv</strong> or <strong>parquet</strong> files.</p></div><p>To see all the dataframes that are stored in memory you can use</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ls-df

───┬──────┬──────┬─────────
 <span class="token comment"># │ name │ rows │ columns</span>
───┼──────┼──────┼─────────
 <span class="token number">0</span> │ <span class="token variable">$df</span>  │ <span class="token number">10</span>   │ <span class="token number">8</span>
───┴──────┴──────┴─────────
</code></pre></div><p>As you can see, the command shows the created dataframes together with basic information about them.</p><p>And if you want to see a preview of the loaded dataframe you can send the dataframe variable to the stream</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span>

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
</code></pre></div><p>With the dataframe in memory we can start doing column operations with the <code>DataFrame</code></p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you want to see all the dataframe commands that are available you can use <code>$nu.scope.commands | where category =~ dataframe</code></p></div><h2 id="basic-aggregations" tabindex="-1"><a class="header-anchor" href="#basic-aggregations" aria-hidden="true">#</a> Basic aggregations</h2><p>Let&#39;s start with basic aggregations on the dataframe. Let&#39;s sum all the columns that exist in <code>df</code> by using the <code>aggregate</code> command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> <span class="token function">sum</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬──────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │ word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼──────
 <span class="token number">0</span> │    <span class="token number">40</span> │   <span class="token number">145</span> │  <span class="token number">4.5000</span> │ <span class="token number">46.0000</span> │       │        │       │
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴──────
</code></pre></div>`,45),I=a("code",null,"select",-1),j=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$df</span> <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> <span class="token keyword">select</span> int_1 int_2 float_1 float_2

───┬───────┬───────┬─────────┬─────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2</span>
───┼───────┼───────┼─────────┼─────────
 <span class="token number">0</span> │    <span class="token number">40</span> │   <span class="token number">145</span> │  <span class="token number">4.5000</span> │ <span class="token number">46.0000</span>
───┴───────┴───────┴─────────┴─────────
</code></pre></div><p>You can even store the result from this aggregation as you would store any other Nushell variable</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> res <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span> <span class="token operator">|</span> <span class="token function">sum</span> <span class="token operator">|</span> <span class="token keyword">select</span> int_1 int_2 float_1 float_2<span class="token punctuation">)</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Type <code>let res = ( !! )</code> and press enter. This will auto complete the previously executed command. Note the space between ( and !!.</p></div><p>And now we have two dataframes stored in memory</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ls-df

───┬──────┬──────┬─────────
 <span class="token comment"># │ name │ rows │ columns</span>
───┼──────┼──────┼─────────
 <span class="token number">0</span> │ <span class="token variable">$df</span>  │ <span class="token number">10</span>   │ <span class="token number">8</span>
 <span class="token number">1</span> │ <span class="token variable">$res</span> │ <span class="token number">1</span>    │ <span class="token number">4</span>
───┴──────┴──────┴─────────
</code></pre></div><p>Pretty neat, isn&#39;t it?</p><p>You can perform several aggregations on the dataframe in order to extract basic information from the dataframe and do basic data analysis on your brand new dataframe.</p><h2 id="joining-a-dataframe" tabindex="-1"><a class="header-anchor" href="#joining-a-dataframe" aria-hidden="true">#</a> Joining a DataFrame</h2><p>It is also possible to join two dataframes using a column as reference. We are going to join our mini dataframe with another mini dataframe. Copy these lines in another file and create the corresponding dataframe (for these examples we are going to call it <code>test_small_a.csv</code>)</p><div class="language-text" data-ext="text"><pre class="language-text"><code>int_1,int_2,float_1,float_2,first
9,14,0.4,3.0,a
8,13,0.3,2.0,a
7,12,0.2,1.0,a
6,11,0.1,0.0,b
</code></pre></div><p>We use the <code>open-df</code> command to create the new variable</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> df_a <span class="token operator">=</span> open-df test_small_a.csv
</code></pre></div><p>Now, with the second dataframe loaded in memory we can join them using the column called <code>int_1</code> from the left dataframe and the column <code>int_1</code> from the right dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> <span class="token function">join</span> <span class="token variable">$df_a</span> int_1 int_1

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬─────────┬─────────────┬───────────────┬───────────────┬─────────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word   │ int_2_right │ float_1_right │ float_2_right │ first_right</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼─────────┼─────────────┼───────────────┼───────────────┼─────────────
 <span class="token number">0</span> │     <span class="token number">6</span> │    <span class="token number">16</span> │  <span class="token number">0.6000</span> │  <span class="token number">5.0000</span> │ b     │ a      │ a     │ second  │          <span class="token number">11</span> │        <span class="token number">0.1000</span> │        <span class="token number">0.0000</span> │ b
 <span class="token number">1</span> │     <span class="token number">7</span> │    <span class="token number">17</span> │  <span class="token number">0.7000</span> │  <span class="token number">6.0000</span> │ b     │ c      │ a     │ third   │          <span class="token number">12</span> │        <span class="token number">0.2000</span> │        <span class="token number">1.0000</span> │ a
 <span class="token number">2</span> │     <span class="token number">8</span> │    <span class="token number">18</span> │  <span class="token number">0.8000</span> │  <span class="token number">7.0000</span> │ c     │ c      │ b     │ eight   │          <span class="token number">13</span> │        <span class="token number">0.3000</span> │        <span class="token number">2.0000</span> │ a
 <span class="token number">3</span> │     <span class="token number">9</span> │    <span class="token number">19</span> │  <span class="token number">0.9000</span> │  <span class="token number">8.0000</span> │ c     │ c      │ b     │ ninth   │          <span class="token number">14</span> │        <span class="token number">0.4000</span> │        <span class="token number">3.0000</span> │ a
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴─────────┴─────────────┴───────────────┴───────────────┴─────────────
</code></pre></div>`,15),W={class:"custom-container tip"},P=a("p",{class:"custom-container-title"},"TIP",-1),R=a("code",null,"Nu",-1),B=a("code",null,"[]",-1),O=a("code",null,"dfr join",-1),G=a("code",null,"$df | dfr join $df_a [int_1 int_2] [int_1 int_2]",-1),Y=a("p",null,"By default, the join command does an inner join, meaning that it will keep the rows where both dataframes share the same value. You can select a left join to keep the missing rows from the left dataframe. You can also save this result in order to use it for further operations.",-1),H=a("h2",{id:"dataframe-group-by",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#dataframe-group-by","aria-hidden":"true"},"#"),n(" DataFrame group-by")],-1),U=a("code",null,"group-by",-1),E=a("code",null,"GroupBy",-1),V=a("code",null,"GroupBy",-1),M=a("code",null,"group-by",-1),Z=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> group <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span> <span class="token operator">|</span> group-by first<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$group</span>

 LazyGroupBy │ apply aggregation to complete execution plan
</code></pre></div><p>When printing the <code>GroupBy</code> object we can see that it is in the background a lazy operation waiting to be completed by adding an aggregation. Using the <code>GroupBy</code> we can create aggregations on a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$group</span> <span class="token operator">|</span> agg <span class="token punctuation">(</span>col int_1 <span class="token operator">|</span> <span class="token function">sum</span><span class="token punctuation">)</span>

───┬───────┬───────────┬
 <span class="token comment"># │ first │ int_1     │</span>
───┼───────┼───────────┼
 <span class="token number">0</span> │ a     │         <span class="token number">6</span> │
 <span class="token number">1</span> │ b     │        <span class="token number">17</span> │
 <span class="token number">2</span> │ c     │        <span class="token number">17</span> │
───┴───────┴───────────┴
</code></pre></div><p>or we can define multiple aggregations on the same or different columns</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$group</span> <span class="token operator">|</span> agg <span class="token punctuation">[</span>
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
</code></pre></div><p>As you can see, the <code>GroupBy</code> object is a very powerful variable and it is worth keeping in memory while you explore your dataset.</p><h2 id="creating-dataframes" tabindex="-1"><a class="header-anchor" href="#creating-dataframes" aria-hidden="true">#</a> Creating Dataframes</h2><p>It is also possible to construct dataframes from basic Nushell primitives, such as integers, decimals, or strings. Let&#39;s create a small dataframe using the command <code>into df</code>.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$a</span>

───┬───┬───
 <span class="token comment"># │ b │ a</span>
───┼───┼───
 <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">1</span>
 <span class="token number">1</span> │ <span class="token number">4</span> │ <span class="token number">3</span>
 <span class="token number">2</span> │ <span class="token number">6</span> │ <span class="token number">5</span>
───┴───┴───
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For the time being, not all of Nushell primitives can be converted into a dataframe. This will change in the future, as the dataframe feature matures</p></div><p>We can append columns to a dataframe in order to create a new variable. As an example, let&#39;s append two columns to our mini dataframe <code>$a</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token operator">|</span> with-column <span class="token variable">$a</span>.a <span class="token parameter variable">--name</span> a2 <span class="token operator">|</span> with-column <span class="token variable">$a</span>.a <span class="token parameter variable">--name</span> a3<span class="token punctuation">)</span>

───┬───┬───┬────┬────
 <span class="token comment"># │ b │ a │ a2 │ a3</span>
───┼───┼───┼────┼────
 <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">1</span> │  <span class="token number">1</span> │  <span class="token number">1</span>
 <span class="token number">1</span> │ <span class="token number">4</span> │ <span class="token number">3</span> │  <span class="token number">3</span> │  <span class="token number">3</span>
 <span class="token number">2</span> │ <span class="token number">6</span> │ <span class="token number">5</span> │  <span class="token number">5</span> │  <span class="token number">5</span>
───┴───┴───┴────┴────
</code></pre></div><p>Nushell&#39;s powerful piping syntax allows us to create new dataframes by taking data from other dataframes and appending it to them. Now, if you list your dataframes you will see in total four dataframes</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ls-df

───┬───────┬──────┬─────────
 <span class="token comment"># │  name │ rows │ columns</span>
───┼───────┼──────┼─────────
 <span class="token number">0</span> │ <span class="token variable">$a</span>    │ <span class="token number">3</span>    │ <span class="token number">2</span>
 <span class="token number">1</span> │ <span class="token variable">$a2</span>   │ <span class="token number">3</span>    │ <span class="token number">4</span>
 <span class="token number">2</span> │ <span class="token variable">$df_a</span> │ <span class="token number">4</span>    │ <span class="token number">5</span>
 <span class="token number">3</span> │ <span class="token variable">$df</span>   │ <span class="token number">10</span>   │ <span class="token number">8</span>
───┴───────┴──────┴─────────
</code></pre></div>`,14),J=a("strong",null,"Apache Arrow",-1),K=a("strong",null,"Polars",-1),Q={href:"https://arrow.apache.org/docs/format/Columnar.html",target:"_blank",rel:"noopener noreferrer"},X=a("code",null,"$a",-1),aa=a("code",null,"$a2",-1),na=a("code",null,"into df",-1),sa=o(`<h2 id="working-with-series" tabindex="-1"><a class="header-anchor" href="#working-with-series" aria-hidden="true">#</a> Working with Series</h2><p>A <code>Series</code> is the building block of a <code>DataFrame</code>. Each Series represents a column with the same data type, and we can create multiple Series of different types, such as float, int or string.</p><p>Let&#39;s start our exploration with Series by creating one using the <code>into df</code> command:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> new <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">9</span> <span class="token number">8</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new</span>

───┬───
 <span class="token comment"># │ 0</span>
───┼───
 <span class="token number">0</span> │ <span class="token number">9</span>
 <span class="token number">1</span> │ <span class="token number">8</span>
 <span class="token number">2</span> │ <span class="token number">4</span>
───┴───
</code></pre></div><p>We have created a new series from a list of integers (we could have done the same using floats or strings)</p><p>Series have their own basic operations defined, and they can be used to create other Series. Let&#39;s create a new Series by doing some arithmetic on the previously created column.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> new_2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$new</span> * <span class="token number">3</span> + <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new_2</span>

───┬────
 <span class="token comment"># │ 0</span>
───┼────
 <span class="token number">0</span> │ <span class="token number">37</span>
 <span class="token number">1</span> │ <span class="token number">34</span>
 <span class="token number">2</span> │ <span class="token number">22</span>
───┴────
</code></pre></div><p>Now we have a new Series that was constructed by doing basic operations on the previous variable.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you want to see how many variables you have stored in memory you can use <code>$nu.scope.vars</code></p></div><p>Let&#39;s rename our previous Series so it has a memorable name</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> new_2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$new_2</span> <span class="token operator">|</span> <span class="token function">rename</span> <span class="token string">&quot;0&quot;</span> memorable<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new_2</span>

───┬───────────
 <span class="token comment"># │ memorable</span>
───┼───────────
 <span class="token number">0</span> │        <span class="token number">37</span>
 <span class="token number">1</span> │        <span class="token number">34</span>
 <span class="token number">2</span> │        <span class="token number">22</span>
───┴───────────
</code></pre></div><p>We can also do basic operations with two Series as long as they have the same data type</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$new</span> - <span class="token variable">$new_2</span>

───┬──────────
 <span class="token comment"># │ sub_0_0</span>
───┼──────────
 <span class="token number">0</span> │     <span class="token parameter variable">-28</span>
 <span class="token number">1</span> │     <span class="token parameter variable">-26</span>
 <span class="token number">2</span> │     <span class="token parameter variable">-18</span>
───┴──────────
</code></pre></div><p>And we can add them to previously defined dataframes</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> new_df <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$a</span> <span class="token operator">|</span> with-column <span class="token variable">$new</span> <span class="token parameter variable">--name</span> new_col<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new_df</span>

───┬───┬───┬─────────
 <span class="token comment"># │ b │ a │ new_col</span>
───┼───┼───┼─────────
 <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">1</span> │       <span class="token number">9</span>
 <span class="token number">1</span> │ <span class="token number">4</span> │ <span class="token number">3</span> │       <span class="token number">8</span>
 <span class="token number">2</span> │ <span class="token number">6</span> │ <span class="token number">5</span> │       <span class="token number">4</span>
───┴───┴───┴─────────
</code></pre></div><p>The Series stored in a Dataframe can also be used directly, for example, we can multiply columns <code>a</code> and <code>b</code> to create a new Series</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$new_df</span>.a * <span class="token variable">$new_df</span>.b

───┬─────────
 <span class="token comment"># │ mul_a_b</span>
───┼─────────
 <span class="token number">0</span> │       <span class="token number">2</span>
 <span class="token number">1</span> │      <span class="token number">12</span>
 <span class="token number">2</span> │      <span class="token number">30</span>
───┴─────────
</code></pre></div><p>and we can start piping things in order to create new columns and dataframes</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$new_df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$new_df</span> <span class="token operator">|</span> with-column <span class="token punctuation">(</span><span class="token variable">$new_df</span>.a * <span class="token variable">$new_df</span>.b / <span class="token variable">$new_df</span>.new_col<span class="token punctuation">)</span> <span class="token parameter variable">--name</span> my_sum<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token variable">$new_df</span>

───┬───┬───┬─────────┬────────
 <span class="token comment"># │ b │ a │ new_col │ my_sum</span>
───┼───┼───┼─────────┼────────
 <span class="token number">0</span> │ <span class="token number">2</span> │ <span class="token number">1</span> │       <span class="token number">9</span> │      <span class="token number">0</span>
 <span class="token number">1</span> │ <span class="token number">4</span> │ <span class="token number">3</span> │       <span class="token number">8</span> │      <span class="token number">1</span>
 <span class="token number">2</span> │ <span class="token number">6</span> │ <span class="token number">5</span> │       <span class="token number">4</span> │      <span class="token number">7</span>
───┴───┴───┴─────────┴────────
</code></pre></div><p>Nushell&#39;s piping system can help you create very interesting workflows.</p><h2 id="series-and-masks" tabindex="-1"><a class="header-anchor" href="#series-and-masks" aria-hidden="true">#</a> Series and masks</h2><p>Series have another key use in when working with DataFrames, and it is the fact that we can build boolean masks out of them. Let&#39;s start by creating a simple mask using the equality operator</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> mask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$new</span> <span class="token operator">==</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$mask</span>

───┬─────────
 <span class="token comment"># │ new_col</span>
───┼─────────
 <span class="token number">0</span> │ <span class="token boolean">false</span>
 <span class="token number">1</span> │ <span class="token boolean">true</span>
 <span class="token number">2</span> │ <span class="token boolean">false</span>
───┴─────────
</code></pre></div><p>and with this mask we can now filter a dataframe, like this</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$new_df</span> <span class="token operator">|</span> filter-with <span class="token variable">$mask</span>

───┬───┬───┬─────────┬────────
 <span class="token comment"># │ a │ b │ new_col │ my_sum</span>
───┼───┼───┼─────────┼────────
 <span class="token number">0</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │       <span class="token number">8</span> │      <span class="token number">1</span>
───┴───┴───┴─────────┴────────
</code></pre></div><p>Now we have a new dataframe with only the values where the mask was true.</p><p>The masks can also be created from Nushell lists, for example:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> mask1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>true <span class="token boolean">true</span> false<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$new_df</span> <span class="token operator">|</span> filter-with <span class="token variable">$mask1</span>

───┬───┬───┬─────────┬────────
 <span class="token comment"># │ a │ b │ new_col │ my_sum</span>
───┼───┼───┼─────────┼────────
 <span class="token number">0</span> │ <span class="token number">1</span> │ <span class="token number">2</span> │       <span class="token number">9</span> │      <span class="token number">0</span>
 <span class="token number">1</span> │ <span class="token number">3</span> │ <span class="token number">4</span> │       <span class="token number">8</span> │      <span class="token number">1</span>
───┴───┴───┴─────────┴────────
</code></pre></div><p>To create complex masks, we have the <code>AND</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$mask</span> and <span class="token variable">$mask1</span>

───┬──────────────────
 <span class="token comment"># │ and_new_col_mask</span>
───┼──────────────────
 <span class="token number">0</span> │ <span class="token boolean">false</span>
 <span class="token number">1</span> │ <span class="token boolean">true</span>
 <span class="token number">2</span> │ <span class="token boolean">false</span>
───┴──────────────────
</code></pre></div><p>and <code>OR</code> operations</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$mask</span> or <span class="token variable">$mask1</span>

───┬─────────────────
 <span class="token comment"># │ or_new_col_mask</span>
───┼─────────────────
 <span class="token number">0</span> │ <span class="token boolean">true</span>
 <span class="token number">1</span> │ <span class="token boolean">true</span>
 <span class="token number">2</span> │ <span class="token boolean">false</span>
───┴─────────────────
</code></pre></div><p>We can also create a mask by checking if some values exist in other Series. Using the first dataframe that we created we can do something like this</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> mask3 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.first <span class="token operator">|</span> is-in <span class="token punctuation">(</span><span class="token punctuation">[</span>b c<span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">))</span>

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
</code></pre></div><p>and this new mask can be used to filter the dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> filter-with <span class="token variable">$mask3</span>

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
</code></pre></div>`,36),ea=a("code",null,"first",-1),ta=a("code",null,"a",-1),oa=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span>.first <span class="token operator">|</span> <span class="token builtin class-name">set</span> new <span class="token parameter variable">--mask</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.first <span class="token operator">=~</span> a<span class="token punctuation">)</span>

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
</code></pre></div><h2 id="series-as-indices" tabindex="-1"><a class="header-anchor" href="#series-as-indices" aria-hidden="true">#</a> Series as indices</h2><p>Series can be also used as a way of filtering a dataframe by using them as a list of indices. For example, let&#39;s say that we want to get rows 1, 4, and 6 from our original dataframe. With that in mind, we can use the next command to extract that information</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> take <span class="token variable">$indices</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────
 <span class="token number">0</span> │     <span class="token number">2</span> │    <span class="token number">12</span> │  <span class="token number">0.2000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ second
 <span class="token number">1</span> │     <span class="token number">0</span> │    <span class="token number">15</span> │  <span class="token number">0.5000</span> │  <span class="token number">4.0000</span> │ b     │ a      │ a     │ third
 <span class="token number">2</span> │     <span class="token number">7</span> │    <span class="token number">17</span> │  <span class="token number">0.7000</span> │  <span class="token number">6.0000</span> │ b     │ c      │ a     │ third
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────
</code></pre></div>`,4),pa=a("code",null,"take",-1),ca=a("code",null,"first",-1),la=a("code",null,"arg-unique",-1),ra=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.first <span class="token operator">|</span> arg-unique<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> take <span class="token variable">$indices</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬────────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │  word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼────────
 <span class="token number">0</span> │     <span class="token number">1</span> │    <span class="token number">11</span> │  <span class="token number">0.1000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ first
 <span class="token number">1</span> │     <span class="token number">4</span> │    <span class="token number">14</span> │  <span class="token number">0.4000</span> │  <span class="token number">3.0000</span> │ b     │ a      │ c     │ second
 <span class="token number">2</span> │     <span class="token number">8</span> │    <span class="token number">18</span> │  <span class="token number">0.8000</span> │  <span class="token number">7.0000</span> │ c     │ c      │ b     │ eight
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴────────
</code></pre></div><p>Or what if we want to create a new sorted dataframe using a column in specific. We can use the <code>arg-sort</code> to accomplish that. In the next example we can sort the dataframe by the column <code>word</code></p>`,2),ua={class:"custom-container tip"},ia=a("p",{class:"custom-container-title"},"TIP",-1),da=a("code",null,"sort",-1),ma=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$df</span>.word <span class="token operator">|</span> arg-sort<span class="token punctuation">)</span>
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
</code></pre></div><p>And finally, we can create new Series by setting a new value in the marked indices. Have a look at the next command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> indices <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre></div><h2 id="unique-values" tabindex="-1"><a class="header-anchor" href="#unique-values" aria-hidden="true">#</a> Unique values</h2><p>Another operation that can be done with <code>Series</code> is to search for unique values in a list or column. Lets use again the first dataframe we created to test these operations.</p>`,5),ka=a("code",null,"value_counts",-1),ba=a("code",null,"first",-1),ha=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span>.first <span class="token operator">|</span> value-counts

───┬───────┬────────
 <span class="token comment"># │ first │ counts</span>
───┼───────┼────────
 <span class="token number">0</span> │ b     │      <span class="token number">4</span>
 <span class="token number">1</span> │ c     │      <span class="token number">3</span>
 <span class="token number">2</span> │ a     │      <span class="token number">3</span>
───┴───────┴────────
</code></pre></div><p>As expected, the command returns a new dataframe that can be used to do more queries.</p><p>Continuing with our exploration of <code>Series</code>, the next thing that we can do is to only get the unique unique values from a series, like this</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span>.first <span class="token operator">|</span> unique

───┬───────
 <span class="token comment"># │ first</span>
───┼───────
 <span class="token number">0</span> │ c
 <span class="token number">1</span> │ b
 <span class="token number">2</span> │ a
───┴───────
</code></pre></div><p>Or we can get a mask that we can use to filter out the rows where data is unique or duplicated. For example, we can select the rows for unique values in column <code>word</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> filter-with <span class="token punctuation">(</span><span class="token variable">$df</span>.word <span class="token operator">|</span> is-unique<span class="token punctuation">)</span>

───┬───────┬───────┬─────────┬─────────┬───────┬────────┬───────┬───────
 <span class="token comment"># │ int_1 │ int_2 │ float_1 │ float_2 │ first │ second │ third │ word</span>
───┼───────┼───────┼─────────┼─────────┼───────┼────────┼───────┼───────
 <span class="token number">0</span> │     <span class="token number">1</span> │    <span class="token number">11</span> │  <span class="token number">0.1000</span> │  <span class="token number">1.0000</span> │ a     │ b      │ c     │ first
 <span class="token number">1</span> │     <span class="token number">8</span> │    <span class="token number">18</span> │  <span class="token number">0.8000</span> │  <span class="token number">7.0000</span> │ c     │ c      │ b     │ eight
───┴───────┴───────┴─────────┴─────────┴───────┴────────┴───────┴───────
</code></pre></div><p>Or all the duplicated ones</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$df</span> <span class="token operator">|</span> filter-with <span class="token punctuation">(</span><span class="token variable">$df</span>.word <span class="token operator">|</span> is-duplicated<span class="token punctuation">)</span>

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
</code></pre></div><h2 id="lazy-dataframes" tabindex="-1"><a class="header-anchor" href="#lazy-dataframes" aria-hidden="true">#</a> Lazy Dataframes</h2><p>Lazy dataframes are a way to query data by creating a logical plan. The advantage of this approach is that the plan never gets evaluated until you need to extract data. This way you could chain together aggregations, joins and selections and collect the data once you are happy with the selected operations.</p><p>Let&#39;s create a small example of a lazy dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> a<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">2</span> b<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> c<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">4</span> d<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token variable">$a</span>
────────────────┬────────────────────────────────────────────────
 plan           │ DATAFRAME<span class="token punctuation">(</span>in-memory<span class="token punctuation">)</span>: <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span>, <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                │     project */2 columns    <span class="token operator">|</span>    details: None<span class="token punctuation">;</span>
                │     selection: <span class="token string">&quot;None&quot;</span>
 optimized_plan │ DATAFRAME<span class="token punctuation">(</span>in-memory<span class="token punctuation">)</span>: <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span>, <span class="token string">&quot;b&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                │     project */2 columns    <span class="token operator">|</span>    details: None<span class="token punctuation">;</span>
                │     selection: <span class="token string">&quot;None&quot;</span>
────────────────┴────────────────────────────────────────────────
</code></pre></div><p>As you can see, the resulting dataframe is not yet evaluated, it stays as a set of instructions that can be done on the data. If you were to collect that dataframe you would get the next result</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$a</span> <span class="token operator">|</span> collect
───┬───┬───
 <span class="token comment"># │ a │ b</span>
───┼───┼───
 <span class="token number">0</span> │ <span class="token number">1</span> │ a
 <span class="token number">1</span> │ <span class="token number">2</span> │ b
 <span class="token number">2</span> │ <span class="token number">3</span> │ c
 <span class="token number">3</span> │ <span class="token number">4</span> │ d
───┴───┴───
</code></pre></div><p>as you can see, the collect command executes the plan and creates a nushell table for you.</p><p>All dataframes operations should work with eager or lazy dataframes. They are converted in the background for compatibility. However, to take advantage of lazy operations if is recommended to only use lazy operations with lazy dataframes.</p><p>To find all lazy dataframe operations you can use</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$nu</span>.scope.commands <span class="token operator">|</span> where category <span class="token operator">=~</span> lazyframe
</code></pre></div><p>With your lazy frame defined we can start chaining operations on it. For example this</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$a</span>
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
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use the line buffer editor to format your queries (ctr + o) easily</p></div><p>This query uses the lazy reverse command to invert the dataframe and the <code>with-column</code> command to create new two columns using <code>expressions</code>. An <code>expression</code> is used to define an operation that is executed on the lazy frame. When put together they create the whole set of instructions used by the lazy commands to query the data. To list all the commands that generate an expression you can use</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$nu</span>.scope.commands <span class="token operator">|</span> where category <span class="token operator">=~</span> expression
</code></pre></div><p>In our previous example, we use the <code>col</code> command to indicate that column <code>a</code> will be multiplied by 2 and then it will be aliased to the name <code>double_a</code>. In some cases the use of the <code>col</code> command can be inferred. For example, using the select command we can use only a string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$a</span> <span class="token operator">|</span> <span class="token keyword">select</span> a <span class="token operator">|</span> collect
</code></pre></div><p>or the <code>col</code> command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable">$a</span> <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token punctuation">(</span>col a<span class="token punctuation">)</span> <span class="token operator">|</span> collect
</code></pre></div><p>Let&#39;s try something more complicated and create aggregations from a lazy dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy <span class="token punctuation">)</span>
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
</code></pre></div><p>And we could join on a lazy dataframe that hasn&#39;t being collected. Let&#39;s join the resulting group by to the original lazy frame</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>name value<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>one <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into lazy <span class="token punctuation">)</span>
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
</code></pre></div><p>As you can see lazy frames are a powerful construct that will let you query data using a flexible syntax, resulting in blazing fast results.</p><h2 id="dataframe-commands" tabindex="-1"><a class="header-anchor" href="#dataframe-commands" aria-hidden="true">#</a> Dataframe commands</h2><p>So far we have seen quite a few operations that can be done using <code>DataFrame</code>s commands. However, the commands we have used so far are not all the commands available to work with data and be assured that there will be more as the feature becomes more stable.</p><p>The next list shows the available dataframe commands with their descriptions, and whenever possible, their analogous Nushell command.</p><table><thead><tr><th>Command Name</th><th>Applies To</th><th>Description</th><th>Nushell Equivalent</th></tr></thead><tbody><tr><td>aggregate</td><td>DataFrame, GroupBy, Series</td><td>Performs an aggregation operation on a dataframe, groupby or series object</td><td>math</td></tr><tr><td>all-false</td><td>Series</td><td>Returns true if all values are false</td><td></td></tr><tr><td>all-true</td><td>Series</td><td>Returns true if all values are true</td><td>all</td></tr><tr><td>arg-max</td><td>Series</td><td>Return index for max value in series</td><td></td></tr><tr><td>arg-min</td><td>Series</td><td>Return index for min value in series</td><td></td></tr><tr><td>arg-sort</td><td>Series</td><td>Returns indexes for a sorted series</td><td></td></tr><tr><td>arg-true</td><td>Series</td><td>Returns indexes where values are true</td><td></td></tr><tr><td>arg-unique</td><td>Series</td><td>Returns indexes for unique values</td><td></td></tr><tr><td>count-null</td><td>Series</td><td>Counts null values</td><td></td></tr><tr><td>count-unique</td><td>Series</td><td>Counts unique value</td><td></td></tr><tr><td>drop</td><td>DataFrame</td><td>Creates a new dataframe by dropping the selected columns</td><td>drop</td></tr><tr><td>drop-duplicates</td><td>DataFrame</td><td>Drops duplicate values in dataframe</td><td></td></tr><tr><td>drop-nulls</td><td>DataFrame, Series</td><td>Drops null values in dataframe</td><td></td></tr><tr><td>dtypes</td><td>DataFrame</td><td>Show dataframe data types</td><td></td></tr><tr><td>filter-with</td><td>DataFrame</td><td>Filters dataframe using a mask as reference</td><td></td></tr><tr><td>first</td><td>DataFrame</td><td>Creates new dataframe with first rows</td><td>first</td></tr><tr><td>get</td><td>DataFrame</td><td>Creates dataframe with the selected columns</td><td>get</td></tr><tr><td>group-by</td><td>DataFrame</td><td>Creates a groupby object that can be used for other aggregations</td><td>group-by</td></tr><tr><td>is-duplicated</td><td>Series</td><td>Creates mask indicating duplicated values</td><td></td></tr><tr><td>is-in</td><td>Series</td><td>Checks if elements from a series are contained in right series</td><td>in</td></tr><tr><td>is-not-null</td><td>Series</td><td>Creates mask where value is not null</td><td></td></tr><tr><td>is-null</td><td>Series</td><td>Creates mask where value is null</td><td><code>&lt;column_name&gt; == $nothing</code></td></tr><tr><td>is-unique</td><td>Series</td><td>Creates mask indicating unique values</td><td></td></tr><tr><td>join</td><td>DataFrame</td><td>Joins a dataframe using columns as reference</td><td></td></tr><tr><td>last</td><td>DataFrame</td><td>Creates new dataframe with last rows</td><td>last</td></tr><tr><td>ls-df</td><td></td><td>Lists stored dataframes</td><td></td></tr><tr><td>melt</td><td>DataFrame</td><td>Unpivot a DataFrame from wide to long format</td><td></td></tr><tr><td>not</td><td>Series Inverts boolean mask</td><td></td><td></td></tr><tr><td>open</td><td></td><td>Loads dataframe form csv file</td><td>open</td></tr><tr><td>pivot</td><td>GroupBy</td><td>Performs a pivot operation on a groupby object</td><td>pivot</td></tr><tr><td>rename</td><td>Dataframe, Series</td><td>Renames a series</td><td>rename</td></tr><tr><td>sample</td><td>DataFrame</td><td>Create sample dataframe</td><td></td></tr><tr><td>select</td><td>DataFrame</td><td>Creates a new dataframe with the selected columns</td><td>select</td></tr><tr><td>set</td><td>Series</td><td>Sets value where given mask is true</td><td></td></tr><tr><td>set-with-idx</td><td>Series</td><td>Sets value in the given index</td><td></td></tr><tr><td>shift</td><td>Series</td><td>Shifts the values by a given period</td><td></td></tr><tr><td>show</td><td>DataFrame</td><td>Converts a section of the dataframe to a Table or List value</td><td></td></tr><tr><td>slice</td><td>DataFrame</td><td>Creates new dataframe from a slice of rows</td><td></td></tr><tr><td>sort-by</td><td>DataFrame, Series</td><td>Creates new sorted dataframe or series</td><td>sort</td></tr><tr><td>take</td><td>DataFrame, Series</td><td>Creates new dataframe using the given indices</td><td></td></tr><tr><td>to csv</td><td>DataFrame</td><td>Saves dataframe to csv file</td><td>to csv</td></tr><tr><td>into df</td><td></td><td>Converts a pipelined Table or List into Dataframe</td><td></td></tr><tr><td>dummies</td><td>DataFrame</td><td>Creates a new dataframe with dummy variables</td><td></td></tr><tr><td>to parquet</td><td>DataFrame</td><td>Saves dataframe to parquet file</td><td></td></tr><tr><td>unique</td><td>Series</td><td>Returns unique values from a series</td><td>uniq</td></tr><tr><td>value-counts</td><td>Series</td><td>Returns a dataframe with the counts for unique values in series</td><td></td></tr><tr><td>where</td><td>DataFrame</td><td>Filter dataframe to match the condition</td><td>where</td></tr><tr><td>with-column</td><td>DataFrame</td><td>Adds a series to the dataframe</td><td><code>insert &lt;column_name&gt; &lt;value&gt; | upsert &lt;column_name&gt; { &lt;new_value&gt; }</code></td></tr></tbody></table><h2 id="future-of-dataframes" tabindex="-1"><a class="header-anchor" href="#future-of-dataframes" aria-hidden="true">#</a> Future of Dataframes</h2><p>We hope that by the end of this page you have a solid grasp of how to use the dataframe commands. As you can see they offer powerful operations that can help you process data faster and natively.</p><p>However, the future of these dataframes is still very experimental. New commands and tools that take advantage of these commands will be added as they mature. For example, the next step for dataframes is the introduction of Lazy Dataframes. These will allow you to define complex data operations that will not be executed until you decide to &quot;finish&quot; the pipe. This will give Nushell the chance to select the optimal plan to query the data you would be asking for.</p><p>Keep visiting this book in order to check the new things happening to dataframes and how they can help you process data faster and efficiently.</p>`,40);function ga(fa,va){const e=c("RouterLink"),p=c("ExternalLinkIcon");return r(),u("div",null,[d,a("div",m,[k,a("p",null,[n("To use the dataframe support you need a fully-featured build with "),b,n(". Starting with version 0.72, dataframes are "),h,n(" included with binary releases of Nushell. "),s(e,{to:"/book/installation.html"},{default:t(()=>[n("See the installation instructions")]),_:1}),n(" for further details.")])]),g,a("p",null,[n("For this reason, the "),f,n(" structure was introduced to Nushell. A "),v,n(" stores its data in a columnar format using as its base the "),a("a",w,[n("Apache Arrow"),s(p)]),n(" specification, and uses "),a("a",_,[n("Polars"),s(p)]),n(" as the motor for performing extremely "),a("a",y,[n("fast columnar operations"),s(p)]),n(".")]),x,$,a("p",null,[n("For this little benchmark exercise we will be comparing native Nushell commands, dataframe Nushell commands and "),a("a",D,[n("Python Pandas"),s(p)]),n(" commands. For the time being don't pay too much attention to the "),q,n(" commands. They will be explained in later sections of this page.")]),S,A,a("p",null,[n("The file that we will be using for the benchmarks is the "),a("a",F,[n("New Zealand business demography"),s(p)]),n(" dataset. Feel free to download it if you want to follow these tests.")]),T,a("p",null,[n("We can have a look at the first lines of the file using "),s(e,{to:"/commands/docs/first.html"},{default:t(()=>[N]),_:1}),n(":")]),z,a("p",null,[n("Let's start by comparing loading times between the various methods. First, we will load the data using Nushell's "),s(e,{to:"/commands/docs/open.html"},{default:t(()=>[L]),_:1}),n(" command:")]),C,a("p",null,[n("As you can see, the aggregate function computes the sum for those columns where a sum makes sense. If you want to filter out the text column, you can select the columns you want by using the "),s(e,{to:"/commands/docs/select.html"},{default:t(()=>[I]),_:1}),n(" command")]),j,a("div",W,[P,a("p",null,[n("In "),R,n(" when a command has multiple arguments that are expecting multiple values we use brackets "),B,n(" to enclose those values. In the case of "),s(e,{to:"/commands/docs/dfr_join.html"},{default:t(()=>[O]),_:1}),n(" we can join on multiple columns as long as they have the same type, for example we could have done "),G])]),Y,H,a("p",null,[n("One of the most powerful operations that can be performed with a DataFrame is the "),s(e,{to:"/commands/docs/group-by.html"},{default:t(()=>[U]),_:1}),n(". This command will allow you to perform aggregation operations based on a grouping criteria. In Nushell, a "),E,n(" is a type of object that can be stored and reused for multiple aggregations. This is quite handy, since the creation of the grouped pairs is the most expensive operation while doing group-by and there is no need to repeat it if you are planning to do multiple operations with the same group condition.")]),a("p",null,[n("To create a "),V,n(" object you only need to use the "),s(e,{to:"/commands/docs/group-by.html"},{default:t(()=>[M]),_:1}),n(" command")]),Z,a("p",null,[n("One thing that is important to mention is how the memory is being optimized while working with dataframes, and this is thanks to "),J,n(" and "),K,n(". In a very simple representation, each column in a DataFrame is an Arrow Array, which is using several memory specifications in order to maintain the data as packed as possible (check "),a("a",Q,[n("Arrow columnar format"),s(p)]),n("). The other optimization trick is the fact that whenever possible, the columns from the dataframes are shared between dataframes, avoiding memory duplication for the same data. This means that dataframes "),X,n(" and "),aa,n(" are sharing the same two columns we created using the "),na,n(" command. For this reason, it isn't possible to change the value of a column in a dataframe. However, you can create new columns based on data from other columns or dataframes.")]),sa,a("p",null,[n("Another operation that can be done with masks is setting or replacing a value from a series. For example, we can change the value in the column "),s(e,{to:"/commands/docs/first.html"},{default:t(()=>[ea]),_:1}),n(" where the value is equal to "),ta]),oa,a("p",null,[n("The command "),s(e,{to:"/commands/docs/take.html"},{default:t(()=>[pa]),_:1}),n(" is very handy, especially if we mix it with other commands. Let's say that we want to extract all rows for the first duplicated element for column "),s(e,{to:"/commands/docs/first.html"},{default:t(()=>[ca]),_:1}),n(". In order to do that, we can use the command "),la,n(" as shown in the next example")]),ra,a("div",ua,[ia,a("p",null,[n("The same result could be accomplished using the command "),s(e,{to:"/commands/docs/sort.html"},{default:t(()=>[da]),_:1})])]),ma,a("p",null,[n("The first and most common operation that we have is "),ka,n(". This command calculates a count of the unique values that exist in a Series. For example, we can use it to count how many occurrences we have in the column "),s(e,{to:"/commands/docs/first.html"},{default:t(()=>[ba]),_:1})]),ha])}const _a=l(i,[["render",ga],["__file","dataframes.html.vue"]]);export{_a as default};
