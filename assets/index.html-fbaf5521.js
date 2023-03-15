import{_ as a,p as s,q as n,a1 as e}from"./framework-344bb0e4.js";const o={},t=e(`<h1 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion" aria-hidden="true">#</a> Introducción</h1><p>Hola, y bienvenido al proyecto Nushell. El objetivo de este proyecto es tomar la filosofía Unix de shells, dónde tuberías <em>-pipes-</em> conectan comandos simples juntos y llevarlos al estilo moderno de desarrollo.</p><p>Nu toma ideas de muchos territorios familiares: shells tradicionales como bash, shells basadas en objetos como PowerShell, programación funcional, programación de sistemas, y más. Pero, en lugar de ser un &quot;Todo en uno&quot;, Nu enfoca su energía en hacer algunas cosas bien:</p><ul><li>Crear una multiplataforma shell flexible con un toque moderno.</li><li>Permitir mezclar y combinar aplicaciones de línea de comandos con una shell que entiende la estructura de sus datos.</li><li>Tenga el brillo UX que proporcionan las aplicaciones modernas CLI.</li></ul><p>La manera más facil de ver qué puede hacer Nu es con ejemplos, iniciemos.</p><p>Lo primero que notarás al ejercutar un comando como <code>ls</code> es que en lugar de un bloque de texto que regresa, recibirás una tabla estructurada.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
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
</code></pre></div><p>La tabla no solamente muestra lo que hay en el directorio de una manera distinta sino algo más. Como las tablas de una hoja de cálculo <em>-<em>spreadsheet</em>-</em>, esta tabla te permite trabajar con los datos más interactivamente.</p><p>Lo primero que vamos hacer es ordenar nuestra tabla por tamaño. Para poder hacerlo tomaremos la salida de <code>ls</code> y la alimentaremos al comando que ordena tablas basado en los valores de una columna (para este ejemplo sería la columna <code>size</code>).</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
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
</code></pre></div><p>Puedes observar que para lograrlo no tuvimos que pasar argumentos al comando <code>ls</code>. En cambio, nosotros usamos el comando <code>sort-by</code> que proporciona Nu para ordenar la salida del comando <code>ls</code>. Para ver los archivos más grandes en las primeras filas usamos el comando <code>reverse</code>.</p><p>Nu proporciona muchos comandos que trabajan con tablas. Por ejemplo, podemos filtrar los contenidos de la tabla de <code>ls</code> para únicamente mostrar archivos superiores a 1 kilobytes:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
╭───┬───────────────────┬──────┬─────────┬────────────╮
│ <span class="token comment"># │       name        │ type │  size   │  modified  │</span>
├───┼───────────────────┼──────┼─────────┼────────────┤
│ <span class="token number">0</span> │ Gemfile           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">1</span> │ Gemfile.lock      │ <span class="token function">file</span> │ <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">2</span> │ LICENSE           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">3</span> │ SUMMARY.md        │ <span class="token function">file</span> │ <span class="token number">3.7</span> KiB │ <span class="token number">3</span> days ago │
╰───┴───────────────────┴──────┴─────────┴────────────╯
</code></pre></div><p>Al igual que en la filosofía Unix, poder hacer que los comandos hablen entre ellos nos da maneras de mezclar y combinar de formas distintas. Miremos otro ejemplo:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮
│  <span class="token comment">#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │</span>
├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤
│   <span class="token number">0</span> │ <span class="token number">7570</span> │ nu                   │ Running │  <span class="token number">1.96</span> │  <span class="token number">23.2</span> MiB │ <span class="token number">32.8</span> GiB │
│   <span class="token number">1</span> │ <span class="token number">3533</span> │ remindd              │ Sleep   │  <span class="token number">0.00</span> │ <span class="token number">103.6</span> MiB │ <span class="token number">32.3</span> GiB │
│   <span class="token number">2</span> │ <span class="token number">3495</span> │ TVCacheExtension     │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">11.9</span> MiB │ <span class="token number">32.2</span> GiB │
│   <span class="token number">3</span> │ <span class="token number">3490</span> │ MusicCacheExtension  │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">12.9</span> MiB │ <span class="token number">32.2</span> GiB │
<span class="token punctuation">..</span>.
</code></pre></div><p>Es posible que estés familiarizado con el comando <code>ps</code> si has utilizado Linux. Con dicho comando, podemos tener una lista de los procesos actuales que ejecuta el sistema, qué estado tienen y sus nombres. También podemos ver la carga CPU del proceso.</p><p>¿Qué tal si quisiéramos mostrar los procesos que activamente usan el CPU? Así como hicimos con el comando <code>ls</code> previamente, también podemos trabajar con la tabla que nos devuelve <code>ps</code>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮
│ <span class="token comment"># │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │</span>
├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">1583</span> │ Terminal       │ Running │  <span class="token number">20.69</span> │ <span class="token number">127.8</span> MiB │ <span class="token number">33.0</span> GiB │
│ <span class="token number">1</span> │  <span class="token number">579</span> │ photoanalysisd │ Running │ <span class="token number">139.50</span> │  <span class="token number">99.9</span> MiB │ <span class="token number">32.3</span> GiB │
╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯
</code></pre></div><p>Hasta ahora, hemos visto el uso de <code>ls</code> y <code>ps</code> para enumerar archivos y procesos. Nu también ofrece otros comandos que pueden crear tablas con información de gran utilidad. Exploremos <code>date</code> y <code>sys</code>.</p><p>Ejecutando <code>date now</code> nos proporciona información del día y tiempo:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 <span class="token parameter variable">-08:00</span>
</code></pre></div><p>Para obtener una tabla podemos alimentar la salida a <code>date to-table</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
╭───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────╮
│ <span class="token comment"># │ year │ month │ day │ hour │ minute │ second │ timezone │</span>
├───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">2022</span> │     <span class="token number">3</span> │   <span class="token number">7</span> │   <span class="token number">14</span> │     <span class="token number">45</span> │      <span class="token number">3</span> │ <span class="token parameter variable">-08:00</span>   │
╰───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────╯
</code></pre></div><p>Ejecutando <code>sys</code> devuelve información sobre el sistema en el que se ejecuta Nu:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
╭───────┬───────────────────╮
│ <span class="token function">host</span>  │ <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> │
│ cpu   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
│ disks │ <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    │
│ mem   │ <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> │
│ temp  │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     │
│ net   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
╰───────┴───────────────────╯
</code></pre></div><p>Esta tabla se ve un poco diferente con las que ya hemos trabajado. El comando <code>sys</code> nos regresa una tabla que también contiene tablas estructuradas en las celdas en vez de valores simples. Para explorar esos datos, necesitamos <em>obtener</em> la columna deseada para mostrar:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
╭────────────────┬────────────────────────╮
│ name           │ Debian GNU/Linux       │
│ os version     │ <span class="token number">11</span>                     │
│ kernel version │ <span class="token number">5.10</span>.92-v8+            │
│ <span class="token function">hostname</span>       │ lifeless               │
│ <span class="token function">uptime</span>         │ 19day 21hr 34min 45sec │
│ sessions       │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          │
╰────────────────┴────────────────────────╯
</code></pre></div><p>El comando <code>get</code> nos permite ir directo al valor de una columa de la tabla. Aquí estamos mirando la columna &quot;host&quot; que contiene información del host dónde se está ejecutando Nu. El nombre del sistema operativo, hostname, CPU, y más. Miremos los nombres de los usuarios en el sistema:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
╭───┬────╮
│ <span class="token number">0</span> │ jt │
╰───┴────╯
</code></pre></div><p>En este momento, solo hay un usuario en el sistema llamado &quot;jt&quot;. Notarás que podemos pasar una ruta de columna <em>-<em>column path</em>-</em> y no únicamente el nombre de una columna. Nu tomará esta ruta de columna e irá a los datos correspondientes en la tabla.</p><p>Es posible que hayas notado algo más diferente también. En lugar de tener una tabla de datos, tenemos solo un elemento individual: la cadena &quot;jt&quot;. Nu trabaja tanto con tabla de datos así como cadenas. Cadenas son una parte importante de trabajar con comandos fuera de Nu.</p><p>Miremos en acción cómo funcionan las cadenas fuera de Nu. Tomaremos el ejemplo anterior y ejecutaremos el comando externo <code>echo</code> (el carácter <code>^</code> le informa a Nu que no se desea usar el comando <em>interno</em> también llamado <code>echo</code>):</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div><p>Si esto se parece mucho a lo que teníamos antes, ¡tienes buen ojo! Es similar, pero con una diferencia importante: hemos llamado <code>echo</code> con el valor que vimos antes. Esto nos permite pasar datos fuera de Nu a <code>echo</code> (o cualquier comando fuera de Nu, como <code>git</code> por ejemplo)</p><p><em>Nota: Para texto de ayuda de los comandos internos de Nu, puedes descubrirlos con el comando <code>help</code></em>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
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
</code></pre></div>`,36),p=[t];function c(l,r){return s(),n("div",null,p)}const u=a(o,[["render",c],["__file","index.html.vue"]]);export{u as default};
