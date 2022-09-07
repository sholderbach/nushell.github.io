import{_ as e,o as a,c as n,e as s}from"./app.8034769a.js";const t={},o=s(`<h1 id="help" tabindex="-1"><a class="header-anchor" href="#help" aria-hidden="true">#</a> Help</h1><p>A good way to become familiar with all that nu has to offer is by utilizing the <code>help</code> command.</p><h3 id="how-to-see-all-supported-commands" tabindex="-1"><a class="header-anchor" href="#how-to-see-all-supported-commands" aria-hidden="true">#</a> How to see all supported commands:</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> commands <span class="token operator">|</span> where is_custom <span class="token operator">==</span> <span class="token boolean">false</span> <span class="token operator">|</span> first <span class="token number">10</span> <span class="token operator">|</span> drop <span class="token function">column</span>
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502     name      \u2502  category  \u2502 is_plugin \u2502 is_custom \u2502                             usage
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 alias         \u2502 core       \u2502 false     \u2502 false     \u2502 Alias a command (with optional flags) to a new name
 1 \u2502 all           \u2502 filters    \u2502 false     \u2502 false     \u2502 Test if every element of the input matches a predicate.
 2 \u2502 ansi          \u2502 platform   \u2502 false     \u2502 false     \u2502 Output ANSI codes to change color.
 3 \u2502 ansi gradient \u2502 platform   \u2502 false     \u2502 false     \u2502 draw text with a provided start and end code making a gradient
 4 \u2502 ansi strip    \u2502 platform   \u2502 false     \u2502 false     \u2502 strip ansi escape sequences from string
 5 \u2502 any           \u2502 filters    \u2502 false     \u2502 false     \u2502 Tests if any element of the input matches a predicate.
 6 \u2502 append        \u2502 filters    \u2502 false     \u2502 false     \u2502 Append a row to the table.
 7 \u2502 benchmark     \u2502 system     \u2502 false     \u2502 false     \u2502 Time the running time of a block
 8 \u2502 build-string  \u2502 strings    \u2502 false     \u2502 false     \u2502 Create a string from the arguments.
 9 \u2502 cal           \u2502 generators \u2502 false     \u2502 false     \u2502 Display a calendar.
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><hr><h3 id="specific-information-on-a-command" tabindex="-1"><a class="header-anchor" href="#specific-information-on-a-command" aria-hidden="true">#</a> Specific information on a command</h3><p>To find more specific information on a command, use <code>help &lt;COMMAND&gt;</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> fetch
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>Fetch the contents from a URL (HTTP GET operation).

Usage:
  &gt; fetch {flags} &lt;URL&gt;

Flags:
  -h, --help
      Display this help message
  -u, --user &lt;Any&gt;
      the username when authenticating
  -p, --password &lt;Any&gt;
      the password when authenticating
  -t, --timeout &lt;Int&gt;
      timeout period in seconds
  -H, --headers &lt;Any&gt;
      custom headers you want to add
  -r, --raw
      fetch contents as text rather than a table

Parameters:
  URL: the URL to fetch the contents from

Examples:
  Fetch content from url.com
  &gt; fetch url.com

  Fetch content from url.com, with username and password
  &gt; fetch -u myuser -p mypass url.com

  Fetch content from url.com, with custom header
  &gt; fetch -H [my-header-key my-header-value] url.com
</code></pre></div><hr><h3 id="specific-information-on-a-command-subcommand" tabindex="-1"><a class="header-anchor" href="#specific-information-on-a-command-subcommand" aria-hidden="true">#</a> Specific information on a command subcommand</h3><p>To find more specific information on a command subcommand, use <code>help &lt;COMMAND&gt; &lt;SUBCOMMAND&gt;</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> str reverse
</code></pre></div><p>Output</p><div class="language-text ext-text"><pre class="language-text"><code>outputs the reversals of the strings in the pipeline

Usage:
  &gt; str reverse ...(rest)

Flags:
  -h, --help
      Display this help message

Parameters:
  ...rest: optionally reverse text by column paths

Examples:
  Return the reversals of multiple strings
  &gt; &#39;Nushell&#39; | str reverse
</code></pre></div>`,18),r=[o];function l(c,i){return a(),n("div",null,r)}const h=e(t,[["render",l],["__file","help.html.vue"]]);export{h as default};
