import{_ as e,p as t,q as a,a1 as o}from"./framework-344bb0e4.js";const n={},s=o(`<h1 id="データの読み込み" tabindex="-1"><a class="header-anchor" href="#データの読み込み" aria-hidden="true">#</a> データの読み込み</h1><p>これまでに、<code>ls</code>、<code>ps</code>、<code>date</code>、および<code>sys</code>コマンドを使って、ファイル、プロセス、日付そしてシステム自身の情報を取得する方法をみてきました。各コマンドはテーブル情報を提供しますが、他にもデータをテーブルに読み込む方法があります。</p><h2 id="ファイルを開く" tabindex="-1"><a class="header-anchor" href="#ファイルを開く" aria-hidden="true">#</a> ファイルを開く</h2><p>データを操作するための Nu の最も強力なコマンドのひとつが<code>open</code>コマンドです。これは様々なデータ形式に対応したマルチツールです。これがなにを意味するかをみるために、json ファイルを開いてみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open editors/vscode/package.json
──────────────────┬───────────────────────────────────────────────────────────────────────────────
 name             │ lark
 description      │ Lark support for VS Code
 author           │ Lark developers
 license          │ MIT
 version          │ 1.0.0
 repository       │ [row type url]
 publisher        │ vscode
 categories       │ [table 0 rows]
 keywords         │ [table 1 rows]
 engines          │ [row vscode]
 activationEvents │ [table 1 rows]
 main             │ ./out/extension
 contributes      │ [row configuration grammars languages]
 scripts          │ [row compile postinstall test vscode:prepublish watch]
 devDependencies  │ [row @types/mocha @types/node tslint typescript vscode vscode-languageclient]
──────────────────┴───────────────────────────────────────────────────────────────────────────────
</code></pre></div><p><code>ls</code>と同様、Nu が理解できるタイプのファイルを開くと、単なるテキスト(またはバイトストリーム)以上のものが返ってきます。ここでは、JavaScript プロジェクト内の&quot;package.json&quot;ファイルを開いています。Nu は JSON テキストを認識し、テーブルデータを返すことができます。</p><p>プロジェクトのバージョンを確認したい場合は、<code>get</code>コマンドを利用します。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu が現在、直接データをテーブルに読み込める形式は次の通りです。</p><ul><li>json</li><li>yaml</li><li>toml</li><li>xml</li><li>csv</li><li>ini</li></ul><p>しかし、これらのいずれでもないテキストファイルを読み込むとどうなるでしょうか、試してみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open README.md
</code></pre></div><p>ファイルの内容が表示されます。ファイルが大きすぎる場合は、便利なスクロールビューでファイルの中身を確認してからターミナルに戻ってることができます。読みやすさのために、ソースファイルやマークダウンといった一般的なファイル形式ではシンタックスハイライトを提供します。</p><p>裏側では、Nu はこれらのファイルをひとつの大きな文字列としてみています。次に、これらの文字列から必要なデータを取得する方法について説明します。</p><h2 id="文字列を扱う" tabindex="-1"><a class="header-anchor" href="#文字列を扱う" aria-hidden="true">#</a> 文字列を扱う</h2><p>Nu の外からきたデータを Nu がいつも理解できるとは限らないことを理解しておくのは重要なことです。多くの場合このデータは文字列として与えられます。</p><p>以下のファイルが与えられたと想定してみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>必要なデータはパイプ(&#39;|&#39;)記号で区切られており、各行はそれぞれの人物を表しています。Nu はデフォルトではパイプで区切られたファイル形式を知らないので、明示的にこのファイルをパースする必要があります。</p><p>ファイルを読み込むときに最初に行うことは、１行ずつ作業することです。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines
───┬──────────────────────────────
 0 │ Octavia | Butler | Writer
 1 │ Bob | Ross | Painter
 2 │ Antonio | Vivaldi | Composer
───┴──────────────────────────────
</code></pre></div><p>テーブルにもどってきたので、行を使って作業していることがわかります。次のステップは、行をもうすこし便利なものに分割できるかみてみることです。そのために、<code>split</code>コマンドを利用します。名前からわかるように、<code>split</code>は区切り文字を含む文字列を列に分割する方法を提供します。<code>split</code>の<code>column</code>サブコマンドを使って、複数の列に分割するします。必要なのは区切り文字を指定することだけです。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot;
───┬──────────┬───────────┬───────────
 # │ Column1  │ Column2   │ Column3
───┼──────────┼───────────┼───────────
 0 │ Octavia  │  Butler   │  Writer
 1 │ Bob      │  Ross     │  Painter
 2 │ Antonio  │  Vivaldi  │  Composer
───┴──────────┴───────────┴───────────
</code></pre></div><p>ほとんど正しいように見えますが、余分なスペースを含んでいます。余分なスペースを<code>trim</code>してみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim
───┬─────────┬─────────┬──────────
 # │ Column1 │ Column2 │ Column3
───┼─────────┼─────────┼──────────
 0 │ Octavia │ Butler  │ Writer
 1 │ Bob     │ Ross    │ Painter
 2 │ Antonio │ Vivaldi │ Composer
───┴─────────┴─────────┴──────────
</code></pre></div><p>悪くありません。<code>split</code>コマンドは利用可能なデータとデフォルトのカラム名をつけてくれます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get Column1
───┬─────────
 0 │ Octavia
 1 │ Bob
 2 │ Antonio
───┴─────────
</code></pre></div><p>デフォルトの名前を利用するかわりに、列に名前をつけることもできます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Octavia    │ Butler    │ Writer
 1 │ Bob        │ Ross      │ Painter
 2 │ Antonio    │ Vivaldi   │ Composer
───┴────────────┴───────────┴──────────
</code></pre></div><p>データをテーブルに変換できたので、これまでテーブルに利用してきたすべてのコマンドをつかうことができます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim | sort-by first_name
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Antonio    │ Vivaldi   │ Composer
 1 │ Bob        │ Ross      │ Painter
 2 │ Octavia    │ Butler    │ Writer
───┴────────────┴───────────┴──────────
</code></pre></div><p>文字列を操作するために使用できるその他のコマンドです。</p><ul><li>str</li><li>lines</li><li>size</li></ul><p>データが Nu が理解できる構造をもっていることがわかっている場合に呼び出すことのできるヘルパーコマンドのセットもあります。例えば、Rust のロックファイルを開いてみましょう。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.lock
# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
[[package]]
name = &quot;adhoc_derive&quot;
version = &quot;0.1.2&quot;
</code></pre></div><p>&quot;Cargo.lock&quot;ファイルは実際には.toml ファイルですが、ファイル拡張子が.toml ではありません。でも大丈夫です、<code>from toml</code>コマンドが使えます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.lock | from toml
──────────┬───────────────────
 metadata │ [row 107 columns]
 package  │ [table 130 rows]
──────────┴───────────────────
</code></pre></div><p><code>from</code>コマンドはサポートされているテキストフォーマットをサブコマンドとして渡すことで Nu が扱える構造化データごとに利用できます。</p><h2 id="raw-モードで開く" tabindex="-1"><a class="header-anchor" href="#raw-モードで開く" aria-hidden="true">#</a> raw モードで開く</h2><p>ファイルを開いてそのデータのテーブルをすぐに操作できると便利ですが、これは必ずしもやりたいことであるとは限りません。テキストをそのまま取得するために、<code>open</code>コマンドに<code>--raw</code>オプションフラグを渡すことができます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.toml --raw
[package]                                                                                        name = &quot;nu&quot;
version = &quot;0.1.3&quot;
authors = [&quot;Yehuda Katz &lt;wycats@gmail.com&gt;&quot;, &quot;Jonathan Turner &lt;jonathan.d.turner@gmail.com&gt;&quot;]
description = &quot;A shell for the GitHub era&quot;
license = &quot;MIT&quot;
</code></pre></div><h2 id="url-からの取得" tabindex="-1"><a class="header-anchor" href="#url-からの取得" aria-hidden="true">#</a> URL からの取得</h2><p>ファイルシステムからファイルを読み込むことに加えて、<code>http get</code>コマンドを利用して URL からリソースを取得できます。 これはインターネットから URL の内容をフェッチして返してくれます。</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; http get https://www.jonathanturner.org/feed.xml
─────┬───────────────────────────
 rss │ [row attributes children]
─────┴───────────────────────────
</code></pre></div>`,44),l=[s];function i(r,d){return t(),a("div",null,l)}const p=e(n,[["render",i],["__file","loading_data.html.vue"]]);export{p as default};
