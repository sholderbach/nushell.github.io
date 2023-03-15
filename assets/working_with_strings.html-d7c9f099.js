import{_ as r,M as l,p as i,q as c,Q as s,t as a,N as e,U as t,a1 as o}from"./framework-344bb0e4.js";const d={},p=o(`<h1 id="working-with-strings" tabindex="-1"><a class="header-anchor" href="#working-with-strings" aria-hidden="true">#</a> Working with strings</h1><p>Strings in Nushell help to hold text data for later use. This can include file names, file paths, names of columns, and much more. Strings are so common that Nushell offers a couple ways to work with them, letting you pick what best matches your needs.</p><h2 id="string-formats-at-a-glance" tabindex="-1"><a class="header-anchor" href="#string-formats-at-a-glance" aria-hidden="true">#</a> String formats at a glance</h2><table><thead><tr><th>Format of string</th><th>Example</th><th>Escapes</th><th>Notes</th></tr></thead><tbody><tr><td>Single-quoted string</td><td><code>&#39;[^\\n]+&#39;</code></td><td>None</td><td>Cannot contain any <code>&#39;</code></td></tr><tr><td>Backtick string</td><td><code>\`[^\\n]+\`</code></td><td>None</td><td>Cannot contain any backticks \`</td></tr><tr><td>Double-quoted string</td><td><code>&quot;The\\nEnd&quot;</code></td><td>C-style backslash escapes</td><td>All backslashes must be escaped</td></tr><tr><td>Bare string</td><td><code>ozymandias</code></td><td>None</td><td>Can only contain &quot;word&quot; characters; Cannot be used in command position</td></tr><tr><td>Single-quoted interpolation</td><td><code>$&#39;Captain ($name)&#39;</code></td><td>None</td><td>Cannot contain any <code>&#39;</code> or unmatched <code>()</code></td></tr><tr><td>Double-quoted interpolation</td><td><code>$&quot;Captain ($name)&quot;</code></td><td>C-style backslash escapes</td><td>All backslashes and <code>()</code> must be escaped</td></tr></tbody></table><h2 id="single-quoted-strings" tabindex="-1"><a class="header-anchor" href="#single-quoted-strings" aria-hidden="true">#</a> Single-quoted strings</h2><p>The simplest string in Nushell is the single-quoted string. This string uses the <code>&#39;</code> character to surround some text. Here&#39;s the text for hello world as a single-quoted string:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;hello world&#39;</span>
hello world
<span class="token operator">&gt;</span> <span class="token string">&#39;The
end&#39;</span>
The
end
</code></pre></div><p>Single-quoted strings don&#39;t do anything to the text they&#39;re given, making them ideal for holding a wide range of text data.</p><h2 id="backtick-quoted-strings" tabindex="-1"><a class="header-anchor" href="#backtick-quoted-strings" aria-hidden="true">#</a> Backtick-quoted strings</h2><p>Single-quoted strings, due to not supporting any escapes, cannot contain any single-quote characters themselves. As an alternative, backtick strings using the <code>\`</code> character also exist:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token variable"><span class="token variable">\`</span>no man&#39;s land<span class="token variable">\`</span></span>
no <span class="token function">man</span><span class="token string">&#39;s land
&gt; \`no man&#39;</span>s
land\`
no man&#39;s
land
</code></pre></div><p>Of course, backtick strings cannot contain any backticks themselves. Otherwise, they are identical to single-quoted strings.</p><h2 id="double-quoted-strings" tabindex="-1"><a class="header-anchor" href="#double-quoted-strings" aria-hidden="true">#</a> Double-quoted Strings</h2><p>For more complex strings, Nushell also offers double-quoted strings. These strings use the <code>&quot;</code> character to surround text. They also support the ability escape characters inside the text using the <code>\\</code> character.</p><p>For example, we could write the text hello followed by a new line and then world, using escape characters and a double-quoted string:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;hello<span class="token entity" title="\\n">\\n</span>world&quot;</span>
hello
world
</code></pre></div><p>Escape characters let you quickly add in a character that would otherwise be hard to type.</p><p>Nushell currently supports the following escape characters:</p><ul><li><code>\\&quot;</code> - double-quote character</li><li><code>\\&#39;</code> - single-quote character</li><li><code>\\\\</code> - backslash</li><li><code>\\/</code> - forward slash</li><li><code>\\b</code> - backspace</li><li><code>\\f</code> - formfeed</li><li><code>\\r</code> - carriage return</li><li><code>\\n</code> - newline (line feed)</li><li><code>\\t</code> - tab</li><li><code>\\u{X...}</code> - a single unicode character, where X... is 1-6 hex digits (0-9, A-F)</li></ul><h2 id="bare-strings" tabindex="-1"><a class="header-anchor" href="#bare-strings" aria-hidden="true">#</a> Bare strings</h2><p>Like other shell languages (but unlike most other programming languages) strings consisting of a single &#39;word&#39; can also be written without any quotes:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> print hello
hello
<span class="token operator">&gt;</span> <span class="token punctuation">[</span>hello<span class="token punctuation">]</span> <span class="token operator">|</span> describe
list<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>
</code></pre></div><p>But be careful - if you use a bare word plainly on the command line (that is, not inside a data structure or used as a command parameter) or inside round brackets <code>(</code> <code>)</code>, it will be interpreted as an external command:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; hello
Error: nu::shell::external_command

  × External command failed
   ╭─[entry #5:1:1]
 1 │ hello
   · ──┬──
   ·   ╰── executable was not found
   ╰────
  help: program not found
</code></pre></div><p>Also, many bare words have special meaning in nu, and so will not be interpreted as a string:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; true | describe
bool
&gt; [true] | describe
list&lt;bool&gt;
&gt; [trueX] | describe
list&lt;string&gt;
&gt; trueX | describe
Error: nu::shell::external_command

  × External command failed
   ╭─[entry #5:1:1]
 1 │ trueX | describe
   · ──┬──
   ·   ╰── executable was not found
   ╰────
  help: program not found
</code></pre></div><p>So, while bare strings are useful for informal command line usage, when programming more formally in nu, you should generally use quotes.</p><h2 id="strings-as-external-commands" tabindex="-1"><a class="header-anchor" href="#strings-as-external-commands" aria-hidden="true">#</a> Strings as external commands</h2><p>You can place the <code>^</code> sigil in front of any string (including a variable) to have Nushell execute the string as if it was an external command:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>^<span class="token string">&#39;C:\\Program Files\\exiftool.exe&#39;</span>

<span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> foo <span class="token operator">=</span> <span class="token string">&#39;C:\\Program Files\\exiftool.exe&#39;</span>
<span class="token operator">&gt;</span> ^<span class="token variable">$foo</span>
</code></pre></div>`,30),h=s("code",null,"run-external",-1),u=o(`<h2 id="string-interpolation" tabindex="-1"><a class="header-anchor" href="#string-interpolation" aria-hidden="true">#</a> String interpolation</h2><p>More complex string use cases also need a new form of string: string interpolation. This is a way of building text from both raw text and the result of running expressions. String interpolation combines the results together, giving you a new string.</p><p>String interpolation uses <code>$&quot; &quot;</code> and <code>$&#39; &#39;</code> as ways to wrap interpolated text.</p><p>For example, let&#39;s say we have a variable called <code>$name</code> and we want to greet the name of the person contained in this variable:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> name <span class="token operator">=</span> <span class="token string">&quot;Alice&quot;</span>
<span class="token operator">&gt;</span> $<span class="token string">&quot;greetings, (<span class="token variable">$name</span>)&quot;</span>
greetings, Alice
</code></pre></div><p>By wrapping expressions in <code>()</code>, we can run them to completion and use the results to help build the string.</p><p>String interpolation has both a single-quoted, <code>$&#39; &#39;</code>, and a double-quoted, <code>$&quot; &quot;</code>, form. These correspond to the single-quoted and double-quoted strings: single-quoted string interpolation doesn&#39;t support escape characters while double-quoted string interpolation does.</p><p>As of version 0.61, interpolated strings support escaping parentheses, so that the <code>(</code> and <code>)</code> characters may be used in a string without Nushell trying to evaluate what appears between them:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> $<span class="token string">&quot;2 + 2 is (2 + 2) \\(you guessed it!)&quot;</span>
<span class="token number">2</span> + <span class="token number">2</span> is <span class="token number">4</span> <span class="token punctuation">(</span>you guessed it<span class="token operator">!</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="splitting-strings" tabindex="-1"><a class="header-anchor" href="#splitting-strings" aria-hidden="true">#</a> Splitting strings</h2>`,10),g=s("code",null,"split row",-1),m=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;red,green,blue&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> row <span class="token string">&quot;,&quot;</span>
╭───┬───────╮
│ <span class="token number">0</span> │ red   │
│ <span class="token number">1</span> │ green │
│ <span class="token number">2</span> │ blue  │
╰───┴───────╯
</code></pre></div>`,1),k=s("code",null,"split column",-1),b=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;red,green,blue&quot;</span> <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;,&quot;</span>
╭───┬─────────┬─────────┬─────────╮
│ <span class="token comment"># │ column1 │ column2 │ column3 │</span>
├───┼─────────┼─────────┼─────────┤
│ <span class="token number">0</span> │ red     │ green   │ blue    │
╰───┴─────────┴─────────┴─────────╯
</code></pre></div>`,1),f=s("code",null,"split chars",-1),_=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;aeiou&#39;</span> <span class="token operator">|</span> <span class="token function">split</span> chars
╭───┬───╮
│ <span class="token number">0</span> │ a │
│ <span class="token number">1</span> │ e │
│ <span class="token number">2</span> │ i │
│ <span class="token number">3</span> │ o │
│ <span class="token number">4</span> │ u │
╰───┴───╯
</code></pre></div>`,1),x={id:"the-str-command",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#the-str-command","aria-hidden":"true"},"#",-1),w=s("code",null,"str",-1),y=s("code",null,"str",-1),q=s("code",null,"help str",-1),N=s("code",null,"str contains",-1),T=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;hello world&quot;</span> <span class="token operator">|</span> str contains <span class="token string">&quot;o wo&quot;</span>
<span class="token boolean">true</span>
</code></pre></div><p>(You might also prefer, for brevity, the <code>=~</code> operator (described below).)</p><h3 id="trimming-strings" tabindex="-1"><a class="header-anchor" href="#trimming-strings" aria-hidden="true">#</a> Trimming strings</h3>`,3),S=s("code",null,"str trim",-1),C=s("code",null,"str trim",-1),$=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;       My   string   &#39;</span> <span class="token operator">|</span> str trim
My   string
</code></pre></div><p>You can specify on which side the trimming occurs with the <code>--right</code> and <code>--left</code> options. (<code>-r</code> and <code>-l</code> being the short-form options respectively)</p><p>To trim a specific character, use <code>--char &lt;Character&gt;</code> or <code>-c &lt;Character&gt;</code> to specify the character to trim.</p><p>Here&#39;s an example of all the options in action:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;=== Nu shell ===&#39;</span> <span class="token operator">|</span> str trim <span class="token parameter variable">-r</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;=&#39;</span>
<span class="token operator">==</span><span class="token operator">=</span> Nu shell
</code></pre></div><h3 id="substrings" tabindex="-1"><a class="header-anchor" href="#substrings" aria-hidden="true">#</a> Substrings</h3><p>Substrings are slices of a string. They have a startpoint and an endpoint. Here&#39;s an example of using a substring:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;o&#39;</span>
<span class="token number">4</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;r&#39;</span>
<span class="token number">8</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;Hello World!&#39;</span> <span class="token operator">|</span> str substring <span class="token string">&#39;4,8&#39;</span>
o Wo
</code></pre></div><h3 id="string-padding" tabindex="-1"><a class="header-anchor" href="#string-padding" aria-hidden="true">#</a> String padding</h3>`,9),A=s("code",null,"str lpad",-1),F=s("code",null,"str rpad",-1),B=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> str lpad <span class="token parameter variable">-l</span> <span class="token number">10</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;0&#39;</span>
0000001234
<span class="token operator">&gt;</span> <span class="token string">&#39;1234&#39;</span> <span class="token operator">|</span> str rpad <span class="token parameter variable">-l</span> <span class="token number">10</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">|</span> str length
<span class="token number">10</span>
</code></pre></div><h3 id="reversing-strings" tabindex="-1"><a class="header-anchor" href="#reversing-strings" aria-hidden="true">#</a> Reversing strings</h3>`,2),P=s("code",null,"str reverse",-1),E=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell&#39;</span> <span class="token operator">|</span> str reverse
llehsuN
<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;Nushell&#39;</span> <span class="token string">&#39;is&#39;</span> <span class="token string">&#39;cool&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str reverse
╭───┬─────────╮
│ <span class="token number">0</span> │ llehsuN │
│ <span class="token number">1</span> │ si      │
│ <span class="token number">2</span> │ looc    │
╰───┴─────────╯
</code></pre></div><h2 id="string-parsing" tabindex="-1"><a class="header-anchor" href="#string-parsing" aria-hidden="true">#</a> String parsing</h2>`,2),L=s("code",null,"parse",-1),Y=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell 0.80&#39;</span> <span class="token operator">|</span> parse <span class="token string">&#39;{shell} {version}&#39;</span>
╭───┬─────────┬─────────╮
│ <span class="token comment"># │  shell  │ version │</span>
├───┼─────────┼─────────┤
│ <span class="token number">0</span> │ Nushell │ <span class="token number">0.80</span>    │
╰───┴─────────┴─────────╯
<span class="token operator">&gt;</span> <span class="token string">&#39;where all data is structured!&#39;</span> <span class="token operator">|</span> parse <span class="token parameter variable">--regex</span> <span class="token string">&#39;(?P&lt;subject&gt;\\w*\\s?\\w+) is (?P&lt;adjective&gt;\\w+)&#39;</span>
╭───┬──────────┬────────────╮
│ <span class="token comment"># │ subject  │ adjective  │</span>
├───┼──────────┼────────────┤
│ <span class="token number">0</span> │ all data │ structured │
╰───┴──────────┴────────────╯
</code></pre></div>`,1),W=s("code",null,"from csv",-1),H=s("code",null,"from tsv",-1),M=s("code",null,"from ssv",-1),R=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;acronym,long<span class="token entity" title="\\n">\\n</span>APL,A Programming Language&quot;</span> <span class="token operator">|</span> from csv
╭───┬─────────┬────────────────────────╮
│ <span class="token comment"># │ acronym │          long          │</span>
├───┼─────────┼────────────────────────┤
│ <span class="token number">0</span> │ APL     │ A Programming Language │
╰───┴─────────┴────────────────────────╯
<span class="token operator">&gt;</span> <span class="token string">&quot;name  duration<span class="token entity" title="\\n">\\n</span>onestop.mid  4:06&quot;</span> <span class="token operator">|</span> from ssv
╭───┬─────────────┬──────────╮
│ <span class="token comment"># │    name     │ duration │</span>
├───┼─────────────┼──────────┤
│ <span class="token number">0</span> │ onestop.mid │ <span class="token number">4</span>:06     │
╰───┴─────────────┴──────────╯
<span class="token operator">&gt;</span> <span class="token string">&quot;rank<span class="token entity" title="\\t">\\t</span>suit<span class="token entity" title="\\n">\\n</span>Jack<span class="token entity" title="\\t">\\t</span>Spades<span class="token entity" title="\\n">\\n</span>Ace<span class="token entity" title="\\t">\\t</span>Clubs&quot;</span> <span class="token operator">|</span> from tsv
╭───┬──────┬────────╮
│ <span class="token comment"># │ rank │  suit  │</span>
├───┼──────┼────────┤
│ <span class="token number">0</span> │ Jack │ Spades │
│ <span class="token number">1</span> │ Ace  │ Clubs  │
╰───┴──────┴────────╯
</code></pre></div><h2 id="string-comparison" tabindex="-1"><a class="header-anchor" href="#string-comparison" aria-hidden="true">#</a> String comparison</h2><p>In addition to the standard <code>==</code> and <code>!=</code> operators, a few operators exist for specifically comparing strings to one another.</p><p>Those familiar with Bash and Perl will recognise the regex comparison operators:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;APL&#39;</span> <span class="token operator">=~</span> <span class="token string">&#39;^\\w{0,3}$&#39;</span>
<span class="token boolean">true</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;FORTRAN&#39;</span> <span class="token operator">!</span>~ <span class="token string">&#39;^\\w{0,3}$&#39;</span>
<span class="token boolean">true</span>
</code></pre></div><p>Two other operators exist for simpler comparisons:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;JavaScript&#39;</span> starts-with <span class="token string">&#39;Java&#39;</span>
<span class="token boolean">true</span>
<span class="token operator">&gt;</span> <span class="token string">&#39;OCaml&#39;</span> ends-with <span class="token string">&#39;Caml&#39;</span>
<span class="token boolean">true</span>
</code></pre></div><h2 id="converting-strings" tabindex="-1"><a class="header-anchor" href="#converting-strings" aria-hidden="true">#</a> Converting strings</h2><p>There are multiple ways to convert strings to and from other types.</p><h3 id="to-string" tabindex="-1"><a class="header-anchor" href="#to-string" aria-hidden="true">#</a> To string</h3>`,10),U=s("code",null,"into string",-1),X=s("code",null,"123 | into string",-1),j=s("li",null,[a("Using string interpolation. e.g. "),s("code",null,"$'(123)'")],-1),J=s("code",null,"build-string",-1),O=s("code",null,"build-string (123)",-1),V=s("h3",{id:"from-string",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#from-string","aria-hidden":"true"},"#"),a(" From string")],-1),D=s("code",null,"into <type>",-1),I=s("code",null,"'123' | into int",-1),z=s("h2",{id:"coloring-strings",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#coloring-strings","aria-hidden":"true"},"#"),a(" Coloring strings")],-1),Q=s("code",null,"ansi",-1),G=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">"),a(),s("span",{class:"token string"},"$'(ansi purple_bold)This text is a bold purple!(ansi reset)'"),a(`
`)])])],-1),K=s("p",null,[s("code",null,"ansi purple_bold"),a(" makes the text a bold purple "),s("code",null,"ansi reset"),a(" resets the coloring to the default. (Tip: You should always end colored strings with "),s("code",null,"ansi reset"),a(")")],-1);function Z(ss,as){const n=l("RouterLink");return i(),c("div",null,[p,s("p",null,[a("You can also use the "),e(n,{to:"/commands/docs/run-external.html"},{default:t(()=>[h]),_:1}),a(" command for this purpose, which provides additional flags and options.")]),u,s("p",null,[a("The "),e(n,{to:"/commands/docs/split_row.html"},{default:t(()=>[g]),_:1}),a(" command creates a list from a string based on a delimiter.")]),m,s("p",null,[a("The "),e(n,{to:"/commands/docs/split_column.html"},{default:t(()=>[k]),_:1}),a(" command will create a table from a string based on a delimiter. This applies generic column names to the table.")]),b,s("p",null,[a("Finally, the "),e(n,{to:"/commands/docs/split_chars.html"},{default:t(()=>[f]),_:1}),a(" command will split a string into a list of characters.")]),_,s("h2",x,[v,a(" The "),e(n,{to:"/commands/docs/str.html"},{default:t(()=>[w]),_:1}),a(" command")]),s("p",null,[a("Many string functions are subcommands of the "),e(n,{to:"/commands/docs/str.html"},{default:t(()=>[y]),_:1}),a(" command. You can get a full list using "),q,a(".")]),s("p",null,[a("For example, you can look if a string contains a particular substring using "),e(n,{to:"/commands/docs/str_contains.html"},{default:t(()=>[N]),_:1}),a(":")]),T,s("p",null,[a("You can trim the sides of a string with the "),e(n,{to:"/commands/docs/str_trim.html"},{default:t(()=>[S]),_:1}),a(" command. By default, the "),e(n,{to:"/commands/docs/str_trim.html"},{default:t(()=>[C]),_:1}),a(" commands trims whitespace from both sides of the string. For example:")]),$,s("p",null,[a("With the "),e(n,{to:"/commands/docs/str_lpad.html"},{default:t(()=>[A]),_:1}),a(" and "),e(n,{to:"/commands/docs/str_rpad.html"},{default:t(()=>[F]),_:1}),a(" commands you can add padding to a string. Padding adds characters to string until it's a certain length. For example:")]),B,s("p",null,[a("This can be done easily with the "),e(n,{to:"/commands/docs/str_reverse.html"},{default:t(()=>[P]),_:1}),a(" command.")]),E,s("p",null,[a("With the "),e(n,{to:"/commands/docs/parse.html"},{default:t(()=>[L]),_:1}),a(" command you can parse a string into columns. For example:")]),Y,s("p",null,[a("If a string is known to contain comma-separated, tab-separated or multi-space-separated data, you can use "),e(n,{to:"/commands/docs/from_csv.html"},{default:t(()=>[W]),_:1}),a(", "),e(n,{to:"/commands/docs/from_tsv.html"},{default:t(()=>[H]),_:1}),a(" or "),e(n,{to:"/commands/docs/from_ssv.html"},{default:t(()=>[M]),_:1}),a(":")]),R,s("ol",null,[s("li",null,[a("Using "),e(n,{to:"/commands/docs/into_string.html"},{default:t(()=>[U]),_:1}),a(". e.g. "),X]),j,s("li",null,[a("Using "),e(n,{to:"/commands/docs/build-string.html"},{default:t(()=>[J]),_:1}),a(". e.g. "),O])]),V,s("ol",null,[s("li",null,[a("Using "),e(n,{to:"/commands/docs/into.html"},{default:t(()=>[D]),_:1}),a(". e.g. "),I])]),z,s("p",null,[a("You can color strings with the "),e(n,{to:"/commands/docs/ansi.html"},{default:t(()=>[Q]),_:1}),a(" command. For example:")]),G,K])}const es=r(d,[["render",Z],["__file","working_with_strings.html.vue"]]);export{es as default};
