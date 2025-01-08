---
tags: []
---
[双链笔记](双链笔记.md)

[介绍](https://pkmer.cn/Pkmer-Docs/12-tiddywiki/tiddywiki//#%E4%BA%8C%E4%B8%8B%E8%BD%BD%E4%B8%8E%E5%AE%89%E8%A3%85)
[下载](https://github.com/tiddly-gittly/TidGi-Desktop/releases)
[太微中文教程](https://tw-cn.netlify.app/#%E6%AC%A2%E8%BF%8E%E6%9D%A5%E5%88%B0%E5%A4%AA%E5%BE%AE%EF%BC%81:%E6%AC%A2%E8%BF%8E%E6%9D%A5%E5%88%B0%E5%A4%AA%E5%BE%AE%EF%BC%81)

感觉确实挺不错的，主要是布局比较喜欢，想把obsidian的笔记转化过去。放弃了，放了部分笔记进去，打开速度变得超级慢（[[删减功能来加速太微]]），可能是我内网穿透的流量限制吧！反正用的不舒服。

拿来主义，直接拿[[仿tiddlywiki故事河布局]]到obsidian用。
### 群晖docker部署
[群晖部署太微教程](https://laosu.tech/2022/02/21/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%BB%9C%E7%AC%94%E8%AE%B0%E6%9C%ACTiddlyWiki/)，照着做，能成。（有一个值空缺就直接删除，不影响）
群晖注册表被墙就用指令拉取。[指令拉取教程](https://www.jindouyun.cn/document/industry/details/240580)

这里要注意，下载插件后都需要修改.info文件，可以先改成txt，编辑，在插件部分按相同格式添加新安装插件的名称（名称一定要对），保存，改回来，再重启容器。


### 常用插件
设置中文：zh-hans
md语法支持：markdown（但是太微的md不支持双链）
自动补全插件：codemirror6
内链自动更新： **Relink 系列 (Relink, Relink Markdown, Relink Titles, Relink Field Names)**:专注于重命名功能，确保标题、字段和链接之间的一致性，避免断链问题，全部一次性下载搞定。
[[悬浮工具栏]]
增强编辑：Custom Markup（其中包括撤回和重做）
自动化目录：Page TOC，搭配 ToC generic，将扩展的目录添加到条目的底部。


#### 其中添加中文语言插件时，修改info是添加


    "languages": [
        "zh-Hans"
    ],

与插件框平级，而不在插件框里面。