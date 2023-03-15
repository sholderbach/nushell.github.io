import{_ as l,M as e,p as r,q as i,Q as a,t as n,N as s,U as p,a1 as t}from"./framework-344bb0e4.js";const u={},k=a("h1",{id:"钩子",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#钩子","aria-hidden":"true"},"#"),n(" 钩子")],-1),d={href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"nu script.nu",-1),g=a("code",null,'nu -c "echo foo"',-1),v=t('<p>目前，我们支持这些类型的钩子：</p><ul><li><code>pre_prompt</code> : 在命令提示显示之前被触发；</li><li><code>pre_execution</code> : 在行输入开始执行前被触发；</li><li><code>env_change</code> : 当环境变量发生变化时被触发；</li></ul><p>为了更清晰地阐述，我们可以将 Nushell 的执行周期进行分解。 在 REPL 模式下，评估一行（代码）的步骤如下：</p><ol><li>检查 <code>pre_prompt</code> 钩子并运行它们；</li><li>检查 <code>env_change</code> 钩子并运行它们；</li><li>显示命令提示符并等待用户输入；</li><li>在用户输入东西并按下 &quot;Enter&quot; 健后，检查 <code>pre_execution</code> 钩子并运行它们；</li><li>解析和评估用户的输入；</li><li>返回到第一步；</li></ol><h2 id="基本钩子" tabindex="-1"><a class="header-anchor" href="#基本钩子" aria-hidden="true">#</a> 基本钩子</h2>',5),f=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># ...other config...</span>

    hooks: <span class="token punctuation">{</span>
        pre_prompt: <span class="token punctuation">{</span> print <span class="token string">&quot;pre prompt hook&quot;</span> <span class="token punctuation">}</span>
        pre_execution: <span class="token punctuation">{</span> print <span class="token string">&quot;pre exec hook&quot;</span> <span class="token punctuation">}</span>
        env_change: <span class="token punctuation">{</span>
            <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> print $<span class="token string">&quot;changing directory from (<span class="token variable">$before</span>) to (<span class="token variable">$after</span>)&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>试着把上述内容放到你的配置中，运行 Nushell 并在你的文件系统中切换目录。 当你改变一个目录时，<code>PWD</code> 环境变量会发生变化，这个变化会触发钩子，之前和现在的值分别存储在 <code>before</code> 和 <code>after</code> 变量中。</p><p>可以为每个触发器只定义一个钩子，也可以定义一个<strong>钩子列表</strong>，让其依次运行：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.other config<span class="token punctuation">..</span>.

    hooks: <span class="token punctuation">{</span>
        pre_prompt: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> print <span class="token string">&quot;pre prompt hook&quot;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> print <span class="token string">&quot;pre prompt hook2&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
        pre_execution: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> print <span class="token string">&quot;pre exec hook&quot;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> print <span class="token string">&quot;pre exec hook2&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
        env_change: <span class="token punctuation">{</span>
            <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> print $<span class="token string">&quot;changing directory from (<span class="token variable">$before</span>) to (<span class="token variable">$after</span>)&quot;</span> <span class="token punctuation">}</span>
                <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> print $<span class="token string">&quot;changing directory from (<span class="token variable">$before</span>) to (<span class="token variable">$after</span>) 2&quot;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>另外，用新的钩子更新现有的配置，而不是从头开始定义整个配置可能更实用：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    pre_prompt: <span class="token punctuation">..</span>.
    pre_execution: <span class="token punctuation">..</span>.
    env_change: <span class="token punctuation">{</span>
        <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="修改环境变量" tabindex="-1"><a class="header-anchor" href="#修改环境变量" aria-hidden="true">#</a> 修改环境变量</h2>`,7),b=a("strong",null,"代码块",-1),_=a("code",null,"def-env",-1),m=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    pre_prompt: <span class="token punctuation">{</span> let-env SPAM <span class="token operator">=</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.SPAM
eggs
</code></pre></div><p>钩子代码块遵循一般的作用域规则，即在块内定义的命令、别名等将在代码块结束后被丢掉。</p><h2 id="条件钩子" tabindex="-1"><a class="header-anchor" href="#条件钩子" aria-hidden="true">#</a> 条件钩子</h2><p>你可能很想做的一件事是，每当你进入一个目录时，就激活一个环境：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks {
    env_change: {
        PWD: [
            {|before, after|
                if $after == /some/path/to/directory {
                    load-env { SPAM: eggs }
                }
            }
        ]
    }
})
</code></pre></div><p>这不会起作用，因为该环境只在 <code>if</code> 块内有效。 在这种情况下，你可以很容易地将其重写为 <code>load-env (if $after == ... { ... } else { {} })</code>，但这种模式是相当常见的，以后我们会看到并非所有的情况都能像这样重写。</p><p>为了处理上述问题，我们引入了另一种定义钩子的方式 -- <strong>记录</strong>：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    env_change: <span class="token punctuation">{</span>
        <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                condition: <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> <span class="token variable">$after</span> <span class="token operator">==</span> /some/path/to/directory <span class="token punctuation">}</span>
                code: <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> load-env <span class="token punctuation">{</span> SPAM: eggs <span class="token punctuation">}</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>当钩子触发时，它会评估 <code>condition</code> 代码块。 如果它返回 <code>true</code>，则 <code>code</code> 对应代码块将会被评估执行。 如果它返回 <code>false</code>，什么也不会发生。 如果它返回别的东西，就会抛出一个错误。 <code>condition</code> 字段也可以完全省略，在这种情况下，钩子将总是被评估。</p><p><code>pre_prompt</code> 和 <code>pre_execution</code> 钩子类型也支持条件钩子，但它们不接受 <code>before</code> 和 <code>after</code> 参数。</p><h2 id="字符串钩子" tabindex="-1"><a class="header-anchor" href="#字符串钩子" aria-hidden="true">#</a> 字符串钩子</h2><p>到目前为止，一个钩子被定义为一个只保留环境的代码块，而没有其他东西。 为了能够定义命令或别名，可以将 <code>code</code> 字段定义为<strong>一个字符串</strong>。 你可以把它想成是你在 REPL 中输入字符串并点击回车键。 所以，上一节中的钩子也可以写成：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    pre_prompt: <span class="token string">&#39;let-env SPAM = &quot;eggs&quot;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.SPAM
eggs
</code></pre></div><p>这个功能可以用来，例如，根据当前目录有条件地引入定义：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    env_change: <span class="token punctuation">{</span>
        <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                condition: <span class="token punctuation">{</span><span class="token operator">|</span>_, after<span class="token operator">|</span> <span class="token variable">$after</span> <span class="token operator">==</span> /some/path/to/directory <span class="token punctuation">}</span>
                code: <span class="token string">&#39;def foo [] { print &quot;foo&quot; }&#39;</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">{</span>
                condition: <span class="token punctuation">{</span><span class="token operator">|</span>before, _<span class="token operator">|</span> <span class="token variable">$before</span> <span class="token operator">==</span> /some/path/to/directory <span class="token punctuation">}</span>
                code: <span class="token string">&#39;hide foo&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>当把钩子定义为字符串时，<code>$before</code> 和 <code>$after</code> 变量分别被设置为之前和当前的环境变量值，这与前面的例子类似：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    env_change: <span class="token punctuation">{</span>
        <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            code: <span class="token string">&#39;print $&quot;changing directory from ($before) to ($after)&quot;&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><h3 id="在现有配置中增加一个单一钩子" tabindex="-1"><a class="header-anchor" href="#在现有配置中增加一个单一钩子" aria-hidden="true">#</a> 在现有配置中增加一个单一钩子</h3><p>一个关于 <code>PWD</code> 环境变化的例子：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks.env_change.<span class="token environment constant">PWD</span> <span class="token punctuation">{</span><span class="token operator">|</span>config<span class="token operator">|</span>
    <span class="token builtin class-name">let</span> val <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$config</span> <span class="token operator">|</span> get <span class="token parameter variable">-i</span> hooks.env_change.<span class="token environment constant">PWD</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token variable">$val</span> <span class="token operator">==</span> <span class="token variable">$nothing</span> <span class="token punctuation">{</span>
        <span class="token variable">$val</span> <span class="token operator">|</span> append <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> print $<span class="token string">&quot;changing directory from (<span class="token variable">$before</span>) to (<span class="token variable">$after</span>)&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> print $<span class="token string">&quot;changing directory from (<span class="token variable">$before</span>) to (<span class="token variable">$after</span>)&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="进入目录时自动激活相应环境" tabindex="-1"><a class="header-anchor" href="#进入目录时自动激活相应环境" aria-hidden="true">#</a> 进入目录时自动激活相应环境</h3><p>以下代码将在进入一个目录（&#39;/path/to/target/dir&#39;）后寻找 <code>test-env.nu</code> 并加载，而在离开该目录的时候移除相关定义（除了 <code>PWD</code> 环境变量）：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks.env_change.<span class="token environment constant">PWD</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            condition: <span class="token punctuation">{</span><span class="token operator">|</span>_, after<span class="token operator">|</span>
                <span class="token punctuation">(</span><span class="token variable">$after</span> <span class="token operator">==</span> <span class="token string">&#39;/path/to/target/dir&#39;</span>
                    and <span class="token punctuation">(</span><span class="token variable">$after</span> <span class="token operator">|</span> path <span class="token function">join</span> test-env.nu <span class="token operator">|</span> path exists<span class="token punctuation">))</span>
            <span class="token punctuation">}</span>
            code: <span class="token string">&quot;overlay add test-env.nu&quot;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">{</span>
            condition: <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span>
                <span class="token punctuation">(</span><span class="token string">&#39;/path/to/target/dir&#39;</span> not-in <span class="token variable">$after</span>
                    and <span class="token string">&#39;/path/to/target/dir&#39;</span> <span class="token keyword">in</span> <span class="token variable">$before</span>
                    and <span class="token string">&#39;test-env&#39;</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>overlay list<span class="token punctuation">))</span>
            <span class="token punctuation">}</span>
            code: <span class="token string">&quot;overlay remove test-env --keep-env [ PWD ]&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,24);function $(x,q){const c=e("ExternalLinkIcon"),o=e("RouterLink");return r(),i("div",null,[k,a("p",null,[n("钩子允许你在一些预定义的情况下运行一个代码片段。 它们只在交互式模式下可用（"),a("a",d,[n("REPL"),s(c)]),n("），如果你用脚本（"),h,n("）或命令（"),g,n("）参数运行 Nushell 则不起作用。")]),v,a("p",null,[n("要想使用钩子需要先在 "),s(o,{to:"/zh-CN/book/configuration.html"},{default:p(()=>[n("配置")]),_:1}),n(" 中定义它们：")]),f,a("p",null,[n("钩子的一个特点是它们保留了环境。 在钩子"),b,n("内定义的环境变量将以类似于 "),s(o,{to:"/zh-CN/book/environment.html#%E4%BB%8E%E8%87%AA%E5%AE%9A%E4%B9%89%E5%91%BD%E4%BB%A4%E4%B8%AD%E5%AE%9A%E4%B9%89%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},{default:p(()=>[_]),_:1}),n(" 的方式被保留下来。 你可以用下面的例子测试一下：")]),m])}const P=l(u,[["render",$],["__file","hooks.html.vue"]]);export{P as default};
