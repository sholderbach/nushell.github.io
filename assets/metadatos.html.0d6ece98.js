import{_ as e,o as a,c as o,e as t}from"./app.8034769a.js";const n={},s=t(`<h1 id="metadatos" tabindex="-1"><a class="header-anchor" href="#metadatos" aria-hidden="true">#</a> Metadatos</h1><p>Al usar Nu es posible que hayan momentos que has encontrado como si algo extra sucediera detr\xE1s de escenas. Por ejemplo digamos que intentas abrir un archivo soportado por Nu para luego olvidarte e intentar convertir nuevamente:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | from toml
error: Expected a string from pipeline
- shell:1:18
1 | open Cargo.toml | from toml
  |                   ^^^^^^^^^ requires string input
- shell:1:5
1 | open Cargo.toml | from toml
  |      ---------- object originates from here
</code></pre></div><p>El mensaje de error nos indica que hemos proporcionado a <code>from toml</code> algo distinto a una cadena pero tambi\xE9n el origen del valor. \xBFC\xF3mo puede saberlo?</p><p>Valores que fluyen a trav\xE9s de la tuber\xEDa en Nu com\xFAnmente disponen de informaci\xF3n adicional (o metadatos) adjuntadas en las mismas. Se conocen como etiquetas como las etiquetas en una tienda. Estas etiquetas no afecta los datos pero permiten a Nu mejorar la experiencia mientras se trabaja con esos datos.</p><p>Nuevamente ejecutemos el comando <code>open</code> pero esta vez observaremos las etiquetas que nos devuelve:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | tags
----------+------------------------------------------
 span     | anchor
----------+------------------------------------------
 [object] | /home/jonathan/Source/nushell/Cargo.toml
----------+------------------------------------------
</code></pre></div><p>Actualmente rastreamos dos pedazos de metadatos de los valores en la tuber\xEDa. Puedes darte cuenta que disponemos del ancla que nos da la ubicaci\xF3n de d\xF3nde se cargaron los datos. Esto puede ayudar a Nu entender mejor como presentar datos.</p><p>Tambi\xE9n hay lapso (span). Miremos m\xE1s de cerca a eso:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.toml | tags | get span
-------+-----
 start | end
-------+-----
 5     | 15
-------+-----
</code></pre></div><p>El lapso &quot;start&quot; y &quot;end&quot; aqu\xED se refiere en d\xF3nde estar\xE1 el subrayado en la l\xEDnea. Si cuentas a partir de 5 y luego hasta 15 podr\xE1s observar que se alinea con el nombre de archivo &quot;Cargo.toml&quot;. As\xED es como Nu sab\xEDa qu\xE9 subrayar apropiadamente en el error que vimos previamente.</p>`,11),r=[s];function d(l,c){return a(),o("div",null,r)}const u=e(n,[["render",d],["__file","metadatos.html.vue"]]);export{u as default};
