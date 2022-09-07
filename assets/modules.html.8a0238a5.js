import{_ as p,r as l,o as c,c as r,a as n,b as e,w as o,e as t,d as s}from"./app.8034769a.js";const i={},u=t(`<h1 id="\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a> \u6A21\u5757</h1><p>\u4E0E\u5176\u4ED6\u8BB8\u591A\u7F16\u7A0B\u8BED\u8A00\u7C7B\u4F3C\uFF0CNushell \u4E5F\u6709\u6A21\u5757\uFF0C\u53EF\u4EE5\u8BA9\u4F60\u5C06\u81EA\u5B9A\u4E49\u7684\u547D\u4EE4\u5BFC\u5165\u5230\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u3002 \u7136\u800C\uFF0C\u7531\u4E8E Nushell \u4E5F\u662F\u4E00\u4E2A Shell\uFF0C\u6A21\u5757\u8FD8\u5141\u8BB8\u4F60\u5BFC\u5165\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u7528\u6765\u65B9\u4FBF\u5730\u6FC0\u6D3B/\u505C\u7528\u5404\u79CD\u73AF\u5883\u914D\u7F6E\u3002</p><p><em>\u6CE8\u610F! \u76EE\u524D\u5BF9\u6A21\u5757\u7684\u5B9E\u73B0\u662F\u76F8\u5F53\u57FA\u672C\u7684\uFF0C\u5E76\u5C06\u5728\u672A\u6765\u8FDB\u4E00\u6B65\u6269\u5C55\u3002\u4F8B\u5982\uFF0C\u76EE\u524D\u8FD8\u4E0D\u80FD\u4ECE\u4E00\u4E2A\u6A21\u5757\u4E2D\u5BFC\u5165\u53E6\u4E00\u4E2A\u6A21\u5757\u3002</em></p><h2 id="\u57FA\u7840\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u77E5\u8BC6" aria-hidden="true">#</a> \u57FA\u7840\u77E5\u8BC6</h2><p>\u4E00\u4E2A\u7B80\u5355\u7684\u6A21\u5757\u53EF\u4EE5\u50CF\u8FD9\u6837\u5B9A\u4E49\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module greetings <span class="token punctuation">{</span>
     <span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
         $<span class="token string">&quot;hello (<span class="token variable">$name</span>)!&quot;</span>
     <span class="token punctuation">}</span>

     <span class="token builtin class-name">export</span> def hi <span class="token punctuation">[</span>where: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
         $<span class="token string">&quot;hi (<span class="token variable">$where</span>)!&quot;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6216\u8005\u5728\u4E00\u4E2A\u4E0E\u4F60\u8981\u521B\u5EFA\u7684\u6A21\u5757\u540D\u76F8\u540C\u7684\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># greetings.nu</span>

<span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hello (<span class="token variable">$name</span>)!&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> def hi <span class="token punctuation">[</span>where: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hi (<span class="token variable">$where</span>)!&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u5728 <code>greetings</code> \u6A21\u5757\u4E2D\u5B9A\u4E49\u4E86 <code>hello</code> \u548C <code>hi</code> \u4E24\u4E2A\u81EA\u5B9A\u4E49\u547D\u4EE4\u3002<code>export</code>\u5173\u952E\u5B57\u4F7F\u5F97\u4EE5\u540E\u53EF\u4EE5\u4ECE\u6A21\u5757\u4E2D\u5BFC\u5165\u8BE5\u547D\u4EE4\u3002</p>`,9),d=s("\u4E0E"),h=n("code",null,"def",-1),g=s("\u7C7B\u4F3C\uFF0C\u4E5F\u53EF\u4EE5\u7528"),k=n("code",null,"export",-1),_=s("\u5173\u952E\u5B57\u6807\u8BB0"),m=n("code",null,"def-env",-1),b=s("\uFF08\u4F60\u53EF\u4EE5\u5728"),v=s("\u73AF\u5883"),f=s("\u7AE0\u8282\u4E2D\u4E86\u89E3\u66F4\u591A\u5173\u4E8E"),q=n("code",null,"def-env",-1),x=s("\u7684\u4FE1\u606F\uFF09\u3002"),$=n("h2",{id:"\u4F7F\u7528\u6A21\u5757",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u6A21\u5757","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u6A21\u5757")],-1),w=s("\u6A21\u5757\u672C\u8EAB\u5E76\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5\uFF0C\u8981\u4F7F\u7528\u6A21\u5757\u5BFC\u51FA\u7684\u5B9A\u4E49\uFF0C\u6211\u4EEC\u9700\u8981"),N=n("code",null,"use",-1),O=s("\u5B83\uFF1A"),M=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings

<span class="token operator">&gt;</span> greetings hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> greetings hi <span class="token string">&quot;there&quot;</span>
hi there<span class="token operator">!</span>
</code></pre></div><p><code>hello</code>\u548C<code>hi</code>\u547D\u4EE4\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7<code>greetings</code>\u524D\u7F00\u88AB\u8C03\u7528\u3002</p><h2 id="\u5BFC\u5165\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u7B26\u53F7" aria-hidden="true">#</a> \u5BFC\u5165\u7B26\u53F7</h2>`,3),L=s("\u4E00\u822C\u6765\u8BF4\uFF0C"),A=n("code",null,"use",-1),E=s("\u5173\u952E\u8BCD\u540E\u9762\u7684\u4EFB\u4F55\u5185\u5BB9\u90FD\u4F1A\u5F62\u6210\u4E00\u4E2A"),R=n("strong",null,"\u5BFC\u5165\u6A21\u5F0F",-1),Y=s("\uFF0C\u5B83\u63A7\u5236\u7740\u7B26\u53F7\u7684\u5BFC\u5165\u65B9\u5F0F\u3002 \u5BFC\u5165\u6A21\u5F0F\u53EF\u4EE5\u662F\u4EE5\u4E0B\u7684\u4E00\u79CD\uFF1A"),B=t(`<p><code>use greetings</code></p><p>\u5BFC\u5165\u6240\u6709\u4EE5\u6A21\u5757\u540D\u79F0\u4E3A\u524D\u7F00\u7684\u7B26\u53F7\uFF08\u6211\u4EEC\u5728\u524D\u9762\u7684\u4F8B\u5B50\u4E2D\u770B\u5230\u4E86\u8FD9\u4E2A\uFF09\u3002</p><p><code>use greetings hello</code></p><p><code>hello</code>\u7B26\u53F7\u5C06\u88AB\u76F4\u63A5\u5BFC\u5165\uFF0C\u6CA1\u6709\u4EFB\u4F55\u524D\u7F00\u3002</p><p><code>use greetings [ hello, hi ] </code></p><p>\u76F4\u63A5\u5BFC\u5165\u591A\u4E2A\u7B26\u53F7\uFF0C\u6CA1\u6709\u4EFB\u4F55\u524D\u7F00\u3002</p><p><code>use greetings *</code></p><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6A21\u5757\u540D\u79F0\u548C<code>*</code> glob \u6765\u76F4\u63A5\u5BFC\u5165\u6240\u6709\u7684\u540D\u79F0\uFF0C\u4E14\u4E0D\u9700\u8981\u4EFB\u4F55\u524D\u7F00\u3002</p><h2 id="\u6A21\u5757\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u6587\u4EF6" aria-hidden="true">#</a> \u6A21\u5757\u6587\u4EF6</h2><p>Nushell \u8BA9\u4F60\u9690\u542B\u5730\u628A\u4E00\u4E2A\u6E90\u6587\u4EF6\u5F53\u4F5C\u4E00\u4E2A\u6A21\u5757\u3002 \u8BA9\u6211\u4EEC\u5148\u628A\u6A21\u5757\u5B9A\u4E49\u7684\u4E3B\u4F53\u4FDD\u5B58\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># greetings.nu</span>

<span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hello (<span class="token variable">$name</span>)!&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> def hi <span class="token punctuation">[</span>where: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hi (<span class="token variable">$where</span>)!&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),F=s("\u73B0\u5728\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u6587\u4EF6\u4E0A\u8C03\u7528"),K=n("code",null,"use",-1),V=s("\uFF1A"),C=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu

<span class="token operator">&gt;</span> greetings hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> greetings hi <span class="token string">&quot;there&quot;</span>
hi there<span class="token operator">!</span>
</code></pre></div><p>Nushell \u4F1A\u81EA\u52A8\u4ECE\u6587\u4EF6\u540D\uFF08&quot;greetings&quot;\uFF0C\u6CA1\u6709&quot;.nu&quot;\u6269\u5C55\u540D\uFF09\u63A8\u65AD\u51FA\u6A21\u5757\u7684\u540D\u79F0\u3002\u6240\u4EE5\u4F60\u53EF\u4EE5\u901A\u8FC7\u6587\u4EF6\u540D\u800C\u4E0D\u662F\u6A21\u5757\u540D\u914D\u5408\u4F7F\u7528\u4E0A\u8FF0\u4EFB\u4F55\u5BFC\u5165\u6A21\u5F0F\u6765\u5B8C\u6210\u5BFC\u5165\u3002</p><h2 id="\u672C\u5730\u81EA\u5B9A\u4E49\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u81EA\u5B9A\u4E49\u547D\u4EE4" aria-hidden="true">#</a> \u672C\u5730\u81EA\u5B9A\u4E49\u547D\u4EE4</h2><p>\u4EFB\u4F55\u5728\u6A21\u5757\u4E2D\u5B9A\u4E49\u7684\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF0C\u5982\u679C\u6CA1\u6709<code>export</code>\u5173\u952E\u5B57\uFF0C\u5C06\u53EA\u5728\u8BE5\u6A21\u5757\u7684\u4F5C\u7528\u57DF\u5185\u5DE5\u4F5C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># greetings.nu</span>

<span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    greetings-helper <span class="token string">&quot;hello&quot;</span> <span class="token string">&quot;world&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> def hi <span class="token punctuation">[</span>where: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    greetings-helper <span class="token string">&quot;hi&quot;</span> <span class="token string">&quot;there&quot;</span>
<span class="token punctuation">}</span>

def greetings-helper <span class="token punctuation">[</span>greeting: string, subject: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;(<span class="token variable">$greeting</span>) (<span class="token variable">$subject</span>)!&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\uFF0C\u5728 Nushell \u91CC\u6211\u4EEC\u53EF\u4EE5\u4ECE &quot;greetings.nu&quot; \u4E2D\u5BFC\u5165\u6240\u6709\u5B9A\u4E49\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu *

<span class="token operator">&gt;</span> hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> hi <span class="token string">&quot;there&quot;</span>
hi there<span class="token operator">!</span>

<span class="token operator">&gt;</span> greetings-helper <span class="token string">&quot;foo&quot;</span> <span class="token string">&quot;bar&quot;</span>  <span class="token comment"># fails because &#39;greetings-helper&#39; is not exported</span>
</code></pre></div><h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h2>`,8),j=s("\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u53EA\u662F\u7528\u6A21\u5757\u6765\u5BFC\u5165\u81EA\u5B9A\u4E49\u547D\u4EE4\uFF0C\u7528\u540C\u6837\u7684\u65B9\u6CD5\u5BFC\u51FA\u73AF\u5883\u53D8\u91CF\u4E5F\u662F\u53EF\u80FD\u7684\u3002 \u5176\u8BED\u6CD5\u4E0E\u4F60\u53EF\u80FD\u4E60\u60EF\u7684"),S=n("code",null,"let-env",-1),z=s("\u6216"),T=n("code",null,"load-env",-1),y=s("\u7B49\u547D\u4EE4\u7565\u6709\u4E0D\u540C\uFF1A"),D=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># greetings.nu</span>

<span class="token builtin class-name">export</span> <span class="token function">env</span> MYNAME <span class="token punctuation">{</span> <span class="token string">&quot;Arthur, King of the Britons&quot;</span> <span class="token punctuation">}</span>

<span class="token builtin class-name">export</span> def hello <span class="token punctuation">[</span>name: string<span class="token punctuation">]</span> <span class="token punctuation">{</span>
    $<span class="token string">&quot;hello (<span class="token variable">$name</span>)&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>use</code> \u7684\u5DE5\u4F5C\u65B9\u5F0F\u4E0E\u81EA\u5B9A\u4E49\u547D\u4EE4\u76F8\u540C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu

<span class="token operator">&gt;</span> <span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token string">&quot;greetings MYNAME&quot;</span>
Arthur, King of the Britons

<span class="token operator">&gt;</span> greetings hello <span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token string">&quot;greetings MYNAME&quot;</span>
hello Arthur, King of the Britons<span class="token operator">!</span>
</code></pre></div>`,3),G=s("\u4F60\u53EF\u80FD\u6CE8\u610F\u5230\u6211\u4EEC\u6CA1\u6709\u76F4\u63A5\u7ED9"),H=n("code",null,"MYNAME",-1),I=s("\u8D4B\u503C\uFF0C\u76F8\u53CD\uFF0C\u6211\u4EEC\u7ED9\u4E86\u5B83\u4E00\u4E2A\u4EE3\u7801\u5757\uFF08"),J=n("code",null,"{ ...}",-1),P=s("\uFF09\uFF0C\u5B83\u5728\u6211\u4EEC\u6BCF\u6B21\u8C03\u7528"),Q=n("code",null,"use",-1),U=s("\u65F6\u90FD\u4F1A\u88AB\u6267\u884C\u3002\u4F8B\u5982\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528"),W=n("code",null,"random",-1),X=s("\u547D\u4EE4\u6765\u6F14\u793A\u8FD9\u4E00\u70B9\uFF1A"),Z=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module roll <span class="token punctuation">{</span> <span class="token builtin class-name">export</span> <span class="token function">env</span> ROLL <span class="token punctuation">{</span> random dice <span class="token operator">|</span> into string <span class="token punctuation">}</span> <span class="token punctuation">}</span>

<span class="token operator">&gt;</span> use roll ROLL

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.ROLL
<span class="token number">4</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.ROLL
<span class="token number">4</span>

<span class="token operator">&gt;</span> use roll ROLL

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.ROLL
<span class="token number">6</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.ROLL
<span class="token number">6</span>
</code></pre></div><h2 id="\u5BFC\u51FA\u7B26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u7B26\u53F7" aria-hidden="true">#</a> \u5BFC\u51FA\u7B26\u53F7</h2><p>\u5982\u4E0A\u6240\u8FF0\uFF0C\u4F60\u53EF\u4EE5\u4ECE\u6A21\u5757\u4E2D\u5BFC\u51FA\u5B9A\u4E49\u548C\u73AF\u5883\u53D8\u91CF\u3002\u8FD9\u53EF\u4EE5\u8BA9\u4F60\u66F4\u5BB9\u6613\u5730\u5C06\u76F8\u5173\u7684\u5B9A\u4E49\u5206\u7EC4\uFF0C\u5E76\u5BFC\u51FA\u4F60\u60F3\u516C\u5F00\u7684\u5B9A\u4E49\u3002</p><p>\u4F60\u8FD8\u53EF\u4EE5\u5BFC\u51FA\u522B\u540D\u548C\u5916\u90E8\u58F0\u660E(extern)\uFF0C\u5E76\u5728\u9700\u8981\u65F6\u624D\u4F7F\u7528\u8FD9\u4E9B\u529F\u80FD\u3002\u5BFC\u51FA\u5916\u90E8\u58F0\u660E\u4E5F\u8BA9\u4F60\u6709\u80FD\u529B\u9690\u85CF\u6A21\u5757\u4E2D\u7684\u81EA\u5B9A\u4E49\u81EA\u52A8\u8865\u5168\u547D\u4EE4\uFF0C\u8FD9\u6837\u5B83\u4EEC\u5C31\u4E0D\u5FC5\u6210\u4E3A\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u7684\u4E00\u90E8\u5206\u3002</p><p>\u4E0B\u9762\u662F\u6240\u6709\u4F60\u53EF\u4EE5\u5BFC\u51FA\u7684\u5217\u8868\uFF1A</p><ul><li><code>export def</code> - \u5BFC\u51FA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u547D\u4EE4</li><li><code>export def-env</code> - \u5BFC\u51FA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u73AF\u5883\u547D\u4EE4</li><li><code>export env</code> - \u5BFC\u51FA\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF</li><li><code>export alias</code> - \u5BFC\u51FA\u4E00\u4E2A\u522B\u540D</li><li><code>export extern</code> - \u5BFC\u51FA\u4E00\u4E2A\u5DF2\u77E5\u5916\u90E8\u547D\u4EE4\u7684\u5B9A\u4E49</li></ul><h2 id="\u9690\u85CF" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF" aria-hidden="true">#</a> \u9690\u85CF</h2>`,7),nn=s('\u4EFB\u4F55\u81EA\u5B9A\u4E49\u547D\u4EE4\u3001\u522B\u540D\u6216\u73AF\u5883\u53D8\u91CF, \u65E0\u8BBA\u662F\u5426\u4ECE\u6A21\u5757\u4E2D\u5BFC\u5165, \u90FD\u53EF\u4EE5\u88AB "\u9690\u85CF", \u4EE5\u6062\u590D\u4E4B\u524D\u7684\u5B9A\u4E49\u3002 (\u6CE8\u610F\uFF0C\u73B0\u5728\u8FD8\u4E0D\u80FD\u4ECE\u6A21\u5757\u4E2D\u5BFC\u51FA\u522B\u540D\uFF0C\u4F46\u5B83\u4EEC\u4ECD\u7136\u53EF\u4EE5\u88AB\u9690\u85CF\u3002) \u6211\u4EEC\u7528'),sn=n("code",null,"hide",-1),an=s("\u547D\u4EE4\u6765\u5B9E\u73B0\u9690\u85CF\uFF1A"),en=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo&quot;</span> <span class="token punctuation">}</span>

<span class="token operator">&gt;</span> foo
foo

<span class="token operator">&gt;</span> hide foo

<span class="token operator">&gt;</span> foo  <span class="token comment"># error! command not found!</span>
</code></pre></div>`,1),on=n("code",null,"hide",-1),tn=s("\u547D\u4EE4\u4E5F\u63A5\u53D7\u5BFC\u5165\u6A21\u5F0F\uFF0C\u5C31\u50CF"),pn=n("code",null,"use",-1),ln=s("\u90A3\u6837\u3002\u4E0D\u8FC7\uFF0C\u5BFC\u5165\u6A21\u5F0F\u7684\u89E3\u91CA\u7565\u6709\u4E0D\u540C\u3002\u5B83\u53EF\u4EE5\u662F\u4E0B\u9762\u4E2D\u7684\u4E00\u79CD\uFF1A"),cn=t(`<p><code>hide foo</code> \u6216\u8005 <code>hide greetings</code></p><ul><li>\u5982\u679C\u8BE5\u540D\u79F0\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u547D\u4EE4\u6216\u73AF\u5883\u53D8\u91CF\uFF0C\u5219\u76F4\u63A5\u9690\u85CF\u5B83\u3002\u5426\u5219\uFF1A</li><li>\u5982\u679C\u540D\u5B57\u662F\u4E00\u4E2A\u6A21\u5757\u7684\u540D\u79F0\uFF0C\u5219\u9690\u85CF\u6240\u6709\u4EE5\u6A21\u5757\u540D\u79F0\u4E3A\u524D\u7F00\u7684\u5BFC\u51FA\u3002</li></ul><p><code>hide greetings hello</code></p><ul><li>\u9690\u85CF\u5E26\u524D\u7F00\u7684\u547D\u4EE4\u6216\u73AF\u5883\u53D8\u91CF</li></ul><p><code>hide greetings [hello, hi]</code></p><ul><li>\u9690\u85CF\u5E26\u524D\u7F00\u7684\u82E5\u5E72\u4E2A\u547D\u4EE4\u6216\u73AF\u5883\u53D8\u91CF</li></ul><p><code>hide greetings *</code></p><ul><li>\u9690\u85CF\u6A21\u5757\u7684\u6240\u6709\u7684\u5BFC\u51FA\uFF0C\u4E0D\u542B\u524D\u7F00</li></ul><p>\u8BA9\u6211\u4EEC\u770B\u51E0\u4E2A\u4F8B\u5B50\u3002\u524D\u9762\u5DF2\u7ECF\u770B\u5230\u4E86\u76F4\u63A5\u9690\u85CF\u4E00\u4E2A\u81EA\u5B9A\u4E49\u547D\u4EE4\u7684\u4F8B\u5B50\uFF0C\u73B0\u5728\u8BA9\u6211\u4EEC\u8BD5\u8BD5\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env FOO <span class="token operator">=</span> <span class="token string">&quot;FOO&quot;</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.FOO
FOO

<span class="token operator">&gt;</span> hide FOO

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.FOO  <span class="token comment"># error! environment variable not found!</span>
</code></pre></div><p>\u7B2C\u4E00\u79CD\u60C5\u51B5\u4E5F\u9002\u7528\u4E8E\u4ECE\u4E00\u4E2A\u6A21\u5757\u5BFC\u5165\u7684\u547D\u4EE4/\u73AF\u5883\u53D8\u91CF\uFF08\u4F7F\u7528\u4E0A\u9762\u5B9A\u4E49\u7684 &quot;greetings.nu&quot; \u6587\u4EF6\uFF09\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu *

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.MYNAME
Arthur, King of the Britons

<span class="token operator">&gt;</span> hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> hide MYNAME

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.MYNAME  <span class="token comment"># error! environment variable not found!</span>

<span class="token operator">&gt;</span> hide hello

<span class="token operator">&gt;</span> hello <span class="token string">&quot;world&quot;</span> <span class="token comment"># error! command not found!</span>
</code></pre></div><p>\u6700\u540E\uFF0C\u5F53\u540D\u79F0\u4E3A\u6A21\u5757\u540D\u65F6\uFF08\u5047\u8BBE\u662F\u4E4B\u524D\u7684<code>greetings</code>\u6A21\u5757\uFF09\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> use greetings.nu

<span class="token operator">&gt;</span> <span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token string">&quot;greetings MYNAME&quot;</span>
Arthur, King of the Britons

<span class="token operator">&gt;</span> greetings hello <span class="token string">&quot;world&quot;</span>
hello world<span class="token operator">!</span>

<span class="token operator">&gt;</span> hide greetings

<span class="token operator">&gt;</span> <span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token string">&quot;greetings MYNAME&quot;</span>  <span class="token comment"># error! environment variable not found!</span>

<span class="token operator">&gt;</span> greetings hello <span class="token string">&quot;world&quot;</span> <span class="token comment"># error! command not found!</span>
</code></pre></div>`,14);function rn(un,dn){const a=l("RouterLink");return c(),r("div",null,[u,n("p",null,[d,e(a,{to:"/book/commands/def.html"},{default:o(()=>[h]),_:1}),g,k,_,e(a,{to:"/book/commands/def-env.html"},{default:o(()=>[m]),_:1}),b,e(a,{to:"/zh-CN/book/environment.html"},{default:o(()=>[v]),_:1}),f,e(a,{to:"/book/commands/def-env.html"},{default:o(()=>[q]),_:1}),x]),$,n("p",null,[w,e(a,{to:"/book/commands/use.html"},{default:o(()=>[N]),_:1}),O]),M,n("p",null,[L,e(a,{to:"/book/commands/use.html"},{default:o(()=>[A]),_:1}),E,R,Y]),B,n("p",null,[F,e(a,{to:"/book/commands/use.html"},{default:o(()=>[K]),_:1}),V]),C,n("p",null,[j,e(a,{to:"/book/commands/let-env.html"},{default:o(()=>[S]),_:1}),z,e(a,{to:"/book/commands/load-env.html"},{default:o(()=>[T]),_:1}),y]),D,n("p",null,[G,H,I,J,P,e(a,{to:"/book/commands/use.html"},{default:o(()=>[Q]),_:1}),U,e(a,{to:"/book/commands/random.html"},{default:o(()=>[W]),_:1}),X]),Z,n("p",null,[nn,e(a,{to:"/book/commands/hide.html"},{default:o(()=>[sn]),_:1}),an]),en,n("p",null,[e(a,{to:"/book/commands/hide.html"},{default:o(()=>[on]),_:1}),tn,e(a,{to:"/book/commands/use.html"},{default:o(()=>[pn]),_:1}),ln]),cn])}const gn=p(i,[["render",rn],["__file","modules.html.vue"]]);export{gn as default};
