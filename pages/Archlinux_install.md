---
title: Archlinux_install
---

- ==GPT==
	- 更新系统时钟
	  
	  ```
	  timedatectl set-ntp true
	  ```
	- 分区
	  
	  ```
	  cfdisk
	  ```
	  ![2022_07_17_Screenshot from 2022-07-17 11-56-01.png](https://cdn.logseq.com/%2F998c98bb-79e1-4005-aff0-0375729262ad38c86704-28fe-4788-b35d-852c1539b0932022_07_17_Screenshot%20from%202022-07-17%2011-56-01.png?Expires=4811633801&Signature=Vy17ZohwSJ86B1S9Yvb5kVNf1CiHH3mmjohQImkfLLRNDcBDlGKd3C7abiKdaPFv7ONnsnIk1m1tpzfkKt~aJSQPR2nQVmXN24zHCrombRjx3hWeBiGnUlYbtVkum3OeVo0cbw-9IzPfUtxoDsSMuRKVzvuD0eyZwijFbr1iFoX918rEH9JbG1OZ03eWTESdX8JaqAyFnM9j4xCMbHKNr1uysdBnLDsgaAT8SiGT91FEOQL12jMbFgFuiYtlIZ0OY1JFO58RwCSTI759tX9T4Eq5gsNwlRk3WmeqOIgyYoYHM4JhATx-8iB8pULM2AosfA2X4R8yy4d2jvxkjO9aUA__&Key-Pair-Id=APKAJE5CCD6X7MP6PTEA)
	- 格式化分区
	  ```
	  mkfs.ext4 /dev/root_partition
	  mkswap /dev/swap_partition
	  mkfs.fat -F 32 /dev/efi_system_partition
	  ```
	- 挂载分区
	  ```
	  mount /dev/root_partition
	  mount --mkdir /dev/efi_system_partition /mnt/boot
	  swapon /dev/swap_partition
	  lsblk #查看情况
	  ```
-