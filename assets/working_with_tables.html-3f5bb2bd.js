import{_ as l,M as i,p as d,q as c,Q as e,t,N as n,U as s,a1 as o}from"./framework-344bb0e4.js";const r={},h=o(`<h1 id="working-with-tables" tabindex="-1"><a class="header-anchor" href="#working-with-tables" aria-hidden="true">#</a> Working with tables</h1><p>One of the common ways of seeing data in Nu is through a table. Nu comes with a number of commands for working with tables to make it convenient to find what you&#39;re looking for, and for narrowing down the data to just what you need.</p><p>To start off, let&#39;s get a table that we can use:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; ls
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
</code></pre></div><h2 id="sorting-the-data" tabindex="-1"><a class="header-anchor" href="#sorting-the-data" aria-hidden="true">#</a> Sorting the data</h2>`,5),u=e("code",null,"sort-by",-1),m=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | sort-by size
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
`)])],-1),g=e("p",null,'We can sort a table by any column that can be compared. For example, we could also have sorted the above using the "name", "accessed", or "modified" columns.',-1),p=e("h2",{id:"selecting-the-data-you-want",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#selecting-the-data-you-want","aria-hidden":"true"},"#"),t(" Selecting the data you want")],-1),_=e("code",null,"select",-1),f=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | select name size
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
`)])],-1),w=e("p",null,"This helps to create a table that's more focused on what we need. Next, let's say we want to only look at the 5 smallest files in this directory:",-1),x=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | sort-by size | first 5
───┬──────────────┬──────┬────────┬────────────
 # │ name         │ type │ size   │ modified
───┼──────────────┼──────┼────────┼────────────
 0 │ lib.rs       │ File │  330 B │ 5 days ago
 1 │ signature.rs │ File │ 1.2 KB │ 5 days ago
 2 │ path.rs      │ File │ 2.1 KB │ 5 days ago
 3 │ files.rs     │ File │ 4.6 KB │ 5 days ago
 4 │ shapes.rs    │ File │ 4.7 KB │ 5 days ago
───┴──────────────┴──────┴────────┴────────────
`)])],-1),b=e("p",null,[t("You'll notice we first sort the table by size to get to the smallest file, and then we use the "),e("code",null,"first 5"),t(" to return the first 5 rows of the table.")],-1),y=e("code",null,"skip",-1),v=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | sort-by size | first 5 | skip 2
───┬───────────┬──────┬────────┬────────────
 # │ name      │ type │ size   │ modified
───┼───────────┼──────┼────────┼────────────
 0 │ path.rs   │ File │ 2.1 KB │ 5 days ago
 1 │ files.rs  │ File │ 4.6 KB │ 5 days ago
 2 │ shapes.rs │ File │ 4.7 KB │ 5 days ago
───┴───────────┴──────┴────────┴────────────
`)])],-1),B=e("p",null,"We've narrowed it to three rows we care about.",-1),k=e("code",null,"select",-1),F=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | sort-by name
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

> ls | sort-by name | select 5
───┬───────────────┬──────┬─────────┬────────────
 # │ name          │ type │ size    │ modified
───┼───────────────┼──────┼─────────┼────────────
 0 │ shapes.rs     │ File │  4.7 KB │ 5 days ago
───┴───────────────┴──────┴─────────┴────────────
`)])],-1),K=e("h2",{id:"getting-data-out-of-a-table",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-data-out-of-a-table","aria-hidden":"true"},"#"),t(" Getting data out of a table")],-1),z=e("code",null,"get",-1),$=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | get name
───┬───────────────
 0 │ files.rs
 1 │ lib.rs
 2 │ lite_parse.rs
 3 │ parse.rs
 4 │ path.rs
 5 │ shapes.rs
 6 │ signature.rs
───┴───────────────
`)])],-1),T=e("p",null,"We now have the values for each of the filenames.",-1),L=e("code",null,"select",-1),N=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | select name
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
`)])],-1),W=e("p",null,"These look very similar! Let's see if we can spell out the difference between these two commands to make it clear:",-1),D=e("code",null,"select",-1),I=e("code",null,"get",-1),Y=e("p",null,"The one way to tell these apart looking at the table is that the column names are missing, which lets us know that this is going to be a list of values we can work with.",-1),C=e("code",null,"get",-1),S=e("h2",{id:"changing-data-in-a-table",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#changing-data-in-a-table","aria-hidden":"true"},"#"),t(" Changing data in a table")],-1),j=e("p",null,"In addition to selecting data from a table, we can also update what the table has. We may want to combine tables, add new columns, or edit the contents of a cell. In Nu, rather than editing in place, each of the commands in the section will return a new table in the pipeline.",-1),A=e("h3",{id:"concatenating-tables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#concatenating-tables","aria-hidden":"true"},"#"),t(" Concatenating Tables")],-1),V=e("code",null,"append",-1),q=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> let $first = [[a b]; [1 2]]
> let $second = [[a b]; [3 4]]
> $first | append $second
───┬───┬───
 # │ a │ b
───┼───┼───
 0 │ 1 │ 2
 1 │ 3 │ 4
───┴───┴───
`)])],-1),M=e("h3",{id:"merging-tables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#merging-tables","aria-hidden":"true"},"#"),t(" Merging Tables")],-1),R=e("code",null,"merge",-1),O=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let $first = [[a b]; [1 2]]
&gt; let $second = [[c d]; [3 4]]
&gt; $first | merge $second
───┬───┬───┬───┬───
 # │ a │ b │ c │ d
───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 3 │ 4
───┴───┴───┴───┴───
</code></pre></div><p>Let&#39;s add a third table:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let $third = [[e f]; [5 6]]
</code></pre></div><p>We could join all three tables together like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; $first | merge $second  | merge $third
───┬───┬───┬───┬───┬───┬───
 # │ a │ b │ c │ d │ e │ f
───┼───┼───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6
───┴───┴───┴───┴───┴───┴───
</code></pre></div>`,5),U=e("code",null,"reduce",-1),E=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> [$first $second $third] | reduce {|it, acc| $acc | merge $it }
───┬───┬───┬───┬───┬───┬───
 # │ a │ b │ c │ d │ e │ f
───┼───┼───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6
───┴───┴───┴───┴───┴───┴───
`)])],-1),G=e("h3",{id:"adding-a-new-column",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adding-a-new-column","aria-hidden":"true"},"#"),t(" Adding a new column")],-1),H=e("code",null,"insert",-1),Q=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
</code></pre></div><p>Let&#39;s add a column called &quot;next_edition&quot; with the value 2021:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021
──────────────┬──────
 edition      │ 2018
 next_edition │ 2021
──────────────┴──────
</code></pre></div><p>This visual may be slightly confusing, because it looks like what we&#39;ve just done is add a row. In this case, remember: rows have numbers, columns have names. If it still is confusing, note that appending one more row will make the table render as expected:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml | insert next_edition 2021 | append {edition: 2021 next_edition: 2024}
───┬─────────┬──────────────
 # │ edition │ next_edition
───┼─────────┼──────────────
 0 │    2018 │         2021
 1 │    2021 │         2024
───┴─────────┴──────────────

</code></pre></div><p>Notice that if we open the original file, the contents have stayed the same:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
</code></pre></div>`,7),J=e("code",null,"save",-1),P=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml | insert next_edition 2021 | save rustfmt2.toml
> open rustfmt2.toml
──────────────┬──────
 edition      │ 2018
 next_edition │ 2021
──────────────┴──────
`)])],-1),X=e("h3",{id:"updating-a-column",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#updating-a-column","aria-hidden":"true"},"#"),t(" Updating a column")],-1),Z=e("code",null,"insert",-1),ee=e("code",null,"update",-1),te=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml
─────────┬──────
 edition │ 2018
─────────┴──────
`)])],-1),ae=e("p",null,"And now, let's update the edition to point at the next edition we hope to support:",-1),ne=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> open rustfmt.toml | update edition 2021
─────────┬──────
 edition │ 2021
─────────┴──────
`)])],-1),se=e("code",null,"upsert",-1),oe=e("h3",{id:"moving-columns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#moving-columns","aria-hidden":"true"},"#"),t(" Moving columns")],-1),le=e("code",null,"move",-1),ie=e("code",null,"ls",-1),de=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | move name --after size
╭────┬──────┬─────────┬───────────────────┬──────────────╮
│ #  │ type │  size   │       name        │   modified   │
├────┼──────┼─────────┼───────────────────┼──────────────┤
│  0 │ dir  │   256 B │ Applications      │ 3 days ago   │
│  1 │ dir  │   256 B │ Data              │ 2 weeks ago  │
│  2 │ dir  │   448 B │ Desktop           │ 2 hours ago  │
│  3 │ dir  │   192 B │ Disks             │ a week ago   │
│  4 │ dir  │   416 B │ Documents         │ 4 days ago   │
...
`)])],-1),ce=e("h3",{id:"renaming-columns",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#renaming-columns","aria-hidden":"true"},"#"),t(" Renaming columns")],-1),re=e("code",null,"rename",-1),he=e("code",null,"ls",-1),ue=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> ls | rename filename filetype filesize date
╭────┬───────────────────┬──────────┬──────────┬──────────────╮
│ #  │     filename      │ filetype │ filesize │     date     │
├────┼───────────────────┼──────────┼──────────┼──────────────┤
│  0 │ Applications      │ dir      │    256 B │ 3 days ago   │
│  1 │ Data              │ dir      │    256 B │ 2 weeks ago  │
│  2 │ Desktop           │ dir      │    448 B │ 2 hours ago  │
│  3 │ Disks             │ dir      │    192 B │ a week ago   │
│  4 │ Documents         │ dir      │    416 B │ 4 days ago   │
...
`)])],-1);function me(ge,pe){const a=i("RouterLink");return d(),c("div",null,[h,e("p",null,[t("We can sort a table by calling the "),n(a,{to:"/commands/docs/sort-by.html"},{default:s(()=>[u]),_:1}),t(" command and telling it which columns we want to use in the sort. Let's say we wanted to sort our table by the size of the file:")]),m,g,p,e("p",null,[t("We can select data from a table by choosing to select specific columns or specific rows. Let's "),n(a,{to:"/commands/docs/select.html"},{default:s(()=>[_]),_:1}),t(" a few columns from our table to use:")]),f,w,x,b,e("p",null,[t("You can also "),n(a,{to:"/commands/docs/skip.html"},{default:s(()=>[y]),_:1}),t(" rows that you don't want. Let's skip the first two of the 5 rows we returned above:")]),v,B,e("p",null,[t("Let's look at a few other commands for selecting data. You may have wondered why the rows of the table are numbers. This acts as a handy way to get to a single row. Let's sort our table by the file name and then pick one of the rows with the "),n(a,{to:"/commands/docs/select.html"},{default:s(()=>[k]),_:1}),t(" command using its row number:")]),F,K,e("p",null,[t("So far, we've worked with tables by trimming the table down to only what we need. Sometimes we may want to go a step further and only look at the values in the cells themselves rather than taking a whole column. Let's say, for example, we wanted to only get a list of the names of the files. For this, we use the "),n(a,{to:"/commands/docs/get.html"},{default:s(()=>[z]),_:1}),t(" command:")]),$,T,e("p",null,[t("This might look like the "),n(a,{to:"/commands/docs/select.html"},{default:s(()=>[L]),_:1}),t(" command we saw earlier, so let's put that here as well to compare the two:")]),N,W,e("ul",null,[e("li",null,[n(a,{to:"/commands/docs/select.html"},{default:s(()=>[D]),_:1}),t(" - creates a new table which includes only the columns specified")]),e("li",null,[n(a,{to:"/commands/docs/get.html"},{default:s(()=>[I]),_:1}),t(" - returns the values inside the column specified as a list")])]),Y,e("p",null,[t("The "),n(a,{to:"/commands/docs/get.html"},{default:s(()=>[C]),_:1}),t(" command can go one step further and take a path to data deeper in the table. This simplifies working with more complex data, like the structures you might find in a .json file.")]),S,j,A,e("p",null,[t("We can concatenate tables with identical column names using "),n(a,{to:"/commands/docs/append.html"},{default:s(()=>[V]),_:1}),t(":")]),q,M,e("p",null,[t("We can use the "),n(a,{to:"/commands/docs/merge.html"},{default:s(()=>[R]),_:1}),t(" command to merge two (or more) tables together")]),O,e("p",null,[t("Or we could use the "),n(a,{to:"/commands/docs/reduce.html"},{default:s(()=>[U]),_:1}),t(" command to dynamically merge all tables:")]),E,G,e("p",null,[t("We can use the "),n(a,{to:"/commands/docs/insert.html"},{default:s(()=>[H]),_:1}),t(" command to add a new column to the table. Let's look at an example:")]),Q,e("p",null,[t("Changes in Nu are functional changes, meaning that they work on values themselves rather than trying to cause a permanent change. This lets us do many different types of work in our pipeline until we're ready to write out the result with any changes we'd like if we choose to. Here we could write out the result using the "),n(a,{to:"/commands/docs/save.html"},{default:s(()=>[J]),_:1}),t(" command:")]),P,X,e("p",null,[t("In a similar way to the "),n(a,{to:"/commands/docs/insert.html"},{default:s(()=>[Z]),_:1}),t(" command, we can also use the "),n(a,{to:"/commands/docs/update.html"},{default:s(()=>[ee]),_:1}),t(" command to change the contents of a column to a new value. To see it in action let's open the same file:")]),te,ae,ne,e("p",null,[t("You can also use the "),n(a,{to:"/commands/docs/upsert.html"},{default:s(()=>[se]),_:1}),t(" command to insert or update depending on whether the column already exists.")]),oe,e("p",null,[t("You can use "),n(a,{to:"/commands/docs/move.html"},{default:s(()=>[le]),_:1}),t(' to move columns in the table. For example, if we wanted to move the "name" column from '),n(a,{to:"/commands/docs/ls.html"},{default:s(()=>[ie]),_:1}),t(' after the "size" column, we could do:')]),de,ce,e("p",null,[t("You can also "),n(a,{to:"/commands/docs/rename.html"},{default:s(()=>[re]),_:1}),t(" columns in a table by passing it through the rename command. If we wanted to run "),n(a,{to:"/commands/docs/ls.html"},{default:s(()=>[he]),_:1}),t(" and rename the columns, we can use this example:")]),ue])}const fe=l(r,[["render",me],["__file","working_with_tables.html.vue"]]);export{fe as default};
