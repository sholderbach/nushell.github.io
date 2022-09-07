import{_ as o,r as t,o as r,c as l,a as s,b as a,d as n,e as p}from"./app.8034769a.js";const h="/assets/happy_nu_year_2020.3375ffe1.png",c={},i=s("h1",{id:"happy-nu-year-2020",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#happy-nu-year-2020","aria-hidden":"true"},"#"),n(" Happy Nu Year 2020")],-1),u=s("p",null,[s("img",{src:h,alt:"Happy Nu Year!"})],-1),d=s("p",null,"2019 was quite the year for Nushell. We landed the initial commit on May 10th, and 1881 commits later we find ourselves at the end of 2019. What all happened this year?",-1),b=n("We started off with quite the bang! After quietly working on Nu for a few months, we wrote up a "),m={href:"https://www.nushell.sh/blog/2019-08-23-introducing-nushell.html",target:"_blank",rel:"noopener noreferrer"},k=n("blog post"),_=n(" to explain what Nu was. To our surprise, the post got a surprisingly warm reception! Soon, we were recording a podcast with the Changelog to "),g={href:"https://changelog.com/podcast/363",target:"_blank",rel:"noopener noreferrer"},f=n("talk about Nu"),w=n("."),y=s("p",null,"As the excitement calmed back to everyday levels, we got to the work of turning this minimum-viable product into the real thing. More than 65 people joined us to help fix bugs, test code, write docs, and explore new directions.",-1),v=s("h2",{id:"where-are-we",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#where-are-we","aria-hidden":"true"},"#"),n(" Where are we?")],-1),x=s("p",null,"At the end of 2019, where are we?",-1),N=n("We now have a "),z={href:"https://nushell.sh",target:"_blank",rel:"noopener noreferrer"},j=n("website"),W=n(", a "),A={href:"https://www.nushell.sh/blog",target:"_blank",rel:"noopener noreferrer"},q=n("blog"),B=n(", "),S={href:"https://www.nushell.sh/book/",target:"_blank",rel:"noopener noreferrer"},T=n("three"),C=n(),I={href:"https://www.nushell.sh/contributor-book/",target:"_blank",rel:"noopener noreferrer"},G=n("different"),P=n(),R={href:"https://www.nushell.sh/cookbook/",target:"_blank",rel:"noopener noreferrer"},V=n("books"),D=n(", and the results of our "),E={href:"https://www.nushell.sh/blog/2019-11-23-nushell-survey-results.html",target:"_blank",rel:"noopener noreferrer"},H=n("first survey"),L=n("We released 6 different releases: "),Y={href:"https://www.nushell.sh/blog/2019-08-23-introducing-nushell.html",target:"_blank",rel:"noopener noreferrer"},J=n("0.2"),M=n(", "),O={href:"https://www.nushell.sh/blog/2019-09-24-nushell_0_3_0.html",target:"_blank",rel:"noopener noreferrer"},F=n("0.3"),K=n(", "),Q={href:"https://www.nushell.sh/blog/2019-10-15-nushell-0_4_0.html",target:"_blank",rel:"noopener noreferrer"},U=n("0.4"),X=n(", "),Z={href:"https://www.nushell.sh/blog/2019-11-05-nushell-0_5_0.html",target:"_blank",rel:"noopener noreferrer"},$=n("0.5"),nn=n(", "),sn={href:"https://www.nushell.sh/blog/2019-11-26-nushell-0_6_0.html",target:"_blank",rel:"noopener noreferrer"},en=n("0.6"),an=n(", and "),on={href:"https://www.nushell.sh/blog/2019-12-18-nushell-0_7_0.html",target:"_blank",rel:"noopener noreferrer"},tn=n("0.7"),rn=n("."),ln=n("Nu gained features. Lots of them. New table designs, new file formats, lots of new commands, improvements to error reporting, plugins (in "),pn={href:"https://github.com/lefticus/nu_plugin_calc",target:"_blank",rel:"noopener noreferrer"},hn=n("C++"),cn=n(", "),un={href:"https://vsoch.github.io/2019/nushell-plugin-golang/",target:"_blank",rel:"noopener noreferrer"},dn=n("Go"),bn=n(", "),mn={href:"https://github.com/vsoch/nushell-plugin-python",target:"_blank",rel:"noopener noreferrer"},kn=n("Python"),_n=n(", and "),gn={href:"https://github.com/andrasio/nu-plugin/tree/master/examples",target:"_blank",rel:"noopener noreferrer"},fn=n("Ruby"),wn=n("), new colors, support for streaming tables, vi mode, moved to the stable Rust compiler, login shell support, recycle bin support, starship.rs support, fuzzy matching, duration and date comparison, ranges, improved autocomplete, and a bunch of internal improvements to make way for 2020."),yn=s("li",null,"Thanks to all the reports, PRs, and help debugging we've made a ton of progress in making Nu more stable and complete",-1),vn=s("h2",{id:"what-s-ahead",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#what-s-ahead","aria-hidden":"true"},"#"),n(" What's ahead?")],-1),xn=n(`That said, it's "`),Nn={href:"https://twitter.com/yoshuawuyts/status/1210367651354161152?s=20",target:"_blank",rel:"noopener noreferrer"},zn=n("def early days"),jn=n(`" for Nu, as one recent user put it. We couldn't agree more. It's not `),Wn=s("em",null,"quite",-1),An=n(" ready for people to use as their everyday shell. Things we're working on in 2020 to make it possible for everyone to use Nu in their day-to-day work:"),qn=p(`<ul><li>Stability fixes! We&#39;ll be working hard to make Nu rock solid.</li><li>Aliases, variables, functions, scripts</li><li>Better integration with the native OS</li><li>Improved line editing</li><li>A better motto (lots of people confused about what &quot;Github-era&quot; means)</li></ul><p>In short, it&#39;s been a lot of fun, a lot of work, and we met some new friends along the way. A very big &quot;thanks!&quot; to all our contributors this year!</p><h2 id="nushell-repo" tabindex="-1"><a class="header-anchor" href="#nushell-repo" aria-hidden="true">#</a> Nushell repo</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/nushell/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 Aloso
  <span class="token number">1</span> \u2502 BatmanAoD
  <span class="token number">2</span> \u2502 BradyBromley
  <span class="token number">3</span> \u2502 BurNiinTRee
  <span class="token number">4</span> \u2502 Detegr
  <span class="token number">5</span> \u2502 DrSensor
  <span class="token number">6</span> \u2502 Flare576
  <span class="token number">7</span> \u2502 GuillaumeGomez
  <span class="token number">8</span> \u2502 JesterOrNot
  <span class="token number">9</span> \u2502 JonnyWalker81
 <span class="token number">10</span> \u2502 Paradiesstaub
 <span class="token number">11</span> \u2502 Porges
 <span class="token number">12</span> \u2502 Southclaws
 <span class="token number">13</span> \u2502 aidanharris
 <span class="token number">14</span> \u2502 andrasio
 <span class="token number">15</span> \u2502 bndbsh
 <span class="token number">16</span> \u2502 chhetripradeep
 <span class="token number">17</span> \u2502 coolshaurya
 <span class="token number">18</span> \u2502 cristicismas
 <span class="token number">19</span> \u2502 davidrobertmason
 <span class="token number">20</span> \u2502 devnought
 <span class="token number">21</span> \u2502 djc
 <span class="token number">22</span> \u2502 drmason13
 <span class="token number">23</span> \u2502 eoinkelly
 <span class="token number">24</span> \u2502 est31
 <span class="token number">25</span> \u2502 gilesv
 <span class="token number">26</span> \u2502 iamcodemaker
 <span class="token number">27</span> \u2502 incrop
 <span class="token number">28</span> \u2502 ineol
 <span class="token number">29</span> \u2502 jankoprowski
 <span class="token number">30</span> \u2502 jdvr
 <span class="token number">31</span> \u2502 jerodsanto
 <span class="token number">32</span> \u2502 jonathandturner
 <span class="token number">33</span> \u2502 landaire
 <span class="token number">34</span> \u2502 lesichkovm
 <span class="token number">35</span> \u2502 marcelocg
 <span class="token number">36</span> \u2502 max-sixty
 <span class="token number">37</span> \u2502 mfarberbrodsky
 <span class="token number">38</span> \u2502 miller-time
 <span class="token number">39</span> \u2502 mlbright
 <span class="token number">40</span> \u2502 nalshihabi
 <span class="token number">41</span> \u2502 naufraghi
 <span class="token number">42</span> \u2502 notryanb
 <span class="token number">43</span> \u2502 oknozor
 <span class="token number">44</span> \u2502 orf
 <span class="token number">45</span> \u2502 oskarskog
 <span class="token number">46</span> \u2502 piotrek-szczygiel
 <span class="token number">47</span> \u2502 pizzafox
 <span class="token number">48</span> \u2502 pka
 <span class="token number">49</span> \u2502 pmeredit
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">50</span> \u2502 quebin31
 <span class="token number">51</span> \u2502 ramonsnir
 <span class="token number">52</span> \u2502 rnxpyke
 <span class="token number">53</span> \u2502 rtlechow
 <span class="token number">54</span> \u2502 sdfnz
 <span class="token number">55</span> \u2502 sebastian-xyz
 <span class="token number">56</span> \u2502 svartalf
 <span class="token number">57</span> \u2502 t-hart
 <span class="token number">58</span> \u2502 taiki-e
 <span class="token number">59</span> \u2502 tchak
 <span class="token number">60</span> \u2502 thegedge
 <span class="token number">61</span> \u2502 tim77
 <span class="token number">62</span> \u2502 twe4ked
 <span class="token number">63</span> \u2502 uma0317
 <span class="token number">64</span> \u2502 vsoch
 <span class="token number">65</span> \u2502 vthriller
 <span class="token number">66</span> \u2502 wycats
 <span class="token number">67</span> \u2502 yaahc
 <span class="token number">68</span> \u2502 yahsinhuangtw
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="nushell-book-repo" tabindex="-1"><a class="header-anchor" href="#nushell-book-repo" aria-hidden="true">#</a> Nushell book repo</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/book/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 Andrew-Webb
  <span class="token number">1</span> \u2502 andrasio
  <span class="token number">2</span> \u2502 boisgera
  <span class="token number">3</span> \u2502 jankoprowski
  <span class="token number">4</span> \u2502 jonathandturner
  <span class="token number">5</span> \u2502 landaire
  <span class="token number">6</span> \u2502 lord
  <span class="token number">7</span> \u2502 marcelocg
  <span class="token number">8</span> \u2502 mistydemeo
  <span class="token number">9</span> \u2502 mlh758
 <span class="token number">10</span> \u2502 pizzafox
 <span class="token number">11</span> \u2502 pka
 <span class="token number">12</span> \u2502 romanlevin
 <span class="token number">13</span> \u2502 rtlechow
 <span class="token number">14</span> \u2502 sebastian-xyz
 <span class="token number">15</span> \u2502 ymgyt
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="contributor-book" tabindex="-1"><a class="header-anchor" href="#contributor-book" aria-hidden="true">#</a> Contributor book</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/contributor-book/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 andrasio
 <span class="token number">1</span> \u2502 daveremy
 <span class="token number">2</span> \u2502 jankoprowski
 <span class="token number">3</span> \u2502 jonathandturner
 <span class="token number">4</span> \u2502 sebastian-xyz
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="cookbook" tabindex="-1"><a class="header-anchor" href="#cookbook" aria-hidden="true">#</a> Cookbook</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/cookbook/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 jonathandturner
 <span class="token number">1</span> \u2502 notryanb
 <span class="token number">2</span> \u2502 sebastian-xyz
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="blog" tabindex="-1"><a class="header-anchor" href="#blog" aria-hidden="true">#</a> Blog</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fetch https://api.github.com/repos/nushell/blog/stats/contributors <span class="token operator">|</span> get author <span class="token operator">|</span> sort-by login <span class="token operator">|</span> get login
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 &lt;value&gt;</span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 Aloso
 <span class="token number">1</span> \u2502 jonathandturner
 <span class="token number">2</span> \u2502 sebastian-xyz
 <span class="token number">3</span> \u2502 waldyrious
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,12);function Bn(Sn,Tn){const e=t("ExternalLinkIcon");return r(),l("div",null,[i,u,d,s("p",null,[b,s("a",m,[k,a(e)]),_,s("a",g,[f,a(e)]),w]),y,v,x,s("ul",null,[s("li",null,[N,s("a",z,[j,a(e)]),W,s("a",A,[q,a(e)]),B,s("a",S,[T,a(e)]),C,s("a",I,[G,a(e)]),P,s("a",R,[V,a(e)]),D,s("a",E,[H,a(e)])]),s("li",null,[L,s("a",Y,[J,a(e)]),M,s("a",O,[F,a(e)]),K,s("a",Q,[U,a(e)]),X,s("a",Z,[$,a(e)]),nn,s("a",sn,[en,a(e)]),an,s("a",on,[tn,a(e)]),rn]),s("li",null,[ln,s("a",pn,[hn,a(e)]),cn,s("a",un,[dn,a(e)]),bn,s("a",mn,[kn,a(e)]),_n,s("a",gn,[fn,a(e)]),wn]),yn]),vn,s("p",null,[xn,s("a",Nn,[zn,a(e)]),jn,Wn,An]),qn])}const In=o(c,[["render",Bn],["__file","2019-12-31-happy-nu-year-2020.html.vue"]]);export{In as default};
