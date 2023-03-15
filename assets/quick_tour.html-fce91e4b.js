import{_ as p,M as l,p as c,q as i,Q as s,t as n,N as e,U as t,a1 as o}from"./framework-344bb0e4.js";const u={},r=s("h1",{id:"quick-tour",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#quick-tour","aria-hidden":"true"},"#"),n(" Quick Tour")],-1),d=s("p",null,"The easiest way to see what Nu can do is to start with some examples, so let's dive in.",-1),m=s("code",null,"ls",-1),h=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
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
</code></pre></div><p>The table does more than show the directory in a different way. Just like tables in a spreadsheet, this table allows us to work with the data more interactively.</p>`,2),k=s("code",null,"ls",-1),b=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
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
</code></pre></div>`,1),f=s("code",null,"ls",-1),g=s("code",null,"sort-by",-1),_=s("code",null,"ls",-1),w=s("code",null,"reverse",-1),y=s("code",null,"where",-1),v=s("code",null,"ls",-1),x=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
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
</code></pre></div>`,3),B=s("code",null,"ps",-1),N=s("code",null,"ls",-1),T=s("code",null,"ps",-1),G=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮
│ <span class="token comment"># │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │</span>
├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">1583</span> │ Terminal       │ Running │  <span class="token number">20.69</span> │ <span class="token number">127.8</span> MiB │ <span class="token number">33.0</span> GiB │
│ <span class="token number">1</span> │  <span class="token number">579</span> │ photoanalysisd │ Running │ <span class="token number">139.50</span> │  <span class="token number">99.9</span> MiB │ <span class="token number">32.3</span> GiB │
╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯
</code></pre></div>`,1),S=s("code",null,"ls",-1),C=s("code",null,"ps",-1),R=s("code",null,"date",-1),M=s("code",null,"sys",-1),j=s("code",null,"date now",-1),E=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 <span class="token parameter variable">-08:00</span>
</code></pre></div>`,1),K=s("code",null,"date to-table",-1),U=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
╭───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────╮
│ <span class="token comment"># │ year │ month │ day │ hour │ minute │ second │ timezone │</span>
├───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">2022</span> │     <span class="token number">3</span> │   <span class="token number">7</span> │   <span class="token number">14</span> │     <span class="token number">45</span> │      <span class="token number">3</span> │ <span class="token parameter variable">-08:00</span>   │
╰───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────╯
</code></pre></div>`,1),I=s("code",null,"sys",-1),L=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
╭───────┬───────────────────╮
│ <span class="token function">host</span>  │ <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> │
│ cpu   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
│ disks │ <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    │
│ mem   │ <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> │
│ temp  │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     │
│ net   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
╰───────┴───────────────────╯
</code></pre></div>`,1),q=s("code",null,"sys",-1),z=s("em",null,"get",-1),A=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
╭────────────────┬────────────────────────╮
│ name           │ Debian GNU/Linux       │
│ os version     │ <span class="token number">11</span>                     │
│ kernel version │ <span class="token number">5.10</span>.92-v8+            │
│ <span class="token function">hostname</span>       │ lifeless               │
│ <span class="token function">uptime</span>         │ 19day 21hr 34min 45sec │
│ sessions       │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          │
╰────────────────┴────────────────────────╯
</code></pre></div>`,1),Y=s("code",null,"get",-1),V=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
╭───┬────╮
│ <span class="token number">0</span> │ jt │
╰───┴────╯
</code></pre></div><p>Right now, there&#39;s just one user on the system named &quot;jt&quot;. You&#39;ll notice that we can pass a column path (the <code>host.sessions.name</code> part) and not just the name of the column. Nu will take the column path and go to the corresponding bit of data in the table.</p><p>You might have noticed something else that&#39;s different. Rather than having a table of data, we have just a single element: the string &quot;jt&quot;. Nu works with both tables of data as well as strings. Strings are an important part of working with commands outside of Nu.</p>`,3),W=s("code",null,"echo",-1),J=s("code",null,"^",-1),D=s("code",null,"echo",-1),F=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div>`,1),H=s("code",null,"^echo",-1),O=s("code",null,"echo",-1),P=s("code",null,"git",-1),Q=s("h3",{id:"getting-help",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#getting-help","aria-hidden":"true"},"#"),n(" Getting Help")],-1),$=s("code",null,"help",-1),X=s("code",null,"help commands",-1),Z=s("code",null,"help -f <topic>",-1),ss=o(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
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
</code></pre></div>`,1);function ns(as,es){const a=l("RouterLink");return c(),i("div",null,[r,d,s("p",null,[n("The first thing you'll notice when you run a command like "),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[m]),_:1}),n(" is that instead of a block of text coming back, you get a structured table.")]),h,s("p",null,[n("The first thing we'll do is to sort our table by size. To do this, we'll take the output from "),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[k]),_:1}),n(" and feed it into a command that can sort tables based on the contents of a column.")]),b,s("p",null,[n("You can see that to make this work we didn't pass commandline arguments to "),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[f]),_:1}),n(". Instead, we used the "),e(a,{to:"/commands/docs/sort-by.html"},{default:t(()=>[g]),_:1}),n(" command that Nu provides to do the sorting of the output of the "),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[_]),_:1}),n(" command. To see the biggest files on top, we also used "),e(a,{to:"/commands/docs/reverse.html"},{default:t(()=>[w]),_:1}),n(".")]),s("p",null,[n("Nu provides many commands that can work on tables. For example, we could use "),e(a,{to:"/commands/docs/where.html"},{default:t(()=>[y]),_:1}),n(" to filter the contents of the "),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[v]),_:1}),n(" table so that it only shows files over 1 kilobyte:")]),x,s("p",null,[n("You may be familiar with the "),e(a,{to:"/commands/docs/ps.html"},{default:t(()=>[B]),_:1}),n(" command if you've used Linux. With it, we can get a list of all the current processes that the system is running, what their status is, and what their name is. We can also see the CPU load for the processes.")]),s("p",null,[n("What if we wanted to show the processes that were actively using the CPU? Just like we did with the "),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[N]),_:1}),n(" command earlier, we can also work with the table that the "),e(a,{to:"/commands/docs/ps.html"},{default:t(()=>[T]),_:1}),n(" command gives back to us:")]),G,s("p",null,[n("So far, we've been using "),e(a,{to:"/commands/docs/ls.html"},{default:t(()=>[S]),_:1}),n(" and "),e(a,{to:"/commands/docs/ps.html"},{default:t(()=>[C]),_:1}),n(" to list files and processes. Nu also offers other commands that can create tables of useful information. Next, let's explore "),e(a,{to:"/commands/docs/date.html"},{default:t(()=>[R]),_:1}),n(" and "),e(a,{to:"/commands/docs/sys.html"},{default:t(()=>[M]),_:1}),n(".")]),s("p",null,[n("Running "),e(a,{to:"/commands/docs/date_now.html"},{default:t(()=>[j]),_:1}),n(" gives us information about the current day and time:")]),E,s("p",null,[n("To get the date as a table we can feed it into "),e(a,{to:"/commands/docs/date_to-table.html"},{default:t(()=>[K]),_:1})]),U,s("p",null,[n("Running "),e(a,{to:"/commands/docs/sys.html"},{default:t(()=>[I]),_:1}),n(" gives information about the system that Nu is running on:")]),L,s("p",null,[n("This is a bit different than the tables we saw before. The "),e(a,{to:"/commands/docs/sys.html"},{default:t(()=>[q]),_:1}),n(" command gives us a table that contains structured tables in the cells instead of simple values. To take a look at this data, we need to "),z,n(" the column to view:")]),A,s("p",null,[n("The "),e(a,{to:"/commands/docs/get.html"},{default:t(()=>[Y]),_:1}),n(` command lets us jump into the contents of a column of the table. Here, we're looking into the "host" column, which contains information about the host that Nu is running on. The name of the OS, the hostname, the CPU, and more. Let's get the name of the users on the system:`)]),V,s("p",null,[n("Let's see how strings work outside of Nu in action. We'll take our example from before and run the external "),e(a,{to:"/commands/docs/echo.html"},{default:t(()=>[W]),_:1}),n(" command (the "),J,n(" tells Nu to not use the built-in "),e(a,{to:"/commands/docs/echo.html"},{default:t(()=>[D]),_:1}),n(" command):")]),F,s("p",null,[n("If this looks very similar to what we had before, you have a keen eye! It is similar, but with one important difference: we've called "),H,n(" with the value we saw earlier. This allows us to pass data out of Nu into "),e(a,{to:"/commands/docs/echo.html"},{default:t(()=>[O]),_:1}),n(" (or any command outside of Nu, like "),P,n(" for example).")]),Q,s("p",null,[n("Help text for any of Nu's built-in commands can be discovered with the "),e(a,{to:"/commands/docs/help.html"},{default:t(()=>[$]),_:1}),n(" command. To see all commands, run "),e(a,{to:"/commands/docs/help_commands.html"},{default:t(()=>[X]),_:1}),n(". You can also search for a topic by doing "),Z,n(".")]),ss])}const os=p(u,[["render",ns],["__file","quick_tour.html.vue"]]);export{os as default};
