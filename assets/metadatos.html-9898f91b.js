import{_ as e,p as a,q as o,a1 as t}from"./framework-344bb0e4.js";const n={},s=t(`<h1 id="metadatos" tabindex="-1"><a class="header-anchor" href="#metadatos" aria-hidden="true">#</a> Metadatos</h1><p>Al usar Nu es posible que hayan momentos que has encontrado como si algo extra sucediera detrás de escenas. Por ejemplo digamos que intentas abrir un archivo soportado por Nu para luego olvidarte e intentar convertir nuevamente:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml | from toml
error: Expected a string from pipeline
- shell:1:18
1 | open Cargo.toml | from toml
  |                   ^^^^^^^^^ requires string input
- shell:1:5
1 | open Cargo.toml | from toml
  |      ---------- object originates from here
</code></pre></div><p>El mensaje de error nos indica que hemos proporcionado a <code>from toml</code> algo distinto a una cadena pero también el origen del valor. ¿Cómo puede saberlo?</p><p>Valores que fluyen a través de la tubería en Nu comúnmente disponen de información adicional (o metadatos) adjuntadas en las mismas. Se conocen como etiquetas como las etiquetas en una tienda. Estas etiquetas no afecta los datos pero permiten a Nu mejorar la experiencia mientras se trabaja con esos datos.</p><p>Nuevamente ejecutemos el comando <code>open</code> pero esta vez observaremos las etiquetas que nos devuelve:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml | tags
----------+------------------------------------------
 span     | anchor
----------+------------------------------------------
 [object] | /home/jonathan/Source/nushell/Cargo.toml
----------+------------------------------------------
</code></pre></div><p>Actualmente rastreamos dos pedazos de metadatos de los valores en la tubería. Puedes darte cuenta que disponemos del ancla que nos da la ubicación de dónde se cargaron los datos. Esto puede ayudar a Nu entender mejor como presentar datos.</p><p>También hay lapso (span). Miremos más de cerca a eso:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml | tags | get span
-------+-----
 start | end
-------+-----
 5     | 15
-------+-----
</code></pre></div><p>El lapso &quot;start&quot; y &quot;end&quot; aquí se refiere en dónde estará el subrayado en la línea. Si cuentas a partir de 5 y luego hasta 15 podrás observar que se alinea con el nombre de archivo &quot;Cargo.toml&quot;. Así es como Nu sabía qué subrayar apropiadamente en el error que vimos previamente.</p>`,11),r=[s];function d(l,c){return a(),o("div",null,r)}const u=e(n,[["render",d],["__file","metadatos.html.vue"]]);export{u as default};
