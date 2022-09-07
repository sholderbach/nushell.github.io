import{_ as s,r as l,o as d,c,a as e,b as o,w as a,d as t,e as i}from"./app.8034769a.js";const r={},h=e("h1",{id:"advanced-table-workflows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#advanced-table-workflows","aria-hidden":"true"},"#"),t(" Advanced table workflows")],-1),_=e("h3",{id:"merging-tables-of-different-size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#merging-tables-of-different-size","aria-hidden":"true"},"#"),t(" Merging tables of different size")],-1),u=t("Examples shown in "),g=e("code",null,"Working with tables",-1),f=t(" work fine when our tables have equal amount of rows but what if we want to merge tables of different sizes?"),m=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> let first = [[a b]; [1 2] [3 4]]
> let second = [[c d]; [5 6]]
> $first | merge { $second }
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 5 \u2502 6
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 1 \u2502 3 \u2502 4 \u2502 \u274E\u2502 \u274E
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
`)])],-1),b=t("Second row in columns "),w=e("code",null,"c",-1),p=t(" and "),x=e("code",null,"d",-1),k=t(" is empty because our "),v=e("code",null,"second",-1),$=t(" table only contained a single row so nushell has nothing to fill the remaining rows with. But what if we wanted the smaller table to 'wrap around' and keep filling the rows? For that we can use the "),z=e("code",null,"group",-1),B=t(" command to split the larger table into subtables, merge each of them with the smaller table and then combine the merged tables together using "),N=e("code",null,"flatten",-1),V=t(" command like this:"),y=i(`<div class="language-text ext-text"><pre class="language-text"><code>&gt; let first = [[a b]; [1 2] [3 4]]
&gt; let second = [[c d]; [3 4]]
&gt; $first | group ($second | length)
  | each {|it|
    merge {$second}
  } | flatten
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 5 \u2502 6
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 1 \u2502 3 \u2502 4 \u2502 5 \u2502 6
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div><p>Can we do that with more than two tables? Sure we can! Let&#39;s add a third table:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; let third = [[e f]; [7 8]]
</code></pre></div><p>We could join all three tables like this:</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $first | group ($second|length)
   | each {|it|
     merge { $second  }
   }
   | flatten
   | group ($third | length)
   | each {|it|
     merge { $third }
   }
   | flatten
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d \u2502 e \u2502 f
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 5 \u2502 6 \u2502 7 \u2502 8
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 1 \u2502 3 \u2502 4 \u2502 5 \u2502 6 \u2502 7 \u2502 8
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
</code></pre></div>`,5),C=t("Or just like last time we could use the "),L=e("code",null,"reduce",-1),S=t(" command to merge tables together recursively:"),j=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`> [$first_table $second_table $third_table]|reduce {|it, acc|
    $acc
    | group ($it | length)
    | each {|x|
        merge {$it}
    }
    | flatten
}
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u252C\u2500\u2500\u2500
 # \u2502 a \u2502 b \u2502 c \u2502 d \u2502 e \u2502 f
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 0 \u2502 1 \u2502 2 \u2502 5 \u2502 6 \u2502 7 \u2502 8
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u253C\u2500\u2500\u2500
 1 \u2502 3 \u2502 4 \u2502 5 \u2502 6 \u2502 7 \u2502 8
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500
`)])],-1);function E(R,W){const n=l("RouterLink");return d(),c("div",null,[h,_,e("p",null,[u,o(n,{to:"/book/working_with_tables.html"},{default:a(()=>[g]),_:1}),f]),m,e("p",null,[b,w,p,x,k,v,$,o(n,{to:"/book/commands/group.html"},{default:a(()=>[z]),_:1}),B,o(n,{to:"/book/commands/flatten.html"},{default:a(()=>[N]),_:1}),V]),y,e("p",null,[C,o(n,{to:"/book/docs/reduce.html"},{default:a(()=>[L]),_:1}),S]),j])}const A=s(r,[["render",E],["__file","tables.html.vue"]]);export{A as default};
