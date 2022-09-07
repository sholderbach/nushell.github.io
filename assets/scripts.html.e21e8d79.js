import{_ as o,r as i,o as l,c,a as e,b as t,w as a,d as n,e as r}from"./app.8034769a.js";const u={},h=e("h1",{id:"skripte",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#skripte","aria-hidden":"true"},"#"),n(" Skripte")],-1),p=e("p",null,[n("In Nushell k\xF6nnen Skripte geschrieben und ausgef\xFChrt werden, welche in der Nushell Sprache geschrieben sind. Um ein Skript auszuf\xFChren, wird es dem Befehl "),e("code",null,"nu"),n(" als Argument \xFCbergeben:")],-1),g=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> nu myscript.nu
`)])],-1),_=n("Dies wird das Skript bis zum Ende in einer neuen Nuinstanz ausf\xFChren. Das Skript kann auch in der "),m=e("em",null,"aktuellen",-1),f=n(" Instanz ausgef\xFChrt werden mit dem "),k=e("code",null,"source",-1),x=n(" Befehl:"),w=r(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; source myscript.nu
</code></pre></div><p>Hier ein Beispiel einer Skript Datei:</p><div class="language-text ext-text"><pre class="language-text"><code># myscript.nu
def greet [name] {
  echo &quot;hello&quot; $name
}

greet &quot;world&quot;
</code></pre></div><p>Eine Skriptdatei definiert eigene Befehle genauso wie die Main Routine, welche ausgef\xFChrt wird nachdem die eigenen Befehle definiert wurden. Im obigen Beispiel wird <code>greet</code> zuerst definiert vom Nushell Interpreter. Dies erlaubt den sp\xE4teren Aufruf der Definition. Das Skript h\xE4tte auch geschrieben werden k\xF6nnen als:</p><div class="language-text ext-text"><pre class="language-text"><code>greet &quot;world&quot;

def greet [name] {
  echo &quot;hello&quot; $name
}
</code></pre></div><p>Es gibt keine Bedingung, dass Definitionen vor deren Aufruf definiert werden m\xFCssen. Dies erlaubt es, sie dort zu platzieren, wo sie am sinnvollsten hingeh\xF6ren.</p><h2 id="wie-skripte-ausgewertet-werden" tabindex="-1"><a class="header-anchor" href="#wie-skripte-ausgewertet-werden" aria-hidden="true">#</a> Wie Skripte ausgewertet werden</h2><p>In einem Skript werden Definitionen zuerst ausgef\xFChrt. Dadurch k\xF6nnen Definitionen im Skript aufgerufen werden.</p><p>Nachdem die Definitionen ausgef\xFChrt wurden, werden von oben nach unten alle Befehlsgruppen nacheinander ausgef\xFChrt.</p><h2 id="script-lines" tabindex="-1"><a class="header-anchor" href="#script-lines" aria-hidden="true">#</a> Script lines</h2><p>Um besser zu verstehen wie Nushell die Linien im Code versteht, hier ein Beispiel:</p><div class="language-text ext-text"><pre class="language-text"><code>a
b; c | d
</code></pre></div>`,12),b=n("Wird das Skript ausgef\xFChrt, f\xFChrt Nushell zuerst den "),v=e("code",null,"a",-1),S=n(" Befehl zuende und zeigt die Resultate. Als n\xE4chstes f\xFChrt Nushell der Reihe nach "),z=e("code",null,"b; c | d",-1),B=n(" aus analog den Regeln aus "),D=n('"Groups" section'),N=n("."),q=r(`<h2 id="skripte-parametrisieren" tabindex="-1"><a class="header-anchor" href="#skripte-parametrisieren" aria-hidden="true">#</a> Skripte parametrisieren</h2><p>Skripte k\xF6nnen optional einen speziellen &quot;main&quot; Befehl enthalten. <code>Main</code> wird ausgef\xFChrt nachdem der restliche Nu Code ausgef\xFChrt wurde und wird vor allem benutzt um Argumente an das Skript zu \xFCbergeben. Argumente werden an ein Skript \xFCbergeben indem sie nach dem Skriptnamen angef\xFCgt werden (<code>nu &lt;script name&gt; &lt;script args&gt;</code>).</p><p>Zum Beispiel:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># myscript.nu</span>

def main <span class="token punctuation">[</span>x: int<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token variable">$x</span> + <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; nu myscript.nu 100
110
</code></pre></div><h2 id="shebangs" tabindex="-1"><a class="header-anchor" href="#shebangs" aria-hidden="true">#</a> Shebangs (<code>#!</code>)</h2>`,6),y=n("Auf Linux und macOS kann optional ein "),A={href:"https://en.wikipedia.org/wiki/Shebang_(Unix)",target:"_blank",rel:"noopener noreferrer"},I=n("shebang"),E=n(" eingesetzt werden, um dem OS mitzuteilen, wie die Datei interpretiert werden will. Hier zum Beispiel in einer Datei mit dem Damen "),L=e("code",null,"myscript",-1),R=n(":"),C=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`#!/usr/bin/env nu
echo "Hello World!"
`)])],-1),H=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ./myscript
Hello World!
`)])],-1);function V(W,U){const s=i("RouterLink"),d=i("ExternalLinkIcon");return l(),c("div",null,[h,p,g,e("p",null,[_,m,f,t(s,{to:"/book/commands/source.html"},{default:a(()=>[k]),_:1}),x]),w,e("p",null,[b,v,S,z,B,t(s,{to:"/de/book/types_of_data.html#groups"},{default:a(()=>[D]),_:1}),N]),q,e("p",null,[y,e("a",A,[I,t(d)]),E,L,R]),C,H])}const M=o(u,[["render",V],["__file","scripts.html.vue"]]);export{M as default};
