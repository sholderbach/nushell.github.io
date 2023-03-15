import{_ as r,M as o,p as a,q as s,R as h,Q as t,t as e,N as l,a1 as i}from"./framework-344bb0e4.js";const u="/assets/0_70_table_expand-8bdae3da.png",d={},c=t("h1",{id:"nushell-0-70",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-70","aria-hidden":"true"},"#"),e(" Nushell 0.70")],-1),p=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=t("p",null,"Today, we're releasing version 0.70 of Nu. This release includes big improvements to table drawing and lots of overall polish.",-1),f=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),g={href:"https://github.com/nushell/nushell/releases/tag/0.70.0",target:"_blank",rel:"noopener noreferrer"},b={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"cargo install nu",-1),k=i('<p>If you want all the built-in goodies, such as support for dataframes and SQLite databases, you can install it via <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="themes-of-this-release" tabindex="-1"><a class="header-anchor" href="#themes-of-this-release" aria-hidden="true">#</a> Themes of this release</h1><h2 id="new-table-flags" tabindex="-1"><a class="header-anchor" href="#new-table-flags" aria-hidden="true">#</a> New table flags</h2><p><img src="'+u+'" alt="Expanded table"></p><ul><li><p><code>--expand</code>: changes a standard table view; expand the table structure so internally all data will be displayed as inner tables</p><h4 id="notice" tabindex="-1"><a class="header-anchor" href="#notice" aria-hidden="true">#</a> <strong>NOTICE</strong></h4><p>The <code>expand</code> mode can be considered generally slower than a base table view. So, if you have a large data set it may be slow.</p></li><li><p><code>--expand-deep {int}</code>: set a limit after which table enlargement is stopped</p></li><li><p><code>--flatten</code>: an <code>--expand</code> view option to return a set of values instead of table for a simple lists</p></li><li><p><code>--flatten-separator {char}</code>: a configuration of a separator for <code>--flatten</code></p></li><li><p><code>--collapse</code>: changes a standard table view; expand the table structure in a squashed way</p><h4 id="notice-1" tabindex="-1"><a class="header-anchor" href="#notice-1" aria-hidden="true">#</a> <strong>NOTICE</strong></h4><p><code>collapse</code> mode currently doesn&#39;t support width control, therefore if your terminal is not wide enough the table might be broken. The <code>collapse</code> mode can be considered generally slower than a base table view. So, if you have a large data set it may be slow.</p></li></ul><h1 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h1><ul><li>The command <code>first 1</code> now returns a list with the single value rather than the value itself. This brings it in line with the behaviour of <code>last 1</code>.</li><li>The dataframe command <code>with-sql</code> or <code>query dfr</code> has been renamed to <code>query df</code> for consistency.</li></ul><h1 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps" aria-hidden="true">#</a> Next Steps</h1>',9),w={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},x=t("h1",{id:"full-changelog",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#full-changelog","aria-hidden":"true"},"#"),e(" Full changelog")],-1),y=t("h2",{id:"nushell",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell","aria-hidden":"true"},"#"),e(" Nushell")],-1),v={href:"https://github.com/nushell/nushell/pull/6795",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/nushell/nushell/pull/6728",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/nushell/nushell/pull/6789",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/nushell/nushell/pull/6778",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/nushell/nushell/pull/6712",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/nushell/nushell/pull/6702",target:"_blank",rel:"noopener noreferrer"},S=t("code",null,"git push --force-with-lease",-1),q={href:"https://github.com/nushell/nushell/pull/6782",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/nushell/nushell/pull/6779",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/nushell/nushell/pull/6584",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/nushell/nushell/pull/6777",target:"_blank",rel:"noopener noreferrer"},z=t("code",null,"query dfr",-1),D=t("code",null,"query df",-1),L={href:"https://github.com/nushell/nushell/pull/6749",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/nushell/nushell/pull/6651",target:"_blank",rel:"noopener noreferrer"},M=t("code",null,"term size",-1),W={href:"https://github.com/nushell/nushell/pull/6761",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/nushell/nushell/pull/6760",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/nushell/nushell/pull/6723",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/nushell/nushell/pull/6670",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/nushell/nushell/pull/6641",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/nushell/nushell/pull/6640",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/nushell/nushell/pull/6637",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/nushell/nushell/pull/6738",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/nushell/nushell/pull/6729",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/nushell/nushell/pull/6727",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/nushell/nushell/pull/6731",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/nushell/nushell/pull/6730",target:"_blank",rel:"noopener noreferrer"},Y=t("code",null,"config nu",-1),Z=t("code",null,"config env",-1),$={href:"https://github.com/nushell/nushell/pull/6717",target:"_blank",rel:"noopener noreferrer"},ee=t("code",null,"alias",-1),te={href:"https://github.com/nushell/nushell/pull/6684",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://github.com/nushell/nushell/pull/6674",target:"_blank",rel:"noopener noreferrer"},le={href:"https://github.com/nushell/nushell/pull/6649",target:"_blank",rel:"noopener noreferrer"},re=t("code",null,"$in",-1),oe={href:"https://github.com/nushell/nushell/pull/6638",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/nushell/nushell/pull/6724",target:"_blank",rel:"noopener noreferrer"},se={href:"https://github.com/nushell/nushell/pull/6722",target:"_blank",rel:"noopener noreferrer"},he={href:"https://github.com/nushell/nushell/pull/6720",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://github.com/nushell/nushell/pull/6716",target:"_blank",rel:"noopener noreferrer"},ue=t("code",null,"input",-1),de={href:"https://github.com/nushell/nushell/pull/6715",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://github.com/nushell/nushell/pull/6700",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://github.com/nushell/nushell/pull/6688",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://github.com/nushell/nushell/pull/6645",target:"_blank",rel:"noopener noreferrer"},fe=t("code",null,"do",-1),ge=t("code",null,"-c",-1),be={href:"https://github.com/nushell/nushell/pull/6643",target:"_blank",rel:"noopener noreferrer"},me={href:"https://github.com/nushell/nushell/pull/6707",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://github.com/nushell/nushell/pull/6695",target:"_blank",rel:"noopener noreferrer"},we=t("code",null,"str replace",-1),xe={href:"https://github.com/nushell/nushell/pull/6694",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://github.com/nushell/nushell/pull/6666",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://github.com/nushell/nushell/pull/6660",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://github.com/nushell/nushell/pull/6652",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://github.com/nushell/nushell/pull/6603",target:"_blank",rel:"noopener noreferrer"},Re={href:"https://github.com/nushell/nushell/pull/6286",target:"_blank",rel:"noopener noreferrer"},Ae=t("code",null,"tabled",-1),Te=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),Se={href:"https://github.com/nushell/nushell.github.io/pull/641",target:"_blank",rel:"noopener noreferrer"},qe={href:"https://github.com/nushell/nushell.github.io/pull/638",target:"_blank",rel:"noopener noreferrer"},Fe={href:"https://github.com/nushell/nushell.github.io/pull/637",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://github.com/nushell/nushell.github.io/pull/636",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://github.com/nushell/nushell.github.io/pull/635",target:"_blank",rel:"noopener noreferrer"},ze=t("code",null,"-",-1),De={href:"https://github.com/nushell/nushell.github.io/pull/634",target:"_blank",rel:"noopener noreferrer"},Le=t("code",null,"group",-1),Ce={href:"https://github.com/nushell/nushell.github.io/pull/615",target:"_blank",rel:"noopener noreferrer"},Me=t("code",null,"first 1",-1),We={href:"https://github.com/nushell/nushell.github.io/pull/632",target:"_blank",rel:"noopener noreferrer"},je={href:"https://github.com/nushell/nushell.github.io/pull/630",target:"_blank",rel:"noopener noreferrer"},He=t("code",null,"--features extra",-1),Pe={href:"https://github.com/nushell/nushell.github.io/pull/629",target:"_blank",rel:"noopener noreferrer"},Be={href:"https://github.com/nushell/nushell.github.io/pull/628",target:"_blank",rel:"noopener noreferrer"},Ve=t("code",null,"foo",-1),Ke={href:"https://github.com/nushell/nushell.github.io/pull/627",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://github.com/nushell/nushell.github.io/pull/626",target:"_blank",rel:"noopener noreferrer"},Ge={href:"https://github.com/nushell/nushell.github.io/pull/625",target:"_blank",rel:"noopener noreferrer"},Qe={href:"https://github.com/nushell/nushell.github.io/pull/616",target:"_blank",rel:"noopener noreferrer"},Je={href:"https://github.com/nushell/nushell.github.io/pull/624",target:"_blank",rel:"noopener noreferrer"},Xe={href:"https://github.com/nushell/nushell.github.io/pull/621",target:"_blank",rel:"noopener noreferrer"},Ye={href:"https://github.com/nushell/nushell.github.io/pull/620",target:"_blank",rel:"noopener noreferrer"},Ze=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu_Scripts")],-1),$e={href:"https://github.com/nushell/nu_scripts/pull/306",target:"_blank",rel:"noopener noreferrer"},et={href:"https://github.com/nushell/nu_scripts/pull/305",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://github.com/nushell/nu_scripts/pull/304",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://github.com/nushell/nu_scripts/pull/303",target:"_blank",rel:"noopener noreferrer"},lt={href:"https://github.com/nushell/nu_scripts/pull/301",target:"_blank",rel:"noopener noreferrer"},rt=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" reedline")],-1),ot={href:"https://github.com/nushell/reedline/pull/497",target:"_blank",rel:"noopener noreferrer"},at={href:"https://github.com/nushell/reedline/pull/496",target:"_blank",rel:"noopener noreferrer"},st={href:"https://github.com/nushell/reedline/pull/495",target:"_blank",rel:"noopener noreferrer"},ht={href:"https://github.com/nushell/reedline/pull/493",target:"_blank",rel:"noopener noreferrer"},it={href:"https://github.com/nushell/reedline/pull/490",target:"_blank",rel:"noopener noreferrer"},ut=t("code",null,"Submit",-1),dt=t("code",null,"SubmitOrNewline",-1),ct={href:"https://github.com/nushell/reedline/pull/488",target:"_blank",rel:"noopener noreferrer"};function pt(_t,ft){const n=o("ExternalLinkIcon");return a(),s("div",null,[c,p,_,h(" more "),f,t("p",null,[e("Nu 0.70 is available as "),t("a",g,[e("pre-built binaries"),l(n)]),e(" or from "),t("a",b,[e("crates.io"),l(n)]),e(". If you have Rust installed you can install it using "),m,e(".")]),k,t("p",null,[e("We're continuing to work on language updates and hope to have more information for you soon. If you'd like to become part of the effort, please "),t("a",w,[e("join the discord"),l(n)]),e(".")]),x,y,t("ul",null,[t("li",null,[e("jt created "),t("a",v,[e("Fix let-env in banner"),l(n)]),e(", and "),t("a",N,[e("Allow auto-cd to work with backticks"),l(n)])]),t("li",null,[e("sholderbach created "),t("a",E,[e("Pin reedline to the 0.13.0 release"),l(n)]),e(", and "),t("a",R,[e("Upgrade reedline to latest dev version"),l(n)]),e(", and "),t("a",A,[e("Backport fixes from nushell/nushell.github.io#633"),l(n)]),e(", and "),t("a",T,[e("Fix e.g. completion "),S,l(n)])]),t("li",null,[e("JEndler created "),t("a",q,[e("Update README.md"),l(n)])]),t("li",null,[e("unrelentingtech created "),t("a",F,[e("Tolerate more tty acquisition failures in non-interactive mode, fixes #6719"),l(n)]),e(", and "),t("a",I,[e("Foreground process group management, again"),l(n)])]),t("li",null,[e("dandavison created "),t("a",U,[e("Rename "),z,e(" -> "),D,l(n)]),e(", and "),t("a",L,[e("Add documentation requirement to PR template"),l(n)]),e(", and "),t("a",C,[e("Remove unnecessary flags from "),M,l(n)])]),t("li",null,[e("rjfc created "),t("a",W,[e("Add search terms to roll commands"),l(n)])]),t("li",null,[e("fdncred created "),t("a",j,[e("add filesize_metric comment"),l(n)]),e(", and "),t("a",H,[e("add the ability to convert durations"),l(n)]),e(", and "),t("a",P,[e("add a new command to query the registry on windows"),l(n)]),e(", and "),t("a",B,[e("tweak the banner message and make the time more accurate"),l(n)]),e(", and "),t("a",V,[e("changed the way durations and filesizes are parsed"),l(n)]),e(", and "),t("a",K,[e("add better description to table_index_mode"),l(n)])]),t("li",null,[e("Dorumin created "),t("a",O,[e("window --remainder"),l(n)]),e(", and "),t("a",G,[e("Remove unnecessary clone in window"),l(n)]),e(", and "),t("a",Q,[e("Fix quadratic time complexity with large strides"),l(n)])]),t("li",null,[e("howardjohn created "),t("a",J,[e("Delete out.log"),l(n)])]),t("li",null,[e("merelymyself created "),t("a",X,[e("Improve erroring of "),Y,e(" and "),Z,l(n)]),e(", and "),t("a",$,[e("let "),ee,e(" list aliases"),l(n)]),e(", and "),t("a",te,[e("return gid and uid in numbers if name not found"),l(n)]),e(", and "),t("a",ne,[e("Don't attempt to eval and trace if the repl line is empty"),l(n)]),e(", and "),t("a",le,[e("allow for "),re,e(" to affect environment"),l(n)]),e(", and "),t("a",oe,[e("ensure Operator::And errors out with incompatible types"),l(n)])]),t("li",null,[e("HannahZhuSWE created "),t("a",ae,[e("Add search terms to arg dataframe commands"),l(n)])]),t("li",null,[e("Dylan987 created "),t("a",se,[e("Add search terms for export commands"),l(n)])]),t("li",null,[e("zephaniahong created "),t("a",he,[e("Add search terms for uppercase"),l(n)])]),t("li",null,[e("HoLLy-HaCKeR created "),t("a",ie,[e("Fix invalid variable name in "),ue,e(" command docs"),l(n)])]),t("li",null,[e("WindSoilder created "),t("a",de,[e("avoid freeze when external command generates too much stdout output "),l(n)]),e(", and "),t("a",ce,[e("avoid freeze when capturing external stderr"),l(n)]),e(", and "),t("a",pe,[e("avoid freeze for table print"),l(n)]),e(", and "),t("a",_e,[e("Eval external command result immediately when using "),fe,e(" command with "),ge,l(n)]),e(", and "),t("a",be,[e("Make semicolon works better for internal commands"),l(n)])]),t("li",null,[e("KyleRAnderson created "),t("a",me,[e('Filter out empty glob patterns to "glob" command'),l(n)])]),t("li",null,[e("jake-albert created "),t("a",ke,[e("Return error on "),we,e(" RegEx parse fail"),l(n)])]),t("li",null,[e("bcmyers created "),t("a",xe,[e("Upgrade num-format to 0.4.3"),l(n)])]),t("li",null,[e("hustcer created "),t("a",ye,[e("Update nushell version for release workflow"),l(n)])]),t("li",null,[e("NotLebedev created "),t("a",ve,[e("To nuon escapes"),l(n)])]),t("li",null,[e("rsteube created "),t("a",Ne,[e("nu-cli: external completer precedence before file"),l(n)])]),t("li",null,[e("Kangaxx-0 created "),t("a",Ee,[e("Fix issue 6596"),l(n)])]),t("li",null,[e("zhiburt created "),t("a",Re,[e("WIP/ Checkout to new "),Ae,l(n)])])]),Te,t("ul",null,[t("li",null,[e("WindSoilder created "),t("a",Se,[e("Add note about subexpression with external commands"),l(n)])]),t("li",null,[e("zephaniahong created "),t("a",qe,[e("Update working_with_lists.md"),l(n)]),e(", and "),t("a",Fe,[e("Update working_with_lists.md"),l(n)]),e(", and "),t("a",Ie,[e("Update working_with_strings.md"),l(n)])]),t("li",null,[e("HoLLy-HaCKeR created "),t("a",Ue,[e("Fix example variables using "),ze,e(" in their name"),l(n)])]),t("li",null,[e("merelymyself created "),t("a",De,[e("add reference to semicolons, remove redundant "),Le,e(" from types_of_data"),l(n)]),e(", and "),t("a",Ce,[e("Update blog with breaking change: different behaviour for "),Me,l(n)])]),t("li",null,[e("ohno418 created "),t("a",We,[e('Fix a sample code on the "moving around" chapter'),l(n)])]),t("li",null,[e("sholderbach created "),t("a",je,[e("Mention the "),He,e(" requirement in the text"),l(n)])]),t("li",null,[e("NotTheEconomist created "),t("a",Pe,[e("Update installation.md"),l(n)])]),t("li",null,[e("avkonst created "),t("a",Be,[e("Make "),Ve,e(" example for Groups parsable by nushell"),l(n)])]),t("li",null,[e("hustcer created "),t("a",Ke,[e("Update some styles and command doc generation script"),l(n)]),e(", and "),t("a",Oe,[e("ci skip"),l(n)]),e(", and "),t("a",Ge,[e("Merge docs with the same command name"),l(n)]),e(", and "),t("a",Qe,[e("Refresh commands for v0.69"),l(n)])]),t("li",null,[e("hugosenari created "),t("a",Je,[e("fix (plugins): python plugin url changed"),l(n)])]),t("li",null,[e("SUPERCILEX created "),t("a",Xe,[e("Add example of inline string concat"),l(n)])]),t("li",null,[e("dandavison created "),t("a",Ye,[e("Some copy editing of initial book sections "),l(n)])])]),Ze,t("ul",null,[t("li",null,[e("dandavison created "),t("a",$e,[e("sockets command"),l(n)])]),t("li",null,[e("eggcaker created "),t("a",et,[e("fix the PATH not working on windows"),l(n)])]),t("li",null,[e("DWTW321 created "),t("a",tt,[e("New custom completions for ani-cli, btm, glow & tealdeer"),l(n)])]),t("li",null,[e("Yethal created "),t("a",nt,[e("add update-path.nu"),l(n)])]),t("li",null,[e("ehdevries created "),t("a",lt,[e("Replace str collect with str join in panache-git"),l(n)])])]),rt,t("ul",null,[t("li",null,[e("sholderbach created "),t("a",ot,[e("Fix completion example in README/lib.rs"),l(n)]),e(", and "),t("a",at,[e("Fix examples in README based on lib.rs"),l(n)]),e(", and "),t("a",st,[e("Prepare 0.13 release"),l(n)])]),t("li",null,[e("perlindgren created "),t("a",ht,[e("examples updated"),l(n)])]),t("li",null,[e("tailhook created "),t("a",it,[e("Add "),ut,e(" and "),dt,e(" editor events"),l(n)]),e(", and "),t("a",ct,[e("Remove flicker on external print"),l(n)])])])])}const bt=r(d,[["render",pt],["__file","2022-10-18-nushell-0_70.html.vue"]]);export{bt as default};
