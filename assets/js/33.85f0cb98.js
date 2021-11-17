(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{580:function(s,a,n){"use strict";n.r(a);var t=n(8),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("blockquote",[n("p",[s._v("由于每次写完代码都要执行一大堆命令来将本地代码推送至远程仓库，所以索性写一个sh脚本")])]),s._v(" "),n("h1",{attrs:{id:"新建push-sh文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建push-sh文件"}},[s._v("#")]),s._v(" 新建"),n("code",[s._v("push.sh")]),s._v("文件：")]),s._v(" "),n("p",[s._v("在项目主目录，即"),n("code",[s._v("/git")]),s._v("所在目录新建"),n("code",[s._v("push.sh")]),s._v("文件，并复制以下内容：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" → 暂存选取所有代码\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" -p "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"→ 请输入您的commit提交信息："')]),s._v(" MSG\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" → 提交所有暂存代码\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MSG")]),s._v('"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" → 将代码推送至三端git仓库\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u all master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果不是hexo项目可忽略以下内容")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" → Hexo自动构建及部署\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run clean\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run deploy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h1",{attrs:{id:"运行脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行脚本"}},[s._v("#")]),s._v(" 运行脚本")]),s._v(" "),n("p",[s._v("每次推送时，在当前目录运行"),n("code",[s._v("sh push.sh")]),s._v("命令即可，接下来会提示你输入要提交的信息，输入完点击回车即可")]),s._v(" "),n("p",[s._v("注：如果加入了hexo项目的构建部署命令，每次推送时也会帮你完成部署")]),s._v(" "),n("h1",{attrs:{id:"祝君无bug"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#祝君无bug"}},[s._v("#")]),s._v(" 祝君无Bug~")])])}),[],!1,null,null,null);a.default=e.exports}}]);