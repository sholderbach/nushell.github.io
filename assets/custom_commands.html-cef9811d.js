import{_ as s,M as d,p as i,q as c,Q as e,t as a,N as n,U as o,a1 as l}from"./framework-344bb0e4.js";const r={},u=l(`<h1 id="custom-commands" tabindex="-1"><a class="header-anchor" href="#custom-commands" aria-hidden="true">#</a> Custom commands</h1><p>Nu&#39;s ability to compose long pipelines allows you a lot of control over your data and system, but it comes at the price of a lot of typing. Ideally, you&#39;d be able to save your well-crafted pipelines to use again and again.</p><p>This is where custom commands come in.</p><p>An example definition of a custom command:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name] {
  [&#39;hello&#39; $name]
}
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The value produced by the last line of a command becomes the command&#39;s returned value. In this case, a list containing the string <code>&#39;hello&#39;</code> and <code>$name</code> is returned.</p></div><p>In this definition, we define the <code>greet</code> command, which takes a single parameter <code>name</code>. Following this parameter is the block that represents what will happen when the custom command runs. When called, the custom command will set the value passed for <code>name</code> as the <code>$name</code> variable, which will be available to the block.</p><p>To run the above, we can call it like we would call built-in commands:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet &quot;world&quot;
</code></pre></div><p>As we do, we also get output just as we would with built-in commands:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬───────
 0 │ hello
 1 │ world
───┴───────
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you want to generate a single string, you can use the string interpolation syntax to embed $name in it:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name] {
  $&quot;hello ($name)&quot;
}

greet nushell
</code></pre></div><p>returns <code>hello nushell</code></p></div><h2 id="command-names" tabindex="-1"><a class="header-anchor" href="#command-names" aria-hidden="true">#</a> Command names</h2><p>In Nushell, a command name is a string of characters. Here are some examples of valid command names: <code>greet</code>, <code>get-size</code>, <code>mycommand123</code>, <code>my command</code>, and <code>😊</code>.</p><p><em>Note: It&#39;s common practice in Nushell to separate the words of the command with <code>-</code> for better readability.</em> For example <code>get-size</code> instead of <code>getsize</code> or <code>get_size</code>.</p><h2 id="sub-commands" tabindex="-1"><a class="header-anchor" href="#sub-commands" aria-hidden="true">#</a> Sub-commands</h2>`,16),p=e("code",null,"str",-1),h=e("div",{class:"language-nushell","data-ext":"nushell"},[e("pre",{class:"language-nushell"},[e("code",null,`def "str mycommand" [] {
  "hello"
}
`)])],-1),m=e("code",null,"str",-1),g=l(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; str mycommand
</code></pre></div><p>Of course, commands with spaces in their names are defined in the same way:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def &quot;custom command&quot; [] {
  &quot;this is a custom command with a space in the name!&quot;
}
</code></pre></div><h2 id="parameter-types" tabindex="-1"><a class="header-anchor" href="#parameter-types" aria-hidden="true">#</a> Parameter types</h2><p>When defining custom commands, you can name and optionally set the type for each parameter. For example, you can write the above as:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name: string] {
  $&quot;hello ($name)&quot;
}
</code></pre></div><p>The types of parameters are optional. Nushell supports leaving them off and treating the parameter as <code>any</code> if so. If you annotated a type on a parameter, Nushell will check this type when you call the function.</p><p>For example, let&#39;s say you wanted to take in an <code>int</code> instead:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name: int] {
  $&quot;hello ($name)&quot;
}

greet world
</code></pre></div><p>If we try to run the above, Nushell will tell us that the types don&#39;t match:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>error: Type Error
  ┌─ shell:6:7
  │
5 │ greet world
  │       ^^^^^ Expected int
</code></pre></div><p>This can help you guide users of your definitions to call them with only the supported types.</p><p>The currently accepted types are (as of version 0.65.0):</p><ul><li><code>any</code></li><li><code>block</code></li><li><code>cell-path</code></li><li><code>duration</code></li><li><code>path</code></li><li><code>expr</code></li><li><code>filesize</code></li><li><code>glob</code></li><li><code>int</code></li><li><code>math</code></li><li><code>number</code></li><li><code>operator</code></li><li><code>range</code></li><li><code>cond</code></li><li><code>bool</code></li><li><code>signature</code></li><li><code>string</code></li><li><code>variable</code></li><li><code>record</code></li><li><code>list</code></li><li><code>table</code></li><li><code>error</code></li></ul><h2 id="parameters-with-a-default-value" tabindex="-1"><a class="header-anchor" href="#parameters-with-a-default-value" aria-hidden="true">#</a> Parameters with a default value</h2><p>To make a parameter optional and directly provide a default value for it you can provide a default value in the command definition.</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name = &quot;nushell&quot;] {
  $&quot;hello ($name)&quot;
}
</code></pre></div><p>You can call this command either without the parameter or with a value to override the default value:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet
hello nushell
&gt; greet world
hello world
</code></pre></div><p>You can also combine a default value with a <a href="#parameter-types">type requirement</a>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>def congratulate [age: int = 18] {
  $&quot;Happy birthday! You are ($age) years old now!&quot;
}
</code></pre></div><p>If you want to check if an optional parameter is present or not and not just rely on a default value use <a href="#optional-positional-parameters">optional positional parameters</a> instead.</p><h2 id="optional-positional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-positional-parameters" aria-hidden="true">#</a> Optional positional parameters</h2><p>By default, positional parameters are required. If a positional parameter is not passed, we will encounter an error:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>  × Missing required positional argument.
   ╭─[entry #23:1:1]
 1 │ greet
   ·      ▲
   ·      ╰── missing name
   ╰────
  help: Usage: greet &lt;name&gt;
</code></pre></div><p>We can instead mark a positional parameter as optional by putting a question mark (<code>?</code>) after its name. For example:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name?: string] {
  $&quot;hello ($name)&quot;
}

greet
</code></pre></div><p>Making a positional parameter optional does not change its name when accessed in the body. As the example above shows, it is still accessed with <code>$name</code>, despite the <code>?</code> suffix in the parameter list.</p><p>When an optional parameter is not passed, its value in the command body is equal to <code>null</code>. We can use this to act on the case where a parameter was not passed:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name?: string] {
  if ($name == null) {
    &quot;hello, I don&#39;t know your name!&quot;
  } else {
    $&quot;hello ($name)&quot;
  }
}

greet
</code></pre></div><p>If you just want to set a default value when the parameter is missing it is simpler to use a <a href="#parameters-with-a-default-value">default value</a> instead.</p><p>If required and optional positional parameters are used together, then the required parameters must appear in the definition first.</p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><p>In addition to passing positional parameters, you can also pass named parameters by defining flags for your custom commands.</p><p>For example:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age: int
] {
  [$name $age]
}
</code></pre></div><p>In the <code>greet</code> definition above, we define the <code>name</code> positional parameter as well as an <code>age</code> flag. This allows the caller of <code>greet</code> to optionally pass the <code>age</code> parameter as well.</p><p>You can call the above using:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet world --age 10
</code></pre></div><p>Or:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet --age 10 world
</code></pre></div><p>Or even leave the flag off altogether:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet world
</code></pre></div><p>Flags can also be defined to have a shorthand version. This allows you to pass a simpler flag as well as a longhand, easier-to-read flag.</p><p>Let&#39;s extend the previous example to use a shorthand flag for the <code>age</code> value:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
] {
  [$name $age]
}
</code></pre></div><p><em>Note:</em> Flags are named by their longhand name, so the above example would need to use <code>$age</code> and not <code>$a</code>.</p><p>Now, we can call this updated definition using the shorthand flag:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><p>Flags can also be used as basic switches. This means that their presence or absence is taken as an argument for the definition. Extending the previous example:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
  --twice
] {
  if $twice {
    [$name $name $age $age]
  } else {
    [$name $age]
  }
}
</code></pre></div><p>And the definition can be either called as:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet -a 10 --twice hello
</code></pre></div><p>Or just without the switch flag:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><h2 id="rest-parameters" tabindex="-1"><a class="header-anchor" href="#rest-parameters" aria-hidden="true">#</a> Rest parameters</h2><p>There may be cases when you want to define a command which takes any number of positional arguments. We can do this with a rest parameter, using the following <code>...</code> syntax:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [...name: string] {
  &quot;hello all:&quot;
  for $n in $name {
    $n
  }
}

greet earth mars jupiter venus
</code></pre></div>`,58),f={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"TIP",-1),x=e("code",null,"null",-1),w=e("code",null,'"hello all:"',-1),y=e("code",null,"null",-1),b=e("code",null,"ignore",-1),_=e("code",null,'"hello all:" | null',-1),$=e("code",null,"save",-1),q=e("code",null,"cd",-1),k=e("code",null,"null",-1),T=l(`<p>We could call the above definition of the <code>greet</code> command with any number of arguments, including none at all. All of the arguments are collected into <code>$name</code> as a list.</p><p>Rest parameters can be used together with positional parameters:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>def greet [vip: string, ...name: string] {
  $&quot;hello to our VIP ($vip)&quot;
  &quot;and hello to everybody else:&quot;
  for $n in $name {
    $n
  }
}

#     $vip          $name
#     ---- ------------------------
greet moon earth mars jupiter venus
</code></pre></div><h2 id="documenting-your-command" tabindex="-1"><a class="header-anchor" href="#documenting-your-command" aria-hidden="true">#</a> Documenting your command</h2><p>In order to best help users of your custom commands, you can also document them with additional descriptions for the commands and parameters.</p><p>Taking our previous example:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
] {
  [$name $age]
}
</code></pre></div><p>Once defined, we can run <code>help greet</code> to get the help information for the command:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt;

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;
</code></pre></div><p>You can see the parameter and flag that we defined, as well as the <code>-h</code> help flag that all commands get.</p><p>To improve this help, we can add descriptions to our definition that will show up in the help:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># A greeting command that can greet the caller
def greet [
  name: string      # The name of the person to greet
  --age (-a): int   # The age of the person
] {
  [$name $age]
}
</code></pre></div>`,12),I=e("code",null,"help",-1),N=l(`<p>Now, if we run <code>help greet</code>, we&#39;re given a more helpful help text:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>A greeting command that can greet the caller

Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt; The name of the person to greet

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;: The age of the person
</code></pre></div><h2 id="pipeline-output" tabindex="-1"><a class="header-anchor" href="#pipeline-output" aria-hidden="true">#</a> Pipeline Output</h2><p>Custom commands stream their output just like built-in commands. For example, let&#39;s say we wanted to refactor this pipeline:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>&gt; ls | get name
</code></pre></div>`,5),F=e("code",null,"ls",-1),P=e("div",{class:"language-nushell","data-ext":"nushell"},[e("pre",{class:"language-nushell"},[e("code",null,`def my-ls [] { ls }
`)])],-1),j=e("code",null,"ls",-1),W=l(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; my-ls | get name
───┬───────────────────────
 0 │ myscript.nu
 1 │ myscript2.nu
 2 │ welcome_to_nushell.md
───┴───────────────────────
</code></pre></div><p>This lets us easily build custom commands and process their output. Note, that we don&#39;t use return statements like other languages. Instead, we build pipelines that output streams of data that can be connected to other pipelines.</p><h2 id="pipeline-input" tabindex="-1"><a class="header-anchor" href="#pipeline-input" aria-hidden="true">#</a> Pipeline Input</h2><p>Custom commands can also take input from the pipeline, just like other commands. This input is automatically passed to the block that the custom command uses.</p><p>Let&#39;s make our own command that doubles every value it receives as input:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def double [] {
  each { |it| 2 * $it }
}
</code></pre></div><p>Now, if we call the above command later in a pipeline, we can see what it does with the input:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; [1 2 3] | double
───┬─────
 0 │ 2
 1 │ 4
 2 │ 6
───┴─────
</code></pre></div><p>We can also store the input for later use using the <code>$in</code> variable:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def nullify [...cols] {
  let start = $in
  $cols | reduce --fold $start { |col, df|
    $df | upsert $col null
  }
}
</code></pre></div><h2 id="persisting" tabindex="-1"><a class="header-anchor" href="#persisting" aria-hidden="true">#</a> Persisting</h2>`,11);function A(O,C){const t=d("RouterLink");return i(),c("div",null,[u,e("p",null,[a("You can also define subcommands to commands using a space. For example, if we wanted to add a new subcommand to "),n(t,{to:"/commands/docs/str.html"},{default:o(()=>[p]),_:1}),a(', we can create it by naming our subcommand to start with "str ". For example:')]),h,e("p",null,[a("Now we can call our custom command as if it were a built-in subcommand of "),n(t,{to:"/commands/docs/str.html"},{default:o(()=>[m]),_:1}),a(":")]),g,e("div",f,[v,e("p",null,[a("Each line of a command has its resulting value printed out when run, as long as it isn't "),x,a(". Hence, "),w,a(" above will be printed out despite not being the return value. To prevent this, you can place "),y,a(" (or the "),n(t,{to:"/commands/docs/ignore.html"},{default:o(()=>[b]),_:1}),a(" command) at the end of the pipeline, like so: "),_,a(". Also note that most file system commands, such as "),n(t,{to:"/commands/docs/save.html"},{default:o(()=>[$]),_:1}),a(" or "),n(t,{to:"/commands/docs/cd.html"},{default:o(()=>[q]),_:1}),a(", always output "),k,a(".")])]),T,e("p",null,[a("The comments that we put on the definition and its parameters then appear as descriptions inside the "),n(t,{to:"/commands/docs/help.html"},{default:o(()=>[I]),_:1}),a(" of the command.")]),N,e("p",null,[a("Let's move "),n(t,{to:"/commands/docs/ls.html"},{default:o(()=>[F]),_:1}),a(" into a command that we've written:")]),P,e("p",null,[a("We can use the output from this command just as we would "),n(t,{to:"/commands/docs/ls.html"},{default:o(()=>[j]),_:1}),a(".")]),W,e("p",null,[a("For information about how to persist custom commands so that they're visible when you start up Nushell, see the "),n(t,{to:"/book/configuration.html"},{default:o(()=>[a("configuration chapter")]),_:1}),a(" and add your startup script.")])])}const z=s(r,[["render",A],["__file","custom_commands.html.vue"]]);export{z as default};
