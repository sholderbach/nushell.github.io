import{_ as a,p as s,q as t,a1 as e}from"./framework-344bb0e4.js";const n={},o=e(`<h1 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h1><h3 id="fetching-json-from-a-url" tabindex="-1"><a class="header-anchor" href="#fetching-json-from-a-url" aria-hidden="true">#</a> Fetching JSON from a url</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> http get https://jsonplaceholder.typicode.com/posts <span class="token operator">|</span> first <span class="token number">5</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>━━━┯━━━━━━━━┯━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 # │ userId │ id │ title                                                   │ body
───┼────────┼────┼─────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────
 0 │      1 │  1 │ sunt aut facere repellat provident occaecati excepturi  │ quia et suscipit
   │        │    │ optio reprehenderit                                     │ suscipit recusandae consequuntur expedita et cum
   │        │    │                                                         │ reprehenderit molestiae ut ut quas totam
   │        │    │                                                         │ nostrum rerum est autem sunt rem eveniet architecto
 1 │      1 │  2 │ qui est esse                                            │ est rerum tempore vitae
   │        │    │                                                         │ sequi sint nihil reprehenderit dolor beatae ea dolores
   │        │    │                                                         │ neque
   │        │    │                                                         │ fugiat blanditiis voluptate porro vel nihil molestiae ut
   │        │    │                                                         │ reiciendis
   │        │    │                                                         │ qui aperiam non debitis possimus qui neque nisi nulla
 2 │      1 │  3 │ ea molestias quasi exercitationem repellat qui ipsa sit │ et iusto sed quo iure
   │        │    │ aut                                                     │ voluptatem occaecati omnis eligendi aut ad
   │        │    │                                                         │ voluptatem doloribus vel accusantium quis pariatur
   │        │    │                                                         │ molestiae porro eius odio et labore et velit aut
 3 │      1 │  4 │ eum et est occaecati                                    │ ullam et saepe reiciendis voluptatem adipisci
   │        │    │                                                         │ sit amet autem assumenda provident rerum culpa
   │        │    │                                                         │ quis hic commodi nesciunt rem tenetur doloremque ipsam
   │        │    │                                                         │ iure
   │        │    │                                                         │ quis sunt voluptatem rerum illo velit
 4 │      1 │  5 │ nesciunt quas odio                                      │ repudiandae veniam quaerat sunt sed
   │        │    │                                                         │ alias aut fugiat sit autem sed est
   │        │    │                                                         │ voluptatem omnis possimus esse voluptatibus quis
   │        │    │                                                         │ est aut tenetur dolor neque
━━━┷━━━━━━━━┷━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
</code></pre></div><hr><h3 id="fetch-from-multiple-urls" tabindex="-1"><a class="header-anchor" href="#fetch-from-multiple-urls" aria-hidden="true">#</a> Fetch from multiple urls</h3><p>Suppose you are querying several endpoints, perhaps with different query parameters and you want to view all the responses as a single dataset. You can make use of <code>$it</code> to run nu commands on every row of data.</p><p>An example JSON file, <code>urls.json</code>, with the following contents:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://jsonplaceholder.typicode.com/posts/1&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://jsonplaceholder.typicode.com/posts/2&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;https://jsonplaceholder.typicode.com/posts/3&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> urls.json <span class="token operator">|</span> get urls <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>u<span class="token operator">|</span> http get <span class="token variable">$u</span> <span class="token punctuation">}</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>━━━┯━━━━━━━━┯━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 # │ userId │ id │ title                                                   │ body
───┼────────┼────┼─────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────
 0 │      1 │  1 │ sunt aut facere repellat provident occaecati excepturi  │ quia et suscipit
   │        │    │ optio reprehenderit                                     │ suscipit recusandae consequuntur expedita et cum
   │        │    │                                                         │ reprehenderit molestiae ut ut quas totam
   │        │    │                                                         │ nostrum rerum est autem sunt rem eveniet architecto
 1 │      1 │  2 │ qui est esse                                            │ est rerum tempore vitae
   │        │    │                                                         │ sequi sint nihil reprehenderit dolor beatae ea dolores
   │        │    │                                                         │ neque
   │        │    │                                                         │ fugiat blanditiis voluptate porro vel nihil molestiae ut
   │        │    │                                                         │ reiciendis
   │        │    │                                                         │ qui aperiam non debitis possimus qui neque nisi nulla
 2 │      1 │  3 │ ea molestias quasi exercitationem repellat qui ipsa sit │ et iusto sed quo iure
   │        │    │ aut                                                     │ voluptatem occaecati omnis eligendi aut ad
   │        │    │                                                         │ voluptatem doloribus vel accusantium quis pariatur
   │        │    │                                                         │ molestiae porro eius odio et labore et velit aut
━━━┷━━━━━━━━┷━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
</code></pre></div><hr><p>If you specify the <code>--raw</code> flag, you&#39;ll see 3 separate json objects, one in each row.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> urls.json <span class="token operator">|</span> get urls <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>u<span class="token operator">|</span> http get <span class="token variable">$u</span> <span class="token parameter variable">-r</span> <span class="token punctuation">}</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 # │ &lt;value&gt;
───┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 0 │ {
   │   &quot;userId&quot;: 1,
   │   &quot;id&quot;: 1,
   │   &quot;title&quot;: &quot;sunt aut facere repellat provident occaecati excepturi optio reprehenderit&quot;,
   │   &quot;body&quot;: &quot;quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum
   │ rerum est autem sunt rem eveniet architecto&quot;
   │ }
 1 │ {
   │   &quot;userId&quot;: 1,
   │   &quot;id&quot;: 2,
   │   &quot;title&quot;: &quot;qui est esse&quot;,
   │   &quot;body&quot;: &quot;est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro
   │ vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla&quot;
   │ }
 2 │ {
   │   &quot;userId&quot;: 1,
   │   &quot;id&quot;: 3,
   │   &quot;title&quot;: &quot;ea molestias quasi exercitationem repellat qui ipsa sit aut&quot;,
   │   &quot;body&quot;: &quot;et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis
   │ pariatur\\nmolestiae porro eius odio et labore et velit aut&quot;
   │ }
━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
</code></pre></div><hr><p>To combine these responses together into a valid JSON array, you can turn the table into json.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> urls.json <span class="token operator">|</span> get urls <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>u<span class="token operator">|</span> http get <span class="token variable">$u</span> <span class="token punctuation">}</span> <span class="token operator">|</span> to json
</code></pre></div><p>Output</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sunt aut facere repellat provident occaecati excepturi optio reprehenderit&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;qui est esse&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ea molestias quasi exercitationem repellat qui ipsa sit aut&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><hr><p>Making a <code>post</code> request to an endpoint with a JSON payload. To make long requests easier, you can organize your json payloads inside a file.</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;my_payload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userId&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> payload.json <span class="token operator">|</span> get my_payload <span class="token operator">|</span> to json <span class="token operator">|</span> post https://jsonplaceholder.typicode.com/posts <span class="token variable">$in</span>
</code></pre></div><p>Output</p><div class="language-text" data-ext="text"><pre class="language-text"><code>━━━━━
 id
─────
 101
━━━━━
</code></pre></div><hr><p>We can put this all together into a pipeline where we read data, manipulate it, and then send it back to the API. Lets <code>fetch</code> a post, <code>increment</code> the id, and <code>post</code> it back to the endpoint. In this particular example, the test endpoint gives back an arbitrary response which we can&#39;t actually mutate.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> urls.json <span class="token operator">|</span> get urls <span class="token operator">|</span> first <span class="token operator">|</span> http get <span class="token variable">$in</span> <span class="token operator">|</span> upsert <span class="token function">id</span> <span class="token punctuation">{</span><span class="token operator">|</span>item<span class="token operator">|</span> <span class="token variable">$item</span>.id <span class="token operator">|</span> inc<span class="token punctuation">}</span> <span class="token operator">|</span> to json <span class="token operator">|</span> post https://jsonplaceholder.typicode.com/posts <span class="token variable">$in</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>━━━━━
 id
─────
 101
━━━━━
</code></pre></div>`,33),p=[o];function u(i,r){return s(),t("div",null,p)}const l=a(n,[["render",u],["__file","http.html.vue"]]);export{l as default};
