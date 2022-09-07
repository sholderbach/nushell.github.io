import{_ as s,o as r,c as i,a as e,t,d,e as o}from"./app.8034769a.js";const c={},l={id:"frontmatter-title",tabindex:"-1"},n=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=d(),u={style:{"white-space":"pre-wrap"}},p=o(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; du (path) --all --deref --exclude --max-depth --min-size</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>path</code>: starting directory</li><li><code>--all</code>: Output file sizes as well as directory sizes</li><li><code>--deref</code>: Dereference symlinks to their targets for size</li><li><code>--exclude {glob}</code>: Exclude these file names</li><li><code>--max-depth {int}</code>: Directory recursion limit</li><li><code>--min-size {int}</code>: Exclude files below this size</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Disk usage of the current directory</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">du</span>
</code></pre></div>`,7);function f(a,m){return r(),i("div",null,[e("h1",l,[n,h,e("code",null,t(a.$frontmatter.title),1)]),e("div",u,t(a.$frontmatter.usage),1),p])}const x=s(c,[["render",f],["__file","du.html.vue"]]);export{x as default};
