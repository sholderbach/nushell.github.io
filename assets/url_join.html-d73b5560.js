import{_ as o,p as e,q as p,Q as s,t as a,v as t,a1 as l}from"./framework-344bb0e4.js";const u={},c={id:"frontmatter-title-for-network",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title-for-network","aria-hidden":"true"},"#",-1),r={class:"command-title"},q=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; url join </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Outputs a url representing the contents of this record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;scheme&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http&quot;</span>,
        <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;host&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;www.pixiv.net&quot;</span>,
        <span class="token string">&quot;port&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/member_illust.php&quot;</span>,
        <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;mode=medium&amp;illust_id=99260204&quot;</span>,
        <span class="token string">&quot;fragment&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token string">&quot;params&quot;</span><span class="token builtin class-name">:</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;medium&quot;</span>,
            <span class="token string">&quot;illust_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;99260204&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token operator">|</span> url <span class="token function">join</span>
</code></pre></div><p>Outputs a url representing the contents of this record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;scheme&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http&quot;</span>,
        <span class="token string">&quot;username&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;user&quot;</span>,
        <span class="token string">&quot;password&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pwd&quot;</span>,
        <span class="token string">&quot;host&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;www.pixiv.net&quot;</span>,
        <span class="token string">&quot;port&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1234&quot;</span>,
        <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test=a&quot;</span>,
        <span class="token string">&quot;fragment&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span> <span class="token operator">|</span> url <span class="token function">join</span>
</code></pre></div><p>Outputs a url representing the contents of this record</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;scheme&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http&quot;</span>,
        <span class="token string">&quot;host&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;www.pixiv.net&quot;</span>,
        <span class="token string">&quot;port&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1234&quot;</span>,
        <span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;user&quot;</span>,
        <span class="token string">&quot;fragment&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;frag&quot;</span>
    <span class="token punctuation">}</span> <span class="token operator">|</span> url <span class="token function">join</span>
</code></pre></div>`,9);function k(n,g){return e(),p("div",null,[s("h1",c,[i,a(),s("code",null,t(n.$frontmatter.title),1),a(" for network")]),s("div",r,t(n.$frontmatter.network),1),q])}const m=o(u,[["render",k],["__file","url_join.html.vue"]]);export{m as default};
