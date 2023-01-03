import{_ as p,z as c,A as l,X as n,C as a,T as e,$ as t,a6 as o,Q as i}from"./framework.3d018c9f.js";const d={},r=o(`<h1 id="自定义命令" tabindex="-1"><a class="header-anchor" href="#自定义命令" aria-hidden="true">#</a> 自定义命令</h1><p>Nu 具备组合长管道的能力使你对数据和系统有很强的控制力，但它的代价是需要大量的键盘输入。不过理想情况下，你可以保存精心设计的管道以便反复使用。</p><p>这就是自定义命令(Custom Commands)的作用。</p><p>下面看一个自定义命令的例子：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token variable">$name</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在这个定义中，我们定义了<code>greet</code>命令，它需要一个参数<code>name</code>。在这个参数后面是自定义命令运行时将执行的代码块。当被调用时，自定义命令将把传递给<code>name</code>的值设置为<code>$name</code>变量，该变量在块内是可用的。</p><p>要运行上述命令，我们可以像调用内置命令一样调用它：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> greet <span class="token string">&quot;world&quot;</span>
</code></pre></div><p>当我们这样做的时候，就会得到输出，如同我们使用内置命令一样：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬───────
 0 │ hello
 1 │ world
───┴───────
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>echo</code>将其参数分别返回给管道。如果你想用它来生成一个单一的字符串，请在管道中添加<code> | str join</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str <span class="token function">join</span>
<span class="token punctuation">}</span>

greet nushell
</code></pre></div><p>返回 <code>hello nushell</code></p></div><h2 id="命令名称" tabindex="-1"><a class="header-anchor" href="#命令名称" aria-hidden="true">#</a> 命令名称</h2><p>在 Nushell 中，命令名是一串字符或一个带引号的字符串。下面是一些有效命令名的例子：<code>greet</code>, <code>get-size</code>, <code>mycommand123</code>, <code>&quot;mycommand&quot;</code>, <code>😊</code>, 和<code>123</code>。</p><p><em>注意：在 Nushell 中，通常的做法是用<code>-</code>来分隔命令的多个单词，以提高可读性。</em> 例如，使用 <code>get-size</code> 而不是 <code>getsize</code> 或者 <code>get_size</code>。</p><h2 id="子命令" tabindex="-1"><a class="header-anchor" href="#子命令" aria-hidden="true">#</a> 子命令</h2><p>你也可以使用空格来定义命令的子命令(Subcommand)。例如，如果我们想给<code>str</code>添加一个新的子命令，可以通过命名我们的子命令以 &quot;str&quot; 开头来做到。比如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def <span class="token string">&quot;str mycommand&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> hello
<span class="token punctuation">}</span>
</code></pre></div><p>现在我们可以像调用<code>str</code>的内置子命令一样调用我们的自定义命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str mycommand
</code></pre></div><h2 id="参数类型" tabindex="-1"><a class="header-anchor" href="#参数类型" aria-hidden="true">#</a> 参数类型</h2><p>在定义自定义命令时，你可以为每个参数命名并选择性地设置其类型。例如，你可以把上面的内容写成：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str <span class="token function">join</span>
<span class="token punctuation">}</span>
</code></pre></div><p>参数的类型是可选的。Nushell 支持不添加类型，此时会把参数类型当作<code>any</code>。如果你在参数上标注了一个类型，Nushell 将在你调用函数的时候检查该类型。</p><p>例如，假设你需要输入一个<code>int</code>类型：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name: int<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str <span class="token function">join</span>
<span class="token punctuation">}</span>

greet world
</code></pre></div><p>如果我们尝试运行上述内容，Nushell 会告诉我们，类型不匹配：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>error: Type Error
  ┌─ shell:6:7
  │
5 │ greet world
  │       ^^^^^ Expected int, found world
</code></pre></div><p>这可以帮助指导你的用户只使用支持的类型来调用你所定义的命令。</p><p>目前可以支持的类型是（从 0.65.0 版本开始）：</p><ul><li><code>any</code></li><li><code>block</code></li><li><code>cell-path</code></li><li><code>duration</code></li><li><code>path</code></li><li><code>expr</code></li><li><code>filesize</code></li><li><code>glob</code></li><li><code>int</code></li><li><code>math</code></li><li><code>number</code></li><li><code>operator</code></li><li><code>range</code></li><li><code>cond</code></li><li><code>bool</code></li><li><code>signature</code></li><li><code>string</code></li><li><code>variable</code></li><li><code>record</code></li><li><code>list</code></li><li><code>table</code></li><li><code>error</code></li></ul><h2 id="具有默认值的参数" tabindex="-1"><a class="header-anchor" href="#具有默认值的参数" aria-hidden="true">#</a> 具有默认值的参数</h2><p>若要使一个参数成为可选的，并具有默认值，你可以在命令定义中指定该默认值：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name <span class="token operator">=</span> <span class="token string">&quot;nushell&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str <span class="token function">join</span>
<span class="token punctuation">}</span>
</code></pre></div><p>你可以在没有参数的情况下调用这个命令，也可以指定一个值来覆盖默认值：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet
hello nushell
&gt; greet world
hello world
</code></pre></div><p>你也可以将默认值与<a href="#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B">类型要求</a>相结合：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>def congratulate [age: int = 18] {
  echo &quot;Happy birthday! Wow you are &quot; $age &quot; years old now!&quot; | str join
}
</code></pre></div><p>如果你想检查一个可选参数是否存在，而不是仅仅依赖一个默认值，请使用<a href="#%E5%8F%AF%E9%80%89%E4%BD%8D%E7%BD%AE%E5%8F%82%E6%95%B0">可选位置参数</a>代替。</p><h2 id="可选位置参数" tabindex="-1"><a class="header-anchor" href="#可选位置参数" aria-hidden="true">#</a> 可选位置参数</h2><p>默认情况下，位置参数(Positional Parameters)是必须的。如果没有传递位置参数，我们将遇到一个报错：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>  × Missing required positional argument.
   ╭─[entry #23:1:1]
 1 │ greet
   ·      ▲
   ·      ╰── missing name
   ╰────
  help: Usage: greet &lt;name&gt;
</code></pre></div><p>我们可以在一个位置参数的名字后面加上一个问号（<code>?</code>），将其标记为可选参数。比如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name?: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str <span class="token function">join</span>
<span class="token punctuation">}</span>

greet
</code></pre></div><p>使一个位置参数成为可选参数并不改变它在命令体中被访问的名称。如上例所示，尽管参数列表中有<code>?</code>的后缀，但它仍然以<code>$name</code>的形式被访问。</p><p>当一个可选参数没有被传递，它在命令体中的值等于<code>null</code>和<code>$nothing</code>。我们可以利用这一点来对没有传递参数的情况进行处理：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name?: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$name</span> <span class="token operator">==</span> null<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello, I don&#39;t know your name!&quot;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str <span class="token function">join</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

greet
</code></pre></div><p>如果你只是想在参数缺失时设置一个默认值，那么使用<a href="#%E5%85%B7%E6%9C%89%E9%BB%98%E8%AE%A4%E5%80%BC%E7%9A%84%E5%8F%82%E6%95%B0">默认值</a>来代替就更简单了。</p><p>如果必需的和可选的位置参数一起使用，那么必需的参数必须先出现在定义中。</p><h2 id="标志" tabindex="-1"><a class="header-anchor" href="#标志" aria-hidden="true">#</a> 标志</h2><p>除了传递位置参数之外, 你还可以通过为自定义命令定义标志(Flags)来传递命名参数。</p><p>比如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>
  name: string
  --age: int
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$age</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在上面的<code>greet</code>定义中，我们定义了<code>name</code>位置参数以及<code>age</code>标志。这允许<code>greet</code>的调用者也可以选择传递<code>age</code>参数。</p><p>你可以用以下方法调用上述内容：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> greet world <span class="token parameter variable">--age</span> <span class="token number">10</span>
</code></pre></div><p>或者：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> greet <span class="token parameter variable">--age</span> <span class="token number">10</span> world
</code></pre></div><p>或者甚至完全不使用标志：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet world
</code></pre></div><p>标志也可以指定一个缩写版本，这允许你传递一个更简单的标志，如同传递一个更容易阅读的全写标志那样。</p><p>让我们扩展前面的例子，为<code>age</code>添加一个缩写标志：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>
  name: string
  <span class="token parameter variable">--age</span> <span class="token punctuation">(</span>-a<span class="token punctuation">)</span>: int
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$age</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>注意：</em> 标志是以其全称命名的，所以上面的例子的命令体内需要使用<code>$age</code>而不是<code>$a</code>。</p><p>现在，我们可以使用缩写标志来调用这个新的定义：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><p>标志也可以作为基本开关使用，这意味着它们的存在或不存在被当作定义的参数。延伸前面的例子：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>
  name: string
  <span class="token parameter variable">--age</span> <span class="token punctuation">(</span>-a<span class="token punctuation">)</span>: int
  <span class="token parameter variable">--twice</span>
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token variable">$twice</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$name</span> <span class="token variable">$age</span> <span class="token variable">$age</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$age</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>而这个定义可以通过如下方式调用：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet -a 10 --twice hello
</code></pre></div><p>或者只是没有开关标志：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><h2 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h2><p>在某些情况下, 你可能想定义一个需要任意数量的位置参数的命令。我们可以用一个剩余参数(Rest Parameter)来实现这一点，通过下面的<code>...</code>语法：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span><span class="token punctuation">..</span>.name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello all:&quot;</span>
  <span class="token keyword">for</span> <span class="token variable">$n</span> <span class="token keyword">in</span> <span class="token variable">$name</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$n</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

greet earth mars jupiter venus
</code></pre></div><p>我们可以使用任意数量的参数来调用上述<code>greet</code>命令的定义，包括完全没有参数，所有的参数都将被收集到<code>$name</code>列表中。</p><p>剩余参数可以和位置参数一起使用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>vip: string, <span class="token punctuation">..</span>.name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello to our VIP &quot;</span> <span class="token variable">$vip</span> <span class="token operator">|</span> str <span class="token function">join</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;and hello to everybody else:&quot;</span>
  <span class="token keyword">for</span> <span class="token variable">$n</span> <span class="token keyword">in</span> <span class="token variable">$name</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$n</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#     $vip          $name</span>
<span class="token comment">#     ---- ------------------------</span>
greet moon earth mars jupiter venus
</code></pre></div><h2 id="为命令添加文档" tabindex="-1"><a class="header-anchor" href="#为命令添加文档" aria-hidden="true">#</a> 为命令添加文档</h2><p>为了更好地帮助用户使用你的自定义命令，也可以为其添加额外的命令和参数描述。</p><p>以我们之前的例子为例：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>
  name: string
  <span class="token parameter variable">--age</span> <span class="token punctuation">(</span>-a<span class="token punctuation">)</span>: int
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$age</span>
<span class="token punctuation">}</span>
</code></pre></div><p>一旦定义完毕，我们可以运行<code>help greet</code>来获得该命令的帮助信息：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt;

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;
</code></pre></div><p>你可以看到我们定义的参数和标志，以及所有命令都会得到的<code>-h</code>帮助标志。</p><p>为了改进这个帮助，我们可以在定义中加入描述，这些描述将在帮助中显示出来：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># A greeting command that can greet the caller</span>
def greet <span class="token punctuation">[</span>
  name: string      <span class="token comment"># The name of the person to greet</span>
  <span class="token parameter variable">--age</span> <span class="token punctuation">(</span>-a<span class="token punctuation">)</span>: int   <span class="token comment"># The age of the person</span>
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$age</span>
<span class="token punctuation">}</span>
</code></pre></div><p>我们给定义和参数添加的注释会作为描述出现在命令的<code>help</code>中。</p><p>现在，如果我们运行<code>help greet</code>，就会得到一些更友好的帮助文本：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>A greeting command that can greet the caller

Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt; The name of the person to greet

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;: The age of the person
</code></pre></div><h2 id="管道输出" tabindex="-1"><a class="header-anchor" href="#管道输出" aria-hidden="true">#</a> 管道输出</h2><p>自定义命令会像内置命令一样流式输出。例如，假设我们想重构这个管道：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name
</code></pre></div>`,92),u=n("code",null,"ls",-1),g=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def my-ls <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token function">ls</span> <span class="token punctuation">}</span>
</code></pre></div>`,1),k=n("code",null,"ls",-1),h=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; my-ls | get name
───┬───────────────────────
 0 │ myscript.nu
 1 │ myscript2.nu
 2 │ welcome_to_nushell.md
───┴───────────────────────
</code></pre></div><p>这让我们可以很容易地创建自定义命令并处理它们的输出。注意，我们不像其他语言那样使用返回语句，取而代之的是我们创建管道，而其输出数据流可以连接到其他管道。</p><h2 id="管道输入" tabindex="-1"><a class="header-anchor" href="#管道输入" aria-hidden="true">#</a> 管道输入</h2><p>如同其他命令一样，自定义命令也可以从管道中获取输入，这个输入会自动传递给自定义命令所使用的代码块。</p><p>让我们创建一个把所有接收值都加倍的命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def double <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token number">2</span> * <span class="token variable">$it</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>现在，如果我们在一个管道中调用上述命令，就可以看到它对输入的处理结果：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; [1 2 3] | double
───┬─────
 0 │ 2
 1 │ 4
 2 │ 6
───┴─────
</code></pre></div><p>我们还可以使用<code>$in</code>变量来存储输入，以便在后面使用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>def nullify <span class="token punctuation">[</span><span class="token punctuation">..</span>.cols<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">let</span> start <span class="token operator">=</span> <span class="token variable">$in</span>
  <span class="token variable">$cols</span> <span class="token operator">|</span> reduce <span class="token parameter variable">--fold</span> <span class="token variable">$start</span> <span class="token punctuation">{</span> <span class="token operator">|</span>col, <span class="token function">df</span><span class="token operator">|</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> upsert <span class="token variable">$col</span> null
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2>`,11);function m(b,v){const s=i("RouterLink");return c(),l("div",null,[r,n("p",null,[a("让我们把"),e(s,{to:"/book/commands/ls.html"},{default:t(()=>[u]),_:1}),a("移到我们编写的命令中：")]),g,n("p",null,[a("我们就可以像使用"),e(s,{to:"/book/commands/ls.html"},{default:t(()=>[k]),_:1}),a("一样使用这个命令的输出：")]),h,n("p",null,[a("关于如何持久化自定义命令，以便在你启动 Nushell 时它们是可用的，请参阅 "),e(s,{to:"/zh-CN/book/configuration.html"},{default:t(()=>[a("配置")]),_:1}),a(" 部分并添加你的启动脚本。")])])}const f=p(d,[["render",m],["__file","custom_commands.html.vue"]]);export{f as default};
