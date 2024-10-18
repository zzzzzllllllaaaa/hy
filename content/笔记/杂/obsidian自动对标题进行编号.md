
注：该编号不会实际修改文档中的标题编号。（[来源](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-%E6%A0%B8%E5%BF%83%E5%A4%A7%E7%BA%B2outline%E6%A0%87%E9%A2%98%E6%98%BE%E7%A4%BA%E8%87%AA%E5%8A%A8%E7%BC%96%E5%8F%B7/)）

### 步骤一：启用自定义 CSS

1. **打开 Obsidian**：
   - 启动 Obsidian 应用程序。

2. **进入设置**：
   - 点击左下角的齿轮图标（Settings）以打开设置页面。

3. **启用自定义样式表**：
   - 在设置页面左侧菜单中找到并点击 `Appearance`。
   - 确保“Custom CSS”或“CSS snippets”选项已启用。如果没有看到这些选项，您可能需要先启用“Advanced Appearance Settings”或“CSS snippets”插件。

### 步骤二：创建和应用 CSS 代码

1. **创建 CSS 文件**：
   - 在您的 Obsidian 工作目录下，找到或创建一个名为 `.obsidian` 的隐藏文件夹。
   - 在 `.obsidian` 文件夹中，找到或创建一个名为 `snippets` 的文件夹。

2. **添加 CSS 代码**：
   - 在 `snippets` 文件夹内，创建一个新的文件，例如 `outline-numbering.css`。
   - 将以下 CSS 代码粘贴到 `outline-numbering.css` 文件中（根据您的需求选择样式一、样式二或拓展样式）：

### 样式一：从一级标题开始计数
```css
/* 样式一：从一级标题开始计数 */
.workspace-leaf-content[data-type="outline"] {
  counter-reset: rootCounter;

  .tree-item .tree-item-self .tree-item-inner::before {
    content: counters(rootCounter, ".") ". ";
    counter-increment: rootCounter;
  }

  .tree-item-children {
    counter-reset: innerCounter;
  }

  .tree-item-children .tree-item .tree-item-self .tree-item-inner::before {
    content: counters(rootCounter, ".") "." counters(innerCounter, ".") ". ";
    counter-increment: innerCounter;
  }
}
```

### 样式二：从二级标题开始计数
```css
/* 样式二：从二级标题开始计数 */
.workspace-leaf-content[data-type="outline"] {
  counter-reset: rootCounter;
  
  .tree-item .tree-item-self .tree-item-inner::before {
    counter-increment: rootCounter;
  }

  .tree-item-children {
    counter-reset: innerCounter 0;
  }

  .tree-item-children .tree-item .tree-item-self .tree-item-inner::before {
    content: counters(innerCounter, ".") " ";
    counter-increment: innerCounter;
  }
}
```

### 拓展样式：文件大纲显示编号
```css
/* 拓展样式：文件大纲显示编号 */
.workspace-leaf-content[data-type="file-explorer"] {
  counter-reset: rootCounter;

  .tree-item .tree-item-self .tree-item-inner::before {
    content: counters(rootCounter, ".") ". ";
    counter-increment: rootCounter;
  }

  .tree-item-children {
    counter-reset: innerCounter;
  }

  .tree-item-children .tree-item .tree-item-self .tree-item-inner::before {
    content: counters(rootCounter, ".") "." counters(innerCounter, ".") ". ";
    counter-increment: innerCounter;
  }
}
```

3. **保存文件**：
   - 保存 `outline-numbering.css` 文件。

### 步骤三：启用 CSS 代码

1. **回到 Obsidian 设置**：
   - 在设置页面左侧菜单中，找到并点击 `Appearance`。

2. **启用 CSS snippets**：
   - 在 `CSS snippets` 部分，找到 `outline-numbering`（或者您创建的 CSS 文件名），并启用该片段。

3. **查看效果**：
   - 打开核心插件 Outline，您应能看到标题已经根据您选择的样式自动编号。

