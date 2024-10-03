[[quartz配置]]


默认的可以用着，但是试用过了就要钱了。
### umami
先在[umami](https://us.umami.is/)注册登录添加网站，获取到网站跟踪代码，再在quartz.config.ts配置analytics，设置为`{ provider: 'umami', host: '<your-umami-host>', websiteId: '<your-umami-website-id>' }` ，其中`<your-umami-website-id>`从网站嵌入代码获取<your-umami-host>填 https://cloud.umami.is 就可以了。（开始的时候我一直是复制粘贴跟踪代码上的 https://cloud.umami.is/script.js 一直没反应）

umami免费计费计划个人网站就够用了，不够用的话网站一定就是可以赚到钱了，大概也不在意20美元的月费。

### 更多
[posthog](https://us.posthog.com/)