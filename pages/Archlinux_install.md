---
title: Archlinux_install
---

- # gpt
	- ## 更新系统时钟  
	  ```python
	  timedatectl set-ntp true
	  ```
	- ## 分区
	  
	  ```python
	  cfdisk
	  ```
	  ![2022_07_17_Screenshot from 2022-07-17 11-56-01.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad38c86704-28fe-4788-b35d-852c1539b0932022_07_17_Screenshot%20from%202022-07-17%2011-56-01.png?Expires=4811633801&Signature=Vy17ZohwSJ86B1S9Yvb5kVNf1CiHH3mmjohQImkfLLRNDcBDlGKd3C7abiKdaPFv7ONnsnIk1m1tpzfkKt~aJSQPR2nQVmXN24zHCrombRjx3hWeBiGnUlYbtVkum3OeVo0cbw-9IzPfUtxoDsSMuRKVzvuD0eyZwijFbr1iFoX918rEH9JbG1OZ03eWTESdX8JaqAyFnM9j4xCMbHKNr1uysdBnLDsgaAT8SiGT91FEOQL12jMbFgFuiYtlIZ0OY1JFO58RwCSTI759tX9T4Eq5gsNwlRk3WmeqOIgyYoYHM4JhATx-8iB8pULM2AosfA2X4R8yy4d2jvxkjO9aUA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
	- ## 格式化分区
	  ```python
	  mkfs.ext4 /dev/root_partition
	  mkswap /dev/swap_partition
	  mkfs.fat -F 32 /dev/efi_system_partition
	  ```
	- ## 挂载分区
	  ```python
	  mount /dev/root_partition
	  mount --mkdir /dev/efi_system_partition /mnt/boot
	  swapon /dev/swap_partition
	  #看情况
	  lsblk
	  ```
	- ## 换源
	  ```python
	  vim /etc/pacman.d/mirrorlist
	  #添加内容
	  Server = https://mirrors.ustc.edu.cn/archlinux/$repo/os/$arch
	  #检查源的速度
	  pacman -Syy
	  ```
	- ## 安装必备包
	  ```python
	  pacstrap /mnt base linux linux-firmware vim base-devel networkmanager
	  #启动 NetworkManager
	  systemctl enable NetworkManager
	  ```
	- ## 生成文件系统桌面文件
	  ```python
	  ```