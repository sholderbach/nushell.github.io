import{_ as e,z as a,A as t,a6 as s}from"./framework.3d018c9f.js";const c={},d=s(`<h1 id="エイリアス" tabindex="-1"><a class="header-anchor" href="#エイリアス" aria-hidden="true">#</a> エイリアス</h1><p>Nu ではパイプラインを利用して自由にデータやシステムを操作できますが、その反面多くのタイピングを要してしまいます。一度作成したパイプラインを保存しておき再利用できるようにしておきたいところです。</p><p>そこでエイリアスの出番です。</p><p>エイリアスを使うとコマンドのブロックに名前をつけることができます。エイリアスを実行するとそのコマンドブロックが実行されます。</p><p>例:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; alias ls-names [] { ls | select name }
&gt; ls-names
────┬────────────────────
 #  │ name
────┼────────────────────
  0 │ 404.html
  1 │ CONTRIBUTING.md
  2 │ Gemfile
  3 │ Gemfile.lock
  4 │ LICENSE
</code></pre></div><h2 id="パラメータ" tabindex="-1"><a class="header-anchor" href="#パラメータ" aria-hidden="true">#</a> パラメータ</h2><p>エイリアスは、ブロックに渡されるオプションのパラメータをもつことができます。これらはブロック内の新しい変数になります。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; alias e [msg] { echo $msg }
&gt; e &quot;hello world&quot;
hello world
</code></pre></div><p>パラメータは任意の数設定することができ、ユーザが値を提供しなかった場合、ブロック内では Nothing と評価されて削除されます。</p><h2 id="保存" tabindex="-1"><a class="header-anchor" href="#保存" aria-hidden="true">#</a> 保存</h2><p>デフォルトでは、エイリアスは現在のセッションでのみ有効です。これは一時的なヘルパーや新しいエイリアスをテストするのに便利ですが、エイリアスを有効に活用するには保存しておく必要があります。エイリアスを保存するには、alias を<code>--save</code>(もしくは<code>-s</code>)つきで実行します。例えば</p><div class="language-text" data-ext="text"><pre class="language-text"><code>alias e --save [msg] { echo $msg }
</code></pre></div><p>エイリアスは起動時の設定に保存され、<code>config get startup</code>で確認することができます。<code>startup</code>設定がまだ存在していない場合はエラーが表示されます。</p><p>config.toml ファイルのエイリアスを直接編集することもできます。<code>vi</code>を使う場合は</p><div class="language-text" data-ext="text"><pre class="language-text"><code>config path | vi $it
</code></pre></div>`,16),n=[d];function o(l,i){return a(),t("div",null,n)}const p=e(c,[["render",o],["__file","aliases.html.vue"]]);export{p as default};
