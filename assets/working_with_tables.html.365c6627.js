import{_ as d,r as l,o as r,c as o,a as e,b as s,w as a,e as i,d as n}from"./app.8034769a.js";const c={},h=i(`<h1 id="mit-tabellen-arbeiten" tabindex="-1"><a class="header-anchor" href="#mit-tabellen-arbeiten" aria-hidden="true">#</a> Mit Tabellen arbeiten</h1><p>Eine der h\xE4ufigsten Arten mit Daten zu arbeiten geschieht in Nu durch Tabelle. Nu stellt diverse Befehle zur Verf\xFCgung, um mit Tabelle auf einfache Art die Daten zu finden und zu filtern, die ben\xF6tigt werden.</p><p>Um zu starten, wird eine Tabelle ben\xF6tigt wie diese:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 1 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 2 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 3 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
 4 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 5 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 6 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="daten-sortieren" tabindex="-1"><a class="header-anchor" href="#daten-sortieren" aria-hidden="true">#</a> Daten sortieren</h2>`,5),u=n("Um eine Tabelle zu sortieren, wird der "),g=e("code",null,"sort-by",-1),m=n(" Befehl verwendet, dem mitgeteilt wird, nach welcher Spalte sortiert werden soll. Hier wird sortiert nach der Gr\xF6sse der Dateien:"),_=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | sort-by size
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 1 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
 2 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 3 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 4 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 5 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 6 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),p=e("p",null,'Es kann nach allen Spalten sortiert werden, die einen Vergleich erlauben. Das Beispiel oben h\xE4tte auch nach "name", "accessed" oder "modified" sortiert werden k\xF6nnen.',-1),b=e("h2",{id:"die-benotigten-daten-auswahlen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#die-benotigten-daten-auswahlen","aria-hidden":"true"},"#"),n(" Die ben\xF6tigten Daten ausw\xE4hlen")],-1),f=n("Von einer Tabelle k\xF6nnen einzelne Spalten und Zeilen ausgew\xE4hlt werden. Mit dem "),x=e("code",null,"select",-1),w=n(" Befehl werden hier einige Spalten gew\xE4hlt."),B=i(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name size
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 size
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502  4.6 KB
 1 \u2502 lib.rs        \u2502   330 B
 2 \u2502 lite_parse.rs \u2502  6.3 KB
 3 \u2502 parse.rs      \u2502 49.8 KB
 4 \u2502 path.rs       \u2502  2.1 KB
 5 \u2502 shapes.rs     \u2502  4.7 KB
 6 \u2502 signature.rs  \u2502  1.2 KB
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Damit wird eine Tabelle kreiert, die sich auf das Wesentliche beschr\xE4nkt. Als n\xE4chstes sollen nur die 5 kleinsten Dateien aus diesem Verzeichnis enthalten sein:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name         \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 lib.rs       \u2502 File \u2502  330 B \u2502 5 days ago
 1 \u2502 signature.rs \u2502 File \u2502 1.2 KB \u2502 5 days ago
 2 \u2502 path.rs      \u2502 File \u2502 2.1 KB \u2502 5 days ago
 3 \u2502 files.rs     \u2502 File \u2502 4.6 KB \u2502 5 days ago
 4 \u2502 shapes.rs    \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Zuerst wird die Tabelle nach gr\xF6sse sortiert, um die kleinsten Dateien zuoberst zu erhalten, danach werden mit <code>first 5</code> die ersten 5 Zeilen ausgegeben.</p><p>Mit <code>skip</code> k\xF6nnen ebenfalls Zeilen entfernt werden, die unerw\xFCnscht sind. Hier die ersten 2 der 5 aus dem obigen Beispiel:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5 | skip 2
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name      \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 path.rs   \u2502 File \u2502 2.1 KB \u2502 5 days ago
 1 \u2502 files.rs  \u2502 File \u2502 4.6 KB \u2502 5 days ago
 2 \u2502 shapes.rs \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>So konnten die 3 Zeilen extrahiert werden, die uns interessieren.</p><p>In allen Tabellen sind die Zeilen nummeriert. Dies erm\xF6glicht eine einfache Art, die einzelnen Zeilen verwenden zu k\xF6nnen. Im folgenden wird zuerst nach dem Namen sortiert, und dann die 5. Zeile mit dem <code>select</code> Befehl \xFCber die Zeilennummer ausgew\xE4hlt:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs      \u2502 File \u2502  4.6 KB \u2502 5 days ago
 1 \u2502 lib.rs        \u2502 File \u2502   330 B \u2502 5 days ago
 2 \u2502 lite_parse.rs \u2502 File \u2502  6.3 KB \u2502 5 days ago
 3 \u2502 parse.rs      \u2502 File \u2502 49.8 KB \u2502 1 day ago
 4 \u2502 path.rs       \u2502 File \u2502  2.1 KB \u2502 5 days ago
 5 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
 6 \u2502 signature.rs  \u2502 File \u2502  1.2 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

&gt; ls | sort-by name | select 5
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name          \u2502 type \u2502 size    \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 shapes.rs     \u2502 File \u2502  4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><h2 id="daten-aus-der-tabelle-herausziehen" tabindex="-1"><a class="header-anchor" href="#daten-aus-der-tabelle-herausziehen" aria-hidden="true">#</a> Daten aus der Tabelle herausziehen</h2>`,10),z=n("Bisher wurde die Tabelle auf die ben\xF6tigten Inhalte getrimmt. Im n\xE4chsten Schritt soll angeschaut werden, wie wir den Inhalt anstelle der Tabelle herausziehen k\xF6nnen. Zum Beispiel wenn eine Liste der Namen aller Dateien erstellt werden soll. Daf\xFCr steht der "),v=e("code",null,"get",-1),k=n(" Befehl bereit:"),y=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | get name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs
 1 \u2502 lib.rs
 2 \u2502 lite_parse.rs
 3 \u2502 parse.rs
 4 \u2502 path.rs
 5 \u2502 shapes.rs
 6 \u2502 signature.rs
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),K=e("p",null,"Damit erhalten wir die Werte aller Dateinamen als Liste.",-1),D=n("Dies sieht fast so aus, wie der "),F=e("code",null,"select",-1),S=n(" Befehl weiter oben, deshalb hier die beiden nebeneinander:"),T=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | select name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs
 1 \u2502 lib.rs
 2 \u2502 lite_parse.rs
 3 \u2502 parse.rs
 4 \u2502 path.rs
 5 \u2502 shapes.rs
 6 \u2502 signature.rs
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),$=e("p",null,"Diese sehen wirklich sehr \xE4hnlich aus! Was also ist der Unterschied:",-1),N=e("code",null,"select",-1),Z=n(" - generiert eine Tabelle, die nur die gew\xFCnschten Spalten enh\xE4lt"),W=e("code",null,"get",-1),I=n(" - gibt den Inhalt der angegebenen Spalte als Liste zur\xFCck"),V=n("Einen Weg, diese zwei auseinander zu halten ist, dass die Spaltennamen fehlen, was bedeutet, es muss sich um eine Liste handeln. Der "),A=e("code",null,"get",-1),E=n(" geht noch einen Schritt weiter und verwendet Pfade um auf tiefer liegende Strukturen zugreifen zu k\xF6nnen, wie man sie z.B. in einer .json Datei findet."),M=e("h2",{id:"daten-einer-tabelle-andern",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#daten-einer-tabelle-andern","aria-hidden":"true"},"#"),n(" Daten einer Tabelle \xE4ndern")],-1),U=e("p",null,"Zus\xE4tzlich zum Ausw\xE4hlen von Daten in einer Tabelle, kann auch deren Inhalt ge\xE4ndert werden. Tabellen k\xF6nnen kombiniert werden, neue Spalten hinzugef\xFCgt, oder Werte ver\xE4ndert werden. In Nu wird dadurch nicht die Tabelle direkt ge\xE4ndert, sondern jeder Befehl generiert eine neue Tabelle in der Pipeline.",-1),L=e("h3",{id:"tabellen-zusammenfuhren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tabellen-zusammenfuhren","aria-hidden":"true"},"#"),n(" Tabellen zusammenf\xFChren")],-1),P=n("Mit "),j=e("code",null,"append",-1),q=n(" k\xF6nnen Spalten gleichen Namens zusammengef\xFChrt werden:"),C=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> let $first = [[a b]; [1 2]]
> let $second = [[a b]; [3 4]]
> $first | append $second
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2
 1 \u2502 3 \u2502 4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
`)])],-1),H=e("h3",{id:"tabellen-mergen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tabellen-mergen","aria-hidden":"true"},"#"),n(" Tabellen mergen")],-1),R=n("Mit dem "),G=e("code",null,"merge",-1),O=n(" Befehl werden zwei oder mehr Tabellen zusammengef\xFChrt."),J=i(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; let $first = [[a b]; [1 2]]
&gt; let $second = [[c d]; [3 4]]
&gt; $first | merge { $second }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 3 \u2502 4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div><p>Wird eine dritte Tabelle generiert:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let $third = [[e f]; [5 6]]
</code></pre></div><p>K\xF6nnen nun alle drei Tabellen zusammengef\xFChrt werden wie hier:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $first | merge { $second } | merge { $third }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d \u2502 e \u2502 f
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 3 \u2502 4 \u2502 5 \u2502 6
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div>`,5),Q=n("Oder mit dem "),X=e("code",null,"reduce",-1),Y=n(" Befehl alle dynamisch gemerged:"),ee=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> [$first $second $third] | reduce {|it, acc| $acc|merge { $it }}
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d \u2502 e \u2502 f
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 3 \u2502 4 \u2502 5 \u2502 6
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
`)])],-1),ne=e("h3",{id:"eine-spalte-hinzufugen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eine-spalte-hinzufugen","aria-hidden":"true"},"#"),n(" Eine Spalte hinzuf\xFCgen")],-1),te=n("Mit dem "),se=e("code",null,"insert",-1),ae=n(" Befehl wird eine neue Spalte hinzugef\xFCgt. Wie zum Beispiel:"),ie=i(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>wird eine Spalte namens &quot;next_edition&quot; mit dem Wert 2021 hinzugef\xFCgt:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>\xD6ffnen wir die originale Datei erneut, bleibt der Inhalt der alte:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,5),de=n("\xC4nderungen in Nu sind funktionale \xC4nderungen, was bedeutet, dass Werte ge\xE4ndert werden, ohne permanente \xC4nderungen zu bewirken. Es ist deshalb m\xF6glich, mehrere \xC4nderungen in der Pipeline vorzunehmen, bevor diese bereit sind um gesichert zu werden. Zum Sichern k\xF6nnen wir, wie in diesem Beispiel, den "),le=e("code",null,"save",-1),re=n(" Befehl verwenden:"),oe=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml
> open rustfmt2.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),ce=e("h3",{id:"eine-spalte-updaten",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eine-spalte-updaten","aria-hidden":"true"},"#"),n(" Eine Spalte updaten")],-1),he=n("\xC4hnlich dem "),ue=e("code",null,"insert",-1),ge=n(" Befehl, kann mit "),me=e("code",null,"update",-1),_e=n(" der Inhalt einer Spalte ge\xE4ndert werden. Auf die selbe Datei angewendet, sieht das so aus:"),pe=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),be=e("p",null,"Und nun das Update auf die n\xE4chste Edition, die unterst\xFCtzt werden soll:",-1),fe=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml | update edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),xe=n("Mit dem "),we=e("code",null,"upsert",-1),Be=n(" Befehl wird der Wert enweder eingef\xFCgt oder updatet abh\xE4ngig davon, ob er bereits existriet."),ze=e("h3",{id:"spalten-verschieben",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spalten-verschieben","aria-hidden":"true"},"#"),n(" Spalten verschieben")],-1),ve=n("Mit "),ke=e("code",null,"move",-1),ye=n(' werden Spalten in de Tabelle verschoben. Um zum Bespiel die Spalte "name" von "ls" nach der Spalte "size" erschienen zu lassen, schreibt man:'),Ke=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | move name --after size
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 #  \u2502 type \u2502  size   \u2502       name        \u2502   modified   \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  0 \u2502 dir  \u2502   256 B \u2502 Applications      \u2502 3 days ago   \u2502
\u2502  1 \u2502 dir  \u2502   256 B \u2502 Data              \u2502 2 weeks ago  \u2502
\u2502  2 \u2502 dir  \u2502   448 B \u2502 Desktop           \u2502 2 hours ago  \u2502
\u2502  3 \u2502 dir  \u2502   192 B \u2502 Disks             \u2502 a week ago   \u2502
\u2502  4 \u2502 dir  \u2502   416 B \u2502 Documents         \u2502 4 days ago   \u2502
...
`)])],-1),De=e("h3",{id:"spalten-umbenennen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spalten-umbenennen","aria-hidden":"true"},"#"),n(" Spalten umbenennen")],-1),Fe=n("Um Spalten einen neuen Name zu geben, wird der Befehl "),Se=e("code",null,"rename",-1),Te=n(" verwendet. Wie zum Beispiel hier nach der Verwendung von "),$e=e("code",null,"ls",-1),Ne=n("."),Ze=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | rename filename filetype filesize date
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 #  \u2502     filename      \u2502 filetype \u2502 filesize \u2502     date     \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  0 \u2502 Applications      \u2502 dir      \u2502    256 B \u2502 3 days ago   \u2502
\u2502  1 \u2502 Data              \u2502 dir      \u2502    256 B \u2502 2 weeks ago  \u2502
\u2502  2 \u2502 Desktop           \u2502 dir      \u2502    448 B \u2502 2 hours ago  \u2502
\u2502  3 \u2502 Disks             \u2502 dir      \u2502    192 B \u2502 a week ago   \u2502
\u2502  4 \u2502 Documents         \u2502 dir      \u2502    416 B \u2502 4 days ago   \u2502
...
`)])],-1);function We(Ie,Ve){const t=l("RouterLink");return r(),o("div",null,[h,e("p",null,[u,s(t,{to:"/book/commands/sort-by.html"},{default:a(()=>[g]),_:1}),m]),_,p,b,e("p",null,[f,s(t,{to:"/book/commands/select.html"},{default:a(()=>[x]),_:1}),w]),B,e("p",null,[z,s(t,{to:"/book/commands/get.html"},{default:a(()=>[v]),_:1}),k]),y,K,e("p",null,[D,s(t,{to:"/book/commands/select.html"},{default:a(()=>[F]),_:1}),S]),T,$,e("ul",null,[e("li",null,[s(t,{to:"/book/commands/select.html"},{default:a(()=>[N]),_:1}),Z]),e("li",null,[s(t,{to:"/book/commands/get.html"},{default:a(()=>[W]),_:1}),I])]),e("p",null,[V,s(t,{to:"/book/commands/get.html"},{default:a(()=>[A]),_:1}),E]),M,U,L,e("p",null,[P,s(t,{to:"/book/commands/append.html"},{default:a(()=>[j]),_:1}),q]),C,H,e("p",null,[R,s(t,{to:"/book/commands/merge.html"},{default:a(()=>[G]),_:1}),O]),J,e("p",null,[Q,s(t,{to:"/book/commands/reduce.html"},{default:a(()=>[X]),_:1}),Y]),ee,ne,e("p",null,[te,s(t,{to:"/book/commands/insert.html"},{default:a(()=>[se]),_:1}),ae]),ie,e("p",null,[de,s(t,{to:"/book/commands/save.html"},{default:a(()=>[le]),_:1}),re]),oe,ce,e("p",null,[he,s(t,{to:"/book/commands/insert.html"},{default:a(()=>[ue]),_:1}),ge,s(t,{to:"/book/commands/update.html"},{default:a(()=>[me]),_:1}),_e]),pe,be,fe,e("p",null,[xe,s(t,{to:"/book/commands/upsert.html"},{default:a(()=>[we]),_:1}),Be]),ze,e("p",null,[ve,s(t,{to:"/book/commands/move.html"},{default:a(()=>[ke]),_:1}),ye]),Ke,De,e("p",null,[Fe,s(t,{to:"/book/commands/rename.html"},{default:a(()=>[Se]),_:1}),Te,$e,Ne]),Ze])}const Ee=d(c,[["render",We],["__file","working_with_tables.html.vue"]]);export{Ee as default};
