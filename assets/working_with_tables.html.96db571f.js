import{_ as l,z as d,A as r,X as e,C as n,T as a,$ as s,a6 as i,Q as o}from"./framework.3d018c9f.js";const c={},u=i(`<h1 id="mit-tabellen-arbeiten" tabindex="-1"><a class="header-anchor" href="#mit-tabellen-arbeiten" aria-hidden="true">#</a> Mit Tabellen arbeiten</h1><p>Eine der häufigsten Arten mit Daten zu arbeiten geschieht in Nu durch Tabelle. Nu stellt diverse Befehle zur Verfügung, um mit Tabelle auf einfache Art die Daten zu finden und zu filtern, die benötigt werden.</p><p>Um zu starten, wird eine Tabelle benötigt wie diese:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ files.rs      │ File │  4.6 KB │ 5 days ago
 1 │ lib.rs        │ File │   330 B │ 5 days ago
 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago
 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago
 4 │ path.rs       │ File │  2.1 KB │ 5 days ago
 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago
───┴───────────────┴──────┴─────────┴────────────
</code></pre></div><h2 id="daten-sortieren" tabindex="-1"><a class="header-anchor" href="#daten-sortieren" aria-hidden="true">#</a> Daten sortieren</h2>`,5),h=e("code",null,"sort-by",-1),g=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | sort-by size
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ lib.rs        │ File │   330 B │ 5 days ago
 1 │ signature.rs  │ File │  1.2 KB │ 5 days ago
 2 │ path.rs       │ File │  2.1 KB │ 5 days ago
 3 │ files.rs      │ File │  4.6 KB │ 5 days ago
 4 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
 5 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago
 6 │ parse.rs      │ File │ 49.8 KB │ 1 day ago
───┴───────────────┴──────┴─────────┴────────────
`)])],-1),m=e("p",null,'Es kann nach allen Spalten sortiert werden, die einen Vergleich erlauben. Das Beispiel oben hätte auch nach "name", "accessed" oder "modified" sortiert werden können.',-1),p=e("h2",{id:"die-benotigten-daten-auswahlen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#die-benotigten-daten-auswahlen","aria-hidden":"true"},"#"),n(" Die benötigten Daten auswählen")],-1),_=e("code",null,"select",-1),b=i(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | select name size
───┬───────────────┬─────────
 # │ name          │ size
───┼───────────────┼─────────
 0 │ files.rs      │  4.6 KB
 1 │ lib.rs        │   330 B
 2 │ lite_parse.rs │  6.3 KB
 3 │ parse.rs      │ 49.8 KB
 4 │ path.rs       │  2.1 KB
 5 │ shapes.rs     │  4.7 KB
 6 │ signature.rs  │  1.2 KB
───┴───────────────┴─────────
</code></pre></div><p>Damit wird eine Tabelle kreiert, die sich auf das Wesentliche beschränkt. Als nächstes sollen nur die 5 kleinsten Dateien aus diesem Verzeichnis enthalten sein:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5
───┬──────────────┬──────┬────────┬────────────
 # │ name         │ type │ size   │ modified
───┼──────────────┼──────┼────────┼────────────
 0 │ lib.rs       │ File │  330 B │ 5 days ago
 1 │ signature.rs │ File │ 1.2 KB │ 5 days ago
 2 │ path.rs      │ File │ 2.1 KB │ 5 days ago
 3 │ files.rs     │ File │ 4.6 KB │ 5 days ago
 4 │ shapes.rs    │ File │ 4.7 KB │ 5 days ago
───┴──────────────┴──────┴────────┴────────────
</code></pre></div><p>Zuerst wird die Tabelle nach grösse sortiert, um die kleinsten Dateien zuoberst zu erhalten, danach werden mit <code>first 5</code> die ersten 5 Zeilen ausgegeben.</p><p>Mit <code>skip</code> können ebenfalls Zeilen entfernt werden, die unerwünscht sind. Hier die ersten 2 der 5 aus dem obigen Beispiel:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5 | skip 2
───┬───────────┬──────┬────────┬────────────
 # │ name      │ type │ size   │ modified
───┼───────────┼──────┼────────┼────────────
 0 │ path.rs   │ File │ 2.1 KB │ 5 days ago
 1 │ files.rs  │ File │ 4.6 KB │ 5 days ago
 2 │ shapes.rs │ File │ 4.7 KB │ 5 days ago
───┴───────────┴──────┴────────┴────────────
</code></pre></div><p>So konnten die 3 Zeilen extrahiert werden, die uns interessieren.</p><p>In allen Tabellen sind die Zeilen nummeriert. Dies ermöglicht eine einfache Art, die einzelnen Zeilen verwenden zu können. Im folgenden wird zuerst nach dem Namen sortiert, und dann die 5. Zeile mit dem <code>select</code> Befehl über die Zeilennummer ausgewählt:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls | sort-by name
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ files.rs      │ File │  4.6 KB │ 5 days ago
 1 │ lib.rs        │ File │   330 B │ 5 days ago
 2 │ lite_parse.rs │ File │  6.3 KB │ 5 days ago
 3 │ parse.rs      │ File │ 49.8 KB │ 1 day ago
 4 │ path.rs       │ File │  2.1 KB │ 5 days ago
 5 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
 6 │ signature.rs  │ File │  1.2 KB │ 5 days ago
───┴───────────────┴──────┴─────────┴────────────

&gt; ls | sort-by name | select 5
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
───┴───────────────┴──────┴─────────┴────────────
</code></pre></div><h2 id="daten-aus-der-tabelle-herausziehen" tabindex="-1"><a class="header-anchor" href="#daten-aus-der-tabelle-herausziehen" aria-hidden="true">#</a> Daten aus der Tabelle herausziehen</h2>`,10),f=e("code",null,"get",-1),x=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | get name
───┬───────────────
 0 │ files.rs
 1 │ lib.rs
 2 │ lite_parse.rs
 3 │ parse.rs
 4 │ path.rs
 5 │ shapes.rs
 6 │ signature.rs
───┴───────────────
`)])],-1),w=e("p",null,"Damit erhalten wir die Werte aller Dateinamen als Liste.",-1),B=e("code",null,"select",-1),z=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | select name
───┬───────────────
 # │ name
───┼───────────────
 0 │ files.rs
 1 │ lib.rs
 2 │ lite_parse.rs
 3 │ parse.rs
 4 │ path.rs
 5 │ shapes.rs
 6 │ signature.rs
───┴───────────────
`)])],-1),v=e("p",null,"Diese sehen wirklich sehr ähnlich aus! Was also ist der Unterschied:",-1),k=e("code",null,"select",-1),y=e("code",null,"get",-1),K=e("code",null,"get",-1),D=e("h2",{id:"daten-einer-tabelle-andern",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#daten-einer-tabelle-andern","aria-hidden":"true"},"#"),n(" Daten einer Tabelle ändern")],-1),F=e("p",null,"Zusätzlich zum Auswählen von Daten in einer Tabelle, kann auch deren Inhalt geändert werden. Tabellen können kombiniert werden, neue Spalten hinzugefügt, oder Werte verändert werden. In Nu wird dadurch nicht die Tabelle direkt geändert, sondern jeder Befehl generiert eine neue Tabelle in der Pipeline.",-1),S=e("h3",{id:"tabellen-zusammenfuhren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tabellen-zusammenfuhren","aria-hidden":"true"},"#"),n(" Tabellen zusammenführen")],-1),T=e("code",null,"append",-1),$=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> let $first = [[a b]; [1 2]]
> let $second = [[a b]; [3 4]]
> $first | append $second
───┬───┬───
 # │ a │ b
───┼───┼───
 0 │ 1 │ 2
 1 │ 3 │ 4
───┴───┴───
`)])],-1),N=e("h3",{id:"tabellen-mergen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tabellen-mergen","aria-hidden":"true"},"#"),n(" Tabellen mergen")],-1),Z=e("code",null,"merge",-1),W=i(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let $first = [[a b]; [1 2]]
&gt; let $second = [[c d]; [3 4]]
&gt; $first | merge { $second }
───┬───┬───┬───┬───
 # │ a │ b │ c │ d
───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 3 │ 4
───┴───┴───┴───┴───
</code></pre></div><p>Wird eine dritte Tabelle generiert:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let $third = [[e f]; [5 6]]
</code></pre></div><p>Können nun alle drei Tabellen zusammengeführt werden wie hier:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; $first | merge { $second } | merge { $third }
───┬───┬───┬───┬───┬───┬───
 # │ a │ b │ c │ d │ e │ f
───┼───┼───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6
───┴───┴───┴───┴───┴───┴───
</code></pre></div>`,5),I=e("code",null,"reduce",-1),A=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> [$first $second $third] | reduce {|it, acc| $acc|merge { $it }}
───┬───┬───┬───┬───┬───┬───
 # │ a │ b │ c │ d │ e │ f
───┼───┼───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6
───┴───┴───┴───┴───┴───┴───
`)])],-1),V=e("h3",{id:"eine-spalte-hinzufugen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eine-spalte-hinzufugen","aria-hidden":"true"},"#"),n(" Eine Spalte hinzufügen")],-1),E=e("code",null,"insert",-1),M=i(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
</code></pre></div><p>wird eine Spalte namens &quot;next_edition&quot; mit dem Wert 2021 hinzugefügt:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021
──────────────┬──────
 edition      │ 2018
 next_edition │ 2021
──────────────┴──────
</code></pre></div><p>Öffnen wir die originale Datei erneut, bleibt der Inhalt der alte:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
</code></pre></div>`,5),U=e("code",null,"save",-1),L=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml
> open rustfmt2.toml
──────────────┬──────
 edition      │ 2018
 next_edition │ 2021
──────────────┴──────
`)])],-1),C=e("h3",{id:"eine-spalte-updaten",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eine-spalte-updaten","aria-hidden":"true"},"#"),n(" Eine Spalte updaten")],-1),P=e("code",null,"insert",-1),j=e("code",null,"update",-1),q=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
`)])],-1),H=e("p",null,"Und nun das Update auf die nächste Edition, die unterstützt werden soll:",-1),R=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml | update edition 2021
─────────┬──────
 edition │ 2021
─────────┴──────
`)])],-1),G=e("code",null,"upsert",-1),O=e("h3",{id:"spalten-verschieben",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spalten-verschieben","aria-hidden":"true"},"#"),n(" Spalten verschieben")],-1),Q=e("code",null,"move",-1),X=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | move name --after size
╭────┬──────┬─────────┬───────────────────┬──────────────╮
│ #  │ type │  size   │       name        │   modified   │
├────┼──────┼─────────┼───────────────────┼──────────────┤
│  0 │ dir  │   256 B │ Applications      │ 3 days ago   │
│  1 │ dir  │   256 B │ Data              │ 2 weeks ago  │
│  2 │ dir  │   448 B │ Desktop           │ 2 hours ago  │
│  3 │ dir  │   192 B │ Disks             │ a week ago   │
│  4 │ dir  │   416 B │ Documents         │ 4 days ago   │
...
`)])],-1),J=e("h3",{id:"spalten-umbenennen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#spalten-umbenennen","aria-hidden":"true"},"#"),n(" Spalten umbenennen")],-1),Y=e("code",null,"rename",-1),ee=e("code",null,"ls",-1),ne=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | rename filename filetype filesize date
╭────┬───────────────────┬──────────┬──────────┬──────────────╮
│ #  │     filename      │ filetype │ filesize │     date     │
├────┼───────────────────┼──────────┼──────────┼──────────────┤
│  0 │ Applications      │ dir      │    256 B │ 3 days ago   │
│  1 │ Data              │ dir      │    256 B │ 2 weeks ago  │
│  2 │ Desktop           │ dir      │    448 B │ 2 hours ago  │
│  3 │ Disks             │ dir      │    192 B │ a week ago   │
│  4 │ Documents         │ dir      │    416 B │ 4 days ago   │
...
`)])],-1);function te(ae,se){const t=o("RouterLink");return d(),r("div",null,[u,e("p",null,[n("Um eine Tabelle zu sortieren, wird der "),a(t,{to:"/book/commands/sort-by.html"},{default:s(()=>[h]),_:1}),n(" Befehl verwendet, dem mitgeteilt wird, nach welcher Spalte sortiert werden soll. Hier wird sortiert nach der Grösse der Dateien:")]),g,m,p,e("p",null,[n("Von einer Tabelle können einzelne Spalten und Zeilen ausgewählt werden. Mit dem "),a(t,{to:"/book/commands/select.html"},{default:s(()=>[_]),_:1}),n(" Befehl werden hier einige Spalten gewählt.")]),b,e("p",null,[n("Bisher wurde die Tabelle auf die benötigten Inhalte getrimmt. Im nächsten Schritt soll angeschaut werden, wie wir den Inhalt anstelle der Tabelle herausziehen können. Zum Beispiel wenn eine Liste der Namen aller Dateien erstellt werden soll. Dafür steht der "),a(t,{to:"/book/commands/get.html"},{default:s(()=>[f]),_:1}),n(" Befehl bereit:")]),x,w,e("p",null,[n("Dies sieht fast so aus, wie der "),a(t,{to:"/book/commands/select.html"},{default:s(()=>[B]),_:1}),n(" Befehl weiter oben, deshalb hier die beiden nebeneinander:")]),z,v,e("ul",null,[e("li",null,[a(t,{to:"/book/commands/select.html"},{default:s(()=>[k]),_:1}),n(" - generiert eine Tabelle, die nur die gewünschten Spalten enhält")]),e("li",null,[a(t,{to:"/book/commands/get.html"},{default:s(()=>[y]),_:1}),n(" - gibt den Inhalt der angegebenen Spalte als Liste zurück")])]),e("p",null,[n("Einen Weg, diese zwei auseinander zu halten ist, dass die Spaltennamen fehlen, was bedeutet, es muss sich um eine Liste handeln. Der "),a(t,{to:"/book/commands/get.html"},{default:s(()=>[K]),_:1}),n(" geht noch einen Schritt weiter und verwendet Pfade um auf tiefer liegende Strukturen zugreifen zu können, wie man sie z.B. in einer .json Datei findet.")]),D,F,S,e("p",null,[n("Mit "),a(t,{to:"/book/commands/append.html"},{default:s(()=>[T]),_:1}),n(" können Spalten gleichen Namens zusammengeführt werden:")]),$,N,e("p",null,[n("Mit dem "),a(t,{to:"/book/commands/merge.html"},{default:s(()=>[Z]),_:1}),n(" Befehl werden zwei oder mehr Tabellen zusammengeführt.")]),W,e("p",null,[n("Oder mit dem "),a(t,{to:"/book/commands/reduce.html"},{default:s(()=>[I]),_:1}),n(" Befehl alle dynamisch gemerged:")]),A,V,e("p",null,[n("Mit dem "),a(t,{to:"/book/commands/insert.html"},{default:s(()=>[E]),_:1}),n(" Befehl wird eine neue Spalte hinzugefügt. Wie zum Beispiel:")]),M,e("p",null,[n("Änderungen in Nu sind funktionale Änderungen, was bedeutet, dass Werte geändert werden, ohne permanente Änderungen zu bewirken. Es ist deshalb möglich, mehrere Änderungen in der Pipeline vorzunehmen, bevor diese bereit sind um gesichert zu werden. Zum Sichern können wir, wie in diesem Beispiel, den "),a(t,{to:"/book/commands/save.html"},{default:s(()=>[U]),_:1}),n(" Befehl verwenden:")]),L,C,e("p",null,[n("Ähnlich dem "),a(t,{to:"/book/commands/insert.html"},{default:s(()=>[P]),_:1}),n(" Befehl, kann mit "),a(t,{to:"/book/commands/update.html"},{default:s(()=>[j]),_:1}),n(" der Inhalt einer Spalte geändert werden. Auf die selbe Datei angewendet, sieht das so aus:")]),q,H,R,e("p",null,[n("Mit dem "),a(t,{to:"/book/commands/upsert.html"},{default:s(()=>[G]),_:1}),n(" Befehl wird der Wert enweder eingefügt oder updatet abhängig davon, ob er bereits existriet.")]),O,e("p",null,[n("Mit "),a(t,{to:"/book/commands/move.html"},{default:s(()=>[Q]),_:1}),n(' werden Spalten in de Tabelle verschoben. Um zum Bespiel die Spalte "name" von "ls" nach der Spalte "size" erschienen zu lassen, schreibt man:')]),X,J,e("p",null,[n("Um Spalten einen neuen Name zu geben, wird der Befehl "),a(t,{to:"/book/commands/rename.html"},{default:s(()=>[Y]),_:1}),n(" verwendet. Wie zum Beispiel hier nach der Verwendung von "),ee,n(".")]),ne])}const le=l(c,[["render",te],["__file","working_with_tables.html.vue"]]);export{le as default};
