
再加个条件格式-数据条，会更加直观。
## 天为单位
### 步骤 1: 创建目标时间单元格
1. **选择一个单元格用于输入目标日期**：
   - 例如，选择单元格 `A1`。

2. **输入目标日期**：
   - 在单元格 `A1` 中输入目标日期，例如 `2024/10/21`。

### 步骤 2: 创建倒计时公式
1. **选择一个单元格用于显示剩余天数**：
   - 例如，选择单元格 `B1`。

2. **输入公式**：
   - 在单元格 `B1` 中输入以下公式：
    `=A1-TODAY()`

这个公式将计算当前日期与目标日期之间的差值，以天为单位显示剩余天数。

### 步骤 3: 更新倒计时
由于Excel的公式会自动更新日期，所以不需要额外的VBA代码。每次打开或刷新表格时，剩余天数会自动更新。




## 时间为单位
### 步骤 1: 创建倒计时单元格
1. **选择一个单元格用于显示倒计时**：
   - 例如，选择单元格 `A1`。

2. **输入目标时间**：
   - 在单元格 `A1` 中输入目标时间。例如，`2023-12-31 23:59:59`。

### 步骤 2: 创建倒计时公式
1. **选择一个单元格用于显示剩余时间**：
   - 例如，选择单元格 `B1`。

2. **输入公式**：
   - 在单元格 `B1` 中输入以下公式：
     ```excel
     =TEXT(A1-NOW(),"[hh]:mm:ss")
     ```
   这个公式将计算当前时间与目标时间之间的差值，并以 `小时:分钟:秒` 的格式显示。

### 步骤 3: 自动刷新倒计时
Excel的公式不会自动刷新，因此我们需要使用VBA代码来实现自动刷新。

1. **打开VBA编辑器**：
   - 按 `Alt + F11` 打开VBA编辑器。

2. **插入新模块**：
   - 在VBA编辑器中，点击 `Insert` 菜单，然后选择 `Module`。

3. **输入VBA代码**：
   - 在新模块中输入以下代码：
     ```vba
     Public RunWhen As Double
     Public Const cRunWhat = "TheSub"  ' The name of the procedure to run

     Sub StartTimer()
         RunWhen = Now + TimeSerial(0, 0, 1)
         Application.OnTime EarliestTime:=RunWhen, Procedure:=cRunWhat, _
             LatestTime:=RunWhen + TimeSerial(0, 0, 1), Schedule:=True
     End Sub

     Sub TheSub()
         ThisWorkbook.Sheets(1).Range("B1").Value = _
             Format(ThisWorkbook.Sheets(1).Range("A1").Value - Now, "[hh]:mm:ss")
         StartTimer
     End Sub

     Sub StopTimer()
         On Error Resume Next
         Application.OnTime EarliestTime:=RunWhen, Procedure:=cRunWhat, _
             LatestTime:=RunWhen + TimeSerial(0, 0, 1), Schedule:=False
     End Sub
     ```



