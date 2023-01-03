import{_ as n,z as s,A as a,a6 as e}from"./framework.3d018c9f.js";const p={},t=e(`<h1 id="はじめに" tabindex="-1"><a class="header-anchor" href="#はじめに" aria-hidden="true">#</a> はじめに</h1><p>こんにちは、Nushell プロジェクトへようこそ。このプロジェクトのゴールは、シンプルなコマンドをパイプでつなぎ合わせるというシェルの Unix 哲学を現代の開発スタイルにもちこむことです。</p><p>Nu は Bash のような伝統的なシェル、PowerShell などの高度なシェル、関数型プログラミング、システムプログラミングなど、多くの分野からヒントを得ています。しかし Nu は何でもこなせることを目指すのではなく、いくつかのことをうまくこなせることに注力しています。</p><ul><li>モダンな雰囲気をもつ柔軟なクロスプラットフォームシェルを作ること</li><li>データ構造を理解するコマンドラインアプリケーションを組みあわせることができること</li><li>現代的な CLI アプリケーションが提供する UX をそなえること</li></ul><p>Nu になにができるかをみるには、実際に使ってみることが一番です。</p><p><code>ls</code>コマンドを実行して最初に気づくことは、テキストブロックではなく、構造化されたテーブルデータが返ってくることです。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
╭────┬───────────────────────┬──────┬───────────┬─────────────╮
│ <span class="token comment">#  │         name          │ type │   size    │  modified   │</span>
├────┼───────────────────────┼──────┼───────────┼─────────────┤
│  <span class="token number">0</span> │ <span class="token number">404</span>.html              │ <span class="token function">file</span> │     <span class="token number">429</span> B │ <span class="token number">3</span> days ago  │
│  <span class="token number">1</span> │ CONTRIBUTING.md       │ <span class="token function">file</span> │     <span class="token number">955</span> B │ <span class="token number">8</span> mins ago  │
│  <span class="token number">2</span> │ Gemfile               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">3</span> │ Gemfile.lock          │ <span class="token function">file</span> │   <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">4</span> │ LICENSE               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">5</span> │ README.md             │ <span class="token function">file</span> │     <span class="token number">213</span> B │ <span class="token number">3</span> days ago  │
<span class="token punctuation">..</span>.
</code></pre></div><p>このテーブルはディレクトリの内容を別の方法で表示しているだけではありません。このテーブルを利用するとスプレッドシートと同じように、よりインタラクティブにデータを操作できます。</p><p>最初に行うことはテーブルをサイズでソートすることです。これを行うには<code>ls</code>の出力を取得して、カラムの内容に基づいてテーブルをソートするコマンドに入力します。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
╭────┬───────────────────────┬──────┬───────────┬─────────────╮
│ <span class="token comment">#  │         name          │ type │   size    │  modified   │</span>
├────┼───────────────────────┼──────┼───────────┼─────────────┤
│  <span class="token number">0</span> │ Gemfile.lock          │ <span class="token function">file</span> │   <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">1</span> │ SUMMARY.md            │ <span class="token function">file</span> │   <span class="token number">3.7</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">2</span> │ Gemfile               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">3</span> │ LICENSE               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">4</span> │ CONTRIBUTING.md       │ <span class="token function">file</span> │     <span class="token number">955</span> B │ <span class="token number">9</span> mins ago  │
│  <span class="token number">5</span> │ books.md              │ <span class="token function">file</span> │     <span class="token number">687</span> B │ <span class="token number">3</span> days ago  │
<span class="token punctuation">..</span>.
</code></pre></div><p>この作業をおこなうために、<code>ls</code>にコマンドライン引数を渡していないことがわかります。代わりに、Nu が提供する<code>sort-by</code>コマンドを利用して、<code>ls</code>コマンドの出力をソートしています。また、一番大きなファイルを表示するために逆順に並び替えています。</p><p>Nu にはテーブルを扱うための多くのコマンドが用意されています。例えば、1 キロバイトを超えるファイルのみを表示するように<code>ls</code>コマンドの出力をフィルターできます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
╭───┬───────────────────┬──────┬─────────┬────────────╮
│ <span class="token comment"># │       name        │ type │  size   │  modified  │</span>
├───┼───────────────────┼──────┼─────────┼────────────┤
│ <span class="token number">0</span> │ Gemfile           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">1</span> │ Gemfile.lock      │ <span class="token function">file</span> │ <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">2</span> │ LICENSE           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">3</span> │ SUMMARY.md        │ <span class="token function">file</span> │ <span class="token number">3.7</span> KiB │ <span class="token number">3</span> days ago │
╰───┴───────────────────┴──────┴─────────┴────────────╯
</code></pre></div><p>Unix 哲学にあるように、コマンドをつなぎ合わせることで様々な組み合わせを作り出すことができます。別のコマンドをみてみましょう。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮
│  <span class="token comment">#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │</span>
├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤
│   <span class="token number">0</span> │ <span class="token number">7570</span> │ nu                   │ Running │  <span class="token number">1.96</span> │  <span class="token number">23.2</span> MiB │ <span class="token number">32.8</span> GiB │
│   <span class="token number">1</span> │ <span class="token number">3533</span> │ remindd              │ Sleep   │  <span class="token number">0.00</span> │ <span class="token number">103.6</span> MiB │ <span class="token number">32.3</span> GiB │
│   <span class="token number">2</span> │ <span class="token number">3495</span> │ TVCacheExtension     │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">11.9</span> MiB │ <span class="token number">32.2</span> GiB │
│   <span class="token number">3</span> │ <span class="token number">3490</span> │ MusicCacheExtension  │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">12.9</span> MiB │ <span class="token number">32.2</span> GiB │
<span class="token punctuation">..</span>.
</code></pre></div><p>もしあなたが Linux を利用しているなら<code>ps</code>コマンドには馴染みがあるでしょう。これを使うと、現在システムが実行しているすべてのプロセスの状態や名前の一覧を取得することができます。プロセスの CPU 負荷も確認することができます。</p><p>CPU をアクティブに利用しているプロセスを表示したい場合はどうでしょうか。さきほどの<code>ls</code>コマンドと同じように、<code>ps</code>コマンドが返すテーブルを利用することができます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮
│ <span class="token comment"># │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │</span>
├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">1583</span> │ Terminal       │ Running │  <span class="token number">20.69</span> │ <span class="token number">127.8</span> MiB │ <span class="token number">33.0</span> GiB │
│ <span class="token number">1</span> │  <span class="token number">579</span> │ photoanalysisd │ Running │ <span class="token number">139.50</span> │  <span class="token number">99.9</span> MiB │ <span class="token number">32.3</span> GiB │
╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯
</code></pre></div><p>これまで、<code>ls</code>と<code>ps</code>を利用してファイルやプロセスの一覧を表示しました。Nu はこの他にも便利なテーブルを作り出すコマンドを提供します。次に<code>date</code>と<code>sys</code>をみてみましょう。</p><p><code>date now</code>を実行すると、現在の日時と時間に関する情報が得られます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 <span class="token parameter variable">-08:00</span>
</code></pre></div><p><code>sys</code>は Nu が実行されているシステムに関する情報を提供します。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
╭───────┬───────────────────╮
│ <span class="token function">host</span>  │ <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> │
│ cpu   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
│ disks │ <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    │
│ mem   │ <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> │
│ temp  │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     │
│ net   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
╰───────┴───────────────────╯
</code></pre></div><p>これはさきほどまでのテーブルと少し異なります。<code>sys</code>コマンドは単純な値ではなくセルに構造化されたテーブルを含むテーブルを提供します。このデータを見るには表示する列を選択する必要があります。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
╭────────────────┬────────────────────────╮
│ name           │ Debian GNU/Linux       │
│ os version     │ <span class="token number">11</span>                     │
│ kernel version │ <span class="token number">5.10</span>.92-v8+            │
│ <span class="token function">hostname</span>       │ lifeless               │
│ <span class="token function">uptime</span>         │ 19day 21hr 34min 45sec │
│ sessions       │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          │
╰────────────────┴────────────────────────╯
</code></pre></div><p><code>get</code>コマンドを利用するとテーブルのカラムの内容を調べることができます。ここでは、Nu が実行されているホストに関する情報を含む&quot;host&quot;列を調べています。OS の名前、ホスト名、CPU などです。システム上のユーザーの名前を取得してみましょう。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
╭───┬────╮
│ <span class="token number">0</span> │ jt │
╰───┴────╯
</code></pre></div><p>現在、システムには&quot;jonathan&quot;という名前のユーザが１人だけいます。列の名前だけではなくパスも渡せることに気づくでしょう。Nu はパスを受け取るとテーブルの対応するデータを取得します。</p><p>テーブルデータではなく、文字列&quot;jonathan&quot;を取得したことに気づかれたかもしれません。Nu はテーブルだけでなく文字列も扱います。文字列は Nu 以外のコマンドを扱う上で重要な役割をはたします。</p><p>実際に Nu の外で文字列がどのように機能するか見てみましょう。先ほどの例で外部の<code>echo</code>コマンドを実行します。(<code>^</code>は組込みの<code>echo</code>コマンドを使用しないよう指示しています)。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div><p>するどい読者にはこれが以前ものと似ていると思われるでしょう。しかし、さきほどの出力で<code>echo</code>を呼び出しているという重要な違いがあります。このように、Nu からデータを<code>echo</code>(または<code>git</code>のような Nu 以外の任意のコマンド)にわたすことができるのです。</p><p>注：Nu の組み込みコマンドのヘルプテキストは、<code>help</code>コマンドで検出できます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
Explore and manipulate paths.

There are three ways to represent a path:

* As a path literal, e.g., <span class="token string">&#39;/home/viking/spam.txt&#39;</span>
* As a structured path: a table with <span class="token string">&#39;parent&#39;</span>, <span class="token string">&#39;stem&#39;</span>, and <span class="token string">&#39;extension&#39;</span> <span class="token punctuation">(</span>and
* <span class="token string">&#39;prefix&#39;</span> on Windows<span class="token punctuation">)</span> columns. This <span class="token function">format</span> is produced by the <span class="token string">&#39;path parse&#39;</span>
  subcommand.
* As an inner list of path parts, e.g., <span class="token string">&#39;[[ / home viking spam.txt ]]&#39;</span><span class="token builtin class-name">.</span>
  Splitting into parts is <span class="token keyword">done</span> by the <span class="token variable"><span class="token variable">\`</span>path <span class="token function">split</span><span class="token variable">\`</span></span> command.

All subcommands accept all three variants as an input. Furthermore, the <span class="token string">&#39;path
join&#39;</span> subcommand can be used to <span class="token function">join</span> the structured path or path parts back into
the path literal.

Usage:
  <span class="token operator">&gt;</span> path

Subcommands:
  path <span class="token function">basename</span> - Get the final component of a path
  path <span class="token function">dirname</span> - Get the parent directory of a path
  path exists - Check whether a path exists
  path <span class="token function">expand</span> - Try to <span class="token function">expand</span> a path to its absolute form
  path <span class="token function">join</span> - Join a structured path or a list of path parts.
  path parse - Convert a path into structured data.
  path relative-to - Get a path as relative to another path.
  path <span class="token function">split</span> - Split a path into parts by a separator.
  path <span class="token builtin class-name">type</span> - Get the <span class="token builtin class-name">type</span> of the object a path refers to <span class="token punctuation">(</span>e.g., file, dir, symlink<span class="token punctuation">)</span>

Flags:
  -h, <span class="token parameter variable">--help</span>
      Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,34),o=[t];function c(l,r){return s(),a("div",null,o)}const i=n(p,[["render",c],["__file","introduction.html.vue"]]);export{i as default};
