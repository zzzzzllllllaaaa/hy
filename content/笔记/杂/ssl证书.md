[[域名]]

把htpp变成htpps，让网站内容传输更安全。

[宝塔面板 SSL 证书安装部署](https://cloud.tencent.com/document/product/400/50874)
[免费ssl证书教程](https://www.aibecoo.com/b/63409.html)

注意：http端口是80,https端口是445，如果其它应该把端口占用了，域名解析就会出现问题。(如果有ssl证书还是会有安全提示就是[nginx](nginx.md)的问题，重启一下)

[usual2970/certimate: 开源的SSL证书管理工具，可以帮助你自动申请、部署SSL证书，并在证书即将过期时自动续期.](https://github.com/usual2970/certimate)

[mfssl](https://www.mfssl.com/)，免费的ssl证书。

### cloudfare ssl证书
好像只要域名搞到[[cloudfare（被墙了）]],然后开启边缘证书“始终使用 HTTPS”，宝塔面板再[[宝塔面板子域名配置]]完成，解析好泛域名`*`，后续就不需要再在cloudfare一个个设置解析记录了，而是宝塔面板可以直接填入次级域名使用，自动就会https。

