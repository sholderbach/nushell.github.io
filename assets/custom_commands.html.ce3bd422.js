import{_ as p,r as c,o as l,c as i,a as n,b as e,w as t,e as o,d as a}from"./app.8034769a.js";const r={},d=o(`<h1 id="\u81EA\u5B9A\u4E49\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u547D\u4EE4" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u547D\u4EE4</h1><p>Nu \u5177\u5907\u7EC4\u5408\u957F\u7BA1\u9053\u7684\u80FD\u529B\u4F7F\u4F60\u5BF9\u6570\u636E\u548C\u7CFB\u7EDF\u6709\u5F88\u5F3A\u7684\u63A7\u5236\u529B\uFF0C\u4F46\u5B83\u7684\u4EE3\u4EF7\u662F\u9700\u8981\u5927\u91CF\u7684\u952E\u76D8\u8F93\u5165\u3002\u4E0D\u8FC7\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u4FDD\u5B58\u7CBE\u5FC3\u8BBE\u8BA1\u7684\u7BA1\u9053\u4EE5\u4FBF\u53CD\u590D\u4F7F\u7528\u3002</p><p>\u8FD9\u5C31\u662F\u81EA\u5B9A\u4E49\u547D\u4EE4(Custom Commands)\u7684\u4F5C\u7528\u3002</p><p>\u4E0B\u9762\u770B\u4E00\u4E2A\u81EA\u5B9A\u4E49\u547D\u4EE4\u7684\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token variable">$name</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u8FD9\u4E2A\u5B9A\u4E49\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86<code>greet</code>\u547D\u4EE4\uFF0C\u5B83\u9700\u8981\u4E00\u4E2A\u53C2\u6570<code>name</code>\u3002\u5728\u8FD9\u4E2A\u53C2\u6570\u540E\u9762\u662F\u81EA\u5B9A\u4E49\u547D\u4EE4\u8FD0\u884C\u65F6\u5C06\u6267\u884C\u7684\u4EE3\u7801\u5757\u3002\u5F53\u88AB\u8C03\u7528\u65F6\uFF0C\u81EA\u5B9A\u4E49\u547D\u4EE4\u5C06\u628A\u4F20\u9012\u7ED9<code>name</code>\u7684\u503C\u8BBE\u7F6E\u4E3A<code>$name</code>\u53D8\u91CF\uFF0C\u8BE5\u53D8\u91CF\u5728\u5757\u5185\u662F\u53EF\u7528\u7684\u3002</p><p>\u8981\u8FD0\u884C\u4E0A\u8FF0\u547D\u4EE4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u50CF\u8C03\u7528\u5185\u7F6E\u547D\u4EE4\u4E00\u6837\u8C03\u7528\u5B83\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> greet <span class="token string">&quot;world&quot;</span>
</code></pre></div><p>\u5F53\u6211\u4EEC\u8FD9\u6837\u505A\u7684\u65F6\u5019\uFF0C\u5C31\u4F1A\u5F97\u5230\u8F93\u51FA\uFF0C\u5982\u540C\u6211\u4EEC\u4F7F\u7528\u5185\u7F6E\u547D\u4EE4\u4E00\u6837\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 hello
 1 \u2502 world
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>echo</code>\u5C06\u5176\u53C2\u6570\u5206\u522B\u8FD4\u56DE\u7ED9\u7BA1\u9053\u3002\u5982\u679C\u4F60\u60F3\u7528\u5B83\u6765\u751F\u6210\u4E00\u4E2A\u5355\u4E00\u7684\u5B57\u7B26\u4E32\uFF0C\u8BF7\u5728\u7BA1\u9053\u4E2D\u6DFB\u52A0<code> | str collect</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str collect
<span class="token punctuation">}</span>

greet nushell
</code></pre></div><p>\u8FD4\u56DE <code>hello nushell</code></p></div><h2 id="\u547D\u4EE4\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u540D\u79F0" aria-hidden="true">#</a> \u547D\u4EE4\u540D\u79F0</h2><p>\u5728 Nushell \u4E2D\uFF0C\u547D\u4EE4\u540D\u662F\u4E00\u4E32\u5B57\u7B26\u6216\u4E00\u4E2A\u5E26\u5F15\u53F7\u7684\u5B57\u7B26\u4E32\u3002\u4E0B\u9762\u662F\u4E00\u4E9B\u6709\u6548\u547D\u4EE4\u540D\u7684\u4F8B\u5B50\uFF1A<code>greet</code>, <code>get-size</code>, <code>mycommand123</code>, <code>&quot;mycommand&quot;</code>, <code>\u{1F60A}</code>, \u548C<code>123</code>\u3002</p><p><em>\u6CE8\u610F\uFF1A\u5728 Nushell \u4E2D\uFF0C\u901A\u5E38\u7684\u505A\u6CD5\u662F\u7528<code>-</code>\u6765\u5206\u9694\u547D\u4EE4\u7684\u591A\u4E2A\u5355\u8BCD\uFF0C\u4EE5\u63D0\u9AD8\u53EF\u8BFB\u6027\u3002</em> \u4F8B\u5982\uFF0C\u4F7F\u7528 <code>get-size</code> \u800C\u4E0D\u662F <code>getsize</code> \u6216\u8005 <code>get_size</code>\u3002</p><h2 id="\u5B50\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5B50\u547D\u4EE4" aria-hidden="true">#</a> \u5B50\u547D\u4EE4</h2><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7A7A\u683C\u6765\u5B9A\u4E49\u547D\u4EE4\u7684\u5B50\u547D\u4EE4(Subcommand)\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u7ED9<code>str</code>\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u5B50\u547D\u4EE4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u547D\u540D\u6211\u4EEC\u7684\u5B50\u547D\u4EE4\u4EE5 &quot;str&quot; \u5F00\u5934\u6765\u505A\u5230\u3002\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def <span class="token string">&quot;str mycommand&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> hello
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u50CF\u8C03\u7528<code>str</code>\u7684\u5185\u7F6E\u5B50\u547D\u4EE4\u4E00\u6837\u8C03\u7528\u6211\u4EEC\u7684\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str mycommand
</code></pre></div><h2 id="\u53C2\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u53C2\u6570\u7C7B\u578B</h2><p>\u5728\u5B9A\u4E49\u81EA\u5B9A\u4E49\u547D\u4EE4\u65F6\uFF0C\u4F60\u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u53C2\u6570\u547D\u540D\u5E76\u9009\u62E9\u6027\u5730\u8BBE\u7F6E\u5176\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u628A\u4E0A\u9762\u7684\u5185\u5BB9\u5199\u6210\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str collect
<span class="token punctuation">}</span>
</code></pre></div><p>\u53C2\u6570\u7684\u7C7B\u578B\u662F\u53EF\u9009\u7684\u3002Nushell \u652F\u6301\u4E0D\u6DFB\u52A0\u7C7B\u578B\uFF0C\u6B64\u65F6\u4F1A\u628A\u53C2\u6570\u7C7B\u578B\u5F53\u4F5C<code>any</code>\u3002\u5982\u679C\u4F60\u5728\u53C2\u6570\u4E0A\u6807\u6CE8\u4E86\u4E00\u4E2A\u7C7B\u578B\uFF0CNushell \u5C06\u5728\u4F60\u8C03\u7528\u51FD\u6570\u7684\u65F6\u5019\u68C0\u67E5\u8BE5\u7C7B\u578B\u3002</p><p>\u4F8B\u5982\uFF0C\u5047\u8BBE\u4F60\u9700\u8981\u8F93\u5165\u4E00\u4E2A<code>int</code>\u7C7B\u578B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name: int<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str collect
<span class="token punctuation">}</span>

greet world
</code></pre></div><p>\u5982\u679C\u6211\u4EEC\u5C1D\u8BD5\u8FD0\u884C\u4E0A\u8FF0\u5185\u5BB9\uFF0CNushell \u4F1A\u544A\u8BC9\u6211\u4EEC\uFF0C\u7C7B\u578B\u4E0D\u5339\u914D\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>error: Type Error
  \u250C\u2500 shell:6:7
  \u2502
5 \u2502 greet world
  \u2502       ^^^^^ Expected int, found world
</code></pre></div><p>\u8FD9\u53EF\u4EE5\u5E2E\u52A9\u6307\u5BFC\u4F60\u7684\u7528\u6237\u53EA\u4F7F\u7528\u652F\u6301\u7684\u7C7B\u578B\u6765\u8C03\u7528\u4F60\u6240\u5B9A\u4E49\u7684\u547D\u4EE4\u3002</p><p>\u76EE\u524D\u53EF\u4EE5\u652F\u6301\u7684\u7C7B\u578B\u662F\uFF08\u4ECE 0.65.0 \u7248\u672C\u5F00\u59CB\uFF09\uFF1A</p><ul><li><code>any</code></li><li><code>block</code></li><li><code>cell-path</code></li><li><code>duration</code></li><li><code>path</code></li><li><code>expr</code></li><li><code>filesize</code></li><li><code>glob</code></li><li><code>int</code></li><li><code>math</code></li><li><code>number</code></li><li><code>operator</code></li><li><code>range</code></li><li><code>cond</code></li><li><code>bool</code></li><li><code>signature</code></li><li><code>string</code></li><li><code>variable</code></li><li><code>record</code></li><li><code>list</code></li><li><code>table</code></li><li><code>error</code></li></ul><h2 id="\u5177\u6709\u9ED8\u8BA4\u503C\u7684\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5177\u6709\u9ED8\u8BA4\u503C\u7684\u53C2\u6570" aria-hidden="true">#</a> \u5177\u6709\u9ED8\u8BA4\u503C\u7684\u53C2\u6570</h2><p>\u82E5\u8981\u4F7F\u4E00\u4E2A\u53C2\u6570\u6210\u4E3A\u53EF\u9009\u7684\uFF0C\u5E76\u5177\u6709\u9ED8\u8BA4\u503C\uFF0C\u4F60\u53EF\u4EE5\u5728\u547D\u4EE4\u5B9A\u4E49\u4E2D\u6307\u5B9A\u8BE5\u9ED8\u8BA4\u503C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name <span class="token operator">=</span> <span class="token string">&quot;nushell&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str collect
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F60\u53EF\u4EE5\u5728\u6CA1\u6709\u53C2\u6570\u7684\u60C5\u51B5\u4E0B\u8C03\u7528\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u503C\u6765\u8986\u76D6\u9ED8\u8BA4\u503C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet
hello nushell
&gt; greet world
hello world
</code></pre></div><p>\u4F60\u4E5F\u53EF\u4EE5\u5C06\u9ED8\u8BA4\u503C\u4E0E<a href="#%E5%8F%82%E6%95%B0%E7%B1%BB%E5%9E%8B">\u7C7B\u578B\u8981\u6C42</a>\u76F8\u7ED3\u5408\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>def congratulate [age: int = 18] {
  echo &quot;Happy birthday! Wow you are &quot; $age &quot; years old now!&quot; | str collect
}
</code></pre></div><p>\u5982\u679C\u4F60\u60F3\u68C0\u67E5\u4E00\u4E2A\u53EF\u9009\u53C2\u6570\u662F\u5426\u5B58\u5728\uFF0C\u800C\u4E0D\u662F\u4EC5\u4EC5\u4F9D\u8D56\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u8BF7\u4F7F\u7528<a href="#%E5%8F%AF%E9%80%89%E4%BD%8D%E7%BD%AE%E5%8F%82%E6%95%B0">\u53EF\u9009\u4F4D\u7F6E\u53C2\u6570</a>\u4EE3\u66FF\u3002</p><h2 id="\u53EF\u9009\u4F4D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u4F4D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u9009\u4F4D\u7F6E\u53C2\u6570</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F4D\u7F6E\u53C2\u6570(Positional Parameters)\u662F\u5FC5\u987B\u7684\u3002\u5982\u679C\u6CA1\u6709\u4F20\u9012\u4F4D\u7F6E\u53C2\u6570\uFF0C\u6211\u4EEC\u5C06\u9047\u5230\u4E00\u4E2A\u62A5\u9519\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>  \xD7 Missing required positional argument.
   \u256D\u2500[entry #23:1:1]
 1 \u2502 greet
   \xB7      \u25B2
   \xB7      \u2570\u2500\u2500 missing name
   \u2570\u2500\u2500\u2500\u2500
  help: Usage: greet &lt;name&gt;
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u4E00\u4E2A\u4F4D\u7F6E\u53C2\u6570\u7684\u540D\u5B57\u540E\u9762\u52A0\u4E0A\u4E00\u4E2A\u95EE\u53F7\uFF08<code>?</code>\uFF09\uFF0C\u5C06\u5176\u6807\u8BB0\u4E3A\u53EF\u9009\u53C2\u6570\u3002\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name?: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str collect
<span class="token punctuation">}</span>

greet
</code></pre></div><p>\u4F7F\u4E00\u4E2A\u4F4D\u7F6E\u53C2\u6570\u6210\u4E3A\u53EF\u9009\u53C2\u6570\u5E76\u4E0D\u6539\u53D8\u5B83\u5728\u547D\u4EE4\u4F53\u4E2D\u88AB\u8BBF\u95EE\u7684\u540D\u79F0\u3002\u5982\u4E0A\u4F8B\u6240\u793A\uFF0C\u5C3D\u7BA1\u53C2\u6570\u5217\u8868\u4E2D\u6709<code>?</code>\u7684\u540E\u7F00\uFF0C\u4F46\u5B83\u4ECD\u7136\u4EE5<code>$name</code>\u7684\u5F62\u5F0F\u88AB\u8BBF\u95EE\u3002</p><p>\u5F53\u4E00\u4E2A\u53EF\u9009\u53C2\u6570\u6CA1\u6709\u88AB\u4F20\u9012\uFF0C\u5B83\u5728\u547D\u4EE4\u4F53\u4E2D\u7684\u503C\u7B49\u4E8E<code>null</code>\u548C<code>$nothing</code>\u3002\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E00\u70B9\u6765\u5BF9\u6CA1\u6709\u4F20\u9012\u53C2\u6570\u7684\u60C5\u51B5\u8FDB\u884C\u5904\u7406\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>name?: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$name</span> <span class="token operator">==</span> null<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello, I don&#39;t know your name!&quot;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello &quot;</span> <span class="token variable">$name</span> <span class="token operator">|</span> str collect
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

greet
</code></pre></div><p>\u5982\u679C\u4F60\u53EA\u662F\u60F3\u5728\u53C2\u6570\u7F3A\u5931\u65F6\u8BBE\u7F6E\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u90A3\u4E48\u4F7F\u7528<a href="#%E5%85%B7%E6%9C%89%E9%BB%98%E8%AE%A4%E5%80%BC%E7%9A%84%E5%8F%82%E6%95%B0">\u9ED8\u8BA4\u503C</a>\u6765\u4EE3\u66FF\u5C31\u66F4\u7B80\u5355\u4E86\u3002</p><p>\u5982\u679C\u5FC5\u9700\u7684\u548C\u53EF\u9009\u7684\u4F4D\u7F6E\u53C2\u6570\u4E00\u8D77\u4F7F\u7528\uFF0C\u90A3\u4E48\u5FC5\u9700\u7684\u53C2\u6570\u5FC5\u987B\u5148\u51FA\u73B0\u5728\u5B9A\u4E49\u4E2D\u3002</p><h2 id="\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u6807\u5FD7" aria-hidden="true">#</a> \u6807\u5FD7</h2><p>\u9664\u4E86\u4F20\u9012\u4F4D\u7F6E\u53C2\u6570\u4E4B\u5916, \u4F60\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E3A\u81EA\u5B9A\u4E49\u547D\u4EE4\u5B9A\u4E49\u6807\u5FD7(Flags)\u6765\u4F20\u9012\u547D\u540D\u53C2\u6570\u3002</p><p>\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>
  name: string
  --age: int
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$age</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u4E0A\u9762\u7684<code>greet</code>\u5B9A\u4E49\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86<code>name</code>\u4F4D\u7F6E\u53C2\u6570\u4EE5\u53CA<code>age</code>\u6807\u5FD7\u3002\u8FD9\u5141\u8BB8<code>greet</code>\u7684\u8C03\u7528\u8005\u4E5F\u53EF\u4EE5\u9009\u62E9\u4F20\u9012<code>age</code>\u53C2\u6570\u3002</p><p>\u4F60\u53EF\u4EE5\u7528\u4EE5\u4E0B\u65B9\u6CD5\u8C03\u7528\u4E0A\u8FF0\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> greet world <span class="token parameter variable">--age</span> <span class="token number">10</span>
</code></pre></div><p>\u6216\u8005\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> greet <span class="token parameter variable">--age</span> <span class="token number">10</span> world
</code></pre></div><p>\u6216\u8005\u751A\u81F3\u5B8C\u5168\u4E0D\u4F7F\u7528\u6807\u5FD7\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet world
</code></pre></div><p>\u6807\u5FD7\u4E5F\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u7F29\u5199\u7248\u672C\uFF0C\u8FD9\u5141\u8BB8\u4F60\u4F20\u9012\u4E00\u4E2A\u66F4\u7B80\u5355\u7684\u6807\u5FD7\uFF0C\u5982\u540C\u4F20\u9012\u4E00\u4E2A\u66F4\u5BB9\u6613\u9605\u8BFB\u7684\u5168\u5199\u6807\u5FD7\u90A3\u6837\u3002</p><p>\u8BA9\u6211\u4EEC\u6269\u5C55\u524D\u9762\u7684\u4F8B\u5B50\uFF0C\u4E3A<code>age</code>\u6DFB\u52A0\u4E00\u4E2A\u7F29\u5199\u6807\u5FD7\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>
  name: string
  <span class="token parameter variable">--age</span> <span class="token punctuation">(</span>-a<span class="token punctuation">)</span>: int
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$age</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>\u6CE8\u610F\uFF1A</em> \u6807\u5FD7\u662F\u4EE5\u5176\u5168\u79F0\u547D\u540D\u7684\uFF0C\u6240\u4EE5\u4E0A\u9762\u7684\u4F8B\u5B50\u7684\u547D\u4EE4\u4F53\u5185\u9700\u8981\u4F7F\u7528<code>$age</code>\u800C\u4E0D\u662F<code>$a</code>\u3002</p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7F29\u5199\u6807\u5FD7\u6765\u8C03\u7528\u8FD9\u4E2A\u65B0\u7684\u5B9A\u4E49\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><p>\u6807\u5FD7\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u57FA\u672C\u5F00\u5173\u4F7F\u7528\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4EEC\u7684\u5B58\u5728\u6216\u4E0D\u5B58\u5728\u88AB\u5F53\u4F5C\u5B9A\u4E49\u7684\u53C2\u6570\u3002\u5EF6\u4F38\u524D\u9762\u7684\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>
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
</code></pre></div><p>\u800C\u8FD9\u4E2A\u5B9A\u4E49\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u8C03\u7528\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet -a 10 --twice hello
</code></pre></div><p>\u6216\u8005\u53EA\u662F\u6CA1\u6709\u5F00\u5173\u6807\u5FD7\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><h2 id="\u5269\u4F59\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5269\u4F59\u53C2\u6570" aria-hidden="true">#</a> \u5269\u4F59\u53C2\u6570</h2><p>\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B, \u4F60\u53EF\u80FD\u60F3\u5B9A\u4E49\u4E00\u4E2A\u9700\u8981\u4EFB\u610F\u6570\u91CF\u7684\u4F4D\u7F6E\u53C2\u6570\u7684\u547D\u4EE4\u3002\u6211\u4EEC\u53EF\u4EE5\u7528\u4E00\u4E2A\u5269\u4F59\u53C2\u6570(Rest Parameter)\u6765\u5B9E\u73B0\u8FD9\u4E00\u70B9\uFF0C\u901A\u8FC7\u4E0B\u9762\u7684<code>...</code>\u8BED\u6CD5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span><span class="token punctuation">..</span>.name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello all:&quot;</span>
  <span class="token keyword">for</span> <span class="token variable">$n</span> <span class="token keyword">in</span> <span class="token variable">$name</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$n</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

greet earth mars jupiter venus
</code></pre></div><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EFB\u610F\u6570\u91CF\u7684\u53C2\u6570\u6765\u8C03\u7528\u4E0A\u8FF0<code>greet</code>\u547D\u4EE4\u7684\u5B9A\u4E49\uFF0C\u5305\u62EC\u5B8C\u5168\u6CA1\u6709\u53C2\u6570\uFF0C\u6240\u6709\u7684\u53C2\u6570\u90FD\u5C06\u88AB\u6536\u96C6\u5230<code>$name</code>\u5217\u8868\u4E2D\u3002</p><p>\u5269\u4F59\u53C2\u6570\u53EF\u4EE5\u548C\u4F4D\u7F6E\u53C2\u6570\u4E00\u8D77\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>vip: string, <span class="token punctuation">..</span>.name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello to our VIP &quot;</span> <span class="token variable">$vip</span> <span class="token operator">|</span> str collect
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;and hello to everybody else:&quot;</span>
  <span class="token keyword">for</span> <span class="token variable">$n</span> <span class="token keyword">in</span> <span class="token variable">$name</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$n</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#     $vip          $name</span>
<span class="token comment">#     ---- ------------------------</span>
greet moon earth mars jupiter venus
</code></pre></div><h2 id="\u4E3A\u547D\u4EE4\u6DFB\u52A0\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u547D\u4EE4\u6DFB\u52A0\u6587\u6863" aria-hidden="true">#</a> \u4E3A\u547D\u4EE4\u6DFB\u52A0\u6587\u6863</h2><p>\u4E3A\u4E86\u66F4\u597D\u5730\u5E2E\u52A9\u7528\u6237\u4F7F\u7528\u4F60\u7684\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF0C\u4E5F\u53EF\u4EE5\u4E3A\u5176\u6DFB\u52A0\u989D\u5916\u7684\u547D\u4EE4\u548C\u53C2\u6570\u63CF\u8FF0\u3002</p><p>\u4EE5\u6211\u4EEC\u4E4B\u524D\u7684\u4F8B\u5B50\u4E3A\u4F8B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def greet <span class="token punctuation">[</span>
  name: string
  <span class="token parameter variable">--age</span> <span class="token punctuation">(</span>-a<span class="token punctuation">)</span>: int
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$age</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E00\u65E6\u5B9A\u4E49\u5B8C\u6BD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD0\u884C<code>help greet</code>\u6765\u83B7\u5F97\u8BE5\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt;

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;
</code></pre></div><p>\u4F60\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u5B9A\u4E49\u7684\u53C2\u6570\u548C\u6807\u5FD7\uFF0C\u4EE5\u53CA\u6240\u6709\u547D\u4EE4\u90FD\u4F1A\u5F97\u5230\u7684<code>-h</code>\u5E2E\u52A9\u6807\u5FD7\u3002</p><p>\u4E3A\u4E86\u6539\u8FDB\u8FD9\u4E2A\u5E2E\u52A9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u5B9A\u4E49\u4E2D\u52A0\u5165\u63CF\u8FF0\uFF0C\u8FD9\u4E9B\u63CF\u8FF0\u5C06\u5728\u5E2E\u52A9\u4E2D\u663E\u793A\u51FA\u6765\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># A greeting command that can greet the caller</span>
def greet <span class="token punctuation">[</span>
  name: string      <span class="token comment"># The name of the person to greet</span>
  <span class="token parameter variable">--age</span> <span class="token punctuation">(</span>-a<span class="token punctuation">)</span>: int   <span class="token comment"># The age of the person</span>
<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$name</span> <span class="token variable">$age</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u7ED9\u5B9A\u4E49\u548C\u53C2\u6570\u6DFB\u52A0\u7684\u6CE8\u91CA\u4F1A\u4F5C\u4E3A\u63CF\u8FF0\u51FA\u73B0\u5728\u547D\u4EE4\u7684<code>help</code>\u4E2D\u3002</p><p>\u73B0\u5728\uFF0C\u5982\u679C\u6211\u4EEC\u8FD0\u884C<code>help greet</code>\uFF0C\u5C31\u4F1A\u5F97\u5230\u4E00\u4E9B\u66F4\u53CB\u597D\u7684\u5E2E\u52A9\u6587\u672C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>A greeting command that can greet the caller

Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt; The name of the person to greet

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;: The age of the person
</code></pre></div><h2 id="\u7BA1\u9053\u8F93\u51FA" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u9053\u8F93\u51FA" aria-hidden="true">#</a> \u7BA1\u9053\u8F93\u51FA</h2><p>\u81EA\u5B9A\u4E49\u547D\u4EE4\u4F1A\u50CF\u5185\u7F6E\u547D\u4EE4\u4E00\u6837\u6D41\u5F0F\u8F93\u51FA\u3002\u4F8B\u5982\uFF0C\u5047\u8BBE\u6211\u4EEC\u60F3\u91CD\u6784\u8FD9\u4E2A\u7BA1\u9053\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> get name
</code></pre></div>`,92),u=a("\u8BA9\u6211\u4EEC\u628A"),g=n("code",null,"ls",-1),h=a("\u79FB\u5230\u6211\u4EEC\u7F16\u5199\u7684\u547D\u4EE4\u4E2D\uFF1A"),k=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code>def my-ls <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token function">ls</span> <span class="token punctuation">}</span>
</code></pre></div>`,1),m=a("\u6211\u4EEC\u5C31\u53EF\u4EE5\u50CF\u4F7F\u7528"),b=n("code",null,"ls",-1),v=a("\u4E00\u6837\u4F7F\u7528\u8FD9\u4E2A\u547D\u4EE4\u7684\u8F93\u51FA\uFF1A"),x=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; my-ls | get name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 myscript.nu
 1 \u2502 myscript2.nu
 2 \u2502 welcome_to_nushell.md
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u8FD9\u8BA9\u6211\u4EEC\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u521B\u5EFA\u81EA\u5B9A\u4E49\u547D\u4EE4\u5E76\u5904\u7406\u5B83\u4EEC\u7684\u8F93\u51FA\u3002\u6CE8\u610F\uFF0C\u6211\u4EEC\u4E0D\u50CF\u5176\u4ED6\u8BED\u8A00\u90A3\u6837\u4F7F\u7528\u8FD4\u56DE\u8BED\u53E5\uFF0C\u53D6\u800C\u4EE3\u4E4B\u7684\u662F\u6211\u4EEC\u521B\u5EFA\u7BA1\u9053\uFF0C\u800C\u5176\u8F93\u51FA\u6570\u636E\u6D41\u53EF\u4EE5\u8FDE\u63A5\u5230\u5176\u4ED6\u7BA1\u9053\u3002</p><h2 id="\u7BA1\u9053\u8F93\u5165" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u9053\u8F93\u5165" aria-hidden="true">#</a> \u7BA1\u9053\u8F93\u5165</h2><p>\u5982\u540C\u5176\u4ED6\u547D\u4EE4\u4E00\u6837\uFF0C\u81EA\u5B9A\u4E49\u547D\u4EE4\u4E5F\u53EF\u4EE5\u4ECE\u7BA1\u9053\u4E2D\u83B7\u53D6\u8F93\u5165\uFF0C\u8FD9\u4E2A\u8F93\u5165\u4F1A\u81EA\u52A8\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u547D\u4EE4\u6240\u4F7F\u7528\u7684\u4EE3\u7801\u5757\u3002</p><p>\u8BA9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u628A\u6240\u6709\u63A5\u6536\u503C\u90FD\u52A0\u500D\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def double <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token number">2</span> * <span class="token variable">$it</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u4E00\u4E2A\u7BA1\u9053\u4E2D\u8C03\u7528\u4E0A\u8FF0\u547D\u4EE4\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u5B83\u5BF9\u8F93\u5165\u7684\u5904\u7406\u7ED3\u679C\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [1 2 3] | double
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500
 0 \u2502 2
 1 \u2502 4
 2 \u2502 6
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528<code>$in</code>\u53D8\u91CF\u6765\u5B58\u50A8\u8F93\u5165\uFF0C\u4EE5\u4FBF\u5728\u540E\u9762\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>def nullify <span class="token punctuation">[</span><span class="token punctuation">..</span>.cols<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token builtin class-name">let</span> start <span class="token operator">=</span> <span class="token variable">$in</span>
  <span class="token variable">$cols</span> <span class="token operator">|</span> reduce <span class="token parameter variable">--fold</span> <span class="token variable">$start</span> <span class="token punctuation">{</span> <span class="token operator">|</span>col, <span class="token function">df</span><span class="token operator">|</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> upsert <span class="token variable">$col</span> null
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6301\u4E45\u5316" tabindex="-1"><a class="header-anchor" href="#\u6301\u4E45\u5316" aria-hidden="true">#</a> \u6301\u4E45\u5316</h2>`,11),f=a("\u5173\u4E8E\u5982\u4F55\u6301\u4E45\u5316\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF0C\u4EE5\u4FBF\u5728\u4F60\u542F\u52A8 Nushell \u65F6\u5B83\u4EEC\u662F\u53EF\u7528\u7684\uFF0C\u8BF7\u53C2\u9605 "),_=a("\u914D\u7F6E"),$=a(" \u90E8\u5206\u5E76\u6DFB\u52A0\u4F60\u7684\u542F\u52A8\u811A\u672C\u3002");function q(y,w){const s=c("RouterLink");return l(),i("div",null,[d,n("p",null,[u,e(s,{to:"/book/commands/ls.html"},{default:t(()=>[g]),_:1}),h]),k,n("p",null,[m,e(s,{to:"/book/commands/ls.html"},{default:t(()=>[b]),_:1}),v]),x,n("p",null,[f,e(s,{to:"/zh-CN/book/configuration.html"},{default:t(()=>[_]),_:1}),$])])}const B=p(r,[["render",q],["__file","custom_commands.html.vue"]]);export{B as default};
