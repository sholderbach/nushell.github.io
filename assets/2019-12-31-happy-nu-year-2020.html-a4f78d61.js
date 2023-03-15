import{_ as t,M as o,p as r,q as l,Q as e,t as n,N as a,a1 as p}from"./framework-344bb0e4.js";const h="/assets/happy_nu_year_2020-3375ffe1.png",c={},u=e("h1",{id:"happy-nu-year-2020",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#happy-nu-year-2020","aria-hidden":"true"},"#"),n(" Happy Nu Year 2020")],-1),i=e("p",null,[e("img",{src:h,alt:"Happy Nu Year!"})],-1),b=e("p",null,"2019 was quite the year for Nushell. We landed the initial commit on May 10th, and 1881 commits later we find ourselves at the end of 2019. What all happened this year?",-1),m={href:"https://www.nushell.sh/blog/2019-08-23-introducing-nushell.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://changelog.com/podcast/363",target:"_blank",rel:"noopener noreferrer"},d=e("p",null,"As the excitement calmed back to everyday levels, we got to the work of turning this minimum-viable product into the real thing. More than 65 people joined us to help fix bugs, test code, write docs, and explore new directions.",-1),g=e("h2",{id:"where-are-we",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-are-we","aria-hidden":"true"},"#"),n(" Where are we?")],-1),_=e("p",null,"At the end of 2019, where are we?",-1),f={href:"https://nushell.sh",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.nushell.sh/blog",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.nushell.sh/book/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.nushell.sh/contributor-book/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.nushell.sh/cookbook/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.nushell.sh/blog/2019-11-23-nushell-survey-results.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://www.nushell.sh/blog/2019-08-23-introducing-nushell.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.nushell.sh/blog/2019-09-24-nushell_0_3_0.html",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.nushell.sh/blog/2019-10-15-nushell-0_4_0.html",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.nushell.sh/blog/2019-11-05-nushell-0_5_0.html",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.nushell.sh/blog/2019-11-26-nushell-0_6_0.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.nushell.sh/blog/2019-12-18-nushell-0_7_0.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/lefticus/nu_plugin_calc",target:"_blank",rel:"noopener noreferrer"},T={href:"https://vsoch.github.io/2019/nushell-plugin-golang/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/vsoch/nushell-plugin-python",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/andrasio/nu-plugin/tree/master/examples",target:"_blank",rel:"noopener noreferrer"},G=e("li",null,"Thanks to all the reports, PRs, and help debugging we've made a ton of progress in making Nu more stable and complete",-1),P=e("h2",{id:"what-s-ahead",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-s-ahead","aria-hidden":"true"},"#"),n(" What's ahead?")],-1),R={href:"https://twitter.com/yoshuawuyts/status/1210367651354161152?s=20",target:"_blank",rel:"noopener noreferrer"},V=e("em",null,"quite",-1),D=p(`<ul><li>Stability fixes! We&#39;ll be working hard to make Nu rock solid.</li><li>Aliases, variables, functions, scripts</li><li>Better integration with the native OS</li><li>Improved line editing</li><li>A better motto (lots of people confused about what &quot;Github-era&quot; means)</li></ul><p>In short, it&#39;s been a lot of fun, a lot of work, and we met some new friends along the way. A very big &quot;thanks!&quot; to all our contributors this year!</p><h2 id="nushell-repo" tabindex="-1"><a class="header-anchor" href="#nushell-repo" aria-hidden="true">#</a> Nushell repo</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/nushell/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
────┬───────────────────
 <span class="token comment">#  │ &lt;value&gt;</span>
────┼───────────────────
  <span class="token number">0</span> │ Aloso
  <span class="token number">1</span> │ BatmanAoD
  <span class="token number">2</span> │ BradyBromley
  <span class="token number">3</span> │ BurNiinTRee
  <span class="token number">4</span> │ Detegr
  <span class="token number">5</span> │ DrSensor
  <span class="token number">6</span> │ Flare576
  <span class="token number">7</span> │ GuillaumeGomez
  <span class="token number">8</span> │ JesterOrNot
  <span class="token number">9</span> │ JonnyWalker81
 <span class="token number">10</span> │ Paradiesstaub
 <span class="token number">11</span> │ Porges
 <span class="token number">12</span> │ Southclaws
 <span class="token number">13</span> │ aidanharris
 <span class="token number">14</span> │ andrasio
 <span class="token number">15</span> │ bndbsh
 <span class="token number">16</span> │ chhetripradeep
 <span class="token number">17</span> │ coolshaurya
 <span class="token number">18</span> │ cristicismas
 <span class="token number">19</span> │ davidrobertmason
 <span class="token number">20</span> │ devnought
 <span class="token number">21</span> │ djc
 <span class="token number">22</span> │ drmason13
 <span class="token number">23</span> │ eoinkelly
 <span class="token number">24</span> │ est31
 <span class="token number">25</span> │ gilesv
 <span class="token number">26</span> │ iamcodemaker
 <span class="token number">27</span> │ incrop
 <span class="token number">28</span> │ ineol
 <span class="token number">29</span> │ jankoprowski
 <span class="token number">30</span> │ jdvr
 <span class="token number">31</span> │ jerodsanto
 <span class="token number">32</span> │ jonathandturner
 <span class="token number">33</span> │ landaire
 <span class="token number">34</span> │ lesichkovm
 <span class="token number">35</span> │ marcelocg
 <span class="token number">36</span> │ max-sixty
 <span class="token number">37</span> │ mfarberbrodsky
 <span class="token number">38</span> │ miller-time
 <span class="token number">39</span> │ mlbright
 <span class="token number">40</span> │ nalshihabi
 <span class="token number">41</span> │ naufraghi
 <span class="token number">42</span> │ notryanb
 <span class="token number">43</span> │ oknozor
 <span class="token number">44</span> │ orf
 <span class="token number">45</span> │ oskarskog
 <span class="token number">46</span> │ piotrek-szczygiel
 <span class="token number">47</span> │ pizzafox
 <span class="token number">48</span> │ pka
 <span class="token number">49</span> │ pmeredit
────┴───────────────────
────┬───────────────
 <span class="token comment">#  │ &lt;value&gt;</span>
────┼───────────────
 <span class="token number">50</span> │ quebin31
 <span class="token number">51</span> │ ramonsnir
 <span class="token number">52</span> │ rnxpyke
 <span class="token number">53</span> │ rtlechow
 <span class="token number">54</span> │ sdfnz
 <span class="token number">55</span> │ sebastian-xyz
 <span class="token number">56</span> │ svartalf
 <span class="token number">57</span> │ t-hart
 <span class="token number">58</span> │ taiki-e
 <span class="token number">59</span> │ tchak
 <span class="token number">60</span> │ thegedge
 <span class="token number">61</span> │ tim77
 <span class="token number">62</span> │ twe4ked
 <span class="token number">63</span> │ uma0317
 <span class="token number">64</span> │ vsoch
 <span class="token number">65</span> │ vthriller
 <span class="token number">66</span> │ wycats
 <span class="token number">67</span> │ yaahc
 <span class="token number">68</span> │ yahsinhuangtw
────┴───────────────
</code></pre></div><h2 id="nushell-book-repo" tabindex="-1"><a class="header-anchor" href="#nushell-book-repo" aria-hidden="true">#</a> Nushell book repo</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/book/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
────┬─────────────────
 <span class="token comment">#  │ &lt;value&gt;</span>
────┼─────────────────
  <span class="token number">0</span> │ Andrew-Webb
  <span class="token number">1</span> │ andrasio
  <span class="token number">2</span> │ boisgera
  <span class="token number">3</span> │ jankoprowski
  <span class="token number">4</span> │ jonathandturner
  <span class="token number">5</span> │ landaire
  <span class="token number">6</span> │ lord
  <span class="token number">7</span> │ marcelocg
  <span class="token number">8</span> │ mistydemeo
  <span class="token number">9</span> │ mlh758
 <span class="token number">10</span> │ pizzafox
 <span class="token number">11</span> │ pka
 <span class="token number">12</span> │ romanlevin
 <span class="token number">13</span> │ rtlechow
 <span class="token number">14</span> │ sebastian-xyz
 <span class="token number">15</span> │ ymgyt
────┴─────────────────
</code></pre></div><h2 id="contributor-book" tabindex="-1"><a class="header-anchor" href="#contributor-book" aria-hidden="true">#</a> Contributor book</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/contributor-book/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
───┬─────────────────
 <span class="token comment"># │ &lt;value&gt;</span>
───┼─────────────────
 <span class="token number">0</span> │ andrasio
 <span class="token number">1</span> │ daveremy
 <span class="token number">2</span> │ jankoprowski
 <span class="token number">3</span> │ jonathandturner
 <span class="token number">4</span> │ sebastian-xyz
───┴─────────────────
</code></pre></div><h2 id="cookbook" tabindex="-1"><a class="header-anchor" href="#cookbook" aria-hidden="true">#</a> Cookbook</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/cookbook/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
───┬─────────────────
 <span class="token comment"># │ &lt;value&gt;</span>
───┼─────────────────
 <span class="token number">0</span> │ jonathandturner
 <span class="token number">1</span> │ notryanb
 <span class="token number">2</span> │ sebastian-xyz
───┴─────────────────
</code></pre></div><h2 id="blog" tabindex="-1"><a class="header-anchor" href="#blog" aria-hidden="true">#</a> Blog</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/blog/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
───┬─────────────────
 <span class="token comment"># │ &lt;value&gt;</span>
───┼─────────────────
 <span class="token number">0</span> │ Aloso
 <span class="token number">1</span> │ jonathandturner
 <span class="token number">2</span> │ sebastian-xyz
 <span class="token number">3</span> │ waldyrious
───┴─────────────────
</code></pre></div>`,12);function E(H,L){const s=o("ExternalLinkIcon");return r(),l("div",null,[u,i,b,e("p",null,[n("We started off with quite the bang! After quietly working on Nu for a few months, we wrote up a "),e("a",m,[n("blog post"),a(s)]),n(" to explain what Nu was. To our surprise, the post got a surprisingly warm reception! Soon, we were recording a podcast with the Changelog to "),e("a",k,[n("talk about Nu"),a(s)]),n(".")]),d,g,_,e("ul",null,[e("li",null,[n("We now have a "),e("a",f,[n("website"),a(s)]),n(", a "),e("a",w,[n("blog"),a(s)]),n(", "),e("a",y,[n("three"),a(s)]),n(),e("a",v,[n("different"),a(s)]),n(),e("a",x,[n("books"),a(s)]),n(", and the results of our "),e("a",N,[n("first survey"),a(s)])]),e("li",null,[n("We released 6 different releases: "),e("a",z,[n("0.2"),a(s)]),n(", "),e("a",j,[n("0.3"),a(s)]),n(", "),e("a",W,[n("0.4"),a(s)]),n(", "),e("a",q,[n("0.5"),a(s)]),n(", "),e("a",A,[n("0.6"),a(s)]),n(", and "),e("a",B,[n("0.7"),a(s)]),n(".")]),e("li",null,[n("Nu gained features. Lots of them. New table designs, new file formats, lots of new commands, improvements to error reporting, plugins (in "),e("a",S,[n("C++"),a(s)]),n(", "),e("a",T,[n("Go"),a(s)]),n(", "),e("a",C,[n("Python"),a(s)]),n(", and "),e("a",I,[n("Ruby"),a(s)]),n("), new colors, support for streaming tables, vi mode, moved to the stable Rust compiler, login shell support, recycle bin support, starship.rs support, fuzzy matching, duration and date comparison, ranges, improved autocomplete, and a bunch of internal improvements to make way for 2020.")]),G]),P,e("p",null,[n(`That said, it's "`),e("a",R,[n("def early days"),a(s)]),n(`" for Nu, as one recent user put it. We couldn't agree more. It's not `),V,n(" ready for people to use as their everyday shell. Things we're working on in 2020 to make it possible for everyone to use Nu in their day-to-day work:")]),D])}const Y=t(c,[["render",E],["__file","2019-12-31-happy-nu-year-2020.html.vue"]]);export{Y as default};
