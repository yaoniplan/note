- # 简介
  Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，Markdown文件的后缀名便是“.md”。
- ***
- # 标题语法
  在单词或短语前，添加 `# ` (井号+空格)。
	- ***Markdown语法***
	  
	  \# Heading level 1
	  
	  \## Heading level 2
	  
	  \### Heading level 3
	  
	  \#### Heading level 4
	  
	  \##### Heading level 5
	  
	  \###### Heading level 6
	- ***预览效果***
	  
	  (请自己尝试，因为标题语法放在这里，会使目录不被易读)
- ***
- # 段落语法
  使用 `空白行` ，将一行或多行文本进行分隔。
	- ***Markdown语法***
	  
	  Don't put tabs or spaces in front of your paragraphs.
	  
	  Keep lines left-aligned like this.
	- ***预览效果***
	  
	  Don't put tabs or spaces in front of your paragraphs.
	  
	  Keep lines left-aligned like this.
- ***
- # 换行语法
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
- # 强调语法
	- ## 1. 粗体
	  在要强调部分的前后，各添加 `**` (两个星号)。
		- ***Markdown语法***
		  
		  I just love \*\*bold text**.
		- ***预览效果***
		  
		  I just love **bold text**.
	- ***
	- ## 2. 斜体
	  在要强调部分的前后，各添加 `*` (一个星号)。
		- ***Markdown语法***
		  
		  Italicized text is the \*cat's meow*.
		- ***预览效果***
		  
		  Italicized text is the *cat's meow*.
	- ***
	- ## 3. 粗体和斜体
	  在要强调部分的前后，各添加 `***` (三个星号)。
		- ***Markdown语法***
		  
		  This is really \*\*\*very*** important text.
		- ***预览效果***
		  
		  This is really ***very*** important text.
- ***
- # 引用语法
	- ## 1.块引用
	  在段落前，添加 `>` (大于号)。
		- ***Markdown语法***
		  
		  \>Dorothy followed her through many of the beautiful rooms in her castle.
		- ***预览效果***
		  
		  >Dorothy followed her through many of the beautiful rooms in her castle.
	- ***
	- ## 2.多个段落的块引用
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
	- ## 3.嵌套块引用
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
	- ## 4.带有其他元素的块引用
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
- # 列表语法
	- ## 1.有序列表
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
	- ***
	- ## 2.无序列表
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
	- ***
	- ## 3.在列表中嵌套段落
	  将该元素缩进 `四个空格` 或 `一个制表符`
		- ***Markdown语法***
		  
		  \-This is the first list item.  
		  \-Here's the second list item.  
		  
		      I need to add another paragraph below the second list item.  
		  
		  \-And here's the third list item.
		- ***预览效果***
		  
		  -This is the first list item.  
		  -Here's the second list item.  
		  
		      I need to add another paragraph below the second list item.  
		  
		  -And here's the third list item.
	- ***
	- ## 4.在列表中嵌套引用块
	  同样的，将该元素缩进 `四个空格` 或 `一个制表符`
		- ***Markdown语法***
		  
		  \-This is the first item.  
		  \-Here's the second list item.  
		  
		      \>A blockquote would look great below the second list item.  
		  
		  \-And here's the third list item.
		- ***预览效果***
		  
		  -This is the first item.  
		  -Here's the second list item.  
		  
		      >A blockquote would look great below the second list item.  
		  
		  -And here's the third list item.
	- ***
	- ## 5.在列表中嵌套代码块
	  将代码块缩进 `八个空格` 或 `两个制表符`
		- ***Markdown语法***
		  
		  \1.Open the file.  
		  \2.Find the following code block on line 21:  
		  
		          \<html>
		            \<head>
		              \<title>Test</title>
		            \</head>
		  
		  \3.Update the title to match the name of your wbsite.
		- ***预览效果***
		  
		  1.Open the file.  
		  2.Find the following code block on line 21:  
		  
		          <html>
		            <head>
		              <title>Test</title>
		            </head>
		  
		  3.Update the title to match the name of your website.
	- ***
	- ## 在列表中嵌套图片
	  将图片缩进 `四个空格` 或 `一个制表符`
		- ***Markdown语法***
		  
		  \1.Open the file containing the Linux mascot.  
		  \2.Marvel at its beauty.  
		  
		          ![Tux,the Linux mascot](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e5ddd86-5d24-4e52-8406-186ae90b19f0/d6kui4-a6947ccc-515b-481c-807e-6254b83acd45.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZlNWRkZDg2LTVkMjQtNGU1Mi04NDA2LTE4NmFlOTBiMTlmMFwvZDZrdWk0LWE2OTQ3Y2NjLTUxNWItNDgxYy04MDdlLTYyNTRiODNhY2Q0NS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._GUzUMfuk2AAiQ6NFJW8tle_bAwC2eY0vlhfnhsCah4