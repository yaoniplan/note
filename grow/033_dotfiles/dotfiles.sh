#! /bin/sh
ln -sf /home/yaoniplan/note/grow/033_dotfiles/etc/portage/make.conf /etc/portage/make.conf
ln -sf /home/yaoniplan/note/grow/033_dotfiles/.gitconfig /home/yaoniplan/.gitconfig
ln -sf /home/yaoniplan/note/grow/033_dotfiles/etc/doas.conf /etc/doas.conf
ln -sf /home/yaoniplan/note/grow/033_dotfiles/.tmux.conf /home/yaoniplan/.tmux.conf
ln -sf /home/yaoniplan/note/grow/033_dotfiles/etc/portage/savedconfig/x11-terms/st-0.8.5 /etc/portage/savedconfig/x11-terms/st-0.8.5
ln -sf /home/yaoniplan/note/grow/033_dotfiles/.config/i3/config /home/yaoniplan/.config/i3/config
ln -sf /home/yaoniplan/note/grow/033_dotfiles/.bashrc /home/yaoniplan/.bashrc
ln -sf /home/yaoniplan/note/grow/033_dotfiles/.bash_profile /home/yaoniplan/.bash_profile
#tree -a /home/yaoniplan/note/grow/033_dotfiles/ > README.md
tree -a . > README.md
