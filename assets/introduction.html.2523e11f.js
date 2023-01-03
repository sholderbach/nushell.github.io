import{_ as p,z as l,A as c,X as s,C as n,T as e,$ as t,a6 as o,Q as i}from"./framework.3d018c9f.js";const r={},u=s("h1",{id:"quick-tour",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#quick-tour","aria-hidden":"true"},"#"),n(" Quick Tour")],-1),m=s("p",null,"Nu takes cues from a lot of familiar territory: traditional shells like bash, object based shells like PowerShell, gradually typed languages like TypeScript, functional programming, systems programming, and more. But rather than trying to be a jack of all trades, Nu focuses its energy on doing a few things well:",-1),d=s("ul",null,[s("li",null,"Being a flexible cross-platform shell with a modern feel"),s("li",null,"Solving problems as a modern programming language that works with the structure of your data"),s("li",null,"Giving clear error messages and clean IDE support")],-1),h=s("p",null,"The easiest way to see what Nu can do is to start with some examples, so let's dive in.",-1),k=s("code",null,"ls",-1),b=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
╭────┬───────────────────────┬──────┬───────────┬─────────────╮
│ <span class="token comment">#  │         name          │ type │   size    │  modified   │</span>
├────┼───────────────────────┼──────┼───────────┼─────────────┤
│  <span class="token number">0</span> │ <span class="token number">404</span>.html              │ <span class="token function">file</span> │     <span class="token number">429</span> B │ <span class="token number">3</span> days ago  │
│  <span class="token number">1</span> │ CONTRIBUTING.md       │ <span class="token function">file</span> │     <span class="token number">955</span> B │ <span class="token number">8</span> mins ago  │
│  <span class="token number">2</span> │ Gemfile               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">3</span> │ Gemfile.lock          │ <span class="token function">file</span> │   <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">4</span> │ LICENSE               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">5</span> │ README.md             │ <span class="token function">file</span> │     <span class="token number">213</span> B │ <span class="token number">3</span> days ago  │
<span class="token punctuation">..</span>.
</code></pre></div><p>The table is more than just showing the directory in a different way. Just like tables in a spreadsheet, this table allows us to work with the data more interactively.</p>`,2),f=s("code",null,"ls",-1),g=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
╭────┬───────────────────────┬──────┬───────────┬─────────────╮
│ <span class="token comment">#  │         name          │ type │   size    │  modified   │</span>
├────┼───────────────────────┼──────┼───────────┼─────────────┤
│  <span class="token number">0</span> │ Gemfile.lock          │ <span class="token function">file</span> │   <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">1</span> │ SUMMARY.md            │ <span class="token function">file</span> │   <span class="token number">3.7</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">2</span> │ Gemfile               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">3</span> │ LICENSE               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">4</span> │ CONTRIBUTING.md       │ <span class="token function">file</span> │     <span class="token number">955</span> B │ <span class="token number">9</span> mins ago  │
│  <span class="token number">5</span> │ books.md              │ <span class="token function">file</span> │     <span class="token number">687</span> B │ <span class="token number">3</span> days ago  │
<span class="token punctuation">..</span>.
</code></pre></div>`,1),_=s("code",null,"ls",-1),w=s("code",null,"sort-by",-1),y=s("code",null,"ls",-1),v=s("code",null,"reverse",-1),x=s("code",null,"ls",-1),B=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
╭───┬───────────────────┬──────┬─────────┬────────────╮
│ <span class="token comment"># │       name        │ type │  size   │  modified  │</span>
├───┼───────────────────┼──────┼─────────┼────────────┤
│ <span class="token number">0</span> │ Gemfile           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">1</span> │ Gemfile.lock      │ <span class="token function">file</span> │ <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">2</span> │ LICENSE           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">3</span> │ SUMMARY.md        │ <span class="token function">file</span> │ <span class="token number">3.7</span> KiB │ <span class="token number">3</span> days ago │
╰───┴───────────────────┴──────┴─────────┴────────────╯
</code></pre></div><p>Just as in the Unix philosophy, being able to have commands talk to each other gives us ways to mix-and-match in many different combinations. Let&#39;s look at a different command:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮
│  <span class="token comment">#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │</span>
├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤
│   <span class="token number">0</span> │ <span class="token number">7570</span> │ nu                   │ Running │  <span class="token number">1.96</span> │  <span class="token number">23.2</span> MiB │ <span class="token number">32.8</span> GiB │
│   <span class="token number">1</span> │ <span class="token number">3533</span> │ remindd              │ Sleep   │  <span class="token number">0.00</span> │ <span class="token number">103.6</span> MiB │ <span class="token number">32.3</span> GiB │
│   <span class="token number">2</span> │ <span class="token number">3495</span> │ TVCacheExtension     │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">11.9</span> MiB │ <span class="token number">32.2</span> GiB │
│   <span class="token number">3</span> │ <span class="token number">3490</span> │ MusicCacheExtension  │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">12.9</span> MiB │ <span class="token number">32.2</span> GiB │
<span class="token punctuation">..</span>.
</code></pre></div>`,3),N=s("code",null,"ps",-1),T=s("code",null,"ls",-1),G=s("code",null,"ps",-1),S=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮
│ <span class="token comment"># │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │</span>
├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">1583</span> │ Terminal       │ Running │  <span class="token number">20.69</span> │ <span class="token number">127.8</span> MiB │ <span class="token number">33.0</span> GiB │
│ <span class="token number">1</span> │  <span class="token number">579</span> │ photoanalysisd │ Running │ <span class="token number">139.50</span> │  <span class="token number">99.9</span> MiB │ <span class="token number">32.3</span> GiB │
╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯
</code></pre></div>`,1),j=s("code",null,"ls",-1),C=s("code",null,"ps",-1),R=s("code",null,"date",-1),E=s("code",null,"sys",-1),M=o(`<p>Running <code>date now</code> gives us information about the current day and time:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 <span class="token parameter variable">-08:00</span>
</code></pre></div><p>To get the date as a table we can feed it into <code>date to-table</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
╭───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────╮
│ <span class="token comment"># │ year │ month │ day │ hour │ minute │ second │ timezone │</span>
├───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">2022</span> │     <span class="token number">3</span> │   <span class="token number">7</span> │   <span class="token number">14</span> │     <span class="token number">45</span> │      <span class="token number">3</span> │ <span class="token parameter variable">-08:00</span>   │
╰───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────╯
</code></pre></div>`,4),I=s("code",null,"sys",-1),K=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
╭───────┬───────────────────╮
│ <span class="token function">host</span>  │ <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> │
│ cpu   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
│ disks │ <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    │
│ mem   │ <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> │
│ temp  │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     │
│ net   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
╰───────┴───────────────────╯
</code></pre></div>`,1),L=s("code",null,"sys",-1),U=s("em",null,"get",-1),z=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
╭────────────────┬────────────────────────╮
│ name           │ Debian GNU/Linux       │
│ os version     │ <span class="token number">11</span>                     │
│ kernel version │ <span class="token number">5.10</span>.92-v8+            │
│ <span class="token function">hostname</span>       │ lifeless               │
│ <span class="token function">uptime</span>         │ 19day 21hr 34min 45sec │
│ sessions       │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          │
╰────────────────┴────────────────────────╯
</code></pre></div>`,1),A=s("code",null,"get",-1),Y=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
╭───┬────╮
│ <span class="token number">0</span> │ jt │
╰───┴────╯
</code></pre></div><p>Right now, there&#39;s just one user on the system named &quot;jt&quot;. You&#39;ll notice that we can pass a column path (the <code>host.sessions.name</code> part) and not just the name of the column. Nu will take the column path and go to the corresponding bit of data in the table.</p><p>You might have noticed something else that&#39;s different. Rather than having a table of data, we have just a single element: the string &quot;jt&quot;. Nu works with both tables of data as well as strings. Strings are an important part of working with commands outside of Nu.</p>`,3),q=s("code",null,"echo",-1),V=s("code",null,"^",-1),W=s("code",null,"echo",-1),D=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div><p>If this looks very similar to what we had before, you have a keen eye! It is similar, but with one important difference: we&#39;ve called <code>^echo</code> with the value we saw earlier. This allows us to pass data out of Nu into <code>echo</code> (or any command outside of Nu, like <code>git</code> for example).</p><h3 id="getting-help" tabindex="-1"><a class="header-anchor" href="#getting-help" aria-hidden="true">#</a> Getting Help</h3>`,3),J=s("code",null,"help",-1),P=s("code",null,"help commands",-1),F=s("code",null,"help -f <topic>",-1),H=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
Explore and manipulate paths.

There are three ways to represent a path:

* As a path literal, e.g., <span class="token string">&#39;/home/viking/spam.txt&#39;</span>
* As a structured path: a table with <span class="token string">&#39;parent&#39;</span>, <span class="token string">&#39;stem&#39;</span>, and <span class="token string">&#39;extension&#39;</span> <span class="token punctuation">(</span>and
* <span class="token string">&#39;prefix&#39;</span> on Windows<span class="token punctuation">)</span> columns. This <span class="token function">format</span> is produced by the <span class="token string">&#39;path parse&#39;</span>
  subcommand.
* As an inner list of path parts, e.g., <span class="token string">&#39;[[ / home viking spam.txt ]]&#39;</span><span class="token builtin class-name">.</span>
  Splitting into parts is <span class="token keyword">done</span> by the <span class="token variable"><span class="token variable">\`</span>path <span class="token function">split</span><span class="token variable">\`</span></span> command.

All subcommands accept all three variants as an input. Furthermore, the <span class="token string">&#39;path
join&#39;</span> subcommand can be used to <span class="token function">join</span> the structured path or path parts back into
the path literal.

Usage:
  <span class="token operator">&gt;</span> path

Subcommands:
  path <span class="token function">basename</span> - Get the final component of a path
  path <span class="token function">dirname</span> - Get the parent directory of a path
  path exists - Check whether a path exists
  path <span class="token function">expand</span> - Try to <span class="token function">expand</span> a path to its absolute form
  path <span class="token function">join</span> - Join a structured path or a list of path parts.
  path parse - Convert a path into structured data.
  path relative-to - Get a path as relative to another path.
  path <span class="token function">split</span> - Split a path into parts by a separator.
  path <span class="token builtin class-name">type</span> - Get the <span class="token builtin class-name">type</span> of the object a path refers to <span class="token punctuation">(</span>e.g., file, dir, symlink<span class="token punctuation">)</span>

Flags:
  -h, <span class="token parameter variable">--help</span>
      Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,1);function O(Q,$){const a=i("RouterLink");return l(),c("div",null,[u,m,d,h,s("p",null,[n("The first thing you'll notice when you run a command like "),e(a,{to:"/book/commands/ls.html"},{default:t(()=>[k]),_:1}),n(" is that instead of a block of text coming back, you get a structured table.")]),b,s("p",null,[n("The first thing we'll do is to sort our table by size. To do this, we'll take the output from "),e(a,{to:"/book/commands/ls.html"},{default:t(()=>[f]),_:1}),n(" and feed it into a command that can sort tables based on the contents of a column.")]),g,s("p",null,[n("You can see that to make this work we didn't pass commandline arguments to "),e(a,{to:"/book/commands/ls.html"},{default:t(()=>[_]),_:1}),n(". Instead, we used the "),w,n(" command that Nu provides to do the sorting of the output of the "),e(a,{to:"/book/commands/ls.html"},{default:t(()=>[y]),_:1}),n(" command. To see the biggest files on top, we also used "),e(a,{to:"/book/commands/reverse.html"},{default:t(()=>[v]),_:1}),n(".")]),s("p",null,[n("Nu provides many commands that can work on tables. For example, we could filter the contents of the "),e(a,{to:"/book/commands/ls.html"},{default:t(()=>[x]),_:1}),n(" table so that it only shows files over 1 kilobyte:")]),B,s("p",null,[n("You may be familiar with the "),e(a,{to:"/book/commands/ps.html"},{default:t(()=>[N]),_:1}),n(" command if you've used Linux. With it, we can get a list of all the current processes that the system is running, what their status is, and what their name is. We can also see the CPU load for the processes.")]),s("p",null,[n("What if we wanted to show the processes that were actively using the CPU? Just like we did with the "),e(a,{to:"/book/commands/ls.html"},{default:t(()=>[T]),_:1}),n(" command earlier, we can also work with the table that the "),e(a,{to:"/book/commands/ps.html"},{default:t(()=>[G]),_:1}),n(" command gives back to us:")]),S,s("p",null,[n("So far, we've been using "),e(a,{to:"/book/commands/ls.html"},{default:t(()=>[j]),_:1}),n(" and "),e(a,{to:"/book/commands/ps.html"},{default:t(()=>[C]),_:1}),n(" to list files and processes. Nu also offers other commands that can create tables of useful information. Next, let's explore "),e(a,{to:"/book/commands/date.html"},{default:t(()=>[R]),_:1}),n(" and "),e(a,{to:"/book/commands/sys.html"},{default:t(()=>[E]),_:1}),n(".")]),M,s("p",null,[n("Running "),e(a,{to:"/book/commands/sys.html"},{default:t(()=>[I]),_:1}),n(" gives information about the system that Nu is running on:")]),K,s("p",null,[n("This is a bit different than the tables we saw before. The "),e(a,{to:"/book/commands/sys.html"},{default:t(()=>[L]),_:1}),n(" command gives us a table that contains structured tables in the cells instead of simple values. To take a look at this data, we need to "),U,n(" the column to view:")]),z,s("p",null,[n("The "),e(a,{to:"/book/commands/get.html"},{default:t(()=>[A]),_:1}),n(` command lets us jump into the contents of a column of the table. Here, we're looking into the "host" column, which contains information about the host that Nu is running on. The name of the OS, the hostname, the CPU, and more. Let's get the name of the users on the system:`)]),Y,s("p",null,[n("Let's see how strings work outside of Nu in action. We'll take our example from before and run the external "),q,n(" command (the "),V,n(" tells Nu to not use the built-in "),e(a,{to:"/book/commands/echo.html"},{default:t(()=>[W]),_:1}),n(" command):")]),D,s("p",null,[n("Help text for any of Nu's built-in commands can be discovered with the "),e(a,{to:"/book/commands/help.html"},{default:t(()=>[J]),_:1}),n(" command. To see all commands, run "),P,n(". You can also search for a topic by doing "),F,n(".")]),H])}const Z=p(r,[["render",O],["__file","introduction.html.vue"]]);export{Z as default};
