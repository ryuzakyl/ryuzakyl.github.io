---
title: Mac 效率工具必备神器 —— Alfred
date: 2020-09-23 23:05:50
tags: [Mac, Tools]
categories: ToolsDev
keywords:
  - mac
  - app
  - tutorial
---

![Alfred](https://gitee.com/michael_xiang/images/raw/master/uPic/w3dQKD.png)

## 前言

[alfred](https://www.alfredapp.com/) 这款软件称为「神器」真是当之无愧。今天专门总结一下，作为之前 [Mac 配置教程-开发篇](https://michael728.github.io/2019/04/14/tools-dev-mac/) 的补充。

<!-- more -->

> 需要说明的是，如果你发现我介绍的功能无法使用，则代表需要花钱购买它的 Powerpack。麦哥是从淘宝购买的正版永久激活码搞定的，百十块大洋~如果你囊中羞涩，也有一些网站提供了破解版本。关注公众号[Coder魔法院]，回复 Alfred，会提供对应的下载网站（注意：破解版软件往往会有安全风险）。

## General 通用设置

- `Startup`：勾选上，这样就能在登录系统时自动启动 Alfred；
- `Alfred Hotkey`： 启动 Alfred 的快捷键，我设置的是双击 Command 键；

![通用设置](https://gitee.com/michael_xiang/images/raw/master/uPic/CzLoxh.png)

## Alfred 基本功能

- `/`：输入 `/`，会跳转到系统根目录；
- `~`：输入 `~`，会进入当前用户的用户目录；
- 输入搜索内容后，`Enter` 按键是直接打开文件，`Command + Enter`表示打开文件所在文件夹；
- `Command + L` 居中放大显示结果；

### 搜索应用

![搜索应用](https://gitee.com/michael_xiang/images/raw/master/uPic/PD2BnJ.png)

### 文件搜索

- `Find + 文件名`：搜索文件，Enter 确认之后，直接跳转到 Finder 中文件所在位置；
- `Open + 文件名`：搜索文件，Enter 确认之后，直接打开该文件；

![find](https://gitee.com/michael_xiang/images/raw/master/uPic/FidDNA.png)

### 内容搜索

输入 `in` 命令加空格，以及待搜索的文本，列出磁盘中包含该文本的相关文件：

![in](https://gitee.com/michael_xiang/images/raw/master/uPic/74XFzg.png)

## Features 特性功能

Features 功能很多，这里仅介绍目前个人发现的常用设置。

### Default Results 默认结果

这个菜单项主要是设置 Alfred 搜索结果时，默认从哪些目录搜索出结果。

- `Essentials`：搜索系统偏好设置和联系人信息；
- `Extras`：指定搜索对象，比如文件夹、文档、图片等。如果格式不全，可以点击 `Advanced` 按钮自定义；
- `Search Scope`：指定搜索范围，哪些路径可以搜；

![Default Results](https://gitee.com/michael_xiang/images/raw/master/uPic/HbqAlq.png)

### Web Search 文件搜索

该功能非常方便，快捷键启动 Alfred 之后，输入指定网站的关键字，然后输入要搜索的内容，按下 Enter 键之后自动跳转到浏览器对应网站的搜搜结果，一气呵成的搜索体验！

![alfred-web-search.gif](https://i.loli.net/2020/09/26/9ZCbHyKspqD3OXk.gif)

只需要点击右下角的 `Add Custom Search` 按钮，即可添加你经常搜索的网站的快捷方式：

![网站搜索](https://gitee.com/michael_xiang/images/raw/master/uPic/ad01wm.png)

日常网站：
- 百度：`https://www.baidu.com/s?ie=utf-8&f=8&wd={query}`
- 淘宝：`https://s.taobao.com/search?q={query}`
- 豆瓣电影：`http://movie.douban.com/subject_search?search_text={query}&cat=1002`
- B 站：`http://search.bilibili.com/all?keyword={query}`
- 知乎：`https://www.zhihu.com/search?type=content&q={query}`
- 什么值得买：`https://search.smzdm.com/?s={query}&v=b`

技术网站：
- DuckDuckGo：`https://duckduckgo.com/?q={query}`
- Stackoverflow：`http://www.stackoverflow.com/search?q={query}`
- Github Search：`https://github.com/search?utf8=%E2%9C%93&q={query}`
- MDN：`https://developer.mozilla.org/zh-CN/search?q={query}`

### Web Bookmarks

又是一个非常赞的功能！虽然我浏览器中已经安装了插键可以快速搜索我的书签，但是 Alfred 的作用就是，当浏览器没有打开、你正在做其他工作时想要快速打开你浏览器中的某个书签，这时候你只需要快速启动 Alfred->搜索书签的关键字->Enter 打开该书签。又是一气呵成的操作！

![alfred-bookmarks-search.gif](https://i.loli.net/2020/09/26/rZecT87wD6Nm1Hq.gif)

我设置了一个关键字 `bm`，寓意 `bookmarks`，用来表示我目的是搜索书签：

![bm](https://gitee.com/michael_xiang/images/raw/master/uPic/33s1ZC.png)

> 如果遇到权限问题，需要在系统偏好设置中`安全性与隐私->隐私->完全磁盘访问权限，勾选 Alfred 4.app`。接着在 Alfred 中输入 `Reload Alfred Cache` 后回车，Alfred 重新加载缓存就可以搜索书签

### Clipboard History 剪贴板历史

这个功能其实是我掏钱购买它的主要原因之一！在 Windows 上有 Ditto，但是在 Mac 上没有体验足够好的剪贴板历史工具。之前也使用了几个开源免费的剪贴板工具，但是他们有一些细节功能缺失，比如没法搜索剪贴板的历史。

有了 Alfred 的剪贴板增强，两个场景最常用：
- 当你需要大段编辑文字、敲代码时，不需要反复在两个页面复制、切换页面、粘贴……只需要在一个页面将想要复制的内容复制好，然后切换页面，刚刚你复制的历史片段都可以看到，大大提高了文本编辑的效率！
- 当你需要快速找到某一天你复制过的片段时，只需要输入关键字在剪贴板历史中搜索即可~

![](https://ftp.bmp.ovh/imgs/2020/10/6951139ef4b30949.gif)

这里我把它们都设置为存储 1 个月，同时把打开剪贴板的默认快捷键为 `Command + Shift + V`：

![剪贴板设置](https://gitee.com/michael_xiang/images/raw/master/uPic/dMbZQX.png)

- `Clear Now`：表示立即清空剪贴板的历史

### Snippets 文本片段

有一些文本是需要反复输入的，比如你的邮箱、QQ号、地址、手机号码、某个网址等信息，亦或者聊天常用语句、表情等等，这些都可以通过 Alfred 来管理，节省输入时间。

![Snippets](https://gitee.com/michael_xiang/images/raw/master/uPic/i0SKPx.png)

> 这个功能很强大，不止描述的那么简单。

Alfred 官网 [Snippets](https://www.alfredapp.com/extras/snippets/) 提供了集合片段集合，下载后双击文件即可导入到 Alfred 中。

- Emoji Pack
- Mac Symbols

例如，我们有时候编辑文本时经常需要输入 Mac 上的一些按键符号⌘：

![alfred-snippsets.gif](https://i.loli.net/2020/10/03/ndU6wJa5zlIojXB.gif)

### Calculator 计算器

直接在输入框中输入计算的表达式，例如 `15*3`，Alfred 会自动计算出结果：

![计算结果](https://gitee.com/michael_xiang/images/raw/master/uPic/Kzzbmw.png)

Advanced 增强计算的功能，支持一些高级计算的表达式，使用时以 `=` 开头，然后输入表达式即可，例如：`=sqrt(9)+abs(-2)`。

支持这些函数：

```
sin, cos, tan, log, log2, ln, exp, abs, sqrt, asin, acos, atan, sinh, cosh, tanh, asinh, acosh, atanh, ceil, floor, round, trunc, rint, near, dtor, rtod等
```

### Dictionary 字典

输入 `define` 开头，然后输入查询的单词；

![define](https://gitee.com/michael_xiang/images/raw/master/uPic/C2pSvb.png)

- `Define a word`：可以自定义一个关键词来标记你要查询单词了，例如 `df`。

### System 系统

这个设置也很实用，通过在 Alfred 中输入一些命令来实现系统的操作，比如输入 `Empty Trash` 就是清空垃圾箱。不用担心记不住命令，因为 Alfred 是支持联想的。

![系统命令](https://gitee.com/michael_xiang/images/raw/master/uPic/yJ71ij.png)

常用的有：
- `emptytrash`：清空垃圾箱
- `lock`：锁定屏幕
- `slppe`：休眠
- `restart`：重启
- `shutdown`：关机
- `eject`：快速推出一些外界设备，比如 U 盘、挂载的镜像

### Terminal 终端

可以直接在 Alfred 中输入 `>` 之后，指定 shell 命令在 Terminal 中执行。

![Terminal](https://gitee.com/michael_xiang/images/raw/master/uPic/3vvwm7.png)

操作示例：

![example](https://ftp.bmp.ovh/imgs/2020/10/6855e3274cfd9d1f.gif)

默认情况是在 Mac 自带的 Terminal 中执行命令，如果你想在 Alfred 中执行，则需要通过如下命令自定义：

```shell
on alfred_script(q)
    tell application "iTerm"
        set _length to count window
    if _length = 0 then
        create window with default profile
    end if
    set aa to (get miniaturized of current window)
    if aa then
        set miniaturized of current window to false
    end if
    set bb to (get visible of current window)
    if bb is false then
        set visible of current window to true
    end if
    set cc to frontmost
    if cc is false then
        activate
    end if
        (*if _length = 0 then*)
            set theResult to current tab of current window
        (*else
            set theResult to (create tab with default profile) of current window
        end if*)
        write session of theResult text q
end tell
end alfred_script
```

### Previews 预览

Mac 预览功能也叫 `Quick Look`。当我们在 Finder 中选中一些文件之后，按住 `Space/空格键` 键，可以预览文件内容。Alfred 中这个预览功能叫 `Preview`。当我们在 Alfred 搜到一些文件之后，按一下 `Shift` 按键，就可以预览对应文件内容。同时，在 Finder 中，也可以通过 Alfred 提供的预览功能预览文件，对应快捷键是 `Command+y`。

![预览](https://gitee.com/michael_xiang/images/raw/master/uPic/wvkfkB.png)

## workflow

### workflow 是什么

![workflow](https://gitee.com/michael_xiang/images/raw/master/uPic/TYaQGU.png)

上面截图是 Alfred 官网对 Workflow 的一个描述，简单描述就是，workflow 是一个类似工作流的功能，它可以根据你预设的流程进行一系列的操作来帮你实现一个功能。

### 日用推荐

[NumToCNY](http://www.packal.org/workflow/numtocny)：转换数字为人民币金额，`cny` 然后输入数字即可

![数字转人民币](https://gitee.com/michael_xiang/images/raw/master/uPic/72kvgD.png)

[YoudaoDict](https://github.com/whyliam/whyliam.workflows.youdao) 有道翻译

![有道翻译](https://gitee.com/michael_xiang/images/raw/master/uPic/irarxg.png)

[mpco/AlfredWorkflow-Recent-Documents](https://github.com/mpco/AlfredWorkflow-Recent-Documents/blob/master/README_CN.md) 快速打开最近访问的文档、文件夹、应用
  - 输入 rr，列出当前激活应用的最近文档
  - 输入 rf，列出最近访问的文件夹
  - 输入 rd，列出最近打开的各种文件
  - 输入 ra，列出最近打开的应用

### 开发推荐

[ip address](https://github.com/zenorocha/alfred-workflows/blob/master/ip-address/ip-address.alfredworkflow)：查看本机 IP

![IP](https://gitee.com/michael_xiang/images/raw/master/uPic/ptmUFi.png)

[http_status_code](https://github.com/ilstar/http_status_code)：显示 HTTP 状态码含义
  - 输入 `httpcode + 状态码`，按下 Enter 键会跳到对应网站

![httpcode](https://gitee.com/michael_xiang/images/raw/master/uPic/a7jRch.png)

[encode](https://githb.com/willfarrell/alfred-encode-decode-workflow) 字符编码（encode）、解码（decode），例如有时候一些密码、URL 中有特殊字符则可以使用它

![encode](https://gitee.com/michael_xiang/images/raw/master/uPic/eXkrrY.png)

### 下载源

- Alfred官宣/workflows：https://www.alfredapp.com/workflows/
- alfredworkflow：http://www.alfredworkflow.com/
- packal/workflow-list：http://www.packal.org/workflow-list
- zenorocha/alfred-workflows：https://github.com/zenorocha/alfred-workflows
- github/awesome-alfred-workflows：https://github.com/alfred-workflows/awesome-alfred-workflows

> 由于网络原因，workflow 可能下载比较慢，麦哥已经将本文提到的一些 workflow 文件打包好了，公众号后台回复 「Alfred」即可获取相关的安装文件。

![公众号](https://gitee.com/michael_xiang/images/raw/master/uPic/公众号-二维码-截图.png)

## Usage 使用统计

![Usage](https://gitee.com/michael_xiang/images/raw/master/uPic/LYoIRO.png)

## 参考
- [总是在 Mac 「装机必备」看到的搜索利器 Alfred，究竟是怎么用的？| 新手问号](https://sspai.com/post/43973)
- [效率神器 Alfred workflow 插件推荐](https://hufangyun.com/2018/alfred-workflow-recommend/)
- [Alfred神器使用手册](http://louiszhai.github.io/2018/05/31/alfred/#%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85alfred)
- [掘金-Mac 提升开发效率的小工具](https://juejin.im/post/5b0e99436fb9a009e405dbb6)
- [iHTCboy/程序员的macOS系列：高效Alfred进阶](https://ihtcboy.com/2020/02/09/2020-02-09_%E7%A8%8B%E5%BA%8F%E5%91%98%E7%9A%84macOS%E7%B3%BB%E5%88%97%EF%BC%9A%E9%AB%98%E6%95%88Alfred%E8%BF%9B%E9%98%B6/) 博主总结很详细，推荐