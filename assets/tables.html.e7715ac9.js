import{_ as l,z as s,A as d,X as e,C as t,T as a,$ as o,a6 as c,Q as r}from"./framework.3d018c9f.js";const i={},h=e("h1",{id:"advanced-table-workflows",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#advanced-table-workflows","aria-hidden":"true"},"#"),t(" Advanced table workflows")],-1),u=e("h3",{id:"merging-tables-of-different-size",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#merging-tables-of-different-size","aria-hidden":"true"},"#"),t(" Merging tables of different size")],-1),g=e("code",null,"Working with tables",-1),f=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> let first = [[a b]; [1 2] [3 4]]
> let second = [[c d]; [5 6]]
> $first | merge { $second }
───┬───┬───┬───┬───
 # │ a │ b │ c │ d
───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 5 │ 6
───┼───┼───┼───┼───
 1 │ 3 │ 4 │ ❎│ ❎
───┴───┴───┴───┴───
`)])],-1),_=e("code",null,"c",-1),m=e("code",null,"d",-1),b=e("code",null,"second",-1),w=e("code",null,"group",-1),p=e("code",null,"flatten",-1),x=c(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let first = [[a b]; [1 2] [3 4]]
&gt; let second = [[c d]; [3 4]]
&gt; $first | group ($second | length)
  | each {|it|
    merge {$second}
  } | flatten
───┬───┬───┬───┬───
 # │ a │ b │ c │ d
───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 5 │ 6
───┼───┼───┼───┼───
 1 │ 3 │ 4 │ 5 │ 6
───┴───┴───┴───┴───
</code></pre></div><p>Can we do that with more than two tables? Sure we can! Let&#39;s add a third table:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let third = [[e f]; [7 8]]
</code></pre></div><p>We could join all three tables like this:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; $first | group ($second|length)
   | each {|it|
     merge { $second  }
   }
   | flatten
   | group ($third | length)
   | each {|it|
     merge { $third }
   }
   | flatten
───┬───┬───┬───┬───┬───┬───
 # │ a │ b │ c │ d │ e │ f
───┼───┼───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 5 │ 6 │ 7 │ 8
───┼───┼───┼───┼───┼───┼───
 1 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8
───┴───┴───┴───┴───┴───┴───
</code></pre></div>`,5),k=e("code",null,"reduce",-1),$=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> [$first_table $second_table $third_table]|reduce {|it, acc|
    $acc
    | group ($it | length)
    | each {|x|
        merge {$it}
    }
    | flatten
}
───┬───┬───┬───┬───┬───┬───
 # │ a │ b │ c │ d │ e │ f
───┼───┼───┼───┼───┼───┼───
 0 │ 1 │ 2 │ 5 │ 6 │ 7 │ 8
───┼───┼───┼───┼───┼───┼───
 1 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8
───┴───┴───┴───┴───┴───┴───
`)])],-1);function v(z,B){const n=r("RouterLink");return s(),d("div",null,[h,u,e("p",null,[t("Examples shown in "),a(n,{to:"/book/working_with_tables.html"},{default:o(()=>[g]),_:1}),t(" work fine when our tables have equal amount of rows but what if we want to merge tables of different sizes?")]),f,e("p",null,[t("Second row in columns "),_,t(" and "),m,t(" is empty because our "),b,t(" table only contained a single row so nushell has nothing to fill the remaining rows with. But what if we wanted the smaller table to 'wrap around' and keep filling the rows? For that we can use the "),a(n,{to:"/book/commands/group.html"},{default:o(()=>[w]),_:1}),t(" command to split the larger table into subtables, merge each of them with the smaller table and then combine the merged tables together using "),a(n,{to:"/book/commands/flatten.html"},{default:o(()=>[p]),_:1}),t(" command like this:")]),x,e("p",null,[t("Or just like last time we could use the "),a(n,{to:"/book/docs/reduce.html"},{default:o(()=>[k]),_:1}),t(" command to merge tables together recursively:")]),$])}const N=l(i,[["render",v],["__file","tables.html.vue"]]);export{N as default};
