- # "learnMarkdown"
- # Headings
    ```
    # Heading level 1
    ```
- # Paragraphs
    ```
    Paragraph one.

    Paragraph two.
    ```
- # Emphasize
    - ## 1. Bold
      ```
      The **bold** text.
      ```
    - ## 2. Italics
      ```
      The *italics* text.
      ```
    - ## 3. Bold and italics
      ```
      The ***bold and italics*** text.
      ```
    - ## 4. Delete line
      ```
      The ~~delete~~ line.
      ```
    - ## 5. Highlight
      ```
      The ==highlight== text.
      ```
- # Quote 
    - ## 1. Quote
      ```
      > The quote paragraph.
      ```
    - ## 2. Quotes for multiple paragraphs
      ```
      > The paragraph one.
      >
      > The paragraph two.
      ```
    - ## 3. Nested quotes
      ```
      > The paragraph one.
      >
      >> The paragraph two.
      ```
    - ## 4. Quotes with other elements
      ```
      > #### The first paragraph.
      >
      > - The first unorder list.
      > - The second unorder list.
      >
      > The *italics* text.
      ```
- # List 
    - ## 1. Ordered list
      ```
      1. First item
      2. Second item
      ```
    - ## 2. Unordered list
      ```
      - First item
      - Second item
      ```
    - ## 3. Definition list
      ```
      First Term
      : The definition list.
      
      Second Term
      : The definition list.
      ```
    - ## 4. Task list
      ```
      - [x] The task list.
      - [ ] The task list.
      ```
    - ## 5. Nesting paragraphs in lists
      ```
      -    The first list item.
      -    The second list item.

           The paragraph.
      
      -    The third list item.
      ```
    - ## 6. Nesting block quotes in lists
      ```
      -    The first list item.
      -    The second list item.
           
           > A quote.

      -    The third list item.
      ```
    - ## 7. Nesting code blocks in lists
      ```
      1. The first ordered list item.
      2. The second ordered list item.

              <html>
                <head>
                  <title>Test</title>
                </head>
      
      3. The third ordered list item.
      ```
    - ## 8. Nesting images in lists
      ```
      1. The first ordered list item.
      2. The second ordered list item.
      
          ![Tux, the Linux mascot](../assets/tux.png)
      
      3. The third ordered list item.
      ```
    - ## 9. Nesting lists within lists
      ```
      1. First item.
      2. Second item.
          - The first unordered list item.
          - The second unordered list item.
      3. Third item.
      ```
- # Code 
    - ## 1. Word or phrase code
      ```
      The `code` text.
      ```
    - ## 2. Escape backticks
      ```
      ``The `code` text.``
      ```
    - ## 3. Code blocks
      <pre><code>
      ```
      {
        "firstName": "John";
        "lastName": "Smith";
        "age": 25
      }
      ```
      </code></pre>
    - ## 4. Syntax highlighting
      <pre><code>
      ```json
      {
        "firstName": "John",
        "lastName": "Smith",
        "age": 25
      }
      ```
      </code></pre>
- # Horizontal rule
  ```
  ---
  ```
- # Link 
    - ## 1. Hyperlinks
      ```
      [Markdown Guide](https://markdownguide.org)
      ```
    - ## 2. Add title hyperlink
      ```
      [Markdown Guide](https://markdownguide.org "Markdown Guide")
      ```
    - ## 3. Simplified hyperlinks
      ```
      <https://markdownguide.org>
      https://markdown.org
      ```
    - ## 4. Formatted hyperlinks
      ```
      *[Markdown Guide](https://markdownguide.org)*
      ```
- # Image 
  ```
  ![garden](../assets/garden.png)
  ```
- # Escape character 
  ```
  \* The pragraph.
  ```
- # Table 
    - ## 1. Form
      ```
      |   |   |
      |---|---|
      |   |   |
      ```
    - ## 2. Aligned tables
      ```
      | t   | t   | t   |
      | :-- | :-: | --: |
      | t   | ttt |   t |
      ```
- # Use emoji expression
    - ## 1. Copy and paste emoji
    - ## 2. Use emoji shortcode
      ```
      :joy:
      ```
- # Math formula 
    - ## Advanced operations
    - ### Arithmetic mean
      ```
      $\overline{x}$
      ```
- # References
    - https://www.markdownguide.org/
    - https://markdown.com.cn/
    - https://web.archive.org/web/20230517050630/https://www.jianshu.com/p/4d823d1b9c71
