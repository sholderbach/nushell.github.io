import{_ as a,r as l,o as d,c as r,a as e,b as i,w as s,d as n,e as o}from"./app.8034769a.js";const c={},u=e("h1",{id:"laden-von-daten",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#laden-von-daten","aria-hidden":"true"},"#"),n(" Laden von Daten")],-1),h=n("Im letzten Kapitel wurden Befehle wie "),m=e("code",null,"ls",-1),g=n(", "),p=e("code",null,"ps",-1),_=n(", "),f=e("code",null,"date",-1),b=n(", and "),x=e("code",null,"sys",-1),v=n(" vorgestellt um Informationen \xFCber Dateien, Prozesse, Zeiten und die Systemumgebung selber zu laden. Jeder Befehl ergibt eine Tabelle aus, mit der gearbeitet werden kann. Es gibt jedoch noch andere M\xF6glichkeiten Tabellen aus Daten zu erhalten."),w=e("h2",{id:"dateien-offnen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dateien-offnen","aria-hidden":"true"},"#"),n(" Dateien \xF6ffnen")],-1),k=n("Einer der m\xE4chtigsten Befehle in Nu um mir Daten zu arbeite ist der "),D=e("code",null,"open",-1),B=n(" Befehl. Er ist ein Multi-Werkzeug, welcher mit verschiedensten Datenformaten umgehen kann. Hier zum Beispiel was passiert, wenn eine json Datei ge\xF6ffnet wird:"),z=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open editors/vscode/package.json
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 name             \u2502 lark
 description      \u2502 Lark support for VS Code
 author           \u2502 Lark developers
 license          \u2502 MIT
 version          \u2502 1.0.0
 repository       \u2502 [row type url]
 publisher        \u2502 vscode
 categories       \u2502 [table 0 rows]
 keywords         \u2502 [table 1 rows]
 engines          \u2502 [row vscode]
 activationEvents \u2502 [table 1 rows]
 main             \u2502 ./out/extension
 contributes      \u2502 [row configuration grammars languages]
 scripts          \u2502 [row compile postinstall test vscode:prepublish watch]
 devDependencies  \u2502 [row @types/mocha @types/node tslint typescript vscode vscode-languageclient]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),T=n("\xC4hnlich wie beim "),y=e("code",null,"ls",-1),j=n(' Befehl, bekommen wir mehr als nur Text (oder einen Stream von bytes) zur\xFCck, wenn wir einen Dateityp \xF6ffnen, den Nu versteht. Hier wurde ein "package.json" von einem JavaScript Projekt ge\xF6ffnet. Nu erkennt den json text und parst die Daten in eine Tabelle.'),S=n("Soll nur die Version aus dem Projekt angezeigt werden, kann mit dem "),N=e("code",null,"get",-1),C=n(" direkt diese Information herausgelesen werden."),R=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu unterst\xFCtzt aktuell die folgenden Formate um Daten direkt als Tabelle zu \xF6ffnen:</p><ul><li>csv</li><li>eml</li><li>ics</li><li>ini</li><li>json</li><li>nuon</li><li>ods</li><li>ssv</li><li>toml</li><li>tsv</li><li>url</li><li>vcf</li><li>xlsx / xls</li><li>xml</li><li>yaml / yml</li></ul><p>Was aber passiert, wenn eine Text Datei geladen wird, die keinem der angegebenen Formate entspricht?</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open README.md
</code></pre></div><p>Die Datei wird wie gewohnt als Text ausgegeben.</p><p>Im Hintergrund sieht Nu eine reine Text Datei als einen grossen String. Wie man mit einem String umgeht und die ben\xF6tigten Daten herauszieht, steht im n\xE4chsten Kapitel.</p><h2 id="mit-strings-umgehen" tabindex="-1"><a class="header-anchor" href="#mit-strings-umgehen" aria-hidden="true">#</a> Mit Strings umgehen</h2><p>Ein wichtiger Teil der Arbeit mit Nu ist es, mit externen Daten um zu gehen, die Nu nicht versteht. Oft werden diese Daten als String repr\xE4sentiert.</p><p>Zum Beispiel wie in dieser Datei:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>Jeder Datenpunkt ist durch ein pipe (&#39;|&#39;) Symbol getrennt. Und jede Person steht auf einer eigenen Zeile. Nu kennt standardm\xE4ssig kein Dateiformat, welches pipe-getrennt ist, weshalb diese Datei von Hand geparst werden muss.</p><p>Zuerst wird die Datei so geladen, dass jede Zeile f\xFCr sich verarbeitet werden kann:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia | Butler | Writer
 1 \u2502 Bob | Ross | Painter
 2 \u2502 Antonio | Vivaldi | Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,14),q=n("Dadurch wird bereits wieder eine Tabelle ausgegeben. Im n\xE4chsten Schritt sollen die Spalten in etwas brauchbares aufgeteilt werden. Daf\xFCr verwenden wir den "),A=e("code",null,"split",-1),V=n(" Befehl. Wie der Name schon verr\xE4ht, kann damit ein String durch ein Trennzeichen aufgesplittet oder aufgetrennt werden. Mit dem "),E=e("code",null,"column",-1),P=n(" Unterbefehl wird der Inhalt \xFCber mehrere Spalten aufgeteilt. Als Parameter reicht das Trennzeichen, der Rest ist automatisch:"),W=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|"
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1  \u2502 column2   \u2502 column3
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia  \u2502  Butler   \u2502  Writer
 1 \u2502 Bob      \u2502  Ross     \u2502  Painter
 2 \u2502 Antonio  \u2502  Vivaldi  \u2502  Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),I=n("Das sieht "),L=e("em",null,"fast",-1),M=n(" korrekt aus.Es sieht so aus, als ob sich noch eine zus\xE4tzliche L\xFCcke eingeschlichen hat. Mit dem "),O=e("code",null,"trim",-1),U=n(" Befehl wird dieser beseitigt:"),Z=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|" | str trim
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1 \u2502 column2 \u2502 column3
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia \u2502 Butler  \u2502 Writer
 1 \u2502 Bob     \u2502 Ross    \u2502 Painter
 2 \u2502 Antonio \u2502 Vivaldi \u2502 Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),H=n("Nicht schlecht. Der "),J=e("code",null,"split",-1),F=n(" Befehl gibt nicht nur brauchbare Daten zur\xFCck, sondern bezeichnet auch noch standardm\xE4ssig die Spaltennamen:"),K=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get column1
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia
 1 \u2502 Bob
 2 \u2502 Antonio
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Die Spalten k\xF6nnen jedoch auch benannt werden:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 first_name \u2502 last_name \u2502 job
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Octavia    \u2502 Butler    \u2502 Writer
 1 \u2502 Bob        \u2502 Ross      \u2502 Painter
 2 \u2502 Antonio    \u2502 Vivaldi   \u2502 Composer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Jetzt da die Daten in einer Tabelle sind, k\xF6nnen alle Befehle, die wir davor schon auf Tabellen angewendet haben wiederverwenden:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim | sort-by first_name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 first_name \u2502 last_name \u2502 job
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Antonio    \u2502 Vivaldi   \u2502 Composer
 1 \u2502 Bob        \u2502 Ross      \u2502 Painter
 2 \u2502 Octavia    \u2502 Butler    \u2502 Writer
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Weitere Befehle, mit denen Texte aus Strings bearbeitet werden k\xF6nnen sind:</p>`,6),G=e("li",null,[e("code",null,"str")],-1),Y=e("code",null,"lines",-1),Q=e("code",null,"size",-1),X=o(`<p>Es gibt ausserdem einige Hilfsbefehle, die verwendet werden k\xF6nnen um mit Daten umzugehen, die Nu eigentlich verstehen sollte. Zum Beispiel wenn eine Rust lock Datei ge\xF6ffnet wird:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.lock
# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
[[package]]
name = &quot;adhoc_derive&quot;
version = &quot;0.1.2&quot;
</code></pre></div><p>Eine &quot;Cargo.lock&quot; Datei ist eigentlich eine .toml Datei, aber die Dateiendung ist nicht .toml. Das ist ok, denn mit dem <code>from</code> und seinem Unterbefehl <code>toml</code> k\xF6nnen wir dies explizit angeben:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open Cargo.lock | from toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 metadata \u2502 [row 107 columns]
 package  \u2502 [table 130 rows]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Der <code>from</code> Befehl kann f\xFCr jedes strukturierte Datenformat, welches Nu versteht, verwendet werden, indem das Format als entsprechender Unterbefehl verwendet wird.</p><h2 id="offnen-im-raw-modus" tabindex="-1"><a class="header-anchor" href="#offnen-im-raw-modus" aria-hidden="true">#</a> \xD6ffnen im raw Modus</h2>`,6),$=n("Auch wenn es hilfreich ist, beim \xD6ffnen einer Datei direkt eine Tabelle zu erhalten, ist dies nicht immer gew\xFCnscht. Um den darunter liegenden Text zu erhalten, kann dem "),ee=e("code",null,"open",-1),ne=n(" Befehl das Flag "),te=e("code",null,"--raw",-1),ie=n(" mitgegeben werden:"),se=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml --raw
[package]                                                                                        name = "nu"
version = "0.1.3"
authors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]
description = "A shell for the GitHub era"
license = "MIT"
`)])],-1),oe=e("h2",{id:"urls-abrufen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#urls-abrufen","aria-hidden":"true"},"#"),n(" URLs abrufen")],-1),ae=n("Zus\xE4tzlich zum Laden von Dateien vom Dateisystem, k\xF6nnen auch URLs mit dem "),le=e("code",null,"fetch",-1),de=n(" Befehl geladen werden. Dies wird den Inhalt der URL aus dem Netz abrufen und zur\xFCckgeben:"),re=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> fetch https://blog.rust-lang.org/feed.xml
\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 feed \u2502 {record 2 fields}
\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1);function ce(ue,he){const t=l("RouterLink");return d(),r("div",null,[u,e("p",null,[h,i(t,{to:"/book/commands/ls.html"},{default:s(()=>[m]),_:1}),g,i(t,{to:"/book/commands/ps.html"},{default:s(()=>[p]),_:1}),_,i(t,{to:"/book/commands/date.html"},{default:s(()=>[f]),_:1}),b,i(t,{to:"/book/commands/sys.html"},{default:s(()=>[x]),_:1}),v]),w,e("p",null,[k,i(t,{to:"/book/commands/open.html"},{default:s(()=>[D]),_:1}),B]),z,e("p",null,[T,i(t,{to:"/book/commands/ls.html"},{default:s(()=>[y]),_:1}),j]),e("p",null,[S,i(t,{to:"/book/commands/get.html"},{default:s(()=>[N]),_:1}),C]),R,e("p",null,[q,i(t,{to:"/book/commands/split.html"},{default:s(()=>[A]),_:1}),V,E,P]),W,e("p",null,[I,L,M,i(t,{to:"/book/commands/str_trim.html"},{default:s(()=>[O]),_:1}),U]),Z,e("p",null,[H,i(t,{to:"/book/commands/split.html"},{default:s(()=>[J]),_:1}),F]),K,e("ul",null,[G,e("li",null,[i(t,{to:"/book/commands/lines.html"},{default:s(()=>[Y]),_:1})]),e("li",null,[i(t,{to:"/book/commands/size.html"},{default:s(()=>[Q]),_:1})])]),X,e("p",null,[$,i(t,{to:"/book/commands/open.html"},{default:s(()=>[ee]),_:1}),ne,te,ie]),se,oe,e("p",null,[ae,i(t,{to:"/book/commands/fetch.html"},{default:s(()=>[le]),_:1}),de]),re])}const ge=a(c,[["render",ce],["__file","loading_data.html.vue"]]);export{ge as default};
