import{_ as a,p as o,q as e,a1 as s}from"./framework-344bb0e4.js";const n={},t=s(`<h1 id="metadados" tabindex="-1"><a class="header-anchor" href="#metadados" aria-hidden="true">#</a> Metadados</h1><p>Usando o Nu vocë pode se deparar com momentos em que sente como se houvesse algo a mais acontecendo nos bastidores. Por exemplo, digamos que vocë vai tentar abrir um arquivo mas se esquece que ele é suportado pelo Nu e tenta convertê-lo novamente:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> from toml
error: Expected a string from pipeline
- shell:1:18
<span class="token number">1</span> <span class="token operator">|</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> from toml
  <span class="token operator">|</span>                   ^^^^^^^^^ requires string input
- shell:1:5
<span class="token number">1</span> <span class="token operator">|</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> from toml
  <span class="token operator">|</span>      ---------- object originates from here
</code></pre></div><p>A mensagem de erro nos diz não só que o que passamos para o <code>from toml</code> não era uma string, mas também de onde o valor veio originalmente. Como o Nu sabe isso?</p><p>Valores que fluem pelo pipeline do Nu normalmente trazem consigo um conjunto adicional de informações, ou metadados, conhecidos como tags, semnelhantes às etiquetas penduradas nos produtos de uma loja. Essas tags não afetam os dados, mas proporcionam ao Nu uma forma de aprimorar a experiência de se trabalhar com esses dados.</p><p>Vamos executar o comando <code>open</code> de novo, mas, dessa vez, vamos olhar as tags que ele retorna:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> tags
----------+------------------------------------------
 span     <span class="token operator">|</span> origin
----------+------------------------------------------
 <span class="token punctuation">[</span>object<span class="token punctuation">]</span> <span class="token operator">|</span> /home/jonathan/Source/nushell/Cargo.toml
----------+------------------------------------------
</code></pre></div><p>Atualmente, rastreamos dois pedaços de metadados dos valores no pipeline. Você pode observar que temos a origem, que nos dá a localização de onde os dados foram carregados, o que pode ajudar o Nu a entender melhor como apresentá-los.</p><p>Há também um coluna intervalo (span). Vamos ver mais de perto:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> Cargo.toml <span class="token operator">|</span> tags <span class="token operator">|</span> get span
-------+-----
 start <span class="token operator">|</span> end
-------+-----
 <span class="token number">5</span>     <span class="token operator">|</span> <span class="token number">15</span>
-------+-----
</code></pre></div><p>O início (start) e fim (end) do intervalo aqui se referem a onde o sublinhado ficará na linha da mensagem de erro. Se você contar até depois do 5 e então até 15, verá que esse intervalo coincide com o nome do arquivo &quot;Cargo.toml&quot;. É assim que o erro que vimos antes sabe onde sublinhar a mensagem.</p>`,11),r=[t];function p(c,d){return o(),e("div",null,r)}const m=a(n,[["render",p],["__file","metadados.html.vue"]]);export{m as default};
