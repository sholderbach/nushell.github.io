import{_ as e,p as a,q as t,a1 as n}from"./framework-344bb0e4.js";const s={},d=n(`<h1 id="テーブルを扱う" tabindex="-1"><a class="header-anchor" href="#テーブルを扱う" aria-hidden="true">#</a> テーブルを扱う</h1><p>Nu でデータを表示する一般的な方法はテーブルを使用することです。Nu には、探しているものを見つけやすくしたり、必要なデータを絞り込んだりするのに便利なテーブルを操作するためのコマンドがたくさん用意されています。</p><p>まずはじめに、今回利用するテーブルを確認しましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ files.rs      │ File │  4.6 KB │ 5 days ago
 1 │ lib.rs        │ File │   330 B │ 5 days ago
 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago
 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago
 4 │ path.rs       │ File │  2.1 KB │ 5 days ago
 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago
───┴───────────────┴──────┴─────────┴────────────
</code></pre></div><h2 id="データのソート" tabindex="-1"><a class="header-anchor" href="#データのソート" aria-hidden="true">#</a> データのソート</h2><p>ソートに利用する列名を指定して、<code>sort-by</code>コマンドを呼びだすことでテーブルをソートできます。ファイルのサイズでテーブルをソートしたいとしましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by size
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ lib.rs        │ File │   330 B │ 5 days ago
 1 │ signature.rs  │ File │  1.2 KB │ 5 days ago
 2 │ path.rs       │ File │  2.1 KB │ 5 days ago
 3 │ files.rs      │ File │  4.6 KB │ 5 days ago
 4 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
 5 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago
 6 │ parse.rs      │ File │ 49.8 KB │ 1 day ago
───┴───────────────┴──────┴─────────┴────────────
</code></pre></div><p>比較さえできれば任意の列でソートが行なえます。例えば、&quot;name&quot;、&quot;accessed&quot;、または&quot;modified&quot;列でソートすることができます。</p><h2 id="必要なデータを選択する" tabindex="-1"><a class="header-anchor" href="#必要なデータを選択する" aria-hidden="true">#</a> 必要なデータを選択する</h2><p>列や行を選択することでテーブルから必要なデータを選択できます。テーブルからいくつかの列を選択してみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | select name size
───┬───────────────┬─────────
 # │ name          │ size
───┼───────────────┼─────────
 0 │ files.rs      │  4.6 KB
 1 │ lib.rs        │   330 B
 2 │ lite_parse.rs │  6.3 KB
 3 │ parse.rs      │ 49.8 KB
 4 │ path.rs       │  2.1 KB
 5 │ shapes.rs     │  4.7 KB
 6 │ signature.rs  │  1.2 KB
───┴───────────────┴─────────
</code></pre></div><p>こうすることで、より必要とするデータにフォーカスしたテーブルを作ることができます。次にディレクトリからもっとも小さい 5 つのファイルを表示してみます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5
───┬──────────────┬──────┬────────┬────────────
 # │ name         │ type │ size   │ modified
───┼──────────────┼──────┼────────┼────────────
 0 │ lib.rs       │ File │  330 B │ 5 days ago
 1 │ signature.rs │ File │ 1.2 KB │ 5 days ago
 2 │ path.rs      │ File │ 2.1 KB │ 5 days ago
 3 │ files.rs     │ File │ 4.6 KB │ 5 days ago
 4 │ shapes.rs    │ File │ 4.7 KB │ 5 days ago
───┴──────────────┴──────┴────────┴────────────
</code></pre></div><p>もっとも小さいファイルを取得するためにまずサイズでソートし、それから<code>first 5</code>を利用してテーブルから最初の 5 行を返しています。</p><p>不要な行を<code>skip</code>することもできます。上記で返された５行のうち最初の２行をスキップしてみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5 | skip 2
───┬───────────┬──────┬────────┬────────────
 # │ name      │ type │ size   │ modified
───┼───────────┼──────┼────────┼────────────
 0 │ path.rs   │ File │ 2.1 KB │ 5 days ago
 1 │ files.rs  │ File │ 4.6 KB │ 5 days ago
 2 │ shapes.rs │ File │ 4.7 KB │ 5 days ago
───┴───────────┴──────┴────────┴────────────
</code></pre></div><p>関心のある３行に絞り込みました。</p><p>データを選択するための他のコマンドもみてみましょう。テーブルの各行が数字をもつことを疑問に思っているかもしれません。これは単一の行を簡単に指定する方法として機能します。テーブルをファイル名でソートして、<code>nth</code>コマンドを利用して n 行目を選択してみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by name
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ files.rs      │ File │  4.6 KB │ 5 days ago
 1 │ lib.rs        │ File │   330 B │ 5 days ago
 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago
 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago
 4 │ path.rs       │ File │  2.1 KB │ 5 days ago
 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago
───┴───────────────┴──────┴─────────┴────────────

&gt; ls | sort-by name | nth 5
──────────┬────────────
 name     │ shapes.rs
 type     │ File
 size     │ 4.7 KB
 modified │ 5 days ago
──────────┴────────────
</code></pre></div><h2 id="テーブルからデータを取得する" tabindex="-1"><a class="header-anchor" href="#テーブルからデータを取得する" aria-hidden="true">#</a> テーブルからデータを取得する</h2><p>これまでは、テーブルを必要なものだけにトリミングする操作を行ってきました。ときには一歩進んで、列全体ではなく、セル自体の値が必要になるかもしれません。たとえば、ファイル名のリストだけを取得したいとしましょう。この場合<code>get</code>コマンドを利用することができます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | get name
───┬───────────────
 0 │ files.rs
 1 │ lib.rs
 2 │ lite_parse.rs
 3 │ parse.rs
 4 │ path.rs
 5 │ shapes.rs
 6 │ signature.rs
───┴───────────────
</code></pre></div><p>これで各ファイルの名前が取得できました。</p><p>これはさきほどみた<code>select</code>コマンドと同じにみえるかもしれません、比較のために<code>select</code>コマンドの出力もみておきましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | select name
───┬───────────────
 # │ name
───┼───────────────
 0 │ files.rs
 1 │ lib.rs
 2 │ lite_parse.rs
 3 │ parse.rs
 4 │ path.rs
 5 │ shapes.rs
 6 │ signature.rs
───┴───────────────
</code></pre></div><p>両者は非常に似ています！両者の違いを明確にしておきましょう。</p><ul><li><code>select</code> - 指定された列のみを含む新しいテーブルを作成します</li><li><code>get</code> - 指定された列内の値を返します</li></ul><p>テーブルからこれらを区別する方法の一つは、<code>value</code>列名です。これにより値のリストであることがわかります。</p><p><code>get</code>コマンドは、パスを受け取りテーブル内のより深いデータへアクセスすることができます。これにより.json ファイルにあるような複雑なデータを簡単に操作することができます。</p><h2 id="テーブルのデータを変更する" tabindex="-1"><a class="header-anchor" href="#テーブルのデータを変更する" aria-hidden="true">#</a> テーブルのデータを変更する</h2><p>テーブルからデータを選択することに加えて、テーブルの内容を更新することもできます。新しい列を加えたり、セルの内容を編集したりできるのです。Nu では、その場で編集するのではなく、パイプラインの各コマンドは新しいテーブルを返します。</p><h3 id="新しい列を追加する" tabindex="-1"><a class="header-anchor" href="#新しい列を追加する" aria-hidden="true">#</a> 新しい列を追加する</h3><p><code>add</code>コマンドを使用して、新しい列をテーブルに追加できます。例をみてみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
</code></pre></div><p>値が 2021 の&quot;next_edition&quot;列を追加してみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021
──────────────┬──────
 edition      │ 2018
 next_edition │ 2021
──────────────┴──────
</code></pre></div><p>元のファイルは変更されていないことに注意してください。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
</code></pre></div><p>Nu の変更は永続的な変更ではなく、値自体に作用する関数的な変更です。これにより、結果を書き出す準備ができるまでパイプライン上で様々な種類の作業をおこなうことができます。ここでは、<code>save</code>コマンドを使用して結果を書き出すことができます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml
&gt; open rustfmt2.toml
──────────────┬──────
 edition      │ 2018
 next_edition │ 2021
──────────────┴──────
</code></pre></div><h3 id="列を更新する" tabindex="-1"><a class="header-anchor" href="#列を更新する" aria-hidden="true">#</a> 列を更新する</h3><p><code>insert</code>コマンドと同様に、<code>update</code>コマンドを利用して列の内容を新しい値に変更することもできます。実際に動作を確認するために同じファイルを開いてみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
</code></pre></div><p>今度は、サポートした次の edition を指定するよう更新しましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml | update edition 2021
─────────┬──────
 edition │ 2021
─────────┴──────
</code></pre></div><h3 id="値を増やす" tabindex="-1"><a class="header-anchor" href="#値を増やす" aria-hidden="true">#</a> 値を増やす</h3><p>数字やバージョンを扱う際に便利なコマンドがもうひとつあります、<code>inc</code>です。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
&gt; open rustfmt.toml | inc edition
─────────┬──────
 edition │ 2019
─────────┴──────
</code></pre></div><p>&quot;edition&quot;の値は数字なので、<code>inc</code>を使って更新することができます。バージョンを扱う際には<code>inc</code>がその真価を発揮します。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml | get package.version
0.1.3
&gt; open Cargo.toml | inc package.version --minor | get package.version
0.2.0
</code></pre></div><p>バージョンを扱う際には、フラグを利用して、バージョンのインクリメント方法を指定できます。</p><ul><li><strong>--major</strong> - メジャーバージョンをインクリメント (0.1.3 -&gt; 1.0.0)</li><li><strong>--minor</strong> - マイナーバージョンをインクリメント (0.1.3 -&gt; 0.2.0)</li><li><strong>--patch</strong> - パッチバージョンをインクリメント (0.1.3 -&gt; 0.1.4)</li></ul>`,52),i=[d];function o(r,l){return a(),t("div",null,i)}const g=e(s,[["render",o],["__file","working_with_tables.html.vue"]]);export{g as default};
