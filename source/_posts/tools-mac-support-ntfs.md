---
title: Mac 免费支持 Windows 可用的移动硬盘/U盘
date: 2019-11-17 21:36:50
tags: [Mac, Tools, NTFS]
categories: ToolsDaily
keywords:
  - mac
  - config
  - ntfs
---

![](https://gitee.com/michael_xiang/images/raw/master/dj-4595492_640.jpg)

{% cq %}
[图片链接](https://pixabay.com/photos/dj-music-turntable-jockey-volume-4595492/)
{% endcq %}

## 前言

Windows 上的磁盘格式，默认一般都是 NTFS 格式。Mac 能够直接从 NTFS 格式的磁盘拷贝文件，但是不支持直接从 Mac 上拷贝文件到 NTFS 磁盘。

<!-- more -->

{% note success no-icon %}
最早在 OSX 10.5的时候，OSX 其实原生就支持直接写入 NTFS 的盘的，后来由于微软的限制，把这个功能给屏蔽了，我们可以通过命令行手动打开这个选项。
{% endnote %}

这时候一般上网查到的都是推荐去购买软件.
- `Paragon NTFS for Mac(¥139)`
- `Tuxera NTFS for Mac(¥99)`
- 开源免费的 [mounty](https://mounty.app/)-`brew cask install mounty`，但是這個免費的好像更新不頻繁了，最近一次还是 2018年9月份，现在都是2019年11月份了，最新的系統测试不OK。

偶然发现有办法可以通过设置，让 Mac 免费支持 NTFS，在最新的系统 `macOS Catalina(10.15.1)`  测试 OK 🤡 

这时候有两个场景：

1.你的移动硬盘或者U盘可以格式化位 `ExFAT` 格式，因为 Windows 和 Mac 都支持这种格式。

![](https://gitee.com/michael_xiang/images/raw/master/0VXNij.png)

2.移动硬盘或者U盘上的内容比较多，不方便转移后，进行格式化，这时候，就需要通过如下的方法进行设置了。

## 配置

1.查看磁盘的 Volume Name

```
diskutil list
```

![](https://gitee.com/michael_xiang/images/raw/master/xEKXmB.png)

可以看到的这个磁盘名叫做 `Seagate翔`。

{% note warning no-icon %}
如果 Volume Name 有空格，用 `\040` 表示空格。
{% endnote %}

2.更新 `/etc/fstab` 文件

```
sudo vi /etc/fstab
```

添加：

```
LABEL=Seagate翔 none ntfs rw,auto,nobrowse
```

- `rw` 表示把这个分区挂载为可读写的 ntfs 格式
- `nobrowse` 这个代表了在 finder 里不显示这个分区，这个选项非常重要，如果不打开的话挂载是不会成功的

3.将移动硬盘/USB拔出重插，然后在 Finder->前往->前往文件夹，输入：`/Volumes`，这时候可以看到我的移动硬盘，拖动它至Finder的边栏『个人收藏』，后面就可以方便打开和推出。

![](https://gitee.com/michael_xiang/images/raw/master/rXEzLY.png)

4.将磁盘快捷方式添加到桌面：

```shell
sudo ln -s /Volumes/Seagate翔 ~/Desktop/Seagate翔
```

## 缺点

如果后面有其他便携硬盘设置使用，需要按照上面步骤再操作适配一下。因此，本文需要收藏好，以后还要查阅参考。

## 参考

- [CSDN——Mac OSX 打开原生自带读写NTFS功能](https://blog.csdn.net/linhai1028/article/details/79418924)
- [chad——Mac开启原生NTFS读写功能](https://chad-it.github.io/2018/06/25/Mac%E5%BC%80%E5%90%AF%E5%8E%9F%E7%94%9FNTFS%E8%AF%BB%E5%86%99%E5%8A%9F%E8%83%BD/)

## 最后

- 本文地址 [Mac 免费支持 Windows 可用的移动硬盘/U盘](https://michael728.github.io/2019/11/14/tools-mac-support-ntfs/)