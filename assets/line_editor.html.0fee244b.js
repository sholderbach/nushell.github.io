import{_ as t,r as e,o as p,c as o,a as n,b as c,d as a,e as l}from"./app.8034769a.js";const d={},i=n("h1",{id:"reedline-nu-\u7684\u884C\u7F16\u8F91\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reedline-nu-\u7684\u884C\u7F16\u8F91\u5668","aria-hidden":"true"},"#"),a(" Reedline\uFF0CNu \u7684\u884C\u7F16\u8F91\u5668")],-1),u=a("Nushell \u7684\u884C\u7F16\u8F91\u5668 "),r={href:"https://github.com/nushell/reedline",target:"_blank",rel:"noopener noreferrer"},k=a("Reedline"),h=a(" \u662F\u4E00\u4E2A\u8DE8\u5E73\u53F0\u7684\u884C\u8BFB\u53D6\u5668\uFF0C\u5B83\u88AB\u8BBE\u8BA1\u4E3A\u6A21\u5757\u5316\u4E14\u9887\u5177\u7075\u6D3B\u6027\u7684\u3002\u8BE5\u5F15\u64CE\u7684\u4F5C\u7528\u662F\u8D1F\u8D23\u63A7\u5236\u547D\u4EE4\u5386\u53F2\uFF0C\u9A8C\u8BC1\uFF0C\u81EA\u52A8\u8865\u5168\uFF0C\u63D0\u793A\u4EE5\u53CA\u5C4F\u5E55\u7ED8\u5236\u3002"),m=l(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u7F16\u8F91\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u6A21\u5F0F" aria-hidden="true">#</a> \u7F16\u8F91\u6A21\u5F0F</h3><p>Reedline \u5141\u8BB8\u4F60\u4F7F\u7528\u4E24\u79CD\u6A21\u5F0F\u6765\u7F16\u8F91\u6587\u672C\uFF1Avi \u548C emacs\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u7684\u7F16\u8F91\u6A21\u5F0F\u662F emacs \u6A21\u5F0F\u3002\u82E5\u8981\u81EA\u884C\u8BBE\u7F6E\u559C\u6B22\u7684\u6A21\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u4E3A\u76F8\u5E94\u6A21\u5F0F\u3002\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    edit_mode: emacs
    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><h4 id="\u9ED8\u8BA4\u952E\u76D8\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u952E\u76D8\u7ED1\u5B9A" aria-hidden="true">#</a> \u9ED8\u8BA4\u952E\u76D8\u7ED1\u5B9A</h4><p>\u6BCF\u79CD\u7F16\u8F91\u6A21\u5F0F\u90FD\u6709\u76F8\u5E94\u7684 vi \u6216 emacs \u6587\u672C\u7F16\u8F91\u7684\u5E38\u7528\u5FEB\u6377\u952E\u8BBE\u7F6E\u3002</p><p>Emacs \u548C Vi \u5FEB\u6377\u952E\u7ED1\u5B9A</p><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u4E8B\u4EF6</th></tr></thead><tbody><tr><td>Esc</td><td>Esc</td></tr><tr><td>Backspace</td><td>\u9000\u683C</td></tr><tr><td>End</td><td>\u79FB\u81F3\u884C\u5C3E</td></tr><tr><td>End</td><td>\u8865\u5168\u5386\u53F2\u63D0\u793A</td></tr><tr><td>Home</td><td>\u79FB\u81F3\u884C\u9996</td></tr><tr><td>Ctr + c</td><td>\u53D6\u6D88\u5F53\u524D\u884C</td></tr><tr><td>Ctr + l</td><td>\u6E05\u9664\u5C4F\u5E55</td></tr><tr><td>Ctr + r</td><td>\u641C\u7D22\u5386\u53F2</td></tr><tr><td>Ctr + Right</td><td>Complete history word</td></tr><tr><td>Ctr + Right</td><td>\u53F3\u79FB\u4E00\u4E2A\u8BCD</td></tr><tr><td>Ctr + Left</td><td>\u5DE6\u79FB\u4E00\u4E2A\u8BCD</td></tr><tr><td>Up</td><td>\u83DC\u5355\u4E0A\u79FB</td></tr><tr><td>Up</td><td>\u4E0A\u79FB</td></tr><tr><td>Down</td><td>\u83DC\u5355\u4E0B\u79FB</td></tr><tr><td>Down</td><td>\u4E0B\u79FB</td></tr><tr><td>Left</td><td>\u83DC\u5355\u5DE6\u79FB</td></tr><tr><td>Left</td><td>\u5DE6\u79FB</td></tr><tr><td>Right</td><td>\u5B8C\u6210\u5386\u53F2\u63D0\u793A</td></tr><tr><td>Right</td><td>\u83DC\u5355\u53F3\u79FB</td></tr><tr><td>Right</td><td>\u53F3\u79FB</td></tr><tr><td>Ctr + b</td><td>\u83DC\u5355\u5DE6\u79FB</td></tr><tr><td>Ctr + b</td><td>\u5DE6\u79FB</td></tr><tr><td>Ctr + f</td><td>\u5B8C\u6210\u5386\u53F2\u63D0\u793A</td></tr><tr><td>Ctr + f</td><td>\u83DC\u5355\u53F3\u79FB</td></tr><tr><td>Ctr + f</td><td>\u53F3\u79FB</td></tr><tr><td>Ctr + p</td><td>\u83DC\u5355\u4E0A\u79FB</td></tr><tr><td>Ctr + p</td><td>\u4E0A\u79FB</td></tr><tr><td>Ctr + n</td><td>\u83DC\u5355\u4E0B\u79FB</td></tr><tr><td>Ctr + n</td><td>\u4E0B\u79FB</td></tr></tbody></table><p>Vi \u666E\u901A\u952E\u7ED1\u5B9A</p><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u4E8B\u4EF6</th></tr></thead><tbody><tr><td>Ctr + c</td><td>\u53D6\u6D88\u5F53\u524D\u884C</td></tr><tr><td>Ctr + l</td><td>\u6E05\u9664\u5C4F\u5E55</td></tr><tr><td>Up</td><td>\u83DC\u5355\u4E0A\u79FB</td></tr><tr><td>Up</td><td>\u4E0A\u79FB</td></tr><tr><td>Down</td><td>\u83DC\u5355\u4E0B\u79FB</td></tr><tr><td>Down</td><td>\u4E0B\u79FB</td></tr><tr><td>Left</td><td>\u83DC\u5355\u5DE6\u79FB</td></tr><tr><td>Left</td><td>\u5DE6\u79FB</td></tr><tr><td>Right</td><td>\u83DC\u5355\u53F3\u79FB</td></tr><tr><td>Right</td><td>\u53F3\u79FB</td></tr></tbody></table><p>\u9664\u4E86\u4E4B\u524D\u7684\u952E\u76D8\u7ED1\u5B9A\uFF0C\u5728\u6B63\u5E38 Vi \u6A21\u5F0F\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u7ECF\u5178\u7684 Vi \u5FEB\u6377\u952E\u6765\u8FDB\u884C\u79FB\u52A8\u6216\u8005\u6267\u884C\u76F8\u5E94\u7684\u52A8\u4F5C\u3002\u53EF\u7528\u7684\u7EC4\u5408\u7684\u9009\u9879\u662F\uFF1A</p><p>Vi \u6B63\u5E38\u79FB\u52A8\u5FEB\u6377\u952E</p><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u79FB\u52A8</th></tr></thead><tbody><tr><td>w</td><td>\u524D\u79FB\u4E00\u4E2A\u5355\u8BCD</td></tr><tr><td>d</td><td>\u79FB\u52A8\u5230\u884C\u5C3E</td></tr><tr><td>0</td><td>\u79FB\u52A8\u5230\u884C\u9996</td></tr><tr><td>$</td><td>\u79FB\u52A8\u5230\u884C\u5C3E</td></tr><tr><td>f</td><td>\u884C\u5185\u5411\u53F3\u67E5\u627E\u5B57\u7B26</td></tr><tr><td>t</td><td>\u884C\u5185\u53F3\u79FB\u5230\u6307\u5B9A\u5B57\u7B26\u524D</td></tr><tr><td>F</td><td>\u884C\u5185\u5411\u5DE6\u67E5\u627E\u5B57\u7B26</td></tr><tr><td>T</td><td>\u884C\u5185\u5DE6\u79FB\u5230\u6307\u5B9A\u5B57\u7B26\u524D</td></tr></tbody></table><p>Vi \u6B63\u5E38\u64CD\u4F5C\u5FEB\u6377\u952E</p><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u64CD\u4F5C</th></tr></thead><tbody><tr><td>d</td><td>\u5220\u9664</td></tr><tr><td>p</td><td>\u5728\u5149\u6807\u4E4B\u540E\u7C98\u8D34</td></tr><tr><td>P</td><td>\u5728\u5149\u6807\u4E4B\u524D\u7C98\u8D34</td></tr><tr><td>h</td><td>\u5DE6\u79FB</td></tr><tr><td>l</td><td>\u53F3\u79FB</td></tr><tr><td>j</td><td>\u4E0B\u79FB</td></tr><tr><td>k</td><td>\u4E0A\u79FB</td></tr><tr><td>w</td><td>\u53F3\u79FB\u4E00\u4E2A\u5355\u8BCD</td></tr><tr><td>b</td><td>\u5DE6\u79FB\u4E00\u4E2A\u5355\u8BCD</td></tr><tr><td>i</td><td>\u5728\u5149\u6807\u524D\u63D2\u5165</td></tr><tr><td>a</td><td>\u5728\u5149\u6807\u540E\u63D2\u5165</td></tr><tr><td>0</td><td>\u79FB\u5230\u884C\u9996</td></tr><tr><td>^</td><td>\u79FB\u5230\u884C\u9996</td></tr><tr><td>$</td><td>\u79FB\u5230\u884C\u5C3E</td></tr><tr><td>u</td><td>\u64A4\u9500</td></tr><tr><td>c</td><td>\u4FEE\u6539</td></tr><tr><td>x</td><td>\u5220\u9664\u5B57\u7B26</td></tr><tr><td>s</td><td>\u641C\u7D22\u5386\u53F2</td></tr><tr><td>D</td><td>\u5220\u9664\u5F53\u524D\u4F4D\u7F6E\u5230\u884C\u5C3E</td></tr><tr><td>A</td><td>\u5728\u5F53\u524D\u884C\u6700\u540E\u63D2\u5165</td></tr></tbody></table><h3 id="\u547D\u4EE4\u5386\u53F2" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u5386\u53F2" aria-hidden="true">#</a> \u547D\u4EE4\u5386\u53F2</h3><p>\u5982\u524D\u6240\u8FF0\uFF0CReedline \u7BA1\u7406\u5E76\u5B58\u50A8\u6240\u6709\u88AB\u7F16\u8F91\u5E76\u53D1\u9001\u7ED9 Nushell \u7684\u547D\u4EE4\u3002\u8981\u914D\u7F6E Reedline \u53EF\u4EE5\u5B58\u50A8\u7684\u6700\u5927\u8BB0\u5F55\u6570\uFF0C\u4F60\u9700\u8981\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u8C03\u6574\u8FD9\u4E2A\u503C\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    max_history_size: <span class="token number">1000</span>
    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5B9A\u5236\u4F60\u7684\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u5236\u4F60\u7684\u63D0\u793A" aria-hidden="true">#</a> \u5B9A\u5236\u4F60\u7684\u63D0\u793A</h3><p>Reedline \u7684\u63D0\u793A\u8BED\u4E5F\u662F\u9AD8\u5EA6\u53EF\u5B9A\u5236\u7684\u3002\u4E3A\u4E86\u6784\u5EFA\u4F60\u7684\u5B8C\u7F8E\u63D0\u793A\u7B26\uFF0C\u4F60\u53EF\u4EE5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E0B\u9762\u7684\u73AF\u5883\u53D8\u91CF\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Use nushell functions to define your right and left prompt</span>
def create_left_prompt <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> path_segment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token environment constant">PWD</span><span class="token punctuation">)</span>

    <span class="token variable">$path_segment</span>
<span class="token punctuation">}</span>

def create_right_prompt <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> time_segment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%m/%d/%Y %r&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span> <span class="token operator">|</span> str collect<span class="token punctuation">)</span>

    <span class="token variable">$time_segment</span>
<span class="token punctuation">}</span>

let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> create_left_prompt <span class="token punctuation">}</span>
let-env PROMPT_COMMAND_RIGHT <span class="token operator">=</span> <span class="token punctuation">{</span> create_right_prompt <span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4F60\u5E76\u975E\u5FC5\u987B\u8981\u7528 Nushell \u7684\u51FD\u6570\u6765\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u6765\u5B9A\u4E49\u5B83\u4EEC\u3002</p></div><p>\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\u6765\u5B9A\u5236\u884C\u7F16\u8F91\u5668\u7684\u63D0\u793A\u7B26\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>let-env PROMPT_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;\u3009&quot;</span>
let-env PROMPT_INDICATOR_VI_INSERT <span class="token operator">=</span> <span class="token string">&quot;: &quot;</span>
let-env PROMPT_INDICATOR_VI_NORMAL <span class="token operator">=</span> <span class="token string">&quot;\u3009&quot;</span>
let-env PROMPT_MULTILINE_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;::: &quot;</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u63D0\u793A\u7B26\u662F\u73AF\u5883\u53D8\u91CF\uFF0C\u5B83\u4EE3\u8868\u4E86\u63D0\u793A\u7684\u72B6\u6001</p></div><h2 id="\u6309\u952E\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u6309\u952E\u7ED1\u5B9A" aria-hidden="true">#</a> \u6309\u952E\u7ED1\u5B9A</h2><p>Reedline \u6309\u952E\u7ED1\u5B9A\u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u7ED3\u6784\uFF0C\u5B83\u5141\u8BB8\u4F60\u5EFA\u7ACB\u4E00\u8FDE\u4E32\u7684\u4E8B\u4EF6\uFF0C\u800C\u4E14\u8FD9\u4E9B\u4E8B\u4EF6\u53EF\u4EE5\u901A\u8FC7\u7279\u5B9A\u7684\u6309\u952E\u7EC4\u5408\u6765\u89E6\u53D1\u3002</p><p>\u4F8B\u5982\uFF0C\u6211\u4EEC\u5047\u8BBE\u4F60\u60F3\u628A\u8865\u5168\u83DC\u5355\u7ED1\u5B9A\u5230 <code>Ctrl + t</code> \u8FD9\u7EC4\u5FEB\u6377\u952E\u4E0A\uFF08\u9ED8\u8BA4\u662F<code>tab</code>\uFF09\u3002\u4F60\u53EF\u4EE5\u6DFB\u52A0\u4E0B\u9762\u7684\u6761\u76EE\u5230\u4F60\u7684\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: emacs
        event: <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u52A0\u8F7D\u8FD9\u4E2A\u65B0\u7684 <code>config.nu</code> \u4E4B\u540E\uFF0C\u4F60\u7684\u65B0\u952E\u76D8\u7ED1\u5B9A\uFF08<code>Ctrl + t</code>\uFF09\u5C06\u6253\u5F00\u547D\u4EE4\u81EA\u52A8\u8865\u5168\u3002</p><p>\u6BCF\u4E2A\u6309\u952E\u7ED1\u5B9A\u90FD\u9700\u8981\u4EE5\u4E0B\u5143\u7D20\uFF1A</p><ul><li>name: \u4E3A\u4F60\u7684\u7ED1\u5B9A\u952E\u53D6\u4E00\u4E2A\u72EC\u7279\u7684\u540D\u5B57\uFF0C\u4EE5\u4FBF\u4E8E\u5728<code>$config.keybindings</code>\u4E2D\u5F15\u7528</li><li>modifier: \u7ED1\u5B9A\u952E\u7684\u4FEE\u9970\u7B26\u3002\u9009\u9879\u6709\uFF1A <ul><li>none</li><li>control</li><li>alt</li><li>shift</li><li>control | alt</li><li>control | alt | shift</li></ul></li><li>keycode: \u8FD9\u4EE3\u8868\u8981\u6309\u4E0B\u7684\u952E</li><li>mode: emacs, vi_insert, vi_normal (\u4E00\u4E2A\u5355\u72EC\u7684\u5B57\u7B26\u4E32\u6216\u4E00\u4E2A\u5217\u8868\uFF0C\u4F8B\u5982\uFF1A [<code>vi_insert</code> <code>vi_normal</code>])</li><li>event: \u952E\u76D8\u7ED1\u5B9A\u8981\u53D1\u9001\u7684\u4E8B\u4EF6\u7684\u7C7B\u578B\u3002\u9009\u9879\u5305\u62EC\uFF1A <ul><li>send</li><li>edit</li><li>until</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6240\u6709\u53EF\u7528\u7684\u4FEE\u9970\u952E\u3001\u952E\u7801\u548C\u4E8B\u4EF6\u90FD\u53EF\u4EE5\u901A\u8FC7<code>keybindings list</code>\u547D\u4EE4\u627E\u5230\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6DFB\u52A0\u5230 <code>vi_insert</code> \u6A21\u5F0F\u4E2D\u7684\u6309\u952E\u7ED1\u5B9A\u5C06\u5728\u884C\u7F16\u8F91\u5668\u5904\u4E8E\u63D2\u5165\u6A21\u5F0F\uFF08\u53EF\u4EE5\u5199\u5165\u6587\u672C\uFF09\u65F6\u53EF\u7528\uFF0C\u800C\u6807\u6709 <code>vi_normal</code> \u6A21\u5F0F\u7684\u6309\u952E\u7ED1\u5B9A\u5C06\u5728\u6B63\u5E38\u6A21\u5F0F\u4E0B\uFF08\u5F53\u5149\u6807\u4F7F\u7528 h\u3001j\u3001k \u6216 l \u79FB\u52A8\u65F6\uFF09\u53EF\u7528\u3002</p></div><p>\u952E\u76D8\u7ED1\u5B9A\u6761\u76EE\u7684\u4E8B\u4EF6\u90E8\u5206\u662F\u5B9A\u4E49\u8981\u6267\u884C\u7684\u52A8\u4F5C\u7684\u5730\u65B9\u3002\u5728\u8FD9\u4E2A\u5B57\u6BB5\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u8BB0\u5F55\u6216\u4E00\u4E2A\u8BB0\u5F55\u5217\u8868\u3002\u6BD4\u5982\u8FD9\u6837\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token punctuation">..</span>.
  event: <span class="token punctuation">{</span> send: Enter <span class="token punctuation">}</span>
  <span class="token punctuation">..</span>.
</code></pre></div><p>\u6216\u8005</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token punctuation">..</span>.
  event: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> edit: Clear <span class="token punctuation">}</span>
    <span class="token punctuation">{</span> send: Enter <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
  <span class="token punctuation">..</span>.
</code></pre></div><p>\u4E0A\u8FF0\u7B2C\u4E00\u4E2A\u6309\u952E\u7ED1\u5B9A\u4F8B\u5B50\u9075\u5FAA\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF0C\u53EA\u6709\u4E00\u4E2A\u4E8B\u4EF6\u88AB\u53D1\u9001\u5230\u5F15\u64CE\u3002</p><p>\u540E\u4E00\u4E2A\u6309\u952E\u7ED1\u5B9A\u7684\u4F8B\u5B50\u662F\u5411\u5F15\u64CE\u53D1\u9001\u4E00\u7CFB\u5217\u7684\u4E8B\u4EF6\u3002\u5B83\u9996\u5148\u6E05\u9664\u63D0\u793A\uFF0C\u63D2\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u8F93\u5165\u8BE5\u503C\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name: change_dir_with_fzf
      modifier: CONTROL
      keycode: Char_t
      mode: emacs
      event:<span class="token punctuation">[</span>
          <span class="token punctuation">{</span> edit: Clear <span class="token punctuation">}</span>
          <span class="token punctuation">{</span> edit: InsertString,
            value: <span class="token string">&quot;cd (ls | where type == dir | each { |it| <span class="token variable">$it</span>.name} | str collect (char nl) | fzf | decode utf-8 | str trim)&quot;</span>

          <span class="token punctuation">}</span>
          <span class="token punctuation">{</span> send: Enter <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u6309\u952E\u7ED1\u5B9A\u7684\u7F3A\u70B9\u662F\uFF0C\u63D2\u5165\u7684\u6587\u672C\u5C06\u88AB\u9A8C\u8BC1\u5904\u7406\u5E76\u4FDD\u5B58\u5728\u5386\u53F2\u8BB0\u5F55\u4E2D\uFF0C\u8FD9\u4F7F\u5F97\u6309\u952E\u7ED1\u5B9A\u7684\u6267\u884C\u901F\u5EA6\u6709\u70B9\u6162\uFF0C\u800C\u4E14\u4F1A\u7528\u76F8\u540C\u7684\u547D\u4EE4\u6765\u586B\u5145\u547D\u4EE4\u5386\u53F2\u3002\u51FA\u4E8E\u8FD9\u4E2A\u539F\u56E0\uFF0C\u53EF\u4EE5\u91C7\u7528 <code>ExecuteHostCommand</code> \u7C7B\u578B\u7684\u4E8B\u4EF6\u3002\u4E0B\u4E00\u4E2A\u4F8B\u5B50\u4EE5\u66F4\u7B80\u5355\u7684\u65B9\u5F0F\u505A\u4E86\u4E0E\u524D\u4E00\u4E2A\u76F8\u540C\u7684\u4E8B\u60C5\uFF0C\u53D1\u9001\u4E86\u4E00\u4E2A\u5355\u4E00\u7684\u4E8B\u4EF6\u7ED9\u5F15\u64CE\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name: change_dir_with_fzf
      modifier: CONTROL
      keycode: Char_y
      mode: emacs
      event: <span class="token punctuation">{</span>
        send: ExecuteHostCommand,
        cmd: <span class="token string">&quot;cd (ls | where type == dir | each { |it| <span class="token variable">$it</span>.name} | str collect (char nl) | fzf | decode utf-8 | str trim)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u6211\u4EEC\u7EE7\u7EED\u4E4B\u524D\uFF0C\u4F60\u4E00\u5B9A\u5DF2\u7ECF\u6CE8\u610F\u5230\uFF0C\u7F16\u8F91\u548C\u53D1\u9001\u7684\u8BED\u6CD5\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u56E0\u6B64\u6709\u5FC5\u8981\u5BF9\u5B83\u4EEC\u8FDB\u884C\u66F4\u591A\u7684\u89E3\u91CA\u3002 <code>send</code> \u662F\u6240\u6709\u53EF\u4EE5\u88AB\u5F15\u64CE\u5904\u7406\u7684 <code>Reedline</code> \u4E8B\u4EF6\uFF0C\u800C <code>edit</code> \u662F\u6240\u6709\u53EF\u4EE5\u88AB\u5F15\u64CE\u5904\u7406\u7684 <code>EditCommands</code>\u3002</p><h3 id="send\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#send\u7C7B\u578B" aria-hidden="true">#</a> <code>send</code>\u7C7B\u578B</h3><p>\u8981\u627E\u5230 <code>send</code> \u7684\u6240\u6709\u53EF\u7528\u9009\u9879\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>keybindings list <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> events
</code></pre></div><p>\u800C <code>send</code> \u4E8B\u4EF6\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span> send: <span class="token operator">&lt;</span>NAME OF EVENT FROM LIST<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u4F60\u53EF\u4EE5\u7528\u5927\u5199\u5B57\u6BCD\u6765\u547D\u540D\u4E8B\u4EF6\u7684\u540D\u79F0\uFF0C\u952E\u76D8\u7ED1\u5B9A\u89E3\u6790\u5668\u662F\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u3002</p></div><p>\u8FD9\u6761\u89C4\u5219\u6709\u4E24\u4E2A\u4F8B\u5916\uFF1A<code>Menu</code>\u548C<code>ExecuteHostCommand</code>\u3002\u8FD9\u4E24\u4E2A\u4E8B\u4EF6\u9700\u8981\u4E00\u4E2A\u989D\u5916\u7684\u5B57\u6BB5\u6765\u5B8C\u6210\uFF0C<code>Menu</code> \u9700\u8981\u6709\u4E00\u4E2A\u83DC\u5355\u7684\u540D\u79F0\u624D\u80FD\u89E6\u53D1\uFF08\u81EA\u52A8\u8865\u5168\u83DC\u5355\u6216\u5386\u53F2\u547D\u4EE4\u83DC\u5355\uFF09\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        send: menu
        name: completion_menu
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>\u800C <code>ExecuteHostCommand</code> \u9700\u8981\u4E00\u4E2A\u6709\u6548\u7684\u547D\u4EE4\uFF0C\u5B83\u5C06\u88AB\u53D1\u9001\u5230\u5F15\u64CE\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        send: ExecuteHostCommand
        cmd: <span class="token string">&quot;cd ~&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u5728\u4E8B\u4EF6\u5217\u8868\u4E2D\uFF0C\u4F60\u8FD8\u4F1A\u770B\u5230<code>Edit([])</code>\uFF0C<code>Multiple([])</code>\u548C<code>UntilFound([])</code>\u3002\u8FD9\u4E9B\u9009\u9879\u5BF9\u89E3\u6790\u5668\u662F\u4E0D\u53EF\u89C1\u7684\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u57FA\u4E8E\u952E\u76D8\u7ED1\u5B9A\u7684\u5B9A\u4E49\u6765\u6784\u5EFA\u7684\u3002\u4F8B\u5982\uFF0C\u5F53\u4F60\u5728\u952E\u76D8\u7ED1\u5B9A\u4E8B\u4EF6\u91CC\u9762\u5B9A\u4E49\u4E86\u4E00\u4E2A\u8BB0\u5F55\u5217\u8868\u65F6\uFF0C\u5C31\u4F1A\u4E3A\u4F60\u5EFA\u7ACB\u4E00\u4E2A<code>Multiple([])</code>\u4E8B\u4EF6\u3002<code>Edit([])</code>\u4E8B\u4EF6\u4E0E\u524D\u9762\u63D0\u5230\u7684<code>edit</code>\u7C7B\u578B\u76F8\u540C\u3002<code>UntilFound([])</code>\u4E8B\u4EF6\u548C\u524D\u9762\u63D0\u5230\u7684<code>until</code>\u7C7B\u578B\u4E00\u6837\u3002</p><h3 id="edit\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#edit\u7C7B\u578B" aria-hidden="true">#</a> <code>edit</code>\u7C7B\u578B</h3><p><code>edit</code>\u7C7B\u578B\u662F<code>Edit([])</code>\u4E8B\u4EF6\u7684\u7B80\u5316\u3002<code>event</code>\u7C7B\u578B\u7B80\u5316\u4E86\u5B9A\u4E49\u590D\u6742\u7F16\u8F91\u4E8B\u4EF6\u7684\u6309\u952E\u7ED1\u5B9A\u3002\u8981\u5217\u51FA\u53EF\u7528\u7684\u9009\u9879\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>keybindings list <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> edits
</code></pre></div><p>\u4EE5\u4E0B\u662F\u7F16\u8F91\u7684\u5E38\u7528\u8BED\u6CD5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span> edit: <span class="token operator">&lt;</span>NAME OF EDIT FROM LIST<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>\u5217\u8868\u4E2D\u5E26\u6709 <code>()</code> \u7684\u7F16\u8F91\u7684\u8BED\u6CD5\u6709\u4E00\u70B9\u53D8\u5316\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u7F16\u8F91\u9700\u8981\u4E00\u4E2A\u989D\u5916\u7684\u503C\u6765\u8FDB\u884C\u5B8C\u5168\u5B9A\u4E49\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u5728\u63D0\u793A\u7B26\u6240\u5728\u7684\u4F4D\u7F6E\u63D2\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u90A3\u4E48\u4F60\u5C06\u4E0D\u5F97\u4E0D\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        edit: InsertString
        value: <span class="token string">&quot;MY NEW STRING&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>\u6216\u8005\u8BF4\u4F60\u60F3\u5411\u53F3\u79FB\u52A8\uFF0C\u76F4\u5230\u7B2C\u4E00\u4E2A<code>S</code>\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        edit: MoveRightUntil
        value: <span class="token string">&quot;S&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>\u6B63\u5982\u4F60\u6240\u770B\u5230\u7684\uFF0C\u8FD9\u4E24\u79CD\u7C7B\u578B\u5C06\u5141\u8BB8\u4F60\u6784\u5EFA\u4F60\u9700\u8981\u7684\u4EFB\u4F55\u7C7B\u578B\u7684\u6309\u952E\u7ED1\u5B9A\u3002</p><h3 id="until\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#until\u7C7B\u578B" aria-hidden="true">#</a> <code>until</code>\u7C7B\u578B</h3><p>\u4E3A\u4E86\u5B8C\u6210\u8FD9\u4E2A\u6309\u952E\u7ED1\u5B9A\u4E4B\u65C5\uFF0C\u6211\u4EEC\u9700\u8981\u8BA8\u8BBA\u4E8B\u4EF6\u7684<code>until</code>\u7C7B\u578B\u3002\u6B63\u5982\u4F60\u5230\u76EE\u524D\u4E3A\u6B62\u6240\u770B\u5230\u7684\uFF0C\u4F60\u53EF\u4EE5\u53D1\u9001\u4E00\u4E2A\u5355\u4E00\u7684\u4E8B\u4EF6\u6216\u4E00\u4E2A\u4E8B\u4EF6\u5217\u8868\u3002\u800C\u5F53\u4E00\u4E2A\u4E8B\u4EF6\u5217\u8868\u88AB\u53D1\u9001\u65F6\uFF0C\u6BCF\u4E00\u4E2A\u4E8B\u4EF6\u90FD\u4F1A\u88AB\u5904\u7406\u3002</p><p>\u7136\u800C\uFF0C\u5728\u6709\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u80FD\u60F3\u628A\u4E0D\u540C\u7684\u4E8B\u4EF6\u5206\u914D\u7ED9\u540C\u4E00\u4E2A\u952E\u76D8\u7ED1\u5B9A\u3002\u8FD9\u5728 Nushell \u83DC\u5355\u4E2D\u7279\u522B\u6709\u7528\u3002\u4F8B\u5982\uFF0C\u5047\u8BBE\u4F60\u4ECD\u7136\u60F3\u7528<code>Ctrl + t</code>\u6FC0\u6D3B\u4F60\u7684\u8865\u5168\u83DC\u5355\uFF0C\u4F46\u4F60\u4E5F\u60F3\u5728\u83DC\u5355\u88AB\u6FC0\u6D3B\u540E\u7528\u540C\u4E00\u4E2A\u5FEB\u6377\u952E\u79FB\u52A8\u5230\u4E0B\u4E00\u4E2A\u5143\u7D20\u3002</p><p>\u5BF9\u4E8E\u8FD9\u4E9B\u60C5\u51B5\uFF0C\u6211\u4EEC\u6709<code>until</code>\u5173\u952E\u5B57\u3002\u5728<code>until</code>\u4E8B\u4EF6\u4E2D\u5217\u51FA\u7684\u4E8B\u4EF6\u5C06\u88AB\u9010\u4E00\u5904\u7406\uFF0C\u4E0D\u540C\u7684\u662F\uFF0C\u4E00\u65E6\u4E00\u4E2A\u4E8B\u4EF6\u88AB\u6210\u529F\u5904\u7406\uFF0C\u4E8B\u4EF6\u5904\u7406\u5C31\u4F1A\u505C\u6B62\u3002</p><p>\u4E0B\u4E00\u4E2A\u952E\u76D8\u7ED1\u5B9A\u5C31\u662F\u8FD9\u79CD\u60C5\u51B5\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: emacs
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: MenuNext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>\u4E0A\u9762\u7684\u6309\u952E\u7ED1\u5B9A\u5C06\u9996\u5148\u5C1D\u8BD5\u6253\u5F00\u4E00\u4E2A\u8865\u5168\u83DC\u5355\u3002\u5982\u679C\u83DC\u5355\u6CA1\u6709\u6FC0\u6D3B\uFF0C\u5B83\u5C06\u6FC0\u6D3B\u5B83\u5E76\u53D1\u9001\u4E00\u4E2A\u6210\u529F\u4FE1\u53F7\u3002\u5982\u679C\u518D\u6B21\u6309\u4E0B\u6309\u952E\u7ED1\u5B9A\uFF0C\u56E0\u4E3A\u5DF2\u7ECF\u6709\u4E00\u4E2A\u6FC0\u6D3B\u7684\u83DC\u5355\uFF0C\u90A3\u4E48\u5B83\u5C06\u53D1\u9001\u7684\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u662F<code>MenuNext</code>\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u5C06\u628A\u9009\u62E9\u5668\u79FB\u52A8\u5230\u83DC\u5355\u7684\u4E0B\u4E00\u4E2A\u5143\u7D20\u3002</p><p>\u6B63\u5982\u4F60\u6240\u770B\u5230\u7684\uFF0C<code>until</code>\u5173\u952E\u5B57\u5141\u8BB8\u6211\u4EEC\u4E3A\u540C\u4E00\u4E2A\u952E\u76D8\u7ED1\u5B9A\u5B9A\u4E49\u4E24\u4E2A\u4E8B\u4EF6\u3002\u5728\u5199\u8FD9\u7BC7\u6587\u7AE0\u7684\u65F6\u5019\uFF0C\u53EA\u6709\u83DC\u5355\u4E8B\u4EF6\u5141\u8BB8\u8FD9\u79CD\u7C7B\u578B\u7684\u5206\u5C42\u3002\u5176\u4ED6\u975E\u83DC\u5355\u4E8B\u4EF6\u7C7B\u578B\u5C06\u603B\u662F\u8FD4\u56DE\u4E00\u4E2A\u6210\u529F\u503C\uFF0C\u8FD9\u610F\u5473\u7740<code>until</code>\u4E8B\u4EF6\u5728\u5230\u8FBE\u7B2C\u4E00\u4E2A\u547D\u4EE4\u65F6\u5C31\u4F1A\u505C\u6B62\u3002</p><p>\u4F8B\u5982\uFF0C\u4E0B\u4E00\u4E2A\u6309\u952E\u7ED1\u5B9A\u5C06\u603B\u662F\u53D1\u9001\u4E00\u4E2A<code>down</code>\uFF0C\u56E0\u4E3A\u8BE5\u4E8B\u4EF6\u603B\u662F\u6210\u529F\u7684\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: emacs
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: down <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menunext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="\u79FB\u9664\u4E00\u4E2A\u9ED8\u8BA4\u7684\u6309\u952E\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u79FB\u9664\u4E00\u4E2A\u9ED8\u8BA4\u7684\u6309\u952E\u7ED1\u5B9A" aria-hidden="true">#</a> \u79FB\u9664\u4E00\u4E2A\u9ED8\u8BA4\u7684\u6309\u952E\u7ED1\u5B9A</h3><p>\u5982\u679C\u4F60\u60F3\u5220\u9664\u67D0\u4E2A\u9ED8\u8BA4\u7684\u6309\u952E\u7ED1\u5B9A\uFF0C\u800C\u4E0D\u6253\u7B97\u4F7F\u7528\u4E0D\u540C\u7684\u52A8\u4F5C\u6765\u66FF\u4EE3\u5B83\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E<code>event: null</code>\u3002</p><p>\u4F8B\u5982\uFF0C\u5728\u6240\u6709\u7684\u7F16\u8F91\u6A21\u5F0F\u4E0B\uFF0C\u7981\u7528 <code>Ctrl + l</code> \u6E05\u9664\u5C4F\u5E55\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        modifier: control
        keycode: char_l
        mode: <span class="token punctuation">[</span>emacs, vi_normal, vi_insert<span class="token punctuation">]</span>
        event: null
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>

</code></pre></div><h3 id="\u6392\u67E5\u952E\u76D8\u7ED1\u5B9A\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u6392\u67E5\u952E\u76D8\u7ED1\u5B9A\u95EE\u9898" aria-hidden="true">#</a> \u6392\u67E5\u952E\u76D8\u7ED1\u5B9A\u95EE\u9898</h3><p>\u4F60\u7684\u7EC8\u7AEF\u73AF\u5883\u53EF\u80FD\u5E76\u4E0D\u603B\u662F\u4EE5\u4F60\u671F\u671B\u7684\u65B9\u5F0F\u5C06\u4F60\u7684\u7EC4\u5408\u952E\u5192\u6CE1\u5230 Nushell \u4E0A\u3002 \u4F60\u53EF\u4EE5\u4F7F\u7528<code>keybindings listen</code>\u547D\u4EE4\u6765\u786E\u5B9A Nushell \u662F\u5426\u771F\u7684\u6536\u5230\u4E86\u67D0\u4E9B\u6309\u952E\uFF0C\u4EE5\u53CA\u5982\u4F55\u6536\u5230\u7684\u3002</p><h2 id="\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355" aria-hidden="true">#</a> \u83DC\u5355</h2><p>\u611F\u8C22 Reedline\uFF0CNushell \u7684\u83DC\u5355\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5B8C\u6210\u65E5\u5E38\u7684 Shell \u811A\u672C\u64CD\u4F5C\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u4ECB\u7ECD\u4E00\u4E0B\u5728\u4F7F\u7528 Nushell \u65F6\u4E00\u76F4\u53EF\u7528\u7684\u9ED8\u8BA4\u83DC\u5355\u3002</p><h3 id="\u5E2E\u52A9\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u5E2E\u52A9\u83DC\u5355" aria-hidden="true">#</a> \u5E2E\u52A9\u83DC\u5355</h3><p>\u5E2E\u52A9\u83DC\u5355\u7684\u5B58\u5728\u662F\u4E3A\u4E86\u65B9\u4FBF\u4F60\u8FC7\u6E21\u5230 Nushell\u3002\u5047\u8BBE\u4F60\u6B63\u5728\u7EC4\u5EFA\u4E00\u4E2A\u60CA\u4EBA\u7684\u7BA1\u9053\uFF0C\u7136\u540E\u4F60\u5FD8\u8BB0\u4E86\u53CD\u8F6C\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5185\u90E8\u547D\u4EE4\u3002\u4F60\u53EF\u4EE5\u7528<code>ctr+q</code>\u6765\u6FC0\u6D3B\u5E2E\u52A9\u83DC\u5355\uFF0C\u800C\u4E0D\u662F\u5220\u9664\u4F60\u7684\u7BA1\u9053\u3002\u4E00\u65E6\u6FC0\u6D3B\uFF0C\u53EA\u9700\u8F93\u5165\u4F60\u8981\u627E\u7684\u547D\u4EE4\u7684\u5173\u952E\u8BCD\uFF0C\u83DC\u5355\u5C31\u4F1A\u663E\u793A\u4E0E\u4F60\u7684\u8F93\u5165\u76F8\u5339\u914D\u7684\u547D\u4EE4\uFF0C\u800C\u5339\u914D\u7684\u4F9D\u636E\u5C31\u662F\u547D\u4EE4\u7684\u540D\u79F0\u6216\u63CF\u8FF0\u3002</p><p>\u8981\u6D4F\u89C8\u83DC\u5355\uFF0C\u4F60\u53EF\u4EE5\u7528<code>tab</code>\u9009\u62E9\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u4F60\u53EF\u4EE5\u6309\u5DE6\u952E\u6216\u53F3\u952E\u6EDA\u52A8\u63CF\u8FF0\uFF0C\u4F60\u751A\u81F3\u53EF\u4EE5\u5728\u884C\u4E2D\u7C98\u8D34\u53EF\u7528\u7684\u547D\u4EE4\u4F8B\u5B50\u3002</p><p>\u5E2E\u52A9\u83DC\u5355\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u4EE5\u4E0B\u53C2\u6570\u8FDB\u884C\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: help_menu
        only_buffer_difference: <span class="token boolean">true</span> <span class="token comment"># Search is done on the text written after activating the menu</span>
        marker: <span class="token string">&quot;? &quot;</span>                 <span class="token comment"># Indicator that appears with the menu is active</span>
        type: <span class="token punctuation">{</span>
            layout: description      <span class="token comment"># Type of menu</span>
            columns: <span class="token number">4</span>               <span class="token comment"># Number of columns where the options are displayed</span>
            col_width: <span class="token number">20</span>            <span class="token comment"># Optional value. If missing all the screen width is used to calculate column width</span>
            col_padding: <span class="token number">2</span>           <span class="token comment"># Padding between columns</span>
            selection_rows: <span class="token number">4</span>        <span class="token comment"># Number of rows allowed to display found options</span>
            description_rows: <span class="token number">10</span>     <span class="token comment"># Number of rows allowed to display command description</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green                   <span class="token comment"># Text style</span>
            selected_text: green_reverse  <span class="token comment"># Text style for selected option</span>
            description_text: yellow      <span class="token comment"># Text style for description</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><h3 id="\u8865\u5168\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u8865\u5168\u83DC\u5355" aria-hidden="true">#</a> \u8865\u5168\u83DC\u5355</h3><p>\u8865\u5168\u83DC\u5355\u662F\u4E00\u4E2A\u4E0A\u4E0B\u6587\u654F\u611F\u7684\u83DC\u5355\uFF0C\u5B83\u5C06\u6839\u636E\u63D0\u793A\u7684\u72B6\u6001\u7ED9\u51FA\u5EFA\u8BAE\u3002\u8FD9\u4E9B\u5EFA\u8BAE\u7684\u8303\u56F4\u5305\u62EC\u4ECE\u8DEF\u5F84\u5EFA\u8BAE\u5230\u66FF\u4EE3\u547D\u4EE4\u3002\u5728\u7F16\u5199\u547D\u4EE4\u65F6\uFF0C\u4F60\u53EF\u4EE5\u6FC0\u6D3B\u8BE5\u83DC\u5355\u4EE5\u67E5\u770B\u5185\u90E8\u547D\u4EE4\u7684\u53EF\u7528\u9009\u9879\u3002\u53E6\u5916\uFF0C\u5982\u679C\u4F60\u5DF2\u7ECF\u4E3A\u5916\u90E8\u547D\u4EE4\u5B9A\u4E49\u4E86\u4F60\u7684\u81EA\u5B9A\u4E49\u8865\u5168\u65B9\u5F0F\uFF0C\u8FD9\u4E9B\u8865\u5168\u63D0\u793A\u4E5F\u4F1A\u51FA\u73B0\u5728\u83DC\u5355\u4E2D\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8865\u5168\u83DC\u5355\u662F\u901A\u8FC7\u6309<code>tab</code>\u8BBF\u95EE\u7684\uFF0C\u5B83\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\u4E2D\u7684\u8FD9\u4E9B\u503C\u6765\u8FDB\u884C\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: completion_menu
        only_buffer_difference: <span class="token boolean">false</span> <span class="token comment"># Search is done on the text written after activating the menu</span>
        marker: <span class="token string">&quot;| &quot;</span>                  <span class="token comment"># Indicator that appears with the menu is active</span>
        type: <span class="token punctuation">{</span>
            layout: columnar          <span class="token comment"># Type of menu</span>
            columns: <span class="token number">4</span>                <span class="token comment"># Number of columns where the options are displayed</span>
            col_width: <span class="token number">20</span>             <span class="token comment"># Optional value. If missing all the screen width is used to calculate column width</span>
            col_padding: <span class="token number">2</span>            <span class="token comment"># Padding between columns</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green                   <span class="token comment"># Text style</span>
            selected_text: green_reverse  <span class="token comment"># Text style for selected option</span>
            description_text: yellow      <span class="token comment"># Text style for description</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>\u901A\u8FC7\u4FEE\u6539\u8FD9\u4E9B\u53C2\u6570\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u559C\u597D\u5B9A\u5236\u4F60\u7684\u83DC\u5355\u5E03\u5C40\u3002</p><h3 id="\u5386\u53F2\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u5386\u53F2\u83DC\u5355" aria-hidden="true">#</a> \u5386\u53F2\u83DC\u5355</h3><p>\u5386\u53F2\u83DC\u5355\u662F\u8BBF\u95EE\u7F16\u8F91\u5668\u547D\u4EE4\u5386\u53F2\u7684\u4E00\u4E2A\u4FBF\u6377\u65B9\u6CD5\u3002\u5F53\u6FC0\u6D3B\u83DC\u5355\u65F6(\u9ED8\u8BA4\u4E3A<code>Ctrl+x</code>)\uFF0C\u547D\u4EE4\u7684\u5386\u53F2\u4F1A\u4EE5\u65F6\u95F4\u5012\u5E8F\u663E\u793A\uFF0C\u8FD9\u4F7F\u5F97\u9009\u62E9\u524D\u4E00\u4E2A\u547D\u4EE4\u53D8\u5F97\u975E\u5E38\u5BB9\u6613\u3002</p><p>\u5386\u53F2\u83DC\u5355\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u914D\u7F6E\u5BF9\u8C61\u4E2D\u7684\u8FD9\u4E9B\u503C\u8FDB\u884C\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: help_menu
        only_buffer_difference: <span class="token boolean">true</span> <span class="token comment"># Search is done on the text written after activating the menu</span>
        marker: <span class="token string">&quot;? &quot;</span>                 <span class="token comment"># Indicator that appears with the menu is active</span>
        type: <span class="token punctuation">{</span>
            layout: list             <span class="token comment"># Type of menu</span>
            page_size: <span class="token number">10</span>            <span class="token comment"># Number of entries that will presented when activating the menu</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green                   <span class="token comment"># Text style</span>
            selected_text: green_reverse  <span class="token comment"># Text style for selected option</span>
            description_text: yellow      <span class="token comment"># Text style for description</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>\u5F53\u5386\u53F2\u83DC\u5355\u88AB\u6FC0\u6D3B\u65F6\uFF0C\u5B83\u4ECE\u5386\u53F2\u4E2D\u62C9\u51FA<code>page_size</code>\u4E2A\u8BB0\u5F55\u5E76\u5728\u83DC\u5355\u4E2D\u5448\u73B0\u3002\u5982\u679C\u7EC8\u7AEF\u8FD8\u6709\u7A7A\u95F4\uFF0C\u5F53\u4F60\u518D\u6B21\u6309<code>Ctrl+x</code>\u65F6\uFF0C\u83DC\u5355\u5C06\u62C9\u51FA\u76F8\u540C\u6570\u91CF\u7684\u8BB0\u5F55\uFF0C\u5E76\u5C06\u5B83\u4EEC\u8FFD\u52A0\u5230\u5F53\u524D\u9875\u3002\u5982\u679C\u4E0D\u53EF\u80FD\u5448\u73B0\u6240\u6709\u62C9\u51FA\u7684\u8BB0\u5F55\uFF0C\u83DC\u5355\u5C06\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u9875\u9762\u3002\u53EF\u4EE5\u901A\u8FC7\u6309<code>Ctrl+z</code>\u8F6C\u5230\u4E0A\u4E00\u9875\u6216<code>Ctrl+x</code>\u8F6C\u5230\u4E0B\u4E00\u9875\u6765\u6D4F\u89C8\u8FD9\u4E9B\u9875\u9762\u3002</p><h4 id="\u641C\u7D22\u5386\u53F2\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u641C\u7D22\u5386\u53F2\u8BB0\u5F55" aria-hidden="true">#</a> \u641C\u7D22\u5386\u53F2\u8BB0\u5F55</h4><p>\u8981\u5728\u4F60\u7684\u547D\u4EE4\u5386\u53F2\u4E2D\u641C\u7D22\uFF0C\u4F60\u53EF\u4EE5\u5F00\u59CB\u8F93\u5165\u4F60\u8981\u627E\u7684\u547D\u4EE4\u7684\u5173\u952E\u8BCD\u3002\u4E00\u65E6\u83DC\u5355\u88AB\u6FC0\u6D3B\uFF0C\u4F60\u8F93\u5165\u7684\u4EFB\u4F55\u5185\u5BB9\u90FD\u4F1A\u88AB\u5386\u53F2\u8BB0\u5F55\u4E2D\u9009\u5B9A\u7684\u547D\u4EE4\u6240\u53D6\u4EE3\u3002\u4F8B\u5982\uFF0C\u5047\u8BBE\u4F60\u5DF2\u7ECF\u8F93\u5165\u4E86\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F60\u53EF\u4EE5\u628A\u5149\u6807\u653E\u5728 <code>()</code> \u5185\u5E76\u6FC0\u6D3B\u83DC\u5355\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8F93\u5165\u5173\u952E\u8BCD\u6765\u8FC7\u6EE4\u5386\u53F2\u8BB0\u5F55\uFF0C\u4E00\u65E6\u4F60\u9009\u62E9\u4E86\u4E00\u4E2A\u6761\u76EE\uFF0C\u8F93\u5165\u7684\u8BCD\u5C31\u4F1A\u88AB\u66FF\u6362\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span>ls <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 10MiB<span class="token punctuation">)</span>
</code></pre></div><h4 id="\u83DC\u5355\u5FEB\u901F\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355\u5FEB\u901F\u9009\u62E9" aria-hidden="true">#</a> \u83DC\u5355\u5FEB\u901F\u9009\u62E9</h4><p>\u83DC\u5355\u7684\u53E6\u4E00\u4E2A\u5F88\u597D\u7684\u7279\u6027\u662F\u80FD\u591F\u5FEB\u901F\u9009\u62E9\u5176\u4E2D\u7684\u5185\u5BB9\u3002\u5047\u8BBE\u4F60\u5DF2\u7ECF\u6FC0\u6D3B\u4E86\u4F60\u7684\u83DC\u5355\uFF0C\u5B83\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>
<span class="token number">0</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 10MiB
<span class="token number">1</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 20MiB
<span class="token number">2</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 30MiB
<span class="token number">3</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 40MiB
</code></pre></div><p>\u4F60\u53EF\u4EE5\u8F93\u5165<code>!3</code>\uFF0C\u7136\u540E\u6309\u56DE\u8F66\uFF0C\u800C\u4E0D\u662F\u6309\u5411\u4E0B\u952E\u53BB\u9009\u62E9\u7B2C\u56DB\u4E2A\u6761\u76EE\u3002\u8FD9\u5C06\u5728\u63D0\u793A\u4F4D\u7F6E\u63D2\u5165\u9009\u5B9A\u7684\u6587\u672C\uFF0C\u8282\u7701\u4F60\u5411\u4E0B\u6EDA\u52A8\u83DC\u5355\u7684\u65F6\u95F4\u3002</p><p>\u5386\u53F2\u641C\u7D22\u548C\u5FEB\u901F\u9009\u62E9\u53EF\u4EE5\u4E00\u8D77\u4F7F\u7528\u3002\u4F60\u53EF\u4EE5\u6FC0\u6D3B\u83DC\u5355\uFF0C\u8FDB\u884C\u5FEB\u901F\u641C\u7D22\uFF0C\u7136\u540E\u4F7F\u7528\u524D\u9762\u7684\u65B9\u6CD5\u8FDB\u884C\u5FEB\u901F\u9009\u62E9\u3002</p><h3 id="\u7528\u6237\u5B9A\u4E49\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u5B9A\u4E49\u83DC\u5355" aria-hidden="true">#</a> \u7528\u6237\u5B9A\u4E49\u83DC\u5355</h3><p>\u5982\u679C\u4F60\u53D1\u73B0\u9ED8\u8BA4\u7684\u83DC\u5355\u5BF9\u4F60\u6765\u8BF4\u662F\u4E0D\u591F\u7684\uFF0C\u4F60\u9700\u8981\u8981\u521B\u5EFA\u81EA\u5DF1\u7684\u83DC\u5355\uFF0CNushell \u4E5F\u53EF\u4EE5\u5E2E\u4F60\u505A\u5230\u8FD9\u70B9\u3002</p><p>\u4E3A\u4E86\u6DFB\u52A0\u4E00\u4E2A\u6EE1\u8DB3\u4F60\u9700\u6C42\u7684\u65B0\u83DC\u5355\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5176\u4E2D\u4E00\u4E2A\u9ED8\u8BA4\u7684\u5E03\u5C40\u4F5C\u4E3A\u6A21\u677F\u3002Nushell \u4E2D\u53EF\u7528\u7684\u6A21\u677F\u6709\u5217\u5F0F\u3001\u5217\u8868\u5F0F\u6216\u63CF\u8FF0\u5F0F\u3002</p><p>\u5217\u5F0F\u83DC\u5355\u5C06\u4EE5\u5217\u7684\u65B9\u5F0F\u5411\u4F60\u663E\u793A\u6570\u636E\uFF0C\u5E76\u6839\u636E\u4F60\u7684\u5217\u4E2D\u663E\u793A\u7684\u6587\u672C\u5927\u5C0F\u8C03\u6574\u5217\u6570\u3002</p><p>\u5217\u8868\u7C7B\u578B\u7684\u83DC\u5355\u5C06\u603B\u662F\u4EE5\u5217\u8868\u7684\u5F62\u5F0F\u663E\u793A\u5EFA\u8BAE\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528<code>!</code>\u52A0\u6570\u5B57\u7684\u7EC4\u5408\u6765\u9009\u62E9\u503C\u3002</p><p>\u63CF\u8FF0\u7C7B\u578B\u5C06\u7ED9\u4F60\u66F4\u591A\u7684\u7A7A\u95F4\u6765\u663E\u793A\u4E00\u4E9B\u503C\u7684\u63CF\u8FF0\uFF0C\u4EE5\u53CA\u53EF\u4EE5\u63D2\u5165\u5230\u7F13\u51B2\u533A\u7684\u989D\u5916\u4FE1\u606F\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u60F3\u521B\u5EFA\u4E00\u4E2A\u83DC\u5355\uFF0C\u7528\u4E8E\u663E\u793A\u5728\u4F60\u7684\u4F1A\u8BDD\u4E2D\u521B\u5EFA\u7684\u6240\u6709\u53D8\u91CF\uFF0C\u6211\u4EEC\u5C06\u628A\u5B83\u79F0\u4E3A<code>vars_menu</code>\u3002\u8FD9\u4E2A\u83DC\u5355\u5C06\u4F7F\u7528\u4E00\u4E2A\u5217\u8868\u5E03\u5C40 (layout: list)\u3002\u4E3A\u4E86\u641C\u7D22\u503C\uFF0C\u6211\u4EEC\u5E0C\u671B\u53EA\u4F7F\u7528\u83DC\u5355\u6FC0\u6D3B\u540E\u8F93\u5165\u7684\u4E1C\u897F(only_buffer_difference: true)\u3002</p><p>\u6EE1\u8DB3\u8FD9\u4E9B\u6240\u9700\u7684\u83DC\u5355\u5C06\u770B\u8D77\u6765\u50CF\u8FD9\u6837\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: vars_menu
        only_buffer_difference: <span class="token boolean">true</span>
        marker: <span class="token string">&quot;# &quot;</span>
        type: <span class="token punctuation">{</span>
            layout: list
            page_size: <span class="token number">10</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green
            selected_text: green_reverse
            description_text: yellow
        <span class="token punctuation">}</span>
        source: <span class="token punctuation">{</span> <span class="token operator">|</span>buffer, position<span class="token operator">|</span>
            <span class="token variable">$nu</span>.scope.vars
            <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token variable">$buffer</span>
            <span class="token operator">|</span> sort-by name
            <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token punctuation">{</span>value: <span class="token variable">$it</span>.name description: <span class="token variable">$it</span>.type<span class="token punctuation">}</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>\u6B63\u5982\u4F60\u6240\u770B\u5230\u7684\uFF0C\u65B0\u7684\u83DC\u5355\u4E0E\u4E4B\u524D\u63CF\u8FF0\u7684<code>history_menu</code>\u662F\u76F8\u540C\u7684\uFF0C\u552F\u4E00\u7684\u533A\u522B\u662F\u65B0\u7684\u5B57\u6BB5\u53EB<code>source</code>\u3002<code>source</code>\u5B57\u6BB5\u662F Nushell \u6240\u5B9A\u4E49\u7684\uFF0C\u5B83\u5305\u542B\u4E86\u4F60\u60F3\u5728\u83DC\u5355\u4E2D\u663E\u793A\u7684\u503C\u3002\u5BF9\u4E8E\u8FD9\u4E2A\u83DC\u5355\uFF0C\u6211\u4EEC\u4ECE<code>$nu.scope.vars</code>\u4E2D\u63D0\u53D6\u6570\u636E\uFF0C\u7136\u540E\u7528\u5B83\u6765\u521B\u5EFA\u8BB0\u5F55\u5E76\u586B\u5145\u83DC\u5355\u3002</p><p>\u8BB0\u5F55\u6240\u9700\u7684\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  value:       <span class="token comment"># The value that will be inserted in the buffer</span>
  description: <span class="token comment"># Optional. Description that will be display with the selected value</span>
  span: <span class="token punctuation">{</span>      <span class="token comment"># Optional. Span indicating what section of the string will be replaced by the value</span>
    start:
    end:
  <span class="token punctuation">}</span>
  extra: <span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token comment"># Optional. A list of strings that will be displayed with the selected value. Only works with a description menu</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E3A\u4E86\u8BA9\u83DC\u5355\u663E\u793A\u4E00\u4E9B\u4E1C\u897F\uFF0C\u81F3\u5C11<code>value</code>\u5B57\u6BB5\u5FC5\u987B\u5B58\u5728\u4E8E\u7ED3\u679C\u8BB0\u5F55\u4E2D\u3002</p><p>\u4E3A\u4E86\u4F7F\u83DC\u5355\u5177\u6709\u4EA4\u4E92\u6027\uFF0C\u8FD9\u4E24\u4E2A\u53D8\u91CF\u5728\u5757\u4E2D\u53EF\u7528\uFF1A<code>$buffer</code>\u548C<code>$position</code>\u3002<code>$buffer</code>\u5305\u542B\u83DC\u5355\u6355\u83B7\u7684\u503C\uFF0C\u5F53\u9009\u9879<code>only_buffer_difference</code>\u4E3A\u771F\u65F6\uFF0C<code>$buffer</code>\u662F\u83DC\u5355\u88AB\u6FC0\u6D3B\u540E\u8F93\u5165\u7684\u6587\u672C\u3002\u5982\u679C<code>only_buffer_difference</code>\u662F\u5047\u7684\uFF0C<code>$buffer</code>\u662F\u884C\u4E2D\u6240\u6709\u7684\u5B57\u7B26\u4E32\u3002<code>$position</code>\u53D8\u91CF\u53EF\u4EE5\u7528\u6765\u6839\u636E\u4F60\u5BF9\u83DC\u5355\u7684\u8BBE\u60F3\u521B\u5EFA\u66FF\u6362\u8303\u56F4\u3002<code>$position</code>\u7684\u503C\u4F1A\u968F\u7740<code>only_buffer_difference</code>\u662F\u771F\u8FD8\u662F\u5047\u800C\u6539\u53D8\u3002\u5F53\u4E3A\u771F\u65F6\uFF0C<code>$position</code>\u662F\u5728\u83DC\u5355\u6FC0\u6D3B\u540E\u63D2\u5165\u6587\u672C\u7684\u5B57\u7B26\u4E32\u7684\u8D77\u59CB\u4F4D\u7F6E\uFF1B\u5F53\u503C\u4E3A false \u65F6\uFF0C<code>$position</code>\u8868\u793A\u5B9E\u9645\u7684\u5149\u6807\u4F4D\u7F6E\u3002</p><p>\u5229\u7528\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u8BA1\u4F60\u7684\u83DC\u5355\u6765\u5448\u73B0\u4F60\u6240\u9700\u8981\u7684\u4FE1\u606F\uFF0C\u5E76\u5728\u9700\u8981\u7684\u4F4D\u7F6E\u66FF\u6362\u8BE5\u503C\u3002\u4E4B\u540E\uFF0C\u73A9\u8F6C\u4F60\u7684\u83DC\u5355\u552F\u4E00\u989D\u5916\u9700\u8981\u505A\u7684\u4E8B\u60C5\u662F\u5B9A\u4E49\u4E00\u4E2A\u6309\u952E\u7ED1\u5B9A\uFF0C\u5E76\u7528\u4E8E\u6FC0\u6D3B\u4F60\u7684\u5168\u65B0\u83DC\u5355\u3002</p><h3 id="\u83DC\u5355\u6309\u952E\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u83DC\u5355\u6309\u952E\u7ED1\u5B9A" aria-hidden="true">#</a> \u83DC\u5355\u6309\u952E\u7ED1\u5B9A</h3><p>\u5982\u679C\u4F60\u60F3\u6539\u53D8\u4E24\u4E2A\u83DC\u5355\u7684\u9ED8\u8BA4\u6FC0\u6D3B\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B9A\u4E49\u65B0\u7684\u6309\u952E\u7ED1\u5B9A\u6765\u5B9E\u73B0\u3002\u4F8B\u5982\uFF0C\u63A5\u4E0B\u6765\u7684\u4E24\u4E2A\u6309\u952E\u7ED1\u5B9A\u8BBE\u7F6E\u5206\u522B\u5C06<code>Ctrl+t</code>\u548C<code>Ctrl+y</code>\u5B9A\u4E49\u4E3A\u89E6\u53D1\u81EA\u52A8\u8865\u5168\u548C\u5386\u53F2\u83DC\u5355\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: <span class="token punctuation">[</span>vi_insert vi_normal<span class="token punctuation">]</span>
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menupagenext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">{</span>
        name: history_menu
        modifier: control
        keycode: char_y
        mode: <span class="token punctuation">[</span>vi_insert vi_normal<span class="token punctuation">]</span>
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: menu name: history_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menupagenext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div>`,126);function g(b,v){const s=e("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[u,n("a",r,[k,c(s)]),h]),m])}const _=t(d,[["render",g],["__file","line_editor.html.vue"]]);export{_ as default};
