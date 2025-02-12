
在A列的单元格中自动输入类似`=B2 & "/" & C2`的公式。

### 使用 VBA 自动化设置
如果希望 A 列在输入 B 和 C 数据时能够“自动”生成相应的值，可以通过 VBA 编写代码实现。

1. 按下 **Alt + F11** 打开 VBA 编辑器。
2. 点击 **插入 > 模块**，然后输入以下代码：

   ```vba
   Private Sub Worksheet_Change(ByVal Target As Range)
       Dim KeyCells As Range
       Set KeyCells = Range("B:B, C:C")
       
       If Not Application.Intersect(KeyCells, Target) Is Nothing Then
           Dim Row As Long
           For Row = 1 To Target.Rows.Count
               If Cells(Target.Row, 2).Value <> "" And Cells(Target.Row, 3).Value <> "" Then
                   Cells(Target.Row, 1).Value = Cells(Target.Row, 2).Value & "/" & Cells(Target.Row, 3).Value
               End If
           Next Row
       End If
   End Sub
   ```

3. 关闭 VBA 编辑器，保存工作簿，并确保启用宏。
4. 现在，当在 B 列或 C 列输入数据时，A 列会自动生成对应值。

---
