import{_ as t,M as o,p,q as c,Q as n,t as s,N as r,U as l,a1 as a}from"./framework-344bb0e4.js";const u={},i=a(`<h1 id="外部命令" tabindex="-1"><a class="header-anchor" href="#外部命令" aria-hidden="true">#</a> 外部命令</h1><p>调用外部命令是将 Nushell 作为一个 Shell 使用的基本部分（通常也将 Nushell 作为一种语言使用）。但是有一个问题，对于 Nushell 之外的命令而言，Nushell 不能帮助寻找调用中的错误，或者自动补全，或者语法高亮。</p><p>这就是 <code>extern</code> 的作用。<code>extern</code>关键字允许你为 Nushell 之外的命令写一个完整的签名，这样你就能得到上述所有的好处。如果你看一下默认配置，你会发现其中有一些<code>extern</code>调用。下面是其中之一：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">export</span> extern <span class="token string">&quot;git push&quot;</span> <span class="token punctuation">[</span>
    remote?: string@<span class="token string">&quot;nu-complete git remotes&quot;</span>,   <span class="token comment"># the name of the remote</span>
    refspec?: string@<span class="token string">&quot;nu-complete git branches&quot;</span>  <span class="token comment"># the branch / refspec</span>
    --verbose<span class="token punctuation">(</span>-v<span class="token punctuation">)</span>                                <span class="token comment"># be more verbose</span>
    --quiet<span class="token punctuation">(</span>-q<span class="token punctuation">)</span>                                  <span class="token comment"># be more quiet</span>
    --repo: string                               <span class="token comment"># repository</span>
    <span class="token parameter variable">--all</span>                                        <span class="token comment"># push all refs</span>
    <span class="token parameter variable">--mirror</span>                                     <span class="token comment"># mirror all refs</span>
    --delete<span class="token punctuation">(</span>-d<span class="token punctuation">)</span>                                 <span class="token comment"># delete refs</span>
    <span class="token parameter variable">--tags</span>                                       <span class="token comment"># push tags (can&#39;t be used with --all or --mirror)</span>
    --dry-run<span class="token punctuation">(</span>-n<span class="token punctuation">)</span>                                <span class="token comment"># dry run</span>
    <span class="token parameter variable">--porcelain</span>                                  <span class="token comment"># machine-readable output</span>
    --force<span class="token punctuation">(</span>-f<span class="token punctuation">)</span>                                  <span class="token comment"># force updates</span>
    --force-with-lease: string                   <span class="token comment"># require old value of ref to be at this value</span>
    --recurse-submodules: string                 <span class="token comment"># control recursive pushing of submodules</span>
    <span class="token parameter variable">--thin</span>                                       <span class="token comment"># use thin pack</span>
    --receive-pack: string                       <span class="token comment"># receive pack program</span>
    --exec: string                               <span class="token comment"># receive pack program</span>
    --set-upstream<span class="token punctuation">(</span>-u<span class="token punctuation">)</span>                           <span class="token comment"># set upstream for git pull/status</span>
    <span class="token parameter variable">--progress</span>                                   <span class="token comment"># force progress reporting</span>
    <span class="token parameter variable">--prune</span>                                      <span class="token comment"># prune locally removed refs</span>
    --no-verify                                  <span class="token comment"># bypass pre-push hook</span>
    --follow-tags                                <span class="token comment"># push missing but relevant tags</span>
    --signed: string                             <span class="token comment"># GPG sign the push</span>
    <span class="token parameter variable">--atomic</span>                                     <span class="token comment"># request atomic transaction on remote side</span>
    --push-option<span class="token punctuation">(</span>-o<span class="token punctuation">)</span>: string                    <span class="token comment"># option to transmit</span>
    --ipv4<span class="token punctuation">(</span>-4<span class="token punctuation">)</span>                                   <span class="token comment"># use IPv4 addresses only</span>
    --ipv6<span class="token punctuation">(</span>-6<span class="token punctuation">)</span>                                   <span class="token comment"># use IPv6 addresses only</span>
  <span class="token punctuation">]</span>
</code></pre></div><p>你会注意到这给了你所有与内部命令相同的描述性语法，让你描述标志(Flags)、短标志(Short Flags)、位置参数、类型等等。</p><h2 id="类型和自定义补全" tabindex="-1"><a class="header-anchor" href="#类型和自定义补全" aria-hidden="true">#</a> 类型和自定义补全</h2>`,6),m=n("code",null,"@",-1),k=a('<p>参数的类型（或形状）和自定义补全都告诉 Nushell 如何完成对该标志或位置值的补全。例如，将类型设置为<code>path</code>允许 Nushell 为你将值补全为一个文件路径。使用<code>@</code>和一个自定义的补全方式覆盖了这个默认行为，让该自定义补全方式返回给你完整的补全列表。</p><h2 id="局限性" tabindex="-1"><a class="header-anchor" href="#局限性" aria-hidden="true">#</a> 局限性</h2><p>目前的<code>extern</code>语法有一些限制。在 Nushell 中，标志和位置参数是非常灵活的：标志可以在位置参数之前, 也可以与位置参数混合, 还可以跟随位置参数。许多外部命令没有这种灵活性。目前还没有一种方法来确保标志和位置参数的特定顺序与外部命令所要求的风格保持一致。</p><p>第二个限制是，有些外部命令要求使用<code>=</code>来传递标志和值。在 Nushell 中，<code>=</code>是一种方便的可选默认参数语法，目前还没有办法按要求使用它。</p>',4);function d(h,g){const e=o("RouterLink");return p(),c("div",null,[i,n("p",null,[s("在上面的例子中，你会注意到有些类型后面有"),m,s("，接着后面是命令的名称。我们有独立的章节进一步谈论 "),r(e,{to:"/zh-CN/book/custom_completions.html"},{default:l(()=>[s("自定义补全")]),_:1}),s("。")]),k])}const v=t(u,[["render",d],["__file","externs.html.vue"]]);export{v as default};
