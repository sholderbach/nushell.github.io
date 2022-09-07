import{_ as e,o as a,c as s,e as o}from"./app.8034769a.js";const r={},n=o(`<h1 id="aliases" tabindex="-1"><a class="header-anchor" href="#aliases" aria-hidden="true">#</a> Aliases</h1><p>La habilidad de Nu para componer tuber\xEDas largas permite tener bastante control de su sistema y datos, pero a costas de tipear mucho. Ser\xEDa ideal que puedas grabar las tuber\xEDas bien elaboradas para hacer uso de esas las veces que quieras.</p><p>Aqu\xED es donde aparecen los aliases.</p><p>Un alias te permite crear un nombre corto para un bloque de comandos. Cuando se ejecuta el alias, es lo equivalente como si hayas tipeado el bloque de comandos.</p><p>Ejemplo:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; alias ls-nombres [] { ls | select name }
&gt; ls-nombres
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502 name
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 404.html
  1 \u2502 CONTRIBUTING.md
  2 \u2502 Gemfile
  3 \u2502 Gemfile.lock
  4 \u2502 LICENSE
</code></pre></div><h2 id="parametros" tabindex="-1"><a class="header-anchor" href="#parametros" aria-hidden="true">#</a> Par\xE1metros</h2><p>Tambi\xE9n pueden tomar par\xE1metros opcionales que son pasadas al bloque. Cada par\xE1metro se convierte en una variable en el bloque.</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; alias decir [mensaje] { echo $mensaje }
&gt; decir &quot;\xA1hola!&quot;
\xA1hola!
</code></pre></div><p>Puedes tener un n\xFAmero arbitrario de estos argumentos. Cuando el usuario no proporciona un valor, la variable en el bloque evaulara a <code>Nothing</code> y ser\xE1 eliminada.</p>`,10),t=[n];function l(i,d){return a(),s("div",null,t)}const u=e(r,[["render",l],["__file","aliases.html.vue"]]);export{u as default};
