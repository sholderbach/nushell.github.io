import{_ as e,z as a,A as s,a6 as o}from"./framework.3d018c9f.js";const r={},t=o(`<h1 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases" aria-hidden="true">#</a> Aliases</h1><p>La habilidad de Nu para componer tuberías largas permite tener bastante control de su sistema y datos, pero a costas de tipear mucho. Sería ideal que puedas grabar las tuberías bien elaboradas para hacer uso de esas las veces que quieras.</p><p>Aquí es donde aparecen los aliases.</p><p>Un alias te permite crear un nombre corto para un bloque de comandos. Cuando se ejecuta el alias, es lo equivalente como si hayas tipeado el bloque de comandos.</p><p>Ejemplo:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; alias ls-nombres [] { ls | select name }
&gt; ls-nombres
────┬────────────────────
 #  │ name
────┼────────────────────
  0 │ 404.html
  1 │ CONTRIBUTING.md
  2 │ Gemfile
  3 │ Gemfile.lock
  4 │ LICENSE
</code></pre></div><h2 id="parametros" tabindex="-1"><a class="header-anchor" href="#parametros" aria-hidden="true">#</a> Parámetros</h2><p>También pueden tomar parámetros opcionales que son pasadas al bloque. Cada parámetro se convierte en una variable en el bloque.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; alias decir [mensaje] { echo $mensaje }
&gt; decir &quot;¡hola!&quot;
¡hola!
</code></pre></div><p>Puedes tener un número arbitrario de estos argumentos. Cuando el usuario no proporciona un valor, la variable en el bloque evaulara a <code>Nothing</code> y será eliminada.</p>`,10),n=[t];function l(i,d){return a(),s("div",null,n)}const u=e(r,[["render",l],["__file","aliases.html.vue"]]);export{u as default};
