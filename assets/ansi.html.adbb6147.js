import{_ as s,o as t,c as o,a as e,t as n,d as r,e as c}from"./app.8034769a.js";const i={},l={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(),u={style:{"white-space":"pre-wrap"}},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; ansi (code) --escape --osc --list</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>code</code>: the name of the code to use like &#39;green&#39; or &#39;reset&#39; to reset the color</li><li><code>--escape</code>: escape sequence without the escape character(s)</li><li><code>--osc</code>: operating system command (ocs) escape sequence without the escape character(s)</li><li><code>--list</code>: list available ansi code names</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>For escape sequences:
Escape: &#39;\\x1b[&#39; is not required for --escape parameter
Format: #(;#)m
Example: 1;31m for bold red or 2;37;41m for dimmed white fg with red bg
There can be multiple text formatting sequence numbers
separated by a ; and ending with an m where the # is of the
following values:
    attribute_number, abbreviation, description
    0     reset / normal display
    1  b  bold or increased intensity
    2  d  faint or decreased intensity
    3  i  italic on (non-mono font)
    4  u  underline on
    5  l  slow blink on
    6     fast blink on
    7  r  reverse video on
    8  h  nondisplayed (invisible) on
    9  s  strike-through on

    foreground/bright colors    background/bright colors
    30/90    black              40/100    black
    31/91    red                41/101    red
    32/92    green              42/102    green
    33/93    yellow             43/103    yellow
    34/94    blue               44/104    blue
    35/95    magenta            45/105    magenta
    36/96    cyan               46/106    cyan
    37/97    white              47/107    white
    39       default            49        default
    https://en.wikipedia.org/wiki/ANSI_escape_code

OSC: &#39;\\x1b]&#39; is not required for --osc parameter
Example: echo [(ansi -o &#39;0&#39;) &#39;some title&#39; (char bel)] | str collect
Format: #
    0 Set window title and icon name
    1 Set icon name
    2 Set window title
    4 Set/read color palette
    9 iTerm2 Grown notifications
    10 Set foreground color (x11 color spec)
    11 Set background color (x11 color spec)
    ... others
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Change color to green</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ansi green
</code></pre></div><p>Reset the color</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> ansi reset
</code></pre></div><p>Use ansi to color text (rb = red bold, gb = green bold, pb = purple bold)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>ansi rb<span class="token punctuation">)</span> Hello <span class="token string">&quot; &quot;</span> <span class="token punctuation">(</span>ansi gb<span class="token punctuation">)</span> Nu <span class="token string">&quot; &quot;</span> <span class="token punctuation">(</span>ansi pb<span class="token punctuation">)</span> World <span class="token punctuation">(</span>ansi reset<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">|</span> str collect
</code></pre></div><p>Use ansi to color text (italic bright yellow on red &#39;Hello&#39; with green bold &#39;Nu&#39; and purple bold &#39;World&#39;)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token punctuation">(</span>ansi <span class="token parameter variable">-e</span> <span class="token string">&#39;3;93;41m&#39;</span><span class="token punctuation">)</span> Hello <span class="token punctuation">(</span>ansi reset<span class="token punctuation">)</span> <span class="token string">&quot; &quot;</span> <span class="token punctuation">(</span>ansi gb<span class="token punctuation">)</span> Nu <span class="token string">&quot; &quot;</span> <span class="token punctuation">(</span>ansi pb<span class="token punctuation">)</span> World <span class="token punctuation">(</span>ansi reset<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">|</span> str collect
</code></pre></div><p>Use ansi to color text with a style (blue on red in bold)</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> $<span class="token string">&quot;(ansi -e { fg: &#39;#0000ff&#39; bg: &#39;#ff0000&#39; attr: b })Hello Nu World(ansi reset)&quot;</span>
</code></pre></div>`,17);function g(a,b){return t(),o("div",null,[e("h1",l,[p,d,e("code",null,n(a.$frontmatter.title),1)]),e("div",u,n(a.$frontmatter.usage),1),h])}const m=s(i,[["render",g],["__file","ansi.html.vue"]]);export{m as default};
