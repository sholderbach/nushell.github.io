import{_ as o,z as a,A as s,X as e,C as n,T as l,$ as c,Q as u}from"./framework.3d018c9f.js";const _={},d=e("h1",{id:"環境変数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#環境変数","aria-hidden":"true"},"#"),n(" 環境変数")],-1),r=e("p",null,"外部アプリケーションが使用する環境を制御することはシェルの一般的なタスクです。多くの場合、環境はパッケージ化されて外部のアプリケーション起動時に与えられることで自動的に行われます。しかし時には、アプリケーションが利用する環境変数をより正確に制御したい場合があります。",-1),i=e("p",null,[n("アプリケーションに送られる現在の環境変数は"),e("code",null,"$nu.env"),n("の値を echo して確認することができます。")],-1),h=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> echo $nu.env
──────────────────────────┬──────────────────────────────
 COLORTERM                │ truecolor
 DBUS_SESSION_BUS_ADDRESS │ unix:path=/run/user/1000/bus
 DESKTOP_SESSION          │ gnome
 DISPLAY                  │ :1
`)])],-1),x=e("p",null,"コマンドやパイプラインを実行するときに一時的に環境変数を更新することもできます。",-1),p=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> with-env [FOO BAR] { echo $nu.env.FOO }
BAR
`)])],-1),O=e("p",null,[e("code",null,"with-env"),n('コマンドは、環境変数を一時的に与えられた値に設定します(ここでは変数"FOO"に"BAR"という値がセットされます)。ブロックは新しい環境変数が設定された状態で実行されます。')],-1),g=e("p",null,"Bash などにヒントを得た一般的な省略記法も用意されています。上の例は次のように書くことができます。",-1),v=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> FOO=BAR echo $nu.env.FOO
BAR
`)])],-1);function m(S,B){const t=u("RouterLink");return a(),s("div",null,[d,r,i,h,e("p",null,[n("環境は Nu の設定と Nu が実行されている環境から作られます。"),l(t,{to:"/ja/book/configuration.html"},{default:c(()=>[n("設定の章")]),_:1}),n("に記載されている方法で環境を恒久的に更新できます。")]),x,p,O,g,v])}const R=o(_,[["render",m],["__file","environment.html.vue"]]);export{R as default};
