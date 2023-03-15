import{_ as e,p as n,q as t,a1 as d}from"./framework-344bb0e4.js";const i={},a=d(`<h1 id="polars-vs-pandas-vs-nushell" tabindex="-1"><a class="header-anchor" href="#polars-vs-pandas-vs-nushell" aria-hidden="true">#</a> Polars vs Pandas vs Nushell</h1><p>A dataframe example based on https://studioterabyte.nl/en/blog/polars-vs-pandas</p><h2 id="_1-opening-the-file-and-show-the-shape-of-the-dataframe" tabindex="-1"><a class="header-anchor" href="#_1-opening-the-file-and-show-the-shape-of-the-dataframe" aria-hidden="true">#</a> 1. Opening the file and show the shape of the DataFrame</h2><div class="language-console" data-ext="console"><pre class="language-console"><code>&gt; let df = (open-df NYCTaxi.csv)
</code></pre></div><div class="language-console" data-ext="console"><pre class="language-console"><code>&gt; $df | shape
╭───┬─────────┬─────────╮
│ # │  rows   │ columns │
├───┼─────────┼─────────┤
│ 0 │ 1458644 │      11 │
├───┼─────────┼─────────┤
│ # │  rows   │ columns │
╰───┴─────────┴─────────╯
</code></pre></div><h2 id="_2-opening-the-file-and-show-the-first-5-rows" tabindex="-1"><a class="header-anchor" href="#_2-opening-the-file-and-show-the-first-5-rows" aria-hidden="true">#</a> 2. Opening the file and show the first 5 rows</h2><div class="language-console" data-ext="console"><pre class="language-console"><code>&gt; $df | first 5
╭───┬───────────┬───────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬──────────────┬──────────────╮
│ # │    id     │ vendor_id │ pickup_dateti │ dropoff_datet │ passenger_cou │ pickup_longit │ pickup_latitu │ dropoff_longi │ dropoff_latit │ store_and_fw │ trip_duratio │
│   │           │           │ me            │ ime           │ nt            │ ude           │ de            │ tude          │ ude           │ d_flag       │ n            │
├───┼───────────┼───────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼──────────────┼──────────────┤
│ 0 │ id2875421 │         2 │ 2016-03-14    │ 2016-03-14    │             1 │        -73.98 │         40.77 │        -73.96 │         40.77 │ N            │          455 │
│   │           │           │ 17:24:55      │ 17:32:30      │               │               │               │               │               │              │              │
│ 1 │ id2377394 │         1 │ 2016-06-12    │ 2016-06-12    │             1 │        -73.98 │         40.74 │        -74.00 │         40.73 │ N            │          663 │
│   │           │           │ 00:43:35      │ 00:54:38      │               │               │               │               │               │              │              │
│ 2 │ id3858529 │         2 │ 2016-01-19    │ 2016-01-19    │             1 │        -73.98 │         40.76 │        -74.01 │         40.71 │ N            │         2124 │
│   │           │           │ 11:35:24      │ 12:10:48      │               │               │               │               │               │              │              │
│ 3 │ id3504673 │         2 │ 2016-04-06    │ 2016-04-06    │             1 │        -74.01 │         40.72 │        -74.01 │         40.71 │ N            │          429 │
│   │           │           │ 19:32:31      │ 19:39:40      │               │               │               │               │               │              │              │
│ 4 │ id2181028 │         2 │ 2016-03-26    │ 2016-03-26    │             1 │        -73.97 │         40.79 │        -73.97 │         40.78 │ N            │          435 │
│   │           │           │ 13:30:55      │ 13:38:10      │               │               │               │               │               │              │              │
├───┼───────────┼───────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼──────────────┼──────────────┤
│ # │    id     │ vendor_id │ pickup_dateti │ dropoff_datet │ passenger_cou │ pickup_longit │ pickup_latitu │ dropoff_longi │ dropoff_latit │ store_and_fw │ trip_duratio │
│   │           │           │ me            │ ime           │ nt            │ ude           │ de            │ tude          │ ude           │ d_flag       │ n            │
╰───┴───────────┴───────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴──────────────┴──────────────╯
</code></pre></div><h2 id="_3-opening-the-file-and-get-the-length-of-all-strings-in-the-id-column" tabindex="-1"><a class="header-anchor" href="#_3-opening-the-file-and-get-the-length-of-all-strings-in-the-id-column" aria-hidden="true">#</a> 3. Opening the file and get the length of all strings in the &quot;id&quot; column</h2><div class="language-console" data-ext="console"><pre class="language-console"><code>&gt; let ids = ($df | first 5 | get id | str-lengths)
&gt; $df | first 5 | append $ids | rename id_x vendor_id_length
╭───┬───────────┬───────────┬──────────────┬──────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────╮
│ # │    id     │ vendor_id │ pickup_datet │ dropoff_date │ passenger_c │ pickup_long │ pickup_lati │ dropoff_lon │ dropoff_lat │ store_and_f │ trip_durati │ vendor_id_l │
│   │           │           │ ime          │ time         │ ount        │ itude       │ tude        │ gitude      │ itude       │ wd_flag     │ on          │ ength       │
├───┼───────────┼───────────┼──────────────┼──────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ 0 │ id2875421 │         2 │ 2016-03-14   │ 2016-03-14   │           1 │      -73.98 │       40.77 │      -73.96 │       40.77 │ N           │         455 │           9 │
│   │           │           │ 17:24:55     │ 17:32:30     │             │             │             │             │             │             │             │             │
│ 1 │ id2377394 │         1 │ 2016-06-12   │ 2016-06-12   │           1 │      -73.98 │       40.74 │      -74.00 │       40.73 │ N           │         663 │           9 │
│   │           │           │ 00:43:35     │ 00:54:38     │             │             │             │             │             │             │             │             │
│ 2 │ id3858529 │         2 │ 2016-01-19   │ 2016-01-19   │           1 │      -73.98 │       40.76 │      -74.01 │       40.71 │ N           │        2124 │           9 │
│   │           │           │ 11:35:24     │ 12:10:48     │             │             │             │             │             │             │             │             │
│ 3 │ id3504673 │         2 │ 2016-04-06   │ 2016-04-06   │           1 │      -74.01 │       40.72 │      -74.01 │       40.71 │ N           │         429 │           9 │
│   │           │           │ 19:32:31     │ 19:39:40     │             │             │             │             │             │             │             │             │
│ 4 │ id2181028 │         2 │ 2016-03-26   │ 2016-03-26   │           1 │      -73.97 │       40.79 │      -73.97 │       40.78 │ N           │         435 │           9 │
│   │           │           │ 13:30:55     │ 13:38:10     │             │             │             │             │             │             │             │             │
├───┼───────────┼───────────┼──────────────┼──────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ # │    id     │ vendor_id │ pickup_datet │ dropoff_date │ passenger_c │ pickup_long │ pickup_lati │ dropoff_lon │ dropoff_lat │ store_and_f │ trip_durati │ vendor_id_l │
│   │           │           │ ime          │ time         │ ount        │ itude       │ tude        │ gitude      │ itude       │ wd_flag     │ on          │ ength       │
╰───┴───────────┴───────────┴──────────────┴──────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────╯
</code></pre></div><p>Here&#39;s an alternate approach using <code>with-column</code></p><div class="language-console" data-ext="console"><pre class="language-console"><code>&gt; $df | first 5 | with-column ($df | first 5 | get id | str-lengths) --name vendor_id_length
╭───┬───────────┬───────────┬──────────────┬──────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────┬─────────────╮
│ # │    id     │ vendor_id │ pickup_datet │ dropoff_date │ passenger_c │ pickup_long │ pickup_lati │ dropoff_lon │ dropoff_lat │ store_and_f │ trip_durati │ vendor_id_l │
│   │           │           │ ime          │ time         │ ount        │ itude       │ tude        │ gitude      │ itude       │ wd_flag     │ on          │ ength       │
├───┼───────────┼───────────┼──────────────┼──────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ 0 │ id2875421 │         2 │ 2016-03-14   │ 2016-03-14   │           1 │      -73.98 │       40.77 │      -73.96 │       40.77 │ N           │         455 │           9 │
│   │           │           │ 17:24:55     │ 17:32:30     │             │             │             │             │             │             │             │             │
│ 1 │ id2377394 │         1 │ 2016-06-12   │ 2016-06-12   │           1 │      -73.98 │       40.74 │      -74.00 │       40.73 │ N           │         663 │           9 │
│   │           │           │ 00:43:35     │ 00:54:38     │             │             │             │             │             │             │             │             │
│ 2 │ id3858529 │         2 │ 2016-01-19   │ 2016-01-19   │           1 │      -73.98 │       40.76 │      -74.01 │       40.71 │ N           │        2124 │           9 │
│   │           │           │ 11:35:24     │ 12:10:48     │             │             │             │             │             │             │             │             │
│ 3 │ id3504673 │         2 │ 2016-04-06   │ 2016-04-06   │           1 │      -74.01 │       40.72 │      -74.01 │       40.71 │ N           │         429 │           9 │
│   │           │           │ 19:32:31     │ 19:39:40     │             │             │             │             │             │             │             │             │
│ 4 │ id2181028 │         2 │ 2016-03-26   │ 2016-03-26   │           1 │      -73.97 │       40.79 │      -73.97 │       40.78 │ N           │         435 │           9 │
│   │           │           │ 13:30:55     │ 13:38:10     │             │             │             │             │             │             │             │             │
├───┼───────────┼───────────┼──────────────┼──────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┼─────────────┤
│ # │    id     │ vendor_id │ pickup_datet │ dropoff_date │ passenger_c │ pickup_long │ pickup_lati │ dropoff_lon │ dropoff_lat │ store_and_f │ trip_durati │ vendor_id_l │
│   │           │           │ ime          │ time         │ ount        │ itude       │ tude        │ gitude      │ itude       │ wd_flag     │ on          │ ength       │
╰───┴───────────┴───────────┴──────────────┴──────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────┴─────────────╯
</code></pre></div><h2 id="_4-opening-the-file-and-apply-a-function-to-the-trip-duration-to-divide-the-number-by-60-to-go-from-the-second-value-to-a-minute-value" tabindex="-1"><a class="header-anchor" href="#_4-opening-the-file-and-apply-a-function-to-the-trip-duration-to-divide-the-number-by-60-to-go-from-the-second-value-to-a-minute-value" aria-hidden="true">#</a> 4. Opening the file and apply a function to the &quot;trip_duration&quot; to divide the number by 60 to go from the second value to a minute value</h2><div class="language-console" data-ext="console"><pre class="language-console"><code>&gt; $df | first 5 | with-column ((col trip_duration) / 60.0)
╭───┬───────────┬───────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬──────────────┬──────────────╮
│ # │    id     │ vendor_id │ pickup_dateti │ dropoff_datet │ passenger_cou │ pickup_longit │ pickup_latitu │ dropoff_longi │ dropoff_latit │ store_and_fw │ trip_duratio │
│   │           │           │ me            │ ime           │ nt            │ ude           │ de            │ tude          │ ude           │ d_flag       │ n            │
├───┼───────────┼───────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼──────────────┼──────────────┤
│ 0 │ id2875421 │         2 │ 2016-03-14    │ 2016-03-14    │             1 │        -73.98 │         40.77 │        -73.96 │         40.77 │ N            │         7.58 │
│   │           │           │ 17:24:55      │ 17:32:30      │               │               │               │               │               │              │              │
│ 1 │ id2377394 │         1 │ 2016-06-12    │ 2016-06-12    │             1 │        -73.98 │         40.74 │        -74.00 │         40.73 │ N            │        11.05 │
│   │           │           │ 00:43:35      │ 00:54:38      │               │               │               │               │               │              │              │
│ 2 │ id3858529 │         2 │ 2016-01-19    │ 2016-01-19    │             1 │        -73.98 │         40.76 │        -74.01 │         40.71 │ N            │        35.40 │
│   │           │           │ 11:35:24      │ 12:10:48      │               │               │               │               │               │              │              │
│ 3 │ id3504673 │         2 │ 2016-04-06    │ 2016-04-06    │             1 │        -74.01 │         40.72 │        -74.01 │         40.71 │ N            │         7.15 │
│   │           │           │ 19:32:31      │ 19:39:40      │               │               │               │               │               │              │              │
│ 4 │ id2181028 │         2 │ 2016-03-26    │ 2016-03-26    │             1 │        -73.97 │         40.79 │        -73.97 │         40.78 │ N            │         7.25 │
│   │           │           │ 13:30:55      │ 13:38:10      │               │               │               │               │               │              │              │
├───┼───────────┼───────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼──────────────┼──────────────┤
│ # │    id     │ vendor_id │ pickup_dateti │ dropoff_datet │ passenger_cou │ pickup_longit │ pickup_latitu │ dropoff_longi │ dropoff_latit │ store_and_fw │ trip_duratio │
│   │           │           │ me            │ ime           │ nt            │ ude           │ de            │ tude          │ ude           │ d_flag       │ n            │
╰───┴───────────┴───────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴──────────────┴──────────────╯
</code></pre></div><h2 id="_5-opening-the-file-and-filtering-out-all-rows-with-a-trip-duration-shorther-than-500-seconds" tabindex="-1"><a class="header-anchor" href="#_5-opening-the-file-and-filtering-out-all-rows-with-a-trip-duration-shorther-than-500-seconds" aria-hidden="true">#</a> 5. Opening the file and filtering out all rows with a trip duration shorther than 500 seconds</h2><div class="language-console" data-ext="console"><pre class="language-console"><code>&gt; $df | filter-with ((col trip_duration) &gt;= 500) | first 5
╭───┬───────────┬───────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬───────────────┬──────────────┬──────────────╮
│ # │    id     │ vendor_id │ pickup_dateti │ dropoff_datet │ passenger_cou │ pickup_longit │ pickup_latitu │ dropoff_longi │ dropoff_latit │ store_and_fw │ trip_duratio │
│   │           │           │ me            │ ime           │ nt            │ ude           │ de            │ tude          │ ude           │ d_flag       │ n            │
├───┼───────────┼───────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼──────────────┼──────────────┤
│ 0 │ id2377394 │         1 │ 2016-06-12    │ 2016-06-12    │             1 │        -73.98 │         40.74 │        -74.00 │         40.73 │ N            │          663 │
│   │           │           │ 00:43:35      │ 00:54:38      │               │               │               │               │               │              │              │
│ 1 │ id3858529 │         2 │ 2016-01-19    │ 2016-01-19    │             1 │        -73.98 │         40.76 │        -74.01 │         40.71 │ N            │         2124 │
│   │           │           │ 11:35:24      │ 12:10:48      │               │               │               │               │               │              │              │
│ 2 │ id1324603 │         2 │ 2016-05-21    │ 2016-05-21    │             1 │        -73.97 │         40.80 │        -73.92 │         40.76 │ N            │         1551 │
│   │           │           │ 07:54:58      │ 08:20:49      │               │               │               │               │               │              │              │
│ 3 │ id0012891 │         2 │ 2016-03-10    │ 2016-03-10    │             1 │        -73.98 │         40.74 │        -73.97 │         40.79 │ N            │         1225 │
│   │           │           │ 21:45:01      │ 22:05:26      │               │               │               │               │               │              │              │
│ 4 │ id1436371 │         2 │ 2016-05-10    │ 2016-05-10    │             1 │        -73.98 │         40.76 │        -74.00 │         40.73 │ N            │         1274 │
│   │           │           │ 22:08:41      │ 22:29:55      │               │               │               │               │               │              │              │
├───┼───────────┼───────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼───────────────┼──────────────┼──────────────┤
│ # │    id     │ vendor_id │ pickup_dateti │ dropoff_datet │ passenger_cou │ pickup_longit │ pickup_latitu │ dropoff_longi │ dropoff_latit │ store_and_fw │ trip_duratio │
│   │           │           │ me            │ ime           │ nt            │ ude           │ de            │ tude          │ ude           │ d_flag       │ n            │
╰───┴───────────┴───────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴───────────────┴──────────────┴──────────────╯
</code></pre></div><h2 id="_6-opening-the-file-filtering-out-all-the-rows-with-a-y-store-and-fwd-flag-value-group-by-id-and-calculate-the-mean-duration-time" tabindex="-1"><a class="header-anchor" href="#_6-opening-the-file-filtering-out-all-the-rows-with-a-y-store-and-fwd-flag-value-group-by-id-and-calculate-the-mean-duration-time" aria-hidden="true">#</a> 6. Opening the file, filtering out all the rows with a &quot;Y&quot; store_and_fwd_flag value, group by ID and calculate the mean duration time</h2><div class="language-console" data-ext="console"><pre class="language-console"><code>&gt; $df | filter-with ((col store_and_fwd_flag) == &quot;N&quot;) | group-by id | agg (col trip_duration | mean) | sort-by id | first 5
╭───┬───────────┬───────────────╮
│ # │    id     │ trip_duration │
├───┼───────────┼───────────────┤
│ 0 │ id0000001 │       1105.00 │
│ 1 │ id0000003 │       1046.00 │
│ 2 │ id0000005 │        368.00 │
│ 3 │ id0000008 │        303.00 │
│ 4 │ id0000009 │        547.00 │
├───┼───────────┼───────────────┤
│ # │    id     │ trip_duration │
╰───┴───────────┴───────────────╯
</code></pre></div>`,17),o=[a];function r(l,s){return n(),t("div",null,o)}const u=e(i,[["render",r],["__file","polars_v_pandas_v_nushell.html.vue"]]);export{u as default};
