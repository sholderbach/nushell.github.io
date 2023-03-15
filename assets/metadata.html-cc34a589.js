import{_ as o,M as n,p as s,q as l,Q as e,t,N as r,U as c,a1 as p}from"./framework-344bb0e4.js";const d={},u=e("h1",{id:"元数据",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#元数据","aria-hidden":"true"},"#"),t(" 元数据")],-1),i=e("p",null,"在使用 Nu 的过程中，你可能遇到过这样的情况：你觉得有一些额外的事情在幕后进行。例如，假设你试图打开一个 Nu 支持的文件，但却忘记了它已被 Nu 支持并试图再次转换：",-1),m=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml | from toml
error: Expected a string from pipeline
- shell:1:18
1 | open Cargo.toml | from toml
  |                   ^^^^^^^^^ requires string input
- shell:1:5
1 | open Cargo.toml | from toml
  |      ---------- object originates from here
`)])],-1),_=e("p",null,[t("这个错误信息不仅告诉我们，我们给 "),e("code",null,"from toml"),t(" 的不是一个字符串，还告诉我们这个值最初来自哪里。那么它是如何知道的呢？")],-1),g=e("p",null,"在 Nu 中流经管道的值通常有一些额外信息，或元数据，附加在它们身上。这些通常被称为标签，就像商店里商品上的标签一样。这些标签并不影响数据，但它们给了 Nu 一种方法来改善使用这些数据的体验。",-1),h=e("code",null,"open",-1),f=p(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml | metadata
────────┬───────────────────────────────────────────
 span   │ {record 2 fields}
────────┴───────────────────────────────────────────
</code></pre></div><p>目前，我们只追踪值来自何处的起止范围(span)。让我们进一步仔细看看：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> metadata <span class="token operator">|</span> get span
───────┬────
 start │ <span class="token number">5</span>
 end   │ <span class="token number">15</span>
───────┴────
</code></pre></div><p>这里的范围 &quot;start&quot; 和 &quot;end&quot; 指的是下划线将标记在行中的位置。如果你数到 5，然后再数到 15，就会看到它与 &quot;Cargo.toml&quot; 文件名一致。这就是我们之前看到的错误是如何知道在何处标注下划线的。</p>`,4);function x(k,N){const a=n("RouterLink");return s(),l("div",null,[u,i,m,_,g,e("p",null,[t("让我们再次运行"),r(a,{to:"/commands/docs/open.html"},{default:c(()=>[h]),_:1}),t("命令，但这一次，我们将看一下它所反馈的标签：")]),f])}const v=o(d,[["render",x],["__file","metadata.html.vue"]]);export{v as default};
