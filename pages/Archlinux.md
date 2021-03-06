- # gpt
	- ## 更新系统时钟  
	  ```
	  timedatectl set-ntp true
	  ```
	- ## 分区
	  
	  ```
	  cfdisk
	  ```
	  ![2022_07_17_Screenshot from 2022-07-17 11-56-01.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad38c86704-28fe-4788-b35d-852c1539b0932022_07_17_Screenshot%20from%202022-07-17%2011-56-01.png?Expires=4811633801&Signature=Vy17ZohwSJ86B1S9Yvb5kVNf1CiHH3mmjohQImkfLLRNDcBDlGKd3C7abiKdaPFv7ONnsnIk1m1tpzfkKt~aJSQPR2nQVmXN24zHCrombRjx3hWeBiGnUlYbtVkum3OeVo0cbw-9IzPfUtxoDsSMuRKVzvuD0eyZwijFbr1iFoX918rEH9JbG1OZ03eWTESdX8JaqAyFnM9j4xCMbHKNr1uysdBnLDsgaAT8SiGT91FEOQL12jMbFgFuiYtlIZ0OY1JFO58RwCSTI759tX9T4Eq5gsNwlRk3WmeqOIgyYoYHM4JhATx-8iB8pULM2AosfA2X4R8yy4d2jvxkjO9aUA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
	- ## 格式化分区
	  ```
	  mkfs.ext4 /dev/root_partition
	  mkswap /dev/swap_partition
	  mkfs.fat -F 32 /dev/efi_system_partition
	  ```
	- ## 挂载分区
	  ```
	  mount /dev/root_partition /mnt
	  mount --mkdir /dev/efi_system_partition /mnt/boot
	  swapon /dev/swap_partition
	  #看硬盘分区的挂载情况
	  lsblk
	  ```
	- ## 换源
	  ```
	  vim /etc/pacman.d/mirrorlist
	  #添加下面一行
	  Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch
	  #检查源的速度
	  pacman -Syy
	  ```
	- ## 安装必备包
	  ```
	  pacstrap /mnt base linux linux-firmware vim base-devel networkmanager
	  ```
	- ## 生成文件系统桌面文件
	  ```
	  genfstab -U /mnt >> /mnt/etc/fstab
	  ```
	- ## 变成 root 用户
	  ```
	  arch-chroot /mnt
	  #启用 NetworkManager
	  systemctl enable NetworkManager
	  ```
	- ## 设置时区
	  ```
	  ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
	  ```
	- ## 调整硬件时钟
	  ```
	  hwclock --systohc
	  ```
	- ## 设置 locale
	  ```
	  vim /etc/locale.gen
	  #在文件里，去掉下面两行的注释
	  # en_US.UTF-8 UTF-8
	  # zh_CN.UTF-8 UTF-8
	  locale-gen
	  vim /etc/locale.conf
	  #添加下面一行
	  LANG=en_US.UTF-8
	  ```
	- ## 设置 hostname
	  ```
	  vim /etc/hostname
	  #添加下面一行
	  ss
	  ```
	- ## 设置 hosts
	  ```
	  vim /etc/hosts
	  #添加下面三行
	  127.0.0.1	localhost
	  ::1		localhost
	  127.0.1.1	ss.localdomain	ss
	  ```
	- ## 添加新用户
	  ```
	  useradd -m -G wheel ss
	  ```
	- ## 给新用户使用 sudo 的权限
	  ```
	  #安装编辑器 vi
	  pacman -S vi
	  visudo
	  #去掉下面一行注释
	  # %wheel ALL=(ALL:ALL)ALL
	  ```
	- ## 为新用户设置密码
	  ```
	  passwd ss
	  ```
	- ## 为 root 用户设置密码
	  ```
	  passwd root
	  ```
	- ## 安装显卡驱动和字体
	  ```
	  pacman -S xf86-video-ati xf86-video-intel noto-fonts-cjk
	  #安装字体，防止乱码
	  ```
	- ## 在盘上安装 grub
	  ```
	  pacman -S grub efibootmgr
	  mount --mkdir /dev/sda1 /mnt/boot
	  grub-install --target=x86_64-efi --efi-directory=/mnt/boot --bootloader-id=GRUB
	  vim /etc/default/grub
	  #取消下面一行的注释
	  #GRUB_DISABLE_OS_PROBER=false
	  ```
	- ## 安装微码
	  ```
	  #选择安装：amd的cpu，请安装amd-ucode；intel的cpu，请安装intel-ucode
	  pacman -S intel-ucode
	  #生成 GRUB 配置以激活加载微码更新
	  grub-mkconfig -o /boot/grub/grub.cfg
	  ```
	- ## 安装 windows manager 或者 desktop environment
		- ### windows manager
			- #### dwm(待完善)
				- ***安装窗口管理器***  
				  ```
				  git clone https://git.suckless.org/dwm
				  cd dwm
				  sudo make clean install
				  cd
				  #接着安装 st 和 dmenu（按照上面的方法，重复一遍）
				  ```
				- ***配置窗口启动参数***
				  ```
				  cp /etc/X11/xinit/xinitrc ~/.xinitrc
				  vim ~/.xinitrc
				  #添加注释
				  # twm 及其下那些行
				  #添加下面一行
				  exec dwm
				  ```
				- ***进入窗口环境***
				  ```
				  startx
				  ```
			- #### i3wm(待完善)
				- ***安装 xorg-xinit***  
				  ```
				  pacman -S xorg-xinit
				  #配置窗口启动参数
				  cp /etc/X11/xinit/xinitrc ~/.xinitrc
				  vim ~/.xinitrc
				  #添加注释
				  # twm 及其以下那些行
				  #添加下面一行
				  exec i3
				  ```
				- ***安装 i3wm***
				  ```
				  pacman -S i3
				  ```
				- ***安装终端***
				  ```
				  pacman -S mate-terminal
				  ```
				- ***安装浏览器***  
				  ```
				  #切换到新用户下
				  su ss
				  git clone 包的URL
				  cd 包名
				  makepkg -si
				  ```
		- ### desktop environment
			- #### gnome
				- ***安装显示服务***  
				  ```
				  pacman -S xorg
				  ```
				- ***安装桌面环境***  
				  ```
				  pacman -S gonme-shell gnome-control-center gnome-terminal gnome-backgrounds nautilus gdm
				  #启用 gdm
				  systemctl enable gdm
				  ```
				- ***安装中文输入法***  
				  ```
				  #切换到新用户下
				  su ss
				  #安装中文输入法必备包
				  sudo pacman -S fcitx5-im fcitx5-chinese-addons
				  #修改 /etc/environment 配置文件
				  sudo vim /etc/environment
				  #添加下面三行
				  GTK_IM_MODULE=fcitx
				  QT_IM_MODULE=fcitx
				  XMODIFIERS=@im=fcitx
				  #安装离线字库（方便打字）
				  sudo pacman -S fcitx5-pinyin-zhwiki
				  #在桌面环境中
				  1.在终端打开 fcitx5-configtool 
				  2.取消 "Only Show Current Language" 的勾选
				  3.双击 Pinyin
				  4.点击 "Apply" 接着 "Close" 
				  5.ctrl+space （切换拼音和英文的快捷键）
				  ```
				- ***安装浏览器***
				  ```
				  #在桌面环境中
				  sudo pacman -S git
				  git clone 包URL
				  cd 包名
				  makepkg -si
				  ```
				- ***解决触控板触击无反应***
				  ```
				  #在桌面环境中
				  系统设置-触控板-单击打开
				  ```