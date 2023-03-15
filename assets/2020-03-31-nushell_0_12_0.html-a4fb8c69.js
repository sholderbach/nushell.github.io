import{_ as r,M as s,p as i,q as d,Q as a,t as e,N as o,a1 as n}from"./framework-344bb0e4.js";const l="/assets/0_12_0_jupyter-53cad4ec.png",h={},c=a("h1",{id:"nushell-0-12-0",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#nushell-0-12-0","aria-hidden":"true"},"#"),e(" Nushell 0.12.0")],-1),u=a("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=a("p",null,"We're excited to release version 0.12.0 of Nu!",-1),m=a("h1",{id:"where-to-get-it",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),g={href:"https://github.com/nushell/nushell/releases/tag/0.12.0",target:"_blank",rel:"noopener noreferrer"},f={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},w=a("code",null,"cargo install nu",-1),b=n(`<p>If you want more goodies, you can install <code>cargo install nu --features=stable</code>.</p><p>As part of this release, we also publish a set of plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new" aria-hidden="true">#</a> What&#39;s new</h1><h2 id="automatic-cd-jonathandturner" tabindex="-1"><a class="header-anchor" href="#automatic-cd-jonathandturner" aria-hidden="true">#</a> Automatic <code>cd</code> (jonathandturner)</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>nushell on 📙 master is 📦 v0.12.0 via 🦀 v1.42.0
❯ docs
nushell/docs on 📙 master
❯ ..
nushell on 📙 master is 📦 v0.12.0 via 🦀 v1.42.0
</code></pre></div><p>Fish and Windows users rejoice, you can now <code>cd</code> to a directory or drive by typing its name in the shell. This also allows Windows users to change drives by giving just the drive name. Now, when you use the drive letter, we&#39;ll switch drives and return you to your previous working directory on that drive (eg <code>D:</code> will change to the D: drive and <code>cd</code> to the path you had been at previousy).</p><h2 id="type-inference-andrasio" tabindex="-1"><a class="header-anchor" href="#type-inference-andrasio" aria-hidden="true">#</a> Type inference (andrasio)</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ open tests/fixtures/formats//caco3_plastics.csv | get cif_per_net_weight
───┬─────────
 # │ &lt;value&gt;
───┼─────────
 0 │  0.2300
 1 │  0.3100
 2 │  0.1400
 3 │  0.2300
 4 │  0.2100
 5 │  0.2800
 6 │  0.3000
 7 │  0.2500
 8 │  0.2800
───┴─────────
nushell on 📙 master is 📦 v0.12.0 via 🦀 v1.42.0
❯ open tests/fixtures/formats//caco3_plastics.csv | get cif_per_net_weight | sum
2.23
</code></pre></div><p>We&#39;ve been hard at work at improving how we read in unstructured data. In this release, you&#39;ll see the beginning of type inference as data is read in. In the above example, you can see how we now autodetect decimal numbers and then can later sum them together.</p><h2 id="jupyter-notebook-support-jonathandturner" tabindex="-1"><a class="header-anchor" href="#jupyter-notebook-support-jonathandturner" aria-hidden="true">#</a> Jupyter notebook support (jonathandturner)</h2><p><img src="`+l+'" alt="image of Nu in Jupyter notebook"></p>',11),v={href:"https://github.com/nushell/nu_jupyter",target:"_blank",rel:"noopener noreferrer"},y=n(`<h2 id="ls-all-quebin31" tabindex="-1"><a class="header-anchor" href="#ls-all-quebin31" aria-hidden="true">#</a> <code>ls --all</code> (quebin31)</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ ls
────┬─────────────────────────────────────────────────────┬──────┬──────────┬──────────────
 #  │                        name                         │ type │   size   │   modified
────┼─────────────────────────────────────────────────────┼──────┼──────────┼──────────────
  0 │ CODE_OF_CONDUCT.md                                  │ File │   3.4 KB │ 5 months ago
  1 │ Cargo.lock                                          │ File │ 104.5 KB │ 23 mins ago
  2 │ Cargo.toml                                          │ File │   5.5 KB │ 23 mins ago
...

❯ ls --all
────┬─────────────────────────────────────────────────────┬──────┬──────────┬──────────────
 #  │                        name                         │ type │   size   │   modified
────┼─────────────────────────────────────────────────────┼──────┼──────────┼──────────────
  0 │ .azure                                              │ Dir  │          │ 2 weeks ago
  1 │ .cargo                                              │ Dir  │          │ 2 weeks ago
  2 │ .circleci                                           │ Dir  │          │ 2 weeks ago
...
</code></pre></div><p>With 0.12.0, you can now show hidden files when listing directory contents with <code>ls</code>.</p><h2 id="from-ics-and-from-vcf-pulpdrew" tabindex="-1"><a class="header-anchor" href="#from-ics-and-from-vcf-pulpdrew" aria-hidden="true">#</a> <code>from-ics</code> and <code>from-vcf</code> (pulpdrew)</h2><p>The file support continues to improve, as we add support for vCard and iCal file formats.</p><h2 id="to-md-and-to-html-jonathandturner" tabindex="-1"><a class="header-anchor" href="#to-md-and-to-html-jonathandturner" aria-hidden="true">#</a> <code>to-md</code> and <code>to-html</code> (jonathandturner)</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ ls | to-md
|name|type|size|modified|
|-|-|-|-|
|CODE_OF_CONDUCT.md|File|3.4 KB|5 months ago|
|Cargo.lock|File|104.5 KB|21 mins ago|
</code></pre></div><p>You can now output to markdown and html using the new converters.</p><h2 id="headers-samhedin" tabindex="-1"><a class="header-anchor" href="#headers-samhedin" aria-hidden="true">#</a> <code>headers</code> (samhedin)</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ open tests/fixtures/formats/sample_data.ods | get SalesOrders
────┬────────────┬─────────┬──────────┬─────────┬─────────┬───────────┬───────────
 #  │  Column0   │ Column1 │ Column2  │ Column3 │ Column4 │  Column5  │  Column6
────┼────────────┼─────────┼──────────┼─────────┼─────────┼───────────┼───────────
  0 │ OrderDate  │ Region  │ Rep      │ Item    │ Units   │ Unit Cost │ Total
  1 │ 2018-01-06 │ East    │ Jones    │ Pencil  │ 95.0000 │    1.9900 │  189.0500

❯ open tests/fixtures/formats/sample_data.ods | get SalesOrders | headers
────┬────────────┬─────────┬──────────┬─────────┬─────────┬───────────┬───────────
 #  │ OrderDate  │ Region  │   Rep    │  Item   │  Units  │ Unit Cost │   Total
────┼────────────┼─────────┼──────────┼─────────┼─────────┼───────────┼───────────
  0 │ 2018-01-06 │ East    │ Jones    │ Pencil  │ 95.0000 │    1.9900 │  189.0500
  1 │ 2018-01-23 │ Central │ Kivell   │ Binder  │ 50.0000 │   19.9900 │  999.4999
</code></pre></div><p>Sometimes when working with data, you&#39;ve managed to read in columns of data and notice that the first row is the headers you want. Previously, this required a lot of twiddling to lift the row into being the header. With 0.12.0, this has become much simpler with the <code>header</code> command.</p><h2 id="ps-full-mode-jonathandturner" tabindex="-1"><a class="header-anchor" href="#ps-full-mode-jonathandturner" aria-hidden="true">#</a> <code>ps --full</code> mode (jonathandturner)</h2><p>We&#39;re extending the information you can get back from <code>ps</code>. You are now able to get the original commandline and more for each process using the new <code>ps --full</code>.</p><h2 id="rm-can-now-take-multiple-arguments-to-remove-multiple-files-at-once-pulpdrew" tabindex="-1"><a class="header-anchor" href="#rm-can-now-take-multiple-arguments-to-remove-multiple-files-at-once-pulpdrew" aria-hidden="true">#</a> <code>rm</code> can now take multiple arguments to remove multiple files at once (pulpdrew)</h2><p>Sometimes we&#39;re missing a feature and you wonder how we made it that long 😄. In this release, you can now pass multiple files to <code>rm</code> for deletion.</p><h2 id="row-rotation-jonathandturner" tabindex="-1"><a class="header-anchor" href="#row-rotation-jonathandturner" aria-hidden="true">#</a> Row rotation (jonathandturner)</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>❯ sys
─────────┬─────────────────────────────────────────
 host    │ [row 7 columns]
 cpu     │ [row cores current ghz max ghz min ghz]
 disks   │ [table 9 rows]
 mem     │ [row free swap free swap total total]
 temp    │ [table 8 rows]
 net     │ [table 4 rows]
 battery │ [table 1 rows]
─────────┴─────────────────────────────────────────
</code></pre></div><p>When working with data with lots of columns, it can sometimes be a pain to watch it print to the screen only to see that the data is missing columns because they won&#39;t fit. In this version, we&#39;re experimenting with a way to help this by auto-rotating a row when it is printed by itself. This will allow more of the row to fit into the screen.</p><h2 id="configurable-table-headers-amanita-muscaria" tabindex="-1"><a class="header-anchor" href="#configurable-table-headers-amanita-muscaria" aria-hidden="true">#</a> Configurable table headers (Amanita-muscaria)</h2><p>You may have noticed that the headers in the above examples were centered. How&#39;s that for sneaking a feature in?</p><p>With 0.12.0, you can configure your table look a bit more by changing how the headers are displayed. Here are the new <code>config</code> settings:</p><ul><li>header_color: Available colors are from term::color module</li><li>header_align: Sets header alignment center/left/right</li><li>header_style: Sets style bold, underlined, italic. More than one can be used</li></ul><h2 id="lots-of-bugfixes-improvements-sosthene-guedon-quebin31-neuronull-andrasio-thegedge-vsoch-jonathandturner-jonstodle" tabindex="-1"><a class="header-anchor" href="#lots-of-bugfixes-improvements-sosthene-guedon-quebin31-neuronull-andrasio-thegedge-vsoch-jonathandturner-jonstodle" aria-hidden="true">#</a> Lots of bugfixes/improvements (Sosthene-Guedon, quebin31, neuronull, andrasio, thegedge, vsoch, jonathandturner, jonstodle)</h2><p>Open no longer fails silently, improved CSV opening, improve canonicalize of filenames, <code>sys</code> now properly says user sessions, moved <code>shuffle</code> to being an internal command, relaxed file modes, cleaned up <code>which</code> implementation, fix Docker build matrix, streams can now be interrupted, improvements to <code>du</code>, <code>get</code> now will remove blank values for easier processing, respect CARGO_TARGET_DIR when set, allow <code>..</code> and <code>/</code> to be mv targets,</p><h2 id="documentation-improvements-pulpdrew-nickgerace-waldyrious-kloun" tabindex="-1"><a class="header-anchor" href="#documentation-improvements-pulpdrew-nickgerace-waldyrious-kloun" aria-hidden="true">#</a> Documentation improvements (pulpdrew, nickgerace, waldyrious, kloun)</h2><p>Docs for <code>from-ics</code> and <code>from-vcf</code>, quickstart section for Docker users, docs for <code>skip</code> and <code>skip-while</code>, typos and whitespace fixes, typo in <code>calc</code> docs</p><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>&quot;Just keep going!&quot; as Yehuda Katz would say, and we intend to. Lots of internal improvements are coming, and of course aliases which has become a daily request.</p>`,28),_={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"};function k(j,C){const t=s("ExternalLinkIcon");return i(),d("div",null,[c,u,p,m,a("p",null,[e("Nu 0.12.0 is available as "),a("a",g,[e("pre-built binaries"),o(t)]),e(" or from "),a("a",f,[e("crates.io"),o(t)]),e(". If you have Rust installed you can install it using "),w,e(".")]),b,a("p",null,[e("Nu's core design goal is that it should be easier to work with your system and your data. In this release, we take a step beyond being just a shell with "),a("a",v,[e("Jupyter notebook support"),o(t)]),e(".")]),y,a("p",null,[e("We'd also like to hear from you. Let us know what would make Nu work better for your workflows, drop us a line in "),a("a",_,[e("discord"),o(t)]),e(" or "),a("a",x,[e("github"),o(t)]),e(". We'd love to hear from you!")])])}const D=r(h,[["render",k],["__file","2020-03-31-nushell_0_12_0.html.vue"]]);export{D as default};
