import{_ as l,r as i,o as d,c,a as e,b as n,w as s,e as o,d as t}from"./app.8034769a.js";const r={},h=o(`<h1 id="working-with-tables" tabindex="-1"><a class="header-anchor" href="#working-with-tables" aria-hidden="true">#</a> Working with tables</h1><p>One of the common ways of seeing data in Nu is through a table. Nu comes with a number of commands for working with tables to make it convenient to find what you&#39;re looking for, and for narrowing down the data to just what you need.</p><p>To start off, let&#39;s get a table that we can use:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls
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
</code></pre></div><h2 id="sorting-the-data" tabindex="-1"><a class="header-anchor" href="#sorting-the-data" aria-hidden="true">#</a> Sorting the data</h2>`,5),u=t("We can sort a table by calling the "),g=e("code",null,"sort-by",-1),m=t(" command and telling it which columns we want to use in the sort. Let's say we wanted to sort our table by the size of the file:"),p=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | sort-by size
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
`)])],-1),_=e("p",null,'We can sort a table by any column that can be compared. For example, we could also have sorted the above using the "name", "accessed", or "modified" columns.',-1),f=e("h2",{id:"selecting-the-data-you-want",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#selecting-the-data-you-want","aria-hidden":"true"},"#"),t(" Selecting the data you want")],-1),w=t("We can select data from a table by choosing to select specific columns or specific rows. Let's "),x=e("code",null,"select",-1),b=t(" a few columns from our table to use:"),y=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | select name size
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
</code></pre></div><p>This helps to create a table that&#39;s more focused on what we need. Next, let&#39;s say we want to only look at the 5 smallest files in this directory:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name         \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 lib.rs       \u2502 File \u2502  330 B \u2502 5 days ago
 1 \u2502 signature.rs \u2502 File \u2502 1.2 KB \u2502 5 days ago
 2 \u2502 path.rs      \u2502 File \u2502 2.1 KB \u2502 5 days ago
 3 \u2502 files.rs     \u2502 File \u2502 4.6 KB \u2502 5 days ago
 4 \u2502 shapes.rs    \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>You&#39;ll notice we first sort the table by size to get to the smallest file, and then we use the <code>first 5</code> to return the first 5 rows of the table.</p><p>You can also <code>skip</code> rows that you don&#39;t want. Let&#39;s skip the first two of the 5 rows we returned above:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by size | first 5 | skip 2
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 name      \u2502 type \u2502 size   \u2502 modified
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 path.rs   \u2502 File \u2502 2.1 KB \u2502 5 days ago
 1 \u2502 files.rs  \u2502 File \u2502 4.6 KB \u2502 5 days ago
 2 \u2502 shapes.rs \u2502 File \u2502 4.7 KB \u2502 5 days ago
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>We&#39;ve narrowed it to three rows we care about.</p><p>Let&#39;s look at a few other commands for selecting data. You may have wondered why the rows of the table are numbers. This acts as a handy way to get to a single row. Let&#39;s sort our table by the file name and then pick one of the rows with the <code>select</code> command using its row number:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | sort-by name
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
</code></pre></div><h2 id="getting-data-out-of-a-table" tabindex="-1"><a class="header-anchor" href="#getting-data-out-of-a-table" aria-hidden="true">#</a> Getting data out of a table</h2>`,10),v=t("So far, we've worked with tables by trimming the table down to only what we need. Sometimes we may want to go a step further and only look at the values in the cells themselves rather than taking a whole column. Let's say, for example, we wanted to only get a list of the names of the files. For this, we use the "),k=e("code",null,"get",-1),B=t(" command:"),F=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | get name
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 files.rs
 1 \u2502 lib.rs
 2 \u2502 lite_parse.rs
 3 \u2502 parse.rs
 4 \u2502 path.rs
 5 \u2502 shapes.rs
 6 \u2502 signature.rs
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),K=e("p",null,"We now have the values for each of the filenames.",-1),z=t("This might look like the "),$=e("code",null,"select",-1),T=t(" command we saw earlier, so let's put that here as well to compare the two:"),L=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | select name
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
`)])],-1),W=e("p",null,"These look very similar! Let's see if we can spell out the difference between these two commands to make it clear:",-1),N=e("code",null,"select",-1),D=t(" - creates a new table which includes only the columns specified"),q=e("code",null,"get",-1),Y=t(" - returns the values inside the column specified as a list"),C=e("p",null,"The one way to tell these apart looking at the table is that the column names are missing, which lets us know that this is going to be a list of values we can work with.",-1),S=t("The "),A=e("code",null,"get",-1),I=t(" command can go one step further and take a path to data deeper in the table. This simplifies working with more complex data, like the structures you might find in a .json file."),V=e("h2",{id:"changing-data-in-a-table",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#changing-data-in-a-table","aria-hidden":"true"},"#"),t(" Changing data in a table")],-1),j=e("p",null,"In addition to selecting data from a table, we can also update what the table has. We may want to combine tables, add new columns, or edit the contents of a cell. In Nu, rather than editing in place, each of the commands in the section will return a new table in the pipeline.",-1),R=e("h3",{id:"concatenating-tables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#concatenating-tables","aria-hidden":"true"},"#"),t(" Concatenating Tables")],-1),M=t("We can concatenate tables with identical column names using "),O=e("code",null,"append",-1),E=t(":"),G=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> let $first = [[a b]; [1 2]]
> let $second = [[a b]; [3 4]]
> $first | append $second
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2
 1 \u2502 3 \u2502 4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
`)])],-1),H=e("h3",{id:"merging-tables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#merging-tables","aria-hidden":"true"},"#"),t(" Merging Tables")],-1),U=t("We can use the "),J=e("code",null,"merge",-1),P=t(" command to merge two (or more) tables together"),Q=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; let $first = [[a b]; [1 2]]
&gt; let $second = [[c d]; [3 4]]
&gt; $first | merge { $second }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 3 \u2502 4
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div><p>Let&#39;s add a third table:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let $third = [[e f]; [5 6]]
</code></pre></div><p>We could join all three tables together like this:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $first | merge { $second } | merge { $third }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d \u2502 e \u2502 f
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 3 \u2502 4 \u2502 5 \u2502 6
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div>`,5),X=t("Or we could use the "),Z=e("code",null,"reduce",-1),ee=t(" command to dynamically merge all tables:"),te=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> [$first $second $third] | reduce {|it, acc| $acc | merge { $it }}
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d \u2502 e \u2502 f
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 3 \u2502 4 \u2502 5 \u2502 6
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
`)])],-1),ae=e("h3",{id:"adding-a-new-column",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adding-a-new-column","aria-hidden":"true"},"#"),t(" Adding a new column")],-1),ne=t("We can use the "),se=e("code",null,"insert",-1),oe=t(" command to add a new column to the table. Let's look at an example:"),le=o(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Let&#39;s add a column called &quot;next_edition&quot; with the value 2021:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Notice that we if open the original file, the contents have stayed the same:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div>`,5),ie=t("Changes in Nu are functional changes, meaning that they work on the values themselves rather than trying to cause a permanent change. This lets us do many different types of work in our pipeline until we're ready to write out the result with any changes we'd like if we choose to. Here we could write out the result using the "),de=e("code",null,"save",-1),ce=t(" command:"),re=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml
> open rustfmt2.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition      \u2502 2018
 next_edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),he=e("h3",{id:"updating-a-column",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#updating-a-column","aria-hidden":"true"},"#"),t(" Updating a column")],-1),ue=t("In a similar way to the "),ge=e("code",null,"insert",-1),me=t(" command, we can also use the "),pe=e("code",null,"update",-1),_e=t(" command to change the contents of a column to a new value. To see it in action let's open the same file:"),fe=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2018
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),we=e("p",null,"And now, let's update the edition to point at the next edition we hope to support:",-1),xe=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml | update edition 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500
 edition \u2502 2021
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500
`)])],-1),be=t("You can also use the "),ye=e("code",null,"upsert",-1),ve=t(" command to insert or update depending on whether the column already exists."),ke=o(`<h3 id="moving-columns" tabindex="-1"><a class="header-anchor" href="#moving-columns" aria-hidden="true">#</a> Moving columns</h3><p>You can use <code>move</code> to move columns in the table. For example, if we wanted to move the &quot;name&quot; column from <code>ls</code> after the &quot;size&quot; column, we could do:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | move name --after size
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 #  \u2502 type \u2502  size   \u2502       name        \u2502   modified   \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  0 \u2502 dir  \u2502   256 B \u2502 Applications      \u2502 3 days ago   \u2502
\u2502  1 \u2502 dir  \u2502   256 B \u2502 Data              \u2502 2 weeks ago  \u2502
\u2502  2 \u2502 dir  \u2502   448 B \u2502 Desktop           \u2502 2 hours ago  \u2502
\u2502  3 \u2502 dir  \u2502   192 B \u2502 Disks             \u2502 a week ago   \u2502
\u2502  4 \u2502 dir  \u2502   416 B \u2502 Documents         \u2502 4 days ago   \u2502
...
</code></pre></div><h3 id="renaming-columns" tabindex="-1"><a class="header-anchor" href="#renaming-columns" aria-hidden="true">#</a> Renaming columns</h3><p>You can also <code>rename</code> columns in a table by passing it through the rename command. If we wanted to run <code>ls</code> and rename the columns, we can use this example:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; ls | rename filename filetype filesize date
\u256D\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256E
\u2502 #  \u2502     filename      \u2502 filetype \u2502 filesize \u2502     date     \u2502
\u251C\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  0 \u2502 Applications      \u2502 dir      \u2502    256 B \u2502 3 days ago   \u2502
\u2502  1 \u2502 Data              \u2502 dir      \u2502    256 B \u2502 2 weeks ago  \u2502
\u2502  2 \u2502 Desktop           \u2502 dir      \u2502    448 B \u2502 2 hours ago  \u2502
\u2502  3 \u2502 Disks             \u2502 dir      \u2502    192 B \u2502 a week ago   \u2502
\u2502  4 \u2502 Documents         \u2502 dir      \u2502    416 B \u2502 4 days ago   \u2502
...
</code></pre></div>`,6);function Be(Fe,Ke){const a=i("RouterLink");return d(),c("div",null,[h,e("p",null,[u,n(a,{to:"/book/commands/sort-by.html"},{default:s(()=>[g]),_:1}),m]),p,_,f,e("p",null,[w,n(a,{to:"/book/commands/select.html"},{default:s(()=>[x]),_:1}),b]),y,e("p",null,[v,n(a,{to:"/book/commands/get.html"},{default:s(()=>[k]),_:1}),B]),F,K,e("p",null,[z,n(a,{to:"/book/commands/select.html"},{default:s(()=>[$]),_:1}),T]),L,W,e("ul",null,[e("li",null,[n(a,{to:"/book/commands/select.html"},{default:s(()=>[N]),_:1}),D]),e("li",null,[n(a,{to:"/book/commands/get.html"},{default:s(()=>[q]),_:1}),Y])]),C,e("p",null,[S,n(a,{to:"/book/commands/get.html"},{default:s(()=>[A]),_:1}),I]),V,j,R,e("p",null,[M,n(a,{to:"/book/commands/append.html"},{default:s(()=>[O]),_:1}),E]),G,H,e("p",null,[U,n(a,{to:"/book/commands/merge.html"},{default:s(()=>[J]),_:1}),P]),Q,e("p",null,[X,n(a,{to:"/book/commands/reduce.html"},{default:s(()=>[Z]),_:1}),ee]),te,ae,e("p",null,[ne,n(a,{to:"/book/commands/insert.html"},{default:s(()=>[se]),_:1}),oe]),le,e("p",null,[ie,n(a,{to:"/book/commands/save.html"},{default:s(()=>[de]),_:1}),ce]),re,he,e("p",null,[ue,n(a,{to:"/book/commands/insert.html"},{default:s(()=>[ge]),_:1}),me,n(a,{to:"/book/commands/update.html"},{default:s(()=>[pe]),_:1}),_e]),fe,we,xe,e("p",null,[be,n(a,{to:"/book/commands/upsert.html"},{default:s(()=>[ye]),_:1}),ve]),ke])}const $e=l(r,[["render",Be],["__file","working_with_tables.html.vue"]]);export{$e as default};
