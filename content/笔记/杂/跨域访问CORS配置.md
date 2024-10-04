[[编码查询名称]]，[[反向代理]]

我解析域名zhzhzh.fun可以自动补全，反代域名www.zhzhzh.fun却不可以，这就需要设置这个。

宝塔面板在网站设置-其它设置-跨域访问CORS配置，可以进行配置。


- **来源（Origins）**：`*` （或指定具体域名，如 `http://zhzhzh.fun`）
- **请求方法（Methods）**：`GET, POST, PUT, DELETE, OPTIONS`
- **请求头（Headers）**：`*` （或指定具体请求头，如 `Content-Type, Authorization`）
- **响应头（Headers）**：`*` （或指定具体响应头）
- **缓存时间（Seconds）**：`3600` （这表示浏览器将在一次预检请求后缓存3600秒）

### 说明
在配置CORS时，**来源（Origins）** 字段指的是允许发起跨域请求的域名。如果希望允许从 `www.zhzhzh.fun` 以及 `zhzhzh.fun` 两个不同的域名进行跨域请求，您需要在来源字段中分别指定它们。

如果只允许特定来源：

- **来源（Origins）**：`http://www.zhzhzh.fun, http://zhzhzh.fun`

如果希望允许任何来源发起跨域请求，可以使用通配符 `*`：

- **来源（Origins）**：`*`