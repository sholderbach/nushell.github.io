import{_ as s,r as d,o as n,c as t,a as r,b as c,w as i,e as a,d as o}from"./app.8034769a.js";const p={},m=a(`<h1 id="o-pipeline" tabindex="-1"><a class="header-anchor" href="#o-pipeline" aria-hidden="true">#</a> O pipeline</h1><p>Um dos principais designs do Nu \xE9 o pipeline, uma ideia de design que tem suas ra\xEDzes d\xE9cadas atr\xE1s, na filosofia original por tr\xE1s do Unix. Assim como Nu se extende a partir do tipo de dado string do Unix, tamb\xE9m extende a ideia do pipeline para incluir mais do que apenas texto.</p><h2 id="basico" tabindex="-1"><a class="header-anchor" href="#basico" aria-hidden="true">#</a> B\xE1sico</h2><p>Um pipeline \xE9 constru\xEDdo com tr\xEAs partes: a entrada, o filtro e a sa\xEDda.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> <span class="token string">&quot;Cargo.toml&quot;</span> <span class="token operator">|</span> inc package.version <span class="token operator">|</span> save <span class="token string">&quot;Cargo_new.toml&quot;</span>
</code></pre></div><p>O primeiro comando, <code>open &quot;Cargo.toml&quot;</code>, \xE9 uma entrada (\xE0s vezes tamb\xE9m chamado de &quot;fonte&quot; ou &quot;produtor&quot;). Ele cria ou carrega dados com os quais alimenta o pipeline. \xC9 a partir da entrada que os pipelines conseguem dados para trabalhar. Comandos como <code>ls</code> tamb\xE9m s\xE3o entradas, j\xE1 que pegam dados do sistema de arquivos e os enviam atrav\xE9s dos pipelines para que possam ser usados adiante.</p><p>O segundo comando, <code>inc package.version</code>, \xE9 um filtro. Filtros recebem dados e normalmente fazem alguma coisa com eles. Podem mud\xE1-los (como o comando <code>inc</code> no nosso exemplo), ou podem executar outra opera\xE7\xE3o, como registro de log, conforme os valores passam.</p><p>O \xFAltimo comando, <code>save &quot;Cargo_new.toml&quot;</code>, \xE9 uma sa\xEDda (\xE0s vezes chamado de &quot;pia&quot; ou &quot;ralo&quot;). Uma sa\xEDda recebe dados do pipeline e executa alguma opera\xE7\xE3o final sobre eles. No nosso exemplo, salvamos o que chega pelo pipeline em um arquivo como passo final. Outros tipos de comandos de sa\xEDda podem exibir os dados para o usu\xE1rio.</p><h2 id="trabalhando-com-comandos-externos" tabindex="-1"><a class="header-anchor" href="#trabalhando-com-comandos-externos" aria-hidden="true">#</a> Trabalhando com comandos externos</h2>`,9),u=o("Os comandos do Nu se comunicam entre si usando tipos de dados fornecidos pelo pr\xF3prio Nu (veja "),l=o("tipos de dados"),h=o("), mas e os comandos de fora do Nu? Vejamos alguns exemplos de como trabalhar com comandos externos:"),_=a(`<p><code>comando_interno | comando_externo</code></p><p>Dados fluem do comando_interno para o comando_externo. Espera-se que esses dados sejam strings, para que possam ser enviados para a entrada padr\xE3o (<code>stdin</code>) do comando_externo.</p><p><code>comando_externo | comando_interno</code></p><p>Dados vindo de um comando externo para o Nu s\xE3o agrupados em uma string \xFAnica e, ent\xE3o, passados para o comando_interno. Comandos como <code>lines</code> ajudam a trazer dados de comandos externos de modo a facilitar sua utiliza\xE7\xE3o.</p><p><code>comando_externo_1 | comando_externo_2</code></p><p>Nu trabalha com dados canalizados entre dois comandos externos da mesma maneira que em outros shells, como Bash. A sa\xEDda padr\xE3o (<code>stdout</code>) do comando_externo_1 \xE9 conectada \xE0 entrada padr\xE3o (<code>stdin</code>) do comando_externo_2, permitindo que os dados fluam naturalmente entre os dois comandos.</p><h2 id="nos-bastidores" tabindex="-1"><a class="header-anchor" href="#nos-bastidores" aria-hidden="true">#</a> Nos bastidores</h2><p>Voc\xEA pode ter se perguntado como vemos uma tabela se o <code>ls</code> \xE9 uma entrada e n\xE3o uma sa\xEDda. Nu adiciona automaticamente por n\xF3s uma sa\xEDda usando outro comando chamado <code>autoview</code>, que \xE9 adicionado a qualquer pipeline que n\xE3o tenha uma sa\xEDda que nos permita ver o resultado.</p><p>Com efeito, o comando:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
</code></pre></div><p>E o pipeline:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> autoview
</code></pre></div><p>S\xE3o a mesma coisa.</p>`,13);function g(x,q){const e=d("RouterLink");return n(),t("div",null,[m,r("p",null,[u,c(e,{to:"/pt-BR/book/tipos_de_dados.html"},{default:i(()=>[l]),_:1}),h]),_])}const f=s(p,[["render",g],["__file","pipeline.html.vue"]]);export{f as default};
