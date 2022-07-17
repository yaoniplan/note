- ## 标题语法
	- # 一级标题
	  ```python
	  # 星号 + 空格
	  ```
- ## 段落语法
	- 要创建段落，请使用空白行将一行或多行文本进行分隔。
	  
	  不要用空格 (spaces) 或制表符 (tabs) 缩进段落。
	  ```python
	  # shift + enter (logseq专属)
	  ```
- ## 换行语法
	- 为了兼容性，
	  
	  请在行尾添加“结尾空格”或 HTML 的 <br> 标签来实现换行。
	  ```python
	  # 但是，Version 0.6.3 的 logseq 只须在行尾键入（shift + enter）
	  ```
- ## 强调语法
	- **粗体**
	  ```python
	  # 在要加粗部分的两侧，各添加两个星号
	  ```
	- *斜体*
	  ```python
	  # 在前后，各添加一个星号
	  ```
	- ***粗体和斜体***
	  ```python
	  # 在前后，各添加三个星号
	  ```
- ## 引用语法
	- >块引用
	  
	  ```python
	  # 在段落前，添加一个大于号
	  ```
	- >多个段落的块引用
	  >
	  >块引用可以包含多个段落。
	  
	  ```python
	  # 在段落之间的空白行，添加一个大于号
	  ```
	- >嵌套块引用
	  >
	  >>块引用可以嵌套
	  
	  ```python
	  # 在要嵌套的段落前，添加两个大于号
	  ```
	- >#### 带有其他元素的块引用
	  >
	  >-块引用可以包含其他 Markdown 格式的元素。
	  >
	  >并非所有元素都可以使用
	  
	  ```python
	  # 你需要进行实验，以查看哪些元素有效。
	  ```
- ## 列表语法
	- 1. 有序列表
	  2. 数字不必按数学顺序排列，
	  3. 但是，列表应当以数字 1 起始。
	  ```python
	  # 数字 + 英文句点 + 空格
	  ```
	- * 无序列表
	  * 缩进一个或多个列表项，可创建嵌套列表
	  * 为了兼容性，不要在同一个列表中，混合和匹配分隔符
	  * 选择一个并坚持使用它
	  ```python
	  # 破折号 + 空格
	  # 在每个列表项前面，添加1个破折号（或星号或加号）
	  # 但是，v0.6.3 的 logseq 使用破折号时，会报错
	  ```
	- 在列表中嵌套其他元素
		- * 段落
		  
		      要在保留列表连续性的同时，在列表中，添加另一种元素
		  
		  * 将该元素缩进四个空格或一个制表符
		  
		  ```python
		  # 被嵌套的元素，需要缩进四个空格或一个制表符
		  # 但是，v0.6.3的 logseq 不需要（bug）
		  ```
		- * 引用块
		  * test
		  
		      >test
		  
		  * test
		  
		  ```python
		  # 被嵌套的元素，需要缩进四个空格或一个制表符
		  # 但是，v0.6.3的 logseeq 不需要（bug）
		  ```
		- 1. 代码块
		  2. 通常采用四个空格或一个制表符缩进。
		          <html>
		            <head>
		              <title>Test</title>
		            </head>
		  3. 当它们被放在列表中时，
		  4. 请将它们缩进八个空格或两个制表符。
		  
		  ```python
		  # 在 v0.6.3的 logseq 中，无效（bug）
		  ```
		- 1. 图片
		  2. 拖动本地照片到 Markdown 应用程序中
		      ![2022_07_17_4_makeup_4k.jpg](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ada651e07c-58ab-4781-a43e-a979519434792022_07_17_4_makeup_4k.jpg?Expires=4811648926&Signature=JFTGtmzX-kWONP7~dfBgYmXqyvm-se7U9b6NnWI~f~BrgkyQ7MzFNzzHh7owLeDLSe6YI0fx99e-cHteqCG~9Rrk776lEJEMTiLWAUiGKrMqUUhOtlau03qc~36vfd~c9wI8peHogXjqRRhNRM0jUdFAAo~SF8td6wJSKD1zD4sphYd83b5r47lWUPuVViDlHNlRzJkiSt3pmsI7OCCCs~7IgmR-Jj0gSQhrjTjsXXhQYm5Tnc5LU6jTTP2NZwk67n9Poc82P68D3M-ggSKgx4pF6obmE6IxLJP796OpFUak3tqOWhkkU4zOvXmWvY1tH9i20pqPTK2aAFr6v6LYug__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		  3. 关闭文件
		  
		  ```python
		  # 在 v0.6.3的 logseq 中，无效（bug）
		  ```
		- 1. 列表
		  2. test
		      * test
		      * test
		  3. test
		  
		  ```python
		  # 你可以在有序列表中，嵌套一个无序列表，反之亦然
		  # 在 v0.6.3的 logseq 中，无效（bug）
		  ```
- ## 代码语法
	- `将单词或短语表示为代码`
	  ```python
	  # 在前后，各添加一个反引号
	  ```
	- ```转义`反引号``
		- ```python
		  # 将已经被表示为代码的单词或短语，包裹在反双引号中
		  ```
	- 代码块
		- ```
		  围栏式代码块
		  # 如果发现不方便，将行缩进四个空格或一个制表符来创建代码块的话，可以尝试`围栏式代码块`
		  # 在代码块之前和之后的行上，使用三个反引号
		  ```
		- ```python
		  语法高亮
		  # 在受防护的代码块之前的反引号旁边，指定一种语言。
		  ```
- ## 分割线语法
	- 分隔线
	  
	  ---
	  
	  为了兼容性，请在分隔线的前后，添加空白行
	  ```python
	  # 在单独一行上，使用三个（或多个）星号（或破折号或下划线）
	  ```
- ## 链接语法
	- [超链接Markdown语法代码](http://markdown.com.cn)
	  ```python
	  # [超链接显示名]（超链接地址）
	  ```
	- [给超链接增加 Title](https://markdown.com.cn "超链接 title 是当鼠标悬停在超链接上时，会出现的文字")
	  
	  ```python
	  # title 放在圆括号中超链接地址的后面，跟超链接地址之间以空格分隔，并放在英文的双引号里
	  ```
	- 网址和Email地址
		- <https://archlinux.org>
		  <bob@example.com>
		  
		  ```python
		  # 使用尖括号（很方便地把 URL 或者 Email 地址变成可点击的链接）
		  ```
	- 带格式化的链接
		- **强调**链接
			- 我正在使用 **[代码托管平台](https://github.com)** 来同步笔记内容
			  我正在使用 *[logseq](https://logseq.com)* 记笔记
			  [‘Markdown 官方语法(快速入门)’](https://logseq.com/#/page/markdown%20%E5%AE%98%E6%96%B9%E8%AF%AD%E6%B3%95(%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8))
			  ```python
			  # （实际上，是给链接语法，用粗体或斜体等强调语法）在链接语法前后，各添加两个星号
			  ```
-