import{_ as n,z as a,A as s,X as c,C as e,T as r,$ as l,a6 as t,Q as d}from"./framework.3d018c9f.js";const u={},i=t(`<h1 id="シェルの中のシェル" tabindex="-1"><a class="header-anchor" href="#シェルの中のシェル" aria-hidden="true">#</a> シェルの中のシェル</h1><h2 id="複数のディレクトリで作業する" tabindex="-1"><a class="header-anchor" href="#複数のディレクトリで作業する" aria-hidden="true">#</a> 複数のディレクトリで作業する</h2><p>ひとつのディレクトリで作業することが一般的ですが、同時に複数の場所で作業できれば便利です。このため、Nu は&quot;shells&quot;という概念を提供します。その名の通り、これらは同じ場所で複数のシェルを実行する方法であり、作業ディレクトリ間をすばやく移動することができます。</p><p>まずはじめに、ディレクトリを入力しましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathant/Source/nushell(master)&gt; enter ../book
/home/jonathant/Source/book(master)&gt; ls
────┬────────────────────┬──────┬────────┬─────────────
 #  │ name               │ type │ size   │ modified
────┼────────────────────┼──────┼────────┼─────────────
  0 │ 404.html           │ File │  429 B │ 2 hours ago
  1 │ CONTRIBUTING.md    │ File │  955 B │ 2 hours ago
  2 │ Gemfile            │ File │ 1.1 KB │ 2 hours ago
  3 │ Gemfile.lock       │ File │ 6.9 KB │ 2 hours ago
</code></pre></div><p><code>enter</code>はディレクトリの変更に似ています(<code>cd</code>コマンドでみたように)。これによりディレクトリにジャンプして作業することができます。ディレクトリを変更するかわりに、２つのディレクトリに移動しました。このことをより明確にするために、<code>shells</code>コマンドを実行して、アクティブな現在のディレクトリの一覧を表示してみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathan/Source/book(master)&gt; shells
───┬────────┬────────────┬─────────────────────────────────
 # │ active │ name       │ path
───┼────────┼────────────┼─────────────────────────────────
 0 │        │ filesystem │ /home/jonathant/Source/nushell/
 1 │ X      │ filesystem │ /home/jonathant/Source/book
───┴────────┴────────────┴─────────────────────────────────
</code></pre></div><p><code>shells</code>コマンドは現在２つのシェルがアクティブであることを示しています。もともといた&quot;nushell&quot;のソースディレクトリと新しい&quot;book&quot;ディレクトリです。</p><p>&quot;next&quot;と&quot;previous&quot;のショートカットである<code>n</code>と<code>p</code>を利用して、両者のシェルを行き来できます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathant/Source/book(master)&gt; n
/home/jonathant/Source/nushell(master)&gt; p
/home/jonathant/Source/book(master)&gt;
</code></pre></div><p>ディレクトリを変更できることがわかります。そしていつでも元いた作業ディレクトリに戻ることができるのです。これにより、同じセッションにいながら複数のディレクトリで作業できます。</p><h2 id="シェルを終了する" tabindex="-1"><a class="header-anchor" href="#シェルを終了する" aria-hidden="true">#</a> シェルを終了する</h2><p><code>exit</code>コマンドを利用して<code>enter</code>したシェルを終了することができます。もし最後のシェルを終了したときは Nu が終了します。</p><p><code>exit --now</code>のように、<code>--now</code>フラグを<code>exit</code>コマンドに渡すことで、複数のシェルがアクティブな場合でもすぐに Nu を終了することができます。 こんなふうに: <code>exit --now</code></p><h2 id="ディレクトリを超えて" tabindex="-1"><a class="header-anchor" href="#ディレクトリを超えて" aria-hidden="true">#</a> ディレクトリを超えて</h2><p>Nu はファイルシステムのパスとは別に、他のものからシェルを作ることもできます。たとえば、大規模なデータセットを使用していて、その中の場所を失いたくないとしましょう。</p>`,16),p=t(`<p>Nu のソースコードから&quot;Cargo.toml&quot;ファイルに<code>enter</code>してみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathant/Source/nushell(master)&gt; enter Cargo.toml
/&gt; ls
────────────────────┬───────────────────────────
 bin                │ [table 18 rows]
 build-dependencies │ [row nu-build serde toml]
 dependencies       │ [row 29 columns]
 dev-dependencies   │ [row nu-test-support]
 features           │ [row 19 columns]
 package            │ [row 12 columns]
 workspace          │ [row members]
────────────────────┴───────────────────────────
</code></pre></div><p>今のところ、ファイルに<code>enter</code>し、<code>ls</code>から得られたテーブルで中身を確認できます。注意深くみてみると、今回は Nu が理解できる(.toml)ファイル形式にエンターしていることがわかります。Nu はファイルの中身をファイルシステムのように表示するので、あたかも通常のファイルシステムのように内容を確認することができます。</p><p>続きを始める前に、アクティブなシェルを確認しておきましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; shells
───┬────────┬─────────────────────────────────────────────┬─────────────────────────────────
 # │ active │ name                                        │ path
───┼────────┼─────────────────────────────────────────────┼─────────────────────────────────
 0 │        │ filesystem                                  │ /home/jonathant/Source/nushell/
 1 │ X      │ {/home/jonathant/Source/nushell/Cargo.toml} │ /
───┴────────┴─────────────────────────────────────────────┴─────────────────────────────────
</code></pre></div><p>２つのアクティブなシェルがあり、&quot;Cargo.toml&quot;内のデフォルトのルートパスである&quot;/&quot;にいることがわかります。内容をもう一度表示してみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/&gt; ls
────────────────────┬───────────────────────────
 bin                │ [table 18 rows]
 build-dependencies │ [row nu-build serde toml]
 dependencies       │ [row 29 columns]
 dev-dependencies   │ [row nu-test-support]
 features           │ [row 19 columns]
 package            │ [row 12 columns]
 workspace          │ [row members]
────────────────────┴───────────────────────────
</code></pre></div><p>今探しているのは、&quot;bin&quot;列の中なので、そこにいってみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; cd bin
/bin&gt; ls
────┬─────────────────────────────┬────────────────────────────────────────────┬───────────────────
 #  │ name                        │ path                                       │ required-features
────┼─────────────────────────────┼────────────────────────────────────────────┼───────────────────
  0 │ fail                        │ crates/nu-test-support/src/bins/fail.rs    │ [table 1 rows]
  1 │ chop                        │ crates/nu-test-support/src/bins/chop.rs    │ [table 1 rows]
  2 │ cococo                      │ crates/nu-test-support/src/bins/cococo.rs  │ [table 1 rows]
  3 │ nonu                        │ crates/nu-test-support/src/bins/nonu.rs    │ [table 1 rows]
  4 │ iecho                       │ crates/nu-test-support/src/bins/iecho.rs   │ [table 1 rows]
  5 │ nu_plugin_core_textview     │ src/plugins/nu_plugin_core_textview.rs     │ [table 1 rows]
</code></pre></div><p>ここから、<code>p</code>(previous)を使うことでいつでも以前の作業ディレクトリに戻ることができます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/bin&gt; p
</code></pre></div><p>シェルをもう一度確認しましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>/home/jonathant/Source/nushell/(simple_list_view)&gt; shells
───┬────────┬─────────────────────────────────────────────┬─────────────────────────────────
 # │ active │ name                                        │ path
───┼────────┼─────────────────────────────────────────────┼─────────────────────────────────
 0 │ X      │ filesystem                                  │ /home/jonathant/Source/nushell/
 1 │        │ {/home/jonathant/Source/nushell/Cargo.toml} │ /bin
───┴────────┴─────────────────────────────────────────────┴─────────────────────────────────


</code></pre></div><p>&quot;Cargo.toml&quot;ファイルにエンターする前の作業ディレクトリにもどっていることがわかります。</p>`,14);function h(g,m){const o=d("RouterLink");return a(),s("div",null,[i,c("p",null,[e('これがどのように機能するかを見るために、次の演習を行いましょう。現在、"Cargo.toml"ファイルの中に開発した'),r(o,{to:"/ja/book/plugins.html"},{default:l(()=>[e("Nu プラグイン")]),_:1}),e('をリストしています。src/plugins ディレクトリの中に"doc.rs"とよばれる新しいプラグインを作成したので、正しくコンパイルされインストールされるか確認したいので"Cargo.toml"にリストされているか知りたいとしましょう。')]),p])}const b=n(u,[["render",h],["__file","shells_in_shells.html.vue"]]);export{b as default};
