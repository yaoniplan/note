- # 简介
  Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，Markdown文件的后缀名便是“.md”。
- # 标题语法
  在单词或短语前，添加`# `(井号+空格)。
	- ***写法***  
	  \# Heading level 1  
	  \## Heading level 2  
	  \### Heading level 3  
	  \#### Heading level 4  
	  \##### Heading level 5  
	  \###### Heading level 6
	- ***预览***  
	  (请自己尝试，因为标题语法放在这里，会使目录不被易读)
- # 段落语法
  使用`空白行`，将一行或多行文本进行分隔。
	- ***写法***  
	  Don't put tabs or spaces in front of your paragraphs.  
	  
	  Keep lines left-aligned like this.
	- ***预览***  
	  Don't put tabs or spaces in front of your paragraphs.  
	  
	  Keep lines left-aligned like this.
- # 换行语法
  在结尾，添加`“结尾空格”`(两个空格+回车)或HTML`<br>`标签。
	- ***写法***  
	  First line with two spaces after.  
	    
	  And the next line.  
	  
	  First line with the HTML tag after.\<br>  
	  And the next line.
	- ***预览***  
	  First line with two spaces after.  
	  
	  And the next line.  
	  
	  First line with the HTML tag after.<br>
	  And the next line.
- # 强调语法
	- ## 1. 粗体
	  在要强调部分的前后，各添加`**`(两个星号)。
		- ***写法***  
		  I just love \*\*bold text**.
		- ***预览***  
		  I just love **bold text**.
	- ## 2. 斜体
	  在要强调部分的前后，各添加`*`(一个星号)。
		- ***写法***  
		  Italicized text is the \*cat's meow*.
		- ***预览***  
		  Italicized text is the *cat's meow*.
	- ## 3. 粗体和斜体
	  在要强调部分的前后，各添加`***`(三个星号)。
		- ***写法***  
		  This is really \*\*\*very*** important text.
		- ***预览***  
		  This is really ***very*** important text.
- # 引用语法
	- ## 1.块引用
	  在段落前，添加`>`(大于号)。
		- ***写法***  
		  \>Dorothy followed her through many of the beautiful rooms in her castle.
		- ***预览***  
		  
		  >Dorothy followed her through many of the beautiful rooms in her castle.
	- ## 2.多个段落的块引用
	  在段落之间的空白行，添加`>`(大于号)。
		- ***写法***  
		  \>Dorothy followed her through many of the beautiful rooms in her castle.  
		  \>  
		  \>The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
		- ***效果***  
		  >Dorothy followed her through many of the beautiful rooms in her castle.  
		  >  
		  >The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
	- ## 3.嵌套块引用
	  在要嵌套的段落前，添加`>>`(两个大于号)。
		- ***写法***  
		  \>Dorothy followed her through many of the beautiful rooms in her castle.  
		  \>  
		  \>>The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
		- ***预览***
		  
		  >Dorothy followed her through many of the beautiful rooms in her castle.  
		  >  
		  >>The witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
	- ## 4.带有其他元素的块引用
	  需要进行`实验`，以查看哪些元素有效。
		- ***写法***  
		  \>\#### The quarterly results look great!  
		  \>  
		  \>\-Revenue was off the chart.  
		  \>\-Profits were higher than ever.  
		  \>  
		  \>\*Everything* is going according to \*\*plan**.
		- ***预览***  
		  >(请自己尝试这个元素，因为此元素放在这里，会使目录不被易读)  
		  >  
		  >-Revenue was off the chart.  
		  >-Profits were higher than ever.  
		  >  
		  >*Everything* is going according to **plan**.
- # 列表语法
	- ## 1.有序列表
	  在每个列表项前，添加`数字`(以数字 1 起始)并紧跟`英文句点`(.) 。
		- ***写法***  
		  1.First item  
		  2.Second item  
		  3.Third item  
		  4.Fourth item
		- ***预览***  
		  1.First item  
		  2.Second item  
		  3.Third item  
		  4.Fourth item
	- ## 2.无序列表
	  在每个列表项前，添加`-`(破折号)、`*`(星号)或`+`(加号)
		- ***写法***  
		  \-First item  
		  \-Second item  
		  \-Third item  
		  \-Fourth item
		- ***预览***  
		  -First item  
		  -Second item  
		  -Third item  
		  -Fourth item
	- ## 3.在列表中嵌套段落
	  将该元素缩进`四个空格`或`一个制表符`
		- ***写法***  
		  \-This is the first list item.  
		  \-Here's the second list item.  
		  
		  \    I need to add another paragraph below the second list item.  
		  
		  \-And here's the third list item.
		- ***预览***  
		  -This is the first list item.  
		  -Here's the second list item.  
		  
		      I need to add another paragraph below the second list item.  
		  
		  -And here's the third list item.
	- ## 4.在列表中嵌套引用块
	  同样的，将该元素缩进`四个空格`或`一个制表符`
		- ***写法***  
		  \-This is the first item.  
		  \-Here's the second list item.  
		  
		  \    \>A blockquote would look great below the second list item.  
		  
		  \-And here's the third list item.
		- ***预览***  
		  -This is the first item.  
		  -Here's the second list item.  
		  
		      >A blockquote would look great below the second list item.  
		  
		  -And here's the third list item.
	- ## 5.在列表中嵌套代码块
	  将代码块缩进`八个空格`或`两个制表符`
		- ***写法***  
		  \1.Open the file.  
		  \2.Find the following code block on line 21:  
		  
		          \<html>  
		            \<head>  
		              \<title>Test</title>  
		            \</head>  
		  
		  \3.Update the title to match the name of your wbsite.
		- ***预览***
		  1.Open the file.  
		  2.Find the following code block on line 21:  
		  
		          <html>
		            <head>
		              <title>Test</title>
		            </head>
		  
		  3.Update the title to match the name of your website.
	- ## 在列表中嵌套图片
	  将图片缩进`四个空格`或`一个制表符`
		- ***写法***  
		  \1.Open the file containing the Linux mascot.  
		  \2.Marvel at its beauty.  
		  
		          \!\[Tux,the Linux mascot](/assets/images/tux.png)  
		  
		  3.Close the file.
		- ***预览***  
		  1.Open the file containing the Linux mascot.  
		  2.Marvel at its beauty.  
		  
		      ![Tux,the Linux mascot](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad1b5766e1-b597-449a-adda-651de1fb5e2b2022_07_18_download.png?Expires=4811749880&Signature=hwi~mikB9RfRmCPuE9qNr5I6pT6uofgF1-H78qgvufDRkshDFJfkEi0GND83yo7Knx6K1Jfiwhqv2Cilhi6NLnertc-aX-7wsY01AOEAiWPC6OtESSOSksZA-IJQNmNvOtkxNemKXjcKQWp1~gBywT5qD1nq-z2zPWmyFWU9h~FoQA0Kd9RKZA5XNHs4604F9rbZ91ACjz6UPxA-j9zUHQOqew0~zgB85UPpIA9JcJEcg2Vj6Q1gRcIg8iAEjjOHWVJ1kGQXCA9V4sG9sw0ndjkp86Lx~YlaVGyCiC69H4WwRKsG7N6oKSNwlGA6oEaIz69MOMykfcma1~j2V7afMQ__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)  
		  
		  3.Close the file.
	- ## 在列表中嵌套列表
	  将列表缩进`四个空格`或`一个制表符`
		- ***写法***  
		  \1.First item  
		  \2.Second item  
		  \3.Third item  
		      \-Indented item  
		      \-Indented item  
		  \4.Fourth item
		- ***预览***  
		  1.First item  
		  2.Second item  
		  3.Third item  
		      -Indented item  
		      -Indented item  
		  4.Fourth item
- # 代码语法
	- ## 1.单词或短语代码
	  将单词或短语包裹在`反引号`(`)中。
		- ***写法***  
		  At the command prompt,type \`nano`.
		- ***预览***  
		  At the command prompt,type `nano`.
	- ## 2.转义反引号
	  将单词或短语代码包裹在`双反引号`(``)中。
		- ***写法***  
		  \`\`Use \`code\` in your Markdown file.``
		- ***预览***  
		  ``Use `code` in your Markdown file.``
	- ## 3.代码块
	  在代码块之前和之后的行上，使用三个`反引号`(\`\`\`)
		- ***写法***  
		  \`\`\`  
		  {  
		      "firstName": "John",  
		      "lastName": "Smith",  
		      "age": 25  
		  }  
		  \`\`\`
		- ***预览***  
		  ```
		  {
		  	"firstName": "John",
		  	"lastName": "Smith",
		  	"age": 25
		  }
		  ```
	- ## 4.语法高亮
	  在受防护的代码块之前的`反引号旁边`，`指定`一种`语言`
		- ***写法***  
		  \`\`\`json  
		  {  
		      "firstName":"John",  
		      "lastName":"Smith",  
		      "age":25  
		  }  
		  \`\`\`
		- ***预览***  
		  ```json
		  {
		    "firstName":"John",
		    "lastName":"Smith",
		    "age":25
		  }
		  ```
- # 分隔线语法
  在单独一行上，使用三个`星号`(\*\*\*)、`破折号`(\-\-\-)或`下划线`(\_\_\_)
	- ***写法***  
	  Try to put a blank line before...
	  
	  \-\-\-
	  
	  ...and after a horizontal rule.
	- ***预览***  
	  Try to put a blank line before...
	  
	  ---
	  
	  ...and after a horizontal rule.
- # 链接语法
	- ## 超链接
	  链接文本放在方括号内，链接地址放在后面的圆括号中。
	  \[`超链接显示名`]\(`超链接地址`)
		- ***写法***  
		  这是一个链接 \[Markdown语法](https://markdown.com.cn)。
		- ***预览***  
		  这是一个链接 [Markdown语法](https://markdown.com.cn)。
	- ## 加 Title 的超链接  
	  title放在圆括号