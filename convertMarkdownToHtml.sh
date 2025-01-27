#!/usr/bin/env sh

# Dependencies: marked

repoDir="."
journalsDir="$repoDir/journals"
temporaryFile="$repoDir/yaoniplan.md"
indexFile="$repoDir/assets/index.html"

convertMarkdownToHtml() {
    # Generate Article
    cat $(ls -r "$journalsDir"/*.md) > "$temporaryFile"
    marked -i "$temporaryFile" -o "$indexFile" && rm "$temporaryFile"

    # Insert into the first line
    sed -i '1i\
<!DOCTYPE html>\
<html>\
<head>\
  <meta charset="UTF-8">\
  <meta name="viewport" content="width=device-width, initial-scale=1">\
  <title>yaoniplan</title>\
  <link rel="icon" type="image/svg+xml" href="../assets/favicon.svg">\
  <link rel="stylesheet" href="../assets/github-markdown-dark.css">\
  <link rel="stylesheet" href="../assets/katex.min.css">\
  <script defer src="../assets/katex.min.js"></script>\
  <script defer src="../assets/auto-render.min.js" onload="renderMathInElement(document.body);"></script>\
  <script>\
    // Render all KaTeX expressions on the page\
    document.addEventListener("DOMContentLoaded", function() {\
      renderMathInElement(document.body, {\
        delimiters: [\
          { left: "$$", right: "$$", display: true },\
          { left: "$", right: "$", display: false }\
        ]\
      });\
    });\
  </script>\
  <style>\
    .markdown-body {\
      box-sizing: border-box;\
      min-width: 200px;\
      max-width: 980px;\
      margin: 0 auto;\
      padding: 45px;\
    }\
    @media (max-width: 767px) {\
      .markdown-body {\
        padding: 15px;\
      }\
    }\
    body {\
      background-color: #0d1117;\
    }\
  </style>\
</head>\
<body>\
  <article class="markdown-body">' "$indexFile"

    # Append to the last line
    echo '  </article>
</body>
</html>' >> "$indexFile"
}

# Generate index.html file
convertMarkdownToHtml
