(window.webpackJsonp=window.webpackJsonp||[]).push([[929],{1445:function(s,e,t){"use strict";t.r(e);var a=t(35),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"shell-中的-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-中的-shell"}},[s._v("#")]),s._v(" Shell 中的 Shell")]),s._v(" "),t("h2",{attrs:{id:"在多个目录下工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在多个目录下工作"}},[s._v("#")]),s._v(" 在多个目录下工作")]),s._v(" "),t("p",[s._v('虽然在一个目录下工作很常见，但同时在多个路径工作也很方便。为此，Nu 提供了 "Shells" 的概念。顾名思义，它们是一种在一个 Shell 中运行多个 Shell 的方法，允许你在多个工作目录之间快速跳转。')]),s._v(" "),t("p",[s._v("作为开始，让我们进入一个目录：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("/home/jonathant/Source/nushell"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" enter "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/book\n/home/jonathant/Source/book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n────┬────────────────────┬──────┬────────┬─────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ name               │ type │ size   │ modified")]),s._v("\n────┼────────────────────┼──────┼────────┼─────────────\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(".html           │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("429")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" hours ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ CONTRIBUTING.md    │ File │  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("955")]),s._v(" B │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" hours ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Gemfile            │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" hours ago\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ Gemfile.lock       │ File │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.9")]),s._v(" KB │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" hours ago\n")])])]),t("p",[s._v("进入("),t("code",[s._v("enter")]),s._v(")类似于改变目录（正如我们在"),t("code",[s._v("cd")]),s._v("命令中看到的那样）。这允许你跳入一个目录，在其中工作。我们现在是在两个目录中，而不是改变目录。为了更清楚地看到这一点，我们可以使用"),t("RouterLink",{attrs:{to:"/book/commands/shells.html"}},[t("code",[s._v("shells")])]),s._v("命令来列出我们当前的活动目录：")],1),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("/home/jonathan/Source/book"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" shells\n───┬────────┬────────────┬─────────────────────────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ active │    name    │          path")]),s._v("\n───┼────────┼────────────┼─────────────────────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("  │ filesystem │ /home/jt/Source/nushell\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("   │ filesystem │ /home/jt/Source/book\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("  │ filesystem │ /home/jt/Source/music\n───┴────────┴────────────┴─────────────────────────\n\n")])])]),t("p",[t("RouterLink",{attrs:{to:"/book/commands/shells.html"}},[t("code",[s._v("shells")])]),s._v('命令显示目前有三个 Shells 处于活动状态：我们最初的 "nushell" 源目录和现在的新 "book" 目录。')],1),s._v(" "),t("p",[s._v("我们可以用 "),t("code",[s._v("n")]),s._v(", "),t("code",[s._v("p")]),s._v(" 和 "),t("code",[s._v("g")]),s._v(' 的快捷命令在这些 Shell 之间跳转，这是 "next"、"previous" 和 "go" 的缩写：')]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/home/jonathant/Source/book(main)> n\n/home/jonathant/Source/nushell(main)> p\n/home/jonathant/Source/book(main)> g 2\n/home/jonathant/Source/music(main)>\n")])])]),t("p",[s._v("我们可以看到目录在变化，但我们总是能够回到我们正在工作的前一个目录。这使我们能够在同一个会话的多个目录中工作。")]),s._v(" "),t("h2",{attrs:{id:"退出-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#退出-shell"}},[s._v("#")]),s._v(" 退出 Shell")]),s._v(" "),t("p",[s._v("你可以使用 "),t("code",[s._v("exit")]),s._v(' 命令离开一个你已经 "进入('),t("code",[s._v("enter")]),s._v(')" 的 Shell。如果这是最后一个打开的 Shell，Nu 将退出。')]),s._v(" "),t("p",[s._v("你可以随时退出 Nu，即使有多个 Shell 处于活动状态，只需要在"),t("code",[s._v("exit")]),s._v("命令中传递"),t("code",[s._v("--now")]),s._v("标志。像这样："),t("code",[s._v("exit --now")])])])}),[],!1,null,null,null);e.default=n.exports}}]);