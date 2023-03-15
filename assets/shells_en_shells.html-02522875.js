import{_ as s,M as n,p as t,q as r,Q as l,t as e,N as i,U as d,a1 as a}from"./framework-344bb0e4.js";const c={},u=a(`<h1 id="shells-en-shells" tabindex="-1"><a class="header-anchor" href="#shells-en-shells" aria-hidden="true">#</a> Shells en shells</h1><h2 id="trabajando-con-multiples-directorios" tabindex="-1"><a class="header-anchor" href="#trabajando-con-multiples-directorios" aria-hidden="true">#</a> Trabajando con múltiples directorios</h2><p>Mientras es común trabajar en un directorio puede ser beneficioso trabajar en múltiples lugares al mismo tiempo. Para esto Nu ofrece el concepto de &quot;shells&quot;. Tal como implica, son una manera de tener activo múltiples shells en uno permitiendote rápidamente saltar entre directorios de trabajo y más.</p><p>Para empezar entremos a un directorio:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathan/Source/nushell(master)&gt; enter ../lark
/home/jonathan/Source/lark(master)&gt; ls
----+----------------+-----------+----------+---------+---------------+---------------
 #  | name           | type      | readonly | size    | accessed      | modified
----+----------------+-----------+----------+---------+---------------+---------------
 0  | Cargo.toml     | File      |          | 2.2 KB  | 6 months ago  | 6 months ago
 1  | target         | Directory |          | 4.1 KB  | 10 months ago | 6 months ago
 2  | notes          | Directory |          | 4.1 KB  | 10 months ago | 6 months ago
</code></pre></div><p>Entrar es similar a cambiar directorios (como vimos previamente con el comando <code>cd</code>). Esto permite saltar al directorio para trabajar dentro del mismo. En lugar de cambiar de directorio, ahora estamos en dos directorios. Para ver esto con más claridad podemos usar el comando <code>shells</code> que enumera los directorios actualmente activos:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathan/Source/lark(master)&gt; shells
---+---+------------+-------------------------------
 # |   | name       | path
---+---+------------+-------------------------------
 0 |   | filesystem | /home/jonathan/Source/nushell
 1 | X | filesystem | /home/jonathan/Source/lark
---+---+------------+-------------------------------
</code></pre></div><p>El comando <code>shells</code> nos muestra que hay dos shells activos: nuestro directorio fuente original &quot;nushell&quot; y ahora este nuevo directorio &quot;lark&quot;.</p><p>Podemos saltar entre estas shells con los accesos directos <code>n</code> y <code>p</code>, cortos de siguiente &quot;next&quot; y previo &quot;previous&quot;:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathan/Source/lark(master)&gt; n
/home/jonathan/Source/nushell(master)&gt; p
/home/jonathan/Source/lark(master)&gt;
</code></pre></div><p>Podemos notar el directorio cambiando pero también siempre podremos regresar al directorio previo en el cual estábamos trabajando. Esto nos permite trabajar en múltiples directorio en la misma sesión.</p><h2 id="saliendo-del-shell" tabindex="-1"><a class="header-anchor" href="#saliendo-del-shell" aria-hidden="true">#</a> Saliendo del shell</h2><p>Puedes salir de una shell que hayas entrado (usando <code>enter</code>) a través del comando <code>exit</code>. Si esta es la última shell, Nu se cerrará.</p><p>Siempre puedes cerrar Nu incluso si tienes múltiples shells activas usando el comando <code>exit</code> pasando la bandera <code>--now</code> de la siguiente forma <code>exit --now</code></p><h2 id="mas-alla-de-los-directorios" tabindex="-1"><a class="header-anchor" href="#mas-alla-de-los-directorios" aria-hidden="true">#</a> Más allá de los directorios</h2><p>Nu también puede crear shells de otras cosas aparte de las rutas del sistema de archivos. Digamos por ejemplo que estás trabajando con un gran conjunto de datos y no deseas perderte dentro del mismo.</p>`,16),m=a(`<p>Entraremos al archivo &quot;Cargo.toml&quot; del código fuente de Nu:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/Users/andresrobalino/Code/nushell(master)&gt; enter Cargo.toml
/&gt; ls
------------+--------------+------------------+----------+----------
 bin        | dependencies | dev-dependencies | lib      | package
------------+--------------+------------------+----------+----------
 [11 items] | [object]     | [object]         | [object] | [object]
------------+--------------+------------------+----------+----------
</code></pre></div><p>Por el momento solo hemos entrado al archivo y podemos observar en la tabla devuelta por <code>ls</code> lo que hay. Si prestas atención hemos entrado a un archivo con formato que reconoce Nu (.toml). Nu también nos proyecta el contenido del archivo en forma de sistema de archivos para explorarlo como si estuvieramos dentro de un sistema de archivos.</p><p>Antes de continuar revisemos las shells activas:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/&gt; shells
---+---+-------------------------------------------------+------------------------------------
 # |   | name                                            | path
---+---+-------------------------------------------------+------------------------------------
 0 |   | filesystem                                      | /Users/andresrobalino/Code/nushell
 1 | X | {/Users/andresrobalino/Code/nushell/Cargo.toml} | /
---+---+-------------------------------------------------+------------------------------------

</code></pre></div><p>Observamos que hay dos activas indicándonos que nos encontramos dentro de &quot;Cargo.toml&quot; en la ruta predeterminada &quot;/&quot;. Revisemos el listado de nuevo:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/&gt; ls
------------+--------------+------------------+----------+----------
 bin        | dependencies | dev-dependencies | lib      | package
------------+--------------+------------------+----------+----------
 [11 items] | [object]     | [object]         | [object] | [object]
------------+--------------+------------------+----------+----------
</code></pre></div><p>Puede que los complementos se encuentren en &quot;bin&quot;, vamos ahí:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; cd bin
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
</code></pre></div><p>Notar que siempre podemos saltar de vuelta al directorio en el que estuvimos trabajando usando <code>p</code> (para previo).</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/bin&gt; p
</code></pre></div><p>Verifiquemos las shells:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/Users/andresrobalino/Code/nushell(master)&gt; shells
---+---+-------------------------------------------------+------------------------------------
 # |   | name                                            | path
---+---+-------------------------------------------------+------------------------------------
 0 | X | filesystem                                      | /Users/andresrobalino/Code/nushell
 1 |   | {/Users/andresrobalino/Code/nushell/Cargo.toml} | /bin
---+---+-------------------------------------------------+------------------------------------

</code></pre></div><p>Nos encontramos ahora en la shell donde estuvimos antes de entrar al archivo &quot;Cargo.toml&quot;, vamos al directorio donde se encuentra el código fuente de los complementos (plugins):</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/Users/andresrobalino/Code/nushell(master)&gt; cd src/plugins/
/Users/andresrobalino/Code/nushell/src/plugins(master)&gt; ls
----+---------------+------+----------+---------+------------+------------
 #  | name          | type | readonly | size    | accessed   | modified
----+---------------+------+----------+---------+------------+------------
 0  | doc.rs        | File |          | 3.0 KB  | a week ago | a week ago
 1  | sum.rs        | File |          | 3.0 KB  | a week ago | a week ago
 2  | inc.rs        | File |          | 11.8 KB | a week ago | a week ago
 3  | sys.rs        | File |          | 9.2 KB  | 2 days ago | 2 days ago
 4  | edit.rs       | File |          | 2.7 KB  | a week ago | a week ago
 5  | str.rs        | File |          | 21.4 KB | 5 days ago | 5 days ago
 6  | secret.rs     | File |          | 1.8 KB  | 2 days ago | 2 days ago
 7  | skip.rs       | File |          | 1.7 KB  | a week ago | a week ago
 8  | binaryview.rs | File |          | 13.0 KB | a week ago | a week ago
 9  | tree.rs       | File |          | 3.0 KB  | a week ago | a week ago
 10 | add.rs        | File |          | 2.7 KB  | a week ago | a week ago
 11 | textview.rs   | File |          | 9.4 KB  | 5 days ago | 5 days ago
----+---------------+------+----------+---------+------------+------------
</code></pre></div><p>Ahora podemos comparar los dos para verificar si faltan complementos adicionales o si hay complementos adicionales que necesitemos agregar a nuestro archivo &quot;Cargo.toml&quot; (¡y claramente falta agregarlo a &quot;Cargo.toml&quot;!)</p>`,16);function p(g,h){const o=n("RouterLink");return t(),r("div",null,[u,l("p",null,[e("Para ver cómo funciona haremos el siguiente ejercicio. Actualmente en Nu tenemos enumerados los "),i(o,{to:"/es/book/plugins.html"},{default:d(()=>[e("complementos")]),_:1}),e(' desarrollados (plugins) en "Cargo.toml" digamos que también acabamos de crear un nuevo complemento en el directorio src/plugins llamado "doc.rs" y nos interesa saber que se encuentre enumerado también en "Cargo.toml" para que se instale al compilar Nu.')]),m])}const b=s(c,[["render",p],["__file","shells_en_shells.html.vue"]]);export{b as default};
