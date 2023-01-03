import{_ as d,z as r,A as c,X as e,C as t,T as a,$ as n,a6 as s,Q as l}from"./framework.3d018c9f.js";const u={},h=e("h1",{id:"loading-data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loading-data","aria-hidden":"true"},"#"),t(" Loading data")],-1),m=e("code",null,"ls",-1),p=e("code",null,"ps",-1),g=e("code",null,"date",-1),f=e("code",null,"sys",-1),_=e("h2",{id:"opening-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opening-files","aria-hidden":"true"},"#"),t(" Opening files")],-1),x=e("code",null,"open",-1),b=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open editors/vscode/package.json
──────────────────┬───────────────────────────────────────────────────────────────────────────────
 name             │ lark
 description      │ Lark support for VS Code
 author           │ Lark developers
 license          │ MIT
 version          │ 1.0.0
 repository       │ [row type url]
 publisher        │ vscode
 categories       │ [table 0 rows]
 keywords         │ [table 1 rows]
 engines          │ [row vscode]
 activationEvents │ [table 1 rows]
 main             │ ./out/extension
 contributes      │ [row configuration grammars languages]
 scripts          │ [row compile postinstall test vscode:prepublish watch]
 devDependencies  │ [row @types/mocha @types/node tslint typescript vscode vscode-languageclient]
──────────────────┴───────────────────────────────────────────────────────────────────────────────
`)])],-1),w=e("code",null,"ls",-1),v=e("code",null,"get",-1),k=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu currently supports the following formats for loading data directly into tables:</p><ul><li>csv</li><li>eml</li><li>ics</li><li>ini</li><li>json</li><li><a href="#nuon">nuon</a></li><li>ods</li><li><a href="#sqlite">SQLite databases</a></li><li>ssv</li><li>toml</li><li>tsv</li><li>url</li><li>vcf</li><li>xlsx / xls</li><li>xml</li><li>yaml / yml</li></ul><p>But what happens if you load a text file that isn&#39;t one of these? Let&#39;s try it:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open README.md
</code></pre></div><p>We&#39;re shown the contents of the file.</p><p>Below the surface, what Nu sees in these text files is one large string. Next, we&#39;ll talk about how to work with these strings to get the data we need out of them.</p><h2 id="nuon" tabindex="-1"><a class="header-anchor" href="#nuon" aria-hidden="true">#</a> NUON</h2>`,8),y={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},N=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`{
  menus: [
    # Configuration for default nushell menus
    # Note the lack of souce parameter
    {
      name: completion_menu
      only_buffer_difference: false
      marker: "| "
      type: {
          layout: columnar
          columns: 4
          col_width: 20   # Optional value. If missing all the screen width is used to calculate column width
          col_padding: 2
      }
      style: {
          text: green
          selected_text: green_reverse
          description_text: yellow
      }
    }
  ]
}
`)])],-1),O=e("p",null,[t("You might notice it is quite similar to JSON, and you're right. "),e("strong",null,"NUON is a superset of JSON!"),t(' That is, any JSON code is a valid NUON code, therefore a valid Nushell code. Compared to JSON, NUON is more "human-friendly". For example, comments are allowed and commas are not required.')],-1),q=s(`<h2 id="handling-strings" tabindex="-1"><a class="header-anchor" href="#handling-strings" aria-hidden="true">#</a> Handling Strings</h2><p>An important part of working with data coming from outside Nu is that it&#39;s not always in a format that Nu understands. Often this data is given to us as a string.</p><p>Let&#39;s imagine that we&#39;re given this data file:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>Each bit of data we want is separated by the pipe (&#39;|&#39;) symbol, and each person is on a separate line. Nu doesn&#39;t have a pipe-delimited file format by default, so we&#39;ll have to parse this ourselves.</p><p>The first thing we want to do when bringing in the file is to work with it a line at a time:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines
───┬──────────────────────────────
 0 │ Octavia | Butler | Writer
 1 │ Bob | Ross | Painter
 2 │ Antonio | Vivaldi | Composer
───┴──────────────────────────────
</code></pre></div>`,7),T=e("code",null,"split",-1),B=e("code",null,"split",-1),C=e("code",null,"split",-1),L=e("code",null,"column",-1),S=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|"
───┬──────────┬───────────┬───────────
 # │ column1  │ column2   │ column3
───┼──────────┼───────────┼───────────
 0 │ Octavia  │  Butler   │  Writer
 1 │ Bob      │  Ross     │  Painter
 2 │ Antonio  │  Vivaldi  │  Composer
───┴──────────┴───────────┴───────────
`)])],-1),j=e("em",null,"almost",-1),R=e("code",null,"trim",-1),I=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|" | str trim
───┬─────────┬─────────┬──────────
 # │ column1 │ column2 │ column3
───┼─────────┼─────────┼──────────
 0 │ Octavia │ Butler  │ Writer
 1 │ Bob     │ Ross    │ Painter
 2 │ Antonio │ Vivaldi │ Composer
───┴─────────┴─────────┴──────────
`)])],-1),U=e("code",null,"split",-1),W=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get column1
───┬─────────
 0 │ Octavia
 1 │ Bob
 2 │ Antonio
───┴─────────
</code></pre></div><p>We can also name our columns instead of using the default names:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Octavia    │ Butler    │ Writer
 1 │ Bob        │ Ross      │ Painter
 2 │ Antonio    │ Vivaldi   │ Composer
───┴────────────┴───────────┴──────────
</code></pre></div><p>Now that our data is in a table, we can use all the commands we&#39;ve used on tables before:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim | sort-by first_name
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Antonio    │ Vivaldi   │ Composer
 1 │ Bob        │ Ross      │ Painter
 2 │ Octavia    │ Butler    │ Writer
───┴────────────┴───────────┴──────────
</code></pre></div><p>There are other commands you can use to work with strings:</p>`,6),A=e("li",null,[e("code",null,"str")],-1),V=e("code",null,"lines",-1),J=e("code",null,"size",-1),E=s(`<p>There is also a set of helper commands we can call if we know the data has a structure that Nu should be able to understand. For example, let&#39;s open a Rust lock file:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.lock
# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
[[package]]
name = &quot;adhoc_derive&quot;
version = &quot;0.1.2&quot;
</code></pre></div><p>The &quot;Cargo.lock&quot; file is actually a .toml file, but the file extension isn&#39;t .toml. That&#39;s okay, we can use the <code>from</code> command using the <code>toml</code> subcommand:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.lock | from toml
──────────┬───────────────────
 metadata │ [row 107 columns]
 package  │ [table 130 rows]
──────────┴───────────────────
</code></pre></div><p>The <code>from</code> command can be used for each of the structured data text formats that Nu can open and understand by passing it the supported format as a subcommand.</p><h2 id="opening-in-raw-mode" tabindex="-1"><a class="header-anchor" href="#opening-in-raw-mode" aria-hidden="true">#</a> Opening in raw mode</h2>`,6),z=e("code",null,"open",-1),P=e("code",null,"--raw",-1),F=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml --raw
[package]                                                                                        name = "nu"
version = "0.1.3"
authors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]
description = "A shell for the GitHub era"
license = "MIT"
`)])],-1),Q=e("h2",{id:"sqlite",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sqlite","aria-hidden":"true"},"#"),t(" SQLite")],-1),M=e("code",null,"open",-1),H=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open foo.db
`)])],-1),Y=e("code",null,"get",-1),D=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open foo.db | get some_table
</code></pre></div><p>Or run any SQL query you like:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open foo.db | query db &quot;select * from some_table&quot;
</code></pre></div><p>(Note: some older versions of Nu use <code>into db | query</code> instead of <code>query db</code> )</p><h2 id="fetching-urls" tabindex="-1"><a class="header-anchor" href="#fetching-urls" aria-hidden="true">#</a> Fetching URLs</h2>`,5),G=e("code",null,"fetch",-1),K=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> fetch https://blog.rust-lang.org/feed.xml
──────┬───────────────────
 feed │ {record 2 fields}
──────┴───────────────────
`)])],-1);function X($,Z){const o=l("RouterLink"),i=l("ExternalLinkIcon");return r(),c("div",null,[h,e("p",null,[t("Earlier, we saw how you can use commands like "),a(o,{to:"/book/commands/ls.html"},{default:n(()=>[m]),_:1}),t(", "),a(o,{to:"/book/commands/ps.html"},{default:n(()=>[p]),_:1}),t(", "),a(o,{to:"/book/commands/date.html"},{default:n(()=>[g]),_:1}),t(", and "),a(o,{to:"/book/commands/sys.html"},{default:n(()=>[f]),_:1}),t(" to load information about your files, processes, time of date, and the system itself. Each command gives us a table of information that we can explore. There are other ways we can load in a table of data to work with.")]),_,e("p",null,[t("One of Nu's most powerful assets in working with data is the "),a(o,{to:"/book/commands/open.html"},{default:n(()=>[x]),_:1}),t(" command. It is a multi-tool that can work with a number of different data formats. To see what this means, let's try opening a json file:")]),b,e("p",null,[t("In a similar way to "),a(o,{to:"/book/commands/ls.html"},{default:n(()=>[w]),_:1}),t(', opening a file type that Nu understands will give us back something that is more than just text (or a stream of bytes). Here we open a "package.json" file from a JavaScript project. Nu can recognize the JSON text and parse it to a table of data.')]),e("p",null,[t("If we wanted to check the version of the project we were looking at, we can use the "),a(o,{to:"/book/commands/get.html"},{default:n(()=>[v]),_:1}),t(" command.")]),k,e("p",null,[t("Nushell Object Notation (NUON) aims to be for Nushell what JavaScript Object Notation (JSON) is for JavaScript. That is, NUON code is a valid Nushell code that describes some data structure. For example, this is a valid NUON (example from the "),e("a",y,[t("default configuration file"),a(i)]),t("):")]),N,O,e("p",null,[t("One limitation of NUON currently is that it cannot represent all of the Nushell "),a(o,{to:"/book/types_of_data.html"},{default:n(()=>[t("data types")]),_:1}),t(". Most notably, NUON does not allow to serialize blocks.")]),q,e("p",null,[t("We can see that we're working with the lines because we're back into a table. Our next step is to see if we can split up the rows into something a little more useful. For that, we'll use the "),a(o,{to:"/book/commands/split.html"},{default:n(()=>[T]),_:1}),t(" command. "),a(o,{to:"/book/commands/split.html"},{default:n(()=>[B]),_:1}),t(", as the name implies, gives us a way to split a delimited string. We will use "),a(o,{to:"/book/commands/split.html"},{default:n(()=>[C]),_:1}),t("'s "),L,t(" subcommand to split the contents across multiple columns. We tell it what the delimiter is, and it does the rest:")]),S,e("p",null,[t("That "),j,t(" looks correct. It looks like there's an extra space there. Let's "),a(o,{to:"/book/commands/str_trim.html"},{default:n(()=>[R]),_:1}),t(" that extra space:")]),I,e("p",null,[t("Not bad. The "),a(o,{to:"/book/commands/split.html"},{default:n(()=>[U]),_:1}),t(" command gives us data we can use. It also goes ahead and gives us default column names:")]),W,e("ul",null,[A,e("li",null,[a(o,{to:"/book/commands/lines.html"},{default:n(()=>[V]),_:1})]),e("li",null,[a(o,{to:"/book/commands/size.html"},{default:n(()=>[J]),_:1})])]),E,e("p",null,[t("While it's helpful to be able to open a file and immediately work with a table of its data, this is not always what you want to do. To get to the underlying text, the "),a(o,{to:"/book/commands/open.html"},{default:n(()=>[z]),_:1}),t(" command can take an optional "),P,t(" flag:")]),F,Q,e("p",null,[t("SQLite databases are automatically detected by "),a(o,{to:"/book/commands/open.html"},{default:n(()=>[M]),_:1}),t(", no matter what their file extension is. You can open a whole database:")]),H,e("p",null,[t("Or "),a(o,{to:"/book/commands/get.html"},{default:n(()=>[Y]),_:1}),t(" a specific table:")]),D,e("p",null,[t("In addition to loading files from your filesystem, you can also load URLs by using the "),a(o,{to:"/book/commands/fetch.html"},{default:n(()=>[G]),_:1}),t(" command. This will fetch the contents of the URL from the internet and return it:")]),K])}const te=d(u,[["render",X],["__file","loading_data.html.vue"]]);export{te as default};
