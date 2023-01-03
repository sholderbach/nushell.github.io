import{_ as s,z as o,A as r,X as t,C as a,D as n,a6 as i}from"./framework.3d018c9f.js";const d={},h={id:"frontmatter-title-for-default",tabindex:"-1"},c=t("a",{class:"header-anchor",href:"#frontmatter-title-for-default","aria-hidden":"true"},"#",-1),l={class:"command-title"},p=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; path </code></p><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>You must use one of the following subcommands. Using this command as-is will only produce this help message.

There are three ways to represent a path:

* As a path literal, e.g., &#39;/home/viking/spam.txt&#39;
* As a structured path: a table with &#39;parent&#39;, &#39;stem&#39;, and &#39;extension&#39; (and
* &#39;prefix&#39; on Windows) columns. This format is produced by the &#39;path parse&#39;
  subcommand.
* As a list of path parts, e.g., &#39;[ / home viking spam.txt ]&#39;. Splitting into
  parts is done by the \`path split\` command.

All subcommands accept all three variants as an input. Furthermore, the &#39;path
join&#39; subcommand can be used to join the structured path or path parts back into
the path literal.
</code></pre></div>`,4);function u(e,m){return o(),r("div",null,[t("h1",h,[c,a(),t("code",null,n(e.$frontmatter.title),1),a(" for default")]),t("div",l,n(e.$frontmatter.default),1),p])}const _=s(d,[["render",u],["__file","path.html.vue"]]);export{_ as default};
