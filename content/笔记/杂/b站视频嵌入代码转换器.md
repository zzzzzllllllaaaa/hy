[[bilibili(B站)]]

在用户输入包含相对路径的 Bilibili 嵌入代码后，能够正确生成包含禁止自动播放、设置超清播放和自适应页面大小的嵌入代码，可以直接点击“复制结果”按钮将转换后的代码复制到剪贴板。
### HTML 代码：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bilibili 嵌入代码转换器</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        textarea {
            width: 100%;
            height: 100px;
            margin-bottom: 10px;
        }
        button {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #00a1d6;
            color: white;
            border: none;
            cursor: pointer;
            margin-bottom: 10px;
        }
        button:hover {
            background-color: #007db5;
        }
        #output {
            margin-top: 20px;
            border: 1px solid #ccc;
            padding: 10px;
            background-color: #f9f9f9;
            white-space: pre-wrap;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <h1>Bilibili 嵌入代码转换器</h1>
    <textarea id="inputCode" placeholder="请输入 Bilibili 嵌入代码"></textarea>
    <button onclick="convertCode()">转换</button>
    <button id="copyButton" class="hidden" onclick="copyToClipboard()">复制结果</button>
    <div id="output"></div>

    <script>
        function convertCode() {
            try {
                const inputCode = document.getElementById('inputCode').value;
                const urlMatch = inputCode.match(/src="([^"]+)"/);

                if (!urlMatch) {
                    alert('请输入有效的 Bilibili 嵌入代码');
                    return;
                }

                let url = urlMatch[1];
                if (url.startsWith('//')) {
                    url = 'https:' + url;
                }

                const urlObj = new URL(url);
                urlObj.searchParams.set('autoplay', '0');
                urlObj.searchParams.set('quality', '3');

                const convertedCode = `
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="${urlObj.toString()}"
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
            scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
    </iframe>
</div>`;

                document.getElementById('output').innerText = convertedCode;
                document.getElementById('copyButton').classList.remove('hidden');
            } catch (error) {
                alert('转换过程中出现错误，请检查输入的嵌入代码是否有效');
                console.error('Error:', error);
            }
        }

        function copyToClipboard() {
            const outputDiv = document.getElementById('output');
            const range = document.createRange();
            range.selectNode(outputDiv);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            alert('结果已复制到剪贴板');
        }
    </script>
</body>
</html>
```


### 解释：

1. **处理相对路径**：在 JavaScript 中，检查 URL 是否以 `//` 开头，如果是，则在其前面加上 `https:` 以确保 URL 有效。
2. **URL 对象**：使用 `URL` 对象来处理和修改 URL 参数。
3. **转换后的代码**：生成包含适应页面大小的 `div` 容器和 `iframe`，并将其显示在 `output` `div` 中。
4. **添加`copyButton`按钮**：刚开始隐藏，当转换成功时显示。
5. **`copyToClipboard`函数**：实现复制功能，选择`outputDiv`中的文本并复制到剪贴板。
6. **显示复制按钮**：当转换成功时，通过移除`hidden`类来显示复制按钮。

