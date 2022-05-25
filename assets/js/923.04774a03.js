(window.webpackJsonp=window.webpackJsonp||[]).push([[923],{1439:function(t,s,a){"use strict";a.r(s);var e=a(35),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),a("p",[t._v("Nushell 支持以下常见的数学、逻辑和字符串操作的运算符：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("运算符")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("+")])]),t._v(" "),a("td",[t._v("加")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("-")])]),t._v(" "),a("td",[t._v("减")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("*")])]),t._v(" "),a("td",[t._v("乘")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("/")])]),t._v(" "),a("td",[t._v("除")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("**")])]),t._v(" "),a("td",[t._v("指数 (幂)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mod")])]),t._v(" "),a("td",[t._v("取模")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("==")])]),t._v(" "),a("td",[t._v("等于")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("!=")])]),t._v(" "),a("td",[t._v("不等于")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<")])]),t._v(" "),a("td",[t._v("小于")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<=")])]),t._v(" "),a("td",[t._v("小于等于")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v(">")])]),t._v(" "),a("td",[t._v("大于")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v(">=")])]),t._v(" "),a("td",[t._v("大于等于")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("=~")])]),t._v(" "),a("td",[t._v("正则匹配 / 字符串包含另一个字符串")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("!~")])]),t._v(" "),a("td",[t._v("正则不匹配 / 字符串"),a("em",[t._v("不")]),t._v("包含另一个")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("in")])]),t._v(" "),a("td",[t._v("列表包含值")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("not-in")])]),t._v(" "),a("td",[t._v("列表不包含值")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("&&")])]),t._v(" "),a("td",[t._v("两个布尔值与运算")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("||")])]),t._v(" "),a("td",[t._v("两个布尔值或运算")])])])]),t._v(" "),a("p",[t._v("圆括号可用于分组以指定求值顺序，或用于调用命令并在表达式中使用结果。")]),t._v(" "),a("h2",{attrs:{id:"运算符结合顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符结合顺序"}},[t._v("#")]),t._v(" 运算符结合顺序")]),t._v(" "),a("p",[t._v("数学运算的结合顺序如下（从最高优先级到最低）：")]),t._v(" "),a("ul",[a("li",[t._v("圆括号 ("),a("code",[t._v("()")]),t._v(")")]),t._v(" "),a("li",[t._v("乘 ("),a("code",[t._v("*")]),t._v(") 、 除 ("),a("code",[t._v("/")]),t._v(") 和幂 ("),a("code",[t._v("**")]),t._v(")")]),t._v(" "),a("li",[t._v("加 ("),a("code",[t._v("+")]),t._v(") 和减 ("),a("code",[t._v("-")]),t._v(")")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> 3 * (1 + 2)\n9\n")])])]),a("h2",{attrs:{id:"正则表达式-字符串包含运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式-字符串包含运算符"}},[t._v("#")]),t._v(" 正则表达式 / 字符串包含运算符")]),t._v(" "),a("p",[a("code",[t._v("=~")]),t._v("和"),a("code",[t._v("!~")]),t._v("运算符提供了一种更方便的方法来评估 "),a("a",{attrs:{href:"https://cheatography.com/davechild/cheat-sheets/regular-expressions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则表达式"),a("OutboundLink")],1),t._v("。你不需要知道正则表达式就可以使用它们 —— 它们也是检查一个字符串是否包含另一个的简单方法：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string =~ pattern")]),t._v(" 如果 "),a("code",[t._v("string")]),t._v(" 包含 "),a("code",[t._v("pattern")]),t._v(" 的匹配返回 "),a("strong",[t._v("true")]),t._v(", 反之返回 "),a("strong",[t._v("false")]),t._v("；")]),t._v(" "),a("li",[a("code",[t._v("string !~ pattern")]),t._v(" 如果 "),a("code",[t._v("string")]),t._v(" 包含 "),a("code",[t._v("pattern")]),t._v(" 的匹配返回 "),a("strong",[t._v("false")]),t._v(", 反之返回 "),a("strong",[t._v("true")]),t._v("；")])]),t._v(" "),a("p",[t._v("例如:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("foobarbaz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v(" bar "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns true")]),t._v("\nfoobarbaz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("~ bar "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v(" ^nu "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# returns all files whose names start with "nu"')]),t._v("\n")])])]),a("p",[t._v("两个运算符都使用了 "),a("a",{attrs:{href:"https://docs.rs/regex/latest/regex/struct.Regex.html#method.is_match",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rust regex 包的 "),a("code",[t._v("is_match()")]),t._v(" 函数"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"大小写敏感性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大小写敏感性"}},[t._v("#")]),t._v(" 大小写敏感性")]),t._v(" "),a("p",[t._v("对字符串进行操作时，运算符通常是区分大小写的。有几种方法可以处理大小写不敏感的场景：")]),t._v(" "),a("ol",[a("li",[t._v("在正则表达式运算符中，指定"),a("code",[t._v("(?i)")]),t._v("不区分大小写的模式修饰器：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(?i)foo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns true")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("使用"),a("RouterLink",{attrs:{to:"/book/commands/str_contains.html"}},[a("code",[t._v("str contains")])]),t._v(" 命令的"),a("code",[t._v("--insensitive")]),t._v("标志：")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str contains --insensitive "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在比较前用"),a("RouterLink",{attrs:{to:"/book/commands/str_downcase.html"}},[a("code",[t._v("str downcase")])]),t._v("将字符串转换为小写：")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FOO"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str downcase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Foo"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str downcase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);