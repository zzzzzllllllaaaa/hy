[[obsidian插件]]

自动为您笔记中与存储库中其他笔记的标题或别名匹配的文本创建虚拟链接。创建类似词汇表的功能，显示未链接提及并将其转换为实际链接。

效果非常好，再修改一下样式，更加美观。[来源](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/virtual-linker/virtual-linker/)，用法与[[obsidian自动对标题进行编号]]相同。

```css
span.virtual-link>a.internal-link{
  background-color: rgba(206, 195, 94, 0.1);
  border-bottom: 2px rgba(238, 190, 34, 0.69);
  border-bottom-style: dashed;
  color: var(--text-normal) !important;
  text-decoration-line:none;
}

.virtual-link-default {
  filter: none;
}
```