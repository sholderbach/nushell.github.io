import{_ as n,z as r,A as s,X as e,C as a,T as t,a6 as i,Q as d}from"./framework.3d018c9f.js";const l="/assets/0_9_0_error_highlight.a90c08b9.png",h={},c=e("h1",{id:"nushell-0-9-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-9-0","aria-hidden":"true"},"#"),a(" Nushell 0.9.0")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),m=e("p",null,"We're happy to announce the 0.9.0 release of Nu. This release offers better help and error feedback, better support for the native shell, new commands, lots of command improvements, and bugfixes.",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),w={href:"https://github.com/nushell/nushell/releases/tag/0.9.0",target:"_blank",rel:"noopener noreferrer"},f={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"cargo install nu",-1),g=i('<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s new</h1><h2 id="help-available-on-all-commands-amanita-muscaria" tabindex="-1"><a class="header-anchor" href="#help-available-on-all-commands-amanita-muscaria" aria-hidden="true">#</a> <code>--help</code> available on all commands (Amanita-muscaria)</h2><p>One of the first things a user might do in a new shell is to type a familiar command and pass it <code>--help</code>. A perfectly reasonable thing to do, and with 0.9.0 it does exactly you&#39;d expect. It will now print out the help information for the given command for all internal commands (much in the same way as using <code>help &lt;command name&gt;</code>)</p><h2 id="better-error-feedback-wycats-andrasio" tabindex="-1"><a class="header-anchor" href="#better-error-feedback-wycats-andrasio" aria-hidden="true">#</a> Better error feedback (wycats, andrasio)</h2><p><img src="'+l+`" alt="Better inline errors!"></p><p>Our improvements to the parser as part of 0.9.0 also come with some fun perks. One of these is that unknown flags, and similar errors, will now get highlighted red to let you know that this isn&#39;t a valid input to the command.</p><h2 id="shelling-out-jonathandturner" tabindex="-1"><a class="header-anchor" href="#shelling-out-jonathandturner" aria-hidden="true">#</a> Shelling out (jonathandturner)</h2><p>An early feature of Nu that people that has been a popular request to bring back is &quot;shelling out&quot;. When Nu doesn&#39;t recognize a command, it will try to find it as an external command. In the last few versions, this was limited as Nu was not able to execute shell scripts, .cmd scripts... basically anything that wasn&#39;t an executable. The problem is that lots of apps use scripts as a way to configure what to execute (commands like <code>code</code>, <code>npm</code>, and others are common scripts behind the scenes).</p><p>With 0.9.0, we&#39;re returning to our earlier behavior and executing both binaries and shell scripts by calling to the platform-native shell when we call an external command. While this should largely be invisible as a user, more things should &quot;just work&quot; how they would in bash or Windows Terminal.</p><h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2><h3 id="du-amanita-muscaria" tabindex="-1"><a class="header-anchor" href="#du-amanita-muscaria" aria-hidden="true">#</a> du (Amanita-muscaria)</h3><p>Nu now has its own <code>du</code> command to show the disk usage of a part of the file system. This is a handy way of quickly looking for where all your free space went.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ du
───┬───────────────┬─────────┬────────────────
 # │ name          │ size    │ contents
───┼───────────────┼─────────┼────────────────
 0 │ .git          │  4.7 MB │ [table 6 rows]
 1 │ .jekyll-cache │ 49.0 KB │ [table 1 rows]
 2 │ _includes     │   881 B │
 3 │ _layouts      │  4.3 KB │
 4 │ _posts        │ 82.4 KB │
 5 │ _sass         │ 21.5 KB │
 6 │ _site         │  5.3 MB │ [table 4 rows]
 7 │ assets        │  2.4 MB │ [table 1 rows]
 8 │ images        │  2.4 MB │
───┴───────────────┴─────────┴────────────────
</code></pre></div><h3 id="clear-jesterornot" tabindex="-1"><a class="header-anchor" href="#clear-jesterornot" aria-hidden="true">#</a> clear (JesterOrNot)</h3><p>Short, sweet, and to the point, you can now <code>clear</code> your screen with the new <code>clear</code> command. Like our other commands, this works across all the platforms Nu runs on.</p><h2 id="new-welcome-message-jonathandturner" tabindex="-1"><a class="header-anchor" href="#new-welcome-message-jonathandturner" aria-hidden="true">#</a> New welcome message (jonathandturner)</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>Welcome to Nushell 0.9.0 (type &#39;help&#39; for more info)
nushell on 📙 bump_to_0_9_0 is 📦 v0.9.0 via 🦀 v1.40.0
❯
</code></pre></div><p>The first time you open Nu now you&#39;ll be greeted by a brief message to tell you the version of Nu and a reminder to use the <code>help</code> command to learn more about Nu and how it works.</p><h2 id="improved-table-streaming-jonathandturner" tabindex="-1"><a class="header-anchor" href="#improved-table-streaming-jonathandturner" aria-hidden="true">#</a> Improved table streaming (jonathandturner)</h2><p>If you&#39;ve used earlier versions of Nu, you may have wondered why every 50 rows we start a new table. This is where the implementation showed through a bit more than it should. As tables are printed, they are created and then displayed as enough rows are available. This means that output will spool to the screen and not wait for the table to finish processing before you see something. In general, it&#39;s good to see the tables earlier, but seeing a different shape of table every 50 rows can be annoying.</p><p>We&#39;ve updated table output to be a lot cleaner, using this logic:</p><ul><li>If rows are being output quickly, build a larger table before outputting it</li><li>If rows are being output slowly, buffer a smaller number of rows and display them (just as before)</li><li>If rows change shape, switch to showing a different table. This helps you visually see when your data source is giving you a new kind of data</li></ul><h2 id="command-improvements" tabindex="-1"><a class="header-anchor" href="#command-improvements" aria-hidden="true">#</a> Command improvements</h2><h3 id="ls-and-rm-now-error-when-a-path-isn-t-found-amanita-muscaria" tabindex="-1"><a class="header-anchor" href="#ls-and-rm-now-error-when-a-path-isn-t-found-amanita-muscaria" aria-hidden="true">#</a> <code>ls</code> and <code>rm</code> now error when a path isn&#39;t found (Amanita-muscaria)</h3><p>Adding a bit of polish this release, <code>ls</code> and <code>rm</code> will now error if you pass them a path they can&#39;t find.</p><h3 id="ls-can-optionally-show-just-the-filename-coolshaurya" tabindex="-1"><a class="header-anchor" href="#ls-can-optionally-show-just-the-filename-coolshaurya" aria-hidden="true">#</a> <code>ls</code> can optionally show just the filename (coolshaurya)</h3><p>If you&#39;ve used <code>ls</code> on your subdirectories, you might have noticed that the subdirectory becomes part of the filename. This can be great for building up a pipeline (and a script in the future), but sometimes all you care about is the filename. You can now pass <code>ls</code> the <code>--short-names</code> command flag to get just the filename.</p><h3 id="ls-can-also-optionally-show-symlink-targets-josephtlyons" tabindex="-1"><a class="header-anchor" href="#ls-can-also-optionally-show-symlink-targets-josephtlyons" aria-hidden="true">#</a> <code>ls</code> can also optionally show symlink targets (JosephTLyons)</h3><p>Further improving <code>ls</code>, you can now see the symlink targets with the <code>--full</code> flag.</p><h3 id="ls-smaller-by-default-now-with-more-info-with-full-jonathandturner" tabindex="-1"><a class="header-anchor" href="#ls-smaller-by-default-now-with-more-info-with-full-jonathandturner" aria-hidden="true">#</a> <code>ls</code> smaller by default, now with more info with <code>--full</code> (jonathandturner)</h3><p>To make Nu easier to use on smaller terminals, the <code>ls</code> command will now try to take up less space by default. The columns from earlier version of Nu (and a few more!) are still available, now behind the <code>--full</code> flag.</p><h3 id="from-xml-now-includes-attributes-borimino" tabindex="-1"><a class="header-anchor" href="#from-xml-now-includes-attributes-borimino" aria-hidden="true">#</a> <code>from-xml</code> now includes attributes (Borimino)</h3><p>One of the first commands we built to import file data into Nu was <code>from-xml</code>. It was good enough to get started, and with 0.9.0 it improves to being a more precise representation of what&#39;s in the XML file. The command will now include attribute values as part of the table.</p><h3 id="sort-by-works-with-more-value-types-koenaad" tabindex="-1"><a class="header-anchor" href="#sort-by-works-with-more-value-types-koenaad" aria-hidden="true">#</a> <code>sort-by</code> works with more value types (koenaad)</h3><p>Our sorting command <code>sort-by</code> can now work over more value types, which simplifies some common sorting tasks.</p><h3 id="debug-now-pretty-prints-its-output-sandorex" tabindex="-1"><a class="header-anchor" href="#debug-now-pretty-prints-its-output-sandorex" aria-hidden="true">#</a> <code>debug</code> now pretty-prints its output (sandorex)</h3><p>When working on Nu itself, there&#39;s a handy <code>debug</code> command which gives you all the information about the value coming through the pipeline. This is now prett-printed by default to make it easier to read.</p><h3 id="autocompletion-can-now-be-configured-jacobious52" tabindex="-1"><a class="header-anchor" href="#autocompletion-can-now-be-configured-jacobious52" aria-hidden="true">#</a> autocompletion can now be configured (Jacobious52)</h3><p>Autocompletion at the Nu prompt can now be changed between circular (the default) and list.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; config --set [completion_mode list]
</code></pre></div><h3 id="more-improvements-to-which-avandesa" tabindex="-1"><a class="header-anchor" href="#more-improvements-to-which-avandesa" aria-hidden="true">#</a> More improvements to <code>which</code> (avandesa)</h3><p>The structured <code>which</code> continues to improve 0.9.0 and will now give an error in cases that it could not be performed correctly.</p><h3 id="improvements-to-calling-external-commands-thegedge-andrasio-koenaad" tabindex="-1"><a class="header-anchor" href="#improvements-to-calling-external-commands-thegedge-andrasio-koenaad" aria-hidden="true">#</a> Improvements to calling external commands (thegedge, andrasio, koenaad)</h3><p>A batch of improvements should allow external commands to feel a bit faster and work more consistently with the pipeline.</p><h2 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h2><h3 id="more-command-docs-coolshaurya" tabindex="-1"><a class="header-anchor" href="#more-command-docs-coolshaurya" aria-hidden="true">#</a> More command docs (coolshaurya)</h3><p>We&#39;re continuing to document the commands that are available and continue filling out command documentation where it&#39;s missing.</p><h3 id="more-readmes-and-code-documentation-notryanb-jonathandturner" tabindex="-1"><a class="header-anchor" href="#more-readmes-and-code-documentation-notryanb-jonathandturner" aria-hidden="true">#</a> More READMEs and code documentation (notryanb, jonathandturner)</h3><p>Contributors to Nu will also appreciate that we&#39;re working our way through the code and source repositories and documenting how each part works. This should help developers get used to Nu from the inside and find a much easier path to jump in.</p><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>With 0.9.0, we&#39;ve added a lot of &quot;quality of life&quot; improvements that we hope you enjoy. We&#39;d love to hear from you how 0.9.0 works for you.</p><p>Next release will be 0.10.0, as we continue to improve Nu. We&#39;re excited about what&#39;s coming, and can&#39;t wait to play with it ourselves!</p>`,54);function y(v,x){const o=d("ExternalLinkIcon");return r(),s("div",null,[c,u,m,p,e("p",null,[a("Nu 0.9.0 is available as "),e("a",w,[a("pre-built binaries"),t(o)]),a(" or from "),e("a",f,[a("crates.io"),t(o)]),a(". If you have Rust installed you can install it using "),b,a(".")]),g])}const k=n(h,[["render",y],["__file","2020-01-28-nushell-0_9_0.html.vue"]]);export{k as default};
