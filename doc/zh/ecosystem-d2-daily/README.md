---
sidebar: auto
---

![](https://qiniucdn.fairyever.com/20181220101645.png)

# D2 Daily

![](https://qiniucdn.fairyever.com/20181220102655.png)

[D2 Daily](https://awesome.fairyever.com/daily/) 是 [D2 Awesome](https://awesome.fairyever.com/) 网站下属的一个板块，唯一功能就是每天（工作日）整理并统计出当天值得推荐的内容，包括优质开源项目，开发和设计方面的文章，工具，新闻，教程等。并且在一些技术交流群和社区网站推送。这些内容的推荐不是来自一个人，而是可以是任何人的分享，在读的你也可能是下个分享者，方法我在后面的部分会介绍。

![](https://qiniucdn.fairyever.com/20181220223950.png)

一切都是开源的，包括数据。如果你愿意的话，甚至可以拿我们整理好的资源去你的 **开源项目**，优秀项目我们会邀请加入到我们的开源组织并帮助宣传。

## 流程

![](https://qiniucdn.fairyever.com/20181220205433.png)

所有我们的相关人员（有浏览器插件和 ios 捷径）在发现好的内容时，会提交这个页面到后台服务，服务在收到请求后会将数据保存并且自动写入 [issues](https://github.com/d2-projects/d2-awesome/issues)，所以在我们的 issue 页面也可以看我们目前收集了哪些内容。爬虫会在每天1点，2点，3点分别爬一次今天的 issue，并且整理成需要的数据格式生成 markdown 文件，保存在 [issues-crawler-go](https://github.com/d2-projects/issues-crawler-go)，编辑会在最迟每天下午三点之前获取最新的整理内容，二次整理之后发布到 [d2-awesome](https://github.com/d2-projects/d2-awesome)，CI 会在项目仓库 master 分支发生变化后拉取代码，build 之后执行上传到 CDN 的操作。

> 这个流程中看起来有一些操作是不需要的，这是因为有这个项目的历史原因以及这是一个纯静态网站的限制。

## 如何参与

### Chrome 扩展

ios 捷径目前我们没有开放，仅在项目成员内部使用（因为操作比较繁琐，不是一步解决）。目前日报提交助手已经在 Chrome 上架。您可以前往 [chrome 网上应用店](https://chrome.google.com/webstore/detail/d2-日报提交助手/afhhlfojfpchajfpjefojlojfgmmdbbc) 下载。

![](https://qiniucdn.fairyever.com/20181220210544.png)

![](https://qiniucdn.fairyever.com/20181220210600.png)

**2018.12.20 注意**

目前商店中版本是 `1.0.0`，这是一个只实现了最基础功能的版本，`1.1.0` 中加入了提交之前的信息修改功能，但是目前正在审核，大家可以先下载目前最新的版本使用，后续更新即可。

### 备用方案（使用最新版本）

如果您希望使用最新版本的浏览器扩展（Chrome版本发布需要审核时间）或者不方便进入 [chrome 网上应用店](https://chrome.google.com/webstore/detail/d2-日报提交助手/afhhlfojfpchajfpjefojlojfgmmdbbc) 也可以前往 [releases](https://github.com/d2-projects/d2-awesome-daily-submit-chrome-extension/releases) 选择最新版本的 **install-x.x.x.zip** 下载，打开 Chrome 扩展程序的开发者模式后选择“加载已解压的扩展程序”加载本地插件（请先确保您已经将插件文件放在了您不经常移动的目录）。

进入 Chrome 扩展程序页面：

![](https://qiniucdn.fairyever.com/20181220221705.png)

打开开发者模式：

![](https://qiniucdn.fairyever.com/20181220221845.png)

点击“加载已解压的扩展程序”加载扩展资源：

![](https://qiniucdn.fairyever.com/20181220221920.png)

完成：

![](https://qiniucdn.fairyever.com/20181220222202.png)

### 如何使用 Chrome 扩展

扩展安装完成之后，打开您喜欢的网页，右键按图示选择分类之后即可提交给我们：

> 如果是安装插件之前就打开的页面，请刷新一遍

![](https://qiniucdn.fairyever.com/20181220222358.png)

1.1.0 版本之后还支持在分享之前自定义分享介绍：

![](https://qiniucdn.fairyever.com/20181220222506.png)

![](https://qiniucdn.fairyever.com/20181220222741.png)

提交成功之后您的分享将出现在第二天的 [D2 Daily](https://awesome.fairyever.com/daily/) 中。

## 我们希望收到什么分享

* 不错的技术文章，不限技术栈
* 开源项目推荐
* 好玩的网站
* 学习资源
* 设计资源
* 新闻

您也可以分享自己的原创文章或者项目，提高曝光度。

waiting for you ~

## 相关仓库

* 仓库 [d2-awesome](https://github.com/d2-projects/d2-awesome)
* issue 自动整理爬虫 [issues-crawler-go](https://github.com/d2-projects/issues-crawler-go)
* 浏览器提交插件 [d2-awesome-daily-submit-chrome-extension](https://github.com/d2-projects/d2-awesome-daily-submit-chrome-extension)

## 合作开源项目

[HelloGitHub](https://github.com/521xueweihan/HelloGitHub)
