- # 常用命令
	- ## archlinux
		- ### 软件  
		  ```
		  #卸载
		  grep -r '桌面的软件名' /usr/share/applications #查询路径
		  sudo pacman -Qo 上一个命令查询到的路径 #查询包名
		  sudo pacman -Rs 包名 #删除其他已安装软件包不需要的软件包及其依赖
		  ```
		- ### 更新  
		  ```
		  sudo pacman Sy #同步库（顺便可以测试源的速度）
		  sudo pacman Syu #同步库并更新系统的包
		  ```
	- ## 压缩和解压缩
		- tar  
		  ```
		  tar -zxvf 文件名.tar.gz #解压 文件名.tar.gz
		  tar -I zstd -xvf 文件名.tar.zst #解压 文件名.tar.zst
		  ```
		- zip  
		  ```
		  sudo pacman -S zip #安装 zip
		  zip -r 文件名.zip 文件名 #压缩目录及目录内的文件
		  unzip 文件名.zip #解压缩目录及目录内的文件
		  ```
	- ## 网络代理
		- 终端  
		  ```
		  #编辑zshrc文件
		  sudo vim ~/.zshrc
		  #添加下面两行代码
		  alias proxy-on='export http_proxy=127.0.0.1:7890;export https_proxy=$http_proxy'
		  alias proxy-off='unset http_proxy;unset https_proxy' 
		  #保存退出,并生效配置
		  source ~/.zshrc
		  #开启命令（用的时候输入）
		  proxy-on
		  #关闭命令(关闭的时候输入)
		  proxy-off
		  #测试
		  curl cip.cc
		  ```
- # archlinux
	- ## gpt
		- ### 更新系统时钟  
		  ```
		  timedatectl set-ntp true
		  ```
		- ### 分区
		  
		  ```
		  cfdisk
		  ```
		  ![2022_07_17_Screenshot from 2022-07-17 11-56-01.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad38c86704-28fe-4788-b35d-852c1539b0932022_07_17_Screenshot%20from%202022-07-17%2011-56-01.png?Expires=4811633801&Signature=Vy17ZohwSJ86B1S9Yvb5kVNf1CiHH3mmjohQImkfLLRNDcBDlGKd3C7abiKdaPFv7ONnsnIk1m1tpzfkKt~aJSQPR2nQVmXN24zHCrombRjx3hWeBiGnUlYbtVkum3OeVo0cbw-9IzPfUtxoDsSMuRKVzvuD0eyZwijFbr1iFoX918rEH9JbG1OZ03eWTESdX8JaqAyFnM9j4xCMbHKNr1uysdBnLDsgaAT8SiGT91FEOQL12jMbFgFuiYtlIZ0OY1JFO58RwCSTI759tX9T4Eq5gsNwlRk3WmeqOIgyYoYHM4JhATx-8iB8pULM2AosfA2X4R8yy4d2jvxkjO9aUA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
		- ### 格式化分区
		  ```
		  mkfs.ext4 /dev/root_partition
		  mkswap /dev/swap_partition
		  mkfs.fat -F 32 /dev/efi_system_partition
		  ```
		- ### 挂载分区
		  ```
		  mount /dev/root_partition /mnt
		  mount --mkdir /dev/efi_system_partition /mnt/boot
		  swapon /dev/swap_partition
		  lsblk #看硬盘分区的挂载情况
		  ```
		- ### 换源
		  ```
		  vim /etc/pacman.d/mirrorlist
		  Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch #添加这一行
		  pacman -Sy #检查源的速度
		  ```
		- ### 安装必备包
		  ```
		  pacstrap /mnt base linux linux-firmware vim base-devel networkmanager
		  ```
		- ### 生成文件系统桌面文件
		  ```
		  genfstab -U /mnt >> /mnt/etc/fstab
		  ```
		- ### 变成 root 用户
		  ```
		  arch-chroot /mnt
		  systemctl enable NetworkManager #启用 NetworkManager
		  ```
		- ### 设置时区
		  ```
		  ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
		  ```
		- ### 调整硬件时钟
		  ```
		  hwclock --systohc
		  ```
		- ### 设置 locale
		  ```
		  vim /etc/locale.gen #去掉这两行注释：en_US.UTF-8 UTF-8;zh_US.UTF-8 UTF-8
		  locale-gen
		  vim /etc/locale.conf
		  LANG=en_US.UTF-8 #添加这一行
		  ```
		- ### 设置 hostname
		  ```
		  vim /etc/hostname
		  ss #添加 hostname,名字任意
		  ```
		- ### 设置 hosts
		  ```
		  vim /etc/hosts
		  #添加下面三行
		  127.0.0.1	localhost
		  ::1		localhost
		  127.0.1.1	ss.localdomain	ss
		  ```
		- ### 添加新用户
		  ```
		  useradd -m -G wheel ss
		  ```
		- ### 给新用户使用 sudo 的权限
		  ```
		  pacman -S vi #安装编辑器 vi
		  visudo
		  #去掉下面一行注释
		  # %wheel ALL=(ALL:ALL)ALL
		  ```
		- ### 为新用户设置密码
		  ```
		  passwd ss
		  ```
		- ### 为 root 用户设置密码
		  ```
		  passwd root
		  ```
		- ### 安装显卡驱动和字体
		  ```
		  #按照具体情况安装显卡驱动（我的GPU: Intel和AMD ATI的）
		  pacman -S xf86-video-intel xf86-video-ati
		  pacman -S noto-fonts-cjk #安装字体，防止乱码
		  ```
		- ### 在盘上安装 grub
		  ```
		  pacman -S grub efibootmgr
		  mount --mkdir /dev/sda1 /mnt/boot
		  grub-install --target=x86_64-efi --efi-directory=/mnt/boot --bootloader-id=GRUB
		  vim /etc/default/grub
		  #取消下面一行的注释
		  #GRUB_DISABLE_OS_PROBER=false
		  ```
		- ### 安装微码
		  ```
		  #按照具体情况安装（amd的cpu，请安装amd-ucode；intel的cpu，请安装intel-ucode）
		  pacman -S intel-ucode
		  grub-mkconfig -o /boot/grub/grub.cfg #生成 GRUB 配置以激活加载微码更新
		  ```
		- ### dwm(wm待完善)  
		  安装 windows manager 或 desktop environment  
		  (可选)windows manager
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
		- ### i3wm(待完善)  
		  (可选)windows manager
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
			  su ss #切换到新用户下
			  git clone 包的URL
			  cd 包名
			  makepkg -si
			  ```
		- ### gnome  
		  (可选)desktop environment
			- ***安装显示服务***  
			  ```
			  pacman -S xorg
			  ```
			- ***安装桌面环境***(不要忘了启用 gdm)  
			  ```
			  pacman -S gonme-shell gnome-control-center gnome-terminal gnome-backgrounds nautilus gdm
			  systemctl enable gdm #启用 gdm
			  ```
			- ***安装中文输入法***  
			  ```
			  su ss #切换到新用户下
			  sudo pacman -S fcitx5-im fcitx5-chinese-addons #安装中文输入法必备包
			  sudo vim /etc/environment #修改 /etc/environment 配置文件
			  #添加下面三行
			  GTK_IM_MODULE=fcitx
			  QT_IM_MODULE=fcitx
			  XMODIFIERS=@im=fcitx
			  #安装离线字库（方便打字）
			  sudo pacman -S fcitx5-pinyin-zhwiki
			  git clone https://aur.archlinux.org/fcitx5-pinyin-moegirl.git
			  cd 包名
			  makepkg -si
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
			  系统设置-触控板-单击打开 #在桌面环境中
			  ```
	- ## 注意事项
		- invalid or corrupted package(PGP signature)  
		  ```
		  pacman -Sy archlinux-keyring #更新 archlinux-keyring
		  ```
- # 注意事项
	- ## .AppImage文件执行没有反应  
	  ```
	  #在原先执行的命令后面添加" --appimage-extract"
	  ./文件名.AppImage --appimage-extract
	  ```
	- ## 两个硬盘共存  
	  ```
	  #格式化主要存储的硬盘，且不能分区（说明：一个主要装操作系统，另一个主要存储）
	  #查看要格式化的硬盘
	  fdisk -l
	  #格式化主要存储的硬盘（下面的”x“可能是a、b、c、……）
	  mkfs.ext4 /dev/sdx
	  ```
	- ## 不能粘贴文件(权限不允许)  
	  ```
	  #在终端中，以 root 的权限打开文件管理器
	  sudo nautilus
	  ```
- # 参考资料
	- [Installation guide - ArchWiki](https://wiki.archlinux.org/title/Installation_guide)