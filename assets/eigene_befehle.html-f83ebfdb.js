import{_ as a,M as i,p as d,q as r,Q as t,t as e,N as l,U as s,a1 as o}from"./framework-344bb0e4.js";const c={},g=o(`<h1 id="eigene-befehle" tabindex="-1"><a class="header-anchor" href="#eigene-befehle" aria-hidden="true">#</a> Eigene Befehle</h1><p>Die Fähigkeit von Nu, lange Pipelines zu verarbeiten, erlauben es große Kontrolle über Daten und das System zu haben. Das Ganze kommt allerdings zum Preis von viel Tipparbeit. Idealerweise sollte es eine Möglichkeit geben, mühsam gebaute Pipelines zu speichern und wieder und wieder auszuführen.</p><p>Hier kommen eigene Befehle ins Spiel.</p><p>Eine beispielhafte Definition eines eigenen Befehls sieht wie folgt aus:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name] {
  echo &quot;hello&quot; $name
}
</code></pre></div><p>In dieser Definition, wird ein Befehl <code>greet</code> beschrieben, der einen Parameter <code>name</code> konsumiert. Nach diesem Parameter erfolgt die Beschreibung was passiert, wenn der Befehl ausgeführt wird. Wenn der Befehl aufgerufen wird, wird der Wert, der als Parameter <code>name</code> übergeben wurde, in die Variable <code>$name</code> geschrieben, die im Codeblock verfügbar ist.</p><p>Um den obigen Befehl auszuführen wird er wie ein eingebauter Befehl aufgerufen:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet &quot;world&quot;
</code></pre></div><p>Wenn das getan wird, wird eine Ausgabe erzeugt, die wie die der eingebauten Befehle aussieht:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>───┬───────
 0 │ hello
 1 │ world
───┴───────
</code></pre></div><h2 id="namen-von-befehlen" tabindex="-1"><a class="header-anchor" href="#namen-von-befehlen" aria-hidden="true">#</a> Namen von Befehlen</h2><p>In Nushell ist ein valider Name eines Befehls ein String aus Zeichen oder ein String in Anführungszeichen. Beispiele hierfür sind: <code>greet</code>, <code>get-size</code>, <code>mycommand123</code>, <code>&quot;mycommand&quot;</code>, <code>😊</code> und <code>123</code>.</p><p><em>Hinweis: Es wird empfohlen Worte in Befehlen mit <code>-</code> zur besseren Lesbarkeit zu trennen.</em> Beispiele: <code>get-size</code> anstatt <code>getsize</code> oder <code>get_size</code>.</p><h2 id="unterbefehle" tabindex="-1"><a class="header-anchor" href="#unterbefehle" aria-hidden="true">#</a> Unterbefehle</h2><p>Es ist auch möglich Unterbefehle zu definieren. Dazu wird der Unterbefehl vom Superbefehl durch ein Leerzeichen getrennt. Wenn beispielsweise der Befehl <code>str</code> durch einen Unterbefehl <code>mycommand</code> erweitert werden soll, funktioniert das wie folgt:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def &quot;str mycommand&quot; [] {
  echo hello
}
</code></pre></div><p>Jetzt kann der eigene Unterbefehl aufgerufen werden, als ob er ein eingebauter Befehl von <code>str</code> wäre:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; str mycommand
</code></pre></div><h2 id="typen-von-parametern" tabindex="-1"><a class="header-anchor" href="#typen-von-parametern" aria-hidden="true">#</a> Typen von Parametern</h2><p>Wenn eigene Befehle definiert werden, kann optional auch der Typ jedes Parameters angegeben werden. Das obige Beispiel kann beispielsweise wie folgt abgeändert werden:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name: string] {
  echo &quot;hello&quot; $name
}
</code></pre></div><p>Die Typen der Parameter anzugeben ist optional. Nushell erlaubt es diese wegzulassen und behandelt diese dann als Typ <code>any</code>. Es kann also jede Art von Typ verarbeitet werden. Wenn ein Typ angegeben wurde, überprüft Nushell den Typ, wenn die Funktion aufgerufen wird.</p><p>Beispielhaft soll nur noch ein <code>int</code> als Typ erlaubt sein:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [name: int] {
  echo &quot;hello&quot; $name
}

greet world
</code></pre></div><p>Wenn versucht wird, den oberen Code auszuführen, wird Nu darauf aufmerksam machen, dass die Typen nicht passen und die Ausführung stoppen:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>error: Type Error
  ┌─ shell:6:7
  │
5 │ greet world
  │       ^^^^^ Expected int, found world
</code></pre></div><p>Dies kann dabei helfen Nutzer darauf aufmerksam zu machen, welche Art von Typ erlaubt ist.</p><p>Die aktuell erlaubten Typen sind (mit Version 0.65.0 und neuer):</p><ul><li><code>any</code></li><li><code>block</code></li><li><code>cell-path</code></li><li><code>duration</code></li><li><code>path</code></li><li><code>expr</code></li><li><code>filesize</code></li><li><code>glob</code></li><li><code>int</code></li><li><code>math</code></li><li><code>number</code></li><li><code>operator</code></li><li><code>range</code></li><li><code>cond</code></li><li><code>bool</code></li><li><code>signature</code></li><li><code>string</code></li><li><code>variable</code></li><li><code>record</code></li><li><code>list</code></li><li><code>table</code></li><li><code>error</code></li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><p>Zusätzlich zu den obigen Parametern, können auch namenabhängige Parameter verwendet werden, indem Flags für eigene Befehle definiert werden.</p><p>Zum Beispiel:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age: int
] {
  echo $name $age
}
</code></pre></div><p>In der obigen Definition von <code>greet</code>, werden ein fester Parameter <code>name</code> und eine Flag <code>age</code> definiert. Damit ist es möglich, dem Befehl <code>greet</code> optional den Parameter <code>age</code> zu übergeben.</p><p>Das obige Beispiel kann wie folgt aufgerufen werden:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet world --age 10
</code></pre></div><p>Oder:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet --age 10 world
</code></pre></div><p>Oder gleich ganz ohne Flag:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet world
</code></pre></div><p>Flags können auch so definiert werden, dass es eine Kurzform gibt. Das erlaubt es sowohl eine kurze als auch eine einfach lesbare lange Flag für die selbe Aufgabe zu haben.</p><p>Das Beispiel wird hier, um eine Kurzform für die Flag <code>age</code> erweitert:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
] {
  echo $name $age
}
</code></pre></div><p><em>Hinweis:</em> Flags sind benannt nach der langen Form des Namens. Im obigen Beispiel erfolgt der Zugriff immer über <code>$age</code> und nicht über <code>$a</code>.</p><p>Nun kann diese neue Version von <code>greet</code> wie folgt aufgerufen werden:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; greet -a 10 hello
</code></pre></div><h2 id="dokumentation-fur-den-eigenen-befehl" tabindex="-1"><a class="header-anchor" href="#dokumentation-fur-den-eigenen-befehl" aria-hidden="true">#</a> Dokumentation für den eigenen Befehl</h2><p>Um Nutzern eines eigenen Befehls zu helfen, können diese und ihre Parameter mit zusätzlichen Beschreibungen versehen werden.</p><p>Es wird weiterhin das obige Beispiel verwendet:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def greet [
  name: string
  --age (-a): int
] {
  echo $name $age
}
</code></pre></div><p>Wenn der Befehl definiert ist kann <code>help greet</code> aufgerufen werden, um Informationen zum Befehl zu erhalten:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt;

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;
</code></pre></div><p>Wie zu sehen ist, werden der Parameter und die Flag, die definiert wurden, aufgelistet. Zusätzlich gibt es noch die Flag <code>-h</code>, die jeder Befehl hat.</p><p>Um diese Hilfe zu verbessern, können Beschreibungen zur Definition hinzugefügt werden:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code># A greeting command that can greet the caller
def greet [
  name: string      # The name of the person to greet
  --age (-a): int   # The age of the person
] {
  echo $name $age
}
</code></pre></div><p>Diese Kommentare, die zur Definition und den Parametern hinzugefügt wurden, werden sichtbar, wenn die Hilfe zum Befehl aufgerufen wird.</p><p>Wenn jetzt <code>help greet</code> ausgeführt wird, wird ein hilfreicherer Text angezeigt:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>A greeting command that can greet the caller

Usage:
  &gt; greet &lt;name&gt; {flags}

Parameters:
  &lt;name&gt; The name of the person to greet

Flags:
  -h, --help: Display this help message
  -a, --age &lt;integer&gt;: The age of the person
</code></pre></div><h2 id="ausgabe" tabindex="-1"><a class="header-anchor" href="#ausgabe" aria-hidden="true">#</a> Ausgabe</h2><p>Eigene Befehle streamen ihre Ausgabe gleich wie eingebaute Befehle. Beispielsweise soll die folgende Pipeline umgebaut werden:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>&gt; ls | get name
</code></pre></div><p><code>ls</code> soll jetzt in einen neuen, eigenen Befehl verschoben werden:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def my-ls [] { ls }
</code></pre></div><p>Die Ausgabe dieses Befehls, kann identisch zur Ausgabe von <code>ls</code> verwendet werden.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; my-ls | get name
───┬───────────────────────
 0 │ myscript.nu
 1 │ myscript2.nu
 2 │ welcome_to_nushell.md
───┴───────────────────────
</code></pre></div><p>Das erlaubt es sehr einfach eigene Befehle zu definieren und deren Ausgabe zu verwenden. Ein Hinweis: Es werden keine return Statements wie in anderen Sprachen verwendet. Stattdessen werden in Nushell Pipelines gebaut, die ihre Ausgabe zur verbundenen Pipeline streamen.</p><h2 id="eingabe" tabindex="-1"><a class="header-anchor" href="#eingabe" aria-hidden="true">#</a> Eingabe</h2><p>Eigene Befehle können, wie andere Befehle, auch Eingaben verarbeiten. Diese Eingabe wird durch die Pipeline an den Codeblock des eigenen Befehls übergeben.</p><p>Hier soll nun beispielhaft ein eigener echo-Befehl definiert werden, der eine weitere Zeile nach jeder Zeile der Eingabe ausgibt:</p><div class="language-nushell" data-ext="nushell"><pre class="language-nushell"><code>def my-echo [] {
  each {
    echo $it &quot;--&quot;
  }
}
</code></pre></div><p>Wenn dieser neue Befehl nun in einer Pipeline aufgerufen wird, sieht die Ausgabe wie folgt aus:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; echo foo bar | my-echo
───┬─────
 0 │ foo
 1 │ --
 2 │ bar
 3 │ --
───┴─────
</code></pre></div><h2 id="persistenz" tabindex="-1"><a class="header-anchor" href="#persistenz" aria-hidden="true">#</a> Persistenz</h2>`,73);function u(h,p){const n=i("RouterLink");return d(),r("div",null,[g,t("p",null,[e("Um Informationen darüber zu erhalten, wie eigene Befehle bei jedem Start von Nushell verfügbar bleiben, sei auf das "),l(n,{to:"/de/book/konfiguration.html"},{default:s(()=>[e("Konfigurationskapitel")]),_:1}),e(" verwiesen.")])])}const m=a(c,[["render",u],["__file","eigene_befehle.html.vue"]]);export{m as default};
