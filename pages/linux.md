- # 常用命令
	- ## 软件
		- ### 卸载  
		  ```
		  grep -r '桌面的软件名' /usr/share/applications #查询路径
		  sudo pacman -Qo 上一个命令查询到的路径 #
		  ```
	- ## 压缩和解压缩
		- tar  
		  ```
		  #解压 文件名.tar.gz
		  tar -zxvf 文件名.tar.gz
		  #解压 文件名.tar.zst
		  tar -I zstd -xvf 文件名.tar.zst
		  ```
		- zip  
		  ```
		  #先安装 zip
		  sudo pacman -S zip
		  #压缩目录及目录内的文件
		  zip -r 文件名.zip 文件名
		  #解压缩目录及目录内的文件
		  unzip 文件名.zip
		  ```
- # 网络代理
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