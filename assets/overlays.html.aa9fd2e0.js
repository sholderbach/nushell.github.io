import{_ as e,r as c,o as l,c as u,a as n,b as t,w as p,d as s,e as a}from"./app.8034769a.js";const r={},i=n("h1",{id:"\u8986\u5C42",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8986\u5C42","aria-hidden":"true"},"#"),s(" \u8986\u5C42")],-1),d=n("p",null,'\u8986\u5C42(Overlays)\u4F5C\u4E3A\u5404\u79CD\u5B9A\u4E49\uFF08\u81EA\u5B9A\u4E49\u547D\u4EE4\u3001\u522B\u540D\u3001\u73AF\u5883\u53D8\u91CF\uFF09\u7684"\u5C42"\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u6FC0\u6D3B\u548C\u505C\u7528\u3002 \u5B83\u4EEC\u7C7B\u4F3C\u4E8E\u67D0\u4E9B\u8BED\u8A00\u4E2D\u7684\u865A\u62DF\u73AF\u5883\uFF0C\u5982 Python\u3002',-1),k=s("\u6CE8\u610F\uFF1A\u8981\u4E86\u89E3\u8986\u5C42\uFF0C\u8BF7\u786E\u4FDD\u5148\u67E5\u770B "),g=s("\u6A21\u5757"),h=s("\uFF0C\u56E0\u4E3A\u8986\u5C42\u662F\u5EFA\u7ACB\u5728\u6A21\u5757\u4E4B\u4E0A\u7684\u3002"),_=n("h2",{id:"\u57FA\u7840",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u57FA\u7840","aria-hidden":"true"},"#"),s(" \u57FA\u7840")],-1),m=s("\u9996\u5148\uFF0CNushell \u6709\u4E00\u4E2A\u9ED8\u8BA4\u7684\u8986\u5C42\uFF0C\u53EB\u505A "),v=n("code",null,"zero",-1),b=s("\u3002 \u4F60\u53EF\u4EE5\u7528 "),f=n("code",null,"overlay list",-1),y=s(" \u547D\u4EE4\u68C0\u67E5\u54EA\u4E9B\u8986\u5C42\u662F\u6D3B\u52A8\u7684\u3002 \u4F60\u5E94\u8BE5\u53EF\u4EE5\u770B\u5230\u9ED8\u8BA4\u7684\u8986\u5C42\u663E\u793A\u5728\u90A3\u91CC\u3002"),x=a(`<p>\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u8986\u5C42\uFF0C\u4F60\u9996\u5148\u9700\u8981\u4E00\u4E2A\u6A21\u5757\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> module spam <span class="token punctuation">{</span>
    <span class="token builtin class-name">export</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;foo&quot;</span>
    <span class="token punctuation">}</span>

    <span class="token builtin class-name">export</span> <span class="token builtin class-name">alias</span> bar <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span>

    <span class="token builtin class-name">export</span> <span class="token function">env</span> BAZ <span class="token punctuation">{</span>
        <span class="token string">&quot;baz&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u5C06\u5728\u672C\u7AE0\u4E2D\u4F7F\u7528\u8FD9\u4E2A\u6A21\u5757\u3002\u6BCF\u5F53\u4F60\u770B\u5230 <code>overlay add spam</code>\uFF0C\u5C31\u5E94\u8BE5\u77E5\u9053 <code>spam</code> \u662F\u6307\u8FD9\u4E2A\u6A21\u5757\u3002</p>`,3),z=s("\u8981\u521B\u5EFA\u8986\u5C42\uFF0C\u8BF7\u8C03\u7528 "),q=n("code",null,"overlay add",-1),w=s("\u3002"),N=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> overlay <span class="token function">add</span> spam

<span class="token operator">&gt;</span> foo
foo

<span class="token operator">&gt;</span> bar
bar

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.BAZ
baz

<span class="token operator">&gt;</span> overlay list
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 zero
 <span class="token number">1</span> \u2502 spam
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u5728\u4E0B\u9762\u7684\u7AE0\u8282\u4E2D\uFF0C<code>&gt;</code> \u7684\u63D0\u793A\u8BED\u524D\u9762\u4F1A\u6709\u6700\u540E\u4E00\u4E2A\u6D3B\u52A8\u8986\u5C42\u7684\u540D\u79F0\u3002 <code>(spam)&gt; some-command</code> \u8868\u793A\u5F53\u8F93\u5165\u547D\u4EE4\u65F6\uFF0C<code>spam</code> \u8986\u5C42\u662F\u6700\u540E\u6D3B\u52A8\u7684\u8986\u5C42\u3002</p><h2 id="\u79FB\u9664\u8986\u5C42" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664\u8986\u5C42" aria-hidden="true">#</a> \u79FB\u9664\u8986\u5C42</h2>`,3),B=s("\u5982\u679C\u4F60\u4E0D\u518D\u9700\u8981\u53E0\u52A0\u5B9A\u4E49\uFF0C\u8BF7\u8C03\u7528 "),C=n("code",null,"overlay remove",-1),V=s("\uFF1A"),E=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay remove spam

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> foo
Error: Can&#39;t run executable<span class="token punctuation">..</span>.

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay list
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 zero
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u8986\u5C42\u4E5F\u662F\u6709\u4F5C\u7528\u57DF\u7684\u3002 \u4EFB\u4F55\u6DFB\u52A0\u7684\u8986\u5C42\u90FD\u4F1A\u5728\u4F5C\u7528\u57DF\u7ED3\u675F\u65F6\u88AB\u79FB\u9664\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token keyword">do</span> <span class="token punctuation">{</span> overlay <span class="token function">add</span> spam<span class="token punctuation">;</span> foo <span class="token punctuation">}</span>
foo

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay list
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 zero
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,3),A=s("\u6B64\u5916\uFF0C"),L=n("code",null,"overlay remove",-1),P=s(" \u5728\u6CA1\u6709\u53C2\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C06\u5220\u9664\u6700\u540E\u4E00\u4E2A\u6D3B\u52A8\u7684\u8986\u5C42\u3002"),R=a(`<h2 id="\u8986\u5C42\u662F\u53EF\u8BB0\u5F55\u7684" tabindex="-1"><a class="header-anchor" href="#\u8986\u5C42\u662F\u53EF\u8BB0\u5F55\u7684" aria-hidden="true">#</a> \u8986\u5C42\u662F\u53EF\u8BB0\u5F55\u7684</h2><p>\u4EFB\u4F55\u65B0\u7684\u5B9A\u4E49\uFF08\u547D\u4EE4\u3001\u522B\u540D\u3001\u73AF\u5883\u53D8\u91CF\uFF09\u90FD\u4F1A\u88AB\u8BB0\u5F55\u5230\u6700\u540E\u4E00\u4E2A\u6D3B\u52A8\u7684\u8986\u5C42\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay <span class="token function">add</span> spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> def eggs <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\uFF0C<code>eggs</code> \u547D\u4EE4\u5C5E\u4E8E <code>spam</code> \u8986\u5C42\u3002 \u5982\u679C\u6211\u4EEC\u5220\u9664\u8BE5\u8986\u5C42\uFF0C\u6211\u4EEC\u5C31\u4E0D\u80FD\u518D\u8C03\u7528\u5B83\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay remove spam

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> eggs
Error: Can&#39;t run executable<span class="token punctuation">..</span>.
</code></pre></div><p>\u4F46\u662F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u5B83\u627E\u56DE\u6765!</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay <span class="token function">add</span> spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> eggs
eggs
</code></pre></div><p>\u8986\u5C42\u4F1A\u8BB0\u4F4F\u4F60\u6240\u6DFB\u52A0\u7684\u5185\u5BB9\uFF0C\u5373\u4F7F\u4F60\u5220\u9664\u4E86\u5B83\u4EEC\uFF0C\u4E5F\u4F1A\u50A8\u5B58\u8FD9\u4E9B\u4FE1\u606F\u3002 \u8FD9\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E0D\u540C\u7684\u4E0A\u4E0B\u6587\u4E2D\u53CD\u590D\u5207\u6362\u3002</p>`,8),T={class:"custom-container tip"},Z=a(`<p class="custom-container-title">TIP</p><p>\u6709\u65F6\uFF0C\u5728\u6DFB\u52A0\u4E00\u4E2A\u8986\u5C42\u540E\uFF0C\u4F60\u53EF\u80FD\u4E0D\u5E0C\u671B\u81EA\u5B9A\u4E49\u5BF9\u8C61\u88AB\u6DFB\u52A0\u5230\u5176\u4E2D\u3002 \u89E3\u51B3\u7684\u529E\u6CD5\u662F\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7A7A\u7684\u8986\u5C42\uFF0C\u53EA\u7528\u6765\u8BB0\u5F55\u81EA\u5B9A\u4E49\u7684\u53D8\u5316\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay <span class="token function">add</span> spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> module scratchpad <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay <span class="token function">add</span> scratchpad

<span class="token punctuation">(</span>scratchpad<span class="token punctuation">)</span><span class="token operator">&gt;</span> def eggs <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>
</code></pre></div><p><code>eggs</code> \u547D\u4EE4\u88AB\u6DFB\u52A0\u5230 <code>scratchpad</code> \u4E2D\uFF0C\u540C\u65F6\u4FDD\u6301 <code>spam</code> \u4E0D\u53D8\u3002</p>`,4),I=n("em",null,"0.64 \u7248\u672C\u65B0\u589E\uFF1A",-1),O=s(" \u4E3A\u4E86\u8BA9\u4E0A\u8FF0\u6B65\u9AA4\u4E0D\u90A3\u4E48\u5197\u957F\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 "),S=n("code",null,"overlay new",-1),$=s(" \u547D\u4EE4\uFF1A"),j=a(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay <span class="token function">add</span> spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay new scratchpad

<span class="token punctuation">(</span>scratchpad<span class="token punctuation">)</span><span class="token operator">&gt;</span> def eggs <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>
</code></pre></div>`,1),D=a(`<h2 id="\u4FDD\u5B58\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B58\u5B9A\u4E49" aria-hidden="true">#</a> \u4FDD\u5B58\u5B9A\u4E49</h2><p>\u6709\u65F6\uFF0C\u4F60\u53EF\u80FD\u60F3\u5220\u9664\u4E00\u4E2A\u8986\u5C42\uFF0C\u4F46\u4FDD\u7559\u6240\u6709\u4F60\u6DFB\u52A0\u7684\u81EA\u5B9A\u4E49\u5B9A\u4E49\uFF0C\u800C\u4E0D\u5FC5\u5728\u4E0B\u4E00\u4E2A\u6D3B\u52A8\u8986\u5C42\u4E2D\u91CD\u65B0\u5B9A\u4E49\u5B83\u4EEC\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay <span class="token function">add</span> spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> def eggs <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay remove --keep-custom spam

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> eggs
eggs
</code></pre></div><p><code>--keep-custom</code> \u6807\u5FD7\u6B63\u662F\u7528\u6765\u505A\u8FD9\u4E2A\u7684\u3002</p><h2 id="\u8986\u5C42\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8986\u5C42\u987A\u5E8F" aria-hidden="true">#</a> \u8986\u5C42\u987A\u5E8F</h2><p>\u8986\u5C42\u88AB\u6392\u6210\u4E00\u4E2A\u5806\u6808\u3002 \u5982\u679C\u591A\u4E2A\u8986\u5C42\u5305\u542B\u76F8\u540C\u7684\u5B9A\u4E49\uFF0C\u6BD4\u5982 <code>foo</code>\uFF0C\u6700\u540E\u4E00\u4E2A\u6D3B\u52A8\u7684\u8986\u5C42\u5C06\u4F18\u5148\u3002 \u8981\u628A\u67D0\u4E2A\u8986\u5C42\u653E\u5230\u5806\u6808\u7684\u9876\u90E8\uFF0C\u4F60\u53EF\u4EE5\u518D\u6B21\u8C03\u7528 <code>overlay add</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> def foo <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;foo-in-zero&quot;</span> <span class="token punctuation">}</span>

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay <span class="token function">add</span> spam

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> foo
foo

<span class="token punctuation">(</span>spam<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay <span class="token function">add</span> zero

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> foo
foo-in-zero

<span class="token punctuation">(</span>zero<span class="token punctuation">)</span><span class="token operator">&gt;</span> overlay list
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 spam
 <span class="token number">1</span> \u2502 zero
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\u73B0\u5728\uFF0C<code>zero</code> \u8986\u5C42\u5177\u6709\u4F18\u5148\u6743\u3002</p>`,8);function F(G,H){const o=c("RouterLink");return l(),u("div",null,[i,d,n("p",null,[n("em",null,[k,t(o,{to:"/zh-CN/book/modules.html"},{default:p(()=>[g]),_:1}),h])]),_,n("p",null,[m,v,b,t(o,{to:"/book/commands/overlay_list.html"},{default:p(()=>[f]),_:1}),y]),x,n("p",null,[z,t(o,{to:"/book/commands/overlay_add.html"},{default:p(()=>[q]),_:1}),w]),N,n("p",null,[B,t(o,{to:"/book/commands/overlay_remove.html"},{default:p(()=>[C]),_:1}),V]),E,n("p",null,[A,t(o,{to:"/book/commands/overlay_remove.html"},{default:p(()=>[L]),_:1}),P]),R,n("div",T,[Z,n("p",null,[I,O,t(o,{to:"/book/commands/overlay_new.html"},{default:p(()=>[S]),_:1}),$]),j]),D])}const K=e(r,[["render",F],["__file","overlays.html.vue"]]);export{K as default};
