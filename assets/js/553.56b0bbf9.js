(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{1069:function(e,a,n){"use strict";n.r(a);var t=n(35),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"entorno"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entorno"}},[e._v("#")]),e._v(" Entorno")]),e._v(" "),n("p",[e._v("Una tarea común al usar una shell es controlar el ambiente de entorno que aplicaciones externas usarán. Comúnmente esto sucede automáticamente, a medida que el entorno se empaqueta y se entrega a la aplicación externa cuando se inicia. Sin embargo, hay veces que vamos a desear tener control más preciso sobre qué variables de entorno una aplicación pueda ver.")]),e._v(" "),n("p",[e._v("Puedes ver las variables de entorno actuales que se enviarán a las aplicaciones explorando "),n("code",[e._v("#nu.env")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> echo $nu.env\n──────────────────────────┬──────────────────────────────\n COLORTERM                │ truecolor\n DBUS_SESSION_BUS_ADDRESS │ unix:path=/run/user/1000/bus\n DESKTOP_SESSION          │ gnome\n DISPLAY                  │ :1\n")])])]),n("p",[e._v("El ambiente es creador a través de los ajustes en la configuración de Nu y a partir del entorno en el que se ejecuta Nu. Puedes actualizar el ambiente permanentement usando técnicas enumeradas en el capítulo de "),n("RouterLink",{attrs:{to:"/es/book/configuracion.html"}},[e._v("configuración")]),e._v(".")],1),e._v(" "),n("p",[e._v("También puedes temporalmente actualizar una variable de entorno cuando ejecutas un comando o tubería de comandos.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> with-env [MI_VARIABLE VALOR] { echo $nu.env.MI_VARIABLE }\nVALOR\n")])])]),n("p",[e._v("El comando "),n("code",[e._v("with-env")]),e._v(' establecerá temporalmente la variable de entorno dada (aquí: la variable "MI_VARIABLE" es dada el valor "VALOR"). Una vez hecho esto, el bloque se ejecutará con esta nueva variable de entorno establecida.')]),e._v(" "),n("p",[e._v("A common shorthand, inspired by Bash and others, is also available. You can write the above example as:")]),e._v(" "),n("p",[e._v("Una atajo común, inspirada en Bash y otros, también está disponible. Puedes escribir el ejemplo anterior como:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("> MI_VARIABLE=VALOR echo $nu.env.MI_VARIABLE\nVALOR\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);