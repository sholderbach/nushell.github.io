import{_ as r,z as o,A as n,X as t,C as e,T as s,$ as c,a6 as i,Q as d}from"./framework.3d018c9f.js";const l={},m=t("h1",{id:"creating-your-own-errors",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#creating-your-own-errors","aria-hidden":"true"},"#"),e(" Creating your own errors")],-1),h=i(`<ul><li>The title of the error</li><li>The label of error message, which includes both the text of the label and the span to underline</li></ul><p>You can use the <code>error make</code> command to create your own error messages. For example, let&#39;s say you had your own command called <code>my-command</code> and you wanted to give an error back to the caller about something wrong with a parameter that was passed in.</p><p>First, you can take the span of where the argument is coming from:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let span = (metadata $x).span;
</code></pre></div><p>Next, you can create an error using the <code>error make</code> command. This command takes in a record that describes the error to create:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>error make {msg: &quot;this is fishy&quot;, label: {text: &quot;fish right here&quot;, start: $span.start, end: $span.end } }
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
</code></pre></div>`,10);function u(g,p){const a=d("RouterLink");return o(),n("div",null,[m,t("p",null,[e("Using the "),s(a,{to:"/book/metadata.html"},{default:c(()=>[e("metadata")]),_:1}),e(" information, you can create your own custom error messages. Error messages are built of multiple parts:")]),h])}const f=r(l,[["render",u],["__file","creating_errors.html.vue"]]);export{f as default};
