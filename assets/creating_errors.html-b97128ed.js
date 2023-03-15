import{_ as n,M as s,p as l,q as c,Q as e,t,N as o,U as r,a1 as d}from"./framework-344bb0e4.js";const i={},m=e("h1",{id:"creating-your-own-errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#creating-your-own-errors","aria-hidden":"true"},"#"),t(" Creating your own errors")],-1),h=e("ul",null,[e("li",null,"The title of the error"),e("li",null,"The label of error message, which includes both the text of the label and the span to underline")],-1),u=e("code",null,"error make",-1),g=e("code",null,"my-command",-1),p=e("p",null,"First, you can take the span of where the argument is coming from:",-1),_=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`let span = (metadata $x).span;
`)])],-1),x=e("code",null,"error make",-1),f=d(`<div class="language-text" data-ext="text"><pre class="language-text"><code>error make {msg: &quot;this is fishy&quot;, label: {text: &quot;fish right here&quot;, start: $span.start, end: $span.end } }
</code></pre></div><p>Together with your custom command, it might look like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>def my-command [x] {
    let span = (metadata $x).span;
    error make {
        msg: &quot;this is fishy&quot;,
        label: {
            text: &quot;fish right here&quot;,
            start: $span.start,
            end: $span.end
        }
    }
}
</code></pre></div><p>When called with a value, we&#39;ll now see an error message returned:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; my-command 100

Error:
  × this is fishy
   ╭─[entry #5:1:1]
 1 │ my-command 100
   ·            ─┬─
   ·             ╰── fish right here
   ╰────
</code></pre></div>`,5);function y(w,k){const a=s("RouterLink");return l(),c("div",null,[m,e("p",null,[t("Using the "),o(a,{to:"/book/metadata.html"},{default:r(()=>[t("metadata")]),_:1}),t(" information, you can create your own custom error messages. Error messages are built of multiple parts:")]),h,e("p",null,[t("You can use the "),o(a,{to:"/commands/docs/error_make.html"},{default:r(()=>[u]),_:1}),t(" command to create your own error messages. For example, let's say you had your own command called "),g,t(" and you wanted to give an error back to the caller about something wrong with a parameter that was passed in.")]),p,_,e("p",null,[t("Next, you can create an error using the "),o(a,{to:"/commands/docs/error_make.html"},{default:r(()=>[x]),_:1}),t(" command. This command takes in a record that describes the error to create:")]),f])}const b=n(i,[["render",y],["__file","creating_errors.html.vue"]]);export{b as default};
