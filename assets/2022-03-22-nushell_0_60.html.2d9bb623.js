import{_ as r,r as s,o as i,c as d,a as t,b as n,f as l,d as e,e as o}from"./app.8034769a.js";const c="/assets/0_60_completions.c220d6a2.gif",h="/assets/0_60_ls_colors.adedeec5.png",u="/assets/0_59_1_for_multiline_indicator.4d6a3a0e.png",p="/assets/0_59_1_ls_gridc.749a3287.png",g="/assets/0_60_miette.e8ce378d.png",m="/assets/0_60_0_completions_internal.afc63983.gif",f="/assets/0_60_0_history.ab361b1d.gif",w="/assets/0_60_0_history_complete.aedd5537.gif",b={},y=e("Before we begin, as the Russian invasion of Ukraine still continues to threaten lives, "),x={href:"https://war.ukraine.ua",target:"_blank",rel:"noopener noreferrer"},v=e("here"),_=e(" are ways you can help."),k=t("h1",{id:"nushell-0-60",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-60","aria-hidden":"true"},"#"),e(" Nushell 0.60")],-1),N=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),q=t("p",null,"Today, we're releasing a beta release of 0.60 of Nu. This is an enormous release, with lots of changes across all aspects of Nushell.",-1),T=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),$=e("Nu 0.60 is available as "),A={href:"https://github.com/nushell/nushell/releases/tag/0.60.0",target:"_blank",rel:"noopener noreferrer"},B=e("pre-built binaries"),M=e(" or from "),W={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},I=e("crates.io"),S=e(". If you have Rust installed you can install it using "),C=t("code",null,"cargo install nu",-1),O=e("."),z=o('<p>If you want all the built-in goodies, you can install <code>cargo install nu --all-features</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="party-\u{1F973}" tabindex="-1"><a class="header-anchor" href="#party-\u{1F973}" aria-hidden="true">#</a> Party! \u{1F973}</h1><p>It&#39;s here! \u{1F389}\u{1F389}</p><p>We&#39;re excited to announce the first full release of Nushell using the new engine, new line editor, and so much more!</p><h1 id="skipping-versions" tabindex="-1"><a class="header-anchor" href="#skipping-versions" aria-hidden="true">#</a> Skipping versions</h1><p>The first thing you&#39;ll notice is that we&#39;re skipping from version 0.44 to 0.60. This is on purpose, you didn&#39;t miss anything!</p><p>Because of the number of changes, and the number of breaking changes, we wanted to let everyone know how much has changed by also making a big jump in the version number. Previous scripts will need to be updated, and you&#39;ll need to learn some of the new ways of doing things in Nushell to get back to your same level of comfort.</p><p>Let&#39;s talk about the features new in this release.</p><h1 id="custom-completions" tabindex="-1"><a class="header-anchor" href="#custom-completions" aria-hidden="true">#</a> Custom completions</h1><p><img src="'+c+`" alt="Custom completions for git and winget"></p><p>Let&#39;s start with Nushell&#39;s most-requested feature: custom completions. The long-awaited, long-requested feature of having nice completions is finally here. With 0.60, you&#39;ll be able to write scripts that help you complete parameters and flag values. Let&#39;s take a look at an example. When you create a new config, you&#39;ll see a section like this:</p><div class="language-text ext-text"><pre class="language-text"><code># This is a simplified version of completions for git branches and git remotes
def &quot;nu-complete git branches&quot; [] {
  ^git branch | lines | each { |line| $line | str find-replace &#39;\\* &#39; &#39;&#39; | str trim }
}

def &quot;nu-complete git remotes&quot; [] {
  ^git remote | lines | each { |line| $line | str trim }
}
</code></pre></div><p>To call these function at the right time, we need to tell Nushell which parameter can complete with them.</p><div class="language-text ext-text"><pre class="language-text"><code>extern &quot;git checkout&quot; [
  branch?: string@&quot;nu-complete git branches&quot; # name of the branch to checkout
  -b: string                                 # create and checkout a new branch
  -B: string                                 # create/reset and checkout a branch
  # note: other parameters removed for brevity
]
</code></pre></div><p>The new <code>extern</code> command allows you to describe all the type information for an external command to Nushell. With this, it can perform error checking, completions, syntax highlighting, and more.</p><p>You may also notice the <code>@</code> followed by the name of the completion function. This tells the completer what command to call to get a list of completions to use in that position, and you can down-select from these.</p><p>We&#39;ve already seen early adopters starting to write their own completions for other commands, and we&#39;re excited to see what people will do.</p><h1 id="a-new-config-file" tabindex="-1"><a class="header-anchor" href="#a-new-config-file" aria-hidden="true">#</a> A new config file</h1><p>With 0.60, we&#39;ve moved away from the .toml style of config to a config built from a Nushell script. We&#39;ve found this to be both more intuitive and much easier to work with.</p><p>When you first start up Nushell, you&#39;ll be asked if you&#39;d like to create a default config file. This is a great way to see the new defaults and to change them to meet your needs. You&#39;ll also see some examples in how to modify the stylings, prompt, keybindings, and external completions.</p><h1 id="table-improvements" tabindex="-1"><a class="header-anchor" href="#table-improvements" aria-hidden="true">#</a> Table improvements</h1><p><img src="`+h+`" alt="Better tables"></p><p>Tables can now be configured to show a footer with the column names.</p><p>Nushell will now also respect your <code>LS_COLORS</code> environment variable if set. If it&#39;s not set, Nushell will provide a default 8-bit setting so people with color terminal can see file types in different colors as seen below in the following screenshots.</p><h1 id="language-improvements" tabindex="-1"><a class="header-anchor" href="#language-improvements" aria-hidden="true">#</a> Language improvements</h1><p>There&#39;s quite a list of changes to the language itself. Let&#39;s talk about each one to help you transition to the new Nushell:</p><h2 id="escape-characters-in-strings" tabindex="-1"><a class="header-anchor" href="#escape-characters-in-strings" aria-hidden="true">#</a> Escape characters in strings</h2><p>With 0.60, Nushell now divides strings into two types: strings with escape characters and strings without. The escaping case is written with double-quotes (<code>&quot;</code>) and the non-escaping case is written with single-quotes (<code>&#39;</code>):</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; &quot;hello\\nworld&quot;
hello
world
&gt; &#39;hello\\nworld&#39;
hello\\nworld
</code></pre></div><p>Nushell will prefer the single-quotes for things like path names that include spaces, allowing you to naturally write paths for Windows as well.</p><p>The difference in double-quoted and single-quoted strings also extends to interpolated strings (<code>$&quot;&quot;</code> and <code>$&#39;&#39;</code>):</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let x = 100
&gt; $&quot;value is:\\n($x)&quot;
value is:
100
&gt; $&#39;value is:\\n($x)&#39;
value is:\\n100
</code></pre></div><h2 id="new-value-forms" tabindex="-1"><a class="header-anchor" href="#new-value-forms" aria-hidden="true">#</a> New value forms</h2><p>The 0.60 release also brings with it a number of new value forms.</p><h3 id="records" tabindex="-1"><a class="header-anchor" href="#records" aria-hidden="true">#</a> Records</h3><p>You now can write a record, or a list of key/value pairs, as a native data type in Nushell:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; {name: &quot;Bob&quot;, age: 10}
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 name \u2502 Bob \u2502
\u2502 age  \u2502 10  \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h3 id="table-as-a-list-of-records" tabindex="-1"><a class="header-anchor" href="#table-as-a-list-of-records" aria-hidden="true">#</a> Table as a list of records</h3><p>With the introduction of records, a second way to define a table is a list (or stream) of records:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; seq 3 | each { |x| { name: Bob, x: $x } }
  #   name   x
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0   Bob    1
  1   Bob    2
  2   Bob    3
</code></pre></div><h3 id="integers-are-now-signed-64-bit-integers" tabindex="-1"><a class="header-anchor" href="#integers-are-now-signed-64-bit-integers" aria-hidden="true">#</a> Integers are now signed 64-bit integers</h3><p>We&#39;re moving away from the &#39;bigint&#39; style of integers, so now integers are always signed 64-bit ints.</p><h3 id="decimals-are-now-signed-64-bit-floats" tabindex="-1"><a class="header-anchor" href="#decimals-are-now-signed-64-bit-floats" aria-hidden="true">#</a> Decimals are now signed 64-bit floats</h3><p>Likewise, we&#39;re moving away from &#39;bigdecimal&#39; to signed 64-bit float values.</p><h3 id="dates" tabindex="-1"><a class="header-anchor" href="#dates" aria-hidden="true">#</a> Dates</h3><p>Earlier versions of Nushell supported dates as a value type, but they lacked a way to write them. You can now write a date literal in one of three ways:</p><div class="language-text ext-text"><pre class="language-text"><code># A date
&gt; 2022-02-02

# A date and time, assuming UTC
&gt; 2022-02-23T19:47:47

# A date and time, with a timezone
2022-02-23T19:47:47.888239621-05:00
</code></pre></div>`,48),E=e("These come from the "),L={href:"https://datatracker.ietf.org/doc/html/rfc3339",target:"_blank",rel:"noopener noreferrer"},R=e("RFC 3339"),D=e(" standard for datetime formats."),P=o(`<h3 id="binary-data" tabindex="-1"><a class="header-anchor" href="#binary-data" aria-hidden="true">#</a> Binary data</h3><p>Like dates, earlier versions of Nushell also supported binary data but there was no way to write a binary data literal. You&#39;re now able to write them using the <code>0x[...]</code> form:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; 0x[11 ff]
Length: 2 (0x2) bytes | printable whitespace ascii_other non_ascii
00000000:   11 ff                                                \u2022\xD7
</code></pre></div><p>Spaces and commas are optional in this form, letting you separate write them however is best for readability.</p><h3 id="custom-values" tabindex="-1"><a class="header-anchor" href="#custom-values" aria-hidden="true">#</a> Custom values</h3><p>Another form we&#39;ll be talking about more as it grows is the &quot;custom value&quot; form. These are value types that you can extend the current set with by implementing a trait in Rust and registering the type.</p><p>The dataframe support in 0.60 uses this feature.</p><h2 id="if-meet-else" tabindex="-1"><a class="header-anchor" href="#if-meet-else" aria-hidden="true">#</a> if, meet else</h2><p>We&#39;ve improved the syntax of Nushell in a few key places. Previously, in 0.44 you&#39;d write:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; if $x &lt; 3 { echo &quot;true!&quot; } { echo &quot;false&quot; }
</code></pre></div><p>This not only felt inelegant, but was prone to errors as people would want to leave off the second block when they didn&#39;t need it or just naturally want to type <code>else</code>.</p><p>This led to a new concept in Nushell: the keyword shape. Shapes in Nushell are a way for commands to tell the parser what the shape of their parameters are. In turn, the parser will use this knowledge to parse the arguments before they&#39;re given to the command (and also to do completions and early errors). With this, <code>else</code> is now one of the new keyword shapes, allowing it to take an expression that follows.</p><p>Taken together, in 0.60 we can now not only write the above like this:</p><div class="language-text ext-text"><pre class="language-text"><code>if $x &lt; 3 {
  echo &quot;true!&quot;
} else {
  echo &quot;false&quot;
}
</code></pre></div><p>We can also string together multiple if/else:</p><div class="language-text ext-text"><pre class="language-text"><code>if $x &lt; 3 {
  echo &quot;less than three&quot;
} else if $x &lt; 10 {
  echo &quot;less than ten
} else {
  echo &quot;something else!&quot;
}
</code></pre></div><h2 id="shortcircuiting-conditions" tabindex="-1"><a class="header-anchor" href="#shortcircuiting-conditions" aria-hidden="true">#</a> Shortcircuiting conditions</h2><p>Boolean operators <code>&amp;&amp;</code> and <code>||</code> now will properly shortcircuit, only evaluating the right hand side if necessary.</p><h2 id="new-built-in-values" tabindex="-1"><a class="header-anchor" href="#new-built-in-values" aria-hidden="true">#</a> New built-in values</h2><p>We&#39;re introducing <code>true</code> and <code>false</code> as builtin values. These represent their boolean values true and false respectively.</p><h2 id="better-binary-data-support" tabindex="-1"><a class="header-anchor" href="#better-binary-data-support" aria-hidden="true">#</a> Better binary data support</h2><p>You can now use <code>get</code>, <code>skip</code>, and <code>first</code> on binary data to reach the bytes you&#39;d like to work with. We&#39;re exploring extending this further so that it becomes easier to explore your binary data just like your text data.</p><h2 id="structured-environment" tabindex="-1"><a class="header-anchor" href="#structured-environment" aria-hidden="true">#</a> Structured environment</h2><p>Inside of Nu, the environment can now hold any kind of structured value. For example, opening the <code>PATH</code> environment variable now might look like this in macOS:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $env.PATH
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 0 \u2502 /opt/homebrew/opt/openssl@3/bin \u2502
\u2502 1 \u2502 /opt/homebrew/bin               \u2502
\u2502 2 \u2502 /opt/homebrew/sbin              \u2502
\u2502 3 \u2502 /usr/local/bin                  \u2502
\u2502 4 \u2502 /usr/bin                        \u2502
\u2502 5 \u2502 /bin                            \u2502
\u2502 6 \u2502 /usr/sbin                       \u2502
\u2502 7 \u2502 /sbin                           \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>This allows you to more easily add and update to the environment. For example, we can add a new entry to the PATH:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let-env PATH = ($env.PATH | prepend &#39;/my/path&#39;)
</code></pre></div><p>Environment variables that aren&#39;t strings can be converted to strings automatically using the new <code>ENV_CONVERSIONS</code> environment variable.</p><h2 id="scoped-cd" tabindex="-1"><a class="header-anchor" href="#scoped-cd" aria-hidden="true">#</a> Scoped <code>cd</code></h2><p>In this release, we&#39;re also moving to keeping the current directory in the environment as <code>$env.PWD</code>. This leads to a few interesting twists in the design. For one, this means that <code>cd</code> is now scoped to the block you&#39;re currently in.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cd ./foo
./foo&gt; do { cd ./bar }
./foo&gt;
</code></pre></div><p>This allows you to more easily loop over subdirectories without having to do the bookkeeping of remembering to change back to the previous directory:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | where type == dir | each { |it| cd $it.name; ls | length }
</code></pre></div><p>That said, it takes a little getting used to. It does mean that changing a directory in a traditional custom command won&#39;t work, as the <code>PWD</code> environment variable will reset after the call completes. To help with this, we&#39;re also introducing <code>def-env</code>, a way to work inside the caller&#39;s environment and not lose any environment changes made by the custom command:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; def-env my-cd [path] {
  cd $path
}

&gt; my-cd ./foo
./foo&gt;
</code></pre></div><h2 id="more-consistent-tables-and-cell-paths" tabindex="-1"><a class="header-anchor" href="#more-consistent-tables-and-cell-paths" aria-hidden="true">#</a> More consistent tables and cell paths</h2><p>With this release, we&#39;ve simplified the commands for working with tables. The two fundamental commands are now: <code>select</code> and <code>get</code>.</p><h3 id="select-ing-data" tabindex="-1"><a class="header-anchor" href="#select-ing-data" aria-hidden="true">#</a> <code>Select</code>-ing data</h3><p>The <code>select</code> command allows you to keep the structure of what you&#39;re working on and reduce it to only the part you want. For example, just as before you can pass <code>select</code> to get a column:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 #  \u2502       name        \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  0 \u2502 CNAME             \u2502
\u2502  1 \u2502 CONTRIBUTING.md   \u2502
\u2502  2 \u2502 LICENSE           \u2502
\u2502  3 \u2502 README.md         \u2502
\u2502  4 \u2502 assets            \u2502
\u2502  5 \u2502 blog              \u2502
...
</code></pre></div><p>You can now also use <code>select</code> on rows, by passing in a row number:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select 1
\u256D\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 # \u2502      name       \u2502 type \u2502 size  \u2502  modified  \u2502
\u251C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 0 \u2502 CONTRIBUTING.md \u2502 file \u2502 389 B \u2502 2 days ago \u2502
\u2570\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h3 id="get-ing-data" tabindex="-1"><a class="header-anchor" href="#get-ing-data" aria-hidden="true">#</a> <code>Get</code>-ing data</h3><p>The other fundamental command for working with tables is <code>get</code>. Like <code>select</code>, <code>get</code> allows you to work with columns and rows in a table, or fields in a record. Unlike <code>select</code>, the <code>get</code> command extracts data out of the table and does not try to preserve its original form. This is helpful when you want to get at the cell data itself.</p><p>Via a column:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get name
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502  0 \u2502 CNAME             \u2502
\u2502  1 \u2502 CONTRIBUTING.md   \u2502
\u2502  2 \u2502 LICENSE           \u2502
\u2502  3 \u2502 README.md         \u2502
\u2502  4 \u2502 assets            \u2502
\u2502  5 \u2502 blog              \u2502
...
</code></pre></div><p>Via a row:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get 1
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 name     \u2502 CONTRIBUTING.md \u2502
\u2502 type     \u2502 file            \u2502
\u2502 size     \u2502 389 B           \u2502
\u2502 modified \u2502 2 days ago      \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>You&#39;ll notice that getting rows out of a table with columns gives you back a record. You can think of a table as a list of records.</p><p>You can combine working with rows and columns together into a &quot;cell path&quot;, a way of reaching the data you want. If we only wanted to get the cell&#39;s data in row 1, column &quot;size&quot;, we can do:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | get size.1
</code></pre></div><h2 id="new-pipeline-syntax-form" tabindex="-1"><a class="header-anchor" href="#new-pipeline-syntax-form" aria-hidden="true">#</a> New pipeline syntax form</h2><p>When writing scripts in Nushell, often folks want to be able to build up a pipeline and line up all the pipes on the left. This is now supported in scripts:</p><div class="language-text ext-text"><pre class="language-text"><code>ls
| where size &gt; 10kb
| length
</code></pre></div><h2 id="default-params" tabindex="-1"><a class="header-anchor" href="#default-params" aria-hidden="true">#</a> Default params</h2><p>A common request as more people tried Nushell was &quot;can we have default values for parameters&quot;. Thanks to the work on the new parser, we can!</p><p>Now, you&#39;re able to set a default value for any optional parameter in your command:</p><div class="language-text ext-text"><pre class="language-text"><code>def add-maybe-hundred [x:int, y = 100] {
  $x + $y
}

let twelve_squared = add-maybe-hundred 44
</code></pre></div><p>Default values also work for flag parameters.</p><h2 id="stdout-stderr-and-exit-codes" tabindex="-1"><a class="header-anchor" href="#stdout-stderr-and-exit-codes" aria-hidden="true">#</a> Stdout, stderr, and exit codes</h2><p>In previous versions of Nushell, you generally had easy access to the stdout of an external command. You could run it, and then create a pipe and work with its output. If you wanted to work with stderr or get its exit code, you didn&#39;t have an easy way to do it.</p><p>With 0.60, we&#39;ve introduced the <code>complete</code> command. Running an external command and then pipeline it to <code>complete</code> runs the external to completion and then gives you the stdout, stderr, and exit code of that external.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; cat CNAME | complete
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 stdout    \u2502 www.nushell.sh \u2502
\u2502 stderr    \u2502                \u2502
\u2502 exit_code \u2502 0              \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>To redirect stderr, you can call through <code>do -i</code>. For example, let&#39;s say we&#39;re calling <code>cat</code> again, this time with a file that doesn&#39;t exist:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; do -i { cat unknown.txt } | complete
\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 stdout    \u2502                                             \u2502
\u2502 stderr    \u2502 cat: unknown.txt: No such file or directory \u2502
\u2502 exit_code \u2502 1                                           \u2502
\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><p>You can also access the last exit code via <code>$env.LAST_EXIT_CODE</code>.</p><h2 id="modules" tabindex="-1"><a class="header-anchor" href="#modules" aria-hidden="true">#</a> Modules</h2><p>With 0.60, you&#39;re now able to create your own modules, allowing you to grow to larger projects with clean interfaces between files. A module can be written either using the <code>module</code> keyword:</p><div class="language-text ext-text"><pre class="language-text"><code>module greetings {
  export def greet [] {
    print &quot;hello!&quot;
  }
}

use greetings greet
greet
</code></pre></div><p>You can also make modules from whole files. We can rewrite the above using a separate file:</p><div class="language-text ext-text"><pre class="language-text"><code># greetings.nu
export def greet [] {
  print &quot;hello!&quot;
}

# main.nu
use greetings.nu greet
greet
</code></pre></div><p>Modules allow you to <code>export</code> custom commands and environment variables to be used in other places.</p><h2 id="make-your-own-errors" tabindex="-1"><a class="header-anchor" href="#make-your-own-errors" aria-hidden="true">#</a> Make your own errors</h2><p>You can also create your own error messages in your custom commands and send these back to the user if they call your command in the wrong way. For example, let&#39;s say you wanted to require that the user pass in a value between 1 and 10:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; def one-to-ten [x: int] {
    let span = (metadata $x).span
    if $x &gt; 10 || $x &lt; 1 {
      error make {
        msg: &quot;Value not between 1 and 10&quot;,
        label: {
          text: &quot;expected a value between 1 and 10&quot;,
          start: $span.start,
          end: $span.end
        }
      }
    } else {
      $&quot;passed ($x)&quot;
    }
  }
&gt; one-to-ten 6
passed 6
&gt; one-to-ten 21
Error:
  \xD7 Value not between 1 and 10
   \u256D\u2500[entry #47:1:1]
 1 \u2502 one-to-ten 21
   \xB7            \u2500\u252C
   \xB7             \u2570\u2500\u2500 expected a value between 1 and 10
   \u2570\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h2><p>To accompany the new functionality in the language, we&#39;ve also added a number of new commands.</p><table><thead><tr><th>category</th><th>command</th></tr></thead><tbody><tr><td>conversions</td><td><code>into bool</code>, <code>into datetime</code>, <code>into decimal</code>, <code>into duration</code></td></tr><tr><td>core</td><td><code>def-env</code>, <code>error make</code>, <code>export def env</code>, <code>export def</code>, <code>export env</code>, <code>export</code>, <code>env</code>, <code>extern</code>, <code>hide</code>, <code>metadata</code>, <code>module</code>, <code>register</code>, <code>use</code>, <code>view-source</code></td></tr><tr><td>filters</td><td><code>columns</code>, <code>group</code>, <code>par-each</code>, <code>transpose</code>, <code>window</code>, <code>roll</code>, <code>roll down</code>, <code>roll left</code>, <code>roll right</code>, <code>upsert</code></td></tr><tr><td>formats</td><td><code>from nuon</code>, <code>to nuon</code></td></tr><tr><td>plugins</td><td><code>gstat</code></td></tr><tr><td>strings</td><td><code>decode</code>, <code>nu-highlight</code>, <code>print</code>, <code>fmt</code></td></tr><tr><td>system</td><td><code>complete</code>, <code>input</code>, <code>keybindings</code>, <code>keybindings default</code>, <code>keybindings list</code>, <code>keybindings listen</code></td></tr><tr><td>viewers</td><td><code>grid</code></td></tr></tbody></table><h1 id="shell-improvements" tabindex="-1"><a class="header-anchor" href="#shell-improvements" aria-hidden="true">#</a> Shell improvements</h1><h2 id="bang-bang-and-more" tabindex="-1"><a class="header-anchor" href="#bang-bang-and-more" aria-hidden="true">#</a> Bang bang and more</h2><p>You can now use <code>!!</code> to run the previous command, or <code>!</code> followed by the row number in the <code>history</code> you&#39;d like to run again.</p>`,81),Y=e("We're working to bring the "),F={href:"https://www.nushell.sh/book/",target:"_blank",rel:"noopener noreferrer"},G=e("book up to date"),j=e(", and it's a good place to find explanations of these improvements. Be sure to also look at the "),H={href:"https://www.nushell.sh/book/command_reference.html",target:"_blank",rel:"noopener noreferrer"},J=e("updated command documentation"),V=e(" for more information on the updated commands."),U=o('<h2 id="better-multiline-editing" tabindex="-1"><a class="header-anchor" href="#better-multiline-editing" aria-hidden="true">#</a> Better multiline editing</h2><p><img src="'+u+`" alt="Multiline editing"></p><p>With the switch to reedline, you can also get better feedback when working on multiline edits. For example, moving to the next line, you&#39;ll now see <code>:::</code> by default preceding the extended input:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; do {
::: echo &quot;hello&quot;
::: echo &quot;world&quot;
::: }
hello
world
</code></pre></div><p>You can configure the <code>:::</code> default value by setting the <code>PROMPT_MULTILINE_INDICATOR</code> environment variable. For example, the above screenshot uses ANSI to give it a bit of flare.</p><h2 id="grid-output" tabindex="-1"><a class="header-anchor" href="#grid-output" aria-hidden="true">#</a> Grid output</h2><p>Nushell also now has a more compact <code>ls</code> representation you can use called <code>grid</code>.</p><p><img src="`+p+`" alt="Grid file listing"></p><h2 id="better-less-support" tabindex="-1"><a class="header-anchor" href="#better-less-support" aria-hidden="true">#</a> Better <code>less</code> support</h2><p>With Nushell, you can now pipe to your preferred pager, and get a page-able output. For example, if you wanted to look at a long table, you can pipe into the <code>less</code> command (or the equivalent for your OS):</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls **/* | less
</code></pre></div><p>Nushell by default will strip the ANSI colors, letting you look at the data with most pagers.</p><h2 id="miette" tabindex="-1"><a class="header-anchor" href="#miette" aria-hidden="true">#</a> Miette</h2>`,13),K=e("We're moving to a new error reporter called "),Z={href:"https://github.com/zkat/miette",target:"_blank",rel:"noopener noreferrer"},X=e("miette"),Q=e(". It's an attractive way of showing errors back while you're working in the REPL or on scripts."),ee=t("p",null,[t("img",{src:g,alt:"Miette error message"})],-1),te=t("h1",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" Reedline")],-1),ae=e("Nushell has changed its line editor and now it uses "),ne={href:"https://github.com/nushell/reedline",target:"_blank",rel:"noopener noreferrer"},oe=e("Reedline"),re=e(". This new line editor allows for improvements and added functionality to the already awesome Nushell experience. Some of the new improvements are:"),se=o('<h2 id="completions-menus" tabindex="-1"><a class="header-anchor" href="#completions-menus" aria-hidden="true">#</a> Completions menus</h2><p><img src="'+m+'" alt="Commands menu"></p><p>Do you want to search for commands using a menu? Nushell has you covered. Press tab and a completion menu will appear with options for you to select. Based on the context different options will be available to you</p><h2 id="history-menu" tabindex="-1"><a class="header-anchor" href="#history-menu" aria-hidden="true">#</a> History menu</h2><p><img src="'+f+'" alt="History menu"></p><p>Your shell history can be easily accessed as well via menus. Using ctrl-x, you can search for a history item or you could just simply navigate the menu until you find what you are looking for.</p><p>You can also use the history menu to compose a pipe with smaller pipes you have used before.</p><p><img src="'+w+`" alt="History complete"></p><h2 id="new-keybindings" tabindex="-1"><a class="header-anchor" href="#new-keybindings" aria-hidden="true">#</a> New Keybindings</h2><p>Now you can define complex keybindings for nushell. For example, say you have changed your config file and want to reload it in your nushell session. You can create a special keybinding to help reload your config file:</p><div class="language-text ext-text"><pre class="language-text"><code>{
    name: reload_config
    modifier: none
    keycode: f5
    mode: emacs
    event: {
      send: executehostcommand,
      cmd: $&quot;source &#39;($nu.config-path)&#39;&quot;
    }
}
</code></pre></div><p>with this keybinding every time you press F5 your config file is sourced and ready to go. Neat!</p><h1 id="introducing-nuon" tabindex="-1"><a class="header-anchor" href="#introducing-nuon" aria-hidden="true">#</a> Introducing &#39;nuon&#39;</h1><p>As the syntax for Nushell has continued to grow and evolve, we noticed that writing data in Nushell was kinda fun. The more we played with it, the more the idea grew that we could create a data file format using the Nushell syntax for data. Thus, &#39;nuon&#39; was born. With it, we now include <code>from nuon</code> and <code>to nuon</code> to help you work with the new .nuon files.</p><p>Nuon is a superset of JSON, allowing you to pass JSON files and parse them as Nuon. Additionally, Nuon supports the data forms from Nushell, including compact tables, durations, filesizes, and more.</p><div class="language-text ext-text"><pre class="language-text"><code># sample.nuon
[
    # The nuon compact table format
    [[a, nuon, table]; [1, 2, 3], [4, 5, 6]],

    # A filesize
    100kib,

    # A duration
    100sec,

    # A date
    2022-01-11,

    # A boolean
    true,

    # A record
    {name: &quot;Bobby&quot;, age: 99},

    # Binary data
    0x[11, ff, ee, 1f]
]
</code></pre></div><p>Nuon is still experimental, but we&#39;re already enjoying using it and are eager to continue to improve on it.</p><h1 id="smaller-release-size" tabindex="-1"><a class="header-anchor" href="#smaller-release-size" aria-hidden="true">#</a> Smaller release size</h1><p>The 0.60 release is significantly smaller than the previous 0.44 release.</p><table><thead><tr><th>release file for 0.44.0</th><th>size</th></tr></thead><tbody><tr><td>nu_0_44_0_linux.tar.gz</td><td>103 MB</td></tr><tr><td>nu_0_44_0_macOS.zip</td><td>79.7 MB</td></tr><tr><td>nu_0_44_0_windows.msi</td><td>55.5 MB</td></tr><tr><td>nu_0_44_0_windows.zip</td><td>57.9 MB</td></tr></tbody></table><table><thead><tr><th>release file for 0.60.0</th><th>size</th></tr></thead><tbody><tr><td>nu_0_60_0_linux.tar.gz</td><td>14.8 MB</td></tr><tr><td>nu_0_60_0_macOS.zip</td><td>12.9 MB</td></tr><tr><td>nu_0_60_0_windows.msi</td><td>10.1 MB</td></tr><tr><td>nu_0_60_0_windows.zip</td><td>10.1 MB</td></tr></tbody></table><h1 id="new-engine" tabindex="-1"><a class="header-anchor" href="#new-engine" aria-hidden="true">#</a> New Engine</h1><p>Nicknamed &quot;engine-q&quot;, the new engine grew from being a rewrite of parsing and evaluation logic into a full rewrite of Nushell itself. Done over 8 months, the final result has many improvements over the 0.44 engine.</p><h2 id="the-new-delta-system" tabindex="-1"><a class="header-anchor" href="#the-new-delta-system" aria-hidden="true">#</a> The new delta system</h2><p>One powerful new aspect of the new engine is its delta system. Deltas, or change sets, let the engine stay immutable except at key phase shifts. For Nushell, after the user has hit enter in the repl, it will phase shift into parsing, then take a delta of what was given by the user. This delta may contain new definitions, new variables, new modules and more. This delta is merged into the permanent state inside of the engine. After this, the engine returns to being immutable as evaluation begins.</p><p>These discrete phase shifts make it possible to limit what mutates while maintaining flexibility, including the ability for users to write parallel code against the engine at any point of evaluation.</p><p>Mutation during evaluation isn&#39;t removed, instead it&#39;s isolated to the stack.</p><h2 id="stacks-the-site-of-change" tabindex="-1"><a class="header-anchor" href="#stacks-the-site-of-change" aria-hidden="true">#</a> Stacks, the site of change</h2><p>For evaluation, stacks are now the site of change in the engine. Stacks are represented as vectors that are passed around during evaluation. They include changes to the environment, newly shadowed variables, and more.</p><h2 id="closing-over-variables" tabindex="-1"><a class="header-anchor" href="#closing-over-variables" aria-hidden="true">#</a> Closing over variables</h2><p>Another important aspect of the engine and the new uses of stacks is an increased focus on correctness for how blocks work with stacks. In 0.60, we&#39;ve eliminated many bugs related to variables scopes, where sometimes variables would &quot;leak&quot; from one scope to the next. Now, a &quot;snapshot&quot; of a variable&#39;s value is captured when the block is taken as a value in the system. This allows us easy access to run the block later and always have the correct state to run it with.</p><h2 id="spans-for-better-errors" tabindex="-1"><a class="header-anchor" href="#spans-for-better-errors" aria-hidden="true">#</a> Spans for better errors</h2><p>Another important area of correctness we wanted to fix from previous versions of Nushell was error spans. Prior Nushell versions struggled with a very common pattern: errors that happen in code that isn&#39;t the code you just typed. For example, aliases that failed, calls to custom commands that were previously defined, and more.</p><p>In 0.60, along with keeping around code that&#39;s still available for the user to call, we also keep around the original span information and original source. This allows us to give better errors for the cases where the error refers to code that&#39;s not the current line.</p><h2 id="bind-once-run-anywhere" tabindex="-1"><a class="header-anchor" href="#bind-once-run-anywhere" aria-hidden="true">#</a> Bind once, run anywhere</h2><p>While improving the parser and engine, we also improved how the two connected to each other. One piece of this was &quot;binding&quot;, that is, how definition sites and use sites connect to one another.</p><p>In the new engine, we use unique identifiers for all forms of definition in the engine, including variables, declarations, aliases, modules and more. During parse time, we bind the use we see against the definition in scope, and replace the use with a reference to the ID we found. With this, we can later safely export or pass the containing block without losing track of what the original code meant.</p><h2 id="faster-than-ever-before" tabindex="-1"><a class="header-anchor" href="#faster-than-ever-before" aria-hidden="true">#</a> Faster than ever before</h2><p>The new engine&#39;s data representation is also quite a bit lighter than before. This allows us to evaluate scripts with less overhead. Early results are already quite positive:</p><table><thead><tr><th>1 million iteration tight loop</th><th>timing</th></tr></thead><tbody><tr><td>0.44</td><td>626ms</td></tr><tr><td>0.60</td><td>239ms</td></tr></tbody></table><table><thead><tr><th>Gradient drawing benchmark</th><th>timing</th></tr></thead><tbody><tr><td>0.44</td><td>168ms</td></tr><tr><td>0.60</td><td>78ms</td></tr></tbody></table><h2 id="going-parallel" tabindex="-1"><a class="header-anchor" href="#going-parallel" aria-hidden="true">#</a> Going parallel</h2><p>The new engine has a fun trick up it&#39;s sleeve: you can effortlessly convert your scripts to run in parallel by changing <code>each</code> calls to <code>par-each</code>.</p><p>For example, if we had a script that opened files that fit a certain pattern and counted their number of lines:</p><div class="language-text ext-text"><pre class="language-text"><code>ls **/*.rs | each { |it|
  let num_lines = (open $it.name | lines | length)
  {name: $it.name, loc: $num_lines}
}
</code></pre></div><p>We can turn this into a script that runs in parallel by changing the <code>each</code> to <code>par-each</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>ls **/*.rs | par-each { |it|
  let num_lines = (open $it.name | lines | length)
  {name: $it.name, loc: $num_lines}
}
</code></pre></div><table><thead><tr><th>Line counter script</th><th>timing</th></tr></thead><tbody><tr><td><code>each</code></td><td>683ms</td></tr><tr><td><code>par-each</code></td><td>447ms</td></tr></tbody></table><p>While further improvements are possible, it&#39;s nice to know we can get such a speedup with a four character change to our script.</p><h1 id="new-plugin-architecture" tabindex="-1"><a class="header-anchor" href="#new-plugin-architecture" aria-hidden="true">#</a> New plugin architecture</h1><p>Rather that scanning for all new plugins on startup like we did with 0.44 (and taking ages to start Nu), the new <code>register</code> command stores the location and signature of your plugins, making it easier to load at start up.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; register -e json ~/.cargo/bin/nu_plugin_extra_query
</code></pre></div><p>Also, the new plugin architecture is now multi-protocol, allowing you to pick the right protocol for your plugin. We currently support json and have experimental support for capnp.</p><p>By the way, you are not limited to write plugins in Rust. You can even create a python script and use it as a Nushell plugin. You only need to specify what command should be used to run the plugin</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; register -e json -s python ~/my_plugins/plugin.py
</code></pre></div><p>Nushell now has three optional plugins (all using &#39;json&#39; serialization):</p><ul><li><code>inc</code>: a value/version incrementor</li><li><code>gstat</code>: a git stats viewer</li><li><code>query</code>: a set of three commands for querying data</li></ul><h1 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h1><p>There are quite a number of breaking changes as we fixed design flaws, cleaned up the design, and rethought how commands should work.</p><table><thead><tr><th>Nushell 0.44</th><th>Nushell 0.60</th></tr></thead><tbody><tr><td>if { } { }</td><td>if { } else { }</td></tr><tr><td>str trim -rc (char nl)</td><td>str trim -r -c (char nl)</td></tr><tr><td>config.toml</td><td>config.nu (find location with <code>$nu.config-path</code>)</td></tr><tr><td>let-env FOO = $nothing</td><td>hide $FOO</td></tr><tr><td>$nu.home-dir</td><td>$nu.home-path</td></tr><tr><td>$nu.temp-dir</td><td>$nu.temp-path</td></tr><tr><td><code>$true</code> and <code>$false</code></td><td>now <code>true</code> and <code>false</code></td></tr><tr><td>config commands</td><td>$config</td></tr><tr><td><code>$nu.env</code></td><td><code>$nu.env</code> is now <code>$env</code></td></tr><tr><td>$nu.path</td><td><code>$env.PATH</code>/<code>$env.Path</code> &lt;- can do more in config.nu</td></tr><tr><td>$nu.lang</td><td>$nu.scope.commands</td></tr><tr><td>str to-int</td><td>into int</td></tr><tr><td><code>$nu.env.PROMPT_COMMAND</code> is a string</td><td><code>$env.PROMPT_COMMAND</code> is a block or a string</td></tr><tr><td>get (has auto flatten)</td><td>get doesn&#39;t auto flatten</td></tr><tr><td>to json</td><td>to json is formatted as &#39;pretty&#39;</td></tr><tr><td>environment variable is a string</td><td>environment variable can be any value</td></tr><tr><td><code>tags</code></td><td><code>tags</code> is now <code>metadata</code></td></tr><tr><td>bigint/bigdecimal</td><td>engine-q uses machine i64 and f64</td></tr><tr><td>File, Dir in <code>ls</code></td><td>file, dir in <code>ls</code></td></tr><tr><td>binaryview</td><td>binaryview has been removed (it may be an optional plugin in the future)</td></tr><tr><td>textview</td><td>textview is removed. Install <code>bat</code> to view source files, or pipe the output into <code>less</code></td></tr><tr><td>dataframe</td><td>dfr</td></tr><tr><td>shells: <code>active</code>, <code>name</code>, <code>path</code> columns</td><td>shells: <code>active</code>, <code>path</code> columns</td></tr><tr><td><code>cd</code> is now scoped</td><td>current directory now comes from <code>PWD</code> in <code>$env</code>. Changing directory in a block or custom command no longer changes the caller&#39;s directory. To do this, return a table that the caller can use to update their env</td></tr><tr><td>char branch, char segment</td><td>char nf-branch, char nf-segment (<code>char</code>s that start with <code>nf-</code> are from nerdfont fonts)</td></tr><tr><td>wasm supported</td><td>wasm support currently not started</td></tr><tr><td><code>enter &lt;filename&gt;</code></td><td>engine-q only supports entering directories</td></tr><tr><td>str to-decimal</td><td>into decimal</td></tr><tr><td><code>pivot</code></td><td>renamed to <code>transpose</code></td></tr><tr><td><code>term size -w -t</code></td><td><code>term size -c -r</code></td></tr><tr><td>selector</td><td>query web</td></tr><tr><td>xpath</td><td>query xml</td></tr><tr><td>config directory name: <code>nu</code></td><td>config directory name: <code>nushell</code></td></tr><tr><td><code>nth 1</code></td><td><code>select 1</code>, <code>select</code> can now down-select rows as well as columns</td></tr><tr><td>match</td><td>match command is now integrated into the find command</td></tr><tr><td><code>each group</code></td><td><code>each</code> and <code>group</code> are now separate</td></tr><tr><td><code>each window</code></td><td><code>each</code> and <code>windows</code> are now separate</td></tr></tbody></table>`,60),ie=e("You can find out more on "),de={href:"https://github.com/nushell/nushell/issues/4305",target:"_blank",rel:"noopener noreferrer"},le=e("the full breaking changes list"),ce=e("."),he=o(`<h1 id="acknowledgements" tabindex="-1"><a class="header-anchor" href="#acknowledgements" aria-hidden="true">#</a> Acknowledgements</h1><p>A big &quot;thank you!&quot; to everyone who helped us build this version of Nushell!</p><div class="language-text ext-text"><pre class="language-text"><code>\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502  0 \u2502 Access                          \u2502
\u2502  1 \u2502 adamijak                        \u2502
\u2502  2 \u2502 ahkrr                           \u2502
\u2502  3 \u2502 ammkrn                          \u2502
\u2502  4 \u2502 Andrew                          \u2502
\u2502  5 \u2502 Andrew Barnes                   \u2502
\u2502  6 \u2502 Andr\xE9s N. Robalino              \u2502
\u2502  7 \u2502 Antonio Natilla                 \u2502
\u2502  8 \u2502 Arthur                          \u2502
\u2502  9 \u2502 Arthur Targaryen                \u2502
\u2502 10 \u2502 Ashish Thapa                    \u2502
\u2502 11 \u2502 Basile Henry                    \u2502
\u2502 12 \u2502 Beno\xEEt Cortier                  \u2502
\u2502 13 \u2502 Charles Dixon                   \u2502
\u2502 14 \u2502 Chris Gillespie                 \u2502
\u2502 15 \u2502 crozbo                          \u2502
\u2502 16 \u2502 Dakota Clark                    \u2502
\u2502 17 \u2502 Daniel Reilly                   \u2502
\u2502 18 \u2502 Daniella Mesquita               \u2502
\u2502 19 \u2502 Darren Schroeder                \u2502
\u2502 20 \u2502 David Lattimore                 \u2502
\u2502 21 \u2502 DawnMagnet                      \u2502
\u2502 22 \u2502 dependabot[bot]                 \u2502
\u2502 23 \u2502 dgalbraith                      \u2502
\u2502 24 \u2502 Dheepak Krishnamurthy           \u2502
\u2502 25 \u2502 Ebuka Agbanyim                  \u2502
\u2502 26 \u2502 eggcaker                        \u2502
\u2502 27 \u2502 Eli Flanagan                    \u2502
\u2502 28 \u2502 Fernando Herrera                \u2502
\u2502 29 \u2502 Gabriel B Gutierrez             \u2502
\u2502 30 \u2502 Gabriel Borges Gutierrez        \u2502
\u2502 31 \u2502 Genna Wingert                   \u2502
\u2502 32 \u2502 Guillermo Lella                 \u2502
\u2502 33 \u2502 Hilmar G\xFAstafsson               \u2502
\u2502 34 \u2502 Homa Wong                       \u2502
\u2502 35 \u2502 hustcer                         \u2502
\u2502 36 \u2502 jacremer                        \u2502
\u2502 37 \u2502 Jae-Heon Ji                     \u2502
\u2502 38 \u2502 jaeheonji                       \u2502
\u2502 39 \u2502 Jakub \u017D\xE1dn\xEDk                    \u2502
\u2502 40 \u2502 Jason Hansen                    \u2502
\u2502 41 \u2502 Jonathan Moore                  \u2502
\u2502 42 \u2502 Joseph T. Lyons                 \u2502
\u2502 43 \u2502 Josh                            \u2502
\u2502 44 \u2502 JT                              \u2502
\u2502 45 \u2502 Julian Aichholz                 \u2502
\u2502 46 \u2502 Justin                          \u2502
\u2502 47 \u2502 Justin Ma                       \u2502
\u2502 48 \u2502 Kamil                           \u2502
\u2502 49 \u2502 Kat March\xE1n                     \u2502
\u2502 50 \u2502 Leo Kettmeir                    \u2502
\u2502 51 \u2502 LordMZTE                        \u2502
\u2502 52 \u2502 Luca Trevisani                  \u2502
\u2502 53 \u2502 Luccas Mateus                   \u2502
\u2502 54 \u2502 Luccas Mateus de Medeiros Gomes \u2502
\u2502 55 \u2502 Marco Zanrosso                  \u2502
\u2502 56 \u2502 Mariano Guerra                  \u2502
\u2502 57 \u2502 Matthew Auld                    \u2502
\u2502 58 \u2502 Maxim Zhiburt                   \u2502
\u2502 59 \u2502 Michael Angerman                \u2502
\u2502 60 \u2502 Michael Rutter                  \u2502
\u2502 61 \u2502 mzanrosso                       \u2502
\u2502 62 \u2502 nibon7                          \u2502
\u2502 63 \u2502 Niklas S                        \u2502
\u2502 64 \u2502 Niklas Schoellhorn              \u2502
\u2502 65 \u2502 onthebridgetonowhere            \u2502
\u2502 66 \u2502 Onur \u015Eahin                      \u2502
\u2502 67 \u2502 panicbit                        \u2502
\u2502 68 \u2502 Ray Henry                       \u2502
\u2502 69 \u2502 Reilly Wood                     \u2502
\u2502 70 \u2502 Robert O&#39;Shea                   \u2502
\u2502 71 \u2502 Sebastian Jung                  \u2502
\u2502 72 \u2502 Sherub Thakur                   \u2502
\u2502 73 \u2502 sholderbach                     \u2502
\u2502 74 \u2502 st155052                        \u2502
\u2502 75 \u2502 Stefan Holderbach               \u2502
\u2502 76 \u2502 Stefan Stanciulescu             \u2502
\u2502 77 \u2502 Tanishq Kancharla               \u2502
\u2502 78 \u2502 Tom Panton                      \u2502
\u2502 79 \u2502 Urgau                           \u2502
\u2502 80 \u2502 WindSoilder                     \u2502
\u2502 81 \u2502 xiuxiu62                        \u2502
\u2502 82 \u2502 Yutaro Ohno                     \u2502
\u2502 83 \u2502 ZetaNumbers                     \u2502
\u2502 84 \u2502 zkldi                           \u2502
\u2502 85 \u2502 \u0218tefan                          \u2502
\u2570\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256F
</code></pre></div><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>With 0.60, we have a solid foundation to build on to reach 1.0. The cleaner architecture and improvements to the language will make way for future improvements, like pattern matching, tasks, and more.</p>`,5);function ue(pe,ge){const a=s("ExternalLinkIcon");return i(),d("div",null,[t("p",null,[t("em",null,[y,t("a",x,[v,n(a)]),_])]),k,N,q,l(" more "),T,t("p",null,[$,t("a",A,[B,n(a)]),M,t("a",W,[I,n(a)]),S,C,O]),z,t("p",null,[E,t("a",L,[R,n(a)]),D]),P,t("p",null,[Y,t("a",F,[G,n(a)]),j,t("a",H,[J,n(a)]),V]),U,t("p",null,[K,t("a",Z,[X,n(a)]),Q]),ee,te,t("p",null,[ae,t("a",ne,[oe,n(a)]),re]),se,t("p",null,[ie,t("a",de,[le,n(a)]),ce]),he])}const fe=r(b,[["render",ue],["__file","2022-03-22-nushell_0_60.html.vue"]]);export{fe as default};
