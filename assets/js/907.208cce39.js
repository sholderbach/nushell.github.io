(window.webpackJsonp=window.webpackJsonp||[]).push([[907],{1423:function(t,a,s){"use strict";s.r(a);var n=s(35),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"自定义补全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义补全"}},[t._v("#")]),t._v(" 自定义补全")]),t._v(" "),s("p",[t._v("自定义补全允许你混合使用 Nushell 的两个功能：自定义命令和补全。有了它们，你就能够创建支持对位置参数和标志(Flags)参数进行自动补全的命令。这些自定义补全既适用于自定义命令，也适用于 "),s("RouterLink",{attrs:{to:"/zh-CN/book/externs.html"}},[t._v("已知的外部或"),s("code",[t._v("extern")]),t._v("命令")]),t._v("。")],1),t._v(" "),s("p",[t._v("自定义命令有两个部分：处理补全的命令和使用"),s("code",[t._v("@")]),t._v("将此命令附加到另一个命令的类型中。")]),t._v(" "),s("h2",{attrs:{id:"自定义补全例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义补全例子"}},[t._v("#")]),t._v(" 自定义补全例子")]),t._v(" "),s("p",[t._v("我们来看一个例子：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" def animals "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cat"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dog"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eel"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" def my-command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("animal: string@animals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" print "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$animal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">|")]),t._v(" my-command\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v("                 dog                 eel\n")])])]),s("p",[t._v("在第一行中，我们创建了一个自定义命令，将返回三个不同动物的列表。这些是我们想在补全中使用的值。一旦我们创建了这个命令，我们就可以用它来为其他自定义命令和 "),s("code",[t._v("extern")]),t._v(" 提供补全。")]),t._v(" "),s("p",[t._v("在第二行，我们使用"),s("code",[t._v("string@animals")]),t._v("。这告诉了 Nushell 两件事：用于类型检查的参数的形状，以及如果用户想在该位置补全输入值，需要使用的自定义完成。")]),t._v(" "),s("p",[t._v("在第三行，我们输入我们的自定义命令的名称"),s("code",[t._v("my-command")]),t._v("，然后输入空格，再输入"),s("code",[t._v("<tab>")]),t._v("键，就可以触发我们的自动补全功能。自定义补全的工作方式与系统中的其他补全方式相同，比如允许你输入"),s("code",[t._v("e")]),t._v("，然后按"),s("code",[t._v("<tab>")]),t._v('键，得到 "eel" 自动补全。')]),t._v(" "),s("h2",{attrs:{id:"模块和自定义补全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块和自定义补全"}},[t._v("#")]),t._v(" 模块和自定义补全")]),t._v(" "),s("p",[t._v("你可能更喜欢让你的自定义补全远离你的代码的公共 API。为此，你可以将模块和自定义补全结合起来。")]),t._v(" "),s("p",[t._v("让我们把上面的例子放在一个模块中：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("module commands "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    def animals "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cat"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dog"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eel"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" def my-command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("animal: string@animals"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        print "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$animal")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在我们的模块中，我们选择只导出自定义命令"),s("code",[t._v("my-command")]),t._v("，而不导出自定义补全"),s("code",[t._v("animals")]),t._v("。这使得本模块的用户可以调用命令，甚至使用自定义补全逻辑，而不需要访问自定义补全。这样可以让 API 更干净，同时仍然提供所有相同的好处。")]),t._v(" "),s("p",[t._v("这是可能的，因为使用"),s("code",[t._v("@")]),t._v("的自定义补全标签在命令第一次被解析时就被锁定了。")]),t._v(" "),s("h2",{attrs:{id:"自定义补全和-extern"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义补全和-extern"}},[t._v("#")]),t._v(" 自定义补全和 "),s("code",[t._v("extern")])]),t._v(" "),s("p",[t._v("一个强大的组合是为 "),s("RouterLink",{attrs:{to:"/zh-CN/book/externs.html"}},[t._v("已知的"),s("code",[t._v("extern")]),t._v("命令")]),t._v(" 添加自定义补全。这些工作方式与向自定义命令添加自定义补全的方式相同：创建自定义补全，然后用"),s("code",[t._v("@")]),t._v("附加到 "),s("code",[t._v("extern")]),t._v(" 的一个位置参数或标志参数的类型中。")],1),t._v(" "),s("p",[t._v("如果你仔细看一下默认配置中的例子，你会看到这个：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" extern "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git push"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    remote?: string@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nu-complete git remotes"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the name of the remote")]),t._v("\n    refspec?: string@"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nu-complete git branches"')]),t._v("# the branch / refspec\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("自定义补全在这个例子中的作用与前面的例子中的作用相同。上面的例子根据用户当前所处的位置，调用了两个不同的自定义补全。")])])}),[],!1,null,null,null);a.default=e.exports}}]);