(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{208:function(t,e,a){"use strict";a.r(e);var r=a(2),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"🤖自动化的github-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🤖自动化的github-workflow","aria-hidden":"true"}},[t._v("#")]),t._v(" 🤖自动化的Github Workflow")]),t._v(" "),a("p",[a("a",{attrs:{name:"df368884"}})]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("本文说明了我们的开源项目的Github协作流程，并解释了如何做到规范化及自动化。")]),t._v(" "),a("p",[t._v("内容涉及：")]),t._v(" "),a("ol",[a("li",[t._v("内容模板")]),t._v(" "),a("li",[t._v("分支模型")]),t._v(" "),a("li",[t._v("CI集成")]),t._v(" "),a("li",[t._v("自动生成Release Notes")])]),t._v(" "),a("p",[t._v("最终的效果是：")]),t._v(" "),a("ol",[a("li",[t._v("不需要提交构建产物到仓库")]),t._v(" "),a("li",[t._v("合并/发布操作完全在线化，维护者不需要拉取最新代码到本地。")])]),t._v(" "),a("p",[a("a",{attrs:{name:"58378f0d"}})]),t._v(" "),a("h2",{attrs:{id:"正文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正文","aria-hidden":"true"}},[t._v("#")]),t._v(" 正文")]),t._v(" "),a("p",[a("a",{attrs:{name:"ac042595"}})]),t._v(" "),a("h3",{attrs:{id:"内容模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容模板","aria-hidden":"true"}},[t._v("#")]),t._v(" 内容模板")]),t._v(" "),a("p",[t._v("内容模板包括：")]),t._v(" "),a("ul",[a("li",[t._v("ISSUE_TEMPLATE")]),t._v(" "),a("li",[t._v("PULL_REQUEST_TEMPLATE")])]),t._v(" "),a("p",[t._v("可以在仓库里新建一个隐藏文件夹 "),a("code",[t._v(".github")]),t._v(" , 里面放两个文件：")]),t._v(" "),a("ul",[a("li",[t._v("ISSUE_TEMPLATE.md")]),t._v(" "),a("li",[t._v("PULL_REQUEST_TEMPLATE.md")])]),t._v(" "),a("p",[t._v("也可以通过界面设置。在仓库设置里，点击“Set up templates”"),a("br"),t._v(" "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1555040003314-de4adcc6-8736-4aab-8f2c-d22ba5818f09.png#align=left&display=inline&height=605&name=image.png&originHeight=1210&originWidth=1882&size=869238&status=done&width=941",alt:"image.png"}})]),t._v(" "),a("p",[t._v("如果是组织，想为所有项目设置模板，则可以在组织下建立一个名为 "),a("code",[t._v(".github")]),t._v(" 的仓库, 再重复上面的过程即可"),a("br"),t._v(" "),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1555040119728-73604366-e0ed-4682-9da9-32340f2dbd05.png#align=left&display=inline&height=422&name=image.png&originHeight=844&originWidth=1310&size=407262&status=done&width=655",alt:"image.png"}})]),t._v(" "),a("p",[t._v("具体内容参考我们的"),a("a",{attrs:{href:"https://github.com/FEMessage/.github",target:"_blank",rel:"noopener noreferrer"}},[t._v("仓库设置"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{name:"78653ba1"}})]),t._v(" "),a("h3",{attrs:{id:"分支模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支模型","aria-hidden":"true"}},[t._v("#")]),t._v(" 分支模型")]),t._v(" "),a("p",[t._v("仓库有两个基础分支：")]),t._v(" "),a("ol",[a("li",[t._v("dev（默认分支）")]),t._v(" "),a("li",[t._v("master（用于发布）")])]),t._v(" "),a("p",[t._v("通过pull request来合并新的代码：")]),t._v(" "),a("ul",[a("li",[t._v("协作者的代码通过pr合并到dev")]),t._v(" "),a("li",[t._v("dev通过pr合并到master")])]),t._v(" "),a("p",[t._v("注意点：")]),t._v(" "),a("ul",[a("li",[t._v("merge 到 dev，使用squash merge")]),t._v(" "),a("li",[t._v("merge 到 master，使用普通的merge")]),t._v(" "),a("li",[t._v("永远不向master直接commit代码")])]),t._v(" "),a("p",[a("a",{attrs:{name:"d9c4a89d"}})]),t._v(" "),a("h3",{attrs:{id:"ci集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci集成","aria-hidden":"true"}},[t._v("#")]),t._v(" CI集成")]),t._v(" "),a("p",[t._v("推荐两个工具：")]),t._v(" "),a("ol",[a("li",[t._v("netlify")]),t._v(" "),a("li",[t._v("travis ci")])]),t._v(" "),a("p",[t._v("netlify的作用是，当有新的pr发生时，可以提前预览修改后构建的产物。可以查看"),a("a",{attrs:{href:"https://github.com/levy9527/blog/issues/4",target:"_blank",rel:"noopener noreferrer"}},[t._v("netlify使用教程"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("travis ci的作用是，master有代码更新时，自动构建发布。可以查看"),a("a",{attrs:{href:"https://github.com/levy9527/blog/issues/1",target:"_blank",rel:"noopener noreferrer"}},[t._v("travis ci使用教程"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{name:"3f128651"}})]),t._v(" "),a("h3",{attrs:{id:"自动生成release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动生成release-notes","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动生成Release Notes")]),t._v(" "),a("p",[t._v("让我们渐进式地实现这个功能。")]),t._v(" "),a("p",[t._v("首先要规范化commit message，具体可以查看"),a("a",{attrs:{href:"https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commit Message Guidelines"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("摘取重点如下，格式为：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("scope"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("subject"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BLANK LINE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BLANK LINE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("footer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("其中"),a("code",[t._v("<type>")]),t._v(": "),a("code",[t._v("<subject>")]),t._v(" 是必须的。")]),t._v(" "),a("p",[t._v("type的类型有：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("feat")]),t._v(": A new feature")]),t._v(" "),a("li",[a("strong",[t._v("fix")]),t._v(": A bug fix")]),t._v(" "),a("li",[a("strong",[t._v("docs")]),t._v(": Documentation only changes")]),t._v(" "),a("li",[a("strong",[t._v("style")]),t._v(": Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)")]),t._v(" "),a("li",[a("strong",[t._v("refactor")]),t._v(": A code change that neither fixes a bug nor adds a feature")]),t._v(" "),a("li",[a("strong",[t._v("perf")]),t._v(": A code change that improves performance")]),t._v(" "),a("li",[a("strong",[t._v("test")]),t._v(": Adding missing or correcting existing tests")]),t._v(" "),a("li",[a("strong",[t._v("chore")]),t._v(": Changes to the build process or auxiliary tools and libraries such as documentation generation")])]),t._v(" "),a("p",[t._v("规范了commit信息后，就可以使用工具"),a("a",{attrs:{href:"https://github.com/conventional-changelog/standard-version",target:"_blank",rel:"noopener noreferrer"}},[t._v("standard-version"),a("OutboundLink")],1),t._v("自动化以下操作：")]),t._v(" "),a("ul",[a("li",[t._v("更新package.json里的version字段")]),t._v(" "),a("li",[t._v("生成新的git tag")]),t._v(" "),a("li",[t._v("生成CHANGELOG.md")]),t._v(" "),a("li",[t._v("把package.json, CHANGELOG.md的改动提交至git仓库，生成相关的commit")])]),t._v(" "),a("p",[t._v("如果觉得commit规范不好记，可以使用工具："),a("a",{attrs:{href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/commitizen/cz-cli"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("也可以使用vscode的插件："),a("a",{attrs:{href:"https://marketplace.visualstudio.com/itemdetails?itemName=KnisterPeter.vscode-commitizen",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode-commititzen"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如果想阻止不规范的提交，可以使用工具："),a("a",{attrs:{href:"https://github.com/conventional-changelog/commitlint",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/conventional-changelog/commitlint"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("以上操作对非开源项目也适用，是可以在公司产品、项目中推广的方式。")]),t._v(" "),a("p",[t._v("如果要针对Github生成Release Notes，可以借助工具："),a("a",{attrs:{href:"https://github.com/github-tools/github-release-notes",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/github-tools/github-release-notes"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{name:"9G58Q"}})]),t._v(" "),a("h2",{attrs:{id:"误区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#误区","aria-hidden":"true"}},[t._v("#")]),t._v(" 误区")]),t._v(" "),a("p",[a("a",{attrs:{name:"qUd5o"}})]),t._v(" "),a("h4",{attrs:{id:"dev分支不是最新的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dev分支不是最新的","aria-hidden":"true"}},[t._v("#")]),t._v(" dev分支不是最新的")]),t._v(" "),a("p",[t._v("结论：master的commit次数会比dev多，但dev的功能代码是比master新的。")]),t._v(" "),a("p",[t._v("解释：因为master合并dev的代码会产生一个commit，同时又因为自动生成Release Notes时，CI会修改package.json，并新增一个commit，所以master永远有比dev多出的commit")]),t._v(" "),a("p",[t._v("下图是dev合并了pr，还master还未合并dev的情况：master既有领先，又有落后。"),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1559275149860-d7b10f9c-1b83-4691-8daf-74f1befb0bb6.png#align=left&display=inline&height=133&name=image.png&originHeight=266&originWidth=1990&size=239373&status=done&width=995",alt:"image.png"}})]),t._v(" "),a("p",[t._v("以下是master合并了dev，并且通过CI成功发布后的情况"),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1559275729580-79649464-4bc3-44d8-bc39-977ab60d4b00.png#align=left&display=inline&height=121&name=image.png&originHeight=242&originWidth=1966&size=216509&status=done&width=983",alt:"image.png"}}),t._v(" "),a("a",{attrs:{name:"5mHY7"}})]),t._v(" "),a("h4",{attrs:{id:"在dev分支查看package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在dev分支查看package-json","aria-hidden":"true"}},[t._v("#")]),t._v(" 在dev分支查看package.json")]),t._v(" "),a("p",[t._v("结论：以npm上的版本为准，可以查看README.md的图标"),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1559275890081-6b0c62c7-64c9-4128-9d8d-e7b516db5e20.png#align=left&display=inline&height=177&name=image.png&originHeight=354&originWidth=1946&size=158056&status=done&width=973",alt:"image.png"}})]),t._v(" "),a("p",[t._v("解释：接入CI后，package.json的修改不再由人工操作，所以dev的package.json不会得到更新。"),a("br"),a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160590/1559275853192-24c15a9b-31bd-4f43-8f18-6fd76a6974ed.png#align=left&display=inline&height=436&name=image.png&originHeight=872&originWidth=1966&size=660724&status=done&width=983",alt:"image.png"}})])])},[],!1,null,null,null);e.default=s.exports}}]);