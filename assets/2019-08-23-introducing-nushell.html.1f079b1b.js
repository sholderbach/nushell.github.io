import{_ as s,r,o as i,c as h,a as t,b as a,d as e,e as o}from"./app.8034769a.js";const l="/assets/nushell-autocomplete4.26b90923.gif",d="/assets/nu_ls.a036548c.png",u="/assets/nu_ls_filter.b8d89903.png",c="/assets/nu_ps_filter.1d7fe435.png",p="/assets/open_cargo.c10a4376.png",g="/assets/view_source.c235add2.png",m="/assets/nu_error2.faf397f4.png",w="/assets/nu_error_metadata.c6e43050.png",f={},x=t("h1",{id:"introducing-nushell",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#introducing-nushell","aria-hidden":"true"},"#"),e(" Introducing nushell")],-1),_=t("p",null,"Today, we're introducing a new shell, written in Rust. It draws inspiration from the classic Unix philosophy of pipelines, the structured data approach of PowerShell, functional programming, systems programming, and more.",-1),b=e("It's called Nushell, or just Nu for short. We have a "),j={href:"https://book.nushell.sh/en",target:"_blank",rel:"noopener noreferrer"},y=e("book"),v=e(" (\xA1tambi\xE9n se habla "),k={href:"https://book.nushell.sh/es",target:"_blank",rel:"noopener noreferrer"},A=e("Espa\xF1ol"),N=e("!). We have a "),C={href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"},I=e("repo"),W=e("."),E=o('<p>This release was made by Jonathan Turner (me), Yehuda Katz, and Andr\xE9s Robalino, with contributions from Odin Dutton.</p><p><img src="'+l+'" alt="Nu in action"></p><h1 id="but-why" tabindex="-1"><a class="header-anchor" href="#but-why" aria-hidden="true">#</a> But why?</h1><p>Many of us have gotten used to bash (or zsh/fish/etc), and don&#39;t understand why you would need another kind of shell. That was me, too, a few months ago before I started working on this. My friend Yehuda had discovered PowerShell and was going on and on about how amazing it was to do more with the shell, but until he actually gave me a demo, I didn&#39;t really believe him.</p><p>Then he talked me into joining him on an idea he had. What if we could take the ideas of a structured shell and make it more functional (as opposed to object-oriented)? What if, like PowerShell, it worked on Windows, Linux, and macOS? What if it had great error messages? I fell in love with the project ideas, made a few new friends, and many nights and weekends later I&#39;d like to show you what we&#39;ve made.</p><p>In this post, I&#39;ll talk about how a few simple ideas drive how Nu works, what Nu can do with them, and where we hope to go in the future.</p><h1 id="simple-ideas" tabindex="-1"><a class="header-anchor" href="#simple-ideas" aria-hidden="true">#</a> Simple ideas</h1><p>To Nu, everything is data. When you type <code>ls</code>, you&#39;re given a table of information about the directory you&#39;re listing:</p><p><img src="'+d+'" alt="ls command"></p><p>Rather than having to remember different flags to <code>ls</code>, we can just work with the data it gives back. We can find the files greater than a certain size:</p><p><img src="'+u+'" alt="ls with filtering"></p><p>Or we could choose to sort it by a column, or only show directories, or more. That by itself is fun but perhaps not compelling enough.</p><p><img src="'+c+'" alt="ps with filtering"></p><p>Where this simple concept - that everything in Nu is data - starts to shine when we try other commands and realize that we&#39;re using the same commands to filter, to sort, etc. Rather than having the need to remember all the parameters to all the commands, we can just use the same verbs to act over our data, regardless of where the data came from. Nu pushes this idea even further.</p><p><img src="'+p+`" alt="opening toml file"></p><p>Nu also understands structured text files like JSON, TOML, YAML, and more. Opening these files gives us the same tables we saw with <code>ls</code> and <code>ps</code>. Again, this lets us use the same commands to filter our data, explore it, and use it.</p><h1 id="working-with-the-outside-world" tabindex="-1"><a class="header-anchor" href="#working-with-the-outside-world" aria-hidden="true">#</a> Working with the outside world</h1><p>The above approach could be fun, but if we&#39;re not careful, it could become a walled garden. What happens outside of the commands Nu comes with?</p><p>First, let&#39;s take a look at working with a file that Nu doesn&#39;t understand.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.psv
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>To work with this in Nu, we need to do two steps: figure out where the rows are, and then figure out what the columns are. The rows are pretty easy, we just have one record per row:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.psv | lines
---+------------------------------
 # | value
---+------------------------------
 0 | Octavia | Butler | Writer
 1 | Bob | Ross | Painter
 2 | Antonio | Vivaldi | Composer
---+------------------------------
</code></pre></div><p>Next, we can create our columns by splitting each row at the pipe (<code>|</code>) symbol:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.psv | lines | split-column &quot;|&quot;
---+----------+-----------+-----------
 # | Column1  | Column2   | Column3
---+----------+-----------+-----------
 0 | Octavia  |  Butler   |  Writer
 1 | Bob      |  Ross     |  Painter
 2 | Antonio  |  Vivaldi  |  Composer
---+----------+-----------+-----------
</code></pre></div><p>That&#39;s already good enough that we can work with the data. We can go a step further and name the columns if we want:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.psv | lines | split-column &quot; | &quot; firstname lastname job
---+-----------+----------+----------
 # | firstname | lastname | job
---+-----------+----------+----------
 0 | Octavia   | Butler   | Writer
 1 | Bob       | Ross     | Painter
 2 | Antonio   | Vivaldi  | Composer
---+-----------+----------+----------
</code></pre></div><p>But what about working with commands outside of Nu? Let&#39;s first call the native version of <code>ls</code> instead of the Nu version:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ^ls
assets	     Cargo.lock  docs	images	 Makefile.toml	README.md     rustfmt2.toml  src     tests
Cargo2.toml  Cargo.toml  extra	LICENSE  open		readonly.txt  rustfmt.toml   target
</code></pre></div><p>We&#39;ll use the same commands we used on data to bring it into Nu:</p><div class="language-text ext-text"><pre class="language-text"><code>^ls | split-row &quot; &quot; file
----+---------------
 #  | value
----+---------------
 0  | assets
 1  | Cargo2.toml
 2  | Cargo.lock
 3  | Cargo.toml
 4  | docs
 5  | extra
 6  | images
 7  | LICENSE
 8  | Makefile.toml
 9  | open
 10 | README.md
 11 | readonly.txt
 12 | rustfmt2.toml
 13 | rustfmt.toml
 14 | src
 15 | target
 16 | tests
----+---------------
</code></pre></div><p>Or maybe we want to work with the native <code>ls -la</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>^ls -la | lines | split-column &quot; &quot;
----+------------+---------+----------+----------+---------+---------+---------+---------+---------------
 #  | Column1    | Column2 | Column3  | Column4  | Column5 | Column6 | Column7 | Column8 | Column9
----+------------+---------+----------+----------+---------+---------+---------+---------+---------------
 0  | total      | 296     |          |          |         |         |         |         |
 1  | drwxr-xr-x | 13      | jonathan | jonathan | 4096    | Aug     | 24      | 03:24   | .
 2  | drwxr-xr-x | 21      | jonathan | jonathan | 4096    | Aug     | 22      | 17:00   | ..
 3  | drwxr-xr-x | 2       | jonathan | jonathan | 4096    | Aug     | 3       | 05:39   | assets
 4  | drwxr-xr-x | 2       | jonathan | jonathan | 4096    | Aug     | 21      | 19:29   | .azure
 5  | drwxr-xr-x | 2       | jonathan | jonathan | 4096    | Jun     | 23      | 05:09   | .cargo
 6  | -rw-r--r-- | 1       | jonathan | jonathan | 2963    | Aug     | 22      | 20:17   | Cargo2.toml
 7  | -rw-r--r-- | 1       | jonathan | jonathan | 201255  | Aug     | 24      | 03:24   | Cargo.lock
 8  | -rw-r--r-- | 1       | jonathan | jonathan | 3127    | Aug     | 24      | 03:24   | Cargo.toml
 9  | drwxr-xr-x | 2       | jonathan | jonathan | 4096    | Jun     | 17      | 15:32   | docs
 10 | -rw-r--r-- | 1       | jonathan | jonathan | 148     | Jun     | 17      | 15:32   | .editorconfig
 11 | drwxr-xr-x | 4       | jonathan | jonathan | 4096    | Aug     | 22      | 19:29   | extra
 12 | drwxr-xr-x | 8       | jonathan | jonathan | 4096    | Aug     | 24      | 03:24   | .git
 13 | -rw-r--r-- | 1       | jonathan | jonathan | 58      | Aug     | 10      | 11:08   | .gitignore
 14 | drwxr-xr-x | 2       | jonathan | jonathan | 4096    | Aug     | 24      | 03:24   | images
 15 | -rw-r--r-- | 1       | jonathan | jonathan | 1085    | Jun     | 17      | 15:32   | LICENSE
 16 | -rw-r--r-- | 1       | jonathan | jonathan | 614     | Jun     | 17      | 15:32   | Makefile.toml
 17 | -rw-r--r-- | 1       | jonathan | jonathan | 0       | Aug     | 23      | 04:58   | open
 18 | -rw-r--r-- | 1       | jonathan | jonathan | 11375   | Aug     | 24      | 03:24   | README.md
 19 | -r--r--r-- | 1       | jonathan | jonathan | 0       | Jul     | 4       | 03:51   | readonly.txt
 20 | -rw-r--r-- | 1       | jonathan | jonathan | 37      | Aug     | 23      | 04:54   | rustfmt2.toml
 21 | -rw-r--r-- | 1       | jonathan | jonathan | 16      | Aug     | 1       | 19:45   | rustfmt.toml
 22 | drwxr-xr-x | 10      | jonathan | jonathan | 4096    | Aug     | 24      | 03:24   | src
 23 | drwxr-xr-x | 4       | jonathan | jonathan | 4096    | Aug     | 22      | 19:22   | target
 24 | drwxr-xr-x | 4       | jonathan | jonathan | 4096    | Aug     | 22      | 04:15   | tests
 25 | drwxrwxr-x | 2       | jonathan | jonathan | 4096    | Jul     | 19      | 15:18   | .vscode
----+------------+---------+----------+----------+---------+---------+---------+---------+---------------
</code></pre></div><p>After a bit of experimenting, we might come up with a command like this:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ^ls -la | lines | skip 1 | split-column &quot; &quot; perms files group user size month day time name
----+------------+-------+----------+----------+--------+-------+-----+-------+---------------
 #  | perms      | files | group    | user     | size   | month | day | time  | name
----+------------+-------+----------+----------+--------+-------+-----+-------+---------------
 0  | drwxr-xr-x | 13    | jonathan | jonathan | 4096   | Aug   | 24  | 03:24 | .
 1  | drwxr-xr-x | 21    | jonathan | jonathan | 4096   | Aug   | 22  | 17:00 | ..
 2  | drwxr-xr-x | 2     | jonathan | jonathan | 4096   | Aug   | 3   | 05:39 | assets
 3  | drwxr-xr-x | 2     | jonathan | jonathan | 4096   | Aug   | 21  | 19:29 | .azure
 4  | drwxr-xr-x | 2     | jonathan | jonathan | 4096   | Jun   | 23  | 05:09 | .cargo
 5  | -rw-r--r-- | 1     | jonathan | jonathan | 2963   | Aug   | 22  | 20:17 | Cargo2.toml
 6  | -rw-r--r-- | 1     | jonathan | jonathan | 201255 | Aug   | 24  | 03:24 | Cargo.lock
 7  | -rw-r--r-- | 1     | jonathan | jonathan | 3127   | Aug   | 24  | 03:24 | Cargo.toml
 8  | drwxr-xr-x | 2     | jonathan | jonathan | 4096   | Jun   | 17  | 15:32 | docs
 9  | -rw-r--r-- | 1     | jonathan | jonathan | 148    | Jun   | 17  | 15:32 | .editorconfig
 10 | drwxr-xr-x | 4     | jonathan | jonathan | 4096   | Aug   | 22  | 19:29 | extra
 11 | drwxr-xr-x | 8     | jonathan | jonathan | 4096   | Aug   | 24  | 03:24 | .git
 12 | -rw-r--r-- | 1     | jonathan | jonathan | 58     | Aug   | 10  | 11:08 | .gitignore
 13 | drwxr-xr-x | 2     | jonathan | jonathan | 4096   | Aug   | 24  | 03:24 | images
 14 | -rw-r--r-- | 1     | jonathan | jonathan | 1085   | Jun   | 17  | 15:32 | LICENSE
 15 | -rw-r--r-- | 1     | jonathan | jonathan | 614    | Jun   | 17  | 15:32 | Makefile.toml
 16 | -rw-r--r-- | 1     | jonathan | jonathan | 0      | Aug   | 23  | 04:58 | open
 17 | -rw-r--r-- | 1     | jonathan | jonathan | 11375  | Aug   | 24  | 03:24 | README.md
 18 | -r--r--r-- | 1     | jonathan | jonathan | 0      | Jul   | 4   | 03:51 | readonly.txt
 19 | -rw-r--r-- | 1     | jonathan | jonathan | 37     | Aug   | 23  | 04:54 | rustfmt2.toml
 20 | -rw-r--r-- | 1     | jonathan | jonathan | 16     | Aug   | 1   | 19:45 | rustfmt.toml
 21 | drwxr-xr-x | 10    | jonathan | jonathan | 4096   | Aug   | 24  | 03:24 | src
 22 | drwxr-xr-x | 4     | jonathan | jonathan | 4096   | Aug   | 22  | 19:22 | target
 23 | drwxr-xr-x | 4     | jonathan | jonathan | 4096   | Aug   | 22  | 04:15 | tests
 24 | drwxrwxr-x | 2     | jonathan | jonathan | 4096   | Jul   | 19  | 15:18 | .vscode
----+------------+-------+----------+----------+--------+-------+-----+-------+---------------
</code></pre></div><p>Because Nu let&#39;s you manipulate your data until it&#39;s how you want it, there&#39;s a feeling of playing with your data. You get used to using the verbs, and then you can use them on anything. When you&#39;re ready, you can write it back to disk.</p><p>Oh, before I forget - I wanted to quickly show how to get data from Nu back out into the outside world. Here&#39;s an example of calling <code>echo</code> on each filename in a directory:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name | echo $it
</code></pre></div><p>You can see that we can mix-and-match commands that are inside of Nu with those that are outside, and data will still flow between them as expected. But Nu is more than just a pipeline.</p><h1 id="more-than-a-pipeline" tabindex="-1"><a class="header-anchor" href="#more-than-a-pipeline" aria-hidden="true">#</a> More than a pipeline</h1><p>As we built Nu, we realized we could experiment with other parts of how a shell works. The first of these experiments lead us to an observation: if everything is data in Nu, we should be able to view this data.</p><p><img src="`+g+'" alt="viewing source file"></p><p>We&#39;ve seen the tables. Nu also supports opening and looking at text and binary data. If we open a source file, we can scroll around in a syntax-highlighted file. If we open an xml, we can look at its data. We can even open a binary file and look at what&#39;s inside (hint: there&#39;s even a fun easter egg if you open certain kinds binary files, especially if you&#39;ve installed Nu with the optional <code>rawkey</code> feature).</p><p>Being able to view data is helpful, and this kind of polish extends to other aspects, like error messages:</p><p><img src="'+m+'" alt="simple error"></p>',44),S=e("Nu takes heavy inspiration from the "),T={href:"https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html",target:"_blank",rel:"noopener noreferrer"},B=e("error messages in Rust"),J=e(". As much as possible, draw your eyes to the problem."),R=t("p",null,"Combined with the pipeline, some pretty interesting errors are possible:",-1),q=t("p",null,[t("img",{src:w,alt:"error with metadata"})],-1),M=e("You might wonder how does that even work. Nu has a metadata system (still early!) that you can read about in the "),O={href:"https://book.nushell.sh/en/metadata",target:"_blank",rel:"noopener noreferrer"},z=e("Metadata chapter"),L=e(" of the "),P={href:"https://book.nushell.sh",target:"_blank",rel:"noopener noreferrer"},V=e("Nu book"),Y=e(". Let's just take a quick peek at it:"),D=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml
------------+--------------+------------------+----------+----------
 bin        | dependencies | dev-dependencies | lib      | package
------------+--------------+------------------+----------+----------
 [11 items] | [object]     | [object]         | [object] | [object]
------------+--------------+------------------+----------+----------
&gt; open Cargo.toml | tags
----------+------------------------------------------
 span     | origin
----------+------------------------------------------
 [object] | /home/jonathan/Source/nushell/Cargo.toml
----------+------------------------------------------
</code></pre></div><p>Data that flows through the pipeline gets a set of additional metadata tagged to it. We can use this later to figure out how to display the contents, show a better error message, and more.</p><h1 id="shells-plural" tabindex="-1"><a class="header-anchor" href="#shells-plural" aria-hidden="true">#</a> Shells, plural</h1><p>Let&#39;s say you&#39;re in a directory, but you&#39;d really like to flip back and forth between it and one or two others. You could open up multiple tabs, multiple terminals, if you&#39;re on a Unix system you could use &quot;screen&quot;, and probably even more than that. What if the shells were just built in?</p><p>In Nu, we can <code>enter</code> a directory, which adds it to a ring of shells we can bounce between:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; enter ../rhai/
/home/jonathan/Source/rhai(master)&gt; shells
---+---+------------+-------------------------------
 # |   | name       | path
---+---+------------+-------------------------------
 0 |   | filesystem | /home/jonathan/Source/nushell
 1 | X | filesystem | /home/jonathan/Source/rhai
---+---+------------+-------------------------------
</code></pre></div><p>Using <code>n</code> and <code>p</code> we can jump back and forth between the shells. <code>exit</code> gets us out of a shell.</p><p>You might noticed that <code>name</code> column in the <code>shells</code> table. Why&#39;s that there? Oh no... oh yes.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; enter Cargo.toml
/&gt; shells
---+---+--------------------------------------------+-------------------------------
 # |   | name                                       | path
---+---+--------------------------------------------+-------------------------------
 0 |   | filesystem                                 | /home/jonathan/Source/nushell
 1 |   | filesystem                                 | /home/jonathan/Source/rhai
 2 | X | {/home/jonathan/Source/nushell/Cargo.toml} | /
---+---+--------------------------------------------+-------------------------------
</code></pre></div><p>That&#39;s right, we&#39;re in the file. Can we <code>cd</code>? Oh yes, we can:</p><div class="language-text ext-text"><pre class="language-text"><code>/&gt; ls
------------+--------------+------------------+----------+----------
 bin        | dependencies | dev-dependencies | lib      | package
------------+--------------+------------------+----------+----------
 [11 items] | [object]     | [object]         | [object] | [object]
------------+--------------+------------------+----------+----------
/&gt; cd bin
/bin&gt; ls
----+----------------------+---------------------------
 #  | name                 | path
----+----------------------+---------------------------
 0  | nu_plugin_inc        | src/plugins/inc.rs
 1  | nu_plugin_sum        | src/plugins/sum.rs
 2  | nu_plugin_add        | src/plugins/add.rs
 3  | nu_plugin_edit       | src/plugins/edit.rs
 4  | nu_plugin_str        | src/plugins/str.rs
 5  | nu_plugin_skip       | src/plugins/skip.rs
 6  | nu_plugin_sys        | src/plugins/sys.rs
 7  | nu_plugin_tree       | src/plugins/tree.rs
 8  | nu_plugin_binaryview | src/plugins/binaryview.rs
 9  | nu_plugin_textview   | src/plugins/textview.rs
 10 | nu                   | src/main.rs
----+----------------------+---------------------------
</code></pre></div><h1 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> Plugins</h1>`,12),U=e("Nu can't come with everything you might want to do with it, so we're releasing Nu with the ability to extend it with plugins. There's more information in the "),X={href:"https://book.nushell.sh/en/plugins",target:"_blank",rel:"noopener noreferrer"},F=e("plugins chapters"),G=e(". Nu will look for these plugins in your path, and load them up on startup."),H=t("h1",{id:"all-because-of-rust",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#all-because-of-rust","aria-hidden":"true"},"#"),e(" All because of Rust")],-1),K=t("p",null,'Nu would not have been possible without Rust. Internally, it uses async/await, async streams, and liberal use of "serde" to manage serializing and deserializing into the common data format and to communicate with plugins.',-1),$=e("We also heavily leveraged "),Q={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},Z=e("crates.io"),ee=e(". The ability to load numerous file formats, display messages, draw tables, and more all came from the hundreds (thousands?) of generous developers who wrote the crates we use in Nu. A "),te=t("strong",null,"huge",-1),ne=e(" thank you to everyone who contributed to Nu without ever knowing it."),ae=t("h1",{id:"what-s-next",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#what-s-next","aria-hidden":"true"},"#"),e(" What's next?")],-1),oe=t("p",null,"Nu is just getting started. In this release, we have a foundation to build on. Next, we'll work towards stability, the abilty to use Nu as your main shell, the ability to write functions and scripts in Nu, and much more.",-1),se=e("If you want to give it a spin, the "),re={href:"https://book.nushell.sh/en/installation",target:"_blank",rel:"noopener noreferrer"},ie=e("installation instructions"),he=e(" will help you get started. If you want to chat come by our "),le={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},de=e("discord"),ue=e(" and "),ce={href:"https://github.com/nushell/nushell",target:"_blank",rel:"noopener noreferrer"},pe=e("github");function ge(me,we){const n=r("ExternalLinkIcon");return i(),h("div",null,[x,_,t("p",null,[b,t("a",j,[y,a(n)]),v,t("a",k,[A,a(n)]),N,t("a",C,[I,a(n)]),W]),E,t("p",null,[S,t("a",T,[B,a(n)]),J]),R,q,t("p",null,[M,t("a",O,[z,a(n)]),L,t("a",P,[V,a(n)]),Y]),D,t("p",null,[U,t("a",X,[F,a(n)]),G]),H,K,t("p",null,[$,t("a",Q,[Z,a(n)]),ee,te,ne]),ae,oe,t("p",null,[se,t("a",re,[ie,a(n)]),he,t("a",le,[de,a(n)]),ue,t("a",ce,[pe,a(n)])])])}const xe=s(f,[["render",ge],["__file","2019-08-23-introducing-nushell.html.vue"]]);export{xe as default};
