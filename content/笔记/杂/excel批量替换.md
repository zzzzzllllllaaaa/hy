[[excel]]

## 单值替换
1. 打开Excel工作簿。
2. 按下 `Ctrl + H` 打开“查找和替换”对话框。
3. 在“查找内容”框中输入你想要查找的内容。
4. 在“替换为”框中输入你想要替换成的内容。
5. 点击“选项”按钮，展开更多选项。
6. 在“在”选项框中，通常会有“工作表”和“工作簿”两个选项。选择“工作簿”，这样操作会应用到整个Excel文件的所有工作表。
7. 点击“全部替换”按钮。

## 多值替换
这个宏将允许你选择一个要替换的区域，然后选择一个包含替换规则的区域（两列：一列为要替换的值，另一列为替换后的值）。


```vba
Sub 批量替换()
    Dim replaceRange As Range
    Dim targetRange As Range
    Dim cell As Range
    Dim replaceDict As Object
    Set replaceDict = CreateObject("Scripting.Dictionary")
    
    ' 选择要替换的区域
    On Error Resume Next
    Set targetRange = Application.InputBox("选择要替换的区域", Type:=8)
    On Error GoTo 0

    If targetRange Is Nothing Then
        MsgBox "没有选择要替换的区域。"
        Exit Sub
    End If
    
    ' 选择替换规则区域
    On Error Resume Next
    Set replaceRange = Application.InputBox("选择包含替换规则的区域（两列）", Type:=8)
    On Error GoTo 0

    If replaceRange Is Nothing Then
        MsgBox "没有选择替换规则的区域。"
        Exit Sub
    End If

    ' 检查替换规则区域是否有两列
    If replaceRange.Columns.Count <> 2 Then
        MsgBox "替换规则区域必须有两列。"
        Exit Sub
    End If
    
    ' 将替换规则添加到字典中
    For Each cell In replaceRange.Columns(1).Cells
        If Not IsEmpty(cell.Value) Then
            replaceDict(cell.Value) = cell.Offset(0, 1).Value
        End If
    Next cell
    
    ' 开始替换
    For Each cell In targetRange
        If replaceDict.exists(cell.Value) Then
            cell.Value = replaceDict(cell.Value)
        End If
    Next cell

    MsgBox "替换完成。"
End Sub
```


