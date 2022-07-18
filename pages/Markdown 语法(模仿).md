- ## 简介
  Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，Markdown文件的后缀名便是“.md”。
- ***
- ## 标题语法
  在单词或短语前，添加 `# ` (井号+空格)。
	- ***Markdown语法***
	  
	  \# Heading level 1
	  
	  \## Heading level 2
	  
	  \### Heading level 3
	  
	  \#### Heading level 4
	  
	  \##### Heading level 5
	  
	  \###### Heading level 6
	- ***预览效果***
	  
	  (请自己尝试，因为)
- ***
- ## 段落语法
  使用 `空白行` ，将一行或多行文本进行分隔。
	- ***Markdown语法***
	  
	  Don't put tabs or spaces in front of your paragraphs.
	  
	  Keep lines left-aligned like this.
	- ***预览效果***
	  
	  Don't put tabs or spaces in front of your paragraphs.
	  
	  Keep lines left-aligned like this.
- ***
- ## 换行语法
  在结尾，添加 `“结尾空格”` (两个空格+回车) 或 HTML `<br>` 标签。
	- ***Markdown语法***
	  
	  First line with two spaces after.  
	    
	  And the next line.  
	  
	  First line with the HTML tag after.\<br>  
	  And the next line.
	- ***预览效果***
	  
	  First line with two spaces after.  
	  
	  And the next line.  
	  
	  First line with the HTML tag after.<br>
	  And the next line.
- ***
- ## 强调语法
	- ### 1. 粗体
	  在要强调部分的前后，各添加 `**` (两个星号)。
		- ***Markdown语法***
		  
		  I just love \*\*bold text**.
		- ***预览效果***
		  
		  I just love **bold text**.
	- ***
	- ### 2. 斜体
	  在要强调部分的前后，各添加 `*` (一个星号)。
		- ***Markdown语法***
		  
		  Italicized text is the \*cat's meow*.
		- ***预览效果***
		  
		  Italicized text is the *cat's meow*.
	- ***
	- ### 3. 粗体和斜体
	  在要强调部分的前后，各添加 `***` (三个星号)。
		- ***Markdown语法***
		  
		  This is really \*\*\*very*** important text.
		- ***预览效果***
		  
		  This is really ***very*** important text.
- ***
- ## 引用语法
	- ### 1.块引用
	  在段落前，添加 `>` (大于号)。
		- ***Markdown语法***
		  
		  \>Dorothy followed her through many of the beautiful rooms in her castle.
		- ***预览效果***
		  
		  >Dorothy followed her through many of the beautiful rooms in her castle.
	- ***
	- ### 2.多个段落的块引用
	  在段落之间的空白行，添加 `>` (大于号)。
		- ***Markdown语法***
		  
		  \>Dorothy followed her through many of the beautiful rooms in her castle.  
		  \>  
		  \>The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
		- ***预览效果***
		  
		  >Dorothy followed her through many of the beautiful rooms in her castle.
		  >
		  >The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
	- ***
	- ### 3.嵌套块引用
	  在要嵌套的段落前，添加 `>>` (两个大于号)。
		- ***Markdown语法***
		  
		  \>Dorothy followed her through many of the beautiful rooms in her castle.  
		  \>  
		  \>>The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
		- ***预览效果***
		  
		  >Dorothy followed her through many of the beautiful rooms in her castle.
		  >
		  >>The witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
	- ***
	- ### 4.带有其他元素的块引用
	  需要进行 `实验` ，以查看哪些元素有效。
		- ***Markdown语法***
		  
		  \>\#### The quarterly results look great!  
		  \>  
		  \>\-Revenue was off the chart.  
		  \>\-Profits were higher than ever.  
		  \>  
		  \>\*Everything* is going according to \*\*plan**.
		- ***预览效果***
		  
		  >(请自己尝试这个元素，因为此元素放在这里，会使目录不被易读)  
		  >  
		  >-Revenue was off the chart.  
		  >-Profits were higher than ever.    
		  >  
		  >*Everything* is going according to **plan**.
- ***
- ## 列表语法
	- ### 有序列表
	  在每个列表项前，添加 `数字`(以数字 1 起始) 并紧跟 `英文句点`(.)  。
		- ***Markdown语法***
		  
		  1.First item  
		  2.Second item  
		  3.Third item  
		  4.Fourth item
		- ***预览效果***
		  
		  1.First item  
		  2.Second item  
		  3.Third item  
		  4.Fourth item
	- ###
	- ### 无序列表
	  在每个列表项前，添加 `-` (破折号)、 `*` (星号)或 `+` (加号)
		- ***Markdown语法***
		  
		  \-First item
		  \-Second item
		  \-Third item
		  \-Fourth item
		- ***预览效果***
		  
		  -First item
		  -Second item
		  -Third item
		  -Fourth item
		-