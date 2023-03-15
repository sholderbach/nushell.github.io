import{_ as n,p as e,q as s,a1 as a}from"./framework-344bb0e4.js";const t={},p=a(`<h1 id="einfuhrung" tabindex="-1"><a class="header-anchor" href="#einfuhrung" aria-hidden="true">#</a> Einführung</h1><p>Hallo und herzlich Willkommen beim Nushell Projekt. Das Ziel diese Projekts ist es, die Philosophie von Unix Shells, wo Pipes einfache Befehle miteinander verbinden, mit modernen Ansätzen zu verbinden.</p><p>Nu ist von vielen Seiten beeinflusst: traditionelle Shells wie Bash, objektbasierte Shells wie PowerShell, funktionale Programmierung, Systems Programming und viele Weitere. Aber statt die eierlegende Wollmilchsau zu sein, liegt der Fokus von Nu darauf, die angebotenen Funktionen gut zu beherrschen:</p><ul><li>Flexible cross-plattform Shell mit einem modernen Verhalten</li><li>Ausgaben von Kommandozeilenprogrammen mit einer Shell zu verarbeiten, die Struktur von Daten versteht</li><li>Ein Interface besitzen, das den modernen Bedürfnissen gerecht wird</li></ul><p>Der einfachste Weg zu verstehen, was Nu alles leisten kann, ist entlang von Beispielen. Los geht&#39;s!</p><p>Das Erste was auffällt, wenn ein Befehl wie <code>ls</code> ausgeführt wird, ist, dass anstatt eines Blocks von Text eine strukturierte Tabelle als Ausgabe erscheint.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
╭────┬───────────────────────┬──────┬───────────┬─────────────╮
│ <span class="token comment">#  │         name          │ type │   size    │  modified   │</span>
├────┼───────────────────────┼──────┼───────────┼─────────────┤
│  <span class="token number">0</span> │ <span class="token number">404</span>.html              │ <span class="token function">file</span> │     <span class="token number">429</span> B │ <span class="token number">3</span> days ago  │
│  <span class="token number">1</span> │ CONTRIBUTING.md       │ <span class="token function">file</span> │     <span class="token number">955</span> B │ <span class="token number">8</span> mins ago  │
│  <span class="token number">2</span> │ Gemfile               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">3</span> │ Gemfile.lock          │ <span class="token function">file</span> │   <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">4</span> │ LICENSE               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">5</span> │ README.md             │ <span class="token function">file</span> │     <span class="token number">213</span> B │ <span class="token number">3</span> days ago  │
<span class="token punctuation">..</span>.
</code></pre></div><p>Diese Tabelle ist mehr als nur eine andere Darstellungsform. Wie Tabellen in Spreadsheets erlaubt es diese Tabelle mit den Daten interaktiver zu arbeiten.</p><p>Um das zu demonstrieren, wird der Inhalt der Tabelle zunächst nach der Größe sortiert. Um das zu realisieren, wird die Ausgabe von <code>ls</code> genommen und in ein Befehl gegeben, der Tabellen auf Basis von Daten in einer Spalte neu anordnen kann.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> sort-by size <span class="token operator">|</span> reverse
╭────┬───────────────────────┬──────┬───────────┬─────────────╮
│ <span class="token comment">#  │         name          │ type │   size    │  modified   │</span>
├────┼───────────────────────┼──────┼───────────┼─────────────┤
│  <span class="token number">0</span> │ Gemfile.lock          │ <span class="token function">file</span> │   <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">1</span> │ SUMMARY.md            │ <span class="token function">file</span> │   <span class="token number">3.7</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">2</span> │ Gemfile               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">3</span> │ LICENSE               │ <span class="token function">file</span> │   <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago  │
│  <span class="token number">4</span> │ CONTRIBUTING.md       │ <span class="token function">file</span> │     <span class="token number">955</span> B │ <span class="token number">9</span> mins ago  │
│  <span class="token number">5</span> │ books.md              │ <span class="token function">file</span> │     <span class="token number">687</span> B │ <span class="token number">3</span> days ago  │
<span class="token punctuation">..</span>.
</code></pre></div><p>Um das Ganze zu realisieren, mussten hierzu nicht Argumente an <code>ls</code> übergeben werden. Stattdessen wird der <code>sort-by</code> Befehl verwendet, den Nu bereitstellt, um Daten zu sortieren. Damit die größten Dateien oben erscheinen wurde zusätzlich die Option <code>reverse</code> angegeben.</p><p>Nu stellt sehr viele Befehle bereit, die mit Tabellen arbeiten können. Beispielsweise kann die Ausgabe von <code>ls</code> auch derart gefiltert werden, dass nur Datei mit einer Größe von mehr als einem Kilobyte angezeigt werden:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 1kb
╭───┬───────────────────┬──────┬─────────┬────────────╮
│ <span class="token comment"># │       name        │ type │  size   │  modified  │</span>
├───┼───────────────────┼──────┼─────────┼────────────┤
│ <span class="token number">0</span> │ Gemfile           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">1</span> │ Gemfile.lock      │ <span class="token function">file</span> │ <span class="token number">6.9</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">2</span> │ LICENSE           │ <span class="token function">file</span> │ <span class="token number">1.1</span> KiB │ <span class="token number">3</span> days ago │
│ <span class="token number">3</span> │ SUMMARY.md        │ <span class="token function">file</span> │ <span class="token number">3.7</span> KiB │ <span class="token number">3</span> days ago │
╰───┴───────────────────┴──────┴─────────┴────────────╯
</code></pre></div><p>Wie in der Unix-Philosophie, erlauben Befehle, die untereinander Daten austauschen können, viele verschiedene Kombinationen um Aufgaben zu lösen. Wie in folgendem Beispiel:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span>
╭─────┬──────┬──────────────────────┬─────────┬───────┬───────────┬──────────╮
│  <span class="token comment">#  │ pid  │         name         │ status  │  cpu  │    mem    │ virtual  │</span>
├─────┼──────┼──────────────────────┼─────────┼───────┼───────────┼──────────┤
│   <span class="token number">0</span> │ <span class="token number">7570</span> │ nu                   │ Running │  <span class="token number">1.96</span> │  <span class="token number">23.2</span> MiB │ <span class="token number">32.8</span> GiB │
│   <span class="token number">1</span> │ <span class="token number">3533</span> │ remindd              │ Sleep   │  <span class="token number">0.00</span> │ <span class="token number">103.6</span> MiB │ <span class="token number">32.3</span> GiB │
│   <span class="token number">2</span> │ <span class="token number">3495</span> │ TVCacheExtension     │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">11.9</span> MiB │ <span class="token number">32.2</span> GiB │
│   <span class="token number">3</span> │ <span class="token number">3490</span> │ MusicCacheExtension  │ Sleep   │  <span class="token number">0.00</span> │  <span class="token number">12.9</span> MiB │ <span class="token number">32.2</span> GiB │
<span class="token punctuation">..</span>.
</code></pre></div><p>Der <code>ps</code> Befehl erlaubt es auf Linux-Systemen alle laufenden Prozesse, deren Status und Name abzufragen. Des Weiteren gibt er Informationen zu CPU-Last der einzelnen Prozesse an.</p><p>Was macht man, wenn man nur Prozesse sehen möchte, die aktuelle aktiv die CPU nutzen? Wie zuvor beim <code>ls</code> Befehl, kann mit der durch <code>ps</code> zurückgegebenen Tabelle gearbeitet werden:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ps</span> <span class="token operator">|</span> where cpu <span class="token operator">&gt;</span> <span class="token number">5</span>
╭───┬──────┬────────────────┬─────────┬────────┬───────────┬──────────╮
│ <span class="token comment"># │ pid  │      name      │ status  │  cpu   │    mem    │ virtual  │</span>
├───┼──────┼────────────────┼─────────┼────────┼───────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">1583</span> │ Terminal       │ Running │  <span class="token number">20.69</span> │ <span class="token number">127.8</span> MiB │ <span class="token number">33.0</span> GiB │
│ <span class="token number">1</span> │  <span class="token number">579</span> │ photoanalysisd │ Running │ <span class="token number">139.50</span> │  <span class="token number">99.9</span> MiB │ <span class="token number">32.3</span> GiB │
╰───┴──────┴────────────────┴─────────┴────────┴───────────┴──────────╯
</code></pre></div><p>Bis jetzt wurden <code>ls</code> und <code>ps</code> genutzt, um Dateien und Prozesse aufzulisten. Nu besitzt aber noch viele weitere Befehle die nützliche Informationen in Tabellenform ausgeben. Dazu wird nun ein Block auf die Befehle <code>date</code> und <code>sys</code> geworfen.</p><p>Wenn <code>date now</code> aufgerufen wird, werden Informationen zum aktuellen Datum und der aktuellen Uhrzeit ausgegeben.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now
<span class="token number">2022</span>-03-07 <span class="token number">14</span>:14:51.684619600 <span class="token parameter variable">-08:00</span>
</code></pre></div><p>Um das Datum in Tabellenform zu bekommen, kann es zusätzlich in <code>date to-table</code> gegeben werden:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">date</span> now <span class="token operator">|</span> <span class="token function">date</span> to-table
╭───┬──────┬───────┬─────┬──────┬────────┬────────┬──────────╮
│ <span class="token comment"># │ year │ month │ day │ hour │ minute │ second │ timezone │</span>
├───┼──────┼───────┼─────┼──────┼────────┼────────┼──────────┤
│ <span class="token number">0</span> │ <span class="token number">2022</span> │     <span class="token number">3</span> │   <span class="token number">7</span> │   <span class="token number">14</span> │     <span class="token number">45</span> │      <span class="token number">3</span> │ <span class="token parameter variable">-08:00</span>   │
╰───┴──────┴───────┴─────┴──────┴────────┴────────┴──────────╯
</code></pre></div><p>Der Aufruf von <code>sys</code> gibt Informationen zum System aus, auf dem Nu läuft:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys
╭───────┬───────────────────╮
│ <span class="token function">host</span>  │ <span class="token punctuation">{</span>record <span class="token number">6</span> fields<span class="token punctuation">}</span> │
│ cpu   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
│ disks │ <span class="token punctuation">[</span>table <span class="token number">3</span> rows<span class="token punctuation">]</span>    │
│ mem   │ <span class="token punctuation">{</span>record <span class="token number">4</span> fields<span class="token punctuation">}</span> │
│ temp  │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>     │
│ net   │ <span class="token punctuation">[</span>table <span class="token number">4</span> rows<span class="token punctuation">]</span>    │
╰───────┴───────────────────╯
</code></pre></div><p>Diese Ausgabe unterscheidet sich nun von den vorherigen. Der <code>sys</code> Befehl gibt eine Tabelle zurück, die selbst strukturierte Tabellen in den Zellen enthält anstatt nur einfache Werte. Um auf die Daten zuzugreifen, wird der <em>get</em> Befehl verwendet:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get <span class="token function">host</span>
╭────────────────┬────────────────────────╮
│ name           │ Debian GNU/Linux       │
│ os version     │ <span class="token number">11</span>                     │
│ kernel version │ <span class="token number">5.10</span>.92-v8+            │
│ <span class="token function">hostname</span>       │ lifeless               │
│ <span class="token function">uptime</span>         │ 19day 21hr 34min 45sec │
│ sessions       │ <span class="token punctuation">[</span>table <span class="token number">1</span> row<span class="token punctuation">]</span>          │
╰────────────────┴────────────────────────╯
</code></pre></div><p>Der <code>get</code> Befehl erlaubt es, in die Inhalte einer Tabellenzelle einzutauchen. Hier wird beispielsweise die Spalte &quot;host&quot; näher betrachtet, die Informationen über den Host, auf dem Nu läuft, enthält. Der Name des Betriebssystem (OS), die CPU und mehr. Nun sollen die Namen der Nutzer auf dem System ausgegeben werden:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name
╭───┬────╮
│ <span class="token number">0</span> │ jt │
╰───┴────╯
</code></pre></div><p>Aktuelle existiert nur ein Nutzer namens &quot;jt&quot;. Wie zu sehen ist, kann ein ganzer Pfad für Spalten angegeben werden - nicht nur der Name der Spalte. Nu wird den Pfad nehmen und durch die entsprechenden Daten in der Tabelle gehen.</p><p>Und noch etwas anderes ist anders. Anstatt einer Tabelle mit Daten wurde nur ein einzelnes Element ausgegeben: der String &quot;jt&quot;. Nu arbeitet sowohl mit Tabellen voller Daten als auch mit Strings. Strings sind ein wichtiger Bestandteil, um mit Befehlen außerhalb von Nu zu arbeiten.</p><p>Nun soll aufgezeigt werden, wie mit Strings außerhalb von Nu gearbeitet wird. Dazu wird das vorige Beispiel erweitert. Die Daten werden an den externen <code>echo</code> Befehl weitergegeben (das <code>^</code> teilt Nu mit, dass nicht der eingebaute <code>echo</code> Befehl verwendet werden soll):</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> sys <span class="token operator">|</span> get host.sessions.name <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> ^echo <span class="token variable">$it</span> <span class="token punctuation">}</span>
jt
</code></pre></div><p>Das sieht jetzt genau gleich aus wie die Ausgabe zuvor. Was soll das? Es ist ähnlich aber mit einem entscheidenden Unterschied: <code>^echo</code> wurde aufgerufen. Das erlaubt es uns Daten aus Nu heraus an beliebige Befehle außerhalb von Nu zu geben wie <code>echo</code> oder <code>git</code>.</p><p><em>Hinweis: Hilfe zu allen in Nu eingebauten Befehlen kann mit dem Befehl <code>help</code> angezeigt werden</em>:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">help</span> path
Explore and manipulate paths.

There are three ways to represent a path:

* As a path literal, e.g., <span class="token string">&#39;/home/viking/spam.txt&#39;</span>
* As a structured path: a table with <span class="token string">&#39;parent&#39;</span>, <span class="token string">&#39;stem&#39;</span>, and <span class="token string">&#39;extension&#39;</span> <span class="token punctuation">(</span>and
* <span class="token string">&#39;prefix&#39;</span> on Windows<span class="token punctuation">)</span> columns. This <span class="token function">format</span> is produced by the <span class="token string">&#39;path parse&#39;</span>
  subcommand.
* As an inner list of path parts, e.g., <span class="token string">&#39;[[ / home viking spam.txt ]]&#39;</span><span class="token builtin class-name">.</span>
  Splitting into parts is <span class="token keyword">done</span> by the <span class="token variable"><span class="token variable">\`</span>path <span class="token function">split</span><span class="token variable">\`</span></span> command.

All subcommands accept all three variants as an input. Furthermore, the <span class="token string">&#39;path
join&#39;</span> subcommand can be used to <span class="token function">join</span> the structured path or path parts back into
the path literal.

Usage:
  <span class="token operator">&gt;</span> path

Subcommands:
  path <span class="token function">basename</span> - Get the final component of a path
  path <span class="token function">dirname</span> - Get the parent directory of a path
  path exists - Check whether a path exists
  path <span class="token function">expand</span> - Try to <span class="token function">expand</span> a path to its absolute form
  path <span class="token function">join</span> - Join a structured path or a list of path parts.
  path parse - Convert a path into structured data.
  path relative-to - Get a path as relative to another path.
  path <span class="token function">split</span> - Split a path into parts by a separator.
  path <span class="token builtin class-name">type</span> - Get the <span class="token builtin class-name">type</span> of the object a path refers to <span class="token punctuation">(</span>e.g., file, dir, symlink<span class="token punctuation">)</span>

Flags:
  -h, <span class="token parameter variable">--help</span>
      Display this <span class="token builtin class-name">help</span> message
</code></pre></div>`,36),o=[p];function l(i,r){return e(),s("div",null,o)}const u=n(t,[["render",l],["__file","index.html.vue"]]);export{u as default};
