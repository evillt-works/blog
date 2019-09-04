(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{209:function(t,e,a){"use strict";a.r(e);var n=a(2),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"组件研发指南（三）：开源协作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件研发指南（三）：开源协作","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件研发指南（三）：开源协作")]),t._v(" "),a("h1",{attrs:{id:"开源准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开源准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 开源准备")]),t._v(" "),a("h2",{attrs:{id:"前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提","aria-hidden":"true"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),a("p",[t._v("已经在私服发布，并在项目中验证")]),t._v(" "),a("h2",{attrs:{id:"checklist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checklist","aria-hidden":"true"}},[t._v("#")]),t._v(" checklist")]),t._v(" "),a("ul",[a("li",[t._v("[ ] 在 github 新建仓库")]),t._v(" "),a("li",[t._v("[ ] 描述是英文，首字母大写，最好开头有 emoji")])]),t._v(" "),a("p",[t._v("参考现有仓库\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1564469058026-08736dbd-7284-4915-96d7-ab418c1da8ef.png#align=left&display=inline&height=294&name=image.png&originHeight=588&originWidth=1958&size=416202&status=done&width=979",alt:"image.png"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("[ ] 提供两份README：")])]),t._v(" "),a("li",[a("p",[t._v("README.md 是英文的，顶部含一个链接跳到中文")])]),t._v(" "),a("li",[a("p",[t._v("README-zh.md 中文文档")])]),t._v(" "),a("li",[a("p",[t._v("[ ] docs 下的 demo 文档，在同一份中，中英双语的")])]),t._v(" "),a("li",[a("p",[t._v("[ ] docs 下的 guide-xxx 有 中/英 两份")])]),t._v(" "),a("li",[a("p",[t._v("[ ] 在文档中添加 contributors")])]),t._v(" "),a("li",[a("p",[t._v("[ ] package.json version 字段修改成 1.0.0")])]),t._v(" "),a("li",[a("p",[t._v("[ ] package.json description 字段补充英文说明")])]),t._v(" "),a("li",[a("p",[t._v("[ ] rm -fr .git 删除在 gitlab 的提交记录")])]),t._v(" "),a("li",[a("p",[t._v("[ ] git init")])]),t._v(" "),a("li",[a("p",[t._v("[ ] git add .* *")])]),t._v(" "),a("li",[a("p",[t._v("[ ] git commit -m ' 🎉 open source'")])]),t._v(" "),a("li",[a("p",[t._v("[ ]")])]),t._v(" "),a("li",[a("p",[t._v("[ ] git remote add origin ${github_repo_url}")])]),t._v(" "),a("li",[a("p",[t._v("[ ] git checkout -b dev")])]),t._v(" "),a("li",[a("p",[t._v("[ ] git push origin dev:dev")])]),t._v(" "),a("li",[a("p",[t._v("[ ] 在github设置默认分支为 dev")])]),t._v(" "),a("li",[a("p",[t._v("[ ] 在 travis ci 设置环境变量： NPM_TOKEN GITHUB_TOKEN DINGTALK_ROBOT_TOKEN")])]),t._v(" "),a("li",[a("p",[t._v("[ ] 合并master分支")])]),t._v(" "),a("li",[a("p",[t._v("[ ] 把 gitlab 的项目 归档掉")])])]),t._v(" "),a("h1",{attrs:{id:"开源维护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开源维护","aria-hidden":"true"}},[t._v("#")]),t._v(" 开源维护")]),t._v(" "),a("h2",{attrs:{id:"issue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issue","aria-hidden":"true"}},[t._v("#")]),t._v(" issue")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1562649996929-f62e489e-e67d-4ab2-bdf3-6d39344a7a0c.png#align=left&display=inline&height=276&name=image.png&originHeight=552&originWidth=1990&size=359937&status=done&width=995",alt:"image.png"}}),t._v(" "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1562650028986-83d8c37e-8ec5-4e76-9582-b5ca05cc83be.png#align=left&display=inline&height=232&name=image.png&originHeight=464&originWidth=1568&size=189789&status=done&width=784",alt:"image.png"}})]),t._v(" "),a("h3",{attrs:{id:"bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bug","aria-hidden":"true"}},[t._v("#")]),t._v(" bug")]),t._v(" "),a("p",[t._v("按照模板填写描述")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Describe the bug")]),t._v("\nA clear and concise description of what the bug is.\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Screenshots")]),t._v("\nIf applicable, add screenshots to help explain your problem.\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" To Reproduce")]),t._v("\nSteps to reproduce the behavior:\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" Go to '...'\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" Click on '....'\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" Scroll down to '....'\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("4.")]),t._v(" See error\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Expected behavior")]),t._v("\nA clear and concise description of what you expected to happen.\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" environment information")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" Version [e.g. 22]\n "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" OS: [e.g. iOS]\n "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" Browser [e.g. chrome, safari]\n")])])]),a("h2",{attrs:{id:"pull-request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull-request","aria-hidden":"true"}},[t._v("#")]),t._v(" pull request")]),t._v(" "),a("h3",{attrs:{id:"项目验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 项目验证")]),t._v(" "),a("p",[t._v("在组件里，内置的是单元测试，新增了功能或修复了bug，通过单元测试后，还不能掉以轻心，需要到项目中去验证一下。")]),t._v(" "),a("p",[t._v("首先 "),a("code",[t._v("yarn build:umd")]),t._v(" 生成最新的 dist 内容")]),t._v(" "),a("p",[t._v("再使用 "),a("code",[t._v("yarn link")]),t._v(" ，即可实现不发包，在本地对新功能进行测试。")]),t._v(" "),a("p",[t._v("验证之后，合并PR时才更有信心，也即此举能提高PR合并的成功率。")]),t._v(" "),a("p",[t._v("下面附下 "),a("code",[t._v("yarn link")]),t._v(" 操作说明。")]),t._v(" "),a("p",[t._v("假设项目路径为 "),a("code",[t._v("/path/poject")]),t._v(" ，组件名为 "),a("code",[t._v("my-component")]),t._v(" ，组件所在路径为 "),a("code",[t._v("/path/my-component")]),t._v("  则相关操作为：")]),t._v(" "),a("ul",[a("li",[t._v("cd /path/my-component")]),t._v(" "),a("li",[t._v("yarn link")]),t._v(" "),a("li",[t._v("cd /path/project")]),t._v(" "),a("li",[t._v("yarn link my-component")])]),t._v(" "),a("p",[t._v("则可以在项目中通过引用本地组件")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyComponent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-component'")]),t._v("\n")])])]),a("p",[t._v("更多具体说明请查看 "),a("a",{attrs:{href:"https://yarnpkg.com/zh-Hant/docs/cli/link",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn 文档"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"gihub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gihub","aria-hidden":"true"}},[t._v("#")]),t._v(" gihub")]),t._v(" "),a("p",[t._v("在项目中验证过后，再上 github 提 PR\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1562650175260-3810ecf5-5bf8-4e70-81ae-d284f2b4ebd4.png#align=left&display=inline&height=248&name=image.png&originHeight=496&originWidth=2030&size=355773&status=done&width=1015",alt:"image.png"}})]),t._v(" "),a("p",[t._v("基于 dev 分支\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1562650199732-3b58f5e6-785e-4c31-871a-854044a785dd.png#align=left&display=inline&height=151&name=image.png&originHeight=302&originWidth=1964&size=189973&status=done&width=982",alt:"image.png"}})]),t._v(" "),a("p",[t._v("按照模板提交")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Why")]),t._v("\nWhy is this change required? What problem does it solve?\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" How")]),t._v("\nDescribe your steps:\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" one step\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" two step...\n\nYou may use xmind or other mind map to show you logic\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Test")]),t._v("\nShow your test case\n\nyou'd better show "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`before`")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("`after`")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" Docs")]),t._v("\nIt there requires a change to the documentation？\n")])])]),a("h3",{attrs:{id:"pr技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pr技巧","aria-hidden":"true"}},[t._v("#")]),t._v(" PR技巧")]),t._v(" "),a("p",[t._v("参考文章："),a("a",{attrs:{href:"https://deliveroo.engineering/2017/09/06/play-pull-request-roulette.html#ideas-to-make-your-prs-more-review-friendly",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://deliveroo.engineering/2017/09/06/play-pull-request-roulette.html#ideas-to-make-your-prs-more-review-friendly"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("其中最重要的一点：不要一次提交一个很大改动的PR，否则别人很难 review，要学会拆分步骤。")]),t._v(" "),a("p",[t._v("下面是一个 PR 示例：")]),t._v(" "),a("p",[t._v("拆分前\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1567075387731-e7500ad8-4c27-4860-a30f-3b8f59811890.png#align=left&display=inline&height=139&name=image.png&originHeight=278&originWidth=1638&size=247439&status=done&width=819",alt:"image.png"}})]),t._v(" "),a("p",[t._v("拆分后\n"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1567075453686-459786c5-d746-4ec2-8bcf-d2bf3622f3ab.png#align=left&display=inline&height=385&name=image.png&originHeight=770&originWidth=1738&size=687818&status=done&width=869",alt:"image.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1567075528820-bbacabdd-18eb-422f-89bc-4a80b8604fb8.png#align=left&display=inline&height=151&name=image.png&originHeight=302&originWidth=1438&size=262051&status=done&width=719",alt:"image.png"}}),t._v("\n每个 PR 改动的文件少了，这样 review 起来就更容易了。")])])},[],!1,null,null,null);e.default=s.exports}}]);