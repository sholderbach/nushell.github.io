import{_ as r,r as o,o as n,c as s,a as t,b as c,w as i,d as e,e as d}from"./app.8034769a.js";const l={},h=t("h1",{id:"creating-your-own-errors",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#creating-your-own-errors","aria-hidden":"true"},"#"),e(" Creating your own errors")],-1),m=e("Using the "),u=e("metadata"),g=e(" information, you can create your own custom error messages. Error messages are built of multiple parts:"),p=d(`<ul><li>The title of the error</li><li>The label of error message, which includes both the text of the label and the span to underline</li></ul><p>You can use the <code>error make</code> command to create your own error messages. For example, let&#39;s say you had your own command called <code>my-command</code> and you wanted to give an error back to the caller about something wrong with a parameter that was passed in.</p><p>First, you can take the span of where the argument is coming from:</p><div class="language-text ext-text"><pre class="language-text"><code>let span = (metadata $x).span;
</code></pre></div><p>Next, you can create an error using the <code>error make</code> command. This command takes in a record that describes the error to create:</p><div class="language-text ext-text"><pre class="language-text"><code>error make {msg: &quot;this is fishy&quot;, label: {text: &quot;fish right here&quot;, start: $span.start, end: $span.end } }
</code></pre></div><p>Together with your custom command, it might look like this:</p><div class="language-text ext-text"><pre class="language-text"><code>def my-command [x] {
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
</code></pre></div><p>When called with a value, we&#39;ll now see an error message returned:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; my-command 100

Error:
  \xD7 this is fishy
   \u256D\u2500[entry #5:1:1]
 1 \u2502 my-command 100
   \xB7            \u2500\u252C\u2500
   \xB7             \u2570\u2500\u2500 fish right here
   \u2570\u2500\u2500\u2500\u2500
</code></pre></div>`,10);function x(_,f){const a=o("RouterLink");return n(),s("div",null,[h,t("p",null,[m,c(a,{to:"/book/metadata.html"},{default:i(()=>[u]),_:1}),g]),p])}const w=r(l,[["render",x],["__file","creating_errors.html.vue"]]);export{w as default};
