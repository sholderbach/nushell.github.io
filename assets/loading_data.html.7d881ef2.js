import{_ as d,r as l,o as c,c as r,a as e,b as o,w as a,d as t,e as s}from"./app.8034769a.js";const u={},h=e("h1",{id:"loading-data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#loading-data","aria-hidden":"true"},"#"),t(" Loading data")],-1),m=t("Earlier, we saw how you can use commands like "),p=e("code",null,"ls",-1),_=t(", "),g=e("code",null,"ps",-1),f=t(", "),x=e("code",null,"date",-1),b=t(", and "),w=e("code",null,"sys",-1),v=t(" to load information about your files, processes, time of date, and the system itself. Each command gives us a table of information that we can explore. There are other ways we can load in a table of data to work with."),k=e("h2",{id:"opening-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#opening-files","aria-hidden":"true"},"#"),t(" Opening files")],-1),y=t("One of Nu's most powerful assets in working with data is the "),N=e("code",null,"open",-1),O=t(" command. It is a multi-tool that can work with a number of different data formats. To see what this means, let's try opening a json file:"),q=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open editors/vscode/package.json
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name             \u2502 lark
 description      \u2502 Lark support for VS Code
 author           \u2502 Lark developers
 license          \u2502 MIT
 version          \u2502 1.0.0
 repository       \u2502 [row type url]
 publisher        \u2502 vscode
 categories       \u2502 [table 0 rows]
 keywords         \u2502 [table 1 rows]
 engines          \u2502 [row vscode]
 activationEvents \u2502 [table 1 rows]
 main             \u2502 ./out/extension
 contributes      \u2502 [row configuration grammars languages]
 scripts          \u2502 [row compile postinstall test vscode:prepublish watch]
 devDependencies  \u2502 [row @types/mocha @types/node tslint typescript vscode vscode-languageclient]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),T=t("In a similar way to "),B=e("code",null,"ls",-1),L=t(', opening a file type that Nu understands will give us back something that is more than just text (or a stream of bytes). Here we open a "package.json" file from a JavaScript project. Nu can recognize the JSON text and parse it to a table of data.'),C=t("If we wanted to check the version of the project we were looking at, we can use the "),S=e("code",null,"get",-1),j=t(" command."),R=s(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu currently supports the following formats for loading data directly into tables:</p><ul><li>csv</li><li>eml</li><li>ics</li><li>ini</li><li>json</li><li>nuon</li><li>ods</li><li>SQLite databases</li><li>ssv</li><li>toml</li><li>tsv</li><li>url</li><li>vcf</li><li>xlsx / xls</li><li>xml</li><li>yaml / yml</li></ul><p>But what happens if you load a text file that isn&#39;t one of these? Let&#39;s try it:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open README.md
</code></pre></div><p>We&#39;re shown the contents of the file.</p><p>Below the surface, what Nu sees in these text files is one large string. Next, we&#39;ll talk about how to work with these strings to get the data we need out of them.</p><h2 id="nuon" tabindex="-1"><a class="header-anchor" href="#nuon" aria-hidden="true">#</a> NUON</h2>`,8),I=t("Nushell Object Notation (NUON) aims to be for Nushell what JavaScript Object Notation (JSON) is for JavaScript. That is, NUON code is a valid Nushell code that describes some data structure. For example, this is a valid NUON (example from the "),U={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_config.nu",target:"_blank",rel:"noopener noreferrer"},W=t("default configuration file"),V=t("):"),A=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`{
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
`)])],-1),J=e("p",null,[t("You might notice it is quite similar to JSON, and you're right. "),e("strong",null,"NUON is a superset of JSON!"),t(' That is, any JSON code is a valid NUON code, therefore a valid Nushell code. Compared to JSON, NUON is more "human-friendly". For example, comments are allowed and commas are not required.')],-1),E=t("One limitation of NUON currently is that it cannot represent all of the Nushell "),P=t("datatypes"),z=t(". Most notably, NUON does not allow to serialize blocks."),F=s(`<h2 id="handling-strings" tabindex="-1"><a class="header-anchor" href="#handling-strings" aria-hidden="true">#</a> Handling Strings</h2><p>An important part of working with data coming from outside Nu is that it&#39;s not always in a format that Nu understands. Often this data is given to us as a string.</p><p>Let&#39;s imagine that we&#39;re given this data file:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>Each bit of data we want is separated by the pipe (&#39;|&#39;) symbol, and each person is on a separate line. Nu doesn&#39;t have a pipe-delimited file format by default, so we&#39;ll have to parse this ourselves.</p><p>The first thing we want to do when bringing in the file is to work with it a line at a time:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia | Butler | Writer
 1 \u2502 Bob | Ross | Painter
 2 \u2502 Antonio | Vivaldi | Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,7),M=t("We can see that we're working with the lines because we're back into a table. Our next step is to see if we can split up the rows into something a little more useful. For that, we'll use the "),Q=e("code",null,"split",-1),H=t(" command. "),Y=e("code",null,"split",-1),D=t(", as the name implies, gives us a way to split a delimited string. We will use "),G=e("code",null,"split",-1),K=t("'s "),X=e("code",null,"column",-1),Z=t(" subcommand to split the contents across multiple columns. We tell it what the delimiter is, and it does the rest:"),$=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|"
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1  \u2502 column2   \u2502 column3
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia  \u2502  Butler   \u2502  Writer
 1 \u2502 Bob      \u2502  Ross     \u2502  Painter
 2 \u2502 Antonio  \u2502  Vivaldi  \u2502  Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),ee=t("That "),te=e("em",null,"almost",-1),oe=t(" looks correct. It looks like there's an extra space there. Let's "),ne=e("code",null,"trim",-1),ae=t(" that extra space:"),se=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|" | str trim
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1 \u2502 column2 \u2502 column3
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia \u2502 Butler  \u2502 Writer
 1 \u2502 Bob     \u2502 Ross    \u2502 Painter
 2 \u2502 Antonio \u2502 Vivaldi \u2502 Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),le=t("Not bad. The "),ie=e("code",null,"split",-1),de=t(" command gives us data we can use. It also goes ahead and gives us default column names:"),ce=s(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get column1
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia
 1 \u2502 Bob
 2 \u2502 Antonio
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We can also name our columns instead of using the default names:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 first_name \u2502 last_name \u2502 job
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia    \u2502 Butler    \u2502 Writer
 1 \u2502 Bob        \u2502 Ross      \u2502 Painter
 2 \u2502 Antonio    \u2502 Vivaldi   \u2502 Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Now that our data is in a table, we can use all the commands we&#39;ve used on tables before:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim | sort-by first_name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 first_name \u2502 last_name \u2502 job
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Antonio    \u2502 Vivaldi   \u2502 Composer
 1 \u2502 Bob        \u2502 Ross      \u2502 Painter
 2 \u2502 Octavia    \u2502 Butler    \u2502 Writer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>There are other commands you can use to work with strings:</p>`,6),re=e("li",null,[e("code",null,"str")],-1),ue=e("code",null,"lines",-1),he=e("code",null,"size",-1),me=s(`<p>There is also a set of helper commands we can call if we know the data has a structure that Nu should be able to understand. For example, let&#39;s open a Rust lock file:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.lock
# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
[[package]]
name = &quot;adhoc_derive&quot;
version = &quot;0.1.2&quot;
</code></pre></div><p>The &quot;Cargo.lock&quot; file is actually a .toml file, but the file extension isn&#39;t .toml. That&#39;s okay, we can use the <code>from</code> command using the <code>toml</code> subcommand:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.lock | from toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 metadata \u2502 [row 107 columns]
 package  \u2502 [table 130 rows]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>The <code>from</code> command can be used for each of the structured data text formats that Nu can open and understand by passing it the supported format as a subcommand.</p><h2 id="opening-in-raw-mode" tabindex="-1"><a class="header-anchor" href="#opening-in-raw-mode" aria-hidden="true">#</a> Opening in raw mode</h2>`,6),pe=t("While it's helpful to be able to open a file and immediately work with a table of its data, this is not always what you want to do. To get to the underlying text, the "),_e=e("code",null,"open",-1),ge=t(" command can take an optional "),fe=e("code",null,"--raw",-1),xe=t(" flag:"),be=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml --raw
[package]                                                                                        name = "nu"
version = "0.1.3"
authors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]
description = "A shell for the GitHub era"
license = "MIT"
`)])],-1),we=e("h2",{id:"sqlite",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sqlite","aria-hidden":"true"},"#"),t(" SQLite")],-1),ve=t("SQLite databases are automatically detected by "),ke=e("code",null,"open",-1),ye=t(", no matter what their file extension is. You can open a whole database:"),Ne=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open foo.db
`)])],-1),Oe=t("Or "),qe=e("code",null,"get",-1),Te=t(" a specific table:"),Be=s(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open foo.db | get some_table
</code></pre></div><p>Or run any SQL query you like:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open foo.db | query db &quot;select * from some_table&quot;
</code></pre></div><p>(Note: some older versions of Nu use <code>into db | query</code> instead of <code>query db</code> )</p><h2 id="fetching-urls" tabindex="-1"><a class="header-anchor" href="#fetching-urls" aria-hidden="true">#</a> Fetching URLs</h2>`,5),Le=t("In addition to loading files from your filesystem, you can also load URLs by using the "),Ce=e("code",null,"fetch",-1),Se=t(" command. This will fetch the contents of the URL from the internet and return it:"),je=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> fetch https://blog.rust-lang.org/feed.xml
\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 feed \u2502 {record 2 fields}
\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1);function Re(Ie,Ue){const n=l("RouterLink"),i=l("ExternalLinkIcon");return c(),r("div",null,[h,e("p",null,[m,o(n,{to:"/book/commands/ls.html"},{default:a(()=>[p]),_:1}),_,o(n,{to:"/book/commands/ps.html"},{default:a(()=>[g]),_:1}),f,o(n,{to:"/book/commands/date.html"},{default:a(()=>[x]),_:1}),b,o(n,{to:"/book/commands/sys.html"},{default:a(()=>[w]),_:1}),v]),k,e("p",null,[y,o(n,{to:"/book/commands/open.html"},{default:a(()=>[N]),_:1}),O]),q,e("p",null,[T,o(n,{to:"/book/commands/ls.html"},{default:a(()=>[B]),_:1}),L]),e("p",null,[C,o(n,{to:"/book/commands/get.html"},{default:a(()=>[S]),_:1}),j]),R,e("p",null,[I,e("a",U,[W,o(i)]),V]),A,J,e("p",null,[E,o(n,{to:"/book/types_of_data.html"},{default:a(()=>[P]),_:1}),z]),F,e("p",null,[M,o(n,{to:"/book/commands/split.html"},{default:a(()=>[Q]),_:1}),H,o(n,{to:"/book/commands/split.html"},{default:a(()=>[Y]),_:1}),D,o(n,{to:"/book/commands/split.html"},{default:a(()=>[G]),_:1}),K,X,Z]),$,e("p",null,[ee,te,oe,o(n,{to:"/book/commands/str_trim.html"},{default:a(()=>[ne]),_:1}),ae]),se,e("p",null,[le,o(n,{to:"/book/commands/split.html"},{default:a(()=>[ie]),_:1}),de]),ce,e("ul",null,[re,e("li",null,[o(n,{to:"/book/commands/lines.html"},{default:a(()=>[ue]),_:1})]),e("li",null,[o(n,{to:"/book/commands/size.html"},{default:a(()=>[he]),_:1})])]),me,e("p",null,[pe,o(n,{to:"/book/commands/open.html"},{default:a(()=>[_e]),_:1}),ge,fe,xe]),be,we,e("p",null,[ve,o(n,{to:"/book/commands/open.html"},{default:a(()=>[ke]),_:1}),ye]),Ne,e("p",null,[Oe,o(n,{to:"/book/commands/get.html"},{default:a(()=>[qe]),_:1}),Te]),Be,e("p",null,[Le,o(n,{to:"/book/commands/fetch.html"},{default:a(()=>[Ce]),_:1}),Se]),je])}const Ve=d(u,[["render",Re],["__file","loading_data.html.vue"]]);export{Ve as default};
