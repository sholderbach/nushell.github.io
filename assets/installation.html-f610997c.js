import{_ as o,M as l,p as c,q as r,Q as s,t as a,N as e,a1 as t}from"./framework-344bb0e4.js";const u={},i=s("h1",{id:"nu-のインストール",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nu-のインストール","aria-hidden":"true"},"#"),a(" Nu のインストール")],-1),p={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},h=s("h2",{id:"ビルド済みのバイナリー",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ビルド済みのバイナリー","aria-hidden":"true"},"#"),a(" ビルド済みのバイナリー")],-1),g={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},b={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"brew install nushell",-1),_=s("h2",{id:"windows",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),a(" Windows")],-1),f=s("p",null,[s("strong",null,"Note"),a(" Nu は Windows 10 で動作しますが、現在のところ 7/8.1 はサポートされていません。")],-1),m={href:"https://github.com/nushell/nushell/releases",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,".zip",-1),x=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code>C:<span class="token punctuation">\\</span>Program Files
</code></pre></div><p>そして、<code>nu</code>フォルダを PATH に追加します。これが済めば、<code>nu</code>コマンドで Nu を起動できます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> nu
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>user<span class="token operator">&gt;</span>
</code></pre></div>`,3),q={href:"https://github.com/microsoft/terminal",target:"_blank",rel:"noopener noreferrer"},N=s("code",null,"nu",-1),w=t(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  <span class="token string">&quot;guid&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
  <span class="token string">&quot;hidden&quot;</span><span class="token builtin class-name">:</span> false,
  <span class="token string">&quot;icon&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://www.nushell.sh/icon.png&quot;</span>,
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Nu Shell&quot;</span>,
  <span class="token string">&quot;commandline&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;nu.exe&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>この設定を Terminal Settings の<code>&quot;profiles&quot;</code>に追加します。そして、<code>&quot;defaultProfile&quot;</code>を次のように変更します。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;defaultProfile&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;{2b372ca1-1ee2-403d-a839-6d63077ad871}&quot;</span>,
</code></pre></div><p>これで<code>nu</code>が Windows Terminal の起動時にロードされます。</p><h2 id="事前準備" tabindex="-1"><a class="header-anchor" href="#事前準備" aria-hidden="true">#</a> 事前準備</h2><p>Nu をインストールする前に、システムに必要なツールがそろっているか確認する必要があります。現在、Rust のツールチェインといくつかの依存関係が必要です。</p><h3 id="コンパイラスイートのインストール" tabindex="-1"><a class="header-anchor" href="#コンパイラスイートのインストール" aria-hidden="true">#</a> コンパイラスイートのインストール</h3><p>Rust が適切に機能するには、互換性のあるコンパイラスイートがシステムにインストールされている必要があります。推奨されるコンパイラスイートは次のとおりです。</p>`,8),R=s("li",null,"Linux: GCC or Clang",-1),C=s("li",null,"macOS: Clang (install Xcode)",-1),S={href:"https://visualstudio.microsoft.com/vs/community/",target:"_blank",rel:"noopener noreferrer"},L=s("p",null,[a("Linux と macOS の場合、コンパイラのインストールが完了すれば、"),s("code",null,"rustup"),a("での Rust のインストールの準備が整います。")],-1),y=s("p",null,[a("Windows の場合、Visual Studio Community Edition をインストールするときに、「C ++ビルドツール」をインストールする必要があります。 オプショナルなインストールとして提供されている"),s("code",null,"link.exe"),a("が必要なためです。これで次のステップに進む準備ができました。")],-1),E=s("h3",{id:"rust-のインストール",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rust-のインストール","aria-hidden":"true"},"#"),a(" Rust のインストール")],-1),H={href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"},P=t(`<p>Nu は現在、<strong>最新の stable(1.46 or later)</strong> バージョンの Rust を必要とします。 <code>rustup</code>で正しい version を選択するのが良い方法です。 最初に&quot;rustup&quot;を実行すると、インストールする Rust のバージョンを尋ねられます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Current installation options:

default <span class="token function">host</span> triple: x86_64-unknown-linux-gnu
default toolchain: stable
profile: default
modify <span class="token environment constant">PATH</span> variable: <span class="token function">yes</span>

<span class="token number">1</span><span class="token punctuation">)</span> Proceed with installation <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token punctuation">)</span> Customize installation
<span class="token number">3</span><span class="token punctuation">)</span> Cancel installation
</code></pre></div><p>準備ができたら、1 を押してからエンターを押します。</p><p>もし、<code>rustup</code>を経由して Rust をインストールしたくない場合、他の方法でもインストールすることができます。(例えば、Linux ディストリビューションのパッケージから) その場合でも Rust の 1.46 以上のバージョンがインストールされるようにしてください。</p><h2 id="依存関係" tabindex="-1"><a class="header-anchor" href="#依存関係" aria-hidden="true">#</a> 依存関係</h2><h3 id="debian-ubuntu" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu" aria-hidden="true">#</a> Debian / Ubuntu</h3><p>&quot;pkg-config&quot;および&quot;libssl-dev&quot;パッケージをインストールしてください。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> pkg-config libssl-dev
</code></pre></div><p><code>rawkey</code>や<code>clipboard</code>機能を使用する Linux ユーザーは&quot;libx11-dev&quot;および&quot;libxcb-composite0-dev&quot;パッケージをインストールする必要があります。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> libxcb-composite0-dev libx11-dev
</code></pre></div><h3 id="rhel-based-distros" tabindex="-1"><a class="header-anchor" href="#rhel-based-distros" aria-hidden="true">#</a> RHEL based distros</h3><p>&quot;libxcb&quot;, &quot;openssl-devel&quot;および&quot;libX11-devel&quot;パッケージをインストールする必要があります。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> libxcb openssl-devel libX11-devel
</code></pre></div><h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h3>`,14),T={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},V=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[a("brew "),s("span",{class:"token function"},"install"),a(` openssl cmake
`)])])],-1),W={id:"crates-ioからのインストール",tabindex:"-1"},O=s("a",{class:"header-anchor",href:"#crates-ioからのインストール","aria-hidden":"true"},"#",-1),B={href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"},X=t(`<p>必要となる依存関係が準備できたら、Rust コンパイラーに付属している<code>cargo</code>を使って、Nu をインストールできます。 cargo は Nu とそのソースの依存関係をダウンロードし、ビルドしたあと、実行できるように cargo の bin path にインストールします。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cargo</span> <span class="token function">install</span> nu
</code></pre></div><p>これでおしまいです！<code>cargo</code>は Nu のソースコードとその依存関係をダウンロードしてビルドし、<code>cargo</code>のバイナリーパスにインストールすることで Nu を実行できるようにします。</p><p>より多くの機能をインストールするには、次のようにします。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cargo</span> <span class="token function">install</span> nu <span class="token parameter variable">--features</span><span class="token operator">=</span>dataframe
</code></pre></div><p>すべての機能を利用するための最も簡単な方法は Nu をチェックアウトして、Rust ツールを利用してビルドすることです。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/nushell/nushell.git
<span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> nushell
nushell<span class="token operator">&gt;</span> <span class="token function">cargo</span> <span class="token function">install</span> <span class="token parameter variable">--path</span> <span class="token builtin class-name">.</span>
</code></pre></div><p>上で示したすべての依存関係がシステムにあることを確認してください。 インストールが完了すると、<code>nu</code>コマンドで Nu を実行できます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>$ nu
/home/jt/Source<span class="token operator">&gt;</span>
</code></pre></div><h2 id="ソースからビルド" tabindex="-1"><a class="header-anchor" href="#ソースからビルド" aria-hidden="true">#</a> ソースからビルド</h2><p>github のソースから直接ビルドすることもできます。こうすることで、最新の機能やバグ修正にすぐにアクセスすることができます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/nushell/nushell.git
</code></pre></div><p>Git でメインの nushell リポジトリをクローンし、Nu をビルドして実行できます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> nushell
nushell<span class="token operator">&gt;</span> <span class="token function">cargo</span> build --workspace<span class="token punctuation">;</span> <span class="token function">cargo</span> run
</code></pre></div><p>リリースモードで Nu をビルドし実行することもできます。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>nushell<span class="token operator">&gt;</span> <span class="token function">cargo</span> build <span class="token parameter variable">--release</span> --workspace<span class="token punctuation">;</span> <span class="token function">cargo</span> run <span class="token parameter variable">--release</span>
</code></pre></div><p>Rust に慣れている人は、&quot;run&quot;がデフォルトでビルドを行うのに、なぜ&quot;build&quot;と&quot;run&quot;の両方を行うのか疑問に思うかもしれません。 これは Cargo の新しい<code>default-run</code>オプションの欠点を回避し、全てのプラグインがビルドされるようにするためですが、将来的には必要なくなるかもしれません。</p><h2 id="ログインシェルとして設定するには" tabindex="-1"><a class="header-anchor" href="#ログインシェルとして設定するには" aria-hidden="true">#</a> ログインシェルとして設定するには</h2><p><strong>!!! Nu は開発中なので、日常使いのシェルとしての安定性を欠く可能性があります!!!</strong></p>`,19),z={href:"https://linux.die.net/man/1/chsh",target:"_blank",rel:"noopener noreferrer"},A=s("code",null,"chsh",-1),D=s("code",null,"/etc/shells",-1),G=s("code",null,"shells",-1),I=s("div",{class:"language-bash","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`chsh: /home/username/.cargo/bin/nu is an invalid shell
`)])],-1),M=s("p",null,[a("Nu バイナリを"),s("code",null,"shells"),a("ファイルに追加することにより、許可されたシェルのリストに Nu を追加できます。 追加するパスは"),s("code",null,"which nu"),a("コマンドで見つけることができます。通常は"),s("code",null,"$HOME/.cargo/bin/nu"),a("です。")],-1);function U($,j){const n=l("ExternalLinkIcon");return c(),r("div",null,[i,s("p",null,[a("今のところ Nu をインストールするもっともよい方法は、"),s("a",p,[a("crates.io"),e(n)]),a("からインストールするか、ビルド済のバイナリーを"),s("a",d,[a("リリースページ"),e(n)]),a("からダウンロードするか、ソースからビルドすることです。 Docker を利用してビルド済のコンテナをプルしてくる方法もあります。")]),h,s("p",null,[a("ビルド済の Nu は"),s("a",g,[a("リリースページ"),e(n)]),a("からダウンロードできます。もし、macOS で"),s("a",b,[a("Homebrew"),e(n)]),a(" を利用しているなら、"),k,a("を実行して、バイナリーをインストールできます。")]),_,f,s("p",null,[s("a",m,[a("リリースページ"),e(n)]),a("から"),v,a("ファイルをダウンロードして、例えば次の箇所に解凍します。")]),x,s("p",null,[a("もし、"),s("a",q,[a("Windows Terminal"),e(n)]),a("を使っているなら、次のようにして"),N,a("をデフォルトシェルに指定できます。")]),w,s("ul",null,[R,C,s("li",null,[a("Windows: "),s("a",S,[a("Visual Studio Community Edition"),e(n)])])]),L,y,E,s("p",null,[a("Rust がシステムにまだインストールされていない場合は、"),s("a",H,[a("rustup"),e(n)]),a("を利用して Rust をインストールする方法がベストです。Rustup は、異なる Rust のバージョンのインストールを管理するツールです。")]),P,s("p",null,[s("a",T,[a("Homebrew"),e(n)]),a('を利用して、"openssl"と"cmake"をインストールしてください。')]),V,s("h2",W,[O,a(),s("a",B,[a("crates.io"),e(n)]),a("からのインストール")]),X,s("p",null,[s("a",z,[A,e(n)]),a("コマンドを使用して、ログインシェルを設定できます。 一部の Linux ディストリビューションには"),D,a("に有効なシェルのリストが記載されており、Nu がホワイトリストに登録されるまで変更ができません。 "),G,a("ファイルを更新していない場合は次のようなエラーが表示される場合があります。")]),I,M])}const Q=o(u,[["render",U],["__file","installation.html.vue"]]);export{Q as default};
