import{_ as n,M as r,p as c,q as i,Q as e,t,N as a,U as s,a1 as d}from"./framework-344bb0e4.js";const l={},h=d(`<h1 id="stdout-stderr-and-exit-codes" tabindex="-1"><a class="header-anchor" href="#stdout-stderr-and-exit-codes" aria-hidden="true">#</a> Stdout, Stderr, and Exit Codes</h1><p>An important piece of interop between Nushell and external commands is working with the standard streams of data coming from the external.</p><p>The first of these important streams is stdout.</p><h2 id="stdout" tabindex="-1"><a class="header-anchor" href="#stdout" aria-hidden="true">#</a> Stdout</h2><p>Stdout is the way that most external apps will send data into the pipeline or to the screen. Data sent by an external app to its stdout is received by Nushell by default if it&#39;s part of a pipeline:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; external | str join
</code></pre></div>`,6),u=e("code",null,"external",-1),m=e("code",null,"str join",-1),p=d(`<p>Without the pipeline, Nushell will not do any redirection, allowing it to print directly to the screen.</p><h2 id="stderr" tabindex="-1"><a class="header-anchor" href="#stderr" aria-hidden="true">#</a> Stderr</h2><p>Another common stream that external applications often use to print error messages is stderr. By default, Nushell does not do any redirection of stderr, which means that by default it will print to the screen.</p><p>You can force Nushell to do a redirection by using <code>do { ... } | complete</code>. For example, if we wanted to call the external above and redirect its stderr, we would write:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; do { external } | complete
</code></pre></div><h2 id="exit-code" tabindex="-1"><a class="header-anchor" href="#exit-code" aria-hidden="true">#</a> Exit code</h2><p>Finally, external commands have an &quot;exit code&quot;. These codes help give a hint to the caller whether the command ran successfully.</p><p>Nushell tracks the last exit code of the recently completed external in one of two ways. The first way is with the <code>LAST_EXIT_CODE</code> environment variable.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; do { external }
&gt; $env.LAST_EXIT_CODE
</code></pre></div>`,9),x=e("code",null,"complete",-1),g={id:"using-the-complete-command",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#using-the-complete-command","aria-hidden":"true"},"#",-1),_=e("code",null,"complete",-1),w=e("code",null,"complete",-1),y=e("code",null,"cat",-1),v=e("code",null,"complete",-1),b=d(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; do { cat unknown.txt } | complete
╭───────────┬─────────────────────────────────────────────╮
│ stdout    │                                             │
│ stderr    │ cat: unknown.txt: No such file or directory │
│ exit_code │ 1                                           │
╰───────────┴─────────────────────────────────────────────╯
</code></pre></div><h2 id="using-out-err-to-redirect-stdout-and-stderr-to-files" tabindex="-1"><a class="header-anchor" href="#using-out-err-to-redirect-stdout-and-stderr-to-files" aria-hidden="true">#</a> Using <code>out&gt;</code>, <code>err&gt;</code> to redirect stdout and stderr to files</h2><p>If you want to redirect output to file, you can just types something like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cat unknown.txt out&gt; out.log err&gt; err.log
</code></pre></div><p>If you want to redirect both stdout and stderr to the same file, just types something like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>cat unknown.txt out+err&gt; log.log
</code></pre></div><h2 id="raw-streams" tabindex="-1"><a class="header-anchor" href="#raw-streams" aria-hidden="true">#</a> Raw streams</h2><p>Both stdout and stderr are represented as &quot;raw streams&quot; inside of Nushell. These are streams of bytes rather than structured data, which are what internal Nushell commands use.</p><p>Because streams of bytes can be difficult to work with, especially given how common it is to use output as if it was text data, Nushell attempts to convert raw streams into text data. This allows other commands to pull on the output of external commands and receive strings they can further process.</p><p>Nushell attempts to convert to text using UTF-8. If at any time the conversion fails, the rest of the stream is assumed to always be bytes.</p>`,10),N=e("code",null,"decode",-1),T=e("code",null,"decode",-1),k=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> 0x[8a 4c] | decode shift-jis
貝
`)])],-1);function S(j,E){const o=r("RouterLink");return c(),i("div",null,[h,e("p",null,[t("The above would call the external named "),u,t(" and would redirect the stdout output stream into the pipeline. With this redirection, Nushell can then pass the data to the next command in the pipeline, here "),a(o,{to:"/commands/docs/str_join.html"},{default:s(()=>[m]),_:1}),t(".")]),p,e("p",null,[t("The second uses a command called "),a(o,{to:"/commands/docs/complete.html"},{default:s(()=>[x]),_:1}),t(".")]),e("h2",g,[f,t(" Using the "),a(o,{to:"/commands/docs/complete.html"},{default:s(()=>[_]),_:1}),t(" command")]),e("p",null,[t("The "),a(o,{to:"/commands/docs/complete.html"},{default:s(()=>[w]),_:1}),t(" command allows you to run an external to completion, and gather the stdout, stderr, and exit code together in one record.")]),e("p",null,[t("If we try to run the external "),y,t(" on a file that doesn't exist, we can see what "),a(o,{to:"/commands/docs/complete.html"},{default:s(()=>[v]),_:1}),t(" does with the streams, including the redirected stderr:")]),b,e("p",null,[t("If you want more control over the decoding of the byte stream, you can use the "),a(o,{to:"/commands/docs/decode.html"},{default:s(()=>[N]),_:1}),t(" command. The "),a(o,{to:"/commands/docs/decode.html"},{default:s(()=>[T]),_:1}),t(" command can be inserted into the pipeline after the external, or other raw stream-creating command, and will handle decoding the bytes based on the argument you give decode. For example, you could decode shift-jis text this way:")]),k])}const B=n(l,[["render",S],["__file","stdout_stderr_exit_codes.html.vue"]]);export{B as default};
