import{_ as o,z as l,A as r,X as e,C as n,T as a,$ as i,a6 as s,Q as d}from"./framework.3d018c9f.js";const c={},u=e("h1",{id:"laden-von-daten",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#laden-von-daten","aria-hidden":"true"},"#"),n(" Laden von Daten")],-1),m=e("code",null,"ls",-1),h=e("code",null,"ps",-1),g=e("code",null,"date",-1),p=e("code",null,"sys",-1),f=e("h2",{id:"dateien-offnen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dateien-offnen","aria-hidden":"true"},"#"),n(" Dateien öffnen")],-1),_=e("code",null,"open",-1),b=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open editors/vscode/package.json
──────────────────┬───────────────────────────────────────────────────────────────────────────────
 name             │ lark
 description      │ Lark support for VS Code
 author           │ Lark developers
 license          │ MIT
 version          │ 1.0.0
 repository       │ [row type url]
 publisher        │ vscode
 categories       │ [table 0 rows]
 keywords         │ [table 1 rows]
 engines          │ [row vscode]
 activationEvents │ [table 1 rows]
 main             │ ./out/extension
 contributes      │ [row configuration grammars languages]
 scripts          │ [row compile postinstall test vscode:prepublish watch]
 devDependencies  │ [row @types/mocha @types/node tslint typescript vscode vscode-languageclient]
──────────────────┴───────────────────────────────────────────────────────────────────────────────
`)])],-1),x=e("code",null,"ls",-1),v=e("code",null,"get",-1),w=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open editors/vscode/package.json | get version
1.0.0
</code></pre></div><p>Nu unterstützt aktuell die folgenden Formate um Daten direkt als Tabelle zu öffnen:</p><ul><li>csv</li><li>eml</li><li>ics</li><li>ini</li><li>json</li><li>nuon</li><li>ods</li><li>ssv</li><li>toml</li><li>tsv</li><li>url</li><li>vcf</li><li>xlsx / xls</li><li>xml</li><li>yaml / yml</li></ul><p>Was aber passiert, wenn eine Text Datei geladen wird, die keinem der angegebenen Formate entspricht?</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open README.md
</code></pre></div><p>Die Datei wird wie gewohnt als Text ausgegeben.</p><p>Im Hintergrund sieht Nu eine reine Text Datei als einen grossen String. Wie man mit einem String umgeht und die benötigten Daten herauszieht, steht im nächsten Kapitel.</p><h2 id="mit-strings-umgehen" tabindex="-1"><a class="header-anchor" href="#mit-strings-umgehen" aria-hidden="true">#</a> Mit Strings umgehen</h2><p>Ein wichtiger Teil der Arbeit mit Nu ist es, mit externen Daten um zu gehen, die Nu nicht versteht. Oft werden diese Daten als String repräsentiert.</p><p>Zum Beispiel wie in dieser Datei:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt
Octavia | Butler | Writer
Bob | Ross | Painter
Antonio | Vivaldi | Composer
</code></pre></div><p>Jeder Datenpunkt ist durch ein pipe (&#39;|&#39;) Symbol getrennt. Und jede Person steht auf einer eigenen Zeile. Nu kennt standardmässig kein Dateiformat, welches pipe-getrennt ist, weshalb diese Datei von Hand geparst werden muss.</p><p>Zuerst wird die Datei so geladen, dass jede Zeile für sich verarbeitet werden kann:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines
───┬──────────────────────────────
 0 │ Octavia | Butler | Writer
 1 │ Bob | Ross | Painter
 2 │ Antonio | Vivaldi | Composer
───┴──────────────────────────────
</code></pre></div>`,14),k=e("code",null,"split",-1),D=e("code",null,"column",-1),z=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|"
───┬──────────┬───────────┬───────────
 # │ column1  │ column2   │ column3
───┼──────────┼───────────┼───────────
 0 │ Octavia  │  Butler   │  Writer
 1 │ Bob      │  Ross     │  Painter
 2 │ Antonio  │  Vivaldi  │  Composer
───┴──────────┴───────────┴───────────
`)])],-1),B=e("em",null,"fast",-1),T=e("code",null,"trim",-1),y=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open people.txt | lines | split column "|" | str trim
───┬─────────┬─────────┬──────────
 # │ column1 │ column2 │ column3
───┼─────────┼─────────┼──────────
 0 │ Octavia │ Butler  │ Writer
 1 │ Bob     │ Ross    │ Painter
 2 │ Antonio │ Vivaldi │ Composer
───┴─────────┴─────────┴──────────
`)])],-1),j=e("code",null,"split",-1),S=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; | str trim | get column1
───┬─────────
 0 │ Octavia
 1 │ Bob
 2 │ Antonio
───┴─────────
</code></pre></div><p>Die Spalten können jedoch auch benannt werden:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Octavia    │ Butler    │ Writer
 1 │ Bob        │ Ross      │ Painter
 2 │ Antonio    │ Vivaldi   │ Composer
───┴────────────┴───────────┴──────────
</code></pre></div><p>Jetzt da die Daten in einer Tabelle sind, können alle Befehle, die wir davor schon auf Tabellen angewendet haben wiederverwenden:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open people.txt | lines | split column &quot;|&quot; first_name last_name job | str trim | sort-by first_name
───┬────────────┬───────────┬──────────
 # │ first_name │ last_name │ job
───┼────────────┼───────────┼──────────
 0 │ Antonio    │ Vivaldi   │ Composer
 1 │ Bob        │ Ross      │ Painter
 2 │ Octavia    │ Butler    │ Writer
───┴────────────┴───────────┴──────────
</code></pre></div><p>Weitere Befehle, mit denen Texte aus Strings bearbeitet werden können sind:</p>`,6),N=e("li",null,[e("code",null,"str")],-1),C=e("code",null,"lines",-1),R=e("code",null,"size",-1),A=s(`<p>Es gibt ausserdem einige Hilfsbefehle, die verwendet werden können um mit Daten umzugehen, die Nu eigentlich verstehen sollte. Zum Beispiel wenn eine Rust lock Datei geöffnet wird:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.lock
# This file is automatically @generated by Cargo.
# It is not intended for manual editing.
[[package]]
name = &quot;adhoc_derive&quot;
version = &quot;0.1.2&quot;
</code></pre></div><p>Eine &quot;Cargo.lock&quot; Datei ist eigentlich eine .toml Datei, aber die Dateiendung ist nicht .toml. Das ist ok, denn mit dem <code>from</code> und seinem Unterbefehl <code>toml</code> können wir dies explizit angeben:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open Cargo.lock | from toml
──────────┬───────────────────
 metadata │ [row 107 columns]
 package  │ [table 130 rows]
──────────┴───────────────────
</code></pre></div><p>Der <code>from</code> Befehl kann für jedes strukturierte Datenformat, welches Nu versteht, verwendet werden, indem das Format als entsprechender Unterbefehl verwendet wird.</p><h2 id="offnen-im-raw-modus" tabindex="-1"><a class="header-anchor" href="#offnen-im-raw-modus" aria-hidden="true">#</a> Öffnen im raw Modus</h2>`,6),q=e("code",null,"open",-1),V=e("code",null,"--raw",-1),E=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open Cargo.toml --raw
[package]                                                                                        name = "nu"
version = "0.1.3"
authors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]
description = "A shell for the GitHub era"
license = "MIT"
`)])],-1),P=e("h2",{id:"urls-abrufen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#urls-abrufen","aria-hidden":"true"},"#"),n(" URLs abrufen")],-1),W=e("code",null,"fetch",-1),I=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> fetch https://blog.rust-lang.org/feed.xml
──────┬───────────────────
 feed │ {record 2 fields}
──────┴───────────────────
`)])],-1);function L(M,O){const t=d("RouterLink");return l(),r("div",null,[u,e("p",null,[n("Im letzten Kapitel wurden Befehle wie "),a(t,{to:"/book/commands/ls.html"},{default:i(()=>[m]),_:1}),n(", "),a(t,{to:"/book/commands/ps.html"},{default:i(()=>[h]),_:1}),n(", "),a(t,{to:"/book/commands/date.html"},{default:i(()=>[g]),_:1}),n(", and "),a(t,{to:"/book/commands/sys.html"},{default:i(()=>[p]),_:1}),n(" vorgestellt um Informationen über Dateien, Prozesse, Zeiten und die Systemumgebung selber zu laden. Jeder Befehl ergibt eine Tabelle aus, mit der gearbeitet werden kann. Es gibt jedoch noch andere Möglichkeiten Tabellen aus Daten zu erhalten.")]),f,e("p",null,[n("Einer der mächtigsten Befehle in Nu um mir Daten zu arbeite ist der "),a(t,{to:"/book/commands/open.html"},{default:i(()=>[_]),_:1}),n(" Befehl. Er ist ein Multi-Werkzeug, welcher mit verschiedensten Datenformaten umgehen kann. Hier zum Beispiel was passiert, wenn eine json Datei geöffnet wird:")]),b,e("p",null,[n("Ähnlich wie beim "),a(t,{to:"/book/commands/ls.html"},{default:i(()=>[x]),_:1}),n(' Befehl, bekommen wir mehr als nur Text (oder einen Stream von bytes) zurück, wenn wir einen Dateityp öffnen, den Nu versteht. Hier wurde ein "package.json" von einem JavaScript Projekt geöffnet. Nu erkennt den json text und parst die Daten in eine Tabelle.')]),e("p",null,[n("Soll nur die Version aus dem Projekt angezeigt werden, kann mit dem "),a(t,{to:"/book/commands/get.html"},{default:i(()=>[v]),_:1}),n(" direkt diese Information herausgelesen werden.")]),w,e("p",null,[n("Dadurch wird bereits wieder eine Tabelle ausgegeben. Im nächsten Schritt sollen die Spalten in etwas brauchbares aufgeteilt werden. Dafür verwenden wir den "),a(t,{to:"/book/commands/split.html"},{default:i(()=>[k]),_:1}),n(" Befehl. Wie der Name schon verräht, kann damit ein String durch ein Trennzeichen aufgesplittet oder aufgetrennt werden. Mit dem "),D,n(" Unterbefehl wird der Inhalt über mehrere Spalten aufgeteilt. Als Parameter reicht das Trennzeichen, der Rest ist automatisch:")]),z,e("p",null,[n("Das sieht "),B,n(" korrekt aus.Es sieht so aus, als ob sich noch eine zusätzliche Lücke eingeschlichen hat. Mit dem "),a(t,{to:"/book/commands/str_trim.html"},{default:i(()=>[T]),_:1}),n(" Befehl wird dieser beseitigt:")]),y,e("p",null,[n("Nicht schlecht. Der "),a(t,{to:"/book/commands/split.html"},{default:i(()=>[j]),_:1}),n(" Befehl gibt nicht nur brauchbare Daten zurück, sondern bezeichnet auch noch standardmässig die Spaltennamen:")]),S,e("ul",null,[N,e("li",null,[a(t,{to:"/book/commands/lines.html"},{default:i(()=>[C]),_:1})]),e("li",null,[a(t,{to:"/book/commands/size.html"},{default:i(()=>[R]),_:1})])]),A,e("p",null,[n("Auch wenn es hilfreich ist, beim Öffnen einer Datei direkt eine Tabelle zu erhalten, ist dies nicht immer gewünscht. Um den darunter liegenden Text zu erhalten, kann dem "),a(t,{to:"/book/commands/open.html"},{default:i(()=>[q]),_:1}),n(" Befehl das Flag "),V,n(" mitgegeben werden:")]),E,P,e("p",null,[n("Zusätzlich zum Laden von Dateien vom Dateisystem, können auch URLs mit dem "),a(t,{to:"/book/commands/fetch.html"},{default:i(()=>[W]),_:1}),n(" Befehl geladen werden. Dies wird den Inhalt der URL aus dem Netz abrufen und zurückgeben:")]),I])}const Z=o(c,[["render",L],["__file","loading_data.html.vue"]]);export{Z as default};
