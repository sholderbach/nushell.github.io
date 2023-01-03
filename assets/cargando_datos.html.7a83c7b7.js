import{_ as e,z as a,A as o,a6 as t}from"./framework.3d018c9f.js";const n={},r=t(`<h1 id="cargando-datos" tabindex="-1"><a class="header-anchor" href="#cargando-datos" aria-hidden="true">#</a> Cargando datos</h1><p>Hemos visto como puedes usar comandos como <code>ls</code>, <code>ps</code>, <code>date</code>, y <code>sys</code> para cargar información sobre los archivos, procesos, hora de fecha, y del mismo sistema. Cada comando nos entrega una tabla de información que podemos explorar. Hay otras maneras de cargar datos en una tabla de datos para trabajar.</p><h2 id="abriendo-archivos" tabindex="-1"><a class="header-anchor" href="#abriendo-archivos" aria-hidden="true">#</a> Abriendo archivos</h2><p>Una de las funciones más destacadas de Nu para trabajar con datos es el comando <code>open</code>. Es una multi-herramienta que puede trabajar con varios formatos de datos. Para ver qué significa esto intentemos abrir un archivo en formato json:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open editors/vscode/package.json
------+----------+----------+---------+---------+----------+----------+----------+----------+----------+----------+----------+----------+----------+----------
 name | descript | author   | license | version | reposito | publishe | categori | keywords | engines  | activati | main     | contribu | scripts  | devDepen
      | ion      |          |         |         | ry       | r        | es       |          |          | onEvents |          | tes      |          | dencies
------+----------+----------+---------+---------+----------+----------+----------+----------+----------+----------+----------+----------+----------+----------
 lark | Lark     | Lark     | MIT     | 1.0.0   | [object] | vscode   | [0       | [1 item] | [object] | [1 item] | ./out/ex | [object] | [object] | [object]
      | support  | develope |         |         |          |          | items]   |          |          |          | tension  |          |          |
      | for VS   | rs       |         |         |          |          |          |          |          |          |          |          |          |
      | Code     |          |         |         |          |          |          |          |          |          |          |          |          |
------+----------+----------+---------+---------+----------+----------+----------+----------+----------+----------+----------+----------+----------+----------
</code></pre></div><p>De manera similar a <code>ls</code>, abrir un tipo de archivo que Nu entienda nos devolverá algo más que solo texto (o una secuencia de bytes). Aquí abrimos el archivo &quot;package.json&quot; de un proyecto de JavaScript. Nu puede reconocer y abrir el texto en JSON y devolvernos una tabla de datos.</p><p>Si deseamos revisar la versión del proyecto que estamos mirando podemos usar el comando <code>get</code>.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Actualmente Nu soporta los siguiente formatos para cargar datos directamente a tablas:</p><ul><li>json</li><li>yaml</li><li>toml</li><li>xml</li><li>csv</li><li>ini</li></ul><p>¿Pero qué sucede si cargas un archivo de texto que no sea de estos? Probemos:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open README.md
</code></pre></div><p>Se nos muestra el contenido del archivo. Si el archivo es muy grande obtendremos una vista práctica desplazable para mirar el archivo y luego regresar a la terminal. Para ayudar con legibilidad Nu resaltará la sintaxis de formatos comunes de archivos como de código, markdown, y más.</p><p>Debajo de la superficie Nu mira estos archivos de texto como una cadena larga. Próximamente hablaremos de cómo trabajar con estas cadenas para extraer los datos que necesitemos de ellas.</p><h2 id="trabajando-con-cadenas" tabindex="-1"><a class="header-anchor" href="#trabajando-con-cadenas" aria-hidden="true">#</a> Trabajando con cadenas</h2><p>Una parte importante de trabajar con datos llegando fuera de Nu es que no siempre estará en formato que Nu entiende. Comúnmente estos datos son proporcionados como una cadena.</p><p>Imaginemos que nos proporcionan estos datos de archivo:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open gente.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>Cada pedazo de dato que deseamos está separada por el símbolo de tubería (pipe &#39;|&#39;), y cada persona está en líneas separadas. Nu no contiene un formato de archivo delimitado con pleca (&#39;|&#39;) predeterminado, por lo que tendremos que parsearlo nosotros mismos.</p><p>Lo primero que queremos hacer al cargar el archivo es trabajarlo línea por línea:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open gente.txt | lines
---+------------------------------
 # | value
---+------------------------------
 0 | Octavia | Butler | Writer
 1 | Bob | Ross | Painter
 2 | Antonio | Vivaldi | Composer
---+------------------------------
</code></pre></div><p>Podemos darnos cuenta que estamos trabajando con las líneas porque estamos de vuelta a una tabla. Nuestro próximo paso es mirar si podemos dividir las filas a algo más útil. Para eso, usaremos el comando <code>split</code>. <code>split</code>, como implica el nombre, nos da una manera de dividir una cadena delimitada. Usaremos el subcomando <code>column</code> para dividir el contenido a varias columnas. Indicamos cuál es el delimitador y se hace el resto:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open gente.txt | lines | split column &quot;|&quot;
---+----------+-----------+-----------
 # | Column1  | Column2   | Column3
---+----------+-----------+-----------
 0 | Octavia  |  Butler   |  Writer
 1 | Bob      |  Ross     |  Painter
 2 | Antonio  |  Vivaldi  |  Composer
---+----------+-----------+-----------
</code></pre></div><p>Casi se ve correcto. Parece que hay espacio extra ahí. Cambiemos nuestro delimitador:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open gente.txt | lines | split column &quot; | &quot;
---+---------+---------+----------
 # | Column1 | Column2 | Column3
---+---------+---------+----------
 0 | Octavia | Butler  | Writer
 1 | Bob     | Ross    | Painter
 2 | Antonio | Vivaldi | Composer
---+---------+---------+----------
</code></pre></div><p>Nada mal. El comando <code>split</code> nos da datos que podemos usar. Adicionalmente nos crea nombres de columnas predeterminadas:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open gente.txt | lines | split column &quot; | &quot; | get Column1
---+---------
 # | value
---+---------
 0 | Octavia
 1 | Bob
 2 | Antonio
---+---------
</code></pre></div><p>También podemos nombrar nuestras columnas en vez de usar nombres predeterminados:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open gente.txt | lines | split column &quot; | &quot; primer_nombre apellido trabajo
---+---------------+-----------+----------
 # | primer_nombre | apellido  | trabajo
---+---------------+-----------+----------
 0 | Octavia       | Butler    | Writer
 1 | Bob           | Ross      | Painter
 2 | Antonio       | Vivaldi   | Composer
---+---------------+-----------+----------
</code></pre></div><p>Ahora que tenemos nuestros datos en una tabla podemos usar todos los comandos que hemos usado en tablas antes:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open gente.txt | lines | split column &quot; | &quot; primer_nombre apellido trabajo | sort-by primer_nombre
---+---------------+-----------+----------
 # | primer_nombre | apellido  | trabajo
---+---------------+-----------+----------
 0 | Antonio       | Vivaldi   | Composer
 1 | Bob           | Ross      | Painter
 2 | Octavia       | Butler    | Writer
---+---------------+-----------+----------
</code></pre></div><p>Hay otros comandos que puedes usar para trabajar con cadenas:</p><ul><li>str</li><li>lines</li><li>size</li></ul><p>También hay un conjunto de comandos auxiliares que podemos llamar si conocemos de antemano que los datos tienen una estructura que Nu debería de entender. Por ejemplo, abramos un Rust archivo lock:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.lock
# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
[[package]]
name = &quot;adhoc_derive&quot;
version = &quot;0.1.2&quot;
</code></pre></div><p>The <code>from</code> command can be used for each of the structured data text formats that Nu can open and understand by passing it the supported format as a subcommand.</p><p>El archivo &quot;Cargo.lock&quot; es un archivo en formato .toml pero la extensión del archivo no es .toml. Está bien, podemos usar el comando <code>from</code> usando el subcomando <code>toml</code>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.lock | from toml
----------+-------------
 metadata | package
----------+-------------
 [object] | [405 items]
----------+-------------
</code></pre></div><p>El comando <code>from</code> se puede usar para cada dato estructurado de formatos de texto que Nu pueda abrir y entender pasando el formato soportado como subcomando.</p><h2 id="abriendo-en-modo-crudo" tabindex="-1"><a class="header-anchor" href="#abriendo-en-modo-crudo" aria-hidden="true">#</a> Abriendo en modo crudo</h2><p>Mientras es útil poder abrir un archivo e inmediatamente trabajar con una tabla de sus datos, esto no siempre es lo que deseas hacer. Para llegar al texto subyacente, el comando <code>open</code> puede tomar una bandera opcional:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml --raw
[package]
name = &quot;nu&quot;
version = &quot;0.1.3&quot;
authors = [&quot;Yehuda Katz &lt;wycats@gmail.com&gt;&quot;, &quot;Jonathan Turner &lt;jonathan.d.turner@gmail.com&gt;&quot;]
description = &quot;A shell for the GitHub era&quot;
license = &quot;MIT&quot;
</code></pre></div><h2 id="abriendo-urls" tabindex="-1"><a class="header-anchor" href="#abriendo-urls" aria-hidden="true">#</a> Abriendo URLs</h2><p>Además de cargar archivos desde tu archivos de sistema, también puedes usar el comando <code>fetch</code> proporcionando una URL. Se cargará el contenido de la URL por internet y devolverá:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; fetch http://www.andresrobalino.com/feed.xml
----------
 rss
----------
 [1 item]
----------
</code></pre></div>`,45),s=[r];function d(i,c){return a(),o("div",null,s)}const u=e(n,[["render",d],["__file","cargando_datos.html.vue"]]);export{u as default};
