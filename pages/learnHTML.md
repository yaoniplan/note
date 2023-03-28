- # "learnHTML"
- ## Declaration
    ```
    <!DOCTYPE html>
    ```
- ## Comments
    ```
    <!-- Write your comments here. -->
    ```
- ## Headings
    ```
    <h1>Heading 1</h1>
    ```
- ## Links
    ```
    <!-- a: Anchor; href: Hyperlink reference -->
    <a href="https://github.com/yaoniplan/note">yaoniplan</a>
    ```
- ## Images
    ```
    <!-- img: Image; src: Source; alt: Alternative -->
    <img src="wallpaperDark.jpg" alt="wallpaperDark.jpg">
    ```
- ## Attributes
    ```
    <!-- The href attribute -->
    <a href="https://github.com/yaoniplan/note">yaoniplan</a>
    <!-- The src attribute -->
    <img src="backgroundDark.jpg">
    <!-- The width and height attributes -->
    <img src="backgroundDark.jpg" width="500" height="600">
    <!-- The alt attribute -->
    <img src="backgroundDark.jpg" alt="backgroundDark.jpg">
    <!-- The style attribute -->
    <p style="color:red;">Hello, yaoniplan!</p>
    <!-- The lang attribute -->
    <html lang="en">
    <!-- The title attribute -->
    <p title="I'm a tooltip">This is a paragraph.</p>
    ```
- ## Elements
    - ### Paragraphs
        ```
        <p>Paragraph 1</p>
        ```
    - ### Horizontal rules
        ```
        <hr>
        ```
    - ### Line Breaks
        ```
        <br>
        ```
    - ### Bold
        ```
        <b>Bold text.</b>
        ```
    - ### Italic
        ```
        <i>Italic text.</i>
        ```
    - ### Smaller
        ```
        <small>Smaller text.</small>
        ```
    - ### Marked or Highlighted
        ```
        <mark>Marked text.</mark>
        ```
    - ### Deleted
        ```
        <del>Deleted text.</del>
        ```
    - ### Inserted
        ```
        <ins>Inserted text.</ins>
        ```
    - ### Subscripted
        ```
        <sub>Subscripted text.</sub>
        ```
    - ### Superscripted
        ```
        <sup>Superscripted text.</sup>
        ```
    - ### The Poem Problem
        ```
        <pre>
          The first line of the poem
          The second line of the poem
        </pre>
        ```
    - ### CSS
        - #### Inline
          ```
          <body>
            <h1 style="background-color:Tomato;">Hello, yaoniplan!</h1> <!-- Colors background -->
            <h3 style="color:Tomato;">Hello, yaoniplan!</h3> <!-- Colors text -->
            <h1 style="border:2px solid Tomato;">Hello, yaoniplan!</h1> <!-- Colors border -->
            <h1 style="background-color:rgb(255, 0, 0);">Helloo, yaoniplan!</h1> <!-- Colors RGB -->
            <h1 style="background-color:rgba(255, 0, 0, 0.0);">Hello, yaoniplan!</h1> <!-- Colors RGBA -->
            <h1 style="background-color:#ffffff">Hello, yaoniplan!</h1> <!-- Colors HEX -->
            <h1 style="font-family:verdana;">This is a heading.</h1> <!-- Fonts -->
            <h1 style="font-size:300%;">This is a heading.</h1> <!-- Text size -->
            <h1 style="text-align:center;">Centered heading.</h1> <!-- Text alignment -->
          </body>
          ```
        - #### Internal
          ```
          <head>
            <style>
              body {background-color:powderblue;}
              h1 {color:red;}
              p {color:red;}
            </style>
          </head>
          <body>
            <h1>Hello, yaoniplan!</h1>
            <p>yaoniplan</p>
          </body>
          ```
    - ### External
        - `vim index.html`
          ```
          <head>
            <link rel="stylesheet" href="styles.css">
          </head>
          <body>
            <h1>Hello, yaoniplan!</h1>
            <p>yaoniplan</p>
          </body>
          ```
        - `vim styles.css`
          ```
          body {
            background-color:powderblue;
          }
          h1 {
            color:blue;
          }
          p {
            color:red;
          }
          ```
        - #### Colors and Fonts
          ```
          <head>
            <style>
              h1 {
                color:blue;
                font-family:verdana;
                font-size:300%;
              }
              p {
                color:red;
                font-family:courier;
                font-size:160%;
              }
            </style>
          </head>
          <body>
            <h1>Hello, yaoniplan!</h1>
            <p>yaoniplan</p>
          </body>
          ```
        - #### Border
          ```
          <style>
            p {
              border:2px solid powderblue;
            }
          </style>
          ```
        - #### Padding
          ```
          <style>
            p {
              border:2px solid powderblue;
              padding:30px; // A space between the text and the border
            }
          </style>
          ```
        - #### Margin
          ```
          <style>
            p {
              border:2px solid powderblue;
              margin:50px; // A space outside the border
            }
          </style>
          ```
        - #### External links
          ```
          <head>
            <link rel="stylesheet" href="https://w3schools.com/html/styles.css">
            <!-- <link rel="stylesheet" href="/html/styles.css"> -->
            <!-- <link rel="stylesheet" href="styles.css"> -->
          </head>
          ```
