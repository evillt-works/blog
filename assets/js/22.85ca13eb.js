(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{227:function(t,a,r){"use strict";r.r(a);var e=r(2),i=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"⚡️github集成netlify：快速预览pr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#⚡️github集成netlify：快速预览pr","aria-hidden":"true"}},[t._v("#")]),t._v(" ⚡️Github集成Netlify：快速预览PR")]),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("本文将介绍使用Netlify为Github中的开源项目进行持续部署：")]),t._v(" "),r("p",[t._v("每当项目发生一个Pull Request时，Netlify会构建相应的代码，并自动回复，在回复内容提供一个在线链接，可供开发者快速预览此次改动的效果。")]),t._v(" "),r("h2",{attrs:{id:"开始使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),r("ul",[r("li",[t._v("直接访问"),r("a",{attrs:{href:"https://app.netlify.com/start",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify网站"),r("OutboundLink")],1),t._v("，使用Github账号登录")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mancjsx0j31860m4n0b.jpg",alt:"image.png"}})]),t._v(" "),r("ul",[r("li",[t._v("选择一个仓库")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mb4t9f6uj313k0qcq6h.jpg",alt:"image.png"}})]),t._v(" "),r("ul",[r("li",[t._v("配置构建信息")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mb54a8ivj31580my778.jpg",alt:"image.png"}})]),t._v(" "),r("ul",[r("li",[t._v("还可以配置环境变量")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mb5nyxo4j313y0k0mz9.jpg",alt:"image.png"}}),r("br"),t._v("则在Node.js应用中，可以通过 "),r("code",[t._v("process.env.PUBLIC_PATH")]),t._v(" 获取值")]),t._v(" "),r("h2",{attrs:{id:"修改名字"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改名字","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改名字")]),t._v(" "),r("p",[t._v("第一次部署时，默认的名称是随机生成的，可以修改，方便识别并访问"),r("br"),r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mb62cm6xj31180c0myr.jpg",alt:"image.png"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mb6nncttj31ea0n8q63.jpg",alt:"image.png"}}),r("br"),r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mb6zhio0j30x00hytao.jpg",alt:"image.png"}}),r("br"),t._v("名字即修改成功，这样访问的域名就更好记了。")]),t._v(" "),r("h2",{attrs:{id:"设置通知"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置通知","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置通知")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mb7evtg4j31r70u0gv7.jpg",alt:"image.png"}}),r("br"),t._v("选择事件为“部署成功后”"),r("br"),r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mb7ljpz6j30ww0hctac.jpg",alt:"image.png"}}),r("br"),t._v("以后项目有Pull Request时，Netlify就是自动构建，并在成功后自动给Pull Request添加回复👏"),r("br"),r("img",{attrs:{src:"https://tva1.sinaimg.cn/large/006y8mN6gy1g6mb85jf6kj316a0pswiv.jpg",alt:"image.png"}})]),t._v(" "),r("h2",{attrs:{id:"集成gitlab"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#集成gitlab","aria-hidden":"true"}},[t._v("#")]),t._v(" 集成Gitlab")]),t._v(" "),r("p",[t._v("Netlify也可以集成"),r("a",{attrs:{href:"https://gitlab.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitlab"),r("OutboundLink")],1),t._v("上的私密仓库，其操作与本文对Github的描述别无二致，唯一不同的是，部署成功进行一个评论时，Gitlab需要access token\n"),r("img",{attrs:{src:"https://user-images.githubusercontent.com/9384365/58619773-25409300-82f8-11e9-8930-baf6be2f7640.png",alt:"image"}})]),t._v(" "),r("p",[t._v("可以登录Gitlab后，点击头像 -> 用户设置 -> 访问令牌里获取，范围勾选"),r("code",[t._v("api")]),t._v(" "),r("img",{attrs:{src:"https://user-images.githubusercontent.com/9384365/58620017-a7c95280-82f8-11e9-9b09-249bd457ac04.png",alt:"image"}})]),t._v(" "),r("p",[t._v("生成后复制到Netlify即可")]),t._v(" "),r("h2",{attrs:{id:"注"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注","aria-hidden":"true"}},[t._v("#")]),t._v(" 注")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/levy9527/blog/issues/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),r("OutboundLink")],1)])])},[],!1,null,null,null);a.default=i.exports}}]);