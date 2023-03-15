import{_ as l,M as c,p,q as h,Q as e,t as n,N as o,U as t,a1 as s}from"./framework-344bb0e4.js";const u={},r=s(`<h1 id="shell-中的-shell" tabindex="-1"><a class="header-anchor" href="#shell-中的-shell" aria-hidden="true">#</a> Shell 中的 Shell</h1><h2 id="在多个目录下工作" tabindex="-1"><a class="header-anchor" href="#在多个目录下工作" aria-hidden="true">#</a> 在多个目录下工作</h2><p>虽然在一个目录下工作很常见，但同时在多个路径工作也很方便。为此，Nu 提供了 &quot;Shells&quot; 的概念。顾名思义，它们是一种在一个 Shell 中运行多个 Shell 的方法，允许你在多个工作目录之间快速跳转。</p><p>作为开始，让我们进入一个目录：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/home/jonathant/Source/nushell<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> enter <span class="token punctuation">..</span>/book
/home/jonathant/Source/book<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> <span class="token function">ls</span>
────┬────────────────────┬──────┬────────┬─────────────
 <span class="token comment">#  │ name               │ type │ size   │ modified</span>
────┼────────────────────┼──────┼────────┼─────────────
  <span class="token number">0</span> │ <span class="token number">404</span>.html           │ File │  <span class="token number">429</span> B │ <span class="token number">2</span> hours ago
  <span class="token number">1</span> │ CONTRIBUTING.md    │ File │  <span class="token number">955</span> B │ <span class="token number">2</span> hours ago
  <span class="token number">2</span> │ Gemfile            │ File │ <span class="token number">1.1</span> KB │ <span class="token number">2</span> hours ago
  <span class="token number">3</span> │ Gemfile.lock       │ File │ <span class="token number">6.9</span> KB │ <span class="token number">2</span> hours ago
</code></pre></div>`,5),d=e("code",null,"enter",-1),i=e("code",null,"cd",-1),m=e("code",null,"shells",-1),k=s(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>/home/jonathan/Source/book<span class="token punctuation">(</span>main<span class="token punctuation">)</span><span class="token operator">&gt;</span> shells
───┬────────┬────────────┬─────────────────────────
 <span class="token comment"># │ active │    name    │          path</span>
───┼────────┼────────────┼─────────────────────────
 <span class="token number">0</span> │ <span class="token boolean">false</span>  │ filesystem │ /home/jt/Source/nushell
 <span class="token number">1</span> │ <span class="token boolean">true</span>   │ filesystem │ /home/jt/Source/book
 <span class="token number">2</span> │ <span class="token boolean">false</span>  │ filesystem │ /home/jt/Source/music
───┴────────┴────────────┴─────────────────────────

</code></pre></div>`,1),_=e("code",null,"shells",-1),b=s(`<p>我们可以用 <code>n</code>, <code>p</code> 和 <code>g</code> 的快捷命令在这些 Shell 之间跳转，这是 &quot;next&quot;、&quot;previous&quot; 和 &quot;go&quot; 的缩写：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathant/Source/book(main)&gt; n
/home/jonathant/Source/nushell(main)&gt; p
/home/jonathant/Source/book(main)&gt; g 2
/home/jonathant/Source/music(main)&gt;
</code></pre></div><p>我们可以看到目录在变化，但我们总是能够回到我们正在工作的前一个目录。这使我们能够在同一个会话的多个目录中工作。</p><h2 id="退出-shell" tabindex="-1"><a class="header-anchor" href="#退出-shell" aria-hidden="true">#</a> 退出 Shell</h2><p>你可以使用 <code>exit</code> 命令离开一个你已经 &quot;进入(<code>enter</code>)&quot; 的 Shell。如果这是最后一个打开的 Shell，Nu 将退出。</p><p>你可以随时退出 Nu，即使有多个 Shell 处于活动状态，只需要在<code>exit</code>命令中传递<code>--now</code>标志。像这样：<code>exit --now</code></p>`,6);function g(S,f){const a=c("RouterLink");return p(),h("div",null,[r,e("p",null,[n("进入("),d,n(")类似于改变目录（正如我们在"),i,n("命令中看到的那样）。这允许你跳入一个目录，在其中工作。我们现在是在两个目录中，而不是改变目录。为了更清楚地看到这一点，我们可以使用"),o(a,{to:"/commands/docs/shells.html"},{default:t(()=>[m]),_:1}),n("命令来列出我们当前的活动目录：")]),k,e("p",null,[o(a,{to:"/commands/docs/shells.html"},{default:t(()=>[_]),_:1}),n('命令显示目前有三个 Shells 处于活动状态：我们最初的 "nushell" 源目录和现在的新 "book" 目录。')]),b])}const q=l(u,[["render",g],["__file","shells_in_shells.html.vue"]]);export{q as default};
