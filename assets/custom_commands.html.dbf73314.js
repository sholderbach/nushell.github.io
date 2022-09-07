import{_ as s,r as d,o as i,c,a as e,b as n,w as o,e as l,d as a}from"./app.8034769a.js";const r={},u=l(`<h1 id="custom-commands" tabindex="-1"><a class="header-anchor" href="#custom-commands" aria-hidden="true">#</a> Custom commands</h1><p>Nu&#39;s ability to compose long pipelines allows you a lot of control over your data and system, but it comes at the price of a lot of typing. Ideally, you&#39;d be able to save your well-crafted pipelines to use again and again.</p><p>This is where custom commands come in.</p><p>An example definition of a custom command:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name] {
  echo &quot;hello&quot; $name
}
</code></pre></div><p>In this definition, we define the <code>greet</code> command, which takes a single parameter <code>name</code>. Following this parameter is the block that represents what will happen when the custom command runs. When called, the custom command will set the value passed for <code>name</code> as the <code>$name</code> variable, which will be available to the block.</p><p>To run the above, we can call it like we would call built-in commands:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet &quot;world&quot;
</code></pre></div><p>As we do, we also get output just as we would with built-in commands:</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 hello
 1 \u2502 world
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>echo</code> returns its arguments separately to the pipeline. If you want to use it to generate a single string append <code> | str collect</code> to the pipeline:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name] {
  echo &quot;hello &quot; $name | str collect
}

greet nushell
</code></pre></div><p>returns <code>hello nushell</code></p></div><h2 id="command-names" tabindex="-1"><a class="header-anchor" href="#command-names" aria-hidden="true">#</a> Command names</h2><p>In Nushell, a command name is a string of characters. Here are some examples of valid command names: <code>greet</code>, <code>get-size</code>, <code>mycommand123</code>, <code>my command</code>, and <code>\u{1F60A}</code>.</p><p><em>Note: It&#39;s common practice in Nushell to separate the words of the command with <code>-</code> for better readability.</em> For example <code>get-size</code> instead of <code>getsize</code> or <code>get_size</code>.</p><h2 id="sub-commands" tabindex="-1"><a class="header-anchor" href="#sub-commands" aria-hidden="true">#</a> Sub-commands</h2><p>You can also define subcommands to commands using a space. For example, if we wanted to add a new subcommand to <code>str</code>, we can create it by naming our subcommand to start with &quot;str &quot;. For example:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def &quot;str mycommand&quot; [] {
  echo hello
}
</code></pre></div><p>Now we can call our custom command as if it were a built-in subcommand of <code>str</code>:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; str mycommand
</code></pre></div><p>Of course, commands with spaces in their names are defined in the same way:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def &quot;custom command&quot; [] {
  echo &quot;this is a custom command with a space in the name!&quot;
}
</code></pre></div><h2 id="parameter-types" tabindex="-1"><a class="header-anchor" href="#parameter-types" aria-hidden="true">#</a> Parameter types</h2><p>When defining custom commands, you can name and optionally set the type for each parameter. For example, you can write the above as:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name: string] {
  echo &quot;hello &quot; $name | str collect
}
</code></pre></div><p>The types of parameters are optional. Nushell supports leaving them off and treating the parameter as <code>any</code> if so. If you annotated a type on a parameter, Nushell will check this type when you call the function.</p><p>For example, let&#39;s say you wanted to take in an <code>int</code> instead:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name: int] {
  echo &quot;hello &quot; $name | str collect
}

greet world
</code></pre></div><p>If we try to run the above, Nushell will tell us that the types don&#39;t match:</p><div class="language-text ext-text"><pre class="language-text"><code>error: Type Error
  \u250C\u2500 shell:6:7
  \u2502
5 \u2502 greet world
  \u2502       ^^^^^ Expected int, found world
</code></pre></div><p>This can help you guide users of your definitions to call them with only the supported types.</p><p>The currently accepted types are (as of version 0.65.0):</p><ul><li><code>any</code></li><li><code>block</code></li><li><code>cell-path</code></li><li><code>duration</code></li><li><code>path</code></li><li><code>expr</code></li><li><code>filesize</code></li><li><code>glob</code></li><li><code>int</code></li><li><code>math</code></li><li><code>number</code></li><li><code>operator</code></li><li><code>range</code></li><li><code>cond</code></li><li><code>bool</code></li><li><code>signature</code></li><li><code>string</code></li><li><code>variable</code></li><li><code>record</code></li><li><code>list</code></li><li><code>table</code></li><li><code>error</code></li></ul><h2 id="parameters-with-a-default-value" tabindex="-1"><a class="header-anchor" href="#parameters-with-a-default-value" aria-hidden="true">#</a> Parameters with a default value</h2><p>To make a parameter optional and directly provide a default value for it you can provide a default value in the command definition.</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name = &quot;nushell&quot;] {
  echo &quot;hello &quot; $name | str collect
}
</code></pre></div><p>You can call this command either without the parameter or with a value to override the default value:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet
hello nushell
&gt; greet world
hello world
</code></pre></div><p>You can also combine a default value with a <a href="#parameter-types">type requirement</a>:</p><div class="language-text ext-text"><pre class="language-text"><code>def congratulate [age: int = 18] {
  echo &quot;Happy birthday! Wow you are &quot; $age &quot; years old now!&quot; | str collect
}
</code></pre></div><p>If you want to check if an optional parameter is present or not and not just rely on a default value use <a href="#optional-positional-parameters">optional positional parameters</a> instead.</p><h2 id="optional-positional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-positional-parameters" aria-hidden="true">#</a> Optional positional parameters</h2><p>By default, positional parameters are required. If a positional parameter is not passed, we will encounter an error:</p><div class="language-text ext-text"><pre class="language-text"><code>  \xD7 Missing required positional argument.
   \u256D\u2500[entry #23:1:1]
 1 \u2502 greet
   \xB7      \u25B2
   \xB7      \u2570\u2500\u2500 missing name
   \u2570\u2500\u2500\u2500\u2500
  help: Usage: greet &lt;name&gt;
</code></pre></div><p>We can instead mark a positional parameter as optional by putting a question mark (<code>?</code>) after its name. For example:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name?: string] {
  echo &quot;hello&quot; $name | str collect
}

greet
</code></pre></div><p>Making a positional parameter optional does not change its name when accessed in the body. As the example above shows, it is still accessed with <code>$name</code>, despite the <code>?</code> suffix in the parameter list.</p><p>When an optional parameter is not passed, its value in the command body is equal to <code>null</code> and <code>$nothing</code>. We can use this to act on the case where a parameter was not passed:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [name?: string] {
  if ($name == null) {
    echo &quot;hello, I don&#39;t know your name!&quot;
  } else {
    echo &quot;hello &quot; $name | str collect
  }
}

greet
</code></pre></div><p>If you just want to set a default value when the parameter is missing it is simpler to use a <a href="#parameters-with-a-default-value">default value</a> instead.</p><p>If required and optional positional parameters are used together, then the required parameters must appear in the definition first.</p><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><p>In addition to passing positional parameters, you can also pass named parameters by defining flags for your custom commands.</p><p>For example:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age: int
] {
  echo $name $age
}
</code></pre></div><p>In the <code>greet</code> definition above, we define the <code>name</code> positional parameter as well as an <code>age</code> flag. This allows the caller of <code>greet</code> to optionally pass the <code>age</code> parameter as well.</p><p>You can call the above using:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet world --age 10
</code></pre></div><p>Or:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet --age 10 world
</code></pre></div><p>Or even leave the flag off altogether:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet world
</code></pre></div><p>Flags can also be defined to have a shorthand version. This allows you to pass a simpler flag as well as a longhand, easier-to-read flag.</p><p>Let&#39;s extend the previous example to use a shorthand flag for the <code>age</code> value:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
] {
  echo $name $age
}
</code></pre></div><p><em>Note:</em> Flags are named by their longhand name, so the above example would need to use <code>$age</code> and not <code>$a</code>.</p><p>Now, we can call this updated definition using the shorthand flag:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><p>Flags can also be used as basic switches. This means that their presence or absence is taken as an argument for the definition. Extending the previous example:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
  --twice
] {
  if $twice {
    echo $name $name $age $age
  } else {
    echo $name $age
  }
}
</code></pre></div><p>And the definition can be either called as:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet -a 10 --twice hello
</code></pre></div><p>Or just without the switch flag:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><h2 id="rest-parameters" tabindex="-1"><a class="header-anchor" href="#rest-parameters" aria-hidden="true">#</a> Rest parameters</h2><p>There may be cases when you want to define a command which takes any number of positional arguments. We can do this with a rest parameter, using the following <code>...</code> syntax:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [...name: string] {
  echo &quot;hello all:&quot;
  for $n in $name {
    echo $n
  }
}

greet earth mars jupiter venus
</code></pre></div><p>We could call the above definition of the <code>greet</code> command with any number of arguments, including none at all. All of the arguments are collected into <code>$name</code> as a list.</p><p>Rest parameters can be used together with positional parameters:</p><div class="language-text ext-text"><pre class="language-text"><code>def greet [vip: string, ...name: string] {
  echo &quot;hello to our VIP &quot; $vip | str collect
  echo &quot;and hello to everybody else:&quot;
  for $n in $name {
    echo $n
  }
}

#     $vip          $name
#     ---- ------------------------
greet moon earth mars jupiter venus
</code></pre></div><h2 id="documenting-your-command" tabindex="-1"><a class="header-anchor" href="#documenting-your-command" aria-hidden="true">#</a> Documenting your command</h2><p>In order to best help users of your custom commands, you can also document them with additional descriptions for the commands and the parameters.</p><p>Taking our previous example:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
] {
  echo $name $age
}
</code></pre></div><p>Once defined, we can run <code>help greet</code> to get the help information for the command:</p><div class="language-text ext-text"><pre class="language-text"><code>Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt;

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;
</code></pre></div><p>You can see the parameter and flag that we defined, as well as the <code>-h</code> help flag that all commands get.</p><p>To improve this help, we can add descriptions to our definition that will show up in the help:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code># A greeting command that can greet the caller
def greet [
  name: string      # The name of the person to greet
  --age (-a): int   # The age of the person
] {
  echo $name $age
}
</code></pre></div><p>The comments that we put on the definition and its parameters then appear as descriptions inside the <code>help</code> of the command.</p><p>Now, if we run <code>help greet</code>, we&#39;re given a more helpful help text:</p><div class="language-text ext-text"><pre class="language-text"><code>A greeting command that can greet the caller

Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt; The name of the person to greet

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;: The age of the person
</code></pre></div><h2 id="pipeline-output" tabindex="-1"><a class="header-anchor" href="#pipeline-output" aria-hidden="true">#</a> Pipeline Output</h2><p>Custom commands stream their output just like built-in commands. For example, let&#39;s say we wanted to refactor this pipeline:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>&gt; ls | get name
</code></pre></div>`,94),p=a("Let's move "),h=e("code",null,"ls",-1),m=a(" into a command that we've written:"),g=e("div",{class:"language-nushell ext-nushell"},[e("pre",{class:"language-nushell"},[e("code",null,`def my-ls [] { ls }
`)])],-1),f=a("We can use the output from this command just as we would "),v=e("code",null,"ls",-1),x=a("."),w=l(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; my-ls | get name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 myscript.nu
 1 \u2502 myscript2.nu
 2 \u2502 welcome_to_nushell.md
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>This lets us easily build custom commands and process their output. Note, that we don&#39;t use return statements like other languages. Instead, we build pipelines that output streams of data that can be connected to other pipelines.</p><h2 id="pipeline-input" tabindex="-1"><a class="header-anchor" href="#pipeline-input" aria-hidden="true">#</a> Pipeline Input</h2><p>Custom commands can also take input from the pipeline, just like other commands. This input is automatically passed to the block that the custom command uses.</p><p>Let&#39;s make our own command that doubles every value it receives as input:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def double [] {
  each { |it| 2 * $it }
}
</code></pre></div><p>Now, if we call the above command later in a pipeline, we can see what it does with the input:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; [1 2 3] | double
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500
 0 \u2502 2
 1 \u2502 4
 2 \u2502 6
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We can also store the input for later use using the <code>$in</code> variable:</p><div class="language-nushell ext-nushell"><pre class="language-nushell"><code>def nullify [...cols] {
  let start = $in
  $cols | reduce --fold $start { |col, df|
    $df | upsert $col null
  }
}
</code></pre></div><h2 id="persisting" tabindex="-1"><a class="header-anchor" href="#persisting" aria-hidden="true">#</a> Persisting</h2>`,11),y=a("For information about how to persist custom commands so that they're visible when you start up Nushell, see the "),b=a("configuration chapter"),_=a(" and add your startup script.");function $(q,k){const t=d("RouterLink");return i(),c("div",null,[u,e("p",null,[p,n(t,{to:"/book/commands/ls.html"},{default:o(()=>[h]),_:1}),m]),g,e("p",null,[f,n(t,{to:"/book/commands/ls.html"},{default:o(()=>[v]),_:1}),x]),w,e("p",null,[y,n(t,{to:"/book/configuration.html"},{default:o(()=>[b]),_:1}),_])])}const I=s(r,[["render",$],["__file","custom_commands.html.vue"]]);export{I as default};
