import{_ as e,z as t,A as a,a6 as o}from"./framework.3d018c9f.js";const n={},r=o(`<h1 id="メタデータ" tabindex="-1"><a class="header-anchor" href="#メタデータ" aria-hidden="true">#</a> メタデータ</h1><p>Nu を使用していると裏でなにか特別なことがおきているのではないかと思うことがあるでしょう。例えば、Nu がサポートしているファイル形式を忘れていて、余計に変換しようとしてしまったとしましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml | from toml
error: Expected a string from pipeline
- shell:1:18
1 | open Cargo.toml | from toml
  |                   ^^^^^^^^^ requires string input
- shell:1:5
1 | open Cargo.toml | from toml
  |      ---------- object originates from here
</code></pre></div><p>エラーメッセージは、<code>from toml</code>に渡したものが文字列ではなかったことだけではなく、元の値がどこから来たかも示しています。どうやってこれを知るのでしょうか。</p><p>Nu のパイプラインを流れる値には、多くの場合、メタデータと呼ばれる一連の追加情報が付加されます。これらはストアにあるアイテムにつけられているタグのようにタグと呼ばれています。これらのタグはデータには影響しませんが、データを操作する際の体験を向上させます。</p><p>もう一度<code>open</code>コマンドを実行してみましょう、ただし今回は、返されるタグを確認します。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml | tags
────────┬───────────────────────────────────────────
 span   │ [row end start]
 anchor │ /home/jonathant/Source/nushell/Cargo.toml
────────┴───────────────────────────────────────────
</code></pre></div><p>現在、パイプライン上の値について２つのメタデータを追跡しています。このデータがどこから読み込まれたかをしめす anchor があることに気づくでしょう。これにより Nu はデータの表示方法をよりよく理解できるのです。</p><p>今度は span をみてみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml | tags | get span
───────┬────
 start │ 5
 end   │ 15
───────┴────
</code></pre></div><p>ここでの&quot;start&quot;と&quot;end&quot;の span は下線が行のどこにあるのかを示しています。5 から 15 まで数えてみるとそれが&quot;Cargo.toml&quot;ファイル名と一致することがわかるでしょう。このようにして、さきほどみたエラーはどこに下線をひくべきかをしったのです。</p>`,11),s=[r];function l(c,p){return t(),a("div",null,s)}const g=e(n,[["render",l],["__file","metadata.html.vue"]]);export{g as default};
