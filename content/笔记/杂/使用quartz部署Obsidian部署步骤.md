[[数字花园]]


```
npx quartz sync
````
### 部署教程
[项目地址](https://github.com/jackyzha0/quartz)
[项目说明文档](https://quartz.jzhao.xyz/)，里面有部署教程，比较丰富。

- NodeJS  v20+ （使用 node -v 检查您的版本）[Node.js — 下载 Node.js® (nodejs.org)](https://nodejs.org/zh-cn/download/prebuilt-installer)
- NPM v9.3.1+（使用 npm -v 检查您的版本）（安装node后自带npm）
- Git（使用 git --version 检查您的版本）[CNPM Binaries Mirror (npmmirror.com)](https://registry.npmmirror.com/binary.html?path=git-for-windows/)
- Obsidian

ps:`@jackyzha0/quartz@4.3.0` 要求 `npm` 版本至少为 `9.3.1`，并且 `node` 版本为 `20` 或 `>=22`。建议直接22版本走起。
##### 步骤 1. 下载并安装 Quartz

- 打开终端并运行以下命令（自己创建一个文件夹，在文件夹上右键打开git指令页面）
```
git clone https://github.com/jackyzha0/quartz.git
# 下载 Quartz 存储库的副本，并将其存储在当前文件夹的 quartz 中
 
cd quartz
# 进入 quartz
 
npm i
# 安装 Quartz 依赖项
 
npx quartz create
# 创建一个新的 Quartz 项目
````

###### 注意
如果在npm i卡住了就先更换阿里镜像源再试

- 更改源：`npm config set registry https://registry.npmmirror.com`
- 查看源：`npm config get registry`

如果`npx quartz create`出错了，就尝试在 PowerShell 中运行 `npx quartz create` 命令，Win + X。

`npx quartz create` 创建项目时，可先选择 `Empty Quartz`，后期再添加要发布的笔记。运行 `npx quartz build --serve`，发布网站，通过 [http://localhost:8080/](http://localhost:8080/) 访问预览，可以自己修修改改。
##### 步骤 2. 设置 GitHub 存储库

- 在 GitHub.com 上创建一个新存储库。不要使用 README 、许可证或 gitignore 文件初始化新存储库。（就是创建一个空白库）
- 在 GitHub.com 的“快速设置”页面上存储库的顶部，单击剪贴板以复制远程存储库 URL

```
git remote -v
# 列出所有被跟踪的仓库
# origin  https://github.com/jackyzha0/quartz.git (fetch)
# origin  https://github.com/jackyzha0/quartz.git (push)
# upstream        https://github.com/jackyzha0/quartz.git (fetch)
# upstream        https://github.com/jackyzha0/quartz.git (push)
 
git remote set-url origin <URL>
# 此命令删除 origin 远程仓库 并替换为自己的 URL
 
npx quartz sync --no-pull
# 将对本地仓库所做的更改推送到远程仓库上的
# 末尾带有绿色 Done! 
````

注意：自己url替换掉`<URL>`，而不是url。

##### 步骤 3. 创建 Obsidian 库

- 在 Obsidian 中将 quartz 里的 content 文件夹作为 Obsidian 库打开，然后就可以按照以往习惯写文档（最后部署完后url/你的笔记名就能找到你的笔记）
- index.md 是网站首页不要删除（我没看到）

```
npx quartz sync
````

每次更改后记得更新推送到远程仓库上。`

##### 步骤 4. 在线托管您的保管库

- 在您本地的 Quartz 中，创建一个新文件`quartz/.github/workflows/deploy.yml`。


```
name: Deploy Quartz site to GitHub Pages
 
on:
  push:
    branches:
      - v4
 
permissions:
  contents: read
  pages: write
  id-token: write
 
concurrency:
  group: "pages"
  cancel-in-progress: false
 
jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0 # Fetch all history for git info
      - uses: actions/setup-node@v3
        with:
          node-version: 18.14
      - name: Install Dependencies
        run: npm ci
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: public
 
  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
````

- 前往 GitHub 仓库，点击 Settings>Pages>Source 下拉菜单，选择 GitHub Actions
- 最后`npx quartz sync`提交更改，网站将部署到 `<github-username>.github.io/<repository-name>`，Pages 页面将会有以下提示 `Your site is live at https://insile.github.io/my-notes/`

每次更改后记得更新推送到远程仓库上，有的时候推不上去可以用[sublimemerge.com](https://www.sublimemerge.com/)，或许会好一点。

##### 步骤 5. 更多个性化设置

- [https://quartz.jzhao.xyz/](https://quartz.jzhao.xyz/)