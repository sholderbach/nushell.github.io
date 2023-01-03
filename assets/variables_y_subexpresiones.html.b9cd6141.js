import{_ as e,z as a,A as s,a6 as r}from"./framework.3d018c9f.js";const o={},n=r(`<h1 id="variables-y-subexpresiones" tabindex="-1"><a class="header-anchor" href="#variables-y-subexpresiones" aria-hidden="true">#</a> Variables y Subexpresiones</h1><p>En Nushell hay dos tipos de expresiones de evaluación: variables y subexpresiones. Cuando lees expresiones que empiezan con el signo dólar (<code>$</code>) sabes que trabajas con una expresión de evaluación. Esto indica que cuando Nushell toma el valor en esta posición, necesitará ejecutar un paso de evaluación para procesar la expresión y posterioremente usar el valor del resultado. Ambas formas de expresión de evaluación soportan un modo simple y una forma ruta (<code>path</code>) para trabajar con datos más complejos.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>La variable es el más simple de ambas expresiones de evaluación. Durante la evaluación, una variable es remplazada for su valor.</p><p>Si creamos una variable, podemos imprimir su contenido al usar <code>$</code> para referir a la misma:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let mi_valor = 4
&gt; echo $mi_valor
4
</code></pre></div><h2 id="variables-rutas-paths" tabindex="-1"><a class="header-anchor" href="#variables-rutas-paths" aria-hidden="true">#</a> Variables rutas (paths)</h2><p>Una variable ruta funciona al llegar dentro del contenido de una variable, navegando columnas dentro de la misma para alcanzar un valor final. Supongamos que en vez de <code>4</code>, hayamos asignado una tabla como valor:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let mi_valor = [[nombre]; [pruebausuario]]
</code></pre></div><p>Podemos usar variables ruta para evaluar la variable <code>$mi_valor</code> y obtener el valor de la columna <code>nombre</code> con un solo paso:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo $mi_valor.nombre
pruebausuario
</code></pre></div><h2 id="subexpresiones" tabindex="-1"><a class="header-anchor" href="#subexpresiones" aria-hidden="true">#</a> Subexpresiones</h2><p>Siempre puedes evaluar subexpresiones y usar su resultado envolviendo la expresión entre paréntesis <code>()</code>.</p><p>Los paréntesis contienen una tubería que se ejecutará hasta completar, y su valor final será usado. Por ejemplo, <code>(ls)</code> ejecutaría el comando <code>ls</code>, devolviendo como resultado la tabla y <code>(git branch --show-current)</code> ejecutará el comando externo git y devolver una cadena con el nombre de la rama actual. También puedes usar paréntesis para ejecutar expresiones matemáticas como <code>(2 + 3)</code>.</p><p>Subexpresiones también pueden ser tuberías y no solamente comandos individuales. Si desearamos una lista de nombres de archivos superiores a diez kilobytes, podemos utilizar subexpresiones para ejecutar una tubería y asignar el resultado a una variable:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let nombres_de_archivos_grandes = (ls | where size &gt; 10kb)
&gt; echo $nombres_de_archivos_grandes
───┬────────────┬──────┬──────────┬──────────────
 # │    name    │ type │   size   │   modified
───┼────────────┼──────┼──────────┼──────────────
 0 │ Cargo.lock │ File │ 155.3 KB │ 17 hours ago
 1 │ README.md  │ File │  15.9 KB │ 17 hours ago
───┴────────────┴──────┴──────────┴──────────────
</code></pre></div><h2 id="subexpresiones-y-rutas" tabindex="-1"><a class="header-anchor" href="#subexpresiones-y-rutas" aria-hidden="true">#</a> Subexpresiones y rutas</h2><p>Subexpresiones también soportan rutas. Por ejemplo, supongamos que queremos una lista de nombres de archivos en el directorio actual. Una manera de hacerlo es con una tubería:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | get name
</code></pre></div><p>Pero también podemos hacer una acción similar con un solo paso usando una subexpresión de ruta:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo (ls).name
</code></pre></div><p>Todo depende de las necesidades del código o estilo particular que trabaje mejor para ti.</p>`,22),t=[n];function i(d,l){return a(),s("div",null,t)}const c=e(o,[["render",i],["__file","variables_y_subexpresiones.html.vue"]]);export{c as default};
