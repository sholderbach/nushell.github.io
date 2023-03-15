import{_ as l,M as i,p as o,q as u,Q as e,t as n,N as t,U as s,a1 as r}from"./framework-344bb0e4.js";const c={},p=e("h1",{id:"skripte",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#skripte","aria-hidden":"true"},"#"),n(" Skripte")],-1),h=e("p",null,[n("In Nushell können Skripte geschrieben und ausgeführt werden, welche in der Nushell Sprache geschrieben sind. Um ein Skript auszuführen, wird es dem Befehl "),e("code",null,"nu"),n(" als Argument übergeben:")],-1),g=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> nu myscript.nu
`)])],-1),m=e("em",null,"aktuellen",-1),f=e("code",null,"source",-1),x=r(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; source myscript.nu
</code></pre></div><p>Hier ein Beispiel einer Skript Datei:</p><div class="language-text" data-ext="text"><pre class="language-text"><code># myscript.nu
def greet [name] {
  echo &quot;hello&quot; $name
}

greet &quot;world&quot;
</code></pre></div><p>Eine Skriptdatei definiert eigene Befehle genauso wie die Main Routine, welche ausgeführt wird nachdem die eigenen Befehle definiert wurden. Im obigen Beispiel wird <code>greet</code> zuerst definiert vom Nushell Interpreter. Dies erlaubt den späteren Aufruf der Definition. Das Skript hätte auch geschrieben werden können als:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>greet &quot;world&quot;

def greet [name] {
  echo &quot;hello&quot; $name
}
</code></pre></div><p>Es gibt keine Bedingung, dass Definitionen vor deren Aufruf definiert werden müssen. Dies erlaubt es, sie dort zu platzieren, wo sie am sinnvollsten hingehören.</p><h2 id="wie-skripte-ausgewertet-werden" tabindex="-1"><a class="header-anchor" href="#wie-skripte-ausgewertet-werden" aria-hidden="true">#</a> Wie Skripte ausgewertet werden</h2><p>In einem Skript werden Definitionen zuerst ausgeführt. Dadurch können Definitionen im Skript aufgerufen werden.</p><p>Nachdem die Definitionen ausgeführt wurden, werden von oben nach unten alle Befehlsgruppen nacheinander ausgeführt.</p><h2 id="script-lines" tabindex="-1"><a class="header-anchor" href="#script-lines" aria-hidden="true">#</a> Script lines</h2><p>Um besser zu verstehen wie Nushell die Linien im Code versteht, hier ein Beispiel:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>a
b; c | d
</code></pre></div>`,12),k=e("code",null,"a",-1),_=e("code",null,"b; c | d",-1),w=r(`<h2 id="skripte-parametrisieren" tabindex="-1"><a class="header-anchor" href="#skripte-parametrisieren" aria-hidden="true">#</a> Skripte parametrisieren</h2><p>Skripte können optional einen speziellen &quot;main&quot; Befehl enthalten. <code>Main</code> wird ausgeführt nachdem der restliche Nu Code ausgeführt wurde und wird vor allem benutzt um Argumente an das Skript zu übergeben. Argumente werden an ein Skript übergeben indem sie nach dem Skriptnamen angefügt werden (<code>nu &lt;script name&gt; &lt;script args&gt;</code>).</p><p>Zum Beispiel:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># myscript.nu</span>

def main <span class="token punctuation">[</span>x: int<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token variable">$x</span> + <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; nu myscript.nu 100
110
</code></pre></div><h2 id="shebangs" tabindex="-1"><a class="header-anchor" href="#shebangs" aria-hidden="true">#</a> Shebangs (<code>#!</code>)</h2>`,6),b={href:"https://en.wikipedia.org/wiki/Shebang_(Unix)",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"myscript",-1),S=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`#!/usr/bin/env nu
echo "Hello World!"
`)])],-1),z=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ./myscript
Hello World!
`)])],-1);function B(D,N){const a=i("RouterLink"),d=i("ExternalLinkIcon");return o(),u("div",null,[p,h,g,e("p",null,[n("Dies wird das Skript bis zum Ende in einer neuen Nuinstanz ausführen. Das Skript kann auch in der "),m,n(" Instanz ausgeführt werden mit dem "),t(a,{to:"/commands/docs/source.html"},{default:s(()=>[f]),_:1}),n(" Befehl:")]),x,e("p",null,[n("Wird das Skript ausgeführt, führt Nushell zuerst den "),k,n(" Befehl zuende und zeigt die Resultate. Als nächstes führt Nushell der Reihe nach "),_,n(" aus analog den Regeln aus "),t(a,{to:"/de/book/types_of_data.html#groups"},{default:s(()=>[n('"Groups" section')]),_:1}),n(".")]),w,e("p",null,[n("Auf Linux und macOS kann optional ein "),e("a",b,[n("shebang"),t(d)]),n(" eingesetzt werden, um dem OS mitzuteilen, wie die Datei interpretiert werden will. Hier zum Beispiel in einer Datei mit dem Damen "),v,n(":")]),S,z])}const y=l(c,[["render",B],["__file","scripts.html.vue"]]);export{y as default};
