import{_ as o,M as s,p as r,q as i,Q as e,t as a,N as t,a1 as l}from"./framework-344bb0e4.js";const h={},d=e("h1",{id:"nushell-0-8-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nushell-0-8-0","aria-hidden":"true"},"#"),a(" Nushell 0.8.0")],-1),u=e("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),c=e("p",null,"We're happy to announce the 0.8.0 release of Nu. This continues a series of internal improvements, with better stability and correctness, and, of course, new features.",-1),p=e("h1",{id:"where-to-get-it",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),a(" Where to get it")],-1),m={href:"https://github.com/nushell/nushell/releases/tag/0.8.0",target:"_blank",rel:"noopener noreferrer"},g={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"cargo install nu",-1),b=l(`<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ ls nu_plugin_* | sort-by name | get name
────┬──────────────────────
 #  │ &lt;value&gt;
────┼──────────────────────
  0 │ nu_plugin_average
  1 │ nu_plugin_binaryview
  2 │ nu_plugin_fetch
  3 │ nu_plugin_inc
  4 │ nu_plugin_match
  5 │ nu_plugin_post
  6 │ nu_plugin_ps
  7 │ nu_plugin_str
  8 │ nu_plugin_sum
  9 │ nu_plugin_sys
 10 │ nu_plugin_textview
 11 │ nu_plugin_tree
────┴──────────────────────
</code></pre></div><h1 id="unwrapping-your-presents-jonathandturner-andrasio-with-help-from-ubsan" tabindex="-1"><a class="header-anchor" href="#unwrapping-your-presents-jonathandturner-andrasio-with-help-from-ubsan" aria-hidden="true">#</a> Unwrapping your presents (jonathandturner, andrasio, with help from ubsan)</h1><p>A classic trick when writing Rust is to use the <code>.unwrap()</code> method. This method gives you a quick way to say &quot;panic if you see this happen&quot;. When prototyping, it&#39;s easy to use this as a way to develop code more quickly, but as a codebase matures you move away from it.</p><p>It was time for Nu to move away from using this shortcut. Fixing the unwraps is a lot of work, but the end result is a codebase that reports errors more reliably and doesn&#39;t panic as often if something unexpected happens -- which just is what you want when you&#39;re making a shell!</p><p>We&#39;re happy to say there are now no more unwraps in the Nu codebase. We have more improvements in mind, but this already is a big upgrade from where we were a few weeks ago.</p><h1 id="clippy-cleanliness-thibran-vorot93-jonathandturner" tabindex="-1"><a class="header-anchor" href="#clippy-cleanliness-thibran-vorot93-jonathandturner" aria-hidden="true">#</a> Clippy cleanliness (thibran, vorot93, jonathandturner)</h1><p>Along the same theme of making code as clean as we can, we recently adopted using the <code>clippy</code> tool. Clippy is a tool to help point out common mistakes or inefficiencies in your Rust code. The end result of working through its warnings is often a cleaner looking codebase that&#39;s also a bit more efficient as a result.</p><p>The Nu codebase is now clippy-clean, and we&#39;re enforcing this on every new checkin to the codebase.</p><h1 id="improved" tabindex="-1"><a class="header-anchor" href="#improved" aria-hidden="true">#</a> Improved</h1><h2 id="which-gets-better-avandesa" tabindex="-1"><a class="header-anchor" href="#which-gets-better-avandesa" aria-hidden="true">#</a> <code>which</code> gets better (avandesa)</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">which</span> <span class="token function">which</span>
───────┬──────────────────────────┬─────────
 arg   │ path                     │ <span class="token builtin class-name">builtin</span>
───────┼──────────────────────────┼─────────
 <span class="token function">which</span> │ nushell built-in <span class="token builtin class-name">command</span> │ Yes
───────┴──────────────────────────┴─────────
</code></pre></div><p>We&#39;re in the process of improving some of our existing built-in commands to make them more Nu-like. In this release, the <code>which</code> command has a bit more of a Nu-feel. It will tell you the path and if the command is an internal builtin command or an external command.</p><h2 id="ps-gets-better-jonathandturner" tabindex="-1"><a class="header-anchor" href="#ps-gets-better-jonathandturner" aria-hidden="true">#</a> <code>ps</code> gets better (jonathandturner)</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>─────┬───────┬──────────────────────────────────────┬──────────┬─────────┬──────────┬──────────
 #   │ pid   │ name                                 │ status   │ cpu     │ mem      │ virtual
─────┼───────┼──────────────────────────────────────┼──────────┼─────────┼──────────┼──────────
 250 │  4729 │ ibus-engine-simple                   │ Sleeping │  0.0000 │   3.3 MB │ 176.7 MB
 251 │  5964 │ gedit                                │ Sleeping │  0.0000 │  29.2 MB │ 496.5 MB
 252 │  5860 │ seahorse                             │ Sleeping │  0.0000 │  24.0 MB │ 488.7 MB
 253 │  6594 │ gnome-terminal-server                │ Sleeping │  0.0000 │  47.8 MB │ 675.0 MB
</code></pre></div><p>The <code>ps</code> command has gained a few new columns: &quot;mem&quot; and &quot;virtual&quot; for helping you track memory usage.</p><h2 id="openoffice-ods-support-coolshaurya" tabindex="-1"><a class="header-anchor" href="#openoffice-ods-support-coolshaurya" aria-hidden="true">#</a> OpenOffice .ods support (coolshaurya)</h2><p>Fresh off the presses is initial support for opening .ods files. Similarly to our xlsx support, this will allow you to open .ods files and read in their data, separated by the sheets.</p><h2 id="improved-keyboard-navigation-aloso" tabindex="-1"><a class="header-anchor" href="#improved-keyboard-navigation-aloso" aria-hidden="true">#</a> Improved keyboard navigation (Aloso)</h2><p>We now support moving left by-word using the ctrl+left and ctrl+right keyboard shortcuts.</p><h1 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h1><h2 id="uniq-notryanb" tabindex="-1"><a class="header-anchor" href="#uniq-notryanb" aria-hidden="true">#</a> uniq (notryanb)</h2><p>With 0.8.0, you&#39;ll also be able to remove duplicate rows from your tables with the <code>uniq</code> command:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open test.csv
───┬────────────┬───────────┬────────────┬──────
 # │ first_name │ last_name │ rusty_at   │ type
───┼────────────┼───────────┼────────────┼──────
 0 │ Andrés     │ Robalino  │ 10/11/2013 │ A
 1 │ Andrés     │ Robalino  │ 10/11/2013 │ A
 2 │ Jonathan   │ Turner    │ 10/12/2013 │ B
 3 │ Yehuda     │ Katz      │ 10/11/2013 │ A
───┴────────────┴───────────┴────────────┴──────
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open test.csv | uniq
───┬────────────┬───────────┬────────────┬──────
 # │ first_name │ last_name │ rusty_at   │ type
───┼────────────┼───────────┼────────────┼──────
 0 │ Andrés     │ Robalino  │ 10/11/2013 │ A
 1 │ Jonathan   │ Turner    │ 10/12/2013 │ B
 2 │ Yehuda     │ Katz      │ 10/11/2013 │ A
───┴────────────┴───────────┴────────────┴──────
</code></pre></div><h1 id="new-built-in-variable-jonathandturner" tabindex="-1"><a class="header-anchor" href="#new-built-in-variable-jonathandturner" aria-hidden="true">#</a> New built-in variable (jonathandturner)</h1><p>With 0.8.0, we&#39;ve moved away from the <code>$nu:path</code> built-ins. Now, there&#39;s just one built-in for internal values: <code>$nu</code>. Using <code>echo $nu</code> will show you the table of current values.</p><h1 id="fixing-bugs-jonathandturner-sandorex-miller-time-quebin31-thegedge" tabindex="-1"><a class="header-anchor" href="#fixing-bugs-jonathandturner-sandorex-miller-time-quebin31-thegedge" aria-hidden="true">#</a> Fixing bugs (jonathandturner, sandorex, miller-time, quebin31, thegedge)</h1><p>As always, we also fixed bugs. In 0.8.0, you&#39;ll see improvements with UTF-8, the <code>pick</code> command, correctly handling required positional arguments, CTRL+L clear screen, and faster response times for external commands.</p><h1 id="what-s-coming" tabindex="-1"><a class="header-anchor" href="#what-s-coming" aria-hidden="true">#</a> What&#39;s coming</h1><p>We&#39;re well on our way to 0.10.0. That&#39;s right, we&#39;re not close to our 1.0 release just yet. After 0.9, we&#39;ll continue with a release every three weeks. Expect to see Nu continue to mature and stabilize.</p>`,32);function w(y,_){const n=s("ExternalLinkIcon");return r(),i("div",null,[d,u,c,p,e("p",null,[a("Nu 0.8.0 is available as "),e("a",m,[a("pre-built binaries"),t(n)]),a(" or from "),e("a",g,[a("crates.io"),t(n)]),a(". If you have Rust installed you can install it using "),f,a(".")]),b])}const x=o(h,[["render",w],["__file","2020-01-07-nushell-0_8_0.html.vue"]]);export{x as default};
