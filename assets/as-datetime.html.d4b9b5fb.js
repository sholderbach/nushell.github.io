import{_ as n,z as o,A as r,X as t,C as e,D as s,a6 as d}from"./framework.3d018c9f.js";const c={},i={id:"frontmatter-title-for-dataframe",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),l={class:"command-title"},p=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; as-datetime </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>Format example:
        &quot;%y/%m/%d %H:%M:%S&quot;  =&gt; 21/12/31 12:54:98
        &quot;%y-%m-%d %H:%M:%S&quot;  =&gt; 2021-12-31 24:58:01
        &quot;%y/%m/%d %H:%M:%S&quot;  =&gt; 21/12/31 24:58:01
        &quot;%y%m%d %H:%M:%S&quot;    =&gt; 210319 23:58:50
        &quot;%Y/%m/%d %H:%M:%S&quot;  =&gt; 2021/12/31 12:54:98
        &quot;%Y-%m-%d %H:%M:%S&quot;  =&gt; 2021-12-31 24:58:01
        &quot;%Y/%m/%d %H:%M:%S&quot;  =&gt; 2021/12/31 24:58:01
        &quot;%Y%m%d %H:%M:%S&quot;    =&gt; 20210319 23:58:50
        &quot;%FT%H:%M:%S&quot;        =&gt; 2019-04-18T02:45:55
        &quot;%FT%H:%M:%S.%6f&quot;    =&gt; microseconds
        &quot;%FT%H:%M:%S.%9f&quot;    =&gt; nanoseconds
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Converts string to datetime</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;2021-12-30 00:00:00&quot;</span> <span class="token string">&quot;2021-12-31 00:00:00&quot;</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> as-datetime <span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span>
</code></pre></div>`,7);function m(a,h){return o(),r("div",null,[t("h1",i,[u,e(),t("code",null,s(a.$frontmatter.title),1),e(" for dataframe")]),t("div",l,s(a.$frontmatter.dataframe),1),p])}const q=n(c,[["render",m],["__file","as-datetime.html.vue"]]);export{q as default};
