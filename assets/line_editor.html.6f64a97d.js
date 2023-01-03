import{_ as t,z as e,A as p,X as a,C as n,T as o,a6 as c,Q as l}from"./framework.3d018c9f.js";const d={},i=a("h1",{id:"reedline-nu-的行编辑器",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#reedline-nu-的行编辑器","aria-hidden":"true"},"#"),n(" Reedline，Nu 的行编辑器")],-1),u={href:"https://github.com/nushell/reedline",target:"_blank",rel:"noopener noreferrer"},r=c(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="编辑模式" tabindex="-1"><a class="header-anchor" href="#编辑模式" aria-hidden="true">#</a> 编辑模式</h3><p>Reedline 允许你使用两种模式来编辑文本：vi 和 emacs。如果没有指定，默认的编辑模式是 emacs 模式。若要自行设置喜欢的模式，你可以修改配置文件为相应模式。比如：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    edit_mode: emacs
    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><h4 id="默认键盘绑定" tabindex="-1"><a class="header-anchor" href="#默认键盘绑定" aria-hidden="true">#</a> 默认键盘绑定</h4><p>每种编辑模式都有相应的 vi 或 emacs 文本编辑的常用快捷键设置。</p><p>Emacs 和 Vi 快捷键绑定</p><table><thead><tr><th>快捷键</th><th>事件</th></tr></thead><tbody><tr><td>Esc</td><td>Esc</td></tr><tr><td>Backspace</td><td>退格</td></tr><tr><td>End</td><td>移至行尾</td></tr><tr><td>End</td><td>补全历史提示</td></tr><tr><td>Home</td><td>移至行首</td></tr><tr><td>Ctr + c</td><td>取消当前行</td></tr><tr><td>Ctr + l</td><td>清除屏幕</td></tr><tr><td>Ctr + r</td><td>搜索历史</td></tr><tr><td>Ctr + Right</td><td>Complete history word</td></tr><tr><td>Ctr + Right</td><td>右移一个词</td></tr><tr><td>Ctr + Left</td><td>左移一个词</td></tr><tr><td>Up</td><td>菜单上移</td></tr><tr><td>Up</td><td>上移</td></tr><tr><td>Down</td><td>菜单下移</td></tr><tr><td>Down</td><td>下移</td></tr><tr><td>Left</td><td>菜单左移</td></tr><tr><td>Left</td><td>左移</td></tr><tr><td>Right</td><td>完成历史提示</td></tr><tr><td>Right</td><td>菜单右移</td></tr><tr><td>Right</td><td>右移</td></tr><tr><td>Ctr + b</td><td>菜单左移</td></tr><tr><td>Ctr + b</td><td>左移</td></tr><tr><td>Ctr + f</td><td>完成历史提示</td></tr><tr><td>Ctr + f</td><td>菜单右移</td></tr><tr><td>Ctr + f</td><td>右移</td></tr><tr><td>Ctr + p</td><td>菜单上移</td></tr><tr><td>Ctr + p</td><td>上移</td></tr><tr><td>Ctr + n</td><td>菜单下移</td></tr><tr><td>Ctr + n</td><td>下移</td></tr></tbody></table><p>Vi 普通键绑定</p><table><thead><tr><th>快捷键</th><th>事件</th></tr></thead><tbody><tr><td>Ctr + c</td><td>取消当前行</td></tr><tr><td>Ctr + l</td><td>清除屏幕</td></tr><tr><td>Up</td><td>菜单上移</td></tr><tr><td>Up</td><td>上移</td></tr><tr><td>Down</td><td>菜单下移</td></tr><tr><td>Down</td><td>下移</td></tr><tr><td>Left</td><td>菜单左移</td></tr><tr><td>Left</td><td>左移</td></tr><tr><td>Right</td><td>菜单右移</td></tr><tr><td>Right</td><td>右移</td></tr></tbody></table><p>除了之前的键盘绑定，在正常 Vi 模式下，你可以使用经典的 Vi 快捷键来进行移动或者执行相应的动作。可用的组合的选项是：</p><p>Vi 正常移动快捷键</p><table><thead><tr><th>快捷键</th><th>移动</th></tr></thead><tbody><tr><td>w</td><td>前移一个单词</td></tr><tr><td>d</td><td>移动到行尾</td></tr><tr><td>0</td><td>移动到行首</td></tr><tr><td>$</td><td>移动到行尾</td></tr><tr><td>f</td><td>行内向右查找字符</td></tr><tr><td>t</td><td>行内右移到指定字符前</td></tr><tr><td>F</td><td>行内向左查找字符</td></tr><tr><td>T</td><td>行内左移到指定字符前</td></tr></tbody></table><p>Vi 正常操作快捷键</p><table><thead><tr><th>快捷键</th><th>操作</th></tr></thead><tbody><tr><td>d</td><td>删除</td></tr><tr><td>p</td><td>在光标之后粘贴</td></tr><tr><td>P</td><td>在光标之前粘贴</td></tr><tr><td>h</td><td>左移</td></tr><tr><td>l</td><td>右移</td></tr><tr><td>j</td><td>下移</td></tr><tr><td>k</td><td>上移</td></tr><tr><td>w</td><td>右移一个单词</td></tr><tr><td>b</td><td>左移一个单词</td></tr><tr><td>i</td><td>在光标前插入</td></tr><tr><td>a</td><td>在光标后插入</td></tr><tr><td>0</td><td>移到行首</td></tr><tr><td>^</td><td>移到行首</td></tr><tr><td>$</td><td>移到行尾</td></tr><tr><td>u</td><td>撤销</td></tr><tr><td>c</td><td>修改</td></tr><tr><td>x</td><td>删除字符</td></tr><tr><td>s</td><td>搜索历史</td></tr><tr><td>D</td><td>删除当前位置到行尾</td></tr><tr><td>A</td><td>在当前行最后插入</td></tr></tbody></table><h3 id="命令历史" tabindex="-1"><a class="header-anchor" href="#命令历史" aria-hidden="true">#</a> 命令历史</h3><p>如前所述，Reedline 管理并存储所有被编辑并发送给 Nushell 的命令。要配置 Reedline 可以存储的最大记录数，你需要在配置文件中调整这个值：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    max_history_size: <span class="token number">1000</span>
    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="定制你的提示" tabindex="-1"><a class="header-anchor" href="#定制你的提示" aria-hidden="true">#</a> 定制你的提示</h3><p>Reedline 的提示语也是高度可定制的。为了构建你的完美提示符，你可以在配置文件中定义下面的环境变量：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Use nushell functions to define your right and left prompt</span>
def create_left_prompt <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> path_segment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token environment constant">PWD</span><span class="token punctuation">)</span>

    <span class="token variable">$path_segment</span>
<span class="token punctuation">}</span>

def create_right_prompt <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> time_segment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%m/%d/%Y %r&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span> <span class="token operator">|</span> str <span class="token function">join</span><span class="token punctuation">)</span>

    <span class="token variable">$time_segment</span>
<span class="token punctuation">}</span>

let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> create_left_prompt <span class="token punctuation">}</span>
let-env PROMPT_COMMAND_RIGHT <span class="token operator">=</span> <span class="token punctuation">{</span> create_right_prompt <span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>你并非必须要用 Nushell 的函数来定义环境变量，也可以使用简单的字符串来定义它们。</p></div><p>你也可以通过修改以下环境变量来定制行编辑器的提示符：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env PROMPT_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;〉&quot;</span>
let-env PROMPT_INDICATOR_VI_INSERT <span class="token operator">=</span> <span class="token string">&quot;: &quot;</span>
let-env PROMPT_INDICATOR_VI_NORMAL <span class="token operator">=</span> <span class="token string">&quot;〉&quot;</span>
let-env PROMPT_MULTILINE_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;::: &quot;</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>提示符是环境变量，它代表了提示的状态</p></div><h2 id="按键绑定" tabindex="-1"><a class="header-anchor" href="#按键绑定" aria-hidden="true">#</a> 按键绑定</h2><p>Reedline 按键绑定是一个强大的结构，它允许你建立一连串的事件，而且这些事件可以通过特定的按键组合来触发。</p><p>例如，我们假设你想把补全菜单绑定到 <code>Ctrl + t</code> 这组快捷键上（默认是<code>tab</code>）。你可以添加下面的条目到你的配置文件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: emacs
        event: <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>在加载这个新的 <code>config.nu</code> 之后，你的新键盘绑定（<code>Ctrl + t</code>）将打开命令自动补全。</p><p>每个按键绑定都需要以下元素：</p><ul><li>name: 为你的绑定键取一个独特的名字，以便于在<code>$config.keybindings</code>中引用</li><li>modifier: 绑定键的修饰符。选项有： <ul><li>none</li><li>control</li><li>alt</li><li>shift</li><li>control | alt</li><li>control | alt | shift</li></ul></li><li>keycode: 这代表要按下的键</li><li>mode: emacs, vi_insert, vi_normal (一个单独的字符串或一个列表，例如： [<code>vi_insert</code> <code>vi_normal</code>])</li><li>event: 键盘绑定要发送的事件的类型。选项包括： <ul><li>send</li><li>edit</li><li>until</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>所有可用的修饰键、键码和事件都可以通过<code>keybindings list</code>命令找到。</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>添加到 <code>vi_insert</code> 模式中的按键绑定将在行编辑器处于插入模式（可以写入文本）时可用，而标有 <code>vi_normal</code> 模式的按键绑定将在正常模式下（当光标使用 h、j、k 或 l 移动时）可用。</p></div><p>键盘绑定条目的事件部分是定义要执行的动作的地方。在这个字段，你可以使用一个记录或一个记录列表。比如这样：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">..</span>.
  event: <span class="token punctuation">{</span> send: Enter <span class="token punctuation">}</span>
  <span class="token punctuation">..</span>.
</code></pre></div><p>或者</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">..</span>.
  event: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> edit: Clear <span class="token punctuation">}</span>
    <span class="token punctuation">{</span> send: Enter <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
  <span class="token punctuation">..</span>.
</code></pre></div><p>上述第一个按键绑定例子遵循第一种情况，只有一个事件被发送到引擎。</p><p>后一个按键绑定的例子是向引擎发送一系列的事件。它首先清除提示，插入一个字符串，然后输入该值。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name: change_dir_with_fzf
      modifier: CONTROL
      keycode: Char_t
      mode: emacs
      event:<span class="token punctuation">[</span>
          <span class="token punctuation">{</span> edit: Clear <span class="token punctuation">}</span>
          <span class="token punctuation">{</span> edit: InsertString,
            value: <span class="token string">&quot;cd (ls | where type == dir | each { |it| <span class="token variable">$it</span>.name} | str join (char nl) | fzf | decode utf-8 | str trim)&quot;</span>

          <span class="token punctuation">}</span>
          <span class="token punctuation">{</span> send: Enter <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>上面按键绑定的缺点是，插入的文本将被验证处理并保存在历史记录中，这使得按键绑定的执行速度有点慢，而且会用相同的命令来填充命令历史。出于这个原因，可以采用 <code>ExecuteHostCommand</code> 类型的事件。下一个例子以更简单的方式做了与前一个相同的事情，发送了一个单一的事件给引擎：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name: change_dir_with_fzf
      modifier: CONTROL
      keycode: Char_y
      mode: emacs
      event: <span class="token punctuation">{</span>
        send: ExecuteHostCommand,
        cmd: <span class="token string">&quot;cd (ls | where type == dir | each { |it| <span class="token variable">$it</span>.name} | str join (char nl) | fzf | decode utf-8 | str trim)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>在我们继续之前，你一定已经注意到，编辑和发送的语法发生了变化，因此有必要对它们进行更多的解释。 <code>send</code> 是所有可以被引擎处理的 <code>Reedline</code> 事件，而 <code>edit</code> 是所有可以被引擎处理的 <code>EditCommands</code>。</p><h3 id="send类型" tabindex="-1"><a class="header-anchor" href="#send类型" aria-hidden="true">#</a> <code>send</code>类型</h3><p>要找到 <code>send</code> 的所有可用选项，你可以使用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>keybindings list <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> events
</code></pre></div><p>而 <code>send</code> 事件的语法如下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span> send: <span class="token operator">&lt;</span>NAME OF EVENT FROM LIST<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>你可以用大写字母来命名事件的名称，键盘绑定解析器是不区分大小写的。</p></div><p>这条规则有两个例外：<code>Menu</code>和<code>ExecuteHostCommand</code>。这两个事件需要一个额外的字段来完成，<code>Menu</code> 需要有一个菜单的名称才能触发（自动补全菜单或历史命令菜单）：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        send: menu
        name: completion_menu
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>而 <code>ExecuteHostCommand</code> 需要一个有效的命令，它将被发送到引擎：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        send: ExecuteHostCommand
        cmd: <span class="token string">&quot;cd ~&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>值得一提的是，在事件列表中，你还会看到<code>Edit([])</code>，<code>Multiple([])</code>和<code>UntilFound([])</code>。这些选项对解析器是不可见的，因为它们是基于键盘绑定的定义来构建的。例如，当你在键盘绑定事件里面定义了一个记录列表时，就会为你建立一个<code>Multiple([])</code>事件。<code>Edit([])</code>事件与前面提到的<code>edit</code>类型相同。<code>UntilFound([])</code>事件和前面提到的<code>until</code>类型一样。</p><h3 id="edit类型" tabindex="-1"><a class="header-anchor" href="#edit类型" aria-hidden="true">#</a> <code>edit</code>类型</h3><p><code>edit</code>类型是<code>Edit([])</code>事件的简化。<code>event</code>类型简化了定义复杂编辑事件的按键绑定。要列出可用的选项，你可以使用下面的命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>keybindings list <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> edits
</code></pre></div><p>以下是编辑的常用语法：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span> edit: <span class="token operator">&lt;</span>NAME OF EDIT FROM LIST<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>列表中带有 <code>()</code> 的编辑的语法有一点变化，因为这些编辑需要一个额外的值来进行完全定义。例如，如果我们想在提示符所在的位置插入一个字符串，那么你将不得不使用如下方式：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        edit: InsertString
        value: <span class="token string">&quot;MY NEW STRING&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>或者说你想向右移动，直到第一个<code>S</code>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        edit: MoveRightUntil
        value: <span class="token string">&quot;S&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>正如你所看到的，这两种类型将允许你构建你需要的任何类型的按键绑定。</p><h3 id="until类型" tabindex="-1"><a class="header-anchor" href="#until类型" aria-hidden="true">#</a> <code>until</code>类型</h3><p>为了完成这个按键绑定之旅，我们需要讨论事件的<code>until</code>类型。正如你到目前为止所看到的，你可以发送一个单一的事件或一个事件列表。而当一个事件列表被发送时，每一个事件都会被处理。</p><p>然而，在有些情况下，你可能想把不同的事件分配给同一个键盘绑定。这在 Nushell 菜单中特别有用。例如，假设你仍然想用<code>Ctrl + t</code>激活你的补全菜单，但你也想在菜单被激活后用同一个快捷键移动到下一个元素。</p><p>对于这些情况，我们有<code>until</code>关键字。在<code>until</code>事件中列出的事件将被逐一处理，不同的是，一旦一个事件被成功处理，事件处理就会停止。</p><p>下一个键盘绑定就是这种情况：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: emacs
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: MenuNext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>上面的按键绑定将首先尝试打开一个补全菜单。如果菜单没有激活，它将激活它并发送一个成功信号。如果再次按下按键绑定，因为已经有一个激活的菜单，那么它将发送的下一个事件是<code>MenuNext</code>，这意味着它将把选择器移动到菜单的下一个元素。</p><p>正如你所看到的，<code>until</code>关键字允许我们为同一个键盘绑定定义两个事件。在写这篇文章的时候，只有菜单事件允许这种类型的分层。其他非菜单事件类型将总是返回一个成功值，这意味着<code>until</code>事件在到达第一个命令时就会停止。</p><p>例如，下一个按键绑定将总是发送一个<code>down</code>，因为该事件总是成功的。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: emacs
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: down <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menunext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="移除一个默认的按键绑定" tabindex="-1"><a class="header-anchor" href="#移除一个默认的按键绑定" aria-hidden="true">#</a> 移除一个默认的按键绑定</h3><p>如果你想删除某个默认的按键绑定，而不打算使用不同的动作来替代它，你可以设置<code>event: null</code>。</p><p>例如，在所有的编辑模式下，禁用 <code>Ctrl + l</code> 清除屏幕：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        modifier: control
        keycode: char_l
        mode: <span class="token punctuation">[</span>emacs, vi_normal, vi_insert<span class="token punctuation">]</span>
        event: null
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>

</code></pre></div><h3 id="排查键盘绑定问题" tabindex="-1"><a class="header-anchor" href="#排查键盘绑定问题" aria-hidden="true">#</a> 排查键盘绑定问题</h3><p>你的终端环境可能并不总是以你期望的方式将你的组合键冒泡到 Nushell 上。 你可以使用<code>keybindings listen</code>命令来确定 Nushell 是否真的收到了某些按键，以及如何收到的。</p><h2 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单" aria-hidden="true">#</a> 菜单</h2><p>感谢 Reedline，Nushell 的菜单可以帮助你完成日常的 Shell 脚本操作。接下来我们介绍一下在使用 Nushell 时一直可用的默认菜单。</p><h3 id="帮助菜单" tabindex="-1"><a class="header-anchor" href="#帮助菜单" aria-hidden="true">#</a> 帮助菜单</h3><p>帮助菜单的存在是为了方便你过渡到 Nushell。假设你正在组建一个惊人的管道，然后你忘记了反转一个字符串的内部命令。你可以用<code>ctr+q</code>来激活帮助菜单，而不是删除你的管道。一旦激活，只需输入你要找的命令的关键词，菜单就会显示与你的输入相匹配的命令，而匹配的依据就是命令的名称或描述。</p><p>要浏览菜单，你可以用<code>tab</code>选择下一个元素，你可以按左键或右键滚动描述，你甚至可以在行中粘贴可用的命令例子。</p><p>帮助菜单可以通过修改以下参数进行配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: help_menu
        only_buffer_difference: <span class="token boolean">true</span> <span class="token comment"># Search is done on the text written after activating the menu</span>
        marker: <span class="token string">&quot;? &quot;</span>                 <span class="token comment"># Indicator that appears with the menu is active</span>
        type: <span class="token punctuation">{</span>
            layout: description      <span class="token comment"># Type of menu</span>
            columns: <span class="token number">4</span>               <span class="token comment"># Number of columns where the options are displayed</span>
            col_width: <span class="token number">20</span>            <span class="token comment"># Optional value. If missing all the screen width is used to calculate column width</span>
            col_padding: <span class="token number">2</span>           <span class="token comment"># Padding between columns</span>
            selection_rows: <span class="token number">4</span>        <span class="token comment"># Number of rows allowed to display found options</span>
            description_rows: <span class="token number">10</span>     <span class="token comment"># Number of rows allowed to display command description</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green                   <span class="token comment"># Text style</span>
            selected_text: green_reverse  <span class="token comment"># Text style for selected option</span>
            description_text: yellow      <span class="token comment"># Text style for description</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><h3 id="补全菜单" tabindex="-1"><a class="header-anchor" href="#补全菜单" aria-hidden="true">#</a> 补全菜单</h3><p>补全菜单是一个上下文敏感的菜单，它将根据提示的状态给出建议。这些建议的范围包括从路径建议到替代命令。在编写命令时，你可以激活该菜单以查看内部命令的可用选项。另外，如果你已经为外部命令定义了你的自定义补全方式，这些补全提示也会出现在菜单中。</p><p>默认情况下，补全菜单是通过按<code>tab</code>访问的，它可以通过修改配置对象中的这些值来进行配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: completion_menu
        only_buffer_difference: <span class="token boolean">false</span> <span class="token comment"># Search is done on the text written after activating the menu</span>
        marker: <span class="token string">&quot;| &quot;</span>                  <span class="token comment"># Indicator that appears with the menu is active</span>
        type: <span class="token punctuation">{</span>
            layout: columnar          <span class="token comment"># Type of menu</span>
            columns: <span class="token number">4</span>                <span class="token comment"># Number of columns where the options are displayed</span>
            col_width: <span class="token number">20</span>             <span class="token comment"># Optional value. If missing all the screen width is used to calculate column width</span>
            col_padding: <span class="token number">2</span>            <span class="token comment"># Padding between columns</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green                   <span class="token comment"># Text style</span>
            selected_text: green_reverse  <span class="token comment"># Text style for selected option</span>
            description_text: yellow      <span class="token comment"># Text style for description</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>通过修改这些参数，你可以根据自己的喜好定制你的菜单布局。</p><h3 id="历史菜单" tabindex="-1"><a class="header-anchor" href="#历史菜单" aria-hidden="true">#</a> 历史菜单</h3><p>历史菜单是访问编辑器命令历史的一个便捷方法。当激活菜单时(默认为<code>Ctrl+x</code>)，命令的历史会以时间倒序显示，这使得选择前一个命令变得非常容易。</p><p>历史菜单可以通过修改配置对象中的这些值进行配置：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: help_menu
        only_buffer_difference: <span class="token boolean">true</span> <span class="token comment"># Search is done on the text written after activating the menu</span>
        marker: <span class="token string">&quot;? &quot;</span>                 <span class="token comment"># Indicator that appears with the menu is active</span>
        type: <span class="token punctuation">{</span>
            layout: list             <span class="token comment"># Type of menu</span>
            page_size: <span class="token number">10</span>            <span class="token comment"># Number of entries that will presented when activating the menu</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green                   <span class="token comment"># Text style</span>
            selected_text: green_reverse  <span class="token comment"># Text style for selected option</span>
            description_text: yellow      <span class="token comment"># Text style for description</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>当历史菜单被激活时，它从历史中拉出<code>page_size</code>个记录并在菜单中呈现。如果终端还有空间，当你再次按<code>Ctrl+x</code>时，菜单将拉出相同数量的记录，并将它们追加到当前页。如果不可能呈现所有拉出的记录，菜单将创建一个新的页面。可以通过按<code>Ctrl+z</code>转到上一页或<code>Ctrl+x</code>转到下一页来浏览这些页面。</p><h4 id="搜索历史记录" tabindex="-1"><a class="header-anchor" href="#搜索历史记录" aria-hidden="true">#</a> 搜索历史记录</h4><p>要在你的命令历史中搜索，你可以开始输入你要找的命令的关键词。一旦菜单被激活，你输入的任何内容都会被历史记录中选定的命令所取代。例如，假设你已经输入了以下内容：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>你可以把光标放在 <code>()</code> 内并激活菜单，你可以通过输入关键词来过滤历史记录，一旦你选择了一个条目，输入的词就会被替换：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span>ls <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 10MiB<span class="token punctuation">)</span>
</code></pre></div><h4 id="菜单快速选择" tabindex="-1"><a class="header-anchor" href="#菜单快速选择" aria-hidden="true">#</a> 菜单快速选择</h4><p>菜单的另一个很好的特性是能够快速选择其中的内容。假设你已经激活了你的菜单，它看起来像这样：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>
<span class="token number">0</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 10MiB
<span class="token number">1</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 20MiB
<span class="token number">2</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 30MiB
<span class="token number">3</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 40MiB
</code></pre></div><p>你可以输入<code>!3</code>，然后按回车，而不是按向下键去选择第四个条目。这将在提示位置插入选定的文本，节省你向下滚动菜单的时间。</p><p>历史搜索和快速选择可以一起使用。你可以激活菜单，进行快速搜索，然后使用前面的方法进行快速选择。</p><h3 id="用户定义菜单" tabindex="-1"><a class="header-anchor" href="#用户定义菜单" aria-hidden="true">#</a> 用户定义菜单</h3><p>如果你发现默认的菜单对你来说是不够的，你需要要创建自己的菜单，Nushell 也可以帮你做到这点。</p><p>为了添加一个满足你需求的新菜单，你可以使用其中一个默认的布局作为模板。Nushell 中可用的模板有列式、列表式或描述式。</p><p>列式菜单将以列的方式向你显示数据，并根据你的列中显示的文本大小调整列数。</p><p>列表类型的菜单将总是以列表的形式显示建议，你可以通过使用<code>!</code>加数字的组合来选择值。</p><p>描述类型将给你更多的空间来显示一些值的描述，以及可以插入到缓冲区的额外信息。</p><p>假设我们想创建一个菜单，用于显示在你的会话中创建的所有变量，我们将把它称为<code>vars_menu</code>。这个菜单将使用一个列表布局 (layout: list)。为了搜索值，我们希望只使用菜单激活后输入的东西(only_buffer_difference: true)。</p><p>满足这些所需的菜单将看起来像这样：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: vars_menu
        only_buffer_difference: <span class="token boolean">true</span>
        marker: <span class="token string">&quot;# &quot;</span>
        type: <span class="token punctuation">{</span>
            layout: list
            page_size: <span class="token number">10</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green
            selected_text: green_reverse
            description_text: yellow
        <span class="token punctuation">}</span>
        source: <span class="token punctuation">{</span> <span class="token operator">|</span>buffer, position<span class="token operator">|</span>
            <span class="token variable">$nu</span>.scope.vars
            <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token variable">$buffer</span>
            <span class="token operator">|</span> sort-by name
            <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token punctuation">{</span>value: <span class="token variable">$it</span>.name description: <span class="token variable">$it</span>.type<span class="token punctuation">}</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>正如你所看到的，新的菜单与之前描述的<code>history_menu</code>是相同的，唯一的区别是新的字段叫<code>source</code>。<code>source</code>字段是 Nushell 所定义的，它包含了你想在菜单中显示的值。对于这个菜单，我们从<code>$nu.scope.vars</code>中提取数据，然后用它来创建记录并填充菜单。</p><p>记录所需的结构如下：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  value:       <span class="token comment"># The value that will be inserted in the buffer</span>
  description: <span class="token comment"># Optional. Description that will be display with the selected value</span>
  span: <span class="token punctuation">{</span>      <span class="token comment"># Optional. Span indicating what section of the string will be replaced by the value</span>
    start:
    end:
  <span class="token punctuation">}</span>
  extra: <span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token comment"># Optional. A list of strings that will be displayed with the selected value. Only works with a description menu</span>
<span class="token punctuation">}</span>
</code></pre></div><p>为了让菜单显示一些东西，至少<code>value</code>字段必须存在于结果记录中。</p><p>为了使菜单具有交互性，这两个变量在块中可用：<code>$buffer</code>和<code>$position</code>。<code>$buffer</code>包含菜单捕获的值，当选项<code>only_buffer_difference</code>为真时，<code>$buffer</code>是菜单被激活后输入的文本。如果<code>only_buffer_difference</code>是假的，<code>$buffer</code>是行中所有的字符串。<code>$position</code>变量可以用来根据你对菜单的设想创建替换范围。<code>$position</code>的值会随着<code>only_buffer_difference</code>是真还是假而改变。当为真时，<code>$position</code>是在菜单激活后插入文本的字符串的起始位置；当值为 false 时，<code>$position</code>表示实际的光标位置。</p><p>利用这些信息，你可以设计你的菜单来呈现你所需要的信息，并在需要的位置替换该值。之后，玩转你的菜单唯一额外需要做的事情是定义一个按键绑定，并用于激活你的全新菜单。</p><h3 id="菜单按键绑定" tabindex="-1"><a class="header-anchor" href="#菜单按键绑定" aria-hidden="true">#</a> 菜单按键绑定</h3><p>如果你想改变两个菜单的默认激活方式，可以通过定义新的按键绑定来实现。例如，接下来的两个按键绑定设置分别将<code>Ctrl+t</code>和<code>Ctrl+y</code>定义为触发自动补全和历史菜单：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: <span class="token punctuation">[</span>vi_insert vi_normal<span class="token punctuation">]</span>
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menupagenext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">{</span>
        name: history_menu
        modifier: control
        keycode: char_y
        mode: <span class="token punctuation">[</span>vi_insert vi_normal<span class="token punctuation">]</span>
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: menu name: history_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menupagenext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div>`,126);function k(h,m){const s=l("ExternalLinkIcon");return e(),p("div",null,[i,a("p",null,[n("Nushell 的行编辑器 "),a("a",u,[n("Reedline"),o(s)]),n(" 是一个跨平台的行读取器，它被设计为模块化且颇具灵活性的。该引擎的作用是负责控制命令历史，验证，自动补全，提示以及屏幕绘制。")]),r])}const b=t(d,[["render",k],["__file","line_editor.html.vue"]]);export{b as default};
