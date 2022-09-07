import{_ as l,r as e,o as r,c as i,a,b as s,w as p,d as n,e as t}from"./app.8034769a.js";const u={},k=a("h1",{id:"\u94A9\u5B50",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u94A9\u5B50","aria-hidden":"true"},"#"),n(" \u94A9\u5B50")],-1),d=n("\u94A9\u5B50\u5141\u8BB8\u4F60\u5728\u4E00\u4E9B\u9884\u5B9A\u4E49\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C\u4E00\u4E2A\u4EE3\u7801\u7247\u6BB5\u3002 \u5B83\u4EEC\u53EA\u5728\u4EA4\u4E92\u5F0F\u6A21\u5F0F\u4E0B\u53EF\u7528\uFF08"),h={href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"},g=n("REPL"),v=n("\uFF09\uFF0C\u5982\u679C\u4F60\u7528\u811A\u672C\uFF08"),f=a("code",null,"nu script.nu",-1),b=n("\uFF09\u6216\u547D\u4EE4\uFF08"),_=a("code",null,'nu -c "echo foo"',-1),m=n("\uFF09\u53C2\u6570\u8FD0\u884C Nushell \u5219\u4E0D\u8D77\u4F5C\u7528\u3002"),$=t('<p>\u76EE\u524D\uFF0C\u6211\u4EEC\u652F\u6301\u8FD9\u4E9B\u7C7B\u578B\u7684\u94A9\u5B50\uFF1A</p><ul><li><code>pre_prompt</code> : \u5728\u547D\u4EE4\u63D0\u793A\u663E\u793A\u4E4B\u524D\u88AB\u89E6\u53D1\uFF1B</li><li><code>pre_execution</code> : \u5728\u884C\u8F93\u5165\u5F00\u59CB\u6267\u884C\u524D\u88AB\u89E6\u53D1\uFF1B</li><li><code>env_change</code> : \u5F53\u73AF\u5883\u53D8\u91CF\u53D1\u751F\u53D8\u5316\u65F6\u88AB\u89E6\u53D1\uFF1B</li></ul><p>\u4E3A\u4E86\u66F4\u6E05\u6670\u5730\u9610\u8FF0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06 Nushell \u7684\u6267\u884C\u5468\u671F\u8FDB\u884C\u5206\u89E3\u3002 \u5728 REPL \u6A21\u5F0F\u4E0B\uFF0C\u8BC4\u4F30\u4E00\u884C\uFF08\u4EE3\u7801\uFF09\u7684\u6B65\u9AA4\u5982\u4E0B\uFF1A</p><ol><li>\u68C0\u67E5 <code>pre_prompt</code> \u94A9\u5B50\u5E76\u8FD0\u884C\u5B83\u4EEC\uFF1B</li><li>\u68C0\u67E5 <code>env_change</code> \u94A9\u5B50\u5E76\u8FD0\u884C\u5B83\u4EEC\uFF1B</li><li>\u663E\u793A\u547D\u4EE4\u63D0\u793A\u7B26\u5E76\u7B49\u5F85\u7528\u6237\u8F93\u5165\uFF1B</li><li>\u5728\u7528\u6237\u8F93\u5165\u4E1C\u897F\u5E76\u6309\u4E0B &quot;Enter&quot; \u5065\u540E\uFF0C\u68C0\u67E5 <code>pre_execution</code> \u94A9\u5B50\u5E76\u8FD0\u884C\u5B83\u4EEC\uFF1B</li><li>\u89E3\u6790\u548C\u8BC4\u4F30\u7528\u6237\u7684\u8F93\u5165\uFF1B</li><li>\u8FD4\u56DE\u5230\u7B2C\u4E00\u6B65\uFF1B</li></ol><h2 id="\u57FA\u672C\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u94A9\u5B50" aria-hidden="true">#</a> \u57FA\u672C\u94A9\u5B50</h2>',5),x=n("\u8981\u60F3\u4F7F\u7528\u94A9\u5B50\u9700\u8981\u5148\u5728 "),q=n("\u914D\u7F6E"),E=n(" \u4E2D\u5B9A\u4E49\u5B83\u4EEC\uFF1A"),P=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment"># ...other config...</span>

    hooks: <span class="token punctuation">{</span>
        pre_prompt: <span class="token punctuation">{</span> print <span class="token string">&quot;pre prompt hook&quot;</span> <span class="token punctuation">}</span>
        pre_execution: <span class="token punctuation">{</span> print <span class="token string">&quot;pre exec hook&quot;</span> <span class="token punctuation">}</span>
        env_change: <span class="token punctuation">{</span>
            <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> print $<span class="token string">&quot;changing directory from (<span class="token variable">$before</span>) to (<span class="token variable">$after</span>)&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BD5\u7740\u628A\u4E0A\u8FF0\u5185\u5BB9\u653E\u5230\u4F60\u7684\u914D\u7F6E\u4E2D\uFF0C\u8FD0\u884C Nushell \u5E76\u5728\u4F60\u7684\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u5207\u6362\u76EE\u5F55\u3002 \u5F53\u4F60\u6539\u53D8\u4E00\u4E2A\u76EE\u5F55\u65F6\uFF0C<code>PWD</code> \u73AF\u5883\u53D8\u91CF\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u8FD9\u4E2A\u53D8\u5316\u4F1A\u89E6\u53D1\u94A9\u5B50\uFF0C\u4E4B\u524D\u548C\u73B0\u5728\u7684\u503C\u5206\u522B\u5B58\u50A8\u5728 <code>before</code> \u548C <code>after</code> \u53D8\u91CF\u4E2D\u3002</p><p>\u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u89E6\u53D1\u5668\u53EA\u5B9A\u4E49\u4E00\u4E2A\u94A9\u5B50\uFF0C\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A<strong>\u94A9\u5B50\u5217\u8868</strong>\uFF0C\u8BA9\u5176\u4F9D\u6B21\u8FD0\u884C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div><p>\u53E6\u5916\uFF0C\u7528\u65B0\u7684\u94A9\u5B50\u66F4\u65B0\u73B0\u6709\u7684\u914D\u7F6E\uFF0C\u800C\u4E0D\u662F\u4ECE\u5934\u5F00\u59CB\u5B9A\u4E49\u6574\u4E2A\u914D\u7F6E\u53EF\u80FD\u66F4\u5B9E\u7528\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    pre_prompt: <span class="token punctuation">..</span>.
    pre_execution: <span class="token punctuation">..</span>.
    env_change: <span class="token punctuation">{</span>
        <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">..</span>.
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4FEE\u6539\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u4FEE\u6539\u73AF\u5883\u53D8\u91CF</h2>`,7),y=n("\u94A9\u5B50\u7684\u4E00\u4E2A\u7279\u70B9\u662F\u5B83\u4EEC\u4FDD\u7559\u4E86\u73AF\u5883\u3002 \u5728\u94A9\u5B50"),A=a("strong",null,"\u4EE3\u7801\u5757",-1),D=n("\u5185\u5B9A\u4E49\u7684\u73AF\u5883\u53D8\u91CF\u5C06\u4EE5\u7C7B\u4F3C\u4E8E "),W=a("code",null,"def-env",-1),B=n(" \u7684\u65B9\u5F0F\u88AB\u4FDD\u7559\u4E0B\u6765\u3002 \u4F60\u53EF\u4EE5\u7528\u4E0B\u9762\u7684\u4F8B\u5B50\u6D4B\u8BD5\u4E00\u4E0B\uFF1A"),N=t(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    pre_prompt: <span class="token punctuation">{</span> let-env SPAM <span class="token operator">=</span> <span class="token string">&quot;eggs&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.SPAM
eggs
</code></pre></div><p>\u94A9\u5B50\u4EE3\u7801\u5757\u9075\u5FAA\u4E00\u822C\u7684\u4F5C\u7528\u57DF\u89C4\u5219\uFF0C\u5373\u5728\u5757\u5185\u5B9A\u4E49\u7684\u547D\u4EE4\u3001\u522B\u540D\u7B49\u5C06\u5728\u4EE3\u7801\u5757\u7ED3\u675F\u540E\u88AB\u4E22\u6389\u3002</p><h2 id="\u6761\u4EF6\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u94A9\u5B50" aria-hidden="true">#</a> \u6761\u4EF6\u94A9\u5B50</h2><p>\u4F60\u53EF\u80FD\u5F88\u60F3\u505A\u7684\u4E00\u4EF6\u4E8B\u662F\uFF0C\u6BCF\u5F53\u4F60\u8FDB\u5165\u4E00\u4E2A\u76EE\u5F55\u65F6\uFF0C\u5C31\u6FC0\u6D3B\u4E00\u4E2A\u73AF\u5883\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks {
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
</code></pre></div><p>\u8FD9\u4E0D\u4F1A\u8D77\u4F5C\u7528\uFF0C\u56E0\u4E3A\u8BE5\u73AF\u5883\u53EA\u5728 <code>if</code> \u5757\u5185\u6709\u6548\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u5F88\u5BB9\u6613\u5730\u5C06\u5176\u91CD\u5199\u4E3A <code>load-env (if $after == ... { ... } else { {} })</code>\uFF0C\u4F46\u8FD9\u79CD\u6A21\u5F0F\u662F\u76F8\u5F53\u5E38\u89C1\u7684\uFF0C\u4EE5\u540E\u6211\u4EEC\u4F1A\u770B\u5230\u5E76\u975E\u6240\u6709\u7684\u60C5\u51B5\u90FD\u80FD\u50CF\u8FD9\u6837\u91CD\u5199\u3002</p><p>\u4E3A\u4E86\u5904\u7406\u4E0A\u8FF0\u95EE\u9898\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u53E6\u4E00\u79CD\u5B9A\u4E49\u94A9\u5B50\u7684\u65B9\u5F0F -- <strong>\u8BB0\u5F55</strong>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    env_change: <span class="token punctuation">{</span>
        <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                condition: <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> <span class="token variable">$after</span> <span class="token operator">==</span> /some/path/to/directory <span class="token punctuation">}</span>
                code: <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> load-env <span class="token punctuation">{</span> SPAM: eggs <span class="token punctuation">}</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5F53\u94A9\u5B50\u89E6\u53D1\u65F6\uFF0C\u5B83\u4F1A\u8BC4\u4F30 <code>condition</code> \u4EE3\u7801\u5757\u3002 \u5982\u679C\u5B83\u8FD4\u56DE <code>true</code>\uFF0C\u5219 <code>code</code> \u5BF9\u5E94\u4EE3\u7801\u5757\u5C06\u4F1A\u88AB\u8BC4\u4F30\u6267\u884C\u3002 \u5982\u679C\u5B83\u8FD4\u56DE <code>false</code>\uFF0C\u4EC0\u4E48\u4E5F\u4E0D\u4F1A\u53D1\u751F\u3002 \u5982\u679C\u5B83\u8FD4\u56DE\u522B\u7684\u4E1C\u897F\uFF0C\u5C31\u4F1A\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\u3002 <code>condition</code> \u5B57\u6BB5\u4E5F\u53EF\u4EE5\u5B8C\u5168\u7701\u7565\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u94A9\u5B50\u5C06\u603B\u662F\u88AB\u8BC4\u4F30\u3002</p><p><code>pre_prompt</code> \u548C <code>pre_execution</code> \u94A9\u5B50\u7C7B\u578B\u4E5F\u652F\u6301\u6761\u4EF6\u94A9\u5B50\uFF0C\u4F46\u5B83\u4EEC\u4E0D\u63A5\u53D7 <code>before</code> \u548C <code>after</code> \u53C2\u6570\u3002</p><h2 id="\u5B57\u7B26\u4E32\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u94A9\u5B50" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u94A9\u5B50</h2><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u4E00\u4E2A\u94A9\u5B50\u88AB\u5B9A\u4E49\u4E3A\u4E00\u4E2A\u53EA\u4FDD\u7559\u73AF\u5883\u7684\u4EE3\u7801\u5757\uFF0C\u800C\u6CA1\u6709\u5176\u4ED6\u4E1C\u897F\u3002 \u4E3A\u4E86\u80FD\u591F\u5B9A\u4E49\u547D\u4EE4\u6216\u522B\u540D\uFF0C\u53EF\u4EE5\u5C06 <code>code</code> \u5B57\u6BB5\u5B9A\u4E49\u4E3A<strong>\u4E00\u4E2A\u5B57\u7B26\u4E32</strong>\u3002 \u4F60\u53EF\u4EE5\u628A\u5B83\u60F3\u6210\u662F\u4F60\u5728 REPL \u4E2D\u8F93\u5165\u5B57\u7B26\u4E32\u5E76\u70B9\u51FB\u56DE\u8F66\u952E\u3002 \u6240\u4EE5\uFF0C\u4E0A\u4E00\u8282\u4E2D\u7684\u94A9\u5B50\u4E5F\u53EF\u4EE5\u5199\u6210\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    pre_prompt: <span class="token string">&#39;let-env SPAM = &quot;eggs&quot;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token operator">&gt;</span> <span class="token variable">$env</span>.SPAM
eggs
</code></pre></div><p>\u8FD9\u4E2A\u529F\u80FD\u53EF\u4EE5\u7528\u6765\uFF0C\u4F8B\u5982\uFF0C\u6839\u636E\u5F53\u524D\u76EE\u5F55\u6709\u6761\u4EF6\u5730\u5F15\u5165\u5B9A\u4E49\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
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
</code></pre></div><p>\u5F53\u628A\u94A9\u5B50\u5B9A\u4E49\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C<code>$before</code> \u548C <code>$after</code> \u53D8\u91CF\u5206\u522B\u88AB\u8BBE\u7F6E\u4E3A\u4E4B\u524D\u548C\u5F53\u524D\u7684\u73AF\u5883\u53D8\u91CF\u503C\uFF0C\u8FD9\u4E0E\u524D\u9762\u7684\u4F8B\u5B50\u7C7B\u4F3C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks <span class="token punctuation">{</span>
    env_change: <span class="token punctuation">{</span>
        <span class="token environment constant">PWD</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            code: <span class="token string">&#39;print $&quot;changing directory from ($before) to ($after)&quot;&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h2><h3 id="\u5728\u73B0\u6709\u914D\u7F6E\u4E2D\u589E\u52A0\u4E00\u4E2A\u5355\u4E00\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#\u5728\u73B0\u6709\u914D\u7F6E\u4E2D\u589E\u52A0\u4E00\u4E2A\u5355\u4E00\u94A9\u5B50" aria-hidden="true">#</a> \u5728\u73B0\u6709\u914D\u7F6E\u4E2D\u589E\u52A0\u4E00\u4E2A\u5355\u4E00\u94A9\u5B50</h3><p>\u4E00\u4E2A\u5173\u4E8E <code>PWD</code> \u73AF\u5883\u53D8\u5316\u7684\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks.env_change.<span class="token environment constant">PWD</span> <span class="token punctuation">{</span><span class="token operator">|</span>config<span class="token operator">|</span>
    <span class="token builtin class-name">let</span> val <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$config</span> <span class="token operator">|</span> get <span class="token parameter variable">-i</span> hooks.env_change.<span class="token environment constant">PWD</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token variable">$val</span> <span class="token operator">==</span> <span class="token variable">$nothing</span> <span class="token punctuation">{</span>
        <span class="token variable">$val</span> <span class="token operator">|</span> append <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> print $<span class="token string">&quot;changing directory from (<span class="token variable">$before</span>) to (<span class="token variable">$after</span>)&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token operator">|</span>before, after<span class="token operator">|</span> print $<span class="token string">&quot;changing directory from (<span class="token variable">$before</span>) to (<span class="token variable">$after</span>)&quot;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u8FDB\u5165\u76EE\u5F55\u65F6\u81EA\u52A8\u6FC0\u6D3B\u76F8\u5E94\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165\u76EE\u5F55\u65F6\u81EA\u52A8\u6FC0\u6D3B\u76F8\u5E94\u73AF\u5883" aria-hidden="true">#</a> \u8FDB\u5165\u76EE\u5F55\u65F6\u81EA\u52A8\u6FC0\u6D3B\u76F8\u5E94\u73AF\u5883</h3><p>\u4EE5\u4E0B\u4EE3\u7801\u5C06\u5728\u8FDB\u5165\u4E00\u4E2A\u76EE\u5F55\uFF08&#39;/path/to/target/dir&#39;\uFF09\u540E\u5BFB\u627E <code>test-env.nu</code> \u5E76\u52A0\u8F7D\uFF0C\u800C\u5728\u79BB\u5F00\u8BE5\u76EE\u5F55\u7684\u65F6\u5019\u79FB\u9664\u76F8\u5173\u5B9A\u4E49\uFF08\u9664\u4E86 <code>PWD</code> \u73AF\u5883\u53D8\u91CF\uFF09\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env config <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span>.config <span class="token operator">|</span> upsert hooks.env_change.<span class="token environment constant">PWD</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,24);function w(L,S){const c=e("ExternalLinkIcon"),o=e("RouterLink");return r(),i("div",null,[k,a("p",null,[d,a("a",h,[g,s(c)]),v,f,b,_,m]),$,a("p",null,[x,s(o,{to:"/zh-CN/book/configuration.html"},{default:p(()=>[q]),_:1}),E]),P,a("p",null,[y,A,D,s(o,{to:"/zh-CN/book/environment.html#%E4%BB%8E%E8%87%AA%E5%AE%9A%E4%B9%89%E5%91%BD%E4%BB%A4%E4%B8%AD%E5%AE%9A%E4%B9%89%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},{default:p(()=>[W]),_:1}),B]),N])}const R=l(u,[["render",w],["__file","hooks.html.vue"]]);export{R as default};
