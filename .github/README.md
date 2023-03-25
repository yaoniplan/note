- #### View Git commit messages in one-line format
    - `git log --oneline`
- ***Notes***
    - Because for faster viewing of recent commits.
- ***References***
    - ChatGPT
- ---
- #### Set the Referer header to desired value
    ```
    curl --user natas4:tKOcJIbzM4lTs8hbCmzn5Zr4434fGZQm --referer http://natas5.natas.labs.overthewire.org/ http://natas4.natas.labs.overthewire.org/
    ```
- ***Notes***
    - Because to pass the Natas4 level of overthewire.org.
- ***References***
    - `man curl`
    - https://github.com/psmiraglia/ctf/blob/master/overthewire/natas/natas04.md
- ---
- #### Convert hexadecimal string to binary data of ASCII characters
    - `echo 3d3d516343746d4d6d6c315669563362 | xxd -r -p`
- ***Notes***
    - `-r` # Revert
    - `-p` # Plain
    - `==QcCtmMml1ViV3b` # Output
    - Because to pass the Natas8 level of overthewire.org.
- ***References***
    - `man xxd`
    - ChatGPT
- ---
- #### Reverse a string in Linux
    - `echo "==QcCtmMml1ViV3b" | rev`
- ***Notes***
    - `b3ViV1lmMmtCcQ==` # Output
    - Because to pass the Natas8 level of overthewire.org.
- ***References***
    - ChatGPT
- ---
- #### Install Node.js and npm in Ubuntu Server 22.04
    - `doas apt update`
    - `doas apt install nodejs npm -y`
    - `git clone https://github.com/KrauseFx/markdown-to-html-github-style`
    - `cd markdown-to-html-github-style/`
    - `npm install`
    - `node convert.js .`
- ***Notes***
    - ``
- ***References***
    - ChatGPT
    - https://github.com/KrauseFx/markdown-to-html-github-style
- ---
- #### The abbreviation of "automated teller machine" is "ATM".
    - A device
    - To perform transactions
- ***References***
    - https://en.wikipedia.org/wiki/Automated_teller_machine
- ---
- #### The abbreviation of "large language model" is "LLM".
    - A language model
- ***References***
    - https://en.wikipedia.org/wiki/Large_language_model
- ---
- #### The abbreviation of "artificial intelligence" is AI.
    - An intelligence
- ***References***
    - https://en.wikipedia.org/wiki/Artificial_intelligence
- ---
- #### Add string "230317" to the beginning of each file name in one-liner Bash
    - `for f in *; do mv "$f" "230217$f"; done`
- ***Notes***
    - `f` # A variable
    - `for f in *; do mv "$f" "${f:6}"; done` # Remove the first 6 letters
- ***References***
    - ChatGPT
    - ![2023-03-23_22:32:46.png](../assets/2023-03-23_22:32:46.png)
- ---
- #### Display the correct date and time in Ubuntu Server 22.04
    - `doas timedatectl set-timezone Asia/Shanghai`
- ***Notes***
    - `timedatectl` # View the current timezone
    - `Asia/Shanghai` # Replace it with your desired timezone
        - `timedatectl list-timezones` # List all timezones
- ***References***
    - `man timedatectl`
    - ChatGPT
- ---
- #### Use the "man" tool in Linux
    - `ma` # Mark with "a" letter
- ***Notes***
    - `'a` # Go to the "a" mark
- ***References***
    - `h`
- ---
- #### Upgrade the Vim in Ubuntu Server 22.04
    - `doas add-apt-repository ppa:jonathonf/vim`
    - `doas apt update`
    - `doas apt install vim`
- ***Notes***
    - `vim --version` # Check the version
    - Because it is necessary to meet the useage conditions of "Codeium".
- ***References***
    - `man vim`
    - ChatGPT
- ---
- #### Modify the last commit message in Git
    - `dotfiles commit --amend -m "Push to master branch on odd days"`
- ***Notes***
    - `dotfiles push origin development -f` # Solve the problem
      ```
      yaoniplan@ubuntu2204:~$ dotfiles push origin development
      To 192.168.10.100:/var/git/dotfiles.git
       ! [rejected]        development -> development (non-fast-forward)
      error: failed to push some refs to '192.168.10.100:/var/git/dotfiles.git'
      hint: Updates were rejected because the tip of your current branch is behind
      hint: its remote counterpart. Integrate the remote changes (e.g.
      hint: 'git pull ...') before pushing again.
      hint: See the 'Note about fast-forwards' in 'git push --help' for details.
      ```
    - `dotfiles pull origin development` # Someone else pull the development branch
- ***References***
    - ChatGPT
- ---
- #### Set the default editor to Vim in Ubuntu Server 22.04
    - `vim ~/.bashrc`
      ```
      export VISUAL=vim
      export EDITOR=vim
      ```
- ***Notes***
    - `source ~/.bashrc` # Make the changes effective
- ***References***
    - ChatGPT
- ---
- #### Change a repository description for GitHub via command line
    - Type in terminal
      ```
      curl -L \
        -X PATCH \
        -H "Accept: application/vnd.github+json" \
        -H "Authorization: Bearer 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" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        https://api.github.com/repos/yaoniplan/dotfiles \
        -d '{"description":"Minimal dotfiles in Linux server"}'
      ```
- ***Notes***
    - `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` # Replace it with your GitHub PAT
        - Get it in "Personal access tokens" of "Developer settings"
        - Remember to click the "repo" checkbox to grant this token access to the repository
    - `yaoniplan/dotfiles` # Replace it with your user and repository name
    - `Minimal dotfiles in Linux server` # Replace it with your desired description
- ***References***
    - ChatGPT
    - https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#update-a-repository
- ---
- #### Paste content from clipboard to dmenu
    - `$(xclip -o)`
- ***Notes***
    - `doas emerge -aq x11-misc/xclip` # Install it if you don't have it
    - `mpv --speed=2 $(xclip -o)` # Type it before you pressed `Ctrl-c` to copy content
- ***References***
    - ChatGPT
- ---
- #### The abbreviation of "personal access token" is "PAT".
    - A string
    - To authenticate
- ***Notes***
    - Because to use GitHub PAT to change a repository description via command line
- ***References***
    - https://en.wikipedia.org/wiki/Personal_access_token
- ---
- #### Use "Codeium" to autocomplete in Vim
    - `:Codeium Auth`
- ***Notes***
    - `vim ~/.vimrc` # Install it if you don't have it
      ```vim
      Plug 'Exafunction/codeium.vim'
      ```
        - `source ~/.vimrc`
        - `:PlugInstall`
- ***References***
    - `:help Codeium`
    - https://github.com/Exafunction/codeium.vim#-installation-options
- ---
- #### Set some configuraton for VimWiki
    - `vim ~/.vimrc`
      ```vim
      " Make plugins named VimWiki work
      set nocompatible
      filetype plugin on
      syntax on
      
      " Use Markdown syntax for VimWiki
      " Replace `diary/` with `journals/`
      let g:vimwiki_list = [{
          \ 'path': '~/note/',
          \ 'diary_rel_path': 'journals/',
          \ 'syntax': 'markdown',
          \ 'ext': '.md'}]
      " Replace `[Vim](Vim)` with `[Vim](Vim.md)`
      " Refer to https://github.com/vimwiki/vimwiki/issues/1210
      let g:vimwiki_markdown_link_ext = 1
      " Disable all Concealing (level: 0-3)
      let g:vimwiki_conceallevel = 3
      " Disable URL shortening
      let g:vimwiki_url_maxsave = 0
      " Replace spaces in the file names with underscores
      let g:vimwiki_links_space_char = '_'
      ```
- ---
- #### Use a development branch in Git
    - First use
      ```
      git branch development
      git checkout development
      git add testDevelopment.md
      git commit -m "Add testDevelopment.md"
      ```
    - Push the code
      ```
      git push origin development
      git checkout master
      git merge development
      git push origin master
      ```
- ***Notes***
    - If you want to stay on the development branch to push the code
        - `git push origin development` # Push to the development branch
        - `git push origin development:master` # Push to the master branch
    - `git branch --all` # View all branches
    - `git push --all origin` # Push all branches to GitHub
    - `git branch -d dev` # Delete a branch locally
    - Because using two repositories is a bit cumbersome.
    - `git clone git@192.168.10.100:/var/git/note.git --branch development` # Solve the problem
      ```
      warning: remote HEAD refers to nonexistent ref, unable to checkout
      ```
        - `git push origin development:master` # You don't push your master branch to `git@192.168.10.100:/var/git/note.git`
- ***References***
    - ChatGPT
    - https://stackoverflow.com/questions/41269587/github-clone-repo-error-warning-remote-head-refers-to-nonexistent-ref-unable/41269696#41269696
    - https://stackoverflow.com/questions/14168677/merge-development-branch-with-master/14169244#14169244
    - https://github.com/xx025/carrot
- ---
- #### Use the "$(())" construct to perform basic arithmetic operatons in Bash
    - `echo $((7 / 2))` # "3"
- ***Notes***
    - Because to check if it is an odd or even day
      ```bash
      if [[ $(( $(date +%-j) % 2)) -eq 1 ]]; then
      ```
        - `-` # Do not pad the field
    - Perform floating point arithmetic operations
        - `echo "scale=2; 7 / 2" | bc` # "3.50"
- ***References***
    - `man date`
    - ChatGPT
- ---
- #### Search for a piece of music in search bar of Chromium
    - `8am I can see the success rate`
- ***Notes***
    - `8am` # Music name
    - `I can see the success rate` # Animation name
- ---
- #### Learn some Bash projects to master it quickly
    - A backup script
    - Automate system updates
    - Build a file manager
    - Command-line calculator
    - A password manager
    - A weather app
- ***Notes***
    - Because the default shell of most Linux distributions is bash.
- ***References***
    - ChatGPT
- ---
- #### Untrack a file instead of removing it in Git
    - `git rm --cached .bashrc`
    - `git commit -m "Stop tracking .bashrc"`
- ***Notes***
    - `.bashrc` # Replace it with a file you want to untrack
    - Because for compatibility with server (e.g. Ubuntu Server 22.04, FreeBSD, etc.)
- ***References***
    - `git rm --help`
    - ChatGPT
- ---
- #### Pass bandit 27 level in overthewire.org
    - `git clone ssh://bandit27-git@localhost:2220/home/bandit27-git/repo`
- ***Notes***
    - `:2220` # Add the port to solve the following problem
      ```
      !!! You are trying to log into this SSH server on port 22, which is not intended.
      ```
- ***References***
    - https://overthewire.org/wargames/bandit/bandit28.html
    - https://stackoverflow.com/questions/74289381/trying-to-pass-bandit-level-27-on-overthewire-org-git-clone-not-working/74395405#74395405
- ---
- #### Decompress a ".bz" file
    - `bzip2 -d testData.bz`
- ***Notes***
    - `-d` # Decompress
- ***References***
    - `man bzip2`
    - https://medium.com/secttp/overthewire-bandit-level-12-439f655f6fd5
- ---
- #### Use a private key to login the remote server
    - `ssh -i sshkey.private bandit14@bandit.labs.overthewire.org -p 2220`
- ***Notes***
    - `-i` # Identity
    - `sshkey.private` # Replace it with remote private key file
- ***References***
    - `man ssh`
    - https://explainshell.com/explain?cmd=ssh+-i+sshkey.private+bandit14%40localhost
    - https://overthewire.org/wargames/bandit/bandit14.html
- ---
- #### Redirct the output of an interactive command to a file
    - `script /tmp/getPrivateKey.txt`
    - Type your command
- ***Notes***
    - `exit` # Exit the script command
    - Because to get a private key of output of the `openssl s_client -connect localhost:31790` command
- ***References***
    - ChatGPT
    - https://programmercave0.github.io/blog/2019/12/24/Bandit-Level-16-to-Level-19-OverTheWire
- ---
- #### Execute a command of remote server using SSH
    - `ssh bandit18@bandit.labs.overthewire.org -p 2220 head readme`
- ***Notes***
    - `head readme` # Replace it with your desired command
    - Because to pass the level about "logout when logging in with SSH".
- ***References***
    - ![2023-03-15_12:17:57.png](../assets/2023-03-15_12:17:57.png)
    - https://mayadevbe.me/posts/overthewire/bandit/level19/
- ---
- #### The abbreviation of "standardized test" is "SAT".
    - For college admissions
- ***References***
    - https://en.wikipedia.org/wiki/SAT
- ---
- #### Count a number of files in the current directory in Linux
    - `ls -1 | wc -l`
- ***Notes***
    - `-1` # One file per line
    - `-l` # Lines
- ***References***
    - `man ls`
    - `man wc`
    - ChatGPT
- ---
- #### Install pip with Python3 in Ubuntu Server 22.04
    - `doas apt install python3 python3-pip`
- ***Notes***
    - `pip3 --version` # Verify it
    - Because to use `python3 -m pip install "pelican[markdown]"`
- ***References***
    - ChatGPT
- ---
- #### Use a package mirror for pip in Ubuntu Server 22.04
    - `pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple`
- ***Notes***
    - Because to improve the download speed
- ***References***
    - ChatGPT
    - https://mirrors.tuna.tsinghua.edu.cn/help/pypi/
- ---
- #### Reverse the order of thousand of files in Linux when using the cat command
    - `cat $(ls /home/yaoniplan/test/journals/*.md | sort -r) > /home/yaoniplan/test/.github/README.md`
- ***Notes***
    - `-r` # Reverse
- ***References***
    - `man sort`
    - ChatGPT
- ---
- #### Use the "diff" command to compare two files in Ubuntu Server 22.04
    - `diff countTheNumberOfVowelsAndConsonants.c testCountTheNumberOfVowelsAndConsonants.c`
- ***References***
    - ChatGPT
- ---
- #### Remove some files excluding the ".c" extension in Linux
    - `find . -maxdepth 1 -type f -not -name "*.c" -delete`
- ***Notes***
    - `-maxdepth 1` # Only the current directory
- ***References***
    - ChatGPT
    - ![2023-03-13_14:58:24.png](../assets/2023-03-13_14:58:24.png)
- ---
- #### Use the "mpv" command
    - `mpv --speed=2 --fs=yes URLOfTheVideo`
- ***Notes***
    - `o` # Show progress bar
    - `f` # Full screen
    - `q` # Quit
    - Because be convenient to enable the full screen feature.
        - Play video smoothly
- ***References***
    - ChatGPT
    - `man mpv`
- ---
- #### Add a user in Ubuntu Server 22.04
    - `doas adduser git`
- ***Notes***
    - `git` # Replace it with your desired name
    - Because to use the remote Git repository
- ***References***
    - ChatGPT
- ---
- #### Replace "Sudo" with "Doas" in Ubuntu Server 22.04
    - `sudo vim /etc/doas.conf`
      ```
      permit :wheel
      ```
- ***Notes***
    - `wheel` # A group
    - Because is easy to use
- ***References***
    - `man doas.conf`
    - ChatGPT
- ---
- #### Add a user to a group in Ubuntu Server 22.04
    - `sudo usermod -aG wheel git`
- ***Notes***
    - `-a` # Append
    - `-G` # Groups
    - `wheel` # Replace it with your desired group
    - `git` # Replace it with your desired user
    - See which groups a user belongs to (Two methods)
        - `groups git`
        - `grep git /etc/group`
    - Because to use the doas command
- ***References***
    - `man usermod`
    - ChatGPT
- ---
- #### Run the C program in Linux
    - `gcc factorial.c -o factorial`
    - `./factorial` # Run the program
- ***Notes***
    - `-o` # Outfile
- ***References***
    - `man gcc`
    - ChatGPT
- ---
- #### Use aliyunpan-sync in Docker
    - In Docker
      ```
      docker run -d --name=aliyunpan-sync --restart=always -v "<your local dir>:/home/app/data" -e TZ="Asia/Shanghai" -e ALIYUNPAN_REFRESH_TOKEN="<your refreshToken>" -e ALIYUNPAN_PAN_DIR="<your drive pan dir>" -e ALIYUNPAN_SYNC_MODE="upload" -e ALIYUNPAN_TASK_STEP="sync" tickstep/aliyunpan-sync:v0.2.6
      ```
- ***Notes***
    - `/var/aliyundrive`
    - `:v0.2.6` # Sovle the problem
      ```
      docker: Error response from daemon: manifest for tickstep/aliyunpan-sync:latest not found: manifest unknown: manifest unknown.
      ```
- ***References***
    - https://github.com/tickstep/aliyunpan#docker安装
- ---
- #### Use the "screen" command in Ubuntu Server 22.04
    - `Ctrl-a :`
        - `sessionname learnBash` # Rename the current session name
    - `screen vim someCPrograms/checkPrimeNumber.c`
    - `screen -list` # Get ID and name of sessions
    - `screen -S testScreenList` # Create a session
    - `screen -X -S 14099 quit` # Terminate a session
    - `screen -r testScreenReattach` # Reattach a session
    - `Ctrl-a d` # Deattach
- ***Notes***
    - `-S` # Sessionname
    - `testScreenList` # Replace it with your desired session name
    - `14099` # Replace it with ID of sessions
- ***References***
    - `man screen`
    - ChatGPT
- ---
- #### Mount the AList to the local dirctory using Rclone
    - `rclone config`
      ```
      n # n) New remote
      aliyundrive # name
      45 # Storage of WebDAV
      http://192.168.10.100:5244/dav # URL
      1 # vendor of Nextcloud
      admin # user
      y # y) Yes this is OK (default)
      q # q) Quit config
      ```
    - `doas mkdir /mnt/testAliyundrive/`
    - `rclone mount aliyundrive:/ /mnt/testAliyundrive/`
- ***Notes***
    - `doas apt install rclone` # Install it in Ubuntu Server 22.04
    - `rclone lsd aliyundrive:/` # Check it
- ***References***
    - ChatGPT
    - https://www.youtube.com/watch?v=hoUPP1aLE60
- ---
- #### There is no right to choose. #idea
    - The ownership is in the hands of others
    - You only have the right to use
- ***Notes***
    - Privacy may be less important
    - Depending on who owns the property
- ---
- #### Use Vimium C for file:// in Chromium
    - Click "Allow access to file URLs" button
- ***Notes***
    - Warning: Stability and security will suffer.
- ***References***
    - `about:extensions`
    - https://github.com/gdh1995/vimium-c/issues/747#issuecomment-1272771573
- ---
- #### Set a static IP address in Ubuntu Server 22.04
    - `doas vim /etc/netplan/00-installer-config.yaml`
      ```
      # This is the network config written by 'subiquity'
      network:
        ethernets:
          enp2s0:
            dhcp4: no
            addresses: [192.168.10.100/24]
            gateway4: 192.168.10.1
            nameservers:
              addresses: [192.168.10.1]
        version: 2
      ```
    - `doas netplan apply` # Apply the changes
- ***Notes***
    - `192.168.10.100` # Replace it with your desired IP address
    - `192.168.10.1`
        - `ip route` # Get the gateway
    - Because to use SSH
- ***References***
    - ChatGPT
- ---
- #### The abbreviation of "Dots per inch" is "DPI".
    - A measure
- ***References***
    - https://en.wikipedia.org/wiki/Dots_per_inch
- ---
- #### Set DPI in Chromium
    - `chromium --force-device-scale-factor=1.5`
- ***Notes***
    - `1.5` # Replace it with float number (e.g. *1.2*)
    - In Gentoo Linux
        - `doas vim /etc/chromium/default`
          ```
          CHROMIUM_FLAGS="--force-device-scale-factor=1.2"
          ```
    - Because be convenient to read the text.
- ***References***
    - https://wiki.gentoo.org/wiki/Chromium#HiDPI
- ---
- #### Add API keys to Chromium
    - Join two groups
        - https://groups.google.com/a/chromium.org/forum/?fromgroups#!forum/chromium-dev
        - https://groups.google.com/u/1/a/chromium.org/g/google-browser-signin-testaccounts
    - New a project in "NEW PROJECT"
        - Open https://cloud.google.com/console
        - Click "OAuth consent screen" in "APIs & Services"
        - Select "External" in "User type"
        - Add your email account in "Test users"
    - Add some APIs in "Library"
        - Cloud Search API
        - Google Drive API
        - Safe Browsing API
        - Time Zone API
        - Admin SDK API
        - Chrome Sync API
        - Chrome Web Store API
        - Chrome Spelling API
    - Create credentials in "Credentials"
        - API key
        - Select "Desktop app" for "Application type" in "OAuth client ID"
    - `vim ~/.bash_profile`
      ```bash
      export GOOGLE_API_KEY="AIzaSyBu8FIIyAg8tgViMLBcbqthjvQdutsvOSY"
      export GOOGLE_DEFAULT_CLIENT_ID="696256159994-krng5vgpj2p2f9neqrn46j58q201b0j0.apps.googleusercontent.com"
      export GOOGLE_DEFAULT_CLIENT_SECRET="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"
      ```
- ***Notes***
    - Because to use sync feature
    - `about:version` # View the flags of "Command Line"
- ***References***
    - ![2023-03-10_11:12:24.gif](../assets/2023-03-10_11:12:24.gif)
    - https://nyac.at/posts/google-sync-in-chromium
    - https://www.chromium.org/developers/how-tos/api-keys/
    - https://gitweb.gentoo.org/repo/gentoo.git/tree/www-client/chromium/chromium-109.0.5414.74-r1.ebuild#n835
- ---
- #### Set dark mode in Chromium
    - `about:flags`
    - Type "Auto Dark Mode for Web Contents"
    - Select "Enable with selective inversion of non-image elements"
- ***Notes***
    - Another way in Gentoo Linux
        - `doas vim /etc/chromium/default`
          ```
          CHROMIUM_FLAGS="--force-dark-mode --enable-features=WebContentsForceDark"
          ```
- ***References***
    - https://wiki.gentoo.org/wiki/Chromium#Enable_dark_theme_for_pages_.28prefers-color-scheme.29
- ---
- #### Run extensions on chrome:// URLs
    - `doas vim /etc/chromium/default`
      ```
      CHROMIUM_FLAGS="--extensions-on-chrome-urls"
      ```
- ***Notes***
    - Warning: Stability and security will suffer.
        - Not supported on "view-source:" pages.
    - Because to run a extension named "Vimium C"
        - `Run on chrome://*/* pages`
        - `Run on Chrome's native New Tab Page`
- ***References***
    - https://github.com/gdh1995/vimium-c/issues/444#issuecomment-926447451
- ---
- #### The abbreviation of "Short Message Service" is "SMS".
    - A service component
- ***References***
    - https://en.wikipedia.org/wiki/SMS
- ---
- #### The abbreviation of "United States of America" is "USA".
    - A country
    - In North America
- ***References***
    - https://en.wikipedia.org/wiki/United_States
- ---
- #### Delete a user account in Gentoo Linux
    - `doas userdel -r toshiba`
- ***Notes***
    - `-r` # Remove
    - `toshiba` # A user name
- ---
- #### Act as a spoken English teacher in ChatGPT
  ```
  I want you to act as a spoken English teacher and improver. I will speak to you in English and you will reply to me in English to practice my spoken English. I want you to keep your reply neat, limiting the reply to 100 words. I want you to strictly correct my grammar mistakes, typos, and factual errors. I want you to ask me a question in your reply. Now let's start practicing, you could ask me a question first. Remember, I want you to strictly correct my grammar mistakes, typos, and factual errors.
  ```
- ***Notes***
    - Type your sentence in English
    - Another way
        - Grammar check. Make it more professional. Who is John von Neumann, and what is his identity?
- ***References***
    - https://github.com/f/awesome-chatgpt-prompts
- ---
- #### The abbreviation of "virtual private network" is "VPN".
    - A mechanism
- ***References***
    - https://en.wikipedia.org/wiki/Virtual_private_network
- ---
- #### Redirect URL form "cn.bing.com" to "www.bing.com"
    - `vim headerEditorConfig.json`
      ```json
      {
      	"request": [
      		{
      			"enable": true,
      			"name": "bing-cn-to-www",
      			"ruleType": "redirect",
      			"matchType": "prefix",
      			"pattern": "https://cn.bing.com",
      			"exclude": "",
      			"group": "bing-redirect",
      			"isFunction": false,
      			"action": "redirect",
      			"to": "https://www.bing.com"
      		}
      	],
      	"sendHeader": [
      		{
      			"enable": true,
      			"name": "bing",
      			"ruleType": "modifySendHeader",
      			"matchType": "regexp",
      			"pattern": "^http(s?)://www\\.bing\\.com/(.*)",
      			"exclude": "",
      			"group": "bing-direct",
      			"isFunction": false,
      			"action": {
      				"name": "x-forwarded-for",
      				"value": "8.8.8.8"
      			}
      		}
      	],
      	"receiveHeader": [],
      	"receiveBody": []
      }
      ```
- ***Notes***
    - Install the web browser extension named "Header Editor"
- ***References***
    - https://web.archive.org/web/20230305023028/https://webcache.googleusercontent.com/search?q=cache:1b6OzRW_AoAJ:https://www.chongbuluo.com/thread-15049-1-1.html&cd=5&hl=en&ct=clnk&gl=hk
    - https://www.v2ex.com/t/914329
- ---
- #### Submit a website to archive.org
    - Find the "Save Page Now" in "WEB"
    - Paste URL of the website you want to archive
- ***Notes***
    - Because for future reference.
- ---
- #### Set compact UI in Firefox
    - `vim userChrome.css`
      ```css
      :root {
        --globle-height: 28px !important;
        /* 地址栏最小宽度 */
        --url-container-width: 250px !important;
        /* 地址栏最大宽度 */
        --url-container-max-width: 600px !important;
        --url-container-max-height: 28px !important;
        --urlbar-min-height: 28px !important;
        /* 标签页非选中宽度 */
        --tab-min-width-c: 100px !important;
        /* 标签页选中宽度 */
        --tab-max-width-c: 200px !important;
        --tab-min-height: 26px !important;
        --tab-max-height: 26px !important;
      }
      
      :root[uidensity="compact"] {
        --tab-min-height: var(--globle-height) !important;
      }
      
      :root[uidensity="compact"] #urlbar {
        min-height: var(--globle-height) !important;
      }
      
      /* 隐藏元素 */
      /* 忘记是什么了 */
      #navigator-toolbox #titlebar #toolbar-menubar, 
      hbox.titlebar-spacer:nth-child(3),
      hbox.titlebar-spacer:nth-child(1),
      /* 标签页关闭按钮 */.tab-close-button,
      /* 新建标签页按钮 */#tabs-newtab-button,
      /* 地址栏前进按钮 */ #navigator-toolbox #nav-bar #nav-bar-customization-target #back-button,
      /* 地址栏后退按钮 */#navigator-toolbox #nav-bar #nav-bar-customization-target #forward-button,
      /* 地址栏搜索图标 */#identity-box,
      /* 地址栏安全图标 */#tracking-protection-icon-container,
      /* 地址栏背景元素 */#urlbar-background {
        display: none !important;
      }
      
      /* 设置整个导航工具栏为弹性盒模型，反转地址栏和标签栏的位置 */
      #navigator-toolbox {
        /* position: relative !important; */
        display: flex !important;
        justify-content: start !important;
        flex-direction: row-reverse !important;
        flex-wrap: wrap !important;
      }
      
      #navigator-toolbox > #titlebar {
        -moz-appearance: unset !important;
        margin-left: 1px !important;
        flex: 1 !important;
        height: var(--globle-height) !important;
      }
      
      /* flex设置为0后，max-width无效，因此不用设置max-width + !important，
          从而导致关闭标签后max-width因为!important属性而无法设置为空，进而导致标签无法关闭的bug */
      .tabbrowser-tab:-moz-lwtheme {
        width: var(--tab-min-width-c) !important;
        -moz-box-flex: 0 !important;
      }
      
      .tabbrowser-tab[visuallyselected="true"] {
        width: var(--tab-max-width-c) !important;
      }
      
      .tab-background {
        height: 28px !important;
        border-radius: 1px !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      .tab-content {
        padding: 0 5px !important;
        height: 28px !important;
      }
      
      /* 地址栏,消除一些边距 */
      #nav-bar,
      #nav-bar-customization-target,
      #urlbar-container {
        margin: 0px !important;
        padding: 0px !important;
        height: var(--globle-height) !important;
      }
      
      #urlbar-container {
        min-width: var(--url-container-width) !important;
        height: var(--url-container-max-height) !important;
        max-height: var(--url-container-max-height) !important;
      }
      
      /* 地址栏宽度动画 */
      #nav-bar > #nav-bar-customization-target > #urlbar-container {
        width: var(--url-container-width) !important;
        transition: width 400ms !important;
      }
      #nav-bar
        > #nav-bar-customization-target
        > #urlbar-container:hover:focus-within {
        width: var(--url-container-max-width) !important;
        transition: width 400ms !important;
      }
      
      #urlbar[breakout]:hover > vbox.urlbarView {
        display: block !important;
      }
      
      #urlbar > vbox.urlbarView {
        background-color: #37363ac9 !important;
        display: none !important;
      }
      
      /* 书签栏 */
      #PersonalToolbar {
        width: 28px !important;
        height: 28px !important;
        padding-inline: 0 !important;
        margin-right: 1px !important;
      }
      
      /* 书签列表中的元素长宽 */
      menuitem.bookmark-item {
        min-width: 20em !important;
        max-width: 20em !important;
      }
      
      /* 修改书签组图标 */
      #PlacesChevron {
        list-style-image: url("chrome://browser/skin/bookmark.svg") !important;
      }
      
      /* 全屏后，浏览器上部会在屏幕范围外面多出大约7px的空间，导致地址栏超出屏幕外 */
      /* 修复全屏顶部元素溢出屏幕上面 */
      /* :root[tabsintitlebar][sizemode="maximized"] #navigator-toolbox {
        padding-top: 7px !important;
      } */
      ```
- ***Notes***
    - `about:config`
        - `toolkit.legacyUserProfileCustomizations.stylesheets` # Set to "true"
    - `about:profiles`
        - `cd /home/yaoniplan/.mozilla/firefox/3y390lx5.default-release/`
        - `mkdir chrome/`
        - Put userChrome.css file into chrome/ directory
    - Close the Firefox and then open it # Make the changes effective
- ***References***
    - ![2023-03-05_15:58:55.png](../assets/2023-03-05_15:58:55.png)
    - https://github.com/dave-luna/Compact-Firefox-UI
    - https://github.com/MapoMagpie/firefox-compact-ui
- ---
- #### Set full screen in Chromium
    - Click the three vertical dots
    - Click the full screen mode icon
- ***Notes***
    - Click the "X" button # Exit the full screen mode
- ***References***
    - https://www.businessinsider.com/guides/tech/how-to-full-screen-google-chrome
- ---
- #### Close the download bar in Chromium
    - `Ctrl-j` # Open "Downloads" tab
    - `Ctrl-w` # Close it
- ***References***
    - https://superuser.com/questions/111675/google-chrome-auto-close-download-bar/287463#287463
- ---
- #### Trying to build a blog
    - No comment system
    - Markdowm # Simple
    - Searchable
    - Waterfalls flow
- ***References***
    - https://blog.est.im/
    - https://v2ex.com/t/921010#reply140
- ---
- #### Compress a directory in Unix-like
    - `tar -cf 220901yaoniplanMigratePlatform.tar .`
    - `gzip 220901yaoniplanMigratePlatform.tar`
- ***Notes***
    - `-c` # Create
    - `-f` # File
    - If you want higher compression.
        - `gzip` # Replace it with `xz`
- ***References***
    - `man tar`
    - ![2023-03-05_10:52:14.png](../assets/2023-03-05_10:52:14.png)
- ---
- #### Set dark mode in Firefox
    - `about:config`
      ```
      ui.systemUsesDarkTheme
      ```
    - Select "Number", click plus button, and write down "1"
- ***Notes***
    - Warning: the method is suitable for google.com, github.com, duckduckgo.com, etc.
- ***References***
    - https://www.askvg.com/tip-force-mozilla-firefox-to-always-use-dark-or-light-theme-mode/
- ---
- #### Disable smooth scroll in Firefox
    - `about:config`
      ```
      general.smoothScroll
      ```
    - Toggle it from true to false
- ---
- #### Solve a problem about Qutebrowser
    - `export XDG_RUNTIME_DIR="/tmp/runtime-yaoniplan"`
    - `export RUNLEVEL=3`
- ***References***
    - The problem
      ```
      09:01:48 WARNING: QStandardPaths: XDG_RUNTIME_DIR not set, defaulting to '/tmp/runtime-yaoniplan'
      ```
    - https://stackoverflow.com/questions/59790350/qstandardpaths-xdg-runtime-dir-not-set-defaulting-to-tmp-runtime-aadithyasb/59843603#59843603
- ---
- #### Use Vimium C for hint
    - Custom key mappings
      ```
      unmap F
      map gh LinkHints.activate button="right" # Right click
      
      env files host="http://192.168.10.100:5244/"
      env telegramImages host="https://web.telegram.org/z/"
      
      run f lh expect="files:lh1,telegramImages:lh2"
      run <v-lh1> lh clickable=".hope-text"
      run <v-lh2> lh clickable=".thumbnail"
      map <v-lh> LinkHints.activate
      ```
- ***Notes***
    - `files` # Replace it with other name you like
    - `http://192.168.10.100:5244/` # Replace it with URL
    - `.hope-text` # Replace it with other CSS elements
        - `Ctrl-Shift-c` # In Chromium
        - Then hover your mouse to where you want to click # Get it
    - `Ctrl-y` # The same as `Ctrl-r` in Vim
- ***References***
    - https://github.com/gdh1995/vimium-c/issues/624#issuecomment-1117473544
    - https://github.com/gdh1995/vimium-c/wiki/Map-a-key-to-different-commands-on-different-websites
    - https://github.com/gdh1995/vimium-c/issues/602#issuecomment-1094111805
    - https://github.com/gdh1995/vimium-c/issues/869#issuecomment-1435837660
- ---
- #### Use Vimium C for color of hint
    - Custom CSS for Vimium C UI
      ```css
      .LH, .D>.LH { background: black; font-weight: bold; font-size: 15px; color: white;}
      .LH { border: /*!DPI*/ 0px solid lightgreen; }
      ```
- ***References***
    - https://github.com/gdh1995/vimium-c/wiki/Style-the-UI-of-Vimium-C-using-Custom-CSS
- ---
- #### Find a Linux distribution suitable for use as a server
    - Ubuntu Server 22.04 (2023-02-28)
- ***Notes***
    - Needs
        - Docker
- ---
- #### Set static IP address in Gentoo Linux
    - `vim /etc/conf.d/net.eno1`
      ```
      config_eno1="192.168.10.105 netmask 255.255.255.0"
      routes_eno1="default via 192.168.10.1"
      dns_servers_eno1="192.168.10.1"
      ```
    - `ln -s /etc/init.d/net.lo /etc/init.d/net.eno1` # Create symlinks
    - `rc-service net.eno1 restart` # Restart the interface
    - `rc-update add net.eno1 default` # Enable at boot
- ***Notes***
    - `eno1` # Replace it with interface name
        - `ifconfig` # Get interface name
    - `192.168.10.105` # Replace it with static IP address
    - `192.168.10.1` # Replace it with gateway
        - `netstat -rn` # Get gateway
    - Because to use SSH
- ***References***
    - https://wiki.gentoo.org/wiki/Netifrc
- ---
- #### Use SSH without password in Unix-like
    - `ssh-copy-id git@192.168.10.100` # Run it in local
- ***Notes***
    - `git@192.168.10.100` # Replace it with server
    - In fact, it appends client's *id_rsa.pub* file to server's *~/.ssh/authorized_keys* file
        - `ssh-keygen` # Solve the problem
          ```
          yaoniplan@ubuntu2204:~$ ssh-copy-id git@192.168.10.100
          /usr/bin/ssh-copy-id: ERROR: No identities found
          ```
- ***References***
    - https://wiki.gentoo.org/wiki/SSH#Server
- ---
- #### Create a user in Gentoo Linux
    - `useradd -m -G users,wheel,audio -s /bin/bash testUser`
    - `passwd testUser`
- ***Notes***
    - `-G` # Groups
    - `-s` # Shell
    - `testUser` # Replace it with user name
- ***References***
    - `man useradd`
    - https://wiki.gentoo.org/wiki/Handbook:AMD64/Installation/Finalizing#Adding_a_user_for_daily_use
- ---
- #### Solve a problem about SSH
    - `vim /etc/ssh/sshd_config`
      ```
      #PasswordAuthentication no
      PasswordAuthentication yes
      ```
    - `rc-service sshd restart` # Make changes effective
- ***References***
    - The problem
      ```
      Failed init storage: ssh: handshake failed: ssh: unable to authenticate, attempted methods [none], no supported methods remain
      ```
    - https://stackoverflow.com/questions/47102080/ssh-in-go-unable-to-authenticate-attempted-methods-none-no-supported-method/47144076#47144076
- ---
- #### Install Ubuntu Server 22.04
    - Follow steps of the [website](https://ubuntu.com/server/docs/installation)
        - Install OpenSSH server
- ***Notes***
    - `vim /etc/apt/sources.list` # Change mirrors
        - Replace `http://security.ubuntu.com/` with `https://mirrors.ustc.edu.cn/`
- ***References***
    - https://mirrors.ustc.edu.cn/help/ubuntu.html
- ---
- #### Disable the new code search and code view in GitHub
    - Feature preview
    - New code search and code view
- ***Notes***
    - Because can't use Vimium's feature
- ***References***
    - https://docs.github.com/en/repositories/working-with-files/managing-files/navigating-files-with-the-new-code-view
- ---
- #### Use Surfingkeys
    - `zr` # Zoom reset
    - `zi` # Zoom in
    - `w` Switch frames
    - `gU` # Go URL of root
    - `gx$` # Close tabs on right
    - `og` # Open Google
    - Learn JavaScript
    - `;e` # Open settings
    - `Alt-s` # Turn off Surfingkeys
    - `W` # Windows
    - `;gw` # Gather windows
- ***Notes***
    - Surfingkeys.js
      ```javascript
      api.map('<Ctrl-[>', '<Esc>'); // Map a key to another
      api.unmap('F'); // Unmap the F key
      api.Hints.setCharacters('sadfjklewcmpgh'); // Like Vimium
      settings.hintAlign = "left"; // Set left alignment
      settings.smoothScroll = false; // Disable smooth scroll
      api.Hints.style(" \
          font-family: Roboto, sans serif; \ // Set font
          font-size: 15px; \ // Set font size
          color: #ffffff; \ // Set font color
          border: unset; \ // Disable border
          background: #000000; \ // Set background color
      ");
      ```
    - May I need
        - Call search bar
        - Right click
        - Bookmarks and a file
    - The extension will make your browser use a lot of CPU resources.
        - Maybe mining
- ***References***
    - https://github.com/brookhong/Surfingkeys/issues/166#issuecomment-270044552
    - https://github.com/brookhong/Surfingkeys/blob/master/docs/API.md
    - https://gist.github.com/coramuirgen/94ba1d587cb2093c71f6ef4f0b371069
    - https://gitlab-com.translate.goog/-/snippets/1985201?_x_tr_sl=auto&_x_tr_tl=zh-CN&_x_tr_hl=en-US
    - https://github.com/brookhong/Surfingkeys#follow-links
- ---
- #### Solve a problem about Linux-firmware in Gentoo Linux
    - `doas vim /etc/portage/package.license`
      ```
      # Accepting the license for linux-firmware
      sys-kernel/linux-firmware linux-fw-redistributable
      
      # Accepting any license that permits redistribution
      sys-kernel/linux-firmware @BINARY-REDISTRIBUTABLE
      ```
- ***References***
    - The problem
      ```
      - sys-kernel/linux-firmware-99999999::gentoo (masked by: || ( ) linux-fw-redistributable license(s), missing keyword)
      - A copy of the 'linux-fw-redistributable' license is located at '/var/db/repos/gentoo/licenses/linux-fw-redistributable'.
      ```
    - https://wiki.gentoo.org/wiki//etc/portage/package.license
- ---
- #### Use "AList" in Docker
    - SFTP
      ```
      /backupPrivateFiles # Mount Path
      Name # Order by
      Descending # Order direction
      192.168.10.100:22 # Address
      yaoniplan # Username
      ****** # Password
      /mnt/backupPrivateFiles # Root folder path
      ```
    - AliyundriveOpen
      ```
      / # Mount Path
      /folder/hereIsRootFolderID # Root folder id
      useYourMobilePhoneToGet # Refresh token
      Name # Order by
      Ascending # Order direction
      ```
    - Lanzou
      ```
      /APK # Mount Path
      Name # Order by
      Descending # Order direction
      Cookie # Type
      networkMydisk.phpCookie # Cookie
      https://wwee.lanzouy.com # ShareUrl
      ```
- ***Notes***
    - Install AList if you don't have it
        - `docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest`
        - `docker exec -it alist ./alist admin` # Get admin user's information
    - Refresh pages (Two methods)
        - Click "Refresh" icon
        - Close the website and then open it
    - View pictures of relative paths in Markdown
        - Follow steps of the [comment](https://github.com/alist-org/alist/issues/996#issuecomment-1404824642)
    - Add README.md (Two methods)
        - Upload README.md
        - Add Markdown content to "Readme" in "Metas"
    - Replace logo and favicon
        - Upload images
        - Copy link
        - Paste it to "Logo" and "Favicon" in style settings
- ***References***
    - Add a demo.gif here
    - https://github.com/alist-org/alist/issues/829#issuecomment-1080066329
    - https://github.com/alist-org/alist/issues/2668#issuecomment-1345132515
    - https://github.com/alist-org/alist/issues/2668#issuecomment-1345480664
    - https://alist.nn.ci/guide/drivers/lanzou.html
    - https://alist.nn.ci/guide/drivers/aliyundrive_open.html
    - https://alist.nn.ci/guide/drivers/sfpt.html
    - https://github.com/alist-org/alist/issues/2267
- ---
- #### Use shasum to verify the checksum in Unix-like
    - `shasum -a 256 ubuntu-22.04.2-live-server-amd64.iso`
- ***Notes***
    - `-a` # Algorithm
    - `256` # Replace it with other algorithm (e.g. *512*)
- ***References***
    - `man shasum`
    - ![2023-02-26_11:59:36.png](../assets/2023-02-26_11:59:36.png)
    - https://ubuntu.com/download/server
- ---
- #### Understand "Statue of Liberty"
    - A statue
    - In the United States
- ***References***
    - https://en.wikipedia.org/wiki/The_Legend_of_1900
    - https://en.wikipedia.org/wiki/Statue_of_Liberty
- ---
- #### Keep the sshd active when closing the laptop lid
    - `sudo vim /etc/systemd/logind.conf`
      ```
      #HandleLidSwitch=suspend
      HandleLidSwitch=ignore
      ```
- ***Notes***
    - Solve the problem
      ```
      yaoniplan@tux ~ $ ssh root@192.168.10.100
      ssh: connect to host 192.168.10.100 port 22: No route to host
      ```
- ***References***
    - https://askubuntu.com/questions/113824/how-to-keep-ssh-server-running-with-laptop-lid-closed/1371882#1371882
- ---
- #### Install Docker in Ubuntu Server 22.04
    - Follow the steps of this [website](https://docs.docker.com/engine/install/ubuntu/)
- ***Notes***
    - `doas usermod -aG docker heting` # Add the user to the docker group
        - `-a` # Append
        - `-G` # Group
        - `heting` # Replace it with your user
    - `doas reboot` # Make the changes effective
    - `docker --version` # Verify the installation
- ***References***
    - `man usermod`
    - `man docker`
    - https://www.zdnet.com/article/docker-101-how-to-install-docker-on-ubuntu-server-22-04/
- ---
- #### Use the "docker" command
    - `docker rm -f aliyunpan-sync` # Remove a container
    - `docker rmi tickstep/aliyunpan-sync:v0.2.6` # Remove a image
    - `docker ps` # Get "NAMES" of containers
    - `docker images` # Get "REPOSITORY" and "TAG" of images
    - `docker stop aliyundrive-webdav`
    - `docker start aliyundrive-webdav`
- ***Notes***
    - `-f` # Force
    - `aliyunpan-sync` # "NAMES" of a container
    - `tickstep/aliyunpan-sync` # "REPOSITORY" of a image
    - `v0.2.6` # "TAG" of a image
- ***References***
    - ChatGPT
    - https://phoenixnap.com/kb/install-docker-on-ubuntu-20-04
- ---
- #### Search for selected text in Vim
    - `/` # Search mode
    - `C-r` # Register
    - `"` # The default register
- ***Notes***
    - `y` # Yank text to the `"` register before entering search mode
        - `yl`
    - To Search languages in other countries (e.g. *Japanese*)
- ***References***
    - https://superuser.com/questions/41378/how-to-search-for-selected-text-in-vim
- ---
- #### The abbreviation of "continuous integration" / "continuous deployment" is "CI/CD"
    - Automation
- ***References***
    - https://nn.ci/posts/github-actions.html
    - https://en.wikipedia.org/wiki/CI/CD
- ---
- #### The abbreviation of "Pretty Good Privacy" is "PGP".
    - A program
    - To encrypt
- ***References***
    - https://en.wikipedia.org/wiki/Pretty_Good_Privacy
- ---
- #### Add multiple push URL in Git
    - `git remote set-url --add --push origin git@192.168.10.100:/var/git/note.git`
    - `git remote set-url --add --push origin git@github.com:yaoniplan/note.git`
- ***Notes***
    - `git remote --verbose` # Check Git remote URL
    - `git remote set-url origin git@192.168.10.100:/var/git/note.git` # Update the origin URL
    - `git remote set-url --delete --push origin git@github.com:yaoniplan/note.git` # Delete the push URL
- ***References***
    - `git remote --help`
    - ![2023-02-24_22:06:22.png](../assets/2023-02-24_22:06:22.png)
    - https://blog.yowko.com/git-push-multiple-remote-repository/
    - https://gist.github.com/miztiik/647c3b67a9c3c3e8a5c857436a59477f
- ---
- #### Copy files excluding hidden files in Unix-like
    - `rsync -av --exclude=".*" ../learnPerl/ .`
- ***Notes***
    - `../learnPerl/` # The source
    - `.` # The destination
- ***References***
    - `man rsync`
    - https://stackoverflow.com/questions/11557114/cp-r-without-hidden-files/11557219#11557219
- ---
- #### Rename the branch from "main" to "master" in Git
    - `git branch --move main master`
    - `git push origin --set-upstream master`
- ***Notes***
    - `git branch --all` # List all branches
    - `git push origin --delete main` # Delete the *main* remote branch
    - `git branch --delete main` # Delete the *main* local branch
    - Because the default branch is master in Git
    - Toggle the default branch of settings of a GitHub repository to master to solve the problem
      ```
      yaoniplan@tux /tmp/note $ git push origin --delete main
      To github.com:yaoniplan/note.git
       ! [remote rejected] main (refusing to delete the current branch: refs/heads/main)
      error: failed to push some refs to 'github.com:y
      aoniplan/note.git'
      ```
- ***References***
    - `git branch --help`
    - `git push --help`
    - https://linuxize.com/post/how-to-rename-local-and-remote-git-branch/
    - https://stackoverflow.com/questions/6591213/how-do-i-rename-a-local-git-branch/6591218#6591218
- ---
- #### Complete brackets and quotes automatically in Vim
    - `vim ~/.vimrc`
      ```vim
      inoremap ( ()<Left>
      inoremap ``` ```<CR>```<Up>
      ```
- ***Notes***
    - `( ()` # Replace it with others (e.g. *[ []*, *{ {}*, *< <>*, *' ''*, *" ""*)
    - `<Left>` # The left arrow key
- ***References***
    - `:help <CR>`
    - `:help <Left>`
    - Add a demo.gif here
    - https://www.reddit.com/r/vim/comments/949jmp/comment/e3jaotv/?utm_source=share&utm_medium=web2x&context=3
- ---
- #### Execute Markdown code blocks in Vim
    - `:MarkdownRunner`
- ***Notes***
    - `vim ~/.vimrc` # Install it if you don't have it
      ```vim
      # Lists of plugins
      Plug 'dbridges/vim-markdown-runner'
      ```
    - `:w` # Write
    - `:source ~/.vimrc` # Reload the *~/.vimrc*
    - `:PlugInstall` # Install
    - Another way
        - `w !perl` # Replace perl with your language
        - Visually select the code and `:'<'>w !perl`
- ***References***
    - ![markdown-runner.gif](../assets/markdown-runner.gif)
    - https://www.reddit.com/r/vim/comments/u7gx5p/how_to_execute_a_piece_of_code_in_a_markdown_file/
    - https://github.com/dbridges/vim-markdown-runner
- ---
- #### Use curl
    - `curl -v yaoniplan.eu.org`
- ***Notes***
    - `-v` # Verbose
- ***References***
    - `man curl`
- ---
- #### Understand Esperanto
    - A language
    - To assist in the international
- ***References***
    - https://en.wikipedia.org/wiki/Esperanto
- ---
- #### The abbreviation of "Text To Speech" is "TTS".
- ***References***
    - https://ms-ra-forwarder-lake-tau.vercel.app/
    - https://en.wikipedia.org/wiki/Speech_synthesis
- ---
- #### Solve a problem about Let's Encrypt
    - `certbot certonly --cert-name yaoniplan.eu.org -d yaoniplan.eu.org,www.yaoniplan.eu.org`
- ***Notes***
    - Remove spaces between the domain names
    - Separate them with a comma
- ***References***
    - Question
      ```
      Requested domain  is not a FQDN because it contains an empty label.
      ```
    - https://github.com/certbot/certbot/issues/2916#issuecomment-374372893
- ---
- #### Install Nginx server in FreeBSD
    - `pkg install nginx`
- ***Notes***
    - `vim /etc/rc.conf`
      ```
      nginx_enable="YES"
      ```
    - `nginx -t` # Test the configuration file
- ***References***
    - `man nginx`
    - https://samirparikh.com/blog/share-your-git-repositories-with-stagit-on-freebsd.html
- ---
- #### Some configuration files about network in FreeBSD
    - `/etc/resolv.conf`
    - `/etc/hosts`
- ---
- #### Use Stagit in FreeBSD
    1. Prepare remote Git repositories
        - `vim /var/git/learnPerl/description` # Add description of the repository
        - `vim /var/git/learnPerl/owner` # Add owner's name
        - `vim /var/git/learnPerl/url` # Add clone URL
    2. Install Nginx and Stagit dependency
    3. Prepare remote Git repositories for Stagit
    4. Install Stagit
- ***Notes***
    - I don't need it on February 21, 2023.
        - Just need a simple Git server using SSH
- ***References***
    - ![2023-02-21_10:53:43.gif](../assets/2023-02-21_10:53:43.gif)
    - https://samirparikh.com/blog/share-your-git-repositories-with-stagit-on-freebsd.html
- ---
- #### The authorized_keys is
    - Sum of ~/.ssh/id_rsa.pub
- ***Notes***
    - `scp /home/yaoniplan/.ssh/id_rsa.pub root@192.168.10.100:/tmp/id_rsa.yaoniplan.pub` # In client
        - Copy public key file of client to remote
    - `cat /tmp/id_rsa.yaoniplan.pub >> /home/git/.ssh/authorized_keys` # In remote
        - Append public key to authorized_keys
- ***References***
    - Add a demo.gif here
- ---
- #### Where is the repository in Git server
    - `/var/git/`
- ***References***
    - https://wiki.gentoo.org/wiki/Git#Server
    - https://serverfault.com/questions/432959/wheres-the-conventional-place-to-store-git-repositories-in-a-linux-file-system/432970#432970
- ---
- #### Kill a process in the dmenu
    - `pkill timer` # It may kill timerOfTomato.sh
- ***Notes***
    - `timerOfTomato.sh` # A script
- ***References***
    - Add a demo.gif here
- ---
- #### Display pressed key on screen in Unix-like
    - `screenkey` # Run it
        - `pkg install screenkey` # In FreeBSD
        - `emerge x11-misc/screenkey` # In Gentoo Linux
- ***Notes***
    - Pop up on the side. # I may need
- ---
- #### Display public IP address
    - `links ip4.me`
    - `curl -4 ifconfig.co`
- ---
- #### The abbreviation of "Domain Name System" is "DNS".
    - A system
- ***References***
    - https://en.wikipedia.org/wiki/Domain_Name_System
- ---
- #### Remove packages in FreeBSD
    - `pkg remove mysql57-client`
- ***Notes***
    - `pkg info | grep mysql` # Search the package before removing
    - `rm -rf /var/db/mysql/`
- ***References***
    - https://www.cyberciti.biz/faq/how-to-install-mariadb-databases-on-a-freebsd-v10-unix-server/
- ---
- #### Install Apache server in FreeBSD
    - `pkg install www/apache24`
    - `echo 'apache24_enable="YES"' >> /etc/rc.conf`
    - `/usr/local/etc/rc.d/apache24 start`
- ***Notes***
    - `/usr/local/etc/rc.d/apache24 start` # Replace it with `service apache24 start`
    - Solve the problem
      ```
      (48)Address already in use: AH00072: make_sock: could not bind to address 0.0.0.0:80
      no listening sockets available, shutting down
      ```
        - `lsof -i :80`
        - `kill youPID`
- ***References***
    - https://www.cyberciti.biz/faq/how-to-install-apache-mysql-php-stack-on-freebsd-unix-server/
    - https://www.cyberciti.biz/faq/freebsd-apache-web-server-tutorial/
- ---
- #### Install MariaDB server in FreeBSD
    - `pkg install mariadb103-server`
    - `sysrc mysql_enable=YES` # Set MariaDB to start at boot time
    - `service mysql-server start` # Start MariaDB
- ***Notes***
    - `pkg search mariadb | grep server` # Search it before installing
    - `mysql -u root -p mysql` # Login as root user
- ***References***
    - https://wiki.freebsd.org/MariaDB
    - https://www.cyberciti.biz/faq/how-to-install-mariadb-databases-on-a-freebsd-v10-unix-server/
- ---
- #### Install PHP server in FreeBSD
    - `pkg install php80`
    - `cp /usr/local/etc/php.ini-production /usr/local/etc/php.ini`
    - `pkg install vim php80-xml mod_php80 php80-zip php80-mbstring php80-zlib php80-curl php80-mysqli php80-gd php80-gd` # Install PHP extensions
- ***Notes***
    - `pkg search php | grep server` # Search it before installing
    - `php --version` # Check the version
- ***References***
    - https://computingforgeeks.com/how-to-install-php-8-on-freebsd-system/
- ---
- #### Install Gitea in FreeBSD
    - `pkg install gitea`
    - `sysrc gitea_enable=YES`
    - `service gitea start`
- ***Notes***
    - `/usr/local/etc/gitea` # Config files
    - `/usr/local/share/gitea` # Templates, options, plugins, and themes
    - `/usr/local/etc/rc.d/gitea` # A start script
- ***References***
    - https://docs.gitea.io/en-us/install-from-package/
- ---
- #### The abbreviation of certificate authority is CA
    - Let's Encrypt is a CA.
- ***References***
    - https://letsencrypt.org/getting-started/
    - https://en.wikipedia.org/wiki/Certificate_authority
- ---
- #### Use Let's Encrypt in Apache server
    - `vim /usr/local/etc/apache24/httpd.conf` # Uncomment
      ```
      LoadModule ssl_module modules/mod_ssl.so
      Include conf/extra/httpd-ssl.conf
      ```
- ***Notes***
    - ``
- ***References***
    - ``
- ---
- #### Replace `#!/usr/bin/perl` with `#!/usr/bin/env perl` in Unix-like
    - Make the script portable
- ***References***
    - `whereis env`
    - https://www.cyberciti.biz/tips/finding-bash-perl-python-portably-using-env.html
- ---
- #### The abbreviation of environment is env in Unix-like
- ***References***
    - `man env`
- ---
- #### Delete a user account and home directory in FreeBSD
    - `pw userdel git -r`
- ***Notes***
    - `pw` # Password
    - `git` # Replace it with your user name
    - `-r` Remove
- ***References***
    - `man pw`
    - https://www.cyberciti.biz/faq/freebsd-remove-user-account-command/
- ---
- #### The abbreviation of Portable Document Format is PDF in Linux
- ***Notes***
    - `less file.pdf`
- ***References***
    - https://unix.stackexchange.com/questions/41362/view-pdf-file-in-terminal/41364#41364
    - https://en.wikipedia.org/wiki/PDF
- ---
- #### Use ZFS to set a snapshot in FreeBSD
    - `zfs snapshot -r zroot@testpool` # Create a recursive snapshot of an entire pool
    - `zfs rollback -r zroot@testpool` #
    - `zfs list` # List
    - `zfs snapshot zroot/usr/home@test1-snapshot` # Create a snapshot
        - `zfs allow heting snapshot zroot/usr/home` # Allow an unprivilege user to use snapshot
    - `zfs destroy zroot/usr/home@permitTest01` # Destroy a snapshot
        - `zfs allow heting destroy,mount zroot/usr/home` # Allow an unprivilege user to use destroy and mount
    - `zfs list -t snapshot`
        - `-t` # Type
- ***References***
    - `man zfs`
    - https://klarasystems.com/articles/basics-of-zfs-snapshot-management/
- ---
- #### Mount the hard disk permanently in Linux
    - `doas vim /etc/fstab`
      ```
      UUID=f75f68b6-d1b3-4062-9a22-7dbff615efb6   /mnt/Toshiba ext4 defaults       0 0
      ```
    - `doas chown -R yaoniplan:yaoniplan /mnt/Toshiba/`
        - Solve the problem about operation not permitted
- ***Notes***
    - `UUID=f75f68b6-d1b3-4062-9a22-7dbff615efb6` # Replace it with your UUID of block device
    - `/mnt/Toshiba/` # Replace it with your mount point
    - `ext4` # Replace it with your type of block device
    - `yaoniplan` # Replace it with your user name
    - Mount all filesystems without rebooting
        - `doas mount --all`
        - `lsblk`
- ***References***
    - `man mount`
    - `man lsblk`
    - `man chown`
    - `doas blkid`
    - https://www.howtogeek.com/444814/how-to-write-an-fstab-file-on-linux/
- ---
- #### Learn Perl 5
    - A programming language
- ***References***
    - https://en.wikipedia.org/wiki/Perl
- ---
- #### Check default gateway in Unix-like
    - `netstat -rn`
- ***Notes***
    - `-r` # Route
    - `-n` # Numeric
- ***References***
    - `man netstat`
    - https://www.unixmen.com/how-to-find-default-gateway-in-linux/
- ---
- #### Check netmask in Unix-like
    - `ifconfig | grep netmask`
- ***Notes***
    - `0xffffff00` # The netmask
        - In hexadecimal
- ***References***
    - `man ifconfig`
    - Example
      ```
      root@heting:~ # ifconfig | grep netmask
              inet 192.168.10.100 netmask 0xffffff00 broadcast 192.168.10.255
              inet 127.0.0.1 netmask 0xff000000
      ```
- ---
- #### Set static IP address and DNS in FreeBSD
    - `vim /etc/rc.conf`
      ```
      ifconfig_re0="inet 192.168.10.100 netmask 0xffffff00"
      defaultrouter="192.168.10.1"
      ifconfig_re0="DHCP"
      ```
    - `/etc/rc.d/netif restart && /etc/rc.d/routing restart` # Restart the Network
- ***Notes***
    - `re0` # Replace it with your network card name
    - `192.168.10.100` # Replace it with your IP address
    - `0xffffff00` # Replace it with your netmask
    - `192.168.10.1` # Replace it with your default gateway
- ***References***
    - `netstat -rn`
    - `ifconfig`
    - https://ostechnix.com/set-static-ip-address-and-dns-on-freebsd/
- ---
- #### Create a domain name with "eu.org"
    - GitHub pages, Cloudflare, eu.org
- ***Notes***
    - GitHub pages
        - A repository named yaoniplan.github.io
        - Custom domain
        - Enforce HTTPS
    - Cloudflare
        - CNAME, www, yaoniplan.github.io, Proxied
    - In order to test a website
    - I don't need it on February 21, 2023.
        - Just need a local IP address (e.g. *192.168.10.100*)
    - Why I don't need it?
        - Resolve domain name to server public IP address
        - AAAA, www.yaoniplan.eu.org, *yourIPv6*
        - A, yaoniplan.eu.org, *yourIPv4*
    - What is the public IP address?
        - Visible on the internet (Instead of on the home network)
- ***References***
    - https://nic.eu.org/
    - https://dash.cloudflare.com/
    - https://www.bilibili.com/video/BV1TB4y1Q7b5/
    - https://qr.ae/prWFbq
    - https://www.youtube.com/watch?v=In3UZAYiP2c
- ---
- #### The abbreviation of Free Berkeley Software Distribution is FreeBSD
- ***Notes***
    - An operating system
- ***References***
    - https://en.wikipedia.org/wiki/FreeBSD
- ---
- #### Use the top command in FreeBSD
    - `s` # Seconds
    - `a` # Arguments (Full command)
    - `/` # Filter
- ***Notes***
    - In order to pause at some point
- ***References***
    - `h`
- ---
- #### The abbreviation of manual is man in Unix-like
- ***References***
    - `man man`
- ---
- #### Mount a hard drive in Unix-like
    - `mkdir /mnt/yourHardDriveName/`
    - `mount /mnt/yourHardDriveName/`
- ***Notes***
    - `umount /mnt/yourHardDriveName/` # Unmount
    - Mount in an empty directory under the */mnt/* directory
- ---
- #### Use SSH to create a Git server in FreeBSD
    - Remote
      ```
      adduser
      su git
      cd
      mkdir .ssh/ && chmod 700 .ssh/
      touch .ssh/authorized_keys && chmod 600 .ssh/authorized_keys
      cat /tmp/id_rsa.yaoniplan.pub >> ~/.ssh/authorized_keys
      cd /var/git/
      mkdir test.git/ && cd test.git/
      git init --bare
      ```
    - Client
      ```
      mkdir test/ && cd test/
      git init
      echo "# test" >> README.md && git add --all
      git commit -m "Add README.md"
      git remote add origin git@192.168.10.100:/var/git/test.git
      git push origin master
      ```
- ***Notes***
    - `/tmp/id_rsa.yaoniplan.pub` # Replace *yaoniplan* with your user name
    - Other people on the team
        1. Copy `/home/whoseName/.ssh/id_rsa.pub` of client to `/tmp/id_rsa.whoseName.pub` of remote
        2. Append `/tmp/id_rsa.whoseName.pub` to `/home/git/.ssh/authorized_keys` in remote
    - `git init --bare` # Initialize a bare repository
    - `chown -R git:git /var/git/` # Change the owner to git after making a directory of repository
- ***References***
    - `git init --help`
    - https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server
    - https://samirparikh.com/blog/run-simple-git-server-on-freebsd-using-ssh.html
- ---
- #### Check the system log in Unix-like
    - `less /var/log/messages`
- ***Notes***
    - `/var/log/` # Most of log files are in this directory
- ---
- #### Try to use FreeBSD as a remote server. #idea
    - Install it by following steps of this [website](https://docs.freebsd.org/en/books/handbook/bsdinstall/)
- ---
- #### Stop a service in FreeBSD
    - `service syslogd stop`
- ***Notes***
    - `syslogd` # Replace it with your service
- ---

- #### The abbreviation of operating system is OS
- ***Notes***
    - A software
- ***References***
    - https://en.wikipedia.org/wiki/Operating_system
- ---
- #### Try to use the script in the dmenu instead of in the terminal.
- ---
- #### The abbreviation of "Chat Generative Pre-trained Transformer" is "ChatGPT".
- ***Notes***
    - A bot
    - To chat
- ***References***
    - https://en.wikipedia.org/wiki/ChatGPT
- ---
- #### Check the version of the scp command in Unix-like
    - `ssh -V`
- ***Notes***
    - `-V` # Version
    - The relative tools (e.g. ssh, sftp, scp) are parts of the OpenSSH.
- ***References***
    - `man ssh`
    - https://unix.stackexchange.com/questions/704740/how-to-get-scp-version/704741#704741
- ---
- #### Add a user to a group in Linux
    - `gpasswd -a yaoniplan vboxusers`
- ***Notes***
    - `-a` # Add
    - `yaoniplan` # Replace it with your user name
    - `vboxusers` # Repalce it with your group name
- ***References***
    - Add a demo.png here
    - `man gpasswd`
- ---
- #### Check the host name in Unix-like
    - `hostname`
- ***References***
    - `man hostname`
    - https://man.freebsd.org/cgi/man.cgi?hostname(1)
- ---
- #### Check the current Shell in Unix-like
    - `echo $SHELL`
- ***Notes***
    - Another way
        - `cat /etc/passwd | grep bandit26`
    - Because to know which Shell syntax to use
- ***References***
    - https://david-varghese.medium.com/overthewire-bandit-level-25-level-26-35d375ef61e
- ---
- #### Set a password for a user in Unix-like
    - `passwd heting`
- ***Notes***
    - `heting` # Replace it with your user name
- ---
- #### Create a user in FreeBSD
    - `pw useradd heting`
- ***Notes***
    - `adduser` # Another way
- ---
- #### Add a user to multiple groups in FreeBSD
    - `pw usermod heting -G wheel,video`
- ***Notes***
    - `-G` # Grouplist
- ***References***
    - `man pw`
    - https://www.cyberciti.biz/faq/freebsd-add-a-user-to-group/
- ---
- #### Check a installed package information in FreeBSD
    - `pkg info | grep git`
- ***Notes***
    - `info` # Information
    - `git` # Replace it with a package
- ***References***
    - `man pkg`
    - ![2023-02-10_09:28:48.png](../assets/2023-02-10_09:28:48.png)
- ---
- #### Write a finite loop in Bash
    - `for i in {1..10}; do touch file0$i.txt; done`
- ***Notes***
    - `i` # A variable
- ***References***
    - ![2023-02-10_10:56:53.png](../assets/2023-02-10_10:56:53.png)
    - https://iq.opengenus.org/for-and-while-loop-in-shell-scripting/
- ---
- #### Disable audio bell in kitty
    - `vim ~/.config/kitty/kitty.conf`
      ```
      enable_audio_bell no
      ```
- ***Notes***
    - For quiet
- ***References***
    - https://www.reddit.com/r/KittyTerminal/comments/m3dnrq/comment/gqpeiii/?utm_source=share&utm_medium=web2x&context=3
    - https://sw.kovidgoyal.net/kitty/conf/#terminal-bell
- ---
- #### Switch between windows with dmenu
    - Install manually
      ```
      git clone https://github.com/NikitaIvanovV/dmenu-win
      cd ./dmenu-win/
      doas make install
      ```
- ***Notes***
    - `doas make uninstall` # Uninstall manually
    - Another way
        - Download https://tools.suckless.org/dmenu/scripts/switch
        - Put it into your PATH (e.g. ~/.local/bin/)
        - `chmod u+x ~/.local/bin/switch` # Modify user executable permissions for the script
        - Type the `switch` in your search bar of dmenu
- ***References***
    - ![2023-02-09_10:26:27.gif](../assets/2023-02-09_10:26:27.gif)
    - https://github.com/NikitaIvanovV/dmenu-win
- ---
- #### Try to use drop down terminal in i3
    - `xfce4-terminal --drop-down` # It works but quits when not focused
    - tdrop # Not used yet because of too many dependencies
    - qterminal # It works but quits when not focused
    - tilda # It will create a new workspace
    - guake # Iw works well
- ---
- #### Delete 2 lines in the upward direction in Vim
    - `V2kd`
- ***Notes***
    - `V` # Visual line mode
    - `k` # Up
    - `d` # Delete
    - The above method will delete the current line
- ***References***
    - ![2023-02-20_14:35:30.gif](../assets/2023-02-20_14:35:30.gif)
    - https://stackoverflow.com/questions/6954755/delete-n-lines-in-the-up-direction-in-vim
- ---
- #### Use sha512sum to verify the checksum
    - `sha512sum -c CHECKSUM.SHA512-FreeBSD-13.1-RELEASE-amd64 FreeBSD-13.1-RELEASE-amd64-disc1.iso`
- ***Notes***
    - `-c` # Check
- ***References***
    - `man sha512sum`
    - ![2023-02-08_10:54:57.png](../assets/2023-02-08_10:54:57.png)
- ---
- #### Use Wget to continue the broken download
    - `wget -c https://download.fedoraproject.org/pub/fedora/linux/releases/37/Server/x86_64/iso/Fedora-Server-dvd-x86_64-37-1.7.iso`
- ***Notes***
    - `-c` # Continue
- ***References***
    - `man wget`
- ---
- #### Drop down terminal in i3
    - `vim ~/.config/i3/config`
      ```
      for_window [class="^kitty$"] floating enable, move absolute position 0px 0px, resize set 1366px 400px, move scratchpad
      ```
- ***Notes***
    - `0px 0px` # X and Y coordinates
    - `1366px 400px` # Width and height
- ***References***
    - ![2023-02-07_18:37:33.gif](../assets/2023-02-07_18:37:33.gif)
    - https://www.reddit.com/r/i3wm/comments/hxhtpc/comment/fz6epw7/?utm_source=share&utm_medium=web2x&context=3
    - https://i3wm.org/docs/userguide.html#move_direction
    - https://i3wm.org/docs/userguide.html#resizingconfig
- ---
- #### Clear the current line in Vim
    - `^d$`
- ***Notes***
    - `^` # Beginning of line
    - `d` # Delete
    - `$` # End of line
- ---
- #### Replace the import command with scrot
    - `scrot -u $HOME/$(date +%F_%T).png`
- ***Notes***
    - `-u` # Focused window
    - `scrot $HOME/$(date +%F_%T).png` # The full screen by default
- ***References***
    - ![2023-02-06_11:47:12.png](../assets/2023-02-06_11:47:12.png)
    - `man scrot`
- ---
- #### Solve problems about MySQL in Gentoo Linux
    - `emerge virtual/mysql`
    - `emerge --config =dev-db/mysql-8.0.31-r1`
- ***References***
    - Problem 1
      ```
       * You don't appear to have a server package installed yet.
       * ERROR: mysql failed to start
      ```
    - Problem 2
      ```
       * You don't appear to have the mysql database installed yet.
       *  * Please run `emerge --config =dev-db/mysql-8.0.31-r1` to have this done...
       *  * ERROR: mysql failed to start
      ```
    - https://forums.gentoo.org/viewtopic-t-1040120-start-0.html
- ---
- #### Solve a problem about MySQL in Gentoo Linux
    - `GRANT ALL PRIVILEGES ON owncloud.* TO 'yaoniplan'@'localhost';`
- ***References***
    - Problem
      ```
      ERROR 1064 (42000): You have an error 
      in your SQL syntax; check the manual 
      that corresponds to your MySQL server 
      version for the right syntax to use near 
      'IDENTIFIED BY 'secure1t'' at line 1
      ```
    - https://stackoverflow.com/questions/52372165/mysql-error-1064-42000-you-have-an-error-in-your-sql-syntax/71326517#71326517
- ---
- #### Print unique lines only
    - `sort data.txt | uniq -u`
- ***Notes***
    - `-u` # Unique
- ***References***
    - `man uniq`
    - ![2023-02-06_19:18:53.png](../assets/2023-02-06_19:18:53.png)
    - https://mayadevbe.me/posts/overthewire/bandit/level18/
    - https://stackoverflow.com/questions/12782827/how-to-find-the-particular-text-stored-in-the-file-data-txt-and-it-occurs-only/31407466#31407466
    - https://overthewire.org/wargames/bandit/bandit9.html
- ---
- #### Get the human-readalbe strings
    - `strings ./data.txt | grep -E "=+"`
- ***Notes***
    - `strings` # The same as `cat`, but printable
    - `-E` # Extended regular expressions
- ***References***
    - `man grep`
    - `man strings`
    - ![2023-02-06_19:49:20.png](../assets/2023-02-06_19:49:20.png)
    - https://medium.com/@theGirlWhoEncrypts/overthewire-bandit-level-9-level-10-5cf4b38b5bad
    - https://overthewire.org/wargames/bandit/bandit10.html
- ---
- #### Use base64 to decode
    - `echo "b3ViV1lmMmtCcQ==" | base64 -d`
- ***Notes***
    - `|` # Redirect the output
    - `-d` # Decode
    - Because to pass the Natas8 level of overthewire.org.
- ***References***
    - `man base64`
    - ![2023-02-06_20:06:11.png](../assets/2023-02-06_20:06:11.png)
    - https://mayadevbe.me/posts/overthewire/bandit/level11/
    - https://overthewire.org/wargames/bandit/bandit11.html
- ---
- #### Set the EDITOR variable in profile in Gentoo Linux
    - `eselect editor list`
    - `eselect editor set 2`
- ***Notes***
    - `2` # The second option is "[2]   vi"
    - `. /etc/profile` # Update the variable
    - For `crontab -e`
- ---
- #### Replace the tree command with built-in commands
    - `find . | sort | sed "s;[^/]*/;|____;g" | sed "s;____|; |;g"`
- ***Notes***
    - `.` # Under the current directory
    - `;` # The delimiter (e.g. /)
- ***References***
    - Output
      ```
      .
      |____.bash_history
      |____.bash_logout
      |____.bash_profile
      |____.bashrc
      |____.config
      | |____procps
      |____.lesshst
      |____.ssh
      | |____known_hosts
      | |____known_hosts.old
      |____.viminfo
      ```
    - ![2023-02-05_16:15:25.png](../assets/2023-02-05_16:15:25.png)
    - https://stackoverflow.com/questions/23952984/tree-functionality-using-sed-and-find-command/23953129#23953129
- ---
- #### Back up the full system
    - `vim /root/full-backup/full-backup.sh`
      ```
      BEFORE=$(df -h)
      STARTED=$(date)
      DATE=`date "+%Y-%m-%d"`
      
      DEST="/mnt/backup/$DATE"
      
      rsync --archive --acls --xattrs --delete --progress --verbose --exclude-from=exclude.txt --link-dest=/mnt/backup/last --mkpath / $DEST
      
      ln --symbolic --force --no-dereference $DATE /mnt/backup/last
      
      echo "Started at:   " $STARTED
      echo "Current time: " $(date)
      
      echo "Before:
      
      $BEFORE
      
      Now:
      "
      
      df -h
      ```
    - `vim /root/full-backup/exclude.txt`
      ```
      /dev/*
      /proc/*
      /sys/*
      /run/*
      /var/db/repos/gentoo
      /var/db/repos/guru
      /tmp/*
      /var/tmp
      /lost+found
      /mnt/*
      /home/heting/.npm
      /home/heting/.cache
      /home/heting/go/pkg/mod/cache
      ```
- ***Notes***
    - `heting` # Replace it with your user name
    - Restore
        - `rsync --archive --acls --xattrs --progress --verbose . /mnt`
- ***References***
    - ![2023-02-05_11:09:49.png](../assets/2023-02-05_11:09:49.png)
    - https://wiki.gentoo.org/wiki/Rsync#Backuping
- ---
- #### Generate random string in Linux
    - `openssl rand -base64 22`
- ***Notes***
    - `rand` # Random
- ***References***
    - `man openssl`
    - https://linuxhint.com/generate-random-string-bash/
- ---
- #### Use top command in Linux
    - `m` # Memory
    - `t` # Task
    - `1` # CPU
    - `c` # Full path
    - `h` # Help
    - `q` # Quit
- ***Notes***
    - `top -n 1` # The same as `top` then press `q`
        - `-n` # Number
- ***References***
    - ![2023-02-05_19:55:32.gif](../assets/2023-02-05_19:55:32.gif)
    - https://askubuntu.com/questions/484510/how-to-run-top-command-1-time-and-exit/484515#484515
    - https://devhints.io/top
- ---
- #### Remove the "Permission denied" message
    - `find / -type f -user bandit7 -group bandit6 -size 33c 2>/dev/null`
- ***Notes***
    - `-user` # Own by user
        - `bandit7` # A user
    - `-group` # Belong to group
        - `bandit6` # A group
    - `2>` # Redirect stderr
    - `/dev/null` # Null
- ***References***
    - `man find`
    - ![2023-02-05_20:53:19.gif](../assets/2023-02-05_20:53:19.gif)
    - https://askubuntu.com/questions/350208/what-does-2-dev-null-mean/350216#350216
    - https://medium.com/@theGirlWhoEncrypts/overthewire-bandit-level-6-level-7-e1930ac68a54
    - https://overthewire.org/wargames/bandit/bandit7.html
- ---
- #### Print the first n lines with the head command
    - `head -1 ./.file2`
- ***Notes***
    - `-1` # Replace the number with others
- ***References***
    - `man head`
    - ![2023-02-04_22:33:46.png](../assets/2023-02-04_22:33:46.png)
    - https://stackoverflow.com/questions/6114119/how-do-i-read-the-first-line-of-a-file-using-cat/6114132#6114132
- ---
- #### Empty file in Linux
    - `cat /dev/null > ~/.local/bin/test.sh`
- ***Notes***
    - `~/.local/bin/test.sh` # Replace it with your target file
- ***References***
    - https://www.tecmint.com/empty-delete-file-content-linux/
- ---
- #### Search for specific files with the find command
    - `find . -type f -size 1033c ! -executable`
- ***Notes***
    - `f` # File
    - `c` # Bytes
- ***References***
    - `man find`
    - ![2023-02-05_20:11:35.png](../assets/2023-02-05_20:11:35.png)
    - https://askubuntu.com/questions/1108882/find-a-file-based-on-specifications/1432795#1432795
    - https://overthewire.org/wargames/bandit/bandit6.html
- ---
- #### The abbreviation of Secure File Transfer Program is sftp
- ***References***
    - `man sftp`
    - https://en.wikipedia.org/wiki/Secure_file_transfer_program
- ---
- #### Use rsync to copy file from one server to another
    - `rsync -av test.md yaoniplan@192.168.10.106:/home/yaoniplan/`
- ***Notes***
    - `-a` # --archive
    - `-v` # --verbose
- ***References***
    - `man rsync`
    - Add a demo.gif here
    - https://www.golinuxcloud.com/commands-copy-file-from-one-server-to-another-linux-unix/
- ---
- #### Use sftp to copy remote file to here
    - `sftp root@192.168.10.100:/root/test.md .`
- ***Notes***
    - `root` # Replace it with your user
    - `192.168.10.100` # Replace it with your remote ip address
    - `/root/test.md` # Replace it with your remote file
    - `.` # Replace it with a directory that you want to put
- ***References***
    - `man sftp`
    - ![2023-02-11_12:39:35.gif](../assets/2023-02-11_12:39:35.gif)
    - https://superuser.com/questions/134901/whats-the-difference-between-scp-and-sftp/1028877#1028877
- ---
- #### The abbreviation of Extensible Firmware Interface is EFI
- ---
- #### Check who and what in Unix-like
    - `w`
- ***Notes***
    - `w` # Who and what
- ***References***
    - `man w`
    - Output
      ```
      10:37AM  up 1 day, 15:59, 1 user, load averages: 0.30, 0.18, 0.11
      USER       TTY      FROM             LOGIN@  IDLE WHAT
      root       pts/0    192.168.10.105   8:38AM     - w
      ```
- ---

- #### Disable the swap files in Vim for a specific directory
    - `autocmd BufNewFile,BufRead ~/ftp_mount/* set dir=/some/path`
- ***Notes***
    - Haven't tested it yet as I'm not sure I really need this
- ***References***
    - https://stackoverflow.com/questions/25592780/special-path-of-vim-swap-files-for-files-in-certain-location
- ---
- #### Read input in Shell script
    - `$1` # The first argument
    - `$0` # The name of the script
    - `$@` # A list of all arguments
- ***References***
    - https://www.redhat.com/sysadmin/process-script-inputs
- ---
- #### Use SSH
    - `ssh bandit0@bandit.labs.overthewire.org -p 2220`
- ***Notes***
    - `bandit0` # Username
        - `whoami` # Check user name
    - `bandit.labs.overthewire.org` # Host
        - `ip address` # Check address
    - `-p` # Port
    - `2220` # Port
    - OpenRC in Gentoo Linux
        - `doas rc-update add sshd default` # Add *sshd* to the *default* runlevel
        - `doas rc-service sshd status` # Get *sshd* service status
    - If you use USB to share WIFI with your phone, your connection may not respond, the solution is to connect with a network cable
- ***References***
    - `man ssh`
    - https://wiki.gentoo.org/wiki/SSH
    - https://overthewire.org/wargames/bandit/bandit0.html
- ---
- #### Open a file whose name is hyphen
    - `cat ./-`
- ***Notes***
    - `./` # The full location
    - `-` # The file
- ***References***
    - https://stackoverflow.com/questions/42187323/how-to-open-a-dashed-filename-using-terminal/42187582#42187582
- ---
- #### Check system running time in Unix-like
    - `uptime`
- ***Notes***
    - `10:30AM  up 1 day, 15:52, 1 user, load averages: 0.07, 0.10, 0.08` # Output
        - `1 day, 15:52` # The running time
- ***References***
    - `man uptime`
- ---
- #### Type properly
    - Sit straight with your back straight
    - Aim for accuracy rather than speed
    - Type every day
    - not look at the keys while typing
- ***References***
    - https://www.perplexity.ai/?s=u&uuid=da362756-fc63-4229-951d-c069779a15d1
    - https://www.perplexity.ai/?s=u&uuid=0e72c679-3244-4e3a-90a4-d1e2084d0d84
- ---
- #### The Linux server can do
    - Web server
    - Mail server
    - Personal cloud storage
    - Database
    - Remote
- ***References***
    - https://medium.com/@vinaymodepalli/cool-things-to-do-with-a-linux-server-b7035635b31d
- #### Send character to clipboard in Linux
    - ``echo "`date +%F_%T`.gif" | xclip -selection clipboard``
- ***References***
    - ![2023-01-30_17:06:06.gif](../assets/2023-01-30_17:06:06.gif)
    - https://stackoverflow.com/questions/5130968/how-can-i-copy-the-output-of-a-command-directly-into-my-clipboard/5130969#5130969
- #### Semicolon do at shell script
    - Put two or more commands on the same line
    - Execute commands in order
    - `sleep 3s; notifi-send "test"`
        - Execute the *sleep* command first and then execute the *notify-send* command
- ***References***
    - ![2023-01-30_15:40:19.gif](../assets/2023-01-30_15:40:19.gif)
    - https://stackoverflow.com/questions/25669540/what-is-the-difference-between-double-ampersand-and-semicolon-in-linux
    - https://unix.stackexchange.com/questions/159513/what-are-the-shells-control-and-redirection-operators/159514#159514
    - https://www.javatpoint.com/linux-semicolon
- ---
- #### Split a specified buffer in Vim
    - `:vs #5`
- ***Notes***
    - `vs` # Vertically split
    - `:buffers` # Show all buffers
- ***References***
    - `:help :buffers`
    - `:help :vs`
    - ![2023-01-30_16:43:42.gif](../assets/2023-01-30_16:43:42.gif)
    - https://vi.stackexchange.com/questions/8122/how-to-open-a-file-from-active-buffer-into-a-split-window
    - https://superuser.com/questions/134176/how-to-split-existing-buffer-vertically-in-vim#:~:text=To%20put%20an%20existing%20buffer,of%20the%20next%20split%20command.
    - https://vi.stackexchange.com/questions/76/can-i-open-a-new-vim-split-from-an-existing-buffer/21081#21081
- ---
- #### Execute two commands at the same time
    - `paplay /usr/share/sound/alsa/Noise.wav & notify-send "test" &`
- ***Notes***
    - `&` # Execute in the background
- ***References***
    - ![2023-01-30_15:58:24.gif](../assets/2023-01-30_15:58:24.gif)
    - https://www.quora.com/How-do-you-run-two-commands-simultaneously-in-a-terminal
- ---
- #### View processes in the background
    - `jobs` # Display status of jobs
- ***Notes***
    - `kill %3` # Kill process 3
- ***References***
    - ![2023-01-30_16:14:22.gif](../assets/2023-01-30_16:14:22.gif)
    - `help jobs`
    - https://www.cyberciti.biz/faq/find-out-what-processes-are-running-in-the-background-on-linux/
- ---
- #### Solve the swap file in Vim
    - `R` # Recovery
    - `:w` # Write
    - `:e` # Edit
    - `D` # Delete
- ***References***
    - Add a demo.gif here
    - https://superuser.com/questions/480367/whats-the-easiest-way-to-delete-vim-swapfiles-ive-already-recovered-from/1563076#1563076
- ---
- #### Run Linux commands in the background
    - Press `Ctrl-z` and then type `bg`
- ***References***
    - <!-- Add a demo.png here -->
- #### Write an infinite loop in shell script
    - `vim ~/.local/bin/timerOfTomato.sh`
      ```
      #! /bin/sh
    
      soundNotification() {
      paplay /usr/share/sounds/alsa/Noise.wav
      }
      while true
      do
          soundNotification
          sleep 900
          soundNotification
          sleep 1200
      done
      ```
- ***Notes***
    - `true` # Improve the readability
- ***References***
    - https://www.cyberciti.biz/faq/bash-infinite-loop/
- ---
- #### Use wget
    - `wget -r -np -nH --cut-dirs=2 -R "index.html*" https://data.gpo.zugaina.org/src_prepare-overlay/x11-terms/xst/`
- ***Notes***
    - `-r` # Recursive
    - `-np` # No-parent
    - `-nH` # No-host-directories (e.g. *data.gpo.zugaina.org/*)
    - `--cut-dirs=2`
        - `--cut-dirs` # Cut-directories
        - `2` # Two directorys (e.g. *src_prepare-overlay/*, *x11-terms/*)
    - `-R` # Reject
    - `index.html*` # Files (e.g. *index.html*, *index.html?C=N;O=D*)
    -  `-e robots=off` # May need it
- ***References***
    - ![2023-01-28_21:59:03.gif](../assets/2023-01-28_21:59:03.gif)
    - https://stackoverflow.com/questions/273743/using-wget-to-recursively-fetch-a-directory-with-arbitrary-files-in-it/273776#273776
    - https://stackoverflow.com/questions/23446635/how-to-download-http-directory-with-all-files-and-sub-directories-as-they-appear/26269730#26269730
- ---
- #### Resolve a problem in Gentoo Linux
    - `doas vim /etc/conf.d/display-manager`
      ```
      CHECKVT=7
      DISPLAYMANAGER="sddm"
      ```
- ***Notes***
    - `DISPLAYMANAGER="sddm"` # Replace the *sddm* with your display manager
- ***References***
    - Problem
      ```
      * IMPORTANT: config file '/etc/conf.d/display-manager' needs updating.
      ```
- ---
- #### Set the background of feh to black
    - `vim ~/.config/feh/themes`
      ```
      feh --image-bg black
      ```
- ***Notes***
    - `mkdir ~/.config/feh/` # Make the directory If you don't have it
- ***References***
    - ![2023-01-27_18:14:43.gif](../assets/2023-01-27_18:14:43.gif)
    - https://unix.stackexchange.com/questions/426526/how-to-permanently-set-default-color-of-fehs-background-to-black/673439#673439
- ---
- #### Use notify-send
    - `notify-send "$(cal)"`
        - `cal` # A shell command about calendar
- ***Notes***
    - Install notify-send
        - `doas emerge -aq x11-libs/libnotify`
            - `doas emerge -aq x11-misc/dunst` # Try it if *libnotify* doesn't work
    - Solve the problem
      ```
      Error spawning command line “dbus-launch --autolaunch=450faa763c2a5a8029678965639ae3a2 --binary-syntax --close-stderr”: Child process exited with code 1
      ```
        - `export $(dbus-launch)` # Temporary
        - `vim ~/.bashrc` # Permanently
          ```
          export $(dbus-launch) # Make notify-send work
          ```
- ***References***
    - `man cal`
    - https://specifications.freedesktop.org/icon-naming-spec/latest/ar01s04.html
    - https://unix.stackexchange.com/questions/701206/how-do-i-notify-send-a-long-command
    - https://stackoverflow.com/questions/20285697/error-in-spawning-a-dbus-launch-what-is-that
- ---

- #### Return to the last used tab in Chromium
    - Press `Ctrl-Shift-a` and then press `Enter`
- ***References***
    - https://superuser.com/questions/402095/switching-back-to-last-used-tab-on-chrome/1679002#1679002
- ---
- #### Enclose the shell command in double quotes
    - `st -e tmux -c "vim -c VimwikiIndex"`
- ***Notes***
    - If there are no spaces
      ```
      > st -e tmux -c vim -c VimwikiIndex
      child exited with status 127
      ```
    - Warning: the tmux doesn't work
- ***References***
    - `man tmux`
    - ![2023-01-26_16:57:24.gif](../assets/2023-01-26_16:57:24.gif)
    - ![2023-01-26_21-39.png](../assets/2023-01-26_21-39.png)
- ---
- #### Remap keys in Vim
    - `vim ~/.vimrc`
      ```
      nnoremap <C-H> <C-W>h
      nnoremap <C-J> <C-W>j
      nnoremap <C-K> <C-W>k
      nnoremap <C-L> <C-W>l
      ```
- ***Notes***
    - `C-H` # Use `Ctrl-h` to move cursor to the left panel
    - `<C-W>h` # Use `<Ctrl-w>h` to move cursor to the left panel too
- ***References***
    - https://superuser.com/questions/280500/how-does-one-switch-between-windows-on-vim
- ---
- #### Modify a specify commit message in Git
    - `dotfiles rebase --interactive '019ae22^'` # Replace `pick` with `edit` and then `:wq`
    - `dotfiles commit --amend` # Amend your commit message
    - `dotfiles rebase --continue`
    - `dotfiles push --force`
- ***Notes***
    - Disadvantage
        - Modify date
- ***References***
    <!-- Add a demo.gif here -->
    - https://stackoverflow.com/questions/1186535/how-do-i-modify-a-specific-commit/1186549#1186549
- #### The abbreviation of RXVT is "our extended virtual terminal"
- ***References***
    - https://en.wikipedia.org/wiki/Rxvt
- ---
- > Don't overthink things and just keep writing stuff down. #idea
- ***References***
    - https://github.com/lervag/wiki.vim/issues/101#issuecomment-718284921
    - https://github.com/lervag/wiki.vim/blob/master/doc/wiki.txt#L178
- ---
- ---
- #### Solve the problem about image path in GitHub
    - Remove `..` and then `git push`
- ***References***
    - ![2023-01-24_15:08:22.gif](../assets/2023-01-24_15:08:22.gif)
    - ![2023-01-24_11-01.png](../assets/2023-01-24_11-01.png)
    - https://github.com/orgs/community/discussions/23413#discussioncomment-3240273
- ---
- #### I think tools for handling gifs are ImageMagic, GIMP, and others. #idea
    - I am trying to use ImageMagic and Byzanz
    - GIMP needs to deal with many layers (e.g. a 2.8m gif has about 700 layers)
        - https://graphicdesign.stackexchange.com/questions/102711/editing-gifs-in-gimp
        - https://itsfoss.com/make-gif-in-gimp/
- ---
- #### Replace VimWiki with [wiki.vim](https://github.com/lervag/wiki.vim/) in the future #idea
- ---
- #### Use urxvt (rxvt-unicode)
    - `Font` `Scrollbar` `Color theme` `Font size`
- ***Notes***
    - `vim ~/.Xresources`
      ```
      >=x11-terms/rxvt-unicode-9.30 perl xft
      ```
        - `perl` # Support perl script
        - `xft` # Support for XFT font renderer
    - `xrdb ~/.Xresources` # Reload the configuration
    - `urxvt -fn "xft:Ubuntu Mono:style=regular"` # Test a font
- ***References***
    - https://wiki.gentoo.org/wiki/X_resources
    - https://www.reddit.com/r/Gentoo/comments/m8dnyi/help_with_urxvt_font_setup/
    - https://wiki.gentoo.org/wiki/Rxvt-unicode
- ---
- #### Insert date and time in Vim
    - `<C-r>=strftime('%F')` # After the cursor (Output: 2023-02-24) in insert mode
    - `:r!date` # Below the current line (Output: Fri Feb 24 04:21:34 PM CST 2023)
- ***Notes***
    - `<C-r>` # Control key and r key
    - `:r!`
        - `r` # Read
        - `!` # Execute external commands (e.g. *date*, *templateForVimWiki.sh*)
- ***References***
    - `:help :r!`
    - https://unix.stackexchange.com/questions/8101/how-to-insert-the-result-of-a-command-into-the-text-in-vim
- ---
- #### Replace context of the current line in Vim
    - `:s/italic/boldAndItalic/g`
- ***Notes***
    - `s` # Substitute
    - `g` # Global
    - `Shift-v` # Select some line
        - `:` # Press it
        - `s/italic/boldAndItalic/g` # Type it 
- ***References***
    - `:help :substitute`
    - https://stackoverflow.com/questions/46181488/how-to-search-and-replace-in-current-line-only

- ---
- #### Record a repeating action in Vim
    - `qd` # Start recording as *d*
    - `q` # Stop recording
    - `@d` # Playback recording *d*
- ***References***
    - https://vim.fandom.com/wiki/Recording_keys_for_repeated_jobs#:~:text=To%20start%20recording%2C%20press%20q,keystrokes%20to%20the%20specified%20register.
- #### Use Bash
    - `Ctrl-r` # Reverse search history command
        - `vim -c` # Type it in terminal, it may display `vim -c VimwikiIndex`
    - `Ctrl-p` # The previous command
    - `Alt-b` or `Ctrl-Left` # Move the cursor back one word
    - `Alt-c` or `Ctrl-Right` # Move the cursor forward one word
    - `Ctrl-h` # Backspace key
    - `Ctrl-d` # Delete key
        - `d` # Delete
    - `Ctrl-u` # Delete left of the cursor
    - `Ctrl-k` # Delete right of the cursor
    - `bind -lp` # Show all shortcuts
    - `Ctrl-j` # Enter key
    - `Ctrl-_` # Undo
- ***References***
    - `rofi -show keys`
    - https://stackoverflow.com/questions/4009412/how-to-use-arguments-from-previous-command
    - https://www.redhat.com/sysadmin/shortcuts-command-line-navigation
- ---
- #### Use Rofi theme  
    ```
    git clone https://github.com/newmanls/rofi-themes-collection
    cd rofi-themes-collection
    mkdir -p ~/.local/share/rofi/themes/
    cp ./* ~/.local/share/rofi/themes/
    ```
- ***Notes***
    - `rofi -show drun` # Show drun mode
    - `Rofi Theme Selector` # Type it in Rofi search bar
        - `Enter` # Preview
        - `Esc` # Cancel
        - `Alt-a` # Accept
        - `Ctrl-Tab` # Toggle mode
    - Beautiful  
        - |theme|theme|theme|theme|
          |---|---|---|---|
          |spotlight-dark|squared-nord|rounded-blue-dark|dmenu by Qball|
          |nord-TwoLines|nord-oneline|sidebar-v2 by Qball|
    - features
        - Font: big
        - Color: dark
        - Icon (optional)
- ***References***
    - https://github.com/newmanls/rofi-themes-collection
- ---
- #### Use gawk
    - `gawk '/use/ && /bash/; BEGIN{IGNORECASE=1}' test/diary/*`
    - `gawk 'BEGIN{IGNORECASE=1} /use/ && /bash/' test/diary/*`
    - `Width=$(xwininfo --root | gawk '/Width/ { print $2 }')`
- ***Notes***
    - `&&` # And
    - `BEGIN{IGNORECASE=1}` # Ignore case
    - `$2` # The second column
- ***References***
    - https://unix.stackexchange.com/questions/533848/and-operation-and-case-insensitivity-in-awk-regular-expression
- ---
- #### Use GIF recorder named Byzanz  
    ```
    byzanz-record --duration=10 \
    --x=0 --y=0 --width=1366 --height=768 \
    ~/vimwiki/assets/`date +%F_%T`.gif
    ```
- ***Notes***
    - `doas emerge -aq media-gfx/byzanz` # Search `ebuild repository` in the repository
- ***References***
    - https://github.com/LinuxTOY/linuxtoy.org/blob/master/content/byzanz.md
- ---
- #### Rename extension of multiple files in Linux
    - `find . -name '*.txt' -exec rename txt wiki {} \;`
- ***Notes***
    - `-exec` # Execute
    - `find . -name "*.md" -exec rename -a _ - {} \;` # Rename underscores (`_`) to hyphens (`-`)
        - `-a` # All
- ***References***
    - `man rename`
    - ![2023-01-22_19-50.png](../assets/2023-01-22_19-50.png)
    - https://unix.stackexchange.com/questions/19654/how-do-i-change-the-extension-of-multiple-files
    - https://askubuntu.com/questions/35922/how-do-i-change-extension-of-multiple-files-recursively-from-the-command-line
- ---
- #### Use Git
    - `git restore .config/i3/config` # Discard changes of the file
- ---
- #### Display `$PATH`
    - `echo $PATH`
- ***References***
    - https://stackoverflow.com/questions/14617041/how-can-i-see-the-current-value-of-my-path-variable-on-os-x
- ---
- #### Add a directory to `$PATH` permanently
    - `vim ~/.bash_profile`
      ```sh
      # Set PATH to execute scripts anywhere if it exists
      if [ -d "$HOME/.local/bin/" ] ; then
          export PATH="$PATH:$HOME/.local/bin/"
      fi
      ```
    - Make it work
        - Close your terminal, then open your terminal
        - `echo $PATH` # Check it
- #### ***Notes***
    - Advantages
        - Execute scripts anywhere
    - `$HOME/.local/bin/` # Replace it with your directory
    - `chmod u+x ~/.local/bin/captureFullScreen2GIF.sh` # Make the command work
        - `u` # User
        - `x` # Execute
    - `captureFullScreen2GIF.sh` # Execute it anywhere, and works in the dmenu too
    - `PATH=$PATH:$HOME/.local/bin/` # Add the directory to `$PATH` temporarily
- ***References***
    - https://serverfault.com/questions/139451/where-is-a-good-permanent-place-to-install-custom-bash-scripts
    - https://www.reddit.com/r/archlinux/comments/j35cfc/comment/g79rysk/?utm_source=share&utm_medium=web2x&context=3
- ---
- #### Put scripts to directory
    - `$HOME/.local/bin/` # A single user
    - `/usr/local/bin/` # All users
- ***References***
    - https://askubuntu.com/questions/465109/where-should-i-put-my-script-so-that-i-can-run-it-by-a-direct-command
- ---
- #### Show line numbers permanently in Vim
    - `vim ~/.vimrc`
      ```
      " Show absolute line numbers
      set number
      ```
- ***Notes***
    - `set relativenumber` # Show relative line numbers
    - `set number relativenumber` # Show absolute and relative line numbers
    - After using it for a while, It can be distracting.
        - Probably because I'm using a small screen.
- ***References***
    - https://phoenixnap.com/kb/vim-show-line-numbers#
- ---
- #### Use Vim
    - `.` # Repeat last change
    - `vU` # Uppercase
        - `v` # Visual mode
    - `s` # The same as `x` and then `i`
    - `L` # Bottom of screen
    - `H` # Top of screen
    - `M` # Middle of screen
    - `f` # Find a character within a line
    - `W` # The same as `w`, but ignore symbol (punctuation)
    - `I` # Insert text before the first non-blank in the line
    - `A` # Append text at the end of the line
    - `q:` # Command line mode
        - `/use vim` # The same as reverse search history command like Bash
    -  `/\vtext|vim` Search for text with multiple keywords
        - `\v` # Very magic
    - `:set ignorecase` # Search for text ignoring case
        - `/thank\c` # Search for "thank" ignoring case
    - `:vs` # Vertically split (real-time synchronization)
    - `caw` # Change a word
        - `c` # Change
    - `:e#` or `C-6` # Switch between two files 
    - `C-o` # Return to the previous cursor position
    - `C-p` # Previous keyword completion (in insert mode)
    - `C-n` # Next keyword completion
    - `C-[` # Esc key
    - `gM` # Move cursor to the middle of a line
    - `r` # Replace
    - Mark
        - `ma` # Mark as "a"
        - <code>`a</code> # Jump to mark "a"
    - `Ctrl-w down/j` # Move the cursor from the up pane to the down pane
- ***Notes***
    - `:e` # Edit
        - Replace `js` with `javascript` in Markdown code block
    - `#` # Alternate buffer
        - `:ls` or `:buffers` # Check buffer
        - `:b 7` # Move to buffer 7
- ***References***
    - `:help /\v`
    - `:help .`
    - https://stackoverflow.com/questions/2946051/changing-case-in-vim/2946054#2946054
    - https://m4xshen.me/posts/vim-basic-commands/
    - https://unix.stackexchange.com/questions/114264/is-there-a-command-reverse-search-in-vim
    -  https://stackoverflow.com/questions/704434/is-there-any-way-to-highlight-multiple-searches-in-gvim
    - https://docs.oracle.com/cd/E19620-01/805-3902/6j3n40vuh/index.html#:~:text=Searches%20normally%20are%20case%2Dsensitive,stop%20at%20its%20first%20occurrence.
    - https://medium.com/@Sohjiro/introduction-to-vim-buffers-dd966ff518d
    - https://stackoverflow.com/questions/19971023/how-to-go-back-to-previous-opened-file-in-vim
    - https://vi.stackexchange.com/questions/2462/how-do-i-move-the-cursor-to-the-center-of-current-line
- ---    
- #### Rcover tmux when computer is turned on
    - `vim ~/.bashrc`
      ```bash
      alias mux='pgrep -vx tmux > /dev/null && \
          tmux new-session -d -s delete-me && \
          tmux run-shell ~/.tmux/plugins/tmux-resurrect/scripts/restore.sh && \
          tmux kill-session -t delete-me && \
          tmux attach-session || tmux attach-session'
      ```
- ***Notes***
    - I don't need it on January 20, 2023.
    - `vim ~/.tmux.conf`
      ```
      set -g @plugin 'tmux-plugins/tmux-resurrect'
      set -g @plugin 'tmux-plugins/tmux-continuum'
    
      # Set restore automatically by using tmux-continuum
      set -g @continuum-restore 'on'
    
      # Set start automatically by using tmux-continuum
      set -g @continuum-boot 'on'
    
      # Set the save interval to 1 minute
      set -g @continuum-save-interval '1'
      ```
    - `prefix + I` # Press it to install the plugins
    - `tmux source-file ~/.tmux.conf` # Reload the file
    - `-v` # Inverse
    - `-x` # Exact
    - `/dev/null` # Empty file
    - `&&` # And
    - `-d` # Detach
    - `-s` # Session-name
    - `run-shell` # Run shell-command
    - `-t` # Target
    - `||` # Or
- ***References***
    - `man tmux`
    - `man bash`
    - https://github.com/tmux-plugins/tmux-continuum/blob/master/docs/faq.md
    - https://github.com/tmux-plugins/tmux-continuum/blob/master/docs/automatic_start.md
    - https://github.com/tmux-plugins/tmux-continuum
    - https://tech.serhatteker.com/post/2019-11/restore-tmux-after-reboot/
- ---
- #### Use Cron
    - `crontab -e`
      ```
      * * * * /bin/bash /home/yaoniplan/.tmux/plugins/tmux-resurrect/scripts/save.sh
      @reboot /usr/bin/touch /home/yaoniplan/testTwo.md
      30 16 * * * /bin/bash $HOME/.local/bin/autoGitPush.sh
      ```
- ***Notes***
    - `* * * * *` # Every minute when the computer is running
    - `/bin/bash` # Path of command
    - `/home/yaoniplan/.tmux/plugins/tmux-resurrect/scripts/save.sh` # Argument of command
    - `@reboot` # Every time when the computer is turned on
    - `30 16 * * *` # 16:30 every day
- ***References***
    - [linux - Execute a shell script everyday at specific time - Stack Overflow](https://stackoverflow.com/questions/34753831/execute-a-shell-script-everyday-at-specific-time)
    - https://github.com/tmux-plugins/tmux-continuum/issues/99#issuecomment-992457058
- --- 
- #### Save file automatically in Vim without plugins
    - `vim ~/.vimrc`
      ```
      autocmd TextChanged,TextChangedI * silent write
      ```
- ***Notes***
    - Try not to use it, accidents may happen
- ***References***
    - https://stackoverflow.com/questions/60600151/use-autosave-in-vim-using-no-plugin
- --- 
- #### Disable swap files in Vim for VimWiki
    - `vim ~/.vimrc`
      ```
      set noswapfile
      ```
- ***Notes***
    - I don't recommend it, but you can organize swap files
        - `mkdir ~/.vim/tmp/`
        - `vim ~/.vimrc`
          ```
          set directory^=$HOME/.vim/tmp//
          ```
- ***References***
    - https://vi.stackexchange.com/questions/177/what-is-the-purpose-of-swap-files#:~:text=Disabling%20swap%20files,setlocal%20swapfile%20while%20running%20Vim.
- ---
- #### Use VimWiki
    - `:VimwikiTable 4cols 6rows` # Create a table with 4 cols and 6 rows
    - `:VimwikiGenerateLinks` # Generate links of wiki pages automatically
    - `]]` # Next header
    - `vim -c VimwikiIndex` # Return index.wiki in terminal
        - `<Leader> ww` # Return index.wiki
    - `vim -c VimwikiMakeDiaryNote` # Return to today's diary (e.g. 2023-01-18.md)
        - `<Leader> w <Leader> w` # Return 2023-01-18.md
    - `Ctrl-upArrow` # The previous diary
    - `:VWS /Use VimWiki/` # Search "Use VimWiki"
        - `:VWS` # The alias of `:VimwikiSearch`
        - `:VWS /\csymbol/`
            - `\c` # Case-insensitive
        - `:lopen` # List open
        - `:lnext`
    - `=` # Add header level
    - `gll` # Increase indent of list item
    - `glh` # Decrease indent of list item
    - `gl-` # Insert hypen (`-`)
    - `Ctrl-space` # Add a check box (`[ ]`)/Add a `X`/Remove a `X`
- ***Notes***
    - Advantage: Wiki
        - `Enter` # Press it to create a wiki file
            - `../pages/Vim` # Create `~/vimwiki/pages/Vim.md` file
        - `Tab` # Next wiki link or hyper link
        - `Shift-Tab` # Previous wiki link
        - `v` # Visual
            - `e` # End
- ***References***
    - `:help VimwikiTable`
    - https://www.reddit.com/r/vim/comments/8xzpkz/you_probably_dont_need_vimwiki/
    - https://samgriesemer.com/Vimwiki#Settings
    - https://gist.github.com/ovelny/72659e841c1dbcee173eb244c8609252
    - https://vi.stackexchange.com/questions/19357/search-through-entire-vimwiki#:~:text=Vimwiki%20has%20a%20simple%20search,help%20pages%20%3Ah%20%3AVimwikiSearch%20.
    - https://github.com/vimwiki/vimwiki
- ---
- #### Replace `lsof` command with `ps` command
    - `ps aux | grep clash`
    - `kill 3828`
- ***Notes***
    - `ps` # Process
    - `a` # All
    - `u` # User
    - `x` # Use with the `a` option
    - `3828` # PID
        - `PID` # Process ID
- ***References***
    - `man ps`
    - https://askubuntu.com/questions/910922/what-does-the-aux-option-of-ps-stand-for
    - https://www.linuxfoundation.org/blog/blog/classic-sysadmin-how-to-kill-a-process-from-the-command-line
- ---
- #### Replace tab characters with spaces in Vim
    - `vim ~/.vimrc`
      ```vim
      " Use spaces for indenting
      set expandtab " Replace tab characters with spaces
      set tabstop=4 " Insert 4 spaces when expandtab is enabled
      set shiftwidth=4 " Replace indentation with spaces
      ```
- ***References***
    - https://codingshower.com/vim-set-tab-to-n-spaces/
- ---
- #### The punctuation of "at sign" is "@".
- ***References***
    - https://en.wikipedia.org/wiki/At_sign
- ---
- #### Use tmux plugins named tmux-tilish
	- `Alt-Enter` # New a pane
	- `Alt-h/j/k/l` # Move the cursor to the left/down/up/right pane
	- `Alt-Shift-q` # Quit the pane
	- `Alt-z` # Zoom in
    - `Alt-Shift-h/j/k/l` # Move pane
    - `Alt-Shift-1/2/3` # Move pane or window to window 1/2/3
    - `Alt-s` # Split like -
        - `Alt-v` # |
- ***Notes***
	- Install the plugins
		- `vim ~/.tmux.conf`
		  ```vim
		  # Lists of plugins
		  set -g @plugin 'jabirali/tmux-tilish'
		  
		  # Set default layout by using tmux-tilish plugin
		  set -g @tilish-default 'main-vertical'
		  ```
    - Integrate Vim and tmux
        - `vim ~/.tmux.conf`
          ```tmux
          set -g @plugins 'sunaku/tmux-navigate'
          
          " Use navigate with tilish together
          set -g @tilish-navigate 'on'
          ```
            - `prefix I` # Install plugins of tmux
        - `vim ~/.vimrc`
          ```vim
          Plug 'sunaku/tmux-navigate'
          ```
            - `:source ~/.vimrc`
            - `PlugInstall` # Install plugins of Vim
        - `Alt-h/j/k/l` # Move cursor in Vim to the left/down/up/right pane of tmux
            - `:vs` # A pane of Vim
            - `Alt-Enter` # A pane of tmux
- ***References***
    - https://github.com/sunaku/tmux-navigate
	- https://github.com/jabirali/tmux-tilish
- ---
- #### Use #Rofi theme
	  ```
	  git clone https://github.com/newmanls/rofi-themes-collection
	  cd rofi-themes-collection
	  mkdir -p ~/.local/share/rofi/themes/
	  cp ./* ~/.local/share/rofi/themes/
	  ```
	- `rofi -show drun` # Show drun mode
- ***Notes***
	- `Rofi Theme Selector` # Type it in Rofi search bar
		- `Enter` # Preview
		- `Esc` # Cancel
		- `Alt-a` # Accept
	- Beautiful
		- |theme|theme|theme|theme|
		  |---|---|---|---|
		  |spotlight-dark|squared-nord|rounded-blue-dark|dmenu by Qball|
		  |nord-TwoLines|nord-oneline|sidebar-v2 by Qball|
	- features
		- Font: big
		- Color: dark
		- Icon (optional)
- ***References***
	- [newmanls/rofi-themes-collection: Themes Collection for Rofi Launcher](https://github.com/newmanls/rofi-themes-collection)
- ---
- #### Use #Vim
	- `gM` # Move cursor to the middle of a line
	- `r` # Replace
	- Mark
		- `m + a` # Mark as a
		- <code>` + a</code> # Jump to mark a
- ***Notes***
	- Try it https://github.com/hackjutsu/vim-cheatsheet
- ***References***
	- ![2023-01-16_11-50.png](../assets/2023-01-16_11-50_1673841050235_0.png)
	- [How do I move the cursor to the center of current line? - Vi and Vim Stack Exchange](https://vi.stackexchange.com/questions/2462/how-do-i-move-the-cursor-to-the-center-of-current-line)
- ---
- #### Set dark theme in #Linux
	- `vim ~/.config/gtk-3.0/settings.ini`
	  ```
	  [Settings]
	  gtk-application-prefer-dark-theme=1
	  ```
- ***Notes***
	- Chromium
		- `about:settings` # Type it in search bar
		- `Ctrl-f` # Press it and type `appearance`
		- `Use GTK` # Click it
	- `doas reboot` # Make it work
- References
	- ![2023-01-16_11-23.png](../assets/2023-01-16_11-23_1673839448253_0.png)
	- https://unix.stackexchange.com/questions/63389/how-can-i-use-adwaita-dark-for-all-applications-in-gnome-3
	- https://forums.gentoo.org/viewtopic-t-1079650-start-0.html
- ---
- #### Move all images from multiple subfolders into one directory
	- `find . -name '*.png' -exec mv {} ../testone/ \;`
- ***Notes***
	- `*.png` # Files with PNG extension
		- `png` # Replace it with other extensions (e.g. *jpg*, *gif*, etc.)
- ***References***
	- ![2023-01-15_15-55.png](../assets/2023-01-15_15-55_1673769346837_0.png)
	- https://unix.stackexchange.com/questions/67503/move-all-files-with-a-certain-extension-from-multiple-subdirectories-into-one-di
- ---
- #### Install a plugins manager for Vim
    - Type it in terminal
	  ```
	  curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
	  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
	  ```
- ***Notes***
	- `-f` # Fail
	- `-L` # Location
	- `-o` # Output
	- `backslash` # A new line
		- Write the rest of command on the next line
- ***References***
	- `man curl`
	- https://github.com/junegunn/vim-plug/wiki/tutorial
- ---
- #### Use Vim plugins manager
	- `vim ~/.vimrc` # A small configuration
	  ```vim
	  call plug#begin()
      Plug 'vimwiki/vimwiki'
      Plug 'sunaku/tmux-navigate'
      Plug 'dbridges/vim-markdown-runner'
	  call plug#end()
	  ```
	- `:source ~/.vimrc` # Restart Vim
- ***Notes***
	- Install plugins
		- `:source ~/.vimrc`
		- `:PlugInstall`
	- Remove plugins
		- Comment out
		- `:source ~/.vimrc`
		- `:PlugClean`
	- Update plugins
		- `:PlugUpdate`
    - Upgrade vim-plug itselt
        - `:PlugUpgrade`
- ***References***
    - https://github.com/junegunn/vim-plug
	- https://github.com/junegunn/vim-plug/wiki/tutorial
- ---
- #### Use Bash
	- `Ctrl-p` # The previous command
	- `Ctrl-Left` or Alt-b or Esc then b # Move the cursor back one word
	- `Ctrl-Right` or Alt-c or Esc then f # Move the cursor forward one word
	- `Ctrl-h` # Backspace
	- `Ctrl-d` # Delete
		- `d` # Delete
	- `Ctrl-u` # Delete left of the cursor
	- `Ctrl-k` # Delete right of the cursor
	- `bind -lp` # Show all shortcuts
	- `Ctrl-j` # Enter
- References
	- `rofi -show keys`
	- [bash - How to use arguments from previous command? - Stack Overflow](https://stackoverflow.com/questions/4009412/how-to-use-arguments-from-previous-command)
- ---
- #### Enable Vi mode in the Linux shell
    - `set -o vi`
- ***Notes***
    - `k` # The same as `Ctrl-p` of Emacs mode
    - `/` # The same as `Ctrl-r` of Emacs mode
    - `set -o` # Show the current settings
    - `vim ~/.bashrc` # Enable by default
      ```bash
      # Enable Vi mode
      set -o vi
      ```
- ***References***
    - ChatGPT
	- https://wiki.gentoo.org/wiki/Bash
- ---
- #### Use TPM (tmux plugins manager)
	- `mkdir -p ~/.tmux/plugins/`
	- `git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm`
	- `vim ~/.tmux.conf`
	  ```
	  # Lists of plugins
	  set -g @plugin 'tmux-plugins/tpm'
	  
	  # Initialize tmux plugins manager
	  # (Put this line at the bottom)
	  run -b '~/.tmux/plugins/tpm/tpm'
	  ```
	- `tmux source ~/.tmux.conf` # Reload tmux
- ***Notes***
	- Install plugins
		- `vim ~/.tmux.conf`
		  ```
		  set -g @plugin 'tmux-plugins/yank'
		  ```
		- Press `prefix` + `I`
			- `I` # Install
	- Uninstll plugins
		- `vim ~/.tmux.conf`
		  ```
		  # set -g @plugin `tmux-plugins/yank`
		  ```
		- Press `prefix` + `Alt` + `u`
			- `u` # Uninstall
- ***References***
    - https://github.com/tmux-plugins/tpm/blob/master/docs/automatic_tpm_installation.md
	- https://wiki.gentoo.org/wiki/Tmux/plugins/tpm
- ---
- #### The #punctuation of #Caret is `^`
- ***References***
	- ![2023-01-14_14-20.png](../assets/2023-01-14_14-20_1673677274796_0.png)
	- [Caret - Wikipedia](https://en.wikipedia.org/wiki/Caret)
- ---
- Add a README to #GitHub when using a bare #Git repository
	- `mkdir ~/.github/`
	- `vim ~/.github/README.md`
- ***References***
	- ![2023-01-14_21-24.png](../assets/2023-01-14_21-24_1673702666328_0.png)
	- ![2023-01-14_21-27.png](../assets/2023-01-14_21-27_1673702854280_0.png)
	- https://stackoverflow.com/questions/62561933/how-to-add-readme-md-on-github-but-not-have-same-readme-md-in-home-directory-whi
	- https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes
- ---
- #### Set rounded corners and opacity in #i3
	- `doas emerge -aq x11-misc/picom`
	- `vim ~/.config/i3/config`
	  ```
	  exec picom --daemon
	  ```
	- `vim ~/.config/picom.conf`
	  ```
	  # Set rounded corners
	  corner-radius = 10;
	  # Set opacity
	  inactive-opcity = 0.4;
	  ```
- ***Notes***
	- `doas reboot` # Make Picom work when first used
- ***References***
	- https://philipj.ydns.eu/stagit/dotfiles/file/i3/picom.conf.html
	- https://config.phundrak.com/picom.html
	- https://wiki.gentoo.org/wiki/Picom
- ---
- #### Add a #patch in [[Gentoo Linux]]
	- `doas mkdir -p /etc/portage/patches/x11-terms/st-0.8.5/`
	- `doas cp ~/st-alpha-0.8.5.diff /etc/portage/patches/x11-terms/st-0.8.5/`
	- `cd /usr/portage/x11-terms/st/`
	- `doas ebuild ./st-0.8.5.ebuild clean prepare`
	- `doas mv /etc/portage/patches/x11-terms/st-0.8.5/st-alpha-0.8.5.diff /tmp/`
	- `doas emerge -q x11-terms/st`
- ***Notes***
	- `cd /usr/portage/x11-terms/st/` # Change the package's ebuild repository
	- `doas mv /etc/portage/patches/x11-terms/st-0.8.5/st-alpha-0.8.5.diff /tmp/` # Remove the patch from the directory (Prevent compilation failure)
- ***References***
	- [st - simple terminal | suckless.org software that sucks less](https://st.suckless.org/patches/alpha/)
	- [/etc/portage/patches - Gentoo Wiki](https://wiki.gentoo.org/wiki//etc/portage/patches)
- ---
- #### Set #prompt for #Bash
	- `doas emerge -q app-shells/starship` # Install Starship
	- `vim ~/.bashrc` # Setup the Shell (Bash) to use Starship
	  ```
	  eval "$(starship init bash)"
	  ```
	- `starship preset plain-text-symbols > ~/.config/starship.toml` # Configure Starship
- ***Notes***
    - After using Starship for a while, I think the default is the best.
        - To keep it maintainable on Linux servers.
- ***References***
	- ![2023-01-12_19-07.png](../assets/2023-01-12_19-07_1673521689908_0.png)
	- ![demo.gif](../assets/demo_1673521633245_0.gif)
	- [starship/starship: ☄🌌️ The minimal, blazing-fast, and infinitely customizable prompt for any shell!](https://github.com/starship/starship)
- ---
- #### Add a ebuild repository in Gentoo Linux
	- `eselect repository list`
	- `doas eselect repository enable augaina`
	- `doas emaint sync -r zugaina`
	- `doas emerge -aq media-fonts/nerd-fonts`
- ***Notes***
	- `eselect repository list -i` # List installed
		- `-i` # Installed
	- `doas eselect repository remove zugaina` # Remove the ebuild repository
- ***References***
	- `man repository.eselect`
	- [eselect/repository - Gentoo Wiki](https://wiki.gentoo.org/wiki/Eselect/Repository)
- ---
- #### Extract ".zip" files to a directory
	- `unzip FiraCode.zip -d ./FiraCode/`
- ***Notes***
	- `-d` # Directory
	- `./` # The current directory
	- `FiraCode/` A directory
- ***References***
	- ![2023-01-12_18-32.png](../assets/2023-01-12_18-32_1673519575373_0.png)
	- `man unzip`
- ---
- #### Undo `git add`
	- `git reset` # All
	- `git reset ~/.config/i3/config` # A file
- ***References***
	- ![2023-01-11_09-13.png](../assets/2023-01-11_09-13_1673399609678_0.png)
	- [How do I undo 'git add' before commit? - Stack Overflow](https://stackoverflow.com/questions/348170/how-do-i-undo-git-add-before-commit)
- ---
- #### Set random wallpaper with #Feh
	- `crontab -e`
	  ```
	  * * * * * DISPLAY=":0.0" feh --randomize --bg-fill ~/app/wallpaper/*
	  ```
- ***Notes***
	- `* * * * *` # Every minute
- ***References***
	- https://github.com/catppuccin/wallpapers
	- https://github.com/antoniosarosi/Wallpapers
	- https://github.com/inigochoa/wallpapers
	- https://github.com/goatfiles/wallpapers
	- https://wiki.gentoo.org/wiki/Feh
- ---
- #### Use Feh
	- `feh ~/app/wallpaper/` # Enable slideshow mode
		- `~/app/wallpaper/` # A directory including many images
		- `leftArrowKey` # Previous image
		- `upArrowKey` # Zoom in
		- `Ctrl+Delete` # Delete the current image
- ***Notes***
	- `feh -i ~/app/wallpaper/` # Enable index mode
		- `-i` # Index
	- `feh -m ~/app/wallpaper/` # Enable montage mode
		- `-m` # Montage
	- `feh -t ~/app/wallpaper/` # Enable thumbnail mode
		- `-t` # Thumbnails
	- `feh -w ~/app/wallpaper/` # Enable multiwindow mode
		- `-w` # Multiwindow
	- `feh -l ~/app/wallpaper/` # Enable list mode
		- `-l` # List
- ***References***
	- ![2023-01-11_23-36.png](../assets/2023-01-11_23-36_1673451418603_0.png)
	- ![2023-01-11_23-37.png](../assets/2023-01-11_23-37_1673451488291_0.png)
	- `man feh`
	- https://unix.stackexchange.com/questions/255693/how-do-i-delete-images-from-disk-using-feh
	- https://wiki.gentoo.org/wiki/Feh
- ---
- #### [[Zoom in]] is enlarge #Idea
	- `in` # Near big
- ---
- #### Manage dotfiles with Git
    - First use
      ```
      git init --bare $HOME/.dotfiles
      alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME/'
      dotfiles config --local status.showUntrackedFiles no
      dotfiles status
      dotfiles add .bashrc
      dotfiles commit -m "Add .bashrc"
      dotfiles remote add origin git@github.com:yaoniplan/dotfiles.git
      dotfiles push -u origin master
      ```
    - Second machine
      ```
      git clone --bare https://github.com/yaoniplan/dotfiles.git $HOME/.dotfiles
      alias dotfiles='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME/'
      dotfiles checkout
      dotfiles config --local status.showUntrackedFiles no
      ```
- ***Notes***
    - `/usr/bin/git` # Replace it with your location of Git
        - `which git` # Run it to get the location of Git
    - `dotfiles config --local status.showUntrackedFiles no` # Hide untracked files
    - Replace *.bashrc* with your dotfiles
    - Replace *yaoniplan* with your user name
- ***References***
    - https://fwuensche.medium.com/how-to-manage-your-dotfiles-with-git-f7aeed8adf8b
    - https://medium.com/@simontoth/best-way-to-manage-your-dotfiles-2c45bb280049
- ---
- #### Replace /etc/environment with ~/.bash_profile in #Linux
	- `vim ~/.bash_profile`
	  ```
	  # Proxy
	  export http_proxy="127.0.0.1:7890"
	  export https_proxy="127.0.0.1:7890"
	  export no_proxy="localhost, 127.0.0.1"
	  ```
- ***Notes***
	- Advantages
		- Set environment permanently
		- Prevent /etc/environment file from being initialized
- ---- ---
- #### 1 inch = 2.54 centimeters #Idea
- ***Notes***
	- 0.5 inch = 1.27 centimeters
- ***References***
	- ![2023-01-08_18-37.png](../assets/2023-01-08_18-37_1673174251455_0.png)
- ---
- #### Use #todotxt in #Linux
	- `todocli add "Buy soap"` # Add it to *todo.txt* file
	- `todocli list` # List *todo*
	- `todocli done 1` # Mark 1 done
	- `todocli replace 1 "Buy some soap"` # Replace a task
	- `todocli pri 4 A` # Prioritize task (4) to the highest level (A)
	- `todocli append 10 "https://wiki.gentoo.org/wiki/Neofetch"` # Append task (10) text to the end of the line
	- `todocli depri 7` # Deprioritize (remove the priority) task (7)
	- `todocli help` # Display help
- ***Notes***
	- `todocli` # A alias
		- `vim ~/.bashrc`
		  ```
		  alias todocli=todo.sh
		  complete -F _todo todocli
		  ```
			- `source ~/.bashrc` # Make changes effective
- ***References***
	- ![2023-01-08_16-55.png](../assets/2023-01-08_16-55_1673168144409_0.png)
	- `t -h`
	- [Todo.txt CLI Manages Your Tasks from the Command Line](https://lifehacker.com/todo-txt-cli-manages-your-tasks-from-the-command-line-5155450)
- ---
- #### Install #todotxt in [[Gentoo Linux]]
	- `doas emerge -aq app-misc/todo`
	- `bzcat /usr/share/doc/todo-2.12.0-r2/todo.cfg.bz2 > ~/.todo/config`
- ***Notes***
	- Clik this [link](https://github.com/yaoniplan/note/blob/fab273f191a9311af89a722b6c7ab855d98c0112/journals/2022_11_27.md) If you have a question about "have been masked"
	- `bzcat /usr/share/doc/todo-2.12.0.r2/todo.cfg.bz2 > ~/.todo/config`
		- `mkdir ~/.todo/` # Make the directory if you don't have it
- ***References***
	- ![2023-01-08_16-14.png](../assets/2023-01-08_16-14_1673165683602_0.png)
	- [Fresh brew install fails with `Fatal Error: Cannot read configuration file /Users/me/.todo/config` · Issue #252 · todotxt/todo.txt-cli](https://github.com/todotxt/todo.txt-cli/issues/252#issuecomment-417040693)
- ---
- #### Choose a toothbrush
	- `bristles` `head` `handle` `no reason to return`
- ***Notes***
	- **soft** bristles
		- Protect teeth and gums
	- **small** head
		- Reach hard-to-reach places (e.g. back teeth)
	- **non-slip** handle
	- optional: powered toothbrush
		- Make brushing easier
	- Using
		- Replace the brush head every **3** months (or when the **bristles** begin to show **wear**)
			- `Replace` # Bristles may trap bacteria leading to reinfection
- ***References***
	- [How to Choose a Toothbrush](https://www.goldenstatedentistry.com/blog/how-to-choose-a-toothbrush#:~:text=Any%20toothbrush%20you%20choose%20should,if%20excessive%20force%20is%20applied.)
	- https://github.com/yaoniplan/note/issues/17#issue-1464378817
- ---
- #### The #abbreviation of [[potential of hydrogen]] is #pH.
- ***References***
	- ![2023-01-08_09-36.png](../assets/2023-01-08_09-36_1673141798107_0.png)
	- [pH - Wikipedia](https://en.wikipedia.org/wiki/PH)
- ---
- #### Choose a soap
	- `pH` `fatty acids` `glycerin`
- ***Notes***
	- Sensitive skin
		- No artificial fragrances
		- No alcohol
		- No sulfates
- ***References***
	- https://skinkraft.com/blogs/articles/how-to-choose-the-right-soap-for-your-skin-type#:~:text=Look%20for%20ingredients%20like%20salicylic,your%20soap%20is%20non%2Dcomedogenic.
- ---
- #### Downgrade for software in [[Gentoo Linux]]
	- `doas emerge =media-gfx/flameshot-11.0.0`
- ***Notes***
	- `=media-gfx/flameshot-11.0.0`
		- `equery list -po flameshot` # Check what package versions are available
			- `-p` # Portage-tree
			- `-o` # Overlay-tree
- ***References***
	- ![2023-01-06_16-43.png](../assets/2023-01-06_16-43_1672994617903_0.png)
	- ![2023-01-06_16-46.png](../assets/2023-01-06_16-46_1672994802292_0.png)
	- `man equery`
	- [linux - How to select the software's version in gentoo by emerge? - Stack Overflow](https://stackoverflow.com/questions/13705901/how-to-select-the-softwares-version-in-gentoo-by-emerge)
- ---
- #### Set a proxy for the phone when the phone does not have proxy software
	- HTTP (e.g. *web browser*)
		- Proxy settings: Manual
		- Proxy hostname: 192.168.10.107
		- Proxy port: 7890
	- Socks5 (e.g. *Telegram*)
		- Server: 192.168.10.107
		- Port: 7891
- ***Notes***
	- `192.168.10.107`
		- `ip address` # Get computer IP address
		  ```
		  inet 192.168.10.107/24 brd 192.168.10.255 scope global dynamic noprefixroute eno1
		  ```
	- Advantages
		- Faster than using mobile proxy software
	- Disadvantages
		- Keep computer on
- ***References***
	- ![2023-01-06_15-24.png](../assets/2023-01-06_15-24_1672989908182_0.png)
	- ![Screenshot_2023-01-06-15-06-20-28.png](../assets/Screenshot_2023-01-06-15-06-20-28_1672989484784_0.png)
	- ![Screenshot_2023-01-06-15-10-38-45.png](../assets/Screenshot_2023-01-06-15-10-38-45_1672989496310_0.png)- ---
- #### The #abbreviation of [[Portable Network Graphics]] is #PNG.
- ***Notes***
	- A format
	- Lossless
- ***References***
	- ![2023-01-05_11-55.png](../assets/2023-01-05_11-55_1672890964860_0.png)
	- [Portable Network Graphics - Wikipedia](https://en.wikipedia.org/wiki/Portable_Network_Graphics)- ---
- #### Print system information in #Shell
	- `uname`
- ***Notes***
	- `uname -a`
		- `-a` # All
- ***References***
	- ![2023-01-04_16-27.png](../assets/2023-01-04_16-27_1672820843229_0.png)
	- `man uname`- ---
- #### Reasons for the air switch to trip: overload protection, circuit short circuit and leakage. #idea
- ***References***
	- ![2023-01-03_10-21.png](../assets/2023-01-03_10-21_1672712511898_0.png)
	- [Cause analysis and treatment of air switch trip | Quisure Circuit Breaker](https://www.quisure-circuit-breaker.com/blog-technology-cause-analysis-and-treatment-of-air-switch-trip.html#:~:text=There%20are%20generally%20four%20reasons,the%20air%20switch%20to%20trip.)- ---
- #### The #punctuation of [[dollar sign]] is `$`.
- ***References***
	- ![2023-01-02_15-15.png](../assets/2023-01-02_15-15_1672643739341_0.png)
	- [Dollar sign - Wikipedia](https://en.wikipedia.org/wiki/Dollar_sign)- ---
- #### Eating fried food can seriously damage body organs (e.g. mouth, throat, etc.). #idea
- ---
- #### Check dependencies of a package in [[Gentoo Linux]]
	- `equery g x11-misc/cdm`
- ***Notes***
	- `equery g x11-misc/cdm`
		- `g` # graph
		- `emerge -s CDM` # Search in ebuild repository if you don't know its full name
			- `-s` # Search
- ***References***
	- ![2022-12-31_09-59.png](../assets/2022-12-31_09-59_1672451978986_0.png)
	- ![2022-12-31_10-07.png](../assets/2022-12-31_10-07_1672452436735_0.png)
	- `equery --help`
	- `man emerge`
	- [Equery - Gentoo Wiki](https://wiki.gentoo.org/wiki/Equery)- ---
- #### The syntax of the if-else condition in #shell script
  ```Shell
  if [condition]
  then
     statement1
  else
     statement2
  fi
  ```
- ***References***
	- [How to Use if-else in Shell Scripts? | DigitalOcean](https://www.digitalocean.com/community/tutorials/if-else-in-shell-scripts)
- #### Dust damages the lungs. #Idea- ---
- #### Execute a script at boot time in [[Gentoo Linux]] with #OpenRC
	- `doas vim /etc/local.d/script.start`
	- `doas chmod a+x /etc/local.d/script.start`
- ***Notes***
	- `doas vim /etc/local.d/script.start`
	  ```
	  #!/usr/bin/env bash
	  
	  # Set the brightness to 30% (1465/4882)
	  echo 1465 > /sys/class/backlight/intel_backlight/brightness
	  ```
		- A script about brightness
- ***References***
	- ![2022-12-28_15-54.png](../assets/2022-12-28_15-54_1672214136874_0.png)
	- https://wiki.gentoo.org/wiki//etc/local.d
	- https://unix.stackexchange.com/questions/30924/how-do-i-set-default-brightness-after-boot
- ---
- #### The #abbreviation of [[Et Cetera]] is #etc in #Linux.
- ***References***
	- ![2022-12-27_11-15.png](../assets/2022-12-27_11-15_1672110936020_0.png)
	- [Et cetera - Wikipedia](https://en.wikipedia.org/wiki/Et_cetera)
- ---
- #### Write a #Shell script in #Linux
	- `vim dotfiles.sh`
	  ```
	  #!/usr/bin/env sh
	  ```
- ***Notes***
    - `./dotfiles.sh` # Execute the script
        - `chmod u+x dotfiles.sh` # Solve a problem about permission denied
- ***References***
	- ![2022-12-27_10-33.png](../assets/2022-12-27_10-33_1672108436522_0.png)
- ---
- #### Check when a #GitHub account was created
	- `https://api.github.com/users/yaoniplan`
- ***Notes***
	- `api.` # Add it before `github.com/`
	- `users/` # Add it after `github.com/`
	- `yaoniplan` # Replace it with a name of user
- ***References***
	- ![2022-12-26_11-31.png](../assets/2022-12-26_11-31_1672025500536_0.png)
	- ![2022-12-26_11-32.png](../assets/2022-12-26_11-32_1672025553418_0.png)
	- [Where can we check how old is a github account ? : github](https://www.reddit.com/r/github/comments/b3tdg2/where_can_we_check_how_old_is_a_github_account/)- ---
- The #abbreviation of "HyperText Markup Language" is "HTML".
- ***Notes***
	- A markup language
	- A file format
- ***References***
    - ![2022-12-25_18-46.png](../assets/2022-12-25_18-46_1671965225091_0.png)
    - https://en.wikipedia.org/wiki/HTML
- ---
- #### The punctuation of "tilde" is "~".
- ***References***
	- ![2022-12-25_16-48.png](../assets/2022-12-25_16-48_1671958089734_0.png)
	- https://en.wikipedia.org/wiki/Tilde
- ---
- #### Remove a symbolic link in #Linux
	- `unlink ./i3/config`
- ***References***
	- ![2022-12-25_15-44.png](../assets/2022-12-25_15-44_1671954303336_0.png)
	- ![2022-12-25_15-47.png](../assets/2022-12-25_15-47_1671954471140_0.png)
	- `man unlink`
- ---
- #### Create a symbolic link in #Linux
	- `ln -s ~/.config/i3/config ./i3/config`
- ***Notes***
	- `ln` # Link
	- `-s` # Symbolic
	- `~/.config/i3/config` # A hard link
	- `./i3/config` # A symbolic link
		- `mkdir ./i3/` # Make a directory before using the *ln* command
	- Optional: Check the symbolic link and the hard link
		- `ls -l ./i3/config`
- ***References***
	- ![2022-12-25_16-11.png](../assets/2022-12-25_16-11_1671955932398_0.png)
	- `man ln`
	- https://www.freecodecamp.org/news/dotfiles-what-is-a-dot-file-and-how-to-create-it-in-mac-and-linux/
- ---
- #### Copy text from tmux to clipboard in Linux
	- `doas vim /etc/tmux.conf`
	  ```
	  bind -T copy-mode-vi Enter send-keys -X copy-pipe-and-cancel "xclip -i -f -selection primary | xclip -i -selection clipboard"
	  ```
- ***Notes***
	- `"xclip -i -f -selection primary | xclip -i -selection clipboard"`
		- `-i` # -in
		- `-f` # -filter
		- `doas emerge -aq x11-misc/xclip` # Install it to use the *xclip* command
- ***References***
	- ![2022-12-25_09-51.png](../assets/2022-12-25_09-51_1671933133240_0.png)
	- `man xclip`
	- https://www.freecodecamp.org/news/tmux-in-practice-integration-with-system-clipboard-bcd72c62ff7b/
- #### Use tmux
    - `tmux attach-session -t 1` # Attach session 1 if you quit the terminal accidentaly
        - `kitty` # Replace it with your terminal
        - `tmux ls`
        - `tmux attach-session -t 1`
            - `1` # Replace it with your target
    - `C-b l` # Return to the last used window
	- `C-b w` # Window of tree mode
	- `C-b s` # Session of tree mode
	- `C-b c` # Create window
	- `C-b l` # Last window (previously used)
	- `C-b "` # Split vertically
	- `C-b ;` # Last pane (previously used)
	- `C-b L` # Last session (previously used)
	- `C-b space` # switch to the next layout
	- `C-b :` # Prompt for a command (Vim-like)
		- `kill-session -t 15` # Kill session 15
			- `-t` # Target
		- `split-window` # Split window
			- `C-b arrowKey` # Change the active pane
			- `split-window -h` # Horizontal
			- `split-window -v` # Vertical
		- `attach -t 1` # attach session 1
		- `rename-session 0` # Rename session (active) to 0
		- `rename-window 1` # Rename window (active) to 1
		- `source-file ~/.tmux.conf` # Reload the Tmux configuration file
	- `C-b [` # Refer this [link](https://man.openbsd.org/tmux#WINDOWS_AND_PANES)
		- `Space` # Select what you want to copy
		- `Enter` # copy after select what you want to copy
	- `C-b ]` # paste
	- `C-b =` # Buffer mode
	- `tmux ls`
	- `C-b ?`
- ***Notes***
	- `tmux ls` # List all sessions
		- `ls` # list-sessions
    - `tmux kill-server` # kill all server (e.g. sessions, windows, and panes)
	- `C-b ?` # List key bindings
		- `C-b` # A prefix key (Means pressing the `Ctrl` key and `b` together)
		- `?` # Press the `?` key after that
- ***References***
	- `man tmux`
	- ![tmux_status_line_diagram.png](../assets/tmux_status_line_diagram_1671845222091_0.png)
    - https://leimao.github.io/blog/Tmux-Tutorial/
	- https://gist.github.com/russelldb/06873e0ad4f5ba1c4eec1b673ff4d4cd
	- https://github.com/tmux/tmux/wiki/Getting-Started
	- https://www.rushiagr.com/blog/2016/06/16/everything-you-need-to-know-about-tmux-copy-pasting-ubuntu/
- ---
- #### Replace sudo with doas in Gentoo Linux
	- `sudo emerge -aq app-admin/doas`
	- `sudo vim /etc/doas.conf`
	- `sudo vim ~/.bashrc`
- ***Notes***
	- `sudo vim /etc/doas.conf` 
	  ```
	  # Allow all users in the wheel group to execute any command as root
	  permit :wheel
	  
	  # Allow a user to use a command (e.g. reboot, poweroff, etc.) without a password
	  permit nopass yaoniplan cmd reboot
	  permit nopass yaoniplan cmd poweroff
	  ```
	- `sudo vim ~/.bashrc` # Configure completion for doas
	  ```
	  complete -cf doas
	  ```
    - `su root` # Substitute root if your doas doesn't work
- ***References***
	- https://wiki.gentoo.org/wiki/Doas
- ---
- #### The abbreviation of "application programming interface" is "API".
	- A way
	- To communicate
- ***References***
	- https://en.wikipedia.org/wiki/API
- ---
- #### The #abbreviation of [[Advanced Linux Sound Architecture]] is #ALSA. #Idea
	- ![2022-12-22_09-37.png](../assets/2022-12-22_09-37_1671673115158_0.png)
- ***Notes***
	- A software framework
- ***References***
	- [Advanced Linux Sound Architecture - Wikipedia](https://en.wikipedia.org/wiki/Advanced_Linux_Sound_Architecture)
- ---
- #### Set USE flag temporarily in [[Gentoo Linux]]
	- `sudo USE="minimal" emerge -aq media-libs/libsndfile`
	- `sudo USE="-pulseaudio" emerge -aq media-sound/mpg123`
	- `sudo emerge -aq pulseaudio`
- ***Notes***
	- If you have the problem
	  ```
	  It might be possible to break this cycle
	  by applying any of the following changes:
	  - media-libs/libsndfile-1.1.0-r1 (Change USE: +minimal)
	  - media-sound/mpg123-1.31.1 (Change USE: -pulseaudio)
	  
	  Note that this change can be reverted, once the package has been installed.
	  
	  Note that the dependency graph contains a lot of cycles.
	  Several changes might be required to resolve all cycles.
	  Temporarily changing some use flag for all packages might be the better option.
	  ```
	- `sudo USE="minimal" emerge -aq media-libs/libsndfile`
		- `USE="minimal"` # Add it between *sudo* and *emerge*
	- `sudo USE="-pulseaudio" emerge -aq media-sound/mpg123`
		- `-` # Cancel
- ***References***
	- ![2022-12-22_08-31.png](../assets/2022-12-22_08-31_1671669128865_0.png)
	- [USE flag - Gentoo Wiki](https://wiki.gentoo.org/wiki/USE_flag)
- ---
- #### The #abbreviation of `/var` is #variable in #Linux. #Idea
- ***References***
	- ![2022-12-21_11-28.png](../assets/2022-12-21_11-28_1671593293117_0.png)
- ---
- #### Use ebuild repository in Gentoo Linux
	- `doas eselect repository create test`
	- `doas mkdir -p /var/db/repos/test/app-misc/logseq/`
	- `doas vim /var/db/repos/test/app-misc/logseq/logseq-0.8.8.ebuild`
	- `doas chown -R portage:portage /var/db/repos/test/`
	- `cd /var/db/repos/test/app-misc/logseq/`
	- `doas ebuild ./logseq-0.8.8.ebuild manifest`
	- `sudo emerge -aq app-misc/logseq`
- ***Notes***
	- `doas eselect repository create test` # Create an empty ebuild repository named *test*
		- `doas emerge -aq app-eselect/eselect-repository` # Install it if you don't have it
	- `doas vim /var/db/repos/test/app-misc/logseq/logseq-0.8.8.ebuild` # Create the ebuild file named *logseq-0.8.8*
		- <details><summary>logseq-0.8.8.ebuild</summary>
		  <pre><code>
		  # Copyright 1999-2022 Gentoo Authors
		  # Distributed under the terms of the GNU General Public License v2
		  
		  EAPI=8
		  
		  inherit unpacker
		  
		  DESCRIPTION="A privacy-first, open-source platform for knowledge management and collaboration"
		  HOMEPAGE="https://logseq.com/"
		  SRC_URI="https://github.com/logseq/logseq/releases/download/${PV}/Logseq-linux-x64-${PV}.zip"
		  S="${WORKDIR}"
		  
		  LICENSE="GNU Affero General Public License v3.0"
		  
		  SLOT="0"
		  KEYWORDS="~amd64"
		  
		  IUSE=""
		  
		  #RESTRICT="strip"
		  
		  RDEPEND=""
		  
		  DEPEND="${RDEPEND}"
		  
		  BDEPEND=""
		  
		  
		  src_unpack() {
		  	unpack_zip ${A}
		  }
		  
		  src_install() {
		  
		  	dodir "/opt/logseq"
		  	insinto "/opt/logseq"
		  	cd "${WORKDIR}/Logseq-linux-x64/"
		  	doins -r "."
		  	fperms +x "/opt/logseq/Logseq"
		  	cd "/opt/logseq"
		  
		  	dosym "/opt/logseq/Logseq" "/usr/bin/Logseq"
		  
		  }
		  </code></pre>
		  </details>
		- `app-misc/` # A category (e.g. *app-misc*, *app-editors*, etc.) directory
		- `logseq/` # A package (e.g. *logseq*, *vim*, etc.) directory
		- `0.8.8` # A package version (e.g. *0.8.8*, *9.0.0099*, etc.)
    - `doas chown -R portage:portage /var/db/repos/test/`
        - `portage:portage` # root:root 
	- `doas ebuild ./logseq-0.8.8.ebuild manifest` # Create the package's manifest file
		- Faster than `doas pkgdev manifest`
- ***References***
	- ![2023-01-12_15-29.png](../assets/2023-01-12_15-29_1673508605577_0.png)
	- https://wiki.gentoo.org/wiki/Repository_format/package/Manifest
	- https://raw.githubusercontent.com/jacksongodsey/gentoo-ebuilds/master/logseq-bin-0.8.8.ebuild
	- https://wiki.gentoo.org/wiki/Creating_an_ebuild_repository
- ---
- #### Understand an #idiom about #惨不忍睹. #idea
- ***Notes***
	- `睹` # Look with eyes
- ***References***
	- ![2022-12-19_16-43.png](../assets/2022-12-19_16-43_1671439415481_0.png)
	- https://www.chinesewords.org/idiom/show-3093.html
- ---
- #### Check the file size of a directory in #Linux
	- `du -sh note/`
- ***Notes***
	- `du` # Device usage
	- `-s` # --summarize
	- `-h` # --human-readable
	- `note/` # a directory
- ***References***
	- ![2022-12-19_15-42.png](../assets/2022-12-19_15-42_1671435742745_0.png)
	- ![2022-12-19_15-40.png](../assets/2022-12-19_15-40_1671435661120_0.png)
	- `man du`
- ---
- #### Create a .desktop file for #application in #Linux
	- `sudo vim /usr/share/applications/logseq.desktop`
	  ```
	  [Desktop Entry]
	  Encoding=UTF-8
	  Version=1.0
	  Type=Application
	  Terminal=false
	  Exec=/usr/bin/Logseq
	  Name=Logseq
	  Icon=logseq
	  ```
- ***Notes***
	- `Exec=/usr/bin/Logseq` # Replace */usr/bin/Logseq* with a executable path of application
	- `Name=Logseq` # Replace *logseq* with a name of application
- ***References***
	- ![2022-12-19_15-24.png](../assets/2022-12-19_15-24_1671434703430_0.png)
	- [How to Create a .Desktop File for Your Application in Linux - Make Tech Easier](https://www.maketecheasier.com/create-desktop-file-linux/)
- ---
- The #abbreviation of #initialization is #init. #Idea
- ***Notes***
	- A daemon process
- ***Refernces***
	- ![2022-12-18_18-42.png](../assets/2022-12-18_18-42_1671360183323_0.png)
	- [init - Wikipedia](https://en.wikipedia.org/wiki/Init)
- ---
- Understand the #OpenRC #Idea
- ***Notes***
	- A #init system
- ***References***
	- ![2022-12-18_18-44.png](../assets/2022-12-18_18-44_1671360297378_0.png)
	- [OpenRC - Wikipedia](https://en.wikipedia.org/wiki/OpenRC)
- ---
- #### Use OpenRC
	- `doas rc-service display-manager status`
	- `doas rc-service display-manager start`
	- `doas rc-update del display-manager default`
	- `doas rc-update add display-manager default`
- ***Notes***
    - `dispaly-manager` # Replace it with your service
    - `del` # Delete
    - `/etc/init.d/display-manager` # The same as *rc-service display-manager*
- ***References***
	- https://wiki.gentoo.org/wiki/OpenRC_to_systemd_Cheatsheet
- ---
- #### Modify #brightness in [[Gentoo Linux]]
	- `sudo emerge -aq sys-power/acpilight`
	- `sudo usermod -a -G video yaoniplan`
	- `sudo vim /etc/udev/rules.d/90-backlight.rules`
	  ```
	  # Allow video group to control backlight and leds
	  SUBSYSTEM=="backlight", ACTION=="add", \
	    RUN+="/bin/chgrp video /sys/class/backlight/%k/brightness", \
	    RUN+="/bin/chmod g+w /sys/class/backlight/%k/brightness"
	  SUBSYSTEM=="leds", ACTION=="add", KERNEL=="*::kbd_backlight", \
	    RUN+="/bin/chgrp video /sys/class/leds/%k/brightness", \
	    RUN+="/bin/chmod g+w /sys/class/leds/%k/brightness"
	  ```
- ***Notes***
	- `sudo usermod -a -G video yaoniplan`
		- `mod` # Modify
		- `-a` # --append
		- `-G` # --groups
		- `video` # a name of group
		- `yaoniplan` # Replace it with your name of user
- ***References***
	- ![2022-12-17_20-41.png](../assets/2022-12-17_20-41_1671280886497_0.png)
	- ![2022-12-17_20-22.png](../assets/2022-12-17_20-22_1671279775584_0.png)
	- `man usermod`
	- [How to Add User to Group in Linux | Linuxize](https://linuxize.com/post/how-to-add-user-to-group-in-linux/)
	- [Yuri D'Elia / acpilight · GitLab](https://gitlab.com/wavexx/acpilight)
- ---
- #### Remove packages form the operating system in Gentoo Linux
	- `sudo emerge --depclean x11-apps/xbacklight`
- ***Notes***
	- `doas emerge -c app-admin/sudo`
		- `-c` # Replace *--depclean* with *-c*
	- ![2022-12-17_19-07.png](../assets/2022-12-17_19-07_1671275269285_0.png)
	  ![2022-12-17_19-09.png](../assets/2022-12-17_19-09_1671275401713_0.png)
- ***References***
	- ![2022-12-17_19-03.png](../assets/2022-12-17_19-03_1671274992516_0.png)
	- `man emerge`
	- [software installation - Safely uninstall a package in Gentoo - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/42783/safely-uninstall-a-package-in-gentoo)
- ---
- #### Update the whole system in [[Gentoo Linux]]
	- `sudo emerge -avuDN @world`
- ***Notes***
	- `-a` # --ask
	- `-v` # --verbose
	- `-u` # --update
	- `-D` # --deep
	- `-N` # --newuse
	- If you have the problem
	  ```
	  !!! existing preserved libs:
	  >>> package: x11-libs/libdrm-2.4.114
	   *  - /usr/lib64/libdrm_amdgpu.so.1
	   *  - /usr/lib64/libdrm_amdgpu.so.1.0.0
	   *      used by /usr/lib64/xorg/modules/drivers/amdgpu_drv.so (x11-drivers/xf86-video-amdgpu-22.0.0)
	  Use emerge @preserved-rebuild to rebuild packages using these libraries
	   * After world updates, it is important to remove obsolete packages with
	   * emerge --depclean. Refer to `man emerge` for more information.
	  ```
		- `sudo emerge --depclean` # Remove obsolete packages
		- `sudo emerge @preserved-rebuild` # Clean up the old library version
- ***References***
	- ![2022-12-17_18-41.png](../assets/2022-12-17_18-41_1671273677089_0.png)
	- `man emerge`
	- [Upgrading Gentoo - Gentoo Wiki](https://wiki.gentoo.org/wiki/Upgrading_Gentoo)
	- [@preserved-rebuild - Gentoo Wiki](https://wiki.gentoo.org/wiki/Preserved-rebuild)
- ---
- #### The abbreviation of the "Unicode Transformation Format - 8-bit" is the "UTF-8". #Idea
- ***Notes***
	- An encoding
- ***References***
	- ![2022-12-17_10-35.png](../assets/2022-12-17_10-35_1671244552875_0.png)
	- https://en.wikipedia.org/wiki/UTF-8
- ---
- #### Understand the #LLVM. #Idea
- ***Notes***
	- A #compiler
	- It took about four hours to compile the *sys-devel/llvm* in [[Gentoo Linux]]. (e.g. 15:50-20:07)
- ***References***
	- ![2022-12-17_09-45.png](../assets/2022-12-17_09-45_1671241531594_0.png)
	- ![2022-12-17_09-47.png](../assets/2022-12-17_09-47_1671241681603_0.png)
	- [LLVM - Wikipedia](https://en.wikipedia.org/wiki/LLVM)
- ---
- #### The #abbreviation of the [[Good Game]] is #GG. #Idea
- ***Notes***
	- A #slang
	- Used at the **end** of a gaming match commonly
- ***References***
	- ![2022-12-17_09-14.png](../assets/2022-12-17_09-14_1671239683840_0.png)
	- [GG - Wiktionary](https://en.wiktionary.org/wiki/GG#:~:text=(online%20gaming%2C%20slang)%20Good,be%20used%20genuinely%20or%20sarcastically.)
- ---
- #### The #abbreviation of the [[computed tomography scan]] is [[CT scan]] . #Idea
- ***References***
	- ![2022-12-17_09-05.png](../assets/2022-12-17_09-05_1671239145167_0.png)
	- [CT scan - Wikipedia](https://en.wikipedia.org/wiki/CT_scan)
- ---
- #### The abbreviation of the "identity document" is "ID". #Idea
- ***References***
	- ![2022-12-17_08-49.png](../assets/2022-12-17_08-49_1671238198604_0.png)
	- https://en.wikipedia.org/wiki/Identity_document
- ---
- #### Check screen resolution in Linux
	- `cat /sys/class/graphics/fb0/modes`
- ***References***
	- ![2022-12-16_17-22.png](../assets/2022-12-16_17-22_1671182590807_0.png)
	- ![2022-12-16_17-25.png](../assets/2022-12-16_17-25_1671182696601_0.png)
	- https://superuser.com/questions/196532/how-do-i-find-out-my-screen-resolution-from-a-shell-script
- ---
- #### Display backticks in the code block of #Markdown
    - <code>``import -window root `date +%F_%T`.png``</code>
- ***Notes***
	- ``import -window root `date +%F_%T`.png`` # Output
	- Add **two backticks** to the left of the content; add **two backticks** to the right of the content.
		- Sometimes: Replace *two backticks* with **two backticks and a space**; Replace *two backticks* with **a space and two backticks**
- ***References***
	- ![image.png](../assets/image_1670917787671_0.png)
	- ![image.png](../assets/image_1670912845551_0.png)
	- https://linuxhint.com/escape-backtick-markdown/
- ---
- I am trying to use #GIF in #Markdown files. #Idea
- ---
- #### Take a screenshot with the #import command from #ImageMagick #application
	- `import -window root screenshot.png` # Take a picture of the **whole screen**
	- `import screenshot.png` # Take a picture of the **selected part**
- ***Notes***
	- `sleep 5; import -window root screenshot.png` # Delay **five seconds** before taking a picture
	- ``import -window root `date +%F_%T`.png`` # Image file named by time
		- `%F` # Full date (e.g. *2022-12-13*)
		- `%T` # Time (e.g. *15:15:03*)
	- ``import -window 0x1a00002 `date +%F_%T`.png`` # Take a picture of a **single window** you want
		- `0x1a00002` # A window ID
		- `xwininfo` # Get the window ID
			- `sudo emerge -aq x11-apps/xwininfo` # Install it if you don't have it
- ***References***
	- ![image.png](../assets/image_1670917598838_0.png)
	- ![image.png](../assets/image_1670920536029_0.png)
	- https://www.oreilly.com/library/view/linux-multimedia-hacks/0596100760/ch01s02.html
	- https://dev.to/fmtweisszwerg/how-to-capture-a-screenshot-of-the-single-window-you-want-using-command-line-59hc#:~:text=To%20capture%20a%20screenshot%20of%20the%20selected%20window%20using%20import,ID%22%20with%20%2Dwindow%20option.&text=Finally%2C%20the%20screenshot%20is%20saved%20in%20the%20current%20directory!
- ---
- #### The #abbreviation for #kilo is #k. #idea
- ***Notes***
	- #Kilo is one thousand
- ***References***
	- ![image.png](../assets/image_1670750050486_0.png)
	- ![image.png](../assets/image_1670749822852_0.png)
	- [K - Wikipedia](https://en.wikipedia.org/wiki/K#:~:text=In%20the%20International%20System%20of,km%20signifies%20a%20thousand%20metres.)
- ---
- #### Use Clash
	- `chmod u+x clash-linux-amd64-v1.12.0` # Run this command after [downloading](https://github.com/Dreamacro/clash/releases) and decompressing
	- `mv clash-linux-amd64-v1.12.0 clash`
	- `sudo mv clash /usr/local/bin/`
	- `clash` # Initialization
- ***Notes***
	- Configure #Clash
		- `mv yourClashConfig.yaml config.yaml` # Rename it to *config.yaml* after downloading *yourClashConfig.yaml*
		- `cp config.yaml ~/.config/clash/config.yaml`
	- Set environment
		- `sudo vim /etc/environment`
		  ```
		  # Proxy
		  export http_proxy="127.0.0.1:7890"
		  export https_proxy="127.0.0.1:7890"
		  export no_proxy="localhost, 127.0.0.1"
		  ```
	- Enable #Clash
		- `clash` # Type it in your terminal (e.g. #Alacritty )
	- Optional: Set temporarily
		- `http://clash.razord.top/` # Type it in your web browser search bar
		- `http://yacd.haishan.me/` # Another GUI
		- `vim ~/.config/clash/config.yaml`
		  ```
		  external-controller: 127.0.0.1:9090
		  ```
		- `http://127.0.0.1:9090/`
	- Solve the problem about **address already in use**
	  ```
	  ERRO[0438] Start Mixed(http+socks) server error: listen tcp 127.0.0.1:7890: bind: address already in use
	  ```
		- `lsof -i :7890` # Get the PID
			- `sudo emerge -aq sys-process/lsof` # Install it if you don't have it
		- `kill yourPID` # Replace *yourPID* with *PID* you got
		- ![2022-12-18_10-45.png](../assets/2022-12-18_10-45_1671331615432_0.png)
		  ![2022-12-18_10-51.png](../assets/2022-12-18_10-51_1671331879834_0.png)
- ***References***
	- ![image.png](../assets/image_1670750559717_0.png)
	- ![image.png](../assets/image_1670750573466_0.png)
	- ![2023-01-12_14-32.png](../assets/2023-01-12_14-32_1673505224282_0.png)
	- https://blog.csdn.net/weixin_42108437/article/details/106072810#commentBox
	- https://skyao.io/learning-linux-mint/docs/daily/network/clash.html
- ---
- #### The #abbreviation for the "solid-state drive" is "SSD". #idea
	- A storage device
- ***References***
	- ![image.png](../assets/image_1670744193676_0.png)
	- [Solid-state drive - Wikipedia](https://en.wikipedia.org/wiki/Solid-state_drive)
- ---
- #### Set CSS for Vimium UI permanently
	- `vim vimium-1.67.4/content_scripts/vimium.css` # Edit the file after downloading form [source code](https://github.com/philc/vimium/tags)
	  ```css
	  div.internalVimiumHintMarker {
	    position: absolute;
	    display: block;
	    top: -1px;
	    left: -1px;
	    white-space: nowrap;
	    overflow: hidden;
	    font-size: 11px;
	    padding: 1px 3px 0px 3px;
	    background: linear-gradient(to bottom, #000000 100%,#FFC542 100%);
	    border: solid 0px #C38A22;
	    border-radius: 3px;
	    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
	  }
	  ```
        - ![image.png](../assets/image_1670657319211_0.png)
	- Edit `CSS for Vimium UI` options of #extension
	  ```css
	  div > .vimiumHintMarker {
	  /* linkhint boxes */
	  background: -webkit-gradient(linear, left top, left bottom, color-stop(100%,#000000),
	    color-stop(100%,#FFC542));
	  border: 0px solid #E3BE23;
	  }
	  
	  div > .vimiumHintMarker span {
	  /* linkhint text */
	  color: black;
	  font-weight: bold;
	  font-size: 12px;
	  }
	  
	  div > .vimiumHintMarker > .matchingCharacter {
	  }
	  ```
        - ![image.png](../assets/image_1670658785221_0.png)
- ***Notes***
	- Theses **two places** (`vimium.css` and `CSS for Vimium UI`) must be changed, otherwise it will not work sometimes.
- ***References***
	- ![image.png](../assets/image_1670659380963_0.png)
	- ![image.png](../assets/image_1670659243064_0.png)
    - https://github.com/philc/vimium/issues/3418#issuecomment-547781986
- ---
- #### Remember What **G** does in #Vim #Idea
	- *G* is bigger than *g*
	- So it's heavy and sinks to **the bottom**
- ***References***
	- ![image.png](../assets/image_1670488648310_0.png)
	- [Why aren't gg and G switched? : vim](https://www.reddit.com/r/vim/comments/b1s7i8/why_arent_gg_and_g_switched/)- Set some aliases for pages in #Logseq
	- Type this code (`alias:: extensions`) on the first block of the page and replace *extensions* with your alias
- ***Notes***
	- What is alias?
	- This means **merging pages** with **the same meaning**.
- ***References***
	- ![image.png](../assets/image_1670417258022_0.png)
	- ![image.png](../assets/image_1670417121867_0.png)
	- [The Ultimate Guide to Aliases in Logseq | Aryan Sawhney](https://aryansawhney.com/pages/the-ultimate-guide-to-aliases-in-logseq/)
- ---
- #### Disable all hotkeys except itself for the [[Global Speed]] #extension
	- `Shift q` # Press the *Shift* key and *q* key together
- ***Notes***
	- `except itself` # This means enabling the hotkey (*Shift q*) only
	- `Global Speed` # A [[Google Chrome]] #extension to set the speed of web pages
	- `Shift q` # To avoid hotkeys conflicts with other #extension (e.g. #Vimium )
- ***References***
	- ![image.png](../assets/image_1670389149552_0.png)
	- ![image.png](../assets/image_1670389328281_0.png)
	- [polywock/globalSpeed: Web extension to set a default speed for video and audio](https://github.com/polywock/globalSpeed)
- ---
- #### Stop forgetting to breathe #Idea
	- Exhale on the effort
- ***References***
	- ![image.png](../assets/image_1670376973969_0.png)
	- [Don't Forget to Breathe - YouTube](https://www.youtube.com/watch?v=LxD3e-K9vug)- #### Enable spell checker in the #Logseq #application
	- A red underline will be displayed when the spelling is wrong.
- ***References***
	- ![image.png](../assets/image_1670332008376_0.png)
	- ![image.png](../assets/image_1670332186329_0.png)
- ---
- #### I am trying to use **Grammarly** to revise a wordy sentence. #Idea
	- I am trying to test it, but it does not work in *Logseq*.
	- Test again.
	- Don't support the #Logseq website.
	- Support the [[Google Translate]] website.
	- Membership is required sometimes.
- ***References***
	- ![image.png](../assets/image_1670333592086_0.png)
	- ![image.png](../assets/image_1670401017096_0.png)
	- https://chrome.google.com/webstore/detail/grammarly-grammar-checker/kbfnbcaeplbcioakkpcpgfkobkghlhen
- ---
- #### I am trying to use **Wordeep** to revise a wordy sentence. #Idea
	- Do not support #Markdown sometimes.
	- Support the #Logseq website.
- ***References***
	- https://chrome.google.com/webstore/detail/wordeep-proofreading/olmmaccabblmaegeofmeidedoahadlkp
- ---
- #### I am trying to use **Quillbot** to revise a wordy sentence. #Idea
	- Do not support #Markdown.
	- Support the #Logseq website.
- ***References***
	- ![image.png](../assets/image_1670316108722_0.png)
	- https://chrome.google.com/webstore/detail/quillbot-for-chrome/iidnbdjijdkbmajdffnidomddglmieko
- ---
- #### I am trying to use **ProWritingAid** to revise a wordy sentence. #Idea
	- Support the #Logseq website.
	- Do not support #Markdown sometimes.
- ***References***
	- https://chrome.google.com/webstore/detail/prowritingaid-grammar-che/npnbdojkgkbcdfdjlfdmplppdphlhhcf
- ---
- #### I am trying to use **LanguageTool** to revise a wordy sentence. #Idea
	- Support the #Logseq website.
	- Support #Markdown.
	- Need to manually add some proper nouns sometimes.
	- Membership is required sometimes.
- ***References***
	- ![image.png](../assets/image_1670318987959_0.png)
	- https://chrome.google.com/webstore/detail/grammar-spell-checker-%E2%80%94-l/oldceeleldhonbafppcapldpdifcinji
- ---
- #### I am trying to use **Ginger** to revise a wordy sentence. #Idea
	- Support the #Logseq website.
	- Support #Markdown sometimes.
	- Don't support [[Google Translate]].
- ***References***
	- ![image.png](../assets/image_1670401871059_0.png)
	- https://chrome.google.com/webstore/detail/grammar-and-spelling-chec/kdfieneakcjfaiglcfcgkidlkmlijjnh
- #### Set a keyboard shortcut for extensions in Chromium
	- `about:extensions/shortcuts`
- ***Notes***
	- The "Google Translate" extension
		- `Alt-t` # Open or close
		- `energized` # Replace it with what you want and type in the extension bar
		- `Tab` # Press the *Tab* key to select the section you want to select
        - `Shift-Tab` # Select previous section
- ***References***
	- ![image.png](../assets/image_1670226667736_0.png)
	- ![image.png](../assets/image_1670229104027_0.png)
	- ![image.png](../assets/image_1670226853380_0.png)
	- https://www.makeuseof.com/open-browser-extensions-keyboard-shortcut/
- ---
- #### The abbreviation of the "European Union" is "EU".
- ***Notes***
	- In Europe
	- A union
	- 27 member states
- ***References***
	- ![image.png](../assets/image_1670207778824_0.png)
	- https://en.wikipedia.org/wiki/European_Union
- ---
- #### Copy text from Vim to external application without using mouse
    - `Shift-v` # Visual line mode
    - `"+y` # Copy text from Vim
    - `Ctrl-v` # Paste text to external application (e.g. *web browser*, *instant messaging*, etc.)
- ***Notes***
    - `"+y` # Means pressing *"*, *+* and *y* **one by one**
        - `y` # Yank
    - If your clipboard is not working
        - `:version` # Check the clipboard feature in Vim
          ![2022-12-17_16-09.png](../assets/2022-12-17_16-09_1671264573981_0.png)
        - `sudo vim /etc/portage/package.use/zz-autounmask` # Edit and Add the USE flag to enable the clipboard feature
          ```
          # required by app-editors/vim
          app-editors/vim X
          ```
          ![2022-12-17_16-10.png](../assets/2022-12-17_16-10_1671264653139_0.png)
        - `sudo emerge -q app-editors/vim` # Recompile it to enable the USE flag
- ***References***
    - ![image.png](../assets/image_1670203463820_0.png)
    - ![image.png](../assets/image_1670203935654_0.png)
    - ![image.png](../assets/image_1670204012402_0.png)
    - https://vi.stackexchange.com/questions/84/how-can-i-copy-text-to-the-system-clipboard-from-vim
    - https://wiki.gentoo.org/wiki/Vim
- ---
- #### I am trying to mix and not just handedness. #Idea
- ***References***
	- ![image.png](../assets/image_1670139308052_0.png)
	- [Handedness - Wikipedia](https://en.wikipedia.org/wiki/Handedness)
- ---
- #### Chew food properly #Idea
	- Don't overload your spoon or fork
	- Chew with your mouth **closed**, with your tongue **moving** food **form side to side** and your jaw **rotating** slightly
	- Chew slow and steadily, counting to 32 with each bite
	- **Wait** until you have finished food in your mouth before drinking fluids
- ***Notes***
	- `overload your spoon` # It will fall off the sides
	- `32` # Just ensure the food in your mouth **loses** all of its **texture** before swallowing
	- `drinking fluids` # It will **slow** the digestive **process** by diluting enzymes in the body which break down food
- ***References***
	- ![image.png](../assets/image_1670121821794_0.png)
	- [Is there a right way to chew your food?](https://www.tandaradental.com.au/are-you-paying-attention-to-how-you-eat-is-there-a-right-way-to-chew-your-food/)- ---
- #### "Biography" (Bio) #abbreviation #GitHub
	- ***References***
		- ![image.png](../assets/image_1670058822115_0.png)
		- ![image.png](../assets/image_1670058899886_0.png)- ---
- #### Set USE flags for each package #Gentoo #Linux
	- `sudo vim /etc/portage/package.use`
      ```
      x11-terms/rxvt-unicode-9.30 perl xft
      ```
- ***References***
    - ![image.png](../assets/image_1669984104340_0.png)
    - ![image.png](../assets/image_1669984190783_0.png)
    - https://wiki.gentoo.org/wiki//etc/portage/package.use
- ---
- #### Search in current line #Vim
	- `Shift+v` # Select current line
	- `/24` # Just like a normal search and press `Esc` key after the step
- ***Notes***
	- `Shift+v` # Press `Shift` follow by `v` in normal mode
	- `/24` # Replace `24` with what you want to search for
- ***References***
	- ![image.png](../assets/image_1669983322810_0.png)
	- ![image.png](../assets/image_1669983403774_0.png)
	- https://stackoverflow.com/questions/16572611/vim-find-pattern-on-currently-line-only
- ---
- #### Install ST (simple terminal) in Gentoo Linux
	- `sudo vim /etc/portage/package.use/zz-autounmask`
	  ```
	  # required by /etc/portage/savedconfig/x11-terms/st
	  x11-terms/st savedconfig
	  ```
	- `sudo emerge -aq x11-terms/st`
- ***Notes***
	- `x11-terms/st savedconfig` # Set the USE flag for the package
		- `x11-terms/st` # A package
		- `savedconfig` # A USE flag
			- To save custom configuration files
			- To avoid the file being lost
- ***References***
	- https://wiki.gentoo.org/wiki/St
- ---
- #### Solve error about module repository Gentoo Linux
    - `sudo emerge eselect-repository`
- ***Notes***
    - Error
      ```
      yaoniplan@yaoniplan ~ $ eselect repository enable torbrowser
      !!! Error: Can't load module repository
      exiting
      yaoniplan@yaoniplan ~ $
      ```
- ***References***
    - ![image.png](../assets/image_1669969037006_0.png)
    - ![image.png](../assets/image_1669968750028_0.png)
    - ![image.png](../assets/image_1669969330050_0.png)
    - https://github.com/luliu/swift-overlay/blob/main/README.md
- ---
- #### Draw only if more than one container is in the workspace #i3
	- ```
	  smart_gaps on
	  smart_boards on
	  ```
	- ***References***
		- ![image.png](../assets/image_1669780064903_0.png)
		- ![image.png](../assets/image_1669780320669_0.png)
		- ![image.png](../assets/image_1669780442071_0.png)
		- [Is possible to add gaps when only one window is open? : i3wm](https://www.reddit.com/r/i3wm/comments/kjzehs/is_possible_to_add_gaps_when_only_one_window_is/)- ---
- #### Choose a keyboard for a #computer
	- `Mechanical` `fast response` `PBT`
- ***Notes***
    - **Form factor**
        - 100% (full-size) # Large and inefficient
    - **Ergonomic**
        - Align the "H" key with the center of the body
        - Flat and follow the angle of the thighs
	- **Wired and wireless**
	- **Arrow and function key**
	- **Switches**
      | Name  | Type    | Force | Noise   |
      |-------|---------|-------|---------|
      | Brown | Tactile | 45 g  | Average |
      | Clear | Tactile | 65 g  | Average |
      | Red   | Linear  | 45 g  | Low     |
      | Black | Linear  | 60 g  | Low     |
      | Blue  | Clicky  | 50 g  | High    |
	- **Typing and programming**
		- Build quality
			- Plastic # Cheap, but will flex when you press too hard
			- Metal or higher-quality
		- Keycaps
			- ABS # Prone to wear and become smooth with heavy use
			- PBT # More durable
		- Programmability
			- Onboard # Customize certain keys
		- Removable cable
			- Removeable USB cable # Replace just the cable rather than the whole keyboard
- ***References***
	- ![Keyboard layouts](../assets/20210527_mech-keyboard_layout.webp)
	- ![Compact keyboard layouts](../assets/20210527_mech-keyboard_compactlayout.webp)
	- ![61RWq1Sr7DL._AC_SX569_.jpg](../assets/61RWq1Sr7DL._AC_SX569_.jpg)
	- ![71kM7aW7+tS._AC_SX569_.jpg](../assets/71kM7aW7+tS._AC_SX569_.jpg)
	- ![Bluetooth-Compatible-5-0-Mechanical-Gaming-Keyboard-Ergonomic-Wireless-Mechanical-Keyboard-2-4G-68-Keys-Hot.jpg_Q90.jpg_.webp](../assets/Bluetooth-Compatible-5-0-Mechanical-Gaming-Keyboard-Ergonomic-Wireless-Mechanical-Keyboard-2-4G-68-Keys-Hot.jpg_Q90.jpg_.webp)
	- ![image.png](../assets/image_1669650877555_0.png)
	- ![image.png](../assets/image_1670135994657_0.png)
	- ![unparalleled_extensibility-v3-60FPS-compressed-v2.gif](../assets/unparalleled_extensibility-v3-60FPS-compressed-v2_1670218839977_0.gif)
	- ![agent-screencast5.gif](../assets/agent-screencast5_1670212490026_0.gif)
	- ![Extreme_customizability-compressed.gif](../assets/Extreme_customizability-compressed_1670218823944_0.gif)
	- https://www.nytimes.com/wirecutter/blog/how-to-shop-for-a-mechanical-keyboard/
	- https://ergo.human.cornell.edu/AHTutorials/ckd.htm
	- https://www.bilibili.com/video/BV1jm4y1R7kz/?spm_id_from=333.337.search-card.all.click
	- https://ultimatehackingkeyboard.com/
- ---
- #### CopyQ installation #application
	- `sudo emerge -aq --autounmask=y --autounmask-write x11-misc/copyq`
		- `sudo etc-update`
		- `-3` # Merge all files automatically
	- `sudo emerge -aq x11-misc/copyq`
- ---
- #### I am trying to replace "unorder list" syntax with "heading" syntax. #Idea
	- because it has a link to share anyone.
- ---
- Nordic-darker theme installation
	- `sudo cp -r Nordic-darker/ /usr/share/themes/`
	- ***Notes***
		- `Nordic-darker/` # The theme folder
			- `tar -xf Nordic-darker.tar.xz` # Extract the file if you download it
		- `/usr/share/themes/` # Add your theme folder to this derectory
	- ***References***
		- ![image.png](../assets/image_1669564625171_0.png)
		- ![image.png](../assets/image_1669564715389_0.png)
		- [EliverLara/Nordic: Dark Gtk3.20+ theme created using the awesome Nord color pallete.](https://github.com/EliverLara/Nordic#installation)
- ---
- Extract (decompress) `.tar.xz` file #Linux #Command
	- `tar -xf Nordic-darker-v40.tar.xz`
	- ***Notes***
		- `-x` # Extract
		- `-f` # File
	- ***References***
		- ![image.png](../assets/image_1669561144343_0.png)
		- ![image.png](../assets/image_1669561567111_0.png)
		- `man tar` # Search (by pressing "**/**") "**-x**" or "**-f**" in manual page about tar
		- [How to Uncompress Tar.xz Files?](https://linuxhint.com/uncompress-tar-xz-files/)
- ---
- Solve problem about "echo", ">>" and permission #Linux #Command
	- `sudo echo "=x11-base/xorg-server-1.11.99.2" | sudo tee -a /etc/portage/package.unmask`
	- ***Notes***
		- `tee` # Replace **output redirection** (e.g. **>** and **>>**)
		- `-a` # Append
	- ***References***
		- ![image.png](../assets/image_1669557601380_0.png)
		- ```
		  yaoniplan@yaoniplan ~/note $ sudo echo "=x11-base/xorg-server-1.11.99.2" sudo >> /etc/portage/package.unmask
		  bash: /etc/portage/package.unmask: Permission denied
		  ```
		- `man tee`
		- https://askubuntu.com/questions/103643/cannot-echo-hello-x-txt-even-with-sudo
- ---
- #### Kvantum installation #Qt #Theme #application
	- `sudo emerge -aq --autounmask=y --autounmask-write x11-themes/kvantum`
	- `sudo etc-update`
		- `-3` # Type it, then press "enter" key
		- `Y` # Type it, the press "enter" key
	- `sudo emerge -aq x11-themes/kvantum` # Install it now
- ***Notes***
	- `--autounmask=y` `--autounmask-write` # Solve the following error
	  ```
	  !!! All ebuilds that could satisfy "x11-themes/kvantum" have been masked.
	  !!! One of the following masked packages is required to complete your request:
	  - x11-themes/kvantum-1.0.1::gentoo (masked by: ~amd64 keyword)
	  ```
- ***References***
	- ![image.png](../assets/image_1670048257700_0.png)
	- [Knowledge Base:Accepting a keyword for a single package - Gentoo Wiki](https://wiki.gentoo.org/wiki/Knowledge_Base:Accepting_a_keyword_for_a_single_package)
- ---
- Lxappearance installation #GTK #Theme #application
	- `sudo emerge -aq lxde-base/lxappearance`
- ---
- Rofi installation #i3 #Gentoo #Linuxn
	- `sudo emerge -aq x11-misc/rofi`
	- `sudo vim ~/.config/i3/config`
		- ```
		  # start dmenu (a program launcher)
		  #bindsym $mod+d exec --no-startup-id dmenu_run
		  # A more modern dmenu replacement is rofi:
		  bindsym $mod+d exec "rofi -modi drun,run -show drun"
		  ```
	- ***Notes***
		- `-a` # Ask
		- `-q` # Quiet
	- ***References***
		- ![image.png](../assets/image_1669537514100_0.png)
		- `man emerge` # Type (by pressing "**/**") "**--ask**" or "**--quiet**" in manual page about emerge
- ---
- #### Set brightness on i3 and Gentoo Linux
    - `sudo emerge --ask x11-apps/xbacklight`
    - `sudo vim ~/.config/i3/config`
      ```
      bindsym XF86MonBrightnessUp exec xbacklight -inc 10
      bindsym XF86MonBrightnessDown exec xbacklight -dec 10
      ```
- ***Notes***
    - `sudo reboot` # Reboot the operating system finally
- ***References***
    - ![image.png](../assets/image_1669535179450_0.png)
    - https://zjuyk.gitlab.io/posts/i3wm-config/
- ---
- #### Enable #audio or #sound in [[Gentoo Linux]]
	- `cd /usr/src/linux`
	- `sudo make menuconfig`
	- `sudo make -j6`
	- `sudo make modules_install`
	- `sudo make install`
	- `sudo euse -E alsa`
	- `sudo emerge -avuDN @world`
	- `sudo emerge -aq media-sound/alsa-utils`
	- `sudo gpasswd -a yaoniplan audio`
	- `sudo rc-update add alsasound boot`
	- `alsamixer`
- ***Notes***
	- `cd /usr/src/linux/`
		- Copy **.config** file to the */usr/src/linux/* directory if you have used [[Gentoo Linux]]
	- `sudo make menuconfig` # Refer this [link](https://wiki.gentoo.org/wiki/ALSA#Hardware_detection) to activate kernel options
		- `lspci | grep -i audio` # List all PCI devices and print lines containing *audio* ignoring case
			- `lspci` # List all PCI devices
			- `-i` # --ignore-case
	- `sudo euse -E alsa` # Enable the USE flag (*alsa*) in */etc/portage/make.conf*
		- `-E` # --enable
		- `sudo emerge -aq app-portage/gentoolkit` # Install it to use the *euse* command
	- `sudo gpasswd -a yaoniplan audio` # Add the user to the group
		- `-a` # --add
		- `yaoniplan` # Replace it with a name of your user
		- `audio` # A group
		- `grep audio /etc/group` # Print lines containing *audio* in */etc/group* file
	- `sudo rc-update add alsasound boot` # Add the service to the runlevel by using *OpenRC*
		- `alsasound` # A service
		- `boot` # A runlevel
	- `alsamixer`
		- Press the `M` key to unmute if display `MM`
		- Press the `Escape` key to exit the interface
	- **Try this first**: Install **media-sound/pulseaudio** if your keyboard doesn't control the sound # Refer this [link](https://wiki.gentoo.org/wiki/PulseAudio) to install it
		- Because it use **pactl** to adjust volume in #PulseAudio in [[Gentoo Linux]] by default
			- `pactl` # #PulseAudio control
- ***References***
	- `man rc-update`
	- `man gpasswd`
	- `man euse`
	- `man grep`
	- `man lspci`
	- [ALSA - Gentoo Wiki](https://wiki.gentoo.org/wiki/ALSA)
- ---
- #### Install google-chrome in Gentoo Linux
    - `sudo vim /etc/portage/package.license`
      ```
      www-client/google-chrome google-chrome
      ```
    - `sudo emerge --ask www-client/google-chrome`
- ***Notes***
    - `www-client/google-chrome google-chrome` # Accept license if you want to install and use this software
- ***References***
    - https://wiki.gentoo.org/wiki/Chrome
- ---
- ---
- SDDM theme #Gentoo #Linux #DM
	- `sudo cp -r ~/sddm-chili-0.1.5 /usr/share/sddm/themes/`
	- `sudo vim /usr/share/sddm/sddm.conf.d/00default.conf`
      ```
      [Theme]
      # Current theme name
      Current=sddm-chili-0.1.5
      ```
	- ***Notes***
		- `/usr/share/sddm/sddm.conf.d/00default.conf` # SDDM's config file
			- `sudo updatedb` # Update a database for mlocate
			- `locate sddm.conf` # Locate file including "sddm.conf" text
		- `sudo emerge --ask dev-qt/qtquickcontrols` # Solve an error about *file:///usr/share/sddm/themes/sddm-chili-0.1.5/Main.qml:22:1: module "QtQuick.Controls" is not installed*
		- `sudo emerge --ask dev-qt/qtgraphicaleffects` # Solve an error about *file:///usr/share/sddm/themes/sddm-chili-0.1.5/components/Wallpaper.qml:21:1: module "QtGraphicalEffects" is not installed*
		- `sudo vim /usr/share/sddm/themes/sddm-chili-0.1.5/theme.conf` # Customize the theme
			  ```
			  [General]
			  background=assets/background.png
			  
			  # Resolution of your screen by typing "screenfetch" or "neofetch" in your Shell (Terminal)
			  ScreenWidth=1366
			  ScreenHeight=768
			  
			  blur=true
			  recursiveBlurLoops=4
			  recursiveBlurRadius=15
			  
			  PasswordFieldOutlined=false
			  
			  PowerIconSize=
			  # Size (between 10 and 16) of font
			  FontPointSize=15
			  # Pixel size of avatar
			  AvatarPixelSize=200
			  
			  translationReboot=
			  translationSuspend=
			  translationPowerOff=
			  ```
		- `/usr/share/sddm/faces/yaoniplan.face.icon` # Avatar file
			- `/usr/share/sddm/faces/` # add your coustomized picture to the avatar folder
			- `yaoniplan` # change it into yours user name
			- `.face.icon` # Keep it default
		- Optional: Take a screenshot of the login screen
			- `sddm-greeter --test-mode --theme /usr/share/sddm/themes/sddm-chili-0.1.5/` # Type it in your terminal
			- Press the **print screen** key to take a screenshot
		- Solve the problem about white background
		  ![2022-12-16_15-48.png](../assets/2022-12-16_15-48_1671176977155_0.png)
			- Convert *background.jpg* file to *background.png* file (Make sure the image file extension is *png*)
				- Make sure there is a *background.png* file in the `/usr/share/sddm/themes/sddm-chili-0.1.5/assets/` directory
				- `sudo vim /usr/share/sddm/themes/sddm-chili-0.1.5/theme.conf`
				  ```
				  [General]
				  background=assets/background.png
				  ```
	- ***References***
		- ![image.png](../assets/image_1670848483176_0.png)
		- ![image.png](../assets/image_1670848867986_0.png)
		- ![image.png](../assets/image_1669474198529_0.png)
		- https://askubuntu.com/questions/43458/how-can-i-take-a-screenshot-of-the-login-screen
		- [MarianArlt/sddm-chili: The hottest theme around for SDDM, the Simple Desktop Display Manager.](https://github.com/MarianArlt/sddm-chili)
- ---
- SDDM Usage #Gentoo #Linux #DM
	- `sudo emerge --ask x11-misc/sddm` # Install **x11-misc/sddm**
	- `sudo usermod -a -G video sddm` # Add the **sddm** to the **video** group
- ***Notes***
	- **OpenRC**
		- `doas emerge --ask gui-libs/display-manager-init`
		- `doas vim /etc/conf.d/display-manager`
		  ```
		  CHECKVT=7
		  DISPLAYMANAGER="sddm"
		  ```
		- `rc-update add display-manager default` # Add the **display-manager** to the system's **default** runlevel
		- `rc-service display-manager start` # Start the **display-manager**
	- Try it first: Replace SDDM
		- CDM
		- Without (script)
- ***References***
	- [SDDM - Gentoo Wiki](https://wiki.gentoo.org/wiki/SDDM)
- ---
- "Miscellaneous" (`Misc`) #abbreviation
- ***References***
	- ![image.png](../assets/image_1669463491145_0.png)
- ---
- #### Switch to another branch of Git
    - `git switch gh-pages` # Switch to "gh-pages" branch
- ***References***
    - ![image.png](../assets/image_1669443599775_0.png)
    - ![image.png](../assets/image_1669454072538_0.png)
    - https://stackoverflow.com/questions/47630950/how-can-i-switch-to-another-branch-in-git
- ---
- Remove package from @world set #Gentoo #Linux
	- `sudo emerge --deselect sys-kernel/gentoo-kernel-bin`
	- ***Notes***
		- `cat /var/lib/portage/world | less` # View packages in the @world set
	- ***References***
		- ![image.png](../assets/image_1669434287891_0.png)
		- ![image.png](../assets/image_1669433474004_0.png)
		- [Gentoo Cheat Sheet - Gentoo Wiki](https://wiki.gentoo.org/wiki/Gentoo_Cheat_Sheet#:~:text=Package%20removal,-Recommended%20method&text=The%20recommended%20way%20to%20remove,run%20depclean%20as%20given%20below.)
- ---
- #### Compress folder as a ".zip" file
    - `zip -r wallpaper.zip wallpaper/`
- ***Notes***
    - `zip`
        - `doas emerge -aq zip` # Install it if you do not have it
    - `-r` # Recursive
    - `wallpaper/` # A folder you want to compress
- ***References***
    - `man zip`
    - ![image.png](../assets/image_1669360589011_0.png)
- ---
- Do not use "sudo **rm -rf** test/" unless you used "sudo **cp -r** test/" before. #Idea #Linux
- ---
- dark theme #Ventoy #CLI
	- `sudo ./VentoyPlugson.sh /dev/sdc` # Type it in your Shell (terminal)
	- `http://127.0.0.1:24681` # Type it in your browser
	- ***Notes***
		- `/dev/sdc` # Your block device name (e.g. /dev/sda, /dev/sdb, etc.) by typing "lsblk" in your Shell (terminal)
	- ***References***
		- ![image.png](../assets/image_1669358377096_0.png)
		- ![image.png](../assets/image_1669358556131_0.png)
		- ![image.png](../assets/image_1669358913831_0.png)
		- [Plugson . Ventoy](https://www.ventoy.net/en/plugin_plugson.html)
- ---
- Superscripted #Markdown
	- `$2^0$ + $2^1$ + $2^2$`
	- ***References***
		- ![image.png](../assets/image_1668673468941_0.png)
		- ![image.png](../assets/image_1668673541829_0.png)
		- ![image.png](../assets/image_1668673233635_0.png)
		- [Markdown数学公式 - 简书](https://www.jianshu.com/p/4d823d1b9c71)
- ---
- Usage #Chmod #Linux
	- `sudo chmod -R 777 ~/note/grow/029_googleTranslateExtension2.0.12_0/`
- ***Notes***
	- `-R` # recursive
	- `777` # the first "7" are permissions of **user**; the second "7" are permissions of **user's group**; the third "7" are permissions of **others**
		- `permissions` # read, write and execute
		- `7` # $2^2$ + $2^1$ + $2^0$
- ***References***
	- ![image.png](../assets/image_1668671601715_0.png)
	- ![image.png](../assets/image_1668671715909_0.png)
	- `man chmod`
- ---
- Usage #QEMU #Emulation #Gentoo #Linux
	- `sudo qemu-system-x86_64 -display gtk -m 20G -boot d -vga std -cdrom ~/app/archlinux-2022.08.05-x86_64.iso`
		- ***References***
			- ![image.png](../assets/image_1668658549725_0.png)
			- [QEMU/Options - Gentoo Wiki](https://wiki.gentoo.org/wiki/QEMU/Options)
- ---
- Wayland is a **display server protocol** that seeks to replace X11. #Linux #Wayland
	- ***References***
		- ![image.png](../assets/image_1668656110539_0.png)
		- [Why Use Wayland versus X11? | CBT Nuggets](https://www.cbtnuggets.com/blog/technology/networking/why-use-wayland-versus-x11)
- ---
- #### Decompress a `.xz` file in Unix-like
    - `xz -d ./FreeBSD-13.1-RELEASE-amd64-bootonly.iso.xz`
- ***Notes***
    - `-d` # Decompress
- ***References***
    - `man xz`
    - ![2023-02-12_14:44:43.png](../assets/2023-02-12_14:44:43.png)
    - https://www.quora.com/How-do-I-extract-an-XZ-file-in-Linux
- ---
- ---
- The punctuation of "Underscore" is "_".
- ***References***
    - ![image.png](../assets/image_1668600037147_0.png)
    - https://en.wikipedia.org/wiki/Underscore
- ---
- how to chewing and swallowing (or eating) properly #Idea
- ***References***
	- ![image.png](../assets/image_1668566884845_0.png)
- ---
- background opacity #Terminal #Alacritty
	- `opacity: 0.95`
- ***Notes***
	- **delete *whitespace* at the beginning of the line** when you have the following error
	  ![image.png](../assets/image_1668563159415_0.png)
- ***References***
	- [Switching To The Alacritty Terminal Emulator - YouTube](https://www.youtube.com/watch?v=PZPMvTvUf1Y)
- ---
- View all commits of a user #GitHub
	- `https://github.com/search?q=author:yaoniplan` # Change user "yaoniplan" to yours
- ***Notes***
	- recently committed:
	  ![image.png](../assets/image_1668499742423_0.png)
- ***References***
	- ![image.png](../assets/image_1668499494795_0.png)
	- ![image.png](../assets/image_1668499822180_0.png)
	- [Can I view all time all repo commits of a user at GitHub? - Web Applications Stack Exchange](https://webapps.stackexchange.com/questions/54148/can-i-view-all-time-all-repo-commits-of-a-user-at-github)- I am trying to replace pages (e.g. abbreviation, punctuation, etc.) with tags. #Idea- ---
- # Add a [[abbreviation]]
  Yet Another Multicolumn Layout (`YAML`)
- ***References***
	- ![image.png](../assets/image_1667989556026_0.png)
	- [YAML (framework) - Wikipedia](https://en.wikipedia.org/wiki/YAML_(framework))
- ---
- # Shortcuts developer tools on Chromium
  `CTRL + Shift + c` # Open developer tools
- ***Notes***
	- `CTRL + Shift + i` # Close developer tools
- ***References***
	- ![image.png](../assets/image_1668047651523_0.png)
	- ![image.png](../assets/image_1667981146323_0.png)
	- [JavaScript Developer Tools | The Odin Project](https://www.theodinproject.com/lessons/foundations-javascript-developer-tools)
- ---
- # Add a [[punctuation]]
  Question mark (`?`)
- ***References***
	- ![image.png](../assets/image_1667973510383_0.png)
	- [Question mark - Wikipedia](https://en.wikipedia.org/wiki/Question_mark)
- ---
- #### The #punctuation of #Backtick is <code>`</code>
- ***References***
	- ![image.png](../assets/image_1667958422314_0.png)
	- [Backtick - Wikipedia](https://en.wikipedia.org/wiki/Backtick)
- #### The abbreviation of "Incorporation" is "Inc".
- ***References***
    - ![image.png](../assets/image_1667909309416_0.png)
- ---
- # Add a [[abbreviation]]
  Main Character (`MC`) in anime
- ***References***
	- ![image.png](../assets/image_1667899830234_0.png)
- ---
- #### The punctuation of exclamation mark is `!`
- ***References***
    - ![image.png](/assets/image_1667896062815_0.png)
    - [Exclamation mark - Wikipedia](https://en.wikipedia.org/wiki/Exclamation_mark)
- ---
- # Add a [[punctuation]]
  Space (` `)
- ***References***
	- ![image.png](../assets/image_1667881614863_0.png)
	- [Space (punctuation) - Wikipedia](https://en.wikipedia.org/wiki/Space_(punctuation))
- ---
- I'm trying to refactor Markdown.md in English. #Idea
- ---
- # test typesetting
  Use `headings` `unordered lists` `images` `links` `code`
- ***Notes***
	- test # test
	- test # test
- ***References***
	- test_image
	- test_image
	- test_link
- [[Shutdown]] in [[Linux]]
	- `shutdown -h 23:00` # Shut down at 23:00 today
- ***Notes***
	- `shutdown -h +30` # Shut down after thirty minutes
- ***References***
	- ![image.png](../assets/image_1667745772612_0.png)
	- ![image.png](../assets/image_1667745850629_0.png)
	- [Linux中Shutdown命令实现定时自动关机_阿德0307的博客-CSDN博客](https://blog.csdn.net/xmc281141947/article/details/61191212)- I'm trying to complete my GitHub. #Idea
- ***References***
    - ![image.png](../assets/image_1667689932734_0.png)
    - ![image.png](../assets/image_1667524928897_0.png)
    - https://github.com/pengx17
- ---
- Push using [[Git]] automatically
	- "~/.config/shell/autoGit.sh"
	  ```sh
	  #!/bin/sh
	  while :
	  do
	    cd ~/note
	    sleep 20
	    git add *
	    sleep 20
	    git commit -m "Update at `date +%F-%T`"
	    sleep 20
	    git push
	  done
	  ```
	- "~/.config/i3/config"
	  ```
	  # Git automatically
	  exec ~/.config/shell/autoGit.sh
	  ```
- ***Notes***
	- `chmod u+x ~/.config/shell/autoGit.sh` # Add executable permission
- ***References***
	- ![image.png](../assets/image_1667489877459_0.png)
	- ![image.png](../assets/image_1667491342211_0.png)
	- ![image.png](../assets/image_1667490019094_0.png)
	- ![image.png](../assets/image_1667491598750_0.png)
	- ![image.png](../assets/image_1667492011781_0.png)
	- [Making git auto-commit - Stack Overflow](https://stackoverflow.com/questions/420143/making-git-auto-commit)
- ---
- I'm trying to automate commit and push using [[Git]]. #Idea
	- test it using Git hooks
	- write a sh file
	- test sh file about "sleep"
	- test sh file about "sleep" again
	- change sleep 540 to 20
	- It doesn't work about commit message again
	- Change ";" to ":"
- ---
- Set the date and time permanently in [[Linux]]
	- `sudo timedatectl set-time '06:52:00'`
- ***Notes***
	- `sudo timedatectl set-time '2022-11-03 06:57:00'` # If you want to change the date and time
- ***References***
	- ![image.png](../assets/image_1667429608754_0.png)
	- ![image.png](../assets/image_1667429741856_0.png)
	- ![image.png](../assets/image_1667430437533_0.png)
	- [command line - how to set the date & time Permanently - Unix & Linux Stack Exchange](https://unix.stackexchange.com/questions/302754/how-to-set-the-date-time-permanently)
- ---
- I am trying to publish my [[Logseq]]. #Idea
	- test the publish function
	- Succeeded
	- https://yaoniplan.github.io/note/
- ---
- Publish [[Logseq]]
	- ![image.png](../assets/image_1667455667047_0.png)
	- ![image.png](../assets/image_1667453721921_0.png)
	- ![image.png](../assets/image_1667453816244_0.png)
	- ![image.png](../assets/image_1667453951302_0.png)
	- ![image.png](../assets/image_1667454254698_0.png)
	- ![image.png](../assets/image_1667455303748_0.png)
- ***Notes***
	- `git pull -f` # After completing the steps in GitHub
- ***References***
	- https://www.youtube.com/watch?v=UYqJcFEYUsY
	- https://github.com/pengx17/knowledge-garden/blob/main/.github/workflows/main.yml
	- https://github.com/pengx17/logseq-publish
- [[Logseq]]plugin "logseq-focus-mode"
	- `Toggle Line Highlight`
	- `Toggle Top Bar`
- ***Notes***
	- `.references.mt-6.flex-1.flex-row` # Hide "Unlinked References"
	- `/* content: "🗓 "; */` # Hide the emoji of calendar about journals (Edit it in your custom.css file)
- ***References***
	- ![image.png](../assets/image_1667205250002_0.png)
	- ![image.png](../assets/image_1667205359550_0.png)
	- ![image.png](../assets/image_1667205384103_0.png)
	- ![image.png](../assets/image_1667206240340_0.png)
	- ![image.png](../assets/image_1667206449974_0.png)
	- [sethfair/logseq-focus-mode: The Focus Mode plugin for Logseq allows you to quickly switch into a distraction-free "zen" mode by toggling into full-screen and hiding elements like the sidebar or properties section.](https://github.com/sethfair/logseq-focus-mode)
	- [How to Write Using Logseq (Long Form Writing Setup) - YouTube](https://www.youtube.com/watch?v=aYSbvGgLo9s&t=463s)
- ---
-- I am trying out plugins and themes for Logseq. #Idea
- ---
- #### [[Logseq]]plugin "logseq-plugin-vim-shortcuts"
	- `j` # move down
	- `k` # move up
	- `i` # insert cursor at the beginnig of the line
	- `a` # insert cursor at the end of the line
	- `o` # insert cursor to the next line
	- `G` # scroll to bottom
- ***Notes***
	- `111j` # scroll to bottom (means move down 111 lines)
	- Optional: Change default [[shortcut keys]] (e.g. *gg*) for the plugin (#Logseq-vim-shortcuts ) and the #application (#Logseq )
		- `sudo vim ~/.logseq/settings/logseq-vim-shortcuts.json`
		  ```json
		  	"top": "g g",
		  ```
		- Change it after pressing the *g* key and the *s* key to display this page
		  ![image.png](../assets/image_1670922753697_0.png)
- ***References***
	- ![image.png](../assets/image_1670828087730_0.png)
	- [vipzhicheng/logseq-plugin-vim-shortcuts: Add part of VIM key bindings experience to Logseq](https://github.com/vipzhicheng/logseq-plugin-vim-shortcuts)
- ---
- [[Logseq]]plugin "logseq-plugin-bullet-threading"
- ***References***
	- ![image.png](../assets/image_1667099250987_0.png)
	- [pengx17/logseq-plugin-bullet-threading: Add bullet threading to your active blocks in Logseq.](https://github.com/pengx17/logseq-plugin-bullet-threading)
- ---
- [[Logseq]]theme "logseq-cusgit-theme"
	- `vim ~/note/logseq/custom.css` # Copy the whole content of custom.css to yours
- ***References***
	- ![image.png](../assets/image_1667112924162_0.png)
	- ![image.png](../assets/image_1667111715985_0.png)
	- ![image.png](../assets/image_1667111924903_0.png)
	- [mendax1234/logseq-cusgit-theme: A customisable GitHub like theme for logseq.](https://github.com/mendax1234/logseq-cusgit-theme)
- ---
-- #### The punctuation of "hyphen" is "-"
- ***References***
	- ![image.png](../assets/image_1666937284752_0.png)
	- https://en.wikipedia.org/wiki/Hyphen
- ---
- [[GitHub]]repository created time (date)
	- `https://api.github.com/repos/yaoniplan/note`
- ***Notes***
	- `api.` # Add it before the "github.com/"
	- `repos/` # Add it after the "github.com/"
	- `note` # Remove the slash (*/*) after the repository name (*note*)
- ***References***
	- ![image.png](../assets/image_1666822882901_0.png)
	- ![image.png](../assets/image_1666822939055_0.png)
	- ![image.png](../assets/image_1670469335477_0.png)
	- [How To Check Creation Date for Any GitHub Repository](https://www.ilovefreesoftware.com/16/programming/check-creation-date-github-repository.html)
- ---
- [[abbreviation]]"Graphics interchange format" (`GIF`)
- ***References***
	- ![image.png](../assets/image_1666839996535_0.png)
	- [GIF - Wikipedia](https://en.wikipedia.org/wiki/GIF)
- ---
- [[Vim]]highlight disable temporarily
	- `:noh`
- ***References***
	- ![image.png](../assets/image_1666858502150_0.png)
	- ![image.png](../assets/image_1666856965138_0.png)
	- [Clear Search Highlight in Vim — tech.serhatteker.com](https://tech.serhatteker.com/post/2020-03/clear-search-highlight-in-vim/)
- ---
- [[Vim]]add text to the end of specified lines
	- `:26,31s/$/<\/li>/`
- ***Notes***
	- `26,31` # lines 26 to 31 (A line number range)
	- `$` # The end of line
	- `backslash` # Escape character
- ***References***
	- ![image.png](../assets/image_1666861974899_0.png)
	- ![image.png](../assets/image_1666862102097_0.png)
	- [editing - How to insert text at beginning of a multi-line selection in vi/Vim - Stack Overflow](https://stackoverflow.com/questions/253380/how-to-insert-text-at-beginning-of-a-multi-line-selection-in-vi-vim)
- ---
-
- [[abbreviation]]"Massive open online course" (`MOOC`)
- ***References***
	- ![image.png](../assets/image_1666751423434_0.png)
	- [Massive open online course - Wikipedia](https://en.wikipedia.org/wiki/Massive_open_online_course)
- ---
- > The brain grows most by getting questions wrong, not right. #quote
- > As long as we embrace struggle and mistakes, we can learn anything. #quote #Idea
- ***References***
	- ![image.png](../assets/image_1666753114705_0.png)
	- https://www.khanacademy.org/college-careers-more/talks-and-interviews/talks-and-interviews-unit/conversations-with-sal/a/the-learning-myth-why-ill-never-tell-my-son-hes-smart
- ---
-
- [[Flameshot]]screenshot (capture) full screen
  * `Ctrl + c` # Copy to clipboard
  * ***Notes***
  * `Print screen` # Capture screen before `Ctrl + c`
  * ***References***
  * ![image.png](../assets/image_1666656262230_0.png)
- [[Chrome]]move tab's position
  * `Ctrl + Shift + PageDown` # Move tabs right
  * ***References***
  * ![image.png](../assets/image_1666663075999_0.png)
  * ![image.png](../assets/image_1666663189536_0.png) 
  * https://support.google.com/chrome/answer/157179?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Ctab-window-shortcuts%2Cmouse-shortcuts
  * https://superuser.com/questions/629432/keyboard-shortcuts-to-arrange-chrome-tabs-on-windows
- [[Markdown]]Comment
  * between `<!--` and `-->`
  * ***References***
  * ![image.png](../assets/image_1666672033870_0.png)
  * ![image.png](../assets/image_1666672446082_0.png) 
  * https://github.com/yaoniplan/note/blob/5cf3fb4fb65540ac253d217e396f107fa131d7df/README.md
  * https://gist.github.com/jonikarppinen/47dc8c1d7ab7e911f4c9
  ---
- #### Commit message rules in Git
    - Separate subject from body with a blank line
    - Limit the subject line to 50 characters
    - Capitalize the subject line
    - Do not end the subject line with a period
    - Use the imperative mood in the subject line
    - Wrap the body at 72 characters
    - Use the body to explain what and why vs. how
- ***Notes***
    - `git commit -m 'foo'` # Write the subject line
    - `git commit --amend` # Write the body
- ***References***
    - ![image.png](../assets/image_1666685073963_0.png)
    - https://cbea.ms/git-commit/
- ---
- [[Symbol]]Period `.`
  * ***Notes***
  * `.` # In computing, it is called a **dot**
  * ***References***
  * ![image.png](../assets/image_1666687447502_0.png)
  * ![image.png](../assets/image_1666688031364_0.png)
  * [Full stop - Wikipedia](https://en.wikipedia.org/wiki/Full_stop)
  ---
-
- [[HTML]]Cascading Style Sheets `CSS`
  * ***References***
  * ![image.png](../assets/image_1666564175640_0.png)
  * [HTML Styles CSS](https://www.w3schools.com/html/html_css.asp)
- [[HTML]]CSS Inline
  ```html
  <h1 style="color:red;">Hello Yaoniplan</h1>
  ```
  * ***References***
  * ![image.png](../assets/image_1666566786973_0.png)
- [[HTML]]CSS Internal
  ```html
  <head>
  <style>
  body {background-color:powderblue;}
  h1 {color:red;}
  p {color:red;}
  </style>
  </head>
  <body>
  <h1>Hello Yaoniplan</h1>
  <p>Yaoniplan</p>
  </body>
  ```
  * ***References***
  * ![image.png](../assets/image_1666567690501_0.png)
- [[HTML]]CSS External
  * index.html
  ```html
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello Yaoniplan</h1>
    <p>Yaoniplan</p>
  </body>
  ```
  * styles.css
  ```css
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
  * ***References***
  * ![image.png](../assets/image_1666568716621_0.png)
- [[HTML]]CSS Colors Fonts Sizes
  ```html
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
    <h1>Hello Yaoniplan</h1>
    <p>Yaoniplan.</p>
  </body>
  ```
  * ***References***
  * ![image.png](../assets/image_1666569668888_0.png)
- [[HTML]]CSS Border
  ```css
  p {
    border:2px solid powderblue;
  }
  ```
  * ***References***
  * ![image.png](../assets/image_1666570686855_0.png)
- [[HTML]]CSS Padding
  ```css
  p {
    border:2px solid powderblue;
    padding:30px;
  }
  ```
  * ***Notes***
  * `padding` # a space between the text and the border
  * ***References***
  * ![image.png](../assets/image_1666571237516_0.png)
- [[HTML]]CSS Margin
  ```css
  p {
    border:2px solid powderblue;
    margin:50px;
  }
  ```
  * ***Notes***
  * `margin` # a space outside the border
  * ***References***
  * ![image.png](../assets/image_1666571804596_0.png)
- [[HTML]]CSS External Link
  ```html
  <link rel="stylesheet" href="https://w3schools.com/html/styles.css">
  ```
  * or
  ```html
  <link rel="stylesheet" href="/html/styles.css">
  ```
  * or
  ```html
  <link rel="stylesheet" href="styles.css">
  ```
  * ***References***
  * ![image.png](../assets/image_1666572922562_0.png)
  * ![image.png](../assets/image_1666572949325_0.png)
  * ![image.png](../assets/image_1666573005144_0.png)
- I will write an extension (e.g. linux commands) of google chrome. #Idea
-- [[HTML]]Superscripted `<sup>`
  ```html
  This is <sup>superscripted</sup> text (e.g. WWW<sup>[1]</sup>)
  ```
  * ***References***
  * ![image.png](../assets/image_1666477080431_0.png)
- [[HTML]]Abbreviation `<abbr>`
  ```html
  The <abbr title="World Health Organization">WHO</abbr> was founded in 1948
  ```
  * ***References***
  * ![image.png](../assets/image_1666479026369_0.png)
- [[HTML]]Address `<address>`
  ```html
  <address>
  Written by Yaoniplan<br>
  Visit us at:<br>
  Github.com/yaoniplan<br>
  Fuzhou, Jiangxi<br>
  China
  </address>
  ```
  * ***References***
  * ![image.png](../assets/image_1666480513032_0.png)
- [[HTML]]Comments
  ```html
  <!-- Write your comments here -->
  ```
  * ***References***
  * ![image.png](../assets/image_1666482172592_0.png)
- [[HTML]]Colors background
  ```html
  <h1 style="background-color:Tomato;">Hello Yaoniplan</h1>
  ```
  * ***References***
  * ![image.png](../assets/image_1666487827081_0.png)
- [[HTML]]Colors text
  ```html
  <h3 style="color:Tomato;">Hello Yaoniplan</h3>
  ```
  * ***References***
  * ![image.png](../assets/image_1666488334965_0.png)
- [[HTML]]Colors border
  ```html
  <h1 style="border:2px solid Tomato;">Hello Yaoniplan</h1>
  ```
  * ***References***
  * ![image.png](../assets/image_1666489352664_0.png)
- [[HTML]]Colors RGB
  ```html
  <h1 style="background-color:rgb(255, 0, 0);">Hello Yaoniplan</h1>
  ```
  * ***Notes***
  * `255` `0` # intensity (between 0 and 255) of the color
  * `rgb(255, 0, 0)` # rgb(red, green, blue)
  * `rgb(0, 0, 0)` # black
  * `rgb(255, 255, 255)` # white
  * ***References*** 
  * ![image.png](../assets/image_1666492616642_0.png) 
  * ![image.png](../assets/image_1666490508059_0.png)
  * [HTML RGB and RGBA Colors](https://www.w3schools.com/html/html_colors_rgb.asp)
- [[HTML]]Colors RGBA
  ```html
  <h1 style="background-color:rgba(255, 0, 0, 0.0);">Hello Yaoniplan</h1>
  ```
  * ***Notes***
  * `a` # alpha
  * `0.0` # the opacity of the color
  * `1.0` # not transparent at all
  * ***References***
  * ![image.png](../assets/image_1666495735665_0.png) 
  * ![image.png](../assets/image_1666495598796_0.png)
  * [HTML RGB and RGBA Colors](https://www.w3schools.com/html/html_colors_rgb.asp)
- [[HTML]]Colors HEX
  ```html
  #rrggbb
  ```
  * ***Notes***
  * `HEX` # Hexadecimal
  * `rr` # red
  * `gg` # green
  * `bb` # blue
  * `00` `ff` # between 00 and ff (same as decimal 0-255)
  * ***References***
  * ![image.png](../assets/image_1666497331311_0.png)
  * ![image.png](../assets/image_1666497547737_0.png) 
  * [HTML HEX Colors](https://www.w3schools.com/html/html_colors_hex.asp)
- [[HTML]] Declaration
  ```html
  <!DOCTYPE html>
  ```
  * ***Notes***
  * `<!DOCTYPE html>` # Declaration for HTML5
  * ***References***
  * ![image.png](../assets/image_1666393489743_0.png)
  * [HTML Basic](https://www.w3schools.com/html/html_basic.asp)
- [[HTML]] Heading
  ```html
  <h1>This is heading 1</h1>
  ```
  * ***Notes***
  * `h` # Heading
  * `<h1>` # Heading 1 tag
  * ***References***
  * ![image.png](../assets/image_1666394930480_0.png)
  * ![image.png](../assets/image_1666395000340_0.png)
  * [HTML Basic](https://www.w3schools.com/html/html_basic.asp)
- [[HTML]] Paragraph
  ```html
  <p>This is a paragraph.</p>
  ```
  * ***Notes***
  * `p` # Paragraph
  * ***References***
  * ![image.png](../assets/image_1666395408793_0.png)
  * ![image.png](../assets/image_1666395455138_0.png)
  * [HTML](https://www.w3schools.com/html/html_basic.asp)
- [[HTML]] Link
  ```html
  <a href="https://github.com/yaoniplan/note">yaoniplan</a>
  ```
  * ***Notes***
  * `a` # anchor
  * `href` # hyperlink reference
  * ***References***
  * ![image.png](../assets/image_1666396520740_0.png)
  * ![image.png](../assets/image_1666396576533_0.png)
  * ![image.png](../assets/image_1666396956767_0.png) 
  * [Links and Images | The Odin Project](https://www.theodinproject.com/lessons/foundations-links-and-images)
- [[HTML]] Image
  ```html
  <img src="https://github.com/yaoniplan/note/raw/39392a2f4d5cae08e3cc1751b04c59b6bef776cb/assets/dark_1662509469645_0.jpg" alt="wallpaper_dark.jpg">
  ```
  * ***Notes***
  * `img` # image
  * `src` # source
  * `alt` # alternative text
  * ***References***
  * ![image.png](../assets/image_1666400341164_0.png) 
  * ![image.png](../assets/image_1666399686004_0.png)
  * ![image.png](../assets/image_1666399848043_0.png)
  * ![image.png](../assets/image_1666399906243_0.png)
  * [HTML Basic](https://www.w3schools.com/html/html_basic.asp)
  * [Links and Images | The Odin Project](https://www.theodinproject.com/lessons/foundations-links-and-images)
- [[HTML]] A line break
  ```html
  <p>This is a <br> paragraph with a line break.</p>
  ```
  * ***Notes***
  * `br` # break
  * ***References***
  * ![image.png](../assets/image_1666401977852_0.png) 
  * ![image.png](../assets/image_1666401868733_0.png)
  * [HTML Elements](https://www.w3schools.com/html/html_elements.asp)
- [[HTML]] Attribute `name="value"`
  * ***References***
  * ![image.png](../assets/image_1666402674460_0.png)
  * ![image.png](../assets/image_1666403177384_0.png)
  * ![image.png](../assets/image_1666403235193_0.png)
  * ![image.png](../assets/image_1666403284987_0.png)
  * ![image.png](../assets/image_1666403326940_0.png)
  * ![image.png](../assets/image_1666403360953_0.png)
  * ![image.png](../assets/image_1666403407739_0.png)
  * ![image.png](../assets/image_1666403446057_0.png)
  * ![image.png](../assets/image_1666403570721_0.png)
  * ![image.png](../assets/image_1666403656144_0.png)
  * [HTML Attributes](https://www.w3schools.com/html/html_attributes.asp)
- [[HTML]] Horizontal rule `hr`
  * ***References***
  * ![image.png](../assets/image_1666406444643_0.png)
  * ![image.png](../assets/image_1666406582453_0.png)
  * [HTML Paragraphs](https://www.w3schools.com/html/html_paragraphs.asp)
- [[HTML]] Style attribute
  ```html
  <tagname style="property:value;">
  ```
  * ***Notes***
  * `property` # a CSS property
  * `value` # a CSS value
  * ***References***
  * ![image.png](../assets/image_1666409220190_0.png)
  * ![image.png](../assets/image_1666409430125_0.png)
  * ![image.png](../assets/image_1666409491677_0.png)
  * ![image.png](../assets/image_1666409560795_0.png)
  * ![image.png](../assets/image_1666409632478_0.png)
  * ![image.png](../assets/image_1666409699480_0.png)
  * ![image.png](../assets/image_1666409752965_0.png)
  * ![image.png](../assets/image_1666409815611_0.png)
  * ![image.png](../assets/image_1666410299641_0.png)
  * ![image.png](../assets/image_1666410402994_0.png)
  * ![image.png](../assets/image_1666410552101_0.png)
  * ![image.png](../assets/image_1666410695975_0.png)
  * ![image.png](../assets/image_1666410821720_0.png)
- ---
- [[HTML]]Bold `<b>`
  ```html
  <b>This text is bold</b>
  ```
  * ***References***
  * ![image.png](../assets/image_1666424856553_0.png)
- [[HTML]]Strong importance `<strong>`
  ```html
  <strong>This text is important</strong>
  ```
  * ***References***
  * ![image.png](../assets/image_1666425278418_0.png)
- [[HTML]]Italic `<i>`
  ```html
  <i>This text is italic</i>
  ```
  * ***References***
  * ![image.png](../assets/image_1666425677407_0.png)
- [[HTML]]Emphasized `<em>`
  ```html
  <em>This text is emphasized</em>
  ```
  * ***References***
  * ![image.png](../assets/image_1666426815060_0.png)
- [[HTML]]Smaller `<small>`
  ```html
  <small>This is some smaller text</small>
  ```
  * ***References***
  * ![image.png](../assets/image_1666427173977_0.png)
- [[HTML]]Marked `<mark>`
  ```html
  Do not forget to buy <mark>milk</mark> today
  ```
  * ***References***
  * ![image.png](../assets/image_1666427562518_0.png)
- [[HTML]]Deleted `<del>`
  ```html
  My favorite color is <del>blue</del> red
  ```
  * ***References***
  * ![image.png](../assets/image_1666427875545_0.png)
- [[HTML]]Inserted `<ins>`
  ```html
  My favorite color is <del>blue</del> <ins>red</ins>
  ```
  * ***References***
  * ![image.png](../assets/image_1666428519662_0.png)
- [[HTML]]Subscripted `<sub>`
  ```html
  This is <sub>subscripted</sub> text (e.g. H<sub>2</sub>O)
  ```
  * ***References***
  * ![image.png](../assets/image_1666429094516_0.png)
- [[Git]]edit comments
  * `git commit --amend`
  * ***Notes***
  * `git config --global core.editor /usr/bin/vim` # When you have an error about editor (e.g. /bin/nano)
  * ***References***
  * ![image.png](../assets/image_1666430907703_0.png)
  * ![image.png](../assets/image_1666431460568_0.png)
  * ![image.png](../assets/image_1666432411721_0.png)
  * https://stackoverflow.com/questions/52195877/how-can-i-fix-git-commit-error-waiting-for-your-editor-to-close-the-file-wi
-
- [[html]]paragraph element
  * `<p>some text content</p>`
  * ***Notes***
  * `p` # Paragraph
  * `<p>` # Opening tag
  * `</p>` # Closing tag
  * `some text content` # Content
  * ***References***
  * ![image.png](../assets/image_1666313436071_0.png)
  * [Elements and Tags | The Odin Project](https://www.theodinproject.com/lessons/foundations-elements-and-tags)
- [[HTML]]Hyper Text Markup Language `HTML`
  * ***References***
  * ![image.png](../assets/image_1666345355999_0.png)
  * https://www.w3schools.com/html/html_intro.asp
-
- google
  * `time` # last_year-(if there are too few results)last_2_or_3_years-(if changes)last_month
  * `quotation_marks` # ""
  * `excluding_words` # -
  * ***References***
  * https://codinginflow.com/google-programming-questions
- [[linux]]gentoo remove software and dependencies
  * `sudo emerge --depclean picom`
  * ***References***
  * ![image.png](../assets/image_1666232633848_0.png)
  * ![image.png](../assets/image_1666232722653_0.png)
  * [Gentoo Linux amd64 Handbook: Working with Gentoo - Gentoo Wiki](https://wiki.gentoo.org/wiki/Handbook:AMD64/Full/Working#Removing_software)
-
- [[linux]]Command-line interface `CLI`
  * ***References***
  * ![image.png](../assets/image_1666150034002_0.png)
  * [Command-line interface - Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)
-- [[github]]star view
  * `https://github.com/yaoniplan/note/stargazers` # add `/stargazers` to the end of the URL of a repository
  * ***References***
  * ![image.png](../assets/image_1666062998847_0.png) 
  * ![image.png](../assets/image_1666062913702_0.png)
  * https://docs.github.com/en/get-started/exploring-projects-on-github/saving-repositories-with-stars#viewing-who-has-starred-a-repository
- [[symbol]]number sign `#`
  * ***References***
  * ![image.png](../assets/image_1666081147177_0.png)
  * [Number sign - Wikipedia](https://en.wikipedia.org/wiki/Number_sign)
-
- #### Decompress a ".bz2" file
    - `bzcat /usr/share/doc/picom-9.1/picom.sample.conf.bz2 > ~/.config/picom.conf`
- ***References***
    - ![image.png](../assets/image_1665997772943_0.png)
    - ![image.png](../assets/image_1665997788370_0.png)
    - https://wiki.gentoo.org/wiki/Alacritty
- [[symbol]]backslash "\"
  * ***References***
  * ![image.png](../assets/image_1665732959067_0.png)
  * [Backslash - Wikipedia](https://en.wikipedia.org/wiki/Backslash)
-
- [[symbol]]colon `:`
  * ***References***
  * ![image.png](../assets/image_1665626170935_0.png)
  * [Colon (punctuation) - Wikipedia](https://en.wikipedia.org/wiki/Colon_(punctuation))
-- [[symbol]]semicolon or semi-colon `;`
  * ***References***
  * ![image.png](../assets/image_1665537388800_0.png)
  * [Semicolon - Wikipedia](https://en.wikipedia.org/wiki/Semicolon)
- [[symbol]]comma `,`
  * ***References***
  * ![image.png](../assets/image_1665537876655_0.png)
  * [Comma - Wikipedia](https://en.wikipedia.org/wiki/Comma)
- [[symbol]]asterisk `*`
  * ***References***
  * ![image.png](../assets/image_1665538937406_0.png)
  * [Asterisk - Wikipedia](https://en.wikipedia.org/wiki/Asterisk)
- [[symbol]]minus `-`
  * ***References***
  * ![image.png](../assets/image_1665541720364_0.png)
  * [Plus and minus signs - Wikipedia](https://en.wikipedia.org/wiki/Plus_and_minus_signs)
- [[symbol]]greater-than sign `>`
  * ***References***
  * ![image.png](../assets/image_1665543138132_0.png)
  * [Greater-than sign - Wikipedia](https://en.wikipedia.org/wiki/Greater-than_sign)
- [[symbol]]less-than sign `<`
  * ***References***
  * ![image.png](../assets/image_1665543376236_0.png)
  * [Less-than sign - Wikipedia](https://en.wikipedia.org/wiki/Less-than_sign)
- [[symbol]]less than or equal to `<=`
  * ***References***
  * ![image.png](../assets/image_1665544017306_0.png)
  * [关于“小于/等于/大于”的英文缩写](https://blog.csdn.net/weixin_38092213/article/details/85315538)
-- #### Sort by file size in Linux
    - `ls -lS ~/note/pages/`
- ***Notes***
    - `-S` # Size
- ***References***
    - `man ls`
    - ![image.png](../assets/image_1665471462363_0.png)
    - ![image.png](../assets/image_1665471520443_0.png)
- ---
- [[symbol]]percent sign `%`
  * ***References***
  * ![image.png](../assets/image_1665476181854_0.png)
  * [Percent sign - Wikipedia](https://en.wikipedia.org/wiki/Percent_sign)
- [[symbol]]quotation marks `'` `"`
  * ***References***
  * ![image.png](../assets/image_1665479259989_0.png)
  * [Quotation mark - Wikipedia](https://en.wikipedia.org/wiki/Quotation_mark)
- I have a dream to build Iron Man. #Idea
-
- [[Vim]]view the filename
  * `:f` # in normal mode
  * ***References***
  * ![image.png](../assets/image_1665281199847_0.png)
  * ![image.png](../assets/image_1665281355196_0.png)
-- #### I participated in a game about "shiyanlou_100th_floor_2022-09-15_2022-10-14". #Idea
- ---
- #### Symbol wiki
  * https://en.wikipedia.org/wiki/Punctuation
  * https://zh.wikipedia.org/wiki/%E6%A0%87%E7%82%B9%E7%AC%A6%E5%8F%B7
- ---
- #### The punctuation of "round brackets" are "()".
- ***References***
    - ![image.png](../assets/image_1665110038472_0.png)
    - https://en.wikipedia.org/wiki/Bracket
- ---
- [[symbol]]dot `.`
  * ***References***
  * ![image.png](../assets/image_1665046673356_0.png)
  * [Dot - Wikipedia](https://en.wikipedia.org/wiki/Dot)
-- lenovo_gentoo-i3_daily_use_2022-10-05_github_push_test
- [[github]]pull from github
  * `git pull` # If you use "git push" on another computer you must use "git pull" on one computer.
  * ***References***
  * ![image.png](../assets/image_1664942164322_0.png)
- browser_vimium_CSS_for_Vimium_UI_default
  ```
  div > .vimiumHintMarker {
  /* linkhint boxes */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFF785),
    color-stop(100%,#FFC542));
  border: 1px solid #E3BE23;
  }
  
  div > .vimiumHintMarker span {
  /* linkhint text */
  color: black;
  font-weight: bold;
  font-size: 12px;
  }
  
  div > .vimiumHintMarker > .matchingCharacter {
  }
  ```
- [[Vimium]]theme
  * Dracula_Dark https://github.com/dracula/vimium/tree/54a6d0cf56248611755527bf58cc5cf238b68ace
  * ![image.png](../assets/image_1664961382195_0.png) 
  * ![image.png](../assets/image_1664961415188_0.png) 
  * Arc_Dark https://github.com/philc/vimium/issues/3157#issuecomment-476652867
  * ![image.png](../assets/image_1664961172097_0.png) 
  * ![image.png](../assets/image_1664961204963_0.png) 
  * https://qiita.com/nisshy0516/items/0eec4d49c68b39f15716
  * ![image.png](../assets/image_1664960998970_0.png)
  * ![image.png](../assets/image_1664961062555_0.png)
  * simply-dark https://github.com/ysjn/vimium-simply-dark
  * ![image.png](../assets/image_1664961759768_0.png)
  * ![image.png](../assets/image_1664961785006_0.png)
  * rainbow https://github.com/zozonteq/vimium-rgb-theme?ref=codetea.com
  * ![image.png](../assets/image_1664963495932_0.png) 
  * ![image.png](../assets/image_1664963527925_0.png) 
  * ![image.png](../assets/image_1664963273108_0.png)
-
- I am a Chinese who is learning English. #Idea
- And I think English is just a tool for me. #Idea
- ---
- #### The punctuation of slash is `/`
- ***References***
  * ![image.png](../assets/image_1664867356553_0.png)
  * https://en.wikipedia.org/wiki/Slash_(punctuation)
-
- [[usb]]dd iso to usb
  * `sudo dd if=/home/gentoo/Downloads/ubuntu-22.04.1-live-server-amd64.iso of=/dev/sdc bs=4M && sync`
  * ***Notes***
  * `/dev/sdc` # your usb device (`lsblk` can view it)
  * `sync` # If you don't do this, you will get an "Operating System not Found"error.
  * ***References***
  * ![image.png](../assets/image_1664760889380_0.png)
  * ![image.png](../assets/image_1664760950267_0.png)
  * ![image.png](../assets/image_1664761013877_0.png)
  * https://askubuntu.com/questions/372607/how-to-create-a-bootable-ubuntu-usb-flash-drive-from-terminal
- ---
- #### I need to spend a lot of time cleaning the HP laptop (e.g. electric fan, GPU, etc.) because it has a lot of screws. #Idea
- ***References***
    - https://www.youtube.com/watch?v=p7XZNsNLQss
- ---
- [[Vimium]]temporarily disable vimium
  * `i` # ignore all commands of vimium by hitting this key (`i` is `insert`)
  * ***Notes***
  * `esc` # exit and enable vimium by hitting this key
  * ***References***
  * ![image.png](../assets/image_1664681977520_0.png)
  * [philc/vimium: The hacker's browser.](https://github.com/philc/vimium)
- ---
- #### Disable smooth scrolling in Chromium
    - `about:flags`
    - Type "Smooth Scrolling"
- ***Notes***
    - Another way in Gentoo Linux
        - `doas vim /etc/chromium/default`
          ```
          CHROMIUM_FLAGS="--disable-smooth-scrolling"
          ```
- ***References***
    - ![image.png](../assets/image_1664692783031_0.png)
    - https://www.majorgeeks.com/content/page/how_to_enable_or_disable_smooth_scrolling_in_google_chrome.html
- ---
- #### View the current filename (or full path) in #Vim
	- Press `1` followed by `Ctrl-g` # Method one
	- `:set laststatus=2` # Method two
- ***References***
	- ![image.png](../assets/image_1666859889641_0.png)
	- ![image.png](../assets/image_1666859986313_0.png)
	- ![image.png](../assets/image_1664599143765_0.png)
	- ![image.png](../assets/image_1664599170405_0.png)
	- [How can I constantly see the current filename in vim?](https://unix.stackexchange.com/questions/111558/how-can-i-constantly-see-the-current-filename-in-vim)
	- [Code Yarns – How to view full path of file in Vim](https://codeyarns.com/tech/2014-02-13-how-to-view-full-path-of-file-in-vim.html#gsc.tab=0)
- ---
- [[Vim]]paste text
  * `"*p` # enter them in vim normal mode after you copied (e.g. `ctrl + c`) text
  * ***Notes***
  * `p` # please don't enter it in vim normal mode after you copied (e.g. `ctrl + c`) text
  * `ctrl + v` # please don't enter it after you copied (e.g. `ctrl + c`) text
  * ***References***
  * ![image.png](../assets/image_1664614739483_0.png)
  * ![image.png](../assets/image_1664615062591_0.png)
-
- [[linux]]copy files excluding existing ones
  * `sudo cp -rn ~/kaigua/* ~/test` # `-n` is `--no-clobber` (not overwrite)
  * ![image.png](../assets/image_1664501111511_0.png)
  * ![image.png](../assets/image_1664501142412_0.png)
  * `man cp` # have a problem finding a man
- [[linux]] [[gentoo]]ssh iso # enter code in gentoo iso
  ```
  /etc/init.d/sshd start
  passwd root
  ```
- [[Vim]] insert a new line hotkey shotcuts
  * `o` # insert a new line below the cursor (a lowercase letter) (of course, a uppercase letter `O` is above the cursor)
  * ***References***
  * `:help o` # enter it in vim with normal mode.
  * ![image.png](../assets/image_1664507849438_0.png)
  * `vimtutor` # enter it in terminal of shell (But it only has basic commands.)
- * v5.0.0 EFI, linux swap 24GiB, no encryption, /dev/sda, desktop-systemd, gentoo cn mirror, no ~amd64, run mirrorselect, screenfetch, vim, i3-gaps, sddm # install compelete.
  * v4.0.0 EFI, linux swap, no encryption, /dev/sda, systemd, gentoo cn mirror, no ~amd64, run mirrorselect, screenfetch # install compelete.
  * v3.1.0 the first lower link: git clone --depth 1 https://anongit.gentoo.org/git/repo/sync/gentoo.git 100KiB/s
  * v3.0.0 bios, linux swap, no encryption, /dev/sda, openrc, gentoo cn mirror, no ~amd64, run mirrorselect, screenfetch # install compelete.
  * v2.2.0 stage3 # don't need desktop (i3) (It will need a lot of time to compiling rust. So i3 need desktop.)
  * v2.1.0 emerge --verbose sys-kernel/dracut sys-kernel/gentoo-kernel-bin app-arch/zstd # Command Failed
  * v2.0.0 git mirrors: https://mirrors.ustc.edu.cn/gentoo.git; gentoo mirrors: https://mirrors.ustc.edu.cn/gentoo/; not run select gentoo mirrors # speed is faster than 1.
  * v1.0.0 git mirrors: default; gentoo mirrors: https://mirrors.ustc.edu.cn/gentoo/ run select gentoo mirrors # speed is lower, 100KiB/s (lower first link: git clone --depth1 https://anongit.gentoo.org/git/repo/sync/gentoo.git)
  * ***References***
  * https://www.youtube.com/watch?v=I-vu9IHHYLg # install gentoo finish
  * https://github.com/oddlama/gentoo-install
  * v0.0.0 gentooinstall test
- ---
- #### Find and replace strings in Vim
    - `:%s/#//g` # Find "#", and replace it with ""
- ***Notes***
    - `:` # Command-line mode
    - `%` # The entire file
    - `s` # Substitute
    - `:%s/\[\[//g` # Find "[[" and replace it with ""
        - "\" # Add the escape character to solve the problem about pattern not found
- ***References***
    - `:help :range`
    - `:help :substitute`
    - `:help :`
    - https://vim.fandom.com/wiki/Search_and_replace
    - https://stackoverflow.com/questions/19994922/find-and-replace-strings-in-vim-on-multiple-lines
- ---
- #### Use "e.g. " in English
    - `(e.g. marzipan)` # for example marzipan
- ***References***
    - ![image.png](../assets/image_1664535406447_0.png)
    - https://en.wiktionary.org/wiki/e.g.
- ---
- gentoo install v1.3.0 github
  * [gentoo-install-1.3.0.tar.gz](../assets/gentoo-install-1.3.0.tar_1664384309725_0.gz)
  * [gentoo-install-1.3.0.zip](../assets/gentoo-install-1.3.0_1664384326259_0.zip)
- [[computer]] [[linux]] [[gentoo]] I need a computer that can replace the CPU when the computer compiling or building on gentoo. #Idea
- [[i3]] If you don't input any keys with keyboard in terminal.
  * `ctrl + z` # use `ctrl` and `z` hotkey, then you your terminal will fine.
-- #### Partition fdisk in Linux
    - `fdisk /dev/sda`
- ***Notes***
    - `/dev/sda` # A device
        - `fdisk -l` # List
    - fdisk common command
      ```
      m # help
      p # print the partition
      g # create a GPT partition and remove all partitons
      n # new a partition (Partition number: default) (First sector: default; Last sector: +512M (+size{K,M,G,T,P}))
      t # change a partition type
      l # list partitions type (Then enter a number of partition)
      w # write partitions to disk and exit
      ```
- ***References***
    - https://wiki.gentoo.org/wiki/Handbook:AMD64/Installation/Disks#Partitioning_the_disk_with_GPT_for_UEFI
- ---
- [[linux]] time date
  * `sudo date 092823442022` # manually set date (`092823442022` is `2022-09-28 23:44:00`)
  * ***References***
  * ![image.png](../assets/image_1664380138610_0.png)
-
- [[Git]] ignore files
  * `.gitignore` # You can add what you want to ignore in the file.
  * `.git/info/exclude` # You can add what (e.g. `logseq/bak`) you want to ignore in the file. (after you changed directory (e.g. `cd ~/note`) of your repository)
  * ***References***
  * [Git - gitignore Documentation](https://git-scm.com/docs/gitignore)
- [[ssh]] WARNING solve
  * `~/.ssh/known_hosts` # rename it. (for example: `mv ~/.ssh/known_hosts ~/.ssh/known_hosts_old.old`)
  * `ssh user@ipaddress` # enter it. (for example: `ssh root@192.168.10.110`)
  * ***References***
  * https://www.cnblogs.com/johnchain/archive/2013/04/08/3006631.html
- ---
- I'll try gentoo linux. # learn snapshot, backup, restore, software, etc. #Idea
-- #### Cut hair process
    - `hairpin` # pin or hold hair
    - `spray bottle` # make hair wet
    - `hair comb` # straighten hair
    - `hair clipper` # cut length of hair
    - `hair dryer` # dry hair
    - `hair wax` # change hairstyle
    - `hair spray` # fixed hairstyle
    - `target` # not long
- ***References***
    - ![image.png](../assets/image_1664108649594_0.png)
    - ![image.png](../assets/image_1664108736428_0.png)
    - ![images.jpeg](../assets/images1664110760038_0.jpeg) 
    - ![image.png](../assets/image_1664109241797_0.png)
    - ![image.png](../assets/image_1664109399903_0.png)
    - ![image.png](../assets/image_1664109786767_0.png)
    - ![image.png](../assets/image_1664109899855_0.png)
    - ![image.png](../assets/image_1664110122241_0.png)
    - ![download.jpeg](../assets/download_1664110425032_0.jpeg)
    - ![images.jpeg](../assets/images1664110586454_0.jpeg)
    - ![image.png](../assets/image_1664110705455_0.png)
    - https://www.youtube.com/watch?v=gwJyKWtdP2s
- ---
- [[linux]] check SHA256
  * `sha256sum filename` # check SHA256 of filename. (for example: `sha256sum clonezilla-live-3.0.1-8-amd64.iso`)
  * ***References***
  * ![image.png](../assets/image_1663978817179_0.png)
  * `man sha256sum`
  * ![image.png](../assets/image_1663978918136_0.png)
- [[linux]] backup and restore os with clonezilla
  * ![image.png](../assets/image_1664010786020_0.png)
  * ![image.png](../assets/image_1664010868879_0.png)
  * ***References***
  * [# VLOG 28 | 【电脑小技巧】如何使用 CloneZilla再生龍 来备份操作系统？](https://www.youtube.com/watch?v=SoAE2j4zCEE)
  * [# VLOG 37 | 【电脑小技巧】如何使用CloneZilla再生龙来还原操作系统？](https://www.youtube.com/watch?v=DhGuBl5MPNw)
  * [Clonezilla - About](https://clonezilla.org/)
- [[Markdown]] hide section or a collapsed section
  ```
  <details><summary>CLICK ME</summary>
  <p>
  
  You can edit this.
  
  </p>
  </details>
  ```
  * ***References***
  * ![image.png](../assets/image_1664021314006_0.png)
  * https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
- ---
- #### Solve the problem about hunchback
    - Reduce usage of eyes
    - Focus on abdomen and chest
- ***Notes***
    - `abdomen` # Contract
    - `chest` # Up
- ---
- |                                Living                                |                                 Working                                 |
  |:--------------------------------------------------------------------:|:-----------------------------------------------------------------------:|
  |     [Self-improvement](https://www.aliyundrive.com/s/9HSuotnTdj2)    |  [Workplace Competitiveness](https://www.aliyundrive.com/s/ztrSkNX2rcY) |
  | [Computer programming](https://www.aliyundrive.com/s/S4ehaVb2GhL)    |         [Leadership](https://www.aliyundrive.com/s/Y28EmpFgUj4)         |
  |     [Life Management](https://www.aliyundrive.com/s/8GpUYfBebm3)     |       [Graphic Design](https://www.aliyundrive.com/s/f8UgcVDA5Sj)       |
  |   [Emotional Sexuality](https://www.aliyundrive.com/s/jq36xkW12vp)   |       [Human Resources](https://www.aliyundrive.com/s/SmFWT9EpooX)      |
  |   [Health and Wellness](https://www.aliyundrive.com/s/45CMWsbaDc8)   |     [We Media Marketing](https://www.aliyundrive.com/s/R1MFohENhxM)     |
  |    [Dining Gastronomy](https://www.aliyundrive.com/s/WaQYnnMVgkY)    |         [Copywriting](https://www.aliyundrive.com/s/Rng1XpTcNnP)        |
  |    [Business Knowledge](https://www.aliyundrive.com/s/TpDCTAvydFS)   | [Various templates](https://www.aliyundrive.com/s/1xpmpgTDF8t)          |
  |         [Hobbies](https://www.aliyundrive.com/s/G575najSduc)         | [Various research materials](https://www.aliyundrive.com/s/Tr9YqH6ievH) |
  | [Literary accomplishment](https://www.aliyundrive.com/s/wzTwQUVrj2b) |                                                                         |
  * test_merge_and_rename_tables_of_markdown_v1.0.0
- |                                Living                                |                                 Working                                 |
  |:--------------------------------------------------------------------:|:-----------------------------------------------------------------------:|
  |     [Self-improvement](https://www.aliyundrive.com/s/9HSuotnTdj2)    |      [Software Tutorial](https://www.aliyundrive.com/s/tKrX96igcYR)     |
  | [Computer Programming](https://www.aliyundrive.com/s/S4ehaVb2GhL)    |  [Workplace Competitiveness](https://www.aliyundrive.com/s/ztrSkNX2rcY) |
  |     [Life Management](https://www.aliyundrive.com/s/8GpUYfBebm3)     |         [Leadership](https://www.aliyundrive.com/s/Y28EmpFgUj4)         |
  |   [Emotional Sexuality](https://www.aliyundrive.com/s/jq36xkW12vp)   |       [Graphic Design](https://www.aliyundrive.com/s/f8UgcVDA5Sj)       |
  |   [Health and Wellness](https://www.aliyundrive.com/s/45CMWsbaDc8)   |       [Human Resources](https://www.aliyundrive.com/s/SmFWT9EpooX)      |
  |    [Dining Gastronomy](https://www.aliyundrive.com/s/WaQYnnMVgkY)    |     [We Media Marketing](https://www.aliyundrive.com/s/R1MFohENhxM)     |
  |    [Business Knowledge](https://www.aliyundrive.com/s/TpDCTAvydFS)   |         [Copywriting](https://www.aliyundrive.com/s/Rng1XpTcNnP)        |
  |         [Hobbies](https://www.aliyundrive.com/s/G575najSduc)         | [Various templates](https://www.aliyundrive.com/s/1xpmpgTDF8t)          |
  | [Literary accomplishment](https://www.aliyundrive.com/s/wzTwQUVrj2b) | [Various research materials](https://www.aliyundrive.com/s/Tr9YqH6ievH) |
  * test_merge_tables_of_markdown_v1.0.1
-
- #### hair_cut_buy_something_2022-09-22
    - hairpin
    - spray bottle
- ***References***
    - https://www.youtube.com/watch?v=Mbds03Yh3Ts
    - https://www.youtube.com/watch?v=4GgIecNYLmU&list=RDCMUC0gsujnQJe5_Ino9axQBJcg&index=18
    - https://www.youtube.com/watch?v=N05yY9EwOOQ
- #### Select server automatically in Clash
    - `vim ~/.config/clash/config.yaml`
      ```yaml
      - name: "auto"
        type: url-test
        proxies:
          - ss1
        url: 'http://www.gstatic.com/generate_204'
        interval: 300
      ```
- ***Notes***
    - `ss1` # Replace it with other proxy
    - ![image.png](../assets/image_1663755770681_0.png)
    - ![image.png](../assets/image_1663755987926_0.png)
    - ![image.png](../assets/image_1663756259813_0.png)
    - ![image.png](../assets/image_1663756612709_0.png)
- ***References***
    - https://github.com/Hackl0us/SS-Rule-Snippet
    - https://cdn.jsdelivr.net/gh/Hackl0us/SS-Rule-Snippet@master/LAZY_RULES/clash.yaml
- >There is no tiger in the mountain, the monkey is the king. #quote
-- [[linux]] check time date
  * `date` # You can see local time.
  * `timedatectl` # You can see detailed information about time.
  * ***References***
  * ![image.png](../assets/image_1663557676224_0.png)
  * ![image.png](../assets/image_1663557706387_0.png)
- [[python]] name good habits
  * `in English` # You can fluently read english tutorial after a while.
  * `camelCase` # lower camel case
  * `CamelCase` # upper camel case
  * ***References***
  * ![image.png](../assets/image_1663594757809_0.png)
  * ![image.png](../assets/image_1663594795061_0.png)
- [[python]]check class
  * `type()` # This is a function that check class.
  * ***References***
  * ![image.png](../assets/image_1663596554170_0.png)
-
- I think the KanBan function is suitable for recoding a long-term plan. #Idea
  * ![image.png](../assets/image_1663485145438_0.png)
- [[Vim]]copy and paste content from one file to another file
  * `vim to_copy_file to_paste_file` # `to_copy_file`: you want to copy `to_paste_file`: you want to paste
  * `:n` # You will edit the next file after you copy. (You can select where you want to copy via enter "`v`", then you can copy via enter "`y`".)
  * `p` # You can paste it via enter "`p`"
  * ***References***
  * https://www.youtube.com/watch?v=YS9PZJ-c7ps
- #### Check memory in Linux
    - `cat /proc/meminfo | less`
- ***Notes***
    - `proc` # Process
    - `meminfo` # Memory information
- ---
- [[linux]] [[gentoo]] livegui password
  * `sudo passwd` # You can set a root password yourself if you don't know it.
- [[linux]] [[gentoo]] mirrors
  ```
  GENTOO_MIRRORS="https://mirrors.ustc.edu.cn/gentoo/"
  ```
  * You should add it in `/etc/portage/make.conf` file if you are slow.
  * ***Reference***
  * [Gentoo - USTC Mirror Help Doc](https://mirrors.ustc.edu.cn/help/gentoo.html)
-
- #### Hair preparation
    - Hair clip
    - Hair scissors
    - Spray bottle # Make hair wet
- ***References***
    - ![image.png](../assets/image_1663316397076_0.png) 
    - ![image.png](../assets/image_1663318715561_0.png)
- [[Python]] yunsuanfuzuoyou doufangyigekongge zaishuxiebiaodashishi
  * [PEP 8 - Style Guide for Python Code](https://peps.python.org/pep-0008/#whitespace-in-expressions-and-statements)
  * ![image.png](../assets/image_1663202256508_0.png) 
  * ![image.png](../assets/image_1663202031726_0.png)
- [[i3]] mod1
  * `xmodmap` # see mod1, mod2, mod3, mod4, mod5.
  * ***Reference***
  * ![image.png](../assets/image_1663206808416_0.png)
  * [What are Mods2 and 3?](https://www.reddit.com/r/i3wm/comments/a6wk3h/what_are_mods_2_and_3/)
- [[linux]] `mkfs` # `make file system` shengchengwenjianxitong
  * ***Reference***
  * ![image.png](../assets/image_1663210862359_0.png)
- snapshot
  * tool: timeshift(GUI), snapper(CLI)
- [[GitHub]] search for filename in repo
  * `yourfilename in:path` # You can edit "yourfilename". **But you just search for filename in one repo**.
  * `filename:yourfilename` # You can edit "yourfilename". **But you should sign in to GitHub**.
  * ***Reference***
  * [Is it possible to search fot a particular filename on GitHub?](https://stackoverflow.com/questions/18991908/is-it-possible-to-search-for-a-particular-filename-on-github)
-
- [[i3]] i3bar hide
  ```
  bar {
          mode hide
          hidden_state hide
          modifier Mod4
  }
  ```
  * ***Reference***
  * [i3: i3 User's Guide](https://i3wm.org/docs/userguide.html#_display_mode)
  * ![image.png](../assets/image_1663147408189_0.png)
  * ![image.png](../assets/image_1663147434862_0.png)
- [[Git]] status
  * `git status` # see status (Untracked files (track: zhuizong))
  * ![image.png](../assets/image_1663148912229_0.png)
  * ![image.png](../assets/image_1663149140716_0.png)
- [[GitHub]] should allow you to register the same SSH public key for more than one repo. # I test it on September 14, 2022.
  * ***Reference***
  * https://discuss.bitrise.io/t/how-to-add-ssh-public-key-to-multiple-github-repos/15544
  * ![image.png](../assets/image_1663162745808_0.png) 
  * ![image.png](../assets/image_1663162509079_0.png)
-
- [[Vim]] `daw` # `delete a word` (删除光标所在单词)
  * ***参考资料***
  * [VIM 单词删除技巧](https://blog.csdn.net/grey_csdn/article/details/72355735)
- [[Python]] `1 > 2 and not 1 > 3 or 2 > 3` priority (优先)
  * 等价于 `((1 > 2) and (not (1 > 3))) or (2 > 3)`
  * `(False and (not False)) or False` # 算术运算符 > 逻辑运算符
  * `(False and True) or False` # 逻辑运算符 `not`
  * `False or False` # 逻辑运算符 `and`
  * `False` # 逻辑运算符 `or`
  * ***总结***: 算术运算符 > 逻辑运算符(not > and > or)
  * ![image.png](../assets/image_1663036739210_0.png)
-- #### Use Vimium
    - `d` # Down
        - `Space` # In Chromium
    - `yy` # Copy the current URL to the clipboard
        - `C-l C-c` # In Chromium
    - `f` # Feature
        - And then press capital leters
        - Will open a link in a new tab
- ***Notes***
    - `?` # Help
    - Needs
        - hover
- ***References***
    - https://github.com/philc/vimium#keyboard-bindings
    - https://support.google.com/chrome/answer/157179?hl=en&co=GENIE.Platform%3DDesktop#zippy=%2Ctab-window-shortcuts%2Cgoogle-chrome-feature-shortcuts%2Caddress-bar-shortcuts%2Cwebpage-shortcuts%2Cmouse-shortcuts
- ---
- `print("{:5} {:7.2f}".format(fahrenheit, celsius))` 含义
  * `:5` # 5 个字符宽度
  * `.2f` # 四舍五入到小数点后两位
  * `:7.2f` # 7 个字符宽度，四舍五入到小数点后两位
  * ![image.png](../assets/image_1662976716535_0.png)
- [[python]] tuple (元组) # 在一行内定义多个变量
  * `a, b = 45, 54` # 将值 45 分配给变量 a; 将值 54 分配给变量 b
  * ***注意事项***
  * 用 `,` (逗号) 来创建 tuple (元组)
  * 也可用于交换值(如下图所示)
  * ![image.png](../assets/image_1662978803665_0.png)
- [[linux]] `cp 文件 目录` # 注意事项：若目录存在此同名文件，将会覆盖此同名文件
-
- #### Hair style
    - 有光泽
    - 定型
    - 发泥 # 一指节长度(短发)、 增加摩擦感
    - 发蜡 # 抓线条、旁分、中分、头发的束感、一点点光泽
    - 发胶 # 适合刘海容易掉下来的、有定型效果
    - 通用使用方法
        - 1. 指背扣(用量：指甲片) 2. 涂匀手指头(发泥)或手掌(发蜡、发胶) 3. 搓发从发根处中间往上(发泥)或左右搓揉在分线的地方拨开去抓(发蜡)或从侧面梳进去服帖的压下来用手指头把发胶带进去(发胶)
        - 1. 吹头发(八成干) 2. 抓头发(手指伸进去、手指合起来、往上拉、送风2-3次、往前挪) 3. 抓型状(涂抹后，用手捏一捏，捏出纹理来)
        - 1. 蘑菇头(剪成平平的)2. 吹头发(37分，发根位置矫正，加热发根) 3. 发蜡(抹均匀、发根不用刻意去抹带光泽抹太多会塌掉) 4. 塑形(吹风机)和定型喷雾(支撑发根)
        - 1. 分区(顶部(太阳穴到后脑勺)、耳朵侧边、后脑勺) 2. 手推剪 # 韩系短发
        - 1. Pull up on the nose and eyeballs 2. With curling comb and hair clip 3. With hair wax 4. With hair spray
- ***References***
    - https://www.youtube.com/watch?v=kF6LEa6ZRgo&ab_channel=%E9%AB%AE%E5%9E%8B%E5%B8%AB%E8%AB%BE%E6%9B%BC
    - https://www.youtube.com/watch?v=alfCDu6BoGg&ab_channel=%E9%AB%AE%E5%9E%8B%E6%A5%93
    - https://www.youtube.com/watch?v=gLhDOoSX9hM&ab_channel=%E8%8B%B1JIM%E9%80%A0%E5%9E%8B%E5%B8%AB
    - https://www.youtube.com/watch?v=gwJyKWtdP2s&ab_channel=%E9%AB%AE%E5%9E%8B%E5%B8%AB%E8%AB%BE%E6%9B%BC
    - https://www.youtube.com/watch?v=yttpvmbOJGk&ab_channel=%E9%AB%AE%E5%9E%8B%E5%B8%AB%E8%AB%BE%E6%9B%BC
    - https://www.youtube.com/watch?v=NKIC5bZ712Q&list=PLqSYn-L1ve22Tf6SBzOnWayKdpg5HYcWc
- ---
- * ***Git 和 GitHub***
  * `Git` # 版本 (更方便地管理版本)
  * ![uid8504-20190523-1558583904136.png](../assets/uid8504-20190523-1558583904136_1662774293091_0.png)
  * ![image.png](../assets/image_1662775659918_0.png) 
  * `GitHub` # 代码 (更方便地管理代码)
  * ![uid810810-20220819-1660889787761.png](../assets/uid810810-20220819-1660889787761_1662774415456_0.png)
  * ![image.png](../assets/image_1662775083862_0.png)
  * ***Git 的安装***
      * `git` # 查看常用命令(顺便检测是否安装) (在终端输入)
      * ![image.png](../assets/image_1662775964327_0.png)
      * ![image.png](../assets/image_1662776066814_0.png)
  * ***在 GitHub 上创建仓库***
  * ***注册 GitHub 账号***
      * `github.com` # 输入 GitHub 官方网址 (在搜索引擎中)
      * `Sign up` # `Sign up` (注册)
      * 使用邮箱注册，验证通过即可 (在填写完相关信息之后)
  * ***新建代码仓库***
      * ![image.png](../assets/image_1662776941329_0.png)
      * ![image.png](../assets/image_1662777104072_0.png)
  * ***添加 SSH 关联授权***
      * `ssh-keygen` # 生成公钥私钥 (在终端输入，并按几次回车)
      * ![image.png](../assets/image_1662810634923_0.png)
      * `cat ~/.ssh/id_rsa.pub` # 连接公钥文件并打印输出 (选中后，`ctrl + shift + c` (复制))
      * 在 GitHub 上添加公钥 (Title (标题) (你可自定义), Key (钥匙) (粘贴刚才复制的公钥))
      * ![image.png](../assets/image_1662811374615_0.png)
      * ![image.png](../assets/image_1662811627030_0.png)
      * ![image.png](../assets/image_1662811691392_0.png)
      * ![image.png](../assets/image_1662812588311_0.png) 
      * `git clone git@github.com:yaoniplan/Demo.git` # 将远程仓库克隆到本地
      * ![image.png](../assets/image_1662812957991_0.png) 
      * `ls -al` # 以列表的形式列出所有文件 (在切换到 Demo 目录后) (出现 .git 目录即表示处于 Git 版本管理下)
      * ![image.png](../assets/image_1662813239250_0.png) 
      * `git config --global user.email "yaoniplan@gmail.com"` # commit 时的 Author 信息 (`yaoniplan@gmail.com` (请填写你注册 GitHub 时的邮箱))
      * `git config --global user.email "yaoniplan"` # commit 时的 Author 信息 (`yaoniplan` (请填写你注册 GitHub 时的账户名))
      * ![image.png](../assets/image_1662814092746_0.png) 
      * ![image.png](../assets/image_1662814401018_0.png) 
  * ***提交代码***
      * `git add .` # `add` (添加) `.`(当前目录) (你可以单独添加某个文件或多个文件) 文件到 index (索引) 
      * `git commit -m 'test'` # `commit` (record changes to the repository) 记录变化到仓库 `-m` (message) 信息 `test` (对变化的描述，你可以自定义)
      * `git push` # `push` (推送) 到远程仓库
      * ![image.png](../assets/image_1662818117496_0.png)
      * ![image.png](../assets/image_1662818410459_0.png)
      * ![image.png](../assets/image_1662818719793_0.png)
-
- ***Python_的流程控制***
  * ***Python_文件的创建和执行***
      * `vim test.py` # 用 vim 打开 test.py 文件 (若没有 test.py 文件，则创建并打开 test.py 文件)
      * `python3 test.py` # 用 python3 interpreter (解析器) 执行 test.py 文件
      * ![image.png](../assets/image_1662690636901_0.png)
  * ***流程控制*** # 告诉计算机什么时候该干什么事
  * ***条件判断***
      * ![image.png](../assets/image_1662691211422_0.png)
      * 注意第一行的 `:` (冒号)；第二行的 `space` (空格) (4个空格作为一个缩进)
      * `else` `elif` # `elif: else if` (用来执行更复杂的)
  * ***比较大小游戏***
      * ![uid8504-20190522-1558512042778.jpg](../assets/uid8504-20190522-1558512042778_1662693400270_0.jpg)
      * ![image.png](../assets/image_1662693571033_0.png)
  * ***更多判断***
      * ***嵌套***
      * ![image.png](../assets/image_1662693928850_0.png)
      * ***结合 and 和 or***
      * ![image.png](../assets/image_1662694064562_0.png)
  * ***循环控制*** # 实现功能：重复和自动
      * ***for 循环***
      * ![uid8504-20190604-1559632549800.jpg](../assets/uid8504-20190604-1559632549800_1662695312472_0.jpg)
      * `for` # `for` (对于)
      * `in` # `in` (在……之中)
      * `item` # `item` (每个元素) (你可以自定义，如果你喜欢的话)
      * `for i in namelist` # 对于在 namelist 中的每个元素 (i) 执行从属代码
      * ![image.png](../assets/image_1662696790702_0.png)
      * ![uid8504-20190522-1558514369488.jpg](../assets/uid8504-20190522-1558514369488_1662696852462_0.jpg)
      * ***range() 函数***
      * ***range(x)***
          * `range(10)` # 生成 10 (`x`) 个整数 (从 0 开始)
          * ![image.png](../assets/image_1662709881044_0.png)
      * ***range(a, b)***
          * `range(1, 11)` # 生成 11 - 1 (`b - a`) 个数 (从 1 (`a`) 开始)
          * ![image.png](../assets/image_1662710440411_0.png)
      * ***while 循环***
          * ![uid8504-20190604-1559632814963.png](../assets/uid8504-20190604-1559632814963_1662711803501_0.png)
          * `while` # `while` (当……时)
          * `while a <= 10:` `while` (当……时) (当 a <= 10 时，执行从属代码，否则循环停止)
          * ![image.png](../assets/image_1662712317345_0.png)
          * ![uid8504-20190604-1559633545292.gif](../assets/uid8504-20190604-1559633545292_1662712648249_0.gif)
  * ***区别 (for 循环与 while 循环)***
      * ![uid8504-20190522-1558516464511.png](../assets/uid8504-20190522-1558516464511_1662712801762_0.png)
      * ***break 和 continue***
      * ***break***
          * `break` # `break` (打破) (打破当前循环) (不会打破所有循环)
          * ![image.png](../assets/image_1662715583371_0.png)
      * ***continue***
          * `continue` `continue` (继续) (继续循环的下一次迭代)
          * ![image.png](../assets/image_1662716991038_0.png)
          * ![image.png](../assets/image_1662728736260_0.png)
- [[Git]] 撤销 `git add .`
  * `git reset HEAD`
  * ![image.png](../assets/image_1662701856440_0.png)
  * ***参考资料***
  * ![image.png](../assets/image_1662701948003_0.png)
  * [git 如何取消 add 操作](https://blog.csdn.net/u011442726/article/details/94588440)
-- [[python]] 认识 Python
  * ***进入 Python 开发环境***
      * `python3` # 调用 interpreter (口译员；解释器) 
      * ![image.png](../assets/image_1662597572591_0.png) 
      * `>>> ` # `primary prompt` (主要的提示符)，处于 interactive mode (交互模式)
      * `... ` # `secondary prompt` (辅助的提示符)，因为需要 continuation lines (续行)
      * ![image.png](../assets/image_1662597716912_0.png)
      * `Control-D` `quit()` `exit()` # `exit the interpreter` (退出解释器)
      * ![image.png](../assets/image_1662598335030_0.png)
  * ***第一行代码***
      * `print("Hello World!")` # `print()` (打印函数) `Hello World` (字符串) (用引号括起来) (无论是一对单引号、还是一对双引号，灵活使用)
      * ![image.png](../assets/image_1662599728434_0.png)
  * ***数据类型***
      * `int` # `integer` (整数)
      * `float` # 浮点数 (小数) `3.14 = 0.314 * 10` (小数点可以改变位置，故称浮点数)
      * `Ture` `False` # `bool type` (布尔类型)
      * ![image.png](../assets/image_1662601087310_0.png)
      * `None` # `NoneType` (无类型)
  * ***变量*** 
      * `name = "yaoniplan"`
      * `=` # `equal sign` (等号) `assign a value to variable` (分配一个值给变量)
      * `name` # `variable` (多变的，变量)
      * `"yaoniplan"` # `value` (值)
      * ![image.png](../assets/image_1662603393823_0.png)
  * ***Input() 函数***
      * `ID = input("请输入你的ID：")` # `input()` (输入函数)
      * ![image.png](../assets/image_1662603913293_0.png)
  * ***字符串***
      * `print('"isn\'t it," they said.')`
      * `'...'` `"..."` # `Strings` (字符串) (用引号括起来的就是字符串)
      * `backslashes` (反斜杠) # `escape quotes` ((逃脱，转义)引号)
      * ![image.png](../assets/image_1662605164422_0.png)
      * ***索引***
          * `strings = "yaoniplan"`
          * `strings[0]` # 第一个字符的索引为 0
          * `strings[-1]` # 最后一个 (倒数第一个) 字符的索引为 -1
          * ![image.png](../assets/image_1662606297353_0.png)
      * ***format()***
          * `format()` # 专门用来格式化字符串的函数
          * ***插入数据***
              * `print("你叫{}，今年{}岁了".format(name, age))`
              * ![image.png](../assets/image_1662607910694_0.png) 
              * `"{} {}".format(a, b)` # 等价于 `"{0} {1}".format(a, b)`
              * ![uid8504-20190522-1558507543867.jpg](../assets/uid8504-20190522-1558507543867_1662608357814_0.jpg)
          * ***数字格式化***
              * `print("{:.2f}".format(3.1415926))` # 保留两位小数
              * ![image.png](../assets/image_1662609249336_0.png)
  * ***注释***
      * `# ` # `# ` (井号) 后面的内容 (包括代码) 会被忽略 (适用于单行注释；暂时不需要执行的代码)
      * ![image.png](../assets/image_1662626408710_0.png)
  * ***运算符***
      * ***算术运算符*** # 常用的有 `+ - * / %` (加减乘除余)
          * `a + b` # `+` (加) (a 加上 b)
          * `a - b` # `-` (减) (a 减去 b)
          * `a * c` # `*` (乘) (a 乘以 c)
          * `a / c` # `/` (除) (a 除以 c)
          * `b % a` # `%` (余) (b 除以 a 的余)
          * `a ** b` # `**` (幂) (a 的 b 次幂)
          * `c // b` # `//` (整) (c 除以 b 的整)
          * ![image.png](../assets/image_1662628434899_0.png)
          * ![image.png](../assets/image_1662630052236_0.png) 
      * ***比较运算符*** # 常用于 判断和循环 中
          * `a == b` # `==` (等于) (a 等于 b)
          * `a != b` # `!=` (不等于) (a 不等于 b)
          * `a > c` # `>` (大于) (a 大于 c)
          * `a < c` # `<` (小于) (a 小于 c)
          * `b >= c` # `>=` (大于等于) (b 大于等于 c)
          * `b <= c` # `<=` (小于等于) (b 小于等于 c)
          * ![image.png](../assets/image_1662629342612_0.png)
          * ![image.png](../assets/image_1662630116144_0.png) 
      * ***赋值运算符*** # 主要是为了简写
          * `c = a + b` # `=` (赋值符，等号) (分配一个值给变量) (分配 `a + b` 的值给 `c` 这个变量)
          * `c += a` # `+=` (加法赋值符) (等价于 `c = c + a`)
          * ![image.png](../assets/image_1662637023256_0.png) 
          * `c -= a` # `-=` (减法赋值符) (等价于 `c = c - a`)
          * ![image.png](../assets/image_1662637068759_0.png) 
          * `c *= a` # `*=` (乘法赋值符) (等价于 `c = c * a`)
          * ![image.png](../assets/image_1662637114437_0.png) 
          * `c /= a` # `/=` (除法赋值符) (等价于 `c = c / a `)
          * ![image.png](../assets/image_1662637175901_0.png)
          * `c %= a` # `%=` (余赋值符) (等价于 `c = c % a`)
          * ![image.png](../assets/image_1662637484299_0.png) 
          * `c **= a` # `**=` (幂赋值符) (等价于 `c = c ** a`)
          * ![image.png](../assets/image_1662637530984_0.png) 
          * `c //= a` # `//=` (整赋值符) (等价于 `c = c // a`)
          * ![image.png](../assets/image_1662637588672_0.png)
      * ***逻辑运算符*** 
          * `0` `1` # `0` 代表 False; `1` 代表 True (在逻辑运算中)
          * ![image.png](../assets/image_1662638220344_0.png) 
          * `a and b` # `and` (与) (a 与 b 都为 Ture，则返回 True，否则返回 False)
          * ![image.png](../assets/image_1662638297406_0.png)
          * `a or b` # `or` (或) (a 或 b 为 Ture，则返回 Ture)
          * ![image.png](../assets/image_1662641935907_0.png)
          * `not a` # `not` (非) (a 为 True，则返回 False；否则返回 True)
          * ![image.png](../assets/image_1662642249751_0.png)
- [[linux]] mv directory1 directory2 (solve: Direcroty not empty)
  * `cp -r directory1 directory2` # 递归地复制目录1到目录2
  * `rm -r directory1` # 递归地消除1目录
  * ***注意事项***
  * 产生问题的原因是目录2已经有目录1的同名目录，而 `mv` 命令不能够灵活的变通一下，所以采用 `cp` 和 `rm` 命令来实现功能
  * ***参考资料***
  * [mv: Directory not empty](https://askubuntu.com/questions/269775/mv-directory-not-empty)
  * ![image.png](../assets/image_1662646906956_0.png)
-
- [[linux]] [[arch]]挂载 u 盘
  * ~~`sudo pacman -S udisks2` # 安装 udisks2 (之后再测试是否一定要安装)~~ (经测试不需要安装 udisks2)
  * `mkdir linshi` # 生成目录 (用来挂载的)
  * `sudo mount /dev/sdc1 ~/linshi` # 挂载 `/dev/sdc1` 在 `~/linshi` 下
  * ***参考资料***
  * ![image.png](../assets/image_1662507031034_0.png)
- [[linux]] `chown -R owner:group file`
  * `chown` # change owner (改变拥有者)
  * `-R` # R:recursive (递归的) (应用场景：连同目录及其下的所有文件及目录)
  * `owner` # 用户名 (可使用 `whoami` 在终端中查看)
  * `group` # 组 (一般情况下，与 owner (用户名)一致)
  * `file` # 文件 (linux 一切皆文件 (包括目录，可配合上面的 `-R` 一起使用))
  * ***参考资料***
  * `man chown` # manual (手册) (在终端中查看)
  * [如何更改 linux 文件的拥有者和用户组 (chown 和 chgrp)](https://blog.csdn.net/hudashi/article/details/7797393)
  * ![image.png](../assets/image_1662508864227_0.png)
- wallpaper (2022-09-07)
  * ![dark.jpg](../assets/dark_1662509469645_0.jpg)
  * ![Syu.png](../assets/Syu_1662509519457_0.png)
- [[linux]] [[i3]] [[config]] `.config/i3/config` (2022-09-07)
  [config](../assets/_1662511000824_0config)
- my laptop brightness (2022-09-07)
  * `4822` # max_brightness (最大亮度)
  * `2500` # brightness (亮度，目前的)
  * ***参考资料***
  * ![image.png](../assets/image_1662511487799_0.png)
- [[linux]] [[i3]] my i3status `/etc/i3status.conf` (2022-09-07)
  * [i3status.conf](../assets/i3status_1662511857709_0.conf)
  * ![2022-09-07_08-53.png](../assets/2022-09-07_08-53_1662512093531_0.png)
- [[linux]] [[i3]] my environment `/etc/environment` (2022-09-07)
  * [environment](../assets/_1662512962570_0environment)
- my chinese font (2022-09-07)
  * `wqy-microhei` # 安装中文字体 `wqy-microhei` (有效解决中文乱码问题)
  * ***参考资料***
  * ![image.png](../assets/image_1662522157245_0.png)
- [[linux]] `shutdown`
  * `shutdown now` # 关机 (now: 现在) (或者在终端输入 `poweroff` ，如果你喜欢的话)
  * `shutdown -r now` # 重启 (`r`: reboot , now: 现在) (或者在终端输入 `reboot`，如果你喜欢的话)
- >实践是检验真理的唯一标准 #quote
  
  * 实践就像是编程里的 coding (写代码)
  * ![image.png](../assets/image_1662537099989_0.png)
- Python 新手入门课，二刷中……
- Linux 目录操作
  * `ls` # `list` (列出) (列出当前目录下的文件及目录)
  * ![image.png](../assets/image_1662539418940_0.png)
  * `cd` # `change directory` (切换目录) (切换到其他目录下)
  * ![image.png](../assets/image_1662539640136_0.png)
      * ***快捷操作***
          * `cd ..` # `..` (上一级) (切换到上一级目录)
          * ![image.png](../assets/image_1662539996298_0.png)
          * `cd -` # `-` (上一次) (切换到上一次所在目录) (效果：在最近的两次目录中无限循环)
          * ![image.png](../assets/image_1662540351610_0.png)
          * `cd ~` # `~` (/home/your_owner_name) (切换到 /home 目录下的当前用户名的目录下)
          * ![image.png](../assets/image_1662540683561_0.png)
          * `cd /` # `/` (根目录) (切换到根目录下)
          * ![image.png](../assets/image_1662540822594_0.png)
      * ***绝对路径***
          * `pwd` # `print working directory` (打印工作中的路径)
          * ![image.png](../assets/image_1662541174560_0.png)
          * `cd /home/f/kaigua/Python_新手入门课` # 切换到该目录下 (无论你在哪个目录) (记补全或降低输入错误可以使用 Tab 键补全)
          * ![image.png](../assets/image_1662541562549_0.png)
      * ***新建目录***
          * `mkdir linshi` # `make directory` (制作目录) (制作一个名叫 linshi 的目录)
          * ![image.png](../assets/image_1662541885247_0.png)
          * `mkdir -p linshi/linshione` # `parents` (父母) (制作有父母关系的目录) (即使不存在)
          * ![image.png](../assets/image_1662544159407_0.png)
- Linux_文件操作
  * `touch linshi.md` # `touch` (触碰) (触碰 linshi.md) (生成 linshi.md 文件)
  * ![image.png](../assets/image_1662544680193_0.png)
  * `cp linshi.md linshione/linshitwo` # `copy` (复制) (复制 linshi.md 文件到 linshione/linshitwo 目录下)
  * ![image.png](../assets/image_1662550904844_0.png)
  * `cp -r linshi linshione/linshitwo` # `recursive` (递归的) (递归地复制 linshi 目录到 linshione/linshitwo 目录下)
  * ![image.png](../assets/image_1662551477743_0.png)
  * `rm linshi.md` # `remove` (消除) (消除 linshi.md 文件)
  * ![image.png](../assets/image_1662551857050_0.png)
  * `rm -r linshione` # `recursive` (递归的) (递归地消除 linshione 目录及其下所有文件、目录)
  * ![image.png](../assets/image_1662552324575_0.png)
  * `mv linshi.md linshi` # `move` (移动) (移动 linshi.md 文件到 linshi 目录下)
  * ![image.png](../assets/image_1662552751480_0.png)
  * `mv linshi linshione` # `rename` (改名) (改名 linshi 目录为 linshione 目录)
  * ![image.png](../assets/image_1662553039366_0.png)
      * ***查看文件内容***
          * `cat linshi.md` # `concatenate` (连接) (连接 linshi.md 文件并打印到标准输出上)
          * ![image.png](../assets/image_1662553642796_0.png)
          * `cat -n linshi.md` # `number` (编号) (给连接 linshi.md 文件所有输出行编号并打印到标准输出上)
          * ![image.png](../assets/image_1662553953933_0.png)
      * ***编辑文件***
          * ![image.png](../assets/image_1662554163771_0.png)
      * ***帮助命令***
      * `man cat` # `manual pages` (手册页) (查看 cat 命令的手册页)
      * ![image.png](../assets/image_1662554538394_0.png)
      * `cat --help` # `help` (帮助) (显示 cat 命令的帮助)
      * ![image.png](../assets/image_1662554894853_0.png)
      * ![image.png](../assets/image_1662554958627_0.png)
-
- [[linux]] `ls -lh`命令
  * `ls` # list (动词：列出)
  * `-lh` # 参数
  * `l` # list (名词：列表)
  * `h` # human readable (人类可读)
  * ***参考资料***
  * ![image.png](../assets/image_1662426776813_0.png)
- [[linux]] `chmod u+x sleep.py` 命令
  * `chmod` # change mode (切换模式)
  * `u` # user (当前用户)
  * `+x` # 增加 execute (执行) 权限
  * `sleep.py` # 文件名
  * ***参考资料***
  * ![image.png](../assets/image_1662427435091_0.png)
- [[linux]] `/usr/bin` 含义
  * `usr` # unix software resources (unix 软件资源)
  * `bin` # binary (二进制)
  * ***参考资料***
  * ![image.png](../assets/image_1662429208901_0.png)
- [[linux]] `chmod a+x /usr/bin/sleep.py` 命令
  * `a+x` # all (全部) (所有用户和组)
  * ***参考资料***
  * ![image.png](../assets/image_1662430025877_0.png)
- [[Vim]] `o`
  * `o` # 在当前行下方，插入一个新行，并进入编辑模式 (在普通模式下，按 `o` (小写字母))
  * ***参考资料***
  * ![image.png](../assets/image_1662430937293_0.png)
- [[linux]] `~/.zshrc` 含义
  * `~` # 等价于 `/home/你的用户名` (当前用户的用户文件夹)
  * `/` # `/home/你的用户名/` (在这里，指当前目录下)
  * `.` # 隐藏文件 (可以使用 `ls -a` 查看包括隐藏文件的所有文件)
  * `zsh` # shell 是 zsh
  * `rc` # `run commands`
  * ***参考资料***
  * ![image.png](../assets/image_1662432277647_0.png)
- [[linux]] `source ~/.zshrc`
  * `source ~/.zshrc` # 手动运行 `~/.zshrc`
  * ***参考资料***
  * ![image.png](../assets/image_1662432786989_0.png)
- [[linux]] `pid` `ppid` 含义
  * `pid` # p:process (进程)
  * `ppid` # p:parent (父母) p:process (进程)
  * ***参考资料***
  * ![image.png](../assets/image_1662466809085_0.png)
- 测试 csv 转 markdown v1.0.0
  | 关于耀拟计划 & 免责声明               |  |              |  |                    |  |              |
  |---------------------------------------|--|--------------|--|--------------------|--|--------------|
  | - 时间就是金钱，效率就是生命 -        |  |              |  |                    |  |              |
  | 000 - 自我提升                        |  |              |  | 400 - 生活         |  |              |
  | 行动管理                              |  | 阿里云盘链接 |  | 生活管理           |  | 阿里云盘链接 |
  | 时间管理                              |  | 阿里云盘链接 |  | 形象提升           |  | 阿里云盘链接 |
  | 学习效率                              |  | 阿里云盘链接 |  | 健康养生           |  | 阿里云盘链接 |
  | 文笔口才                              |  | 阿里云盘链接 |  | 餐饮美食           |  | 阿里云盘链接 |
  | 思维认知                              |  | 阿里云盘链接 |  | 商业知识           |  | 阿里云盘链接 |
  | 为人处事                              |  | 阿里云盘链接 |  | 情感两性           |  | 阿里云盘链接 |
  | 100 - 幼儿到高中学习资料              |  |              |  | 兴趣爱好           |  | 阿里云盘链接 |
  | 幼儿教育                              |  | 阿里云盘链接 |  | 500 - 文学修养     |  |              |
  | 小学初中教育                          |  | 阿里云盘链接 |  | 人物传记           |  | 阿里云盘链接 |
  | 高中教育                              |  | 阿里云盘链接 |  | 演讲演说           |  | 阿里云盘链接 |
  | 200 - 计算机编程教程                  |  |              |  | 传统国学           |  | 阿里云盘链接 |
  | 计算机基础                            |  | 阿里云盘链接 |  | 600 - 职场相关     |  |              |
  | Python                                |  | 阿里云盘链接 |  | 职场竞争力         |  | 阿里云盘链接 |
  | Web前端                               |  | 阿里云盘链接 |  | 领导能力           |  | 阿里云盘链接 |
  | Android                               |  | 阿里云盘链接 |  | 项目管理           |  | 阿里云盘链接 |
  | 300 - 软件教程                        |  |              |  | 平面设计           |  | 阿里云盘链接 |
  | PPT教程                               |  | 阿里云盘链接 |  | 人力资源           |  | 阿里云盘链接 |
  | Word教程                              |  | 阿里云盘链接 |  | 自媒体营销         |  | 阿里云盘链接 |
  | Excel教程                             |  | 阿里云盘链接 |  | 文案写作           |  | 阿里云盘链接 |
  | PS教程                                |  | 阿里云盘链接 |  | 各种模板           |  | 阿里云盘链接 |
  | PR教程                                |  | 阿里云盘链接 |  | 700 - 各类考证资料 |  |              |
  | 摄影教程                              |  | 阿里云盘链接 |  | 公务员考试         |  | 阿里云盘链接 |
  | 思维导图教程                          |  | 阿里云盘链接 |  | 驾考资料           |  | 阿里云盘链接 |
  | Anki教程                              |  | 阿里云盘链接 |  |                    |  | 阿里云盘链接 |
  | Powered by 凉风习~又一秋! v2021.12.12 |  |              |  |                    |  |              |
- 测试 vsc 转 markdown v1.0.1
  | 关于耀拟计划 & 免责声明               |              |  |                    |              |
  |---------------------------------------|--------------|--|--------------------|--------------|
  | - 时间就是金钱，效率就是生命 -        |              |  |                    |              |
  | 000 - 自我提升                        |              |  | 400 - 生活         |              |
  | 行动管理                              | 阿里云盘链接 |  | 生活管理           | 阿里云盘链接 |
  | 时间管理                              | 阿里云盘链接 |  | 形象提升           | 阿里云盘链接 |
  | 学习效率                              | 阿里云盘链接 |  | 健康养生           | 阿里云盘链接 |
  | 文笔口才                              | 阿里云盘链接 |  | 餐饮美食           | 阿里云盘链接 |
  | 思维认知                              | 阿里云盘链接 |  | 商业知识           | 阿里云盘链接 |
  | 为人处事                              | 阿里云盘链接 |  | 情感两性           | 阿里云盘链接 |
  | 100 - 幼儿到高中学习资料              |              |  | 兴趣爱好           | 阿里云盘链接 |
  | 幼儿教育                              | 阿里云盘链接 |  | 500 - 文学修养     |              |
  | 小学初中教育                          | 阿里云盘链接 |  | 人物传记           | 阿里云盘链接 |
  | 高中教育                              | 阿里云盘链接 |  | 演讲演说           | 阿里云盘链接 |
  | 200 - 计算机编程教程                  |              |  | 传统国学           | 阿里云盘链接 |
  | 计算机基础                            | 阿里云盘链接 |  | 600 - 职场相关     |              |
  | Python                                | 阿里云盘链接 |  | 职场竞争力         | 阿里云盘链接 |
  | Web前端                               | 阿里云盘链接 |  | 领导能力           | 阿里云盘链接 |
  | Android                               | 阿里云盘链接 |  | 项目管理           | 阿里云盘链接 |
  | 300 - 软件教程                        |              |  | 平面设计           | 阿里云盘链接 |
  | PPT教程                               | 阿里云盘链接 |  | 人力资源           | 阿里云盘链接 |
  | Word教程                              | 阿里云盘链接 |  | 自媒体营销         | 阿里云盘链接 |
  | Excel教程                             | 阿里云盘链接 |  | 文案写作           | 阿里云盘链接 |
  | PS教程                                | 阿里云盘链接 |  | 各种模板           | 阿里云盘链接 |
  | PR教程                                | 阿里云盘链接 |  | 700 - 各类考证资料 |              |
  | 摄影教程                              | 阿里云盘链接 |  | 公务员考试         | 阿里云盘链接 |
  | 思维导图教程                          | 阿里云盘链接 |  | 驾考资料           | 阿里云盘链接 |
  | Anki教程                              | 阿里云盘链接 |  |                    | 阿里云盘链接 |
- 测试 csv 转 markdown v1.0.2
  |                                       |  |                    |
  |:-------------------------------------:|--|:------------------:|
  | 000 - 自我提升                        |  | 400 - 生活         |
  | 行动管理                              |  | 生活管理           |
  | 时间管理                              |  | 形象提升           |
  | 学习效率                              |  | 健康养生           |
  | 文笔口才                              |  | 餐饮美食           |
  | 思维认知                              |  | 商业知识           |
  | 为人处事                              |  | 情感两性           |
  | 100 - 幼儿到高中学习资料              |  | 兴趣爱好           |
  | 幼儿教育                              |  | 500 - 文学修养     |
  | 小学初中教育                          |  | 人物传记           |
  | 高中教育                              |  | 演讲演说           |
  | 200 - 计算机编程教程                  |  | 传统国学           |
  | 计算机基础                            |  | 600 - 职场相关     |
  | Python                                |  | 职场竞争力         |
  | Web前端                               |  | 领导能力           |
  | Android                               |  | 项目管理           |
  | 300 - 软件教程                        |  | 平面设计           |
  | PPT教程                               |  | 人力资源           |
  | Word教程                              |  | 自媒体营销         |
  | Excel教程                             |  | 文案写作           |
  | PS教程                                |  | 各种模板           |
  | PR教程                                |  | 700 - 各类考证资料 |
  | 摄影教程                              |  | 公务员考试         |
  | 思维导图教程                          |  | 驾考资料           |
  | Anki教程                              |  |                    |
- 测试 csv 转 markdown v1.0.3
  |                                       |                    |
  |:-------------------------------------:|:------------------:|
  | **000 - 自我提升**                    | **400 - 生活**     |
  | 行动管理                              | 生活管理           |
  | 时间管理                              | 形象提升           |
  | 学习效率                              | 健康养生           |
  | 文笔口才                              | 餐饮美食           |
  | 思维认知                              | 商业知识           |
  | 为人处事                              | 情感两性           |
  | **100 - 幼儿到高中学习资料**          | 兴趣爱好           |
  | 幼儿教育                              | **500 - 文学修养** |
  | 小学初中教育                          | 人物传记           |
  | 高中教育                              | 演讲演说           |
  | **200 - 计算机编程教程**              | 传统国学           |
  | 计算机基础                            | **600 - 职场相关** |
  | Python                                | 职场竞争力         |
  | Web前端                               | 领导能力           |
  | Android                               | 项目管理           |
  | **300 - 软件教程**                    | 平面设计           |
  | PPT教程                               | 人力资源           |
  | Word教程                              | 自媒体营销         |
  | Excel教程                             | 文案写作           |
  | PS教程                                | 各种模板           |
  | PR教程                                |**700 - 各类考证资料**|
  | 摄影教程                              | 公务员考试         |
  | 思维导图教程                          | 驾考资料           |
  | Anki教程                              |                    |
- 测试 csv 转 markdown v1.0.4
  |                                                         |                                                     |                                                     |
  |:-------------------------------------------------------:|:---------------------------------------------------:|:---------------------------------------------------:|
  |**------ 自我提升 ------**                               |**------ 软件教程 ------**                           |  **------ 文学修养 ------**                         |                  
  |[行动管理](https://www.aliyundrive.com/s/keRVra9mtad)    |[PPT](https://www.aliyundrive.com/s/gS47adUV8do)     |[人物传记](https://www.aliyundrive.com/s/fH3e5fLTT9N)|                  
  |[时间管理](https://www.aliyundrive.com/s/1nNrmzRwHJQ)    |[World](https://www.aliyundrive.com/s/tDquMiTfYah)   |[演讲演说](https://www.aliyundrive.com/s/b7YY5fHFQcT)|                  
  |[学习效率](https://www.aliyundrive.com/s/6vgBZbNuE7B)    |[Excel](https://www.aliyundrive.com/s/AHKhn3jKyj9)   |[传统国学](https://www.aliyundrive.com/s/u7RLQphh4kK)|                  
  |[文笔口才](https://www.aliyundrive.com/s/mVzUeFPvynk)    |[PS](https://www.aliyundrive.com/s/QJ24Zzd593T)      |  **------ 职场相关 ------**  |                  
  |[思维认知](https://www.aliyundrive.com/s/i6Ljb7UBpfj)    |[PR](https://www.aliyundrive.com/s/69Uz6AP8bib)      |[职场竞争力](https://www.aliyundrive.com/s/ztrSkNX2rcY)|                  
  |[为人处事](https://www.aliyundrive.com/s/kqnPnRzRe87)    |[摄影](https://www.aliyundrive.com/s/ZsDyJejTf6q)    |[领导能力](https://www.aliyundrive.com/s/Y28EmpFgUj4)|                  
  |**- 幼儿到高中学习资料 -**                               |[思维导图](https://www.aliyundrive.com/s/nGYJMkFcvb4)|[项目管理](https://www.aliyundrive.com/s/Nc9pEyK4Yxz)|                  
  |[幼儿教育](https://www.aliyundrive.com/s/oAsnmMRy5Wr)    |[Anki](https://www.aliyundrive.com/s/VzoUTZn2Ref)    |[平面设计](https://www.aliyundrive.com/s/f8UgcVDA5Sj)|                    
  |[小学初中教育](https://www.aliyundrive.com/s/ouqWtmdtRyK)|**-------- 生活 --------**                           |[人力资源](https://www.aliyundrive.com/s/SmFWT9EpooX)| 
  |[高中教育](https://www.aliyundrive.com/s/a9UyTthzaRS)    |[生活管理](https://www.aliyundrive.com/s/8GpUYfBebm3)|[自媒体营销](https://www.aliyundrive.com/s/R1MFohENhxM)| 
  |**--- 计算机编程教程 ---**                               |[形象提升](https://www.aliyundrive.com/s/7bLqTKrRGEW)|[文案写作](https://www.aliyundrive.com/s/Rng1XpTcNnP)| 
  |[计算机基础](https://www.aliyundrive.com/s/k7BcpiMbpgQ)  |[健康养生](https://www.aliyundrive.com/s/45CMWsbaDc8)|[各种模板](https://www.aliyundrive.com/s/1xpmpgTDF8t)| 
  |[Python](https://www.aliyundrive.com/s/XmEsDZd9HoT)      |[餐饮美食](https://www.aliyundrive.com/s/WaQYnnMVgkY)|**---- 各类考证资料 ----**| 
  |[Web前端](https://www.aliyundrive.com/s/WwaxvMHe4Bh)     |[商业知识](https://www.aliyundrive.com/s/TpDCTAvydFS)|[公务员考试](https://www.aliyundrive.com/s/akGhEbsPr3q)| 
  |[Android](https://www.aliyundrive.com/s/h8L4uCjQCgM)     |[情感两性](https://www.aliyundrive.com/s/jq36xkW12vp)|[驾考资料](https://www.aliyundrive.com/s/Cwmk6zsE3xT)| 
  |                                                         |[兴趣爱好](https://www.aliyundrive.com/s/G575najSduc)|                      |
-- [[python]]文件名、文件夹名命名约定
  * `hello_world.py` # 文件名命名约定
  * ***注意事项***
  * `hello` `world` # 小写字母
  * `_` # 下划线代替空格
  * ***参考资料***
  * ![image.png](../assets/image_1662343732619_0.png)
  * [Python编程：从入门到实践 (第2版) .pdf](https://www.aliyundrive.com/drive/folder/61b869cf0c818f983d684373a64fbabd93f5ca7c)
- ---
- #### 从他人对大学生活的吐槽中，了解了 #Idea
    - 破一本，强制的活动、班会、会议 # 没有任何意义，除了浪费精力
- ***References***
    - ![image.png](../assets/image_1662357498836_0.png)
    - https://www.chongbuluo.com/forum.php?mod=viewthread&tid=11022
- ---
- [[Git]]查看提交历史 # 应用场景：查看 commit sha 值
  * `git log` # 查看提交历史
  * ***参考资料***
  * ![image.png](../assets/image_1662365890298_0.png) 
  * [Git - 查看提交历史](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2)
- ---
- #### Reset to a previous version
	- `git log`
	- `git reset --hard 8172b02`
	- `git push -f`
- ***Notes***
    - `git log` # Show commit logs (e.g. 8172b02..., e3bd5dd..., etc)
    - `git reset --hard 8172b02` # Revert to the 8172b02... version
    - `-f` # Force
	- `git reflog` # Show all commit logs (including discarded version)
- ***References***
	- ![image.png](../assets/image_1662372438709_0.png)
	- ![image.png](../assets/image_1662382474722_0.png)
	- https://blog.csdn.net/yxlshk/article/details/79944535
	- https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192
- ---
- [[Vim]]删除空行
  * `:g/^$/d`
  * ***参考资料***
  * [vim删除空行](https://www.jianshu.com/p/61b75308d63a)
- 英语 `, etc.` (等等) 使用
  * `comic1, comic2, etc.` # 漫画1, 漫画2, 等等。
  * ***注意事项***
  * `comic1, comic2` # 两个同类事物 (你可以自定义两个及以上)
  * `, etc.` # 等等，`tec` 前要有 `, ` (逗号空格), 其后要有 `.` (英文句点)
  * ***参考资料***
  * ![image.png](../assets/image_1662286718634_0.png)
  * ![image.png](../assets/image_1662286755402_0.png)
  * [学术英语：关于such as, for example, etc., and so on, i.e., 和e.g.的使用](https://blog.csdn.net/Anne033/article/details/121046075)
-- 断电半小时(今年断电次数有点多)，考虑备用能源(发电机……) in the future #Idea
-- [[linux]] `command [-options] [parameter]`
  * `command [-options] [parameter]` # 终端命令格式
  * ***注意事项***
  * `command` # 命令名
  * `[]` # 可选 (大白话: 可有可无)
  * `options` # 选项
  * `parameter` # 参数
  * ***参考资料***
  * ![image.png](../assets/image_1662090282113_0.png)
  * [017 17-Linux命令-05-终端命令格式.mp4](https://www.aliyundrive.com/s/XmEsDZd9HoT/folder/61b86a0b8f36617c43f64d24a0384f163f0c5d08)
- [[linux]] `ip address | grep inet`
  * `ip address | grep inet` # 查看网卡 ip 地址
  * ***注意事项***
  * `ip address` # 网卡配置信息
  * `|` # pipe (管道) (一个命令的输出，作为另一个命令的输入。大白话：将左边命令显示出来的结果，用右边命令来显示)
  * `grep` # 文本搜索 (相当于网页浏览器的 `ctrl + f`)
  * `inet` # grep 搜索的文本
  * ***参考资料***
  * ![image.png](../assets/image_1662102184320_0.png)
  * ![image.png](../assets/image_1662102409468_0.png)
  * [045 45-Linux命令-04-ifconfig查询网卡信息.mp4](https://www.aliyundrive.com/s/XmEsDZd9HoT/folder/61b86a0b8f36617c43f64d24a0384f163f0c5d08)
-- 2022-09-01，yaoniplan 完全转移更新平台(从腾讯文档转移至github)
  * ***参考资料***
  * [耀拟计划-v2.1.06-2022-09-01历史记录.zip - lanzou.com](https://wwd.lanzouy.com/iOIdp0arhxle)
  * [耀拟计划-v2.1.06-2022-09-01历史记录.zip - github.ocm](../assets/耀拟计划-v2.1.06-2022-09-01历史记录_1662006139225_0.zip) 
  * [耀拟计划-v2.1.06.csv - github.com](../assets/耀拟计划-v2.1.06_1662006018132_0.csv)
  * [耀拟计划-v2.1.06-更新日志.csv - github.com](../assets/耀拟计划-v2.1.06-更新日志_1662006046744_0.csv)
  * ![耀拟计划-v2.1.06.png -github.com](../assets/耀拟计划-v2.1.06_1662006066216_0.png)
  * ![耀拟计划-v2.1.06-更新日志.png - github.com](../assets/耀拟计划-v2.1.06-更新日志_1662006078134_0.png)
  * [耀拟计划-v2.1.06-all.xlsx - github.com](../assets/耀拟计划-v2.1.06-all_1662006096051_0.xlsx)
- >有问题找男人 #quote
  
  * ***参考资料***
  * [[linux]][[man]](手册)命令 # man: manual (手册)
  * [018 18-Linux命令-06-查阅查阅终端命令帮助信息.mp4](https://www.aliyundrive.com/s/XmEsDZd9HoT/folder/61b86a0b8f36617c43f64d24a0384f163f0c5d08)
- [[python]] `x op= expression`
  * `x op= expression` # 简写运算的语法
  * ***注意事项***
  * `x` # 变量名
  * `op` # 运算符 (op: operator)
  * `=` # 赋值
  * `expression` # 表达式
  * `x op= expression` # 等价于 `x = x op expression`
  * ***参考资料***
  * ![image.png](../assets/image_1662033934069_0.png)
  * [Python3 简明教程 - 运算符和表达式](https://www.lanqiao.cn/courses/596/)
-- [[i3]]默认配置文件目录 (2022-08-31)
  * `.config/i3/config` //位于 `/home/你的用户名/` 下面
- * `a = f(1, 2) + g(3, 4)` //参数列表中，在`,` 后面添加一个空格；在运算符周围各添加一个空格
  * ***参考资料***
  * ![image.png](../assets/image_1661913392031_0.png)
- * `# 这是一个注释` //井号 (`#`) 后面跟一个空格，再写注释
  * ***注意事项***
  * `开发人员和维护代码库人员` # 面向人群
  * ***参考资料***
  * ![image.png](../assets/image_1661914095577_0.png)
- 修改已经 `git push` 的 `git commit -m 'beizhu'` 中的 `beizhu`
  * `git commit --amend` # 修改 beizhu (进入到类似 vim 的编辑器操作界面)
  * `git push -f` # 强制 push (在修改了 beizhu 之后) (f: forcce)
-- [[shell]] [[zsh]]快捷键(补充)
  * `ctrl + b` //向左边移动一个字节 (b: back)
  * `ctrl + f` //向右边移动一个字节 (f: forward)
- [[regex]]学习路线 (regex: regular expression) (正则表达式)
  * [Regex Learn - 正则表达式交互课程](https://regexlearn.com/zh-cn/learn "Regex Learn - 正则表达式交互课程")
  * [Regex Crossword](https://regexcrossword.com/ "Regex Crossword")
  *
- 行：是横着的；列：是竖着的
  * ***参考资料***
  * ![image.png](../assets/image_1661832046564_0.png)
- >付出不一定有收获，但是不付出一定没有收获 #quote 
  
  * ***参考资料***
  * [前言 · V2Ray 配置指南|V2Ray 白话文教程](https://toutyrater.github.io/)
- [[linux]]代理配置先用着 clash-for-windows (闭源+广告) ，毕竟代理需求已经实现，先把计算机科学与技术的基础能力提升上去，再去考虑这些问题，***计划下一步：使用 v2ray-core*** (否则只能是被卖了，还在帮他人数钱，并洋洋自得毫不自知) #Idea
-- >xx只有高低之分，没有贵贱之别 #quote
- >展露出强大的实力才能震慑住宵小之辈，但也只能是宵小之辈 #quote
- ---
- #### Decompress a ".tar" file
    - `tar -xf testData5.tar`
- ***Notes***
    - `-x` # Extract
    - `-f` # File
- ***References***
    - `man tar`
    - https://medium.com/secttp/overthewire-bandit-level-12-439f655f6fd5
- ---
- [[symbol]]`{}`大括号(花括号)
  * ***参考资料***
  * [括号 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E6%8B%AC%E5%8F%B7 "括号 - 维基百科，自由的百科全书")
-
- [[Vim]]`:!`命令
  * `:!python oeasy.py` //执行外部命令 `python oeasy.py`
  * ***参考资料***
  * ![image.png](../assets/image_1661653655372_0.png)
-- [[i3]]锁屏
  * `i3lock` //锁定屏幕 (在终端输入)
  * ***注意事项***
  * `bindsym $mod+x exec i3lock` //绑定快捷键 `$mod+x` 终端执行 `i3lock` (当然，你可以绑定快捷键并自定义，如果你喜欢的话)
- 安卓模拟器 (future，有需求再尝试) #Idea
  * anbox
  * waydroid
- [[Logseq]]`crtl + k`检索
  * `ctrl + k` //检索
  * ***注意事项***
  * `Re-index` //Rebuild the graph (目前(2022-08-27)检索前，需要手动重建图，否则最近的更新，检索不出来)
  * ***参考资料***
  * ![image.png](../assets/image_1661588851475_0.png)
- >光年：光在宇宙真空中沿直线传播了**一年时间**所经过的**距离**
  * ***注意事项***
  * 地球上用到的距离单位(毫米、厘米、分米、米、千米、天文单位)用来衡量宇宙空间太小，所以有了光年这个距离单位
  * ***参考资料***
  * [什么是光年？-科普100问-湖北科普网](http://www.hast.org.cn/kpw/201809/t4159176.shtml) #quote
- [[linux]]mkdir命令
  * `mkdir '目录名'` //创建目录
  * ***注意事项***
  * `'目录名'` //用 `'` (单引号) 括起来 (目录名中有空格)(否则，将会生成多个目录)
  * ***参考资料***
  * ![image.png](../assets/image_1661596266791_0.png) 
  * ![image.png](../assets/image_1661596138731_0.png)
- [[linux]]cd `..`
  * `cd ..` //上一级目录
  * ***注意事项***
  * `cd ../note` //进入上一级目录下的 note 目录 (应用场景：在同一个目录下，拥有多个仓库，需要分别进行 git 相关操作)
  * ***参考资料***
  * ![image.png](../assets/image_1661598681302_0.png)
-- [[i3]]开机自启动clash-for-windows软件
  * `exec --no-startup-id cfw` //enable proxy "cfw" (在后台启动 cfw)
  * ***注意事项***
  * `--no-startup-id` //禁用启动通知 (即开机的时候，启动但不在工作区显示窗口)
  * `Silent Start` //开启后台启动 (在 cfw 的 Settings-General 下面，把 `Silent Start` 按钮打开，否则开机可能会显示 cfw 的窗口)
  * ***参考资料***
  * https://i3wm.org/docs/userguide.html#exec
- ---
- #### Set scrachpad in i3
    - `vim ~/.config/i3/config`
      ```
      bindsym Mod1+Shift+space move scratchpad
      bindsym Mod1+space scratchpad show
      for_window [class="^st-256color$"] move scratchpad
      ```
- ***Notes***
    - `move scratchpad` # Move a window to the scratchpad workspace
    - `scratchpad show` # The window will be shown or hidden
- ***References***
    - ![2023-02-03_23:16:41.gif](../assets/2023-02-03_23:16:41.gif)
    - ![2023-01-25_23-10.png](../assets/2023-01-25_23-10.png)
    - https://i3wm.org/docs/userguide.html#_scratchpad
- ---
- #Shell shortcut keys
	- `ctrl + u` //剪切 (当前行)
	- `ctrl + y` //粘贴 (被命令删除的文字)
	- `ctrl + w` //删除光标左边一个单词 (w: word)
	- `ctrl + e` //移动到行尾 (e: end)
	- `ctrl + a` //移动到行首
	- `ctrl + k` //删除从光标到行尾的内容
	- `ctrl + l` //清屏 (相当于 `clear`)
	- `alt + .` # Parameters of the previous command
- ***References***
	- [zsh的快捷键操作 - 掘金](https://juejin.cn/post/7045572070368870408)
- [[i3]]Automatically starting applications on i3 startup (开机自动打开应用)
  * `exec command` //自动在终端执行命令
  * ***注意事项***
  * `command` //这个是能在终端执行的命令 (举例：在终端输入`alacritty`能够打开终端模拟器，则`command`为`alacritty`；在终端输入`chromium`能够打开网页浏览器，则`command`为`chromium`；……)
  * ***参考资料***
  * https://i3wm.org/docs/userguide.html#_automatically_starting_applications_on_i3_startup
  * ![image.png](../assets/image_1661505123398_0.png)
- ---
- #### Assign applications to workspace in #i3
	- `assign [class="st-256color"] number 1`
- ***Notes***
	- `st-256colors` # A class name
		- `xprop` # Type it in terminal and then click an applications you want to get class name
	- `1` # Replace the workspace name with other number (e.g. 2, 3, etc.)
- ***References***
	- ![image.png](../assets/image_1661510403963_0.png)
	- ![image.png](../assets/image_1661519327603_0.png)
	- https://www.youtube.com/watch?v=lvLExb1SUzM&ab_channel=EF-LinuxMadeSimple
	- https://i3wm.org/docs/userguide.html#assign_workspace
- ---
- [[Vim]]回到上次光标位置
  * `ctrl + o` //返回上次光标所在位置
- 今天(2022-08-26)，查看 archiso 的 shell，它的默认 shell 为 zsh 
  * 总结：可以使用 zsh 的快捷键，进行操作 archiso
  * ***参考资料***
  * ![image.png](../assets/image_1661527045171_0.png)
- [[i3]] and [[Vim]] move hotkey
  * `jkl;` //i3 默认移动键
  * `hjkl` //vim 默认移动键
  * ***Notice***
  * `$mod+d` //与 horizontal 热键冲突 (请修改 horizontal 的热键，比如：`$mod+semicolon`)
  * `hjkl` //统一 i3 与 vim 移动键
- [[i3]] [[sound]]
  * 修改前 
  * ![image.png](../assets/image_1661396054219_0.png) 
  * 修改后 
  * ![image.png](../assets/image_1661396138481_0.png) 
  * ***Notice***
  * `$mod+F10` `+10%` `$mod+F9` `-10%`//音量增加/减少 (请根据你自己电脑的音量键，设置相应的键，你也可以自定义)
  * `mute` `$mod+F11` //静音键 (同上，mute: 沉默的)
  * **`$mod+Shift+r` //重启 i3 (然后按下静音键) (如果没有声音的话)**
- [[Logseq]]上传文件
  * `/Upload an asset` //上传文件 (在 logseq 中输入此命令)
- [[i3]] [[screenshot]]
  * `bindsym Print exec flameshot gui` //开启截图 (如果没有 flameshot 的话，请安装 flameshot)
- [[i3]] [[gaps]]
  ```
  for_window [class="^.*"] border pixel 6 //隐藏窗口标题栏，并设置窗口边框像素（可以自定义数字）
  gaps inner 5 //相邻 window（窗口）之间的距离
  gaps outer 0 //window（窗口）与屏幕边缘之间的距离
  smart_gaps on //如果 workspace（工作空间）只有一个 window（窗口），将禁用 gaps（间隙）
  ```
  * ***References(参考)***
  * [i3 - Gentoo Wiki](https://wiki.gentoo.org/wiki/I3#Configuring_gaps_between_tiled_windows_.28i3-gaps_only.29 "i3 - Gentoo Wiki")
- [[i3]] [[exit]]
  * `bindsym $mod+Shift+e exit` //退出 i3，不用鼠标 (移除 "exec ……" 这个警告，并添加 "exit")
- [[i3]]改变聚焦 (避免与浏览器快捷键冲突，如果你的 $mod 键是alt的话)
  ```
  #bindsym $mod+Left focus left //注释这行
  #bindsym $mod+Down focus down //注释这行
  #bindsym $mod+Up focus up //注释这行
  #bindsym $mod+Right focus right //注释这行
  ```
- [[Vim]]行间移动
  * `10j` //向下10行 (number (数字) + h/j/k/l，你可以自定义)
- [[i3]] [[i3status]] 取消状态栏图标
  * 在行首，添加注释 (i3status 的配置文件) 
  * ![image.png](../assets/image_1661412904312_0.png)
  * ***Notice***
  * `locate i3status` //查找 i3status 的配置文件 (使用 locate 命令)
- ---
- #### Use the locate command to look for a file in Linux
    - `locate filename`
- ***Notes***
    - `doas emerge -aq sys-apps/mlocate` # Install it in Gentoo Linux
    - `doas updatedb` # Update the database before locating
- ***References***
    - https://askubuntu.com/questions/800347/cant-locate-a-directory-using-locate?
- ---
- [[linux]][[Vim]]粘贴
  * `"*p` //从系统剪贴板粘贴到vim (复制之后，在vim中使用这个命令)
  * ***References***
  * [一文搞懂vim复制粘贴](https://www.cnblogs.com/huahuayu/p/12235242.html "一文搞懂vim复制粘贴")
- [[i3]]workspace(工作区)图标
  * 将复制的图标粘贴到如图所示的位置
  * ![image.png](../assets/image_1661419717703_0.png) 
  * ***Notice***
  * [免费复制图标网站](https://fontawesome.com/cheatsheet "Cheatsheet - Font Awesome") //`ctrl + c` 即可复制 (如果找不到可以复制的图标的话)
  * 如果没有awesome字体，请安装 ttf-font-awesome
  * ***References***
  * [Instalar y configurar a tope i3wm](https://www.youtube.com/watch?v=Bw5sDLOvN20&ab_channel=GerryStudios)
- 主机快照timeshift(快照可存其他盘，非系统盘) future #Idea
- [[linux]] [[shell]](命令解析器)zsh
  * `chsh -s /bin/zsh` //改变 shell (如果没有 zsh，请安装 zsh)
  * 安装 Powerlevel10k (请在国内源/国外源，选择其中一个)
  * 国内源
  ```
  git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ~/powerlevel10k
  echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
  ```
  * 国外源
  ```
  git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
  echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
  ```
  * `exec zsh` //尝试 zsh
  * `p10k configure` //重新自定义配置 (如果你对刚才配置的不满意的话)
  * **注意事项**
  * **如果出现 zsh 没有生效的情况，请注销并重新登陆**
  * `ctrl + shift + e` # If your zsh is't work, then please use hotkey `ctrl + shift + e` to exit i3 in your i3wm.(After exiting i3, you need input your password to start i3.)
  * ***参考资料***
  * https://github.com/romkatv/powerlevel10k#installation
- [[linux]]手动挂载 U 盘或硬盘
  * `sudo mount /dev/sdx /mnt` //将 `/dev/sdx` 挂载在 `/mnt` 目录下
  * ***注意事项***
  * `/dev/sdx` //这里的 `x` 可以是 abc……(请用 `sudo fdisk -l` 查看要挂载的盘)
  * `/mnt` //这里的 `/mnt` 只是一个存在的目录，方便 `cd /mnt` 来进行各种操作 (你可以自定义一个存在的目录 `/mnt`)
- [[git]] 修改 commit 的注释
  * `git commit --amend` //此时会进入文本编辑器，修改注释后保存退出即可
  * ***参考资料***
  * [git 使用场景2：commit 之后，想撤销 commit](https://blog.csdn.net/w958796636/article/details/53611133 "git 使用场景2：commit 之后，想撤销 commit")
- [[i3]] [[fullscreen]] [[hotkey]]
  * `mod + f` //全屏打开被聚焦的窗口 (f: fullscreen)
  * ***参考资料***
  * [i3 - Gentoo Wiki](https://wiki.gentoo.org/wiki/I3 "i3 - Gentoo Wiki")
- * [[i3]] 界面功能需求(2022-08-24)
  * 窗口背景模糊
  * 聚焦边框颜色 (方便知道聚焦的窗口是哪个)
  * 顶部状态栏自定义
  * ![80grz78ctfh91_1660544487184_0.png](../assets/80grz78ctfh91_1660544487184_0_1661309928721_0.png)
  * ***参考***
  * [[dwm] guess which OS i use : unixporn](https://www.reddit.com/r/unixporn/comments/wn8yy5/dwm_guess_which_os_i_use/ "[dwm] guess which OS i use : unixporn")
- [[i3]] autostart [[redshift]]
  * `exec --no-startup-id redshift -O 1800` //开启 redshift
  * ***Notice***
  * `redshift` //如果没有 redshift 的话，请安装 redshift
  * `1800` //色温 (你可以自定义)
- picom is so slow in i3 (linux) #Idea
- [[i3]] [[wallpaper]]
  * `exec --no-startup-id feh --bg-fill /home/uesrname/wallpaper/Syu.png` //开启壁纸
  * ***Notice***
  * `feh` //如果没有 feh 的话，请安装 feh
  * `/home/username/wallpaper/Syu.png` //壁纸目录 (你可以自定义)
- [[i3]] [[input method]] autostart
  * `exec --no-startup-id fcitx5` //开启 fcitx5 (请添加在 i3 的配置文件中)
  * ***Notice***
  * `fcitx5-im` `fcitx5-chinese-addons` `fcitx5-pinyin-zhwiki` //如果没有 fcitx5 的话，请安装 fcitx5
  * `/etc/environment` //编辑这个文件
  ```
  GTK_IM_MODULE=fcitx //添加这一行
  QT_IM_MODULE=fcitx //添加这一行
  XMODIFIERS=@im=fcitx //添加这一行
  ```
-
- [[arch]] [[linux]] [[btrfs]] arch-chroot使用
  * `mount /dev/sda2 /mnt -o subvol=/@` //使用 `fdisk -l` 和 `lsblk` 来获取对应信息
  * `arch-chroot /mnt` //进入 Linux filesystem
  * ***参考资料***
  * [Chroot into a btrfs uefi system from live media](https://forum.endeavouros.com/t/chroot-into-a-btrfs-uefi-system-from-live-media/15986/3 "Chroot into a btrfs uefi system from live media")
- [[arch]] [[linux]] [[i3]] [[bar]] [[position]] 状态栏位置(底部或顶部)
  * ***语法***
  * `position top|bottom`
  * ***例子***
  ```
  bar {
  	position top
  }
  ```
  * ***参考资料***
  * https://zjuyk.site/i3wm-userguide-zh/%E9%85%8D%E7%BD%AEi3bar/%E4%BD%8D%E7%BD%AE.html
- [[Vim]]行内移动光标
  * `w` //下一个单词的词首
  * `b` //上一个单词词首
- [[i3]] [[hotkey]]layout toggle split
  * mod + shift + up/down/left/right //切换分裂布局
-
- 经测试，linux 可以使用输入法的终端 #Idea 
  * xfce4-terminal
  * gnome-terminal
  * alacritty # 2022-09-05 还在使用
- 虚拟机 vmware-workstation 在 archlinux 中，与 qemu 一样折腾 #Idea
- ---
- #### Decompress a ".gz" file
    - `gzip -d testData.gz`
- ***Notes***
    - `-d` # Decompress
- ***References***
    - `man gzip`
    - https://medium.com/secttp/overthewire-bandit-level-12-439f655f6fd5
- ---
- [[linux]] 设置系统 [[时间]]命令
  * `sudo date -s "2022-08-22 15:15:00"` //同步时间 (`2022-08-22 15:15:00`：请填写所在时区对应的时间)
  * `sudo ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime` # If "date" command is't work, then you can try this command and set your zoneinfo in "Asia/Shanghai".
- [[linux]] [[i3]]网络代理([[proxy]])
  * sudo vim /etc/environment //添加以下三行：`export http_proxy="127.0.0.1:7890"` `export https_proxy="127.0.0.1:7890"` `export no_proxy="localhost,127.0.0.1"`
  * 下载 clash-for-windows //2022-08-22 在用 aur 中的 clash-for-windows-bin
  * source /etc/environment //重载 `/etc/environment` 配置
  * ***注意事项***
  * i3 搜索 `cfw` 才能在 dmenu 中找到并打开软件
  * ***参考资料***
  * https://www.ahdark.com/som/1643.shtml
- 我的 i3 网络代理之路
  * ![chromium 成功代理 2022-08-22 16-15-32.png](../assets/chromium_成功代理_2022-08-22_16-15-32_1661159702161_0.png)
  * ![浏览器 终端 成功代理 2022-08-22 16-40-25.png](../assets/浏览器_终端_成功代理_2022-08-22_16-40-25_1661159787172_0.png)
- [[arch]] [[linux]] [[i3]]锁
  * `i3lock` //命令行输入，即可锁屏
- [[arch]] [[linux]] [[i3]]文件管理器
  * `sudo pacman -S thunar` //安装文件管理器(轻量)
- [[linux]] [[torrent]]下载
  * transmission-qt //打开 transmission-qt (感觉比 qbittorrent 速度快)
- [[linux]] [[i3]] [[配置]]问题 (please search something in English)
  * youtube //质量高(google: 时效性(保质期)问题; archwiki: 新手不友好问题)
- 虚拟机需求
  1. 自动调整窗口大小
  2. 剪贴板共享
  3. 文件共享(例如：拖拽)
  * **总结**：qemu 暂时放弃 //上面三点，在 archlinux 中，非常折腾 #Idea
- [[virtualbox]]解决自动调节窗口大小问题
  1. virtualbox-ext-oracle //从aur中，安装这个包
  2. host + c //自动调节窗口大小 (使用快捷键 right + ctrl + c)
- #### Extract a ".tar.gz" file in Linux
    - `tar -xf chezmoi_2.28.0_linux_amd64.tar.gz -C ~/chezmoi/`
- ***Notes***
    - `mkdir ~/chezmoi/` # Make a directory before using the *tar* command
    - `-x` # Extract
    - `-f` # File
    - `-C` # Change
- ***References***
    - `man tar`
    - ![2022-12-25_15-22.png](../assets/2022-12-25_15-22_1671952958041_0.png)
    - ![2022-12-25_15-08.png](../assets/2022-12-25_15-08_1671952111132_0.png)
    - https://linuxize.com/post/how-to-extract-unzip-tar-gz-file/
- ---
- [[linux]] [[截图]]命令
  * flameshot gui //开始截图(没有 flameshot 的话，先安装 flameshot)
  * deepin-screenshot //开始截图(没有 deepin-screenshot 的话，先安装 deepin-screenshot)
- [[linux]] [[arch]] [[更新]]命令
  * sudo pacman -Sy //同步(更新)库(也可以测试源速度)
  * sudo pacman -Syu //同步(更新)库并更新包
- [[linux]] [[arch]] [[卸载]]软件命令
  1. grep -r '桌面的软件名' /usr/share/applications //查询路径
  2. sudo pacman -Qo 路径 //查询包名
  3. sudo pacman -Rs 包名 //删除软件包和不需要的依赖
- [[linux]] [[虚拟机]] [[virtualbox]]使用
  1. sudo pacman -S virtualbox virtualbox-host-modules-arch //安装 virtualbox，内核是 linux 的选择 virtualbox-host-modules-arch；内核是 linux 其他版的请详见参考资料
  2. sudo modprobe vboxdrv //加载 virtualbox kernel modules
  3. sudo modprobe vboxnetadp vboxnetflt //使用 bridged 和 host-only networking 功能  
  * **注意事项**
  * **打开刚安装好的 virtualbox 时**
  1. Default Machine Folder //更改默认的文件夹
  2. Update //取消检测更新
  3. enable efi //开启 efi (对操作系统有好处，在安装前的设置中)
  4. host + f //full the screen(host: right + ctrl，这是 hotkey)
  * **安装完操作系统后**
  1. remove filename.iso //移除 iso 文件，解决再次进入 Live 系统问题(在安装后)
  2. turn off `Auto Capture Keyboard` //关掉自动捕获键盘，解决 i3 快捷键冲突，导致不能使用 i3 的 `$mod` (组合键) 的问题 (在 Input 下面)
  * **参考资料**
  * [VirtualBox - ArchWiki](https://wiki.archlinux.org/title/VirtualBox)
- [[linux]] [[arch]] [[i3]] [[wm]] [[hotkey]](alt: mod1; super: mod4)
  * mod + enter //终端
  * mod + d //搜索
  * mod + number //工作区
  * mod + shift + q //关闭窗口 (q: quit)
  * mod + shift + number //移动窗口到工作区(在 manjaro-i3 中，这里的 shift 是 ctrl)
  * mod + j/k/l/; //移动焦点
  * mod + shift + e //退出 i3 (e: exit)
  * mod + h/v //水平化/垂直化窗口(在新建一个窗口之前，h: horizontal; v: vertical)
  * mod + shift + r //重启 i3 (r: reboot)(mod + shift + c //重载 i3 配置在 archlinux-i3 中没有什么用)
  * sudo vim ~/.config/i3/config //设置 i3 配置文件 (在 manjaro-i3 中，配置文件在 ~/.i3/config)
  * **参考资料**
  * [i3wm 的使用说明](https://www.jianshu.com/p/b9b644cf528f)
  * [manjaro i3 安装配置全记录](https://blog.csdn.net/qq_39934154/article/details/121714647)
- [[Git]] [[manual]]一般做好准备步骤后，手动常用命令
  1. git add . //添加到缓存区(在同步的目录下)
  2. git commit -m 'remark' //提交到版本区(remark 可以换成其他备注信息)
  3. git push //推送到远程仓库
- [[linux]] [[音量]] [[声音]] 调节  
  1. sudo pacman -S alsa-utils //安装 alsa-utils  
  2. alsamixer //通过 alsamixer 调节  
  参考资料  
  https://itcn.blog/p/5223635363.html
- [[linux]] [[色温]] 调节  
  1. sudo pacman -S redshift //安装 redshift
  2. redshift -O 1500 //设置固定色温
  3. redshift -x //重置色温
  参考资料  
  [适用于 Linux 的最佳夜灯应用](https://itcn.blog/p/5223635363.html)
- [[截图]] 软件(sudo pacman -S [[包名]] )  
  1. Spectacle  
  2. deepin-screen-recorder  
  3. gnome或kde自带的截图 //查查包名 gnome-screenshot ； shutter  
  4. 火焰截图（flameshot）  
  总结：flameshot，是目前包最小的，也是目前在用的。
- [[Vim]] 快速跳转到某 [[行]] (这里的 n 为数字)  
  1. ngg(nG)
  2. :n
- [[linux]] `df` (disk free)显示[[磁盘]] 使用情况命令  
  参考资料  
  [df命令-显示磁盘空间使用情况](https://www.linuxcool.com/df "df命令-显示磁盘空间使用情况")
-- >灭六国者六国也，非秦也。**族秦者秦也，非天下也**。(应用场景：某垄断被成功反垄断之时) #quote
- [[鼠标]] 中键(三击)  
  1. 复制粘贴 //选择后，中键(三击)
  2. 关闭浏览器标签
- [[linux]] 一切皆文件
- [[math]] 科学记数法  
  一个数被写成一个实数`a`与一个10的n次`幂`的积  
  ![Screenshot from 2022-08-17 18-21-28.png](../assets/Screenshot_from_2022-08-17_18-21-28_1660731701695_0.png)  
  在计算机中用`e`来表示10的幂  
  ![Screenshot from 2022-08-17 18-23-26.png](../assets/Screenshot_from_2022-08-17_18-23-26_1660731816642_0.png)  
  Q: 怎么用？  
  A: 3e5  
  (3e5=3*$10^5$)  
  参考资料  
  [科学记数法](https://zh.wikipedia.org/wiki/%E7%A7%91%E5%AD%A6%E8%AE%B0%E6%95%B0%E6%B3%95 "科学记数法")
- [[Markdown]] 次方(上标)  
  ***写法***  
  ![Screenshot from 2022-08-17 18-34-05.png](../assets/Screenshot_from_2022-08-17_18-34-05_1660732498283_0.png)  
  ***预览***  
  ![Screenshot from 2022-08-17 18-34-17.png](../assets/Screenshot_from_2022-08-17_18-34-17_1660732513304_0.png)  
  参考资料  
  [Markdown数学公式语法](https://www.jianshu.com/p/e74eb43960a1 "Markdown数学公式语法")
- [[symbol]] `$`美元符号  
  参考资料  
  [$](https://zh.wikipedia.org/wiki/$ "$")
-- [[linux]] 折腾 [[dwm]] 好累啊(主要是资源质量太低、时效性短，虽然 [[dwm]] 简洁高效，但是要配置的东西太多了，比如：显示亮度、没声音、网络代理、截图(据说 grim 可用)、笔记本触摸板……)
- [[linux]] [[亮度]] 命令调节(这里的 intel 可能是 nv)  
  1. sudo vim /sys/class/backlight/intel_backlight/brightness //修改亮度
  2. cat /sys/class/backlight/intel_backlight/max_brightnes //查看最大亮度
- [[linux]] fcitx5([[输入法]]) 在 kitty(终端) 下不能输入中文(亲测，~~据说 alacritty 也是~~，`alacritty` 2022-09-05 能输入中文)
- [[linux]] 隐藏文件和目录  
  1. mv 文件名或目录名 .文件名或.目录名 //在文件名或目录名前，添加一个英文句点(`.`)
- [[linux]] 安装全套教程  
  1. [Set up a fully featured arch linux environment from the outset.](https://github.com/LucasWang474/Arch-Configurations)
  2. [EF - Linux Made Simple](https://www.youtube.com/c/EFLinuxMadeSimple/playlists)
  3. [archinstall-简单脚本安装]
- [[python]] 四则运算(简便 [[计算器]] )  
  1. `*`(乘号，举例：`1386*768`，回车即可得到运算结果)
- [[linux]] [[触摸板]] 手势与鼠标的关系  
  1. 单击(左键)
  2. 双击(右键)tip: 双指移动(滚轮)
  3. 三击(中键)
- [[linux]]基础命令  
  * `passwd 用户名` //为用户设置密码(password 的简称)
  * `useradd 用户名` //添加用户
  * `命令 -h` 或 `man 命令` //查看命令帮助(-h 参数的意思是 help，更加详细请使用 `man 命令`)
  * `cd 目录` //切换目录(cd 是 change directory，tips: 目录也叫路径)
  * `ls 目录` //列出目录下的文件(ls 是 list)
  * `ls -l 目录` //用列表的方式列出目录下的文件(l 是 listing) 
   ![Screenshot from 2022-08-16 17-44-49.png](../assets/Screenshot_from_2022-08-16_17-44-49_1660643110643_0.png)  
  1. 第一个字段的第一个字符是**文件类型** //`-`表示文件；`d`表示目录
  2. 第一个字段剩下的9个字符是**模式**(权限位) //3个一组，每组 rwx 表示 “read(读)” “write(写)” “execute(执行)”。(字母表示有这个权限；横线表示没有这个权限)
  3. 第一个字段的三组分别：所属的**用户**权限、所属的**组**权限、**其他用户**的权限 //比如：-rw-r--r-- 是一个文件，对于所属用户，可读可写不可执行；对于所属组，仅仅可读；对于其他用户，仅仅可读
  4. 第二个字段是硬链接数目
  5. 第三个字段是**所属用户**，第四个字段是**所属组**，第五个字段是文件大小，第六个字段是**文件被修改的日期**，最后是**文件名**
  * `ls -la` //以列表的形式显示全部文件(a 是 all)
  * `vim hello` //文本编辑器 vim 打开(若没有，则创建)一个名叫 hello 的文件  
  (移动光标：上下左右键；  
  1. 编辑：将光标移动到相应位置，输入 `i` (insert)；  
  2. 退出编辑模式：按 `esc` 键；  
  3. 写入：输入 `:` ，在 `:` 后面输入 `w` (write)，写入(保存)；  
  4. 退出：在 `:` 后面输入 `q` (quit)，退出文件；   强制退出：在 `:` 后面输入 `q!` )  
  * `shutdown now` 或 `poweroff` //关机
  * `reboot` //重启
- [[outlook]] [[邮箱]] 每周只能添加两个别名
- #linux [Shell](https://blog.51cto.com/u_6364219/4920283)
  ```
  su 新用户名 #切换成新用户
  sudo pacman -S zsh #安装 zsh
  chsh -s /bin/zsh #修改默认的 Shell（chsh -l 可以查看已有 shell）
  git clone https://github.com/romkatv/powerlevel10k.git //下载 powerlevel10k
  sudo vim /home/用户名/.zshrc //编辑 .zshrc 并添加 source ~/powerlevel10k/powerlevel10k.zsh-theme
  ```
- #linux dwm  
  1. **WM**: [dwm](https://dwm.suckless.org/)(with [vanitygaps](https://dwm.suckless.org/patches/vanitygaps/) patch)
  2. **Compositor**: [picom](https://aur.archlinux.org/packages/picom-jonaburg-git)(*sudo pacman -S picom*)
  3. **Colours**: `#FAE100`, `#32DBF0`
  4. **dwm bar**: [slstatus](https://github.com/drkhsh/slstatus)(*git clone https://git.suckless.org/slstatus*)
  5. **Terminal**: [kitty](https://wiki.archlinux.org/title/Kitty)(*sudo pacman -S kitty*)
  6. **Shell theme**: a custom [powerlevel10k](https://github.com/romkatv/powerlevel10k) config
  7. **Font**: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)(*sudo pacman -S ttf-jetbrains-mono*)
  8. **Wallpaper**: [some text on a black background](https://imgur.com/14AnL7O)(he made it himself)(the other font is [Eternal UI](https://www.cufonfonts.com/font/eternal-ui))
  9. **Dotfiles**: [him dwm build](https://codeberg.org/bankenstein/dwm)
  10. **Theme**: breeze(*sudo pacman -S breeze*)
  11. **Icons**: candy-icons(*git clone https://aur.archlinux.org/candy-icons-git.git*)
- ![80grz78ctfh91_1660544487184_0.png](../assets/80grz78ctfh91_1660544487184_0_1661309910444_0.png)
- [[notion]] 工具太杂，不像是使用工具，反而是被工具使用 #Idea
- [[vscode]] 打开 [[终端]]  
  1. 查看(`View`)-终端(`Terminal`)
  2. `ctrl + 单引号`(快捷键)
- >造谣成本太低(一句话的事) #quote
-- in the [[future]] ,开发临时发送接受 [[邮箱]] (需求：国内网络能发送)#idea
- >这种“只许州官放火，不许百姓点灯”的双重标准，实在是……
- [[vscode]] 实时预览 [[Markdown]] ：  
  1. `Ctrl + Shift + P`(输入Markdown，选择`Markdown：Open Preview to the Side`)
  2. `Ctrl + K`再按`v`(快捷键)
-- >人为刀俎我为鱼肉，这便是寻常百姓家 #quote
- >你所谓的消息，只是***传言***，而非情报，要想打听到关于xxx的准确情报，必须依靠***专业***的情报机构，这样我们才能更快的发展自己，集中优势资源，早日将目的达成 #quote
- Syncthing [[sync]] 文件  
  1. 安装syncthing(手机、电脑端都要)
  2. 文件夹路径：/home/ss/Sync(/storage/emulated/0/Sync)；文件夹标签：Sync(尽量统一)
  3. 添加设备(手机扫电脑端二维码)
  4. 版本控制-设置为保留5个版本数量(手机、电脑端都要)
- `|`竖线 [[symbol]]- 今天，刚入门 [[Git]]，为了同步笔记 #Idea
- 经测试， [[Logseq]] 本地仓库能自动commit，但是需要手动push(如果能自动push的话，那就更好了)
- 今天，清理了浏览器书签(将不常用的网站放入了 [[future]] )
- 对我而言，***米斯特软的***教授了我如何更好地使用[[Logseq]]来管理生活和笔记  
  在[[v2ex]]上，据说  
  1. ta退过学，退学前，就已经写了7年代码  
  2. 退学原因：没有办法同时兼顾ta喜欢的和ta不喜欢的课程，疲于应付功课  
  3. 总结：学历很重要，且不建议退学，除非已经铺好后路、拥有解决问题的能力- [[symbol]] `^`插入符
- [[symbol]] `~`波浪号
-- [[Vim]]普通模式下，`u`(撤销)`ctrl + r`(反撤销)
-- 我认为，手机端开源输入法并不怎么方便(大概是我不会配置的原因，然后Gboard-Google键盘凑合用了) #Idea
- 我认为，初步 [[study]] 管理系统由以下部分组成：  
  1. 笔记([[Logseq]])
  2. 代办事项([[teambition]])
  3. 中转站([[flomo]])(可以是临时笔记、代办事项、时间日志)
-- [[outlook]]无限添加子[[邮箱]]  
  1. 登录outlook.com
  2. 点击右上角图标，并点击***我的个人资料***
  3. 在账户信息中，点击***登录首选项***
  4. 最后，点击***添加电子邮件***(ok)
- >淡定淡定，我只是做了我该做的事 #quote
- >动宾+有什么好处吗？  
  >例：参加篮球队有什么好处吗？ #quote
- >都是同行衬托的好 #quote
- Git
	- 分布式
	- 日常使用
	- 系统管理
-- [[gmail]][[邮箱]]自动[[转发]]垃圾邮件
  1. 点击***创建过滤器***
  2. 在包含字词中，填写 ***is:spam***
  3. 点击***创建过滤器***，并点击***确定***
  4. 勾选***不要将其发送至垃圾邮件***
  5. 点击***创建过滤器***(ok)
- 我认为， [[Logseq]] 只适合用来做笔记，不适合用来 [[时间管理]]#idea
-- DONE 改密码  
  1. 简单的(随机密码)
  2. 重要的
  注意：  
  1. 密码过渡载体flomo的密码，越简单好记越好  
  2. 密码管理chrome的密码，用自己的超强密码
-- DONE 查重 [[耀拟计划]]
- >提问之前
  在你准备要通过电子邮件、新闻群组或者聊天室提出技术问题前，请先做到以下事情：
  1. 尝试在你准备提问的论坛的旧文章中搜索答案。
  2. 尝试上网搜索以找到答案。
  3. 尝试阅读手册以找到答案。
  4. 尝试阅读常见问题文件（FAQ）以找到答案。
  5. 尝试自己检查或试验以找到答案。
  6. 向你身边的强者朋友打听以找到答案。
  7. 如果你是程序开发者，请尝试阅读源代码以找到答案。
  当你提出问题的时候，请先表明你已经做了上述的努力；这将有助于树立你并不是一个不劳而获且浪费别人的时间的提问者。如果你能一并表达在做了上述努力的过程中所学到的东西会更好，因为我们更乐于回答那些表现出能从答案中学习的人的问题。 #quote
- [[ventoy]]测试(环境：usb2.0电脑 和 usb3.0u盘)  
  速度(gpt)：$\overline{33}$MB/s  
  速度(dos)：$\overline{100}$MB/s  
  结论：在这种情况下，以root权限处理文件，u盘格式dos的速度更快 #Idea
- [有效学习：处理知识的20条规则([[anki]])](https://www.yuque.com/supermemo/wiki/20rules)
-
- 我陷入了沉思：(关于壁纸)  
  1. 理论上，找壁纸和欣赏壁纸都需要花费时间和精力成本(所以，我决定放弃跟壁纸有关的事情)
  2. 但是，我有时有一种壁纸能促进生产力的感觉(in the [[future]] ，调查研究实验壁纸)
- in the [[future]] ，专业大概率选择 [[计算机科学与技术]]
- >虽千万人吾往矣(即使面对千万人的阻止，我也要勇往直前) #quote
-- 在学习 [[Logseq]] 使用的过程中，了解到okr(目标与关键结果)是一套管理方法 #Idea
- DONE 进一步学习使用 [[Logseq]]的方法  
  参考资料  
  [我的 logseq 使用习惯](https://limboy.me/posts/logseq/)
- in the [[future]] 自己制作适合自己的 winpe(别人的不放心)
  1. wepe
  2. edgeless
  3. firpe
  4. hotpe
-- in the [[future]] 笔记本电脑电池，询问注意事项(充不了电，真的难受) #Idea
-- notion的docx文件导入失败，网络不稳定，决定放弃使用,而且同步的文件没有保障[[notion]] #Idea
- 写一个 [[chrome]] 扩展，用来在当前页面查询[[linux]]命令 #Idea
- 添加 [[Google]] 账户
	- 1. 手机打开`Google设置`
	  2. 点击`xxx@gmail.com`
	  3. 点击`再添加一个账号`(等待核对信息)
	  4. 点击`创建账号`-`为我自己创建`
	  5. 输入`名字`
	  6. 完善`基本信息`-`下一步`
	  7. 点击`创建您自己的 Gmail 地址`-输入名字-`下一步`
	  8. 输入密码-`下一步`
	  9. 大致就ok了
- DONE 清理inbox  
  1. 书签
  2. 云空间
  3. 邮箱
- mp4转mp3  
  1. 下载 [[vlc]]
  2. 找到转换
  3. 添加 mp4 文件
  4. 选择转换类型 Audio-MP3
  5. 接着选择目标地址
  6. 点击`start`
- DONE 写一个 chrome 插件(在当前页面，查询linux命令)  
  1. HTML
  2. CSS
  3. JavaScript
  4. 参考资料[zhihu](https://www.zhihu.com/question/20179805)
  5.
- DONE 修改[[阿里云盘]]和[[天翼云盘]]在手机端的密码(需要验证手机号的验证码)
- DONE 修改关于[[耀拟计划]] & 免责声明
- DONE 写一篇如何添加谷歌账号的 #writing
- 现在先优化 [[Logseq]]到这种程度，在未来的使用中，再继续优化调整 #Idea
- DONE 资源去重：[[耀拟计划]]-自我提升-学习管理-学习方法 https://www.aliyundrive.com/drive/folder/61b86b0ee182fb3c8dcf4470b2084cd56df49512
- DONE 初步建立适合自己的[[study]]管理系统(在[[耀拟计划]]-自我提升-学习管理中) #writing
- in the [[future]] 自建网盘。原因：可以实现webdav服务 #Idea
- >时间如逆旅，我亦是行人 #quote
- >average of five(五人平均值) #quote
- DONE 清理[[inbox]]-机械硬盘
- 我认为，关于 [[study]] 的工具，[[Logseq]]和[[flomo]]笔记软件同时使用效果会更好 #Idea
- DONE 上传 [[喜马讲书1-800]] 至 [[阿里云盘]]
- DONE 在 [[v2ex]] 上，搜 [[退学]]
- DONE 关于使用 [[Logseq]] 管理我的生活和笔记 #writing
- 我今天听到[[Logseq]]的一个节目，他里面提到如何更好的使用 [[Logseq]] 来管理他的生活和笔记 #Idea
- >贫穷与自由罢了 #quote
- DONE https://www.aliyundrive.com/s/FWxDP3GgrG5/folder/6287975e70060c49dc65438c9ac73bed13297359
- >把它扁平化的记下来(而不是有刻意组织地把它记下来)，然后通过backthink(回想)，通过tag，让它们在将来的某一天，被你查询，被你发现，那么你的这条笔记就是有意义的 #quote
- DONE https://www.aliyundrive.com/s/rWkG5BkJLFu
- DONE https://www.aliyundrive.com/s/Y3UYiLCps7j/folder/61dda1dce52858abca89432e8e4bf2905fa7ede6
- DONE https://www.aliyundrive.com/s/3ygDuayt6BM/folder/61dfb86f6640a1fa8da54548bee24522cee73087
- DONE https://www.aliyundrive.com/s/c1BNWUkS3UE/folder/615dcd7b9ec6a0bc34cd41ebb01cfcadc9df62e6
- DONE https://www.aliyundrive.com/s/cpxmYVHoY4q/folder/6178d1b601719f776e2140689297991f7c4354f1
- DONE 取消[[兴趣]]-[[耀拟计划]]-在线提交建议
- DONE 测试todo与later
- DONE 测试todo与later
- 我认为，在使用Dashboard的Todo和In progress时，还是later方便一点(todo vs later) #Idea
- DONE 修改[[耀拟计划]]的宣传文件 https://www.aliyundrive.com/drive/folder/62c8eaa0e3a0b612114547f6ac4ab66c08dba880  ，并写入更新日志 https://docs.qq.com/sheet/DYlRqQ0tBWWJZSEdl?tab=uhz4u8&_t=1658375938155
- DONE 优化[[Logseq]] #writing 
- DONE 找一些适合自己的关于 [[study]] 的工具
- ToDoList
    - 重要且紧急
      
      ```
      # 学习 markdown
      # 编写 [[Archlinux_install]]
      ```
    - 重要不紧急
      
      ```
      已完成# 下载 喜马讲书101-200
      ```
    - 紧急不重要
      
      ```
      # 在书签中，添加 github.com
      ```
    - 不紧急也不重要
      
      ```
      # 恢复heting笔记本电脑的开机引导
      ```
- ToDoList
	- 重要且紧急
	  
	  ```
	  
	  ```
	- 重要不紧急
	  
	  ```
	  
	  ```
	- 紧急不重要
	  
	  ```
	  
	  ```
	- 不紧急也不重要
	  
	  ```
	  
	  ```
- 日记功能
- 块(block)(这个地方就是一个块)
- enter 新建一个块
- backsapce 删除块
- shift + enter 在块内换行
  test
  test
	- tab (缩进)
	- test
	- test
		- test
			- test
			- test
			- test
- tab + shift(减少缩进)
- 引用
	- 按下 复制
- [[笔记1]]
	- [[笔记二]]
