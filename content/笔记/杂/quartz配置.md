[[使用quartz部署Obsidian部署步骤]]

[Configuration (jzhao.xyz)](https://quartz.jzhao.xyz/configuration),在官方网站看看，我这里写一些我用到的。

### quartz.config.ts
网站标题标题修改  `pageTitle: "3zh2"`
默认网站语言改`locale: "zh-CN"`，最开始是默认英文，改zh-CN就是默认中文
自定义域名需要修改`baseUrl: "www.zhzhzh.fun"`

### quartz.layout.ts
页脚大概是这个样子，可以按照格式继续往下加
```
    links: {

      赣ICP备2024041153号: "https://beian.miit.gov.cn/",

      "先空着": "","先空着2": "",

    },
````
要启用严格换行，只要启用 `Plugin.HardLineBreaks()` 插件，需要在 `transformers` 部分添加对该插件的引用。
```
      Plugin.HardLineBreaks(), // 添加这一行启用硬换行插件
````
启用显示创建修改文章日期，同上做法。
````
Plugin.CreatedModifiedDate({ priority: ["frontmatter" ,"git", "filesystem"] }),//添加创建修改日期插件
`````