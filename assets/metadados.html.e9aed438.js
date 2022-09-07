import{_ as a,o,c as e,e as s}from"./app.8034769a.js";const n={},t=s(`<h1 id="metadados" tabindex="-1"><a class="header-anchor" href="#metadados" aria-hidden="true">#</a> Metadados</h1><p>Usando o Nu voc\xEB pode se deparar com momentos em que sente como se houvesse algo a mais acontecendo nos bastidores. Por exemplo, digamos que voc\xEB vai tentar abrir um arquivo mas se esquece que ele \xE9 suportado pelo Nu e tenta convert\xEA-lo novamente:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> from toml
error: Expected a string from pipeline
- shell:1:18
<span class="token number">1</span> <span class="token operator">|</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> from toml
  <span class="token operator">|</span>                   ^^^^^^^^^ requires string input
- shell:1:5
<span class="token number">1</span> <span class="token operator">|</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> from toml
  <span class="token operator">|</span>      ---------- object originates from here
</code></pre></div><p>A mensagem de erro nos diz n\xE3o s\xF3 que o que passamos para o <code>from toml</code> n\xE3o era uma string, mas tamb\xE9m de onde o valor veio originalmente. Como o Nu sabe isso?</p><p>Valores que fluem pelo pipeline do Nu normalmente trazem consigo um conjunto adicional de informa\xE7\xF5es, ou metadados, conhecidos como tags, semnelhantes \xE0s etiquetas penduradas nos produtos de uma loja. Essas tags n\xE3o afetam os dados, mas proporcionam ao Nu uma forma de aprimorar a experi\xEAncia de se trabalhar com esses dados.</p><p>Vamos executar o comando <code>open</code> de novo, mas, dessa vez, vamos olhar as tags que ele retorna:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> tags
----------+------------------------------------------
 span     <span class="token operator">|</span> origin
----------+------------------------------------------
 <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> /home/jonathan/Source/nushell/Cargo.toml
----------+------------------------------------------
</code></pre></div><p>Atualmente, rastreamos dois peda\xE7os de metadados dos valores no pipeline. Voc\xEA pode observar que temos a origem, que nos d\xE1 a localiza\xE7\xE3o de onde os dados foram carregados, o que pode ajudar o Nu a entender melhor como apresent\xE1-los.</p><p>H\xE1 tamb\xE9m um coluna intervalo (span). Vamos ver mais de perto:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> tags <span class="token operator">|</span> get span
-------+-----
 start <span class="token operator">|</span> end
-------+-----
 <span class="token number">5</span>     <span class="token operator">|</span> <span class="token number">15</span>
-------+-----
</code></pre></div><p>O in\xEDcio (start) e fim (end) do intervalo aqui se referem a onde o sublinhado ficar\xE1 na linha da mensagem de erro. Se voc\xEA contar at\xE9 depois do 5 e ent\xE3o at\xE9 15, ver\xE1 que esse intervalo coincide com o nome do arquivo &quot;Cargo.toml&quot;. \xC9 assim que o erro que vimos antes sabe onde sublinhar a mensagem.</p>`,11),r=[t];function p(c,l){return o(),e("div",null,r)}const m=a(n,[["render",p],["__file","metadados.html.vue"]]);export{m as default};
