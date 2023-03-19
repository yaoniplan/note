# livegui password
```
Ctrl-Alt-F1 # new a terminal
su root
passwd gentoo
Ctrl-Alt-F7 # return login
# enter password just configured
```

# Substitute root user
```
doas passwd
su root
```

# Test network
```
ip address
ping -c 3 gentoo.org
```

# Partition disks
```
fdisk /dev/sda
```
## References
```
Device        Start       End   Sectors   Size Type
/dev/sda1      2048   1050623   1048576   512M EFI System
/dev/sda2   1050624  51382271  50331648    24G Linux swap
/dev/sda3  51382272 468862094 417479823 199.1G Linux root (x86-64)
```

# Format partitions (Make file system)
```
mkfs.fat -F 32 /dev/sda1
mkfs.ext4 /dev/sda3
mkswap /dev/sda2
swapon /dev/sda2
```

# Mount root and swap partition
```
swapon /dev/sda2
mkdir -p /mnt/gentoo
mount /dev/sda3 /mnt/gentoo
```

# Install stage tarball
## Download stage tarball
```
cd /mnt/gentoo
links https://gentoo.org/downloads/
```
### Notes
* Search "Stage 3" by pressing "/" (slash)
* If you don't want to download "Stage 3" online, you can copy it from your disk to /mnt/gentoo folder
## Unpack the stage tarball
```
tar xpvf stage3-*.tar.xz --xattrs-include='*.*' --numeric-owner
```

# Configure compile options
```
vim /mnt/gentoo/etc/portage/make.conf
```
## Notes
- Use Vi if you don't have Vim
- `-j6` # Memory/2 (e.g. 12/2=6)
## References
```
COMMON_FLAGS="-march=native -O2 -pipe"
MAKEOPTS="-j6"
```

# Chroot
## View mirrors
```
links https://gentoo.org/downloads/mirrors/
```
### Notes
* `links https://gentoo.org/downloads/mirrors/` # By search (press "/") country (e.g. China) to view mirrors in your country
## Add mirrors
```
vim /mnt/gentoo/etc/portage/make.conf
```
### Notes
- `https://mirrors.ustc.edu.cn/gentoo/` # Replace it with a mirror in your country
- `VIDEO_CARDS="intel i965"` # Don't required for a console only install
### References
```
GENTOO_MIRRORS="https://mirrors.ustc.edu.cn/gentoo/" 

# Language
L10N="en-US en"
LINGUAS="en_US en"

VIDEO_CARDS="intel i965"
```
## Configure Gentoo ebuild repository
```
mkdir -p /mnt/gentoo/etc/portage/repos.conf/
vim /mnt/gentoo/etc/portage/repos.conf/gentoo.conf
```
### Notes
- `rsync://rsync.mirrors.ustc.edu.cn/gentoo-portage/` # Replace it with a sync-uri in your country
### References
```
[DEFAULT]
main-repo = gentoo

[gentoo]
location = /usr/portage
sync-type = rsync
sync-uri = rsync://rsync.mirrors.ustc.edu.cn/gentoo-portage/
auto-sync = yes
```
## Copy DNS info
```
cp --dereference /etc/resolv.conf /mnt/gentoo/etc/
```
### Notes
- It is very important, because you may not beable to access the internet
### References
```
domain Home
nameserver 192.168.10.1
```
## Mount filesystems
```
mount --types proc /proc /mnt/gentoo/proc
mount --rbind /sys /mnt/gentoo/sys
mount --rbind /dev /mnt/gentoo/dev
mount --bind /run /mnt/gentoo/run
```
### Notes
```
mount --types proc /proc /mnt/gentoo/proc
mount --rbind /sys /mnt/gentoo/sys
mount --make-rslave /mnt/gentoo/sys
mount --rbind /dev /mnt/gentoo/dev
mount --make-rslave /mnt/gentoo/dev
mount --bind /run /mnt/gentoo/run
mount --make-slave /mnt/gentoo/run
```
* `--make-rslave` # Add the above three sentences if you are systemd
## Enter new environment
```
chroot /mnt/gentoo /bin/bash
source /etc/profile
```
```
export PS1="(chroot) ${PS1}"
```
## Mount boot partition
```
mount /dev/sda1 /boot
```

# Configure portage
## Update Gentoo ebuild repository
```
emerge-webrsync
```
## Choose profile
```
eselect profile list
eselect profile set 1
```
### Notes
* `1` # The first profile is "[1]   default/linux/amd64/17.1 (stable) * "
## Update @world set
```
emerge --ask --verbose --update --deep --newuse @world
etc-update
emerge --ask --verbose --update --deep --newuse @world
```
### Notes
* `emerge --ask --verbose --update --deep --newuse @world`
* `etc-update` # enter "-3" to auto emerge all files

# Timezone
```
ls /usr/share/zoneinfo
```
## OpenRC
```
echo "Asia/Shanghai" > /etc/timezone
emerge --config sys-libs/timezone-data
```
### Notes
* `"Asia/Shanghai"` # Replace it with your timezone
* `emerge --config sys-libs/timezone-data` # Copy /usr/share/zoneinfo/Asia/Shanghai to /etc/localtime

# Configure locales
## Generate locale
```
emerge -q vim
vim /etc/locale.gen
```
### References
```
en_US ISO-8859-1
en_US.UTF-8 UTF-8
```
## Generate specified locales
```
locale-gen
```
### Notes
* `locale-gen` # Generage locales
* `man locale-gen`
## List locale
```
eselect locale list
```
### References
```
(chroot) livecd / # eselect locale list
Available targets for the LANG variable:
  [1]   C
  [2]   C.utf8
  [3]   POSIX
  [4]   en_US
  [5]   en_US.iso88591
  [6]   en_US.utf8
  [7]   C.UTF8 *
  [ ]   (free form)
```
## Select locale
```
eselect locale set 6
```
### Notes
* `6` # The 6th locale is "en_US.utf-8"
## Reload environment
```
env-update && source /etc/profile && export PS1="(chroot) ${PS1}"
```

# Configure and compile kernel
## Install gentoo source
```
emerge -q sys-kernel/gentoo-sources
eselect kernel list
eselect kernel set 1
ls -l /usr/src/linux
```
### Notes
* `1` # The first is "[1]   linux-5.15.80-gentoo"
## Manual configuration
```
lsmod
cd /usr/src/linux
make menuconfig
make -j6 && make modules_install
make install
```
### Notes
* `make menuconfig` # Refer to https://wiki.gentoo.org/wiki/Handbook:AMD64/Full/Installation#Activating_required_options
* `-j6` # Replace it with yours
* `make -j6 && make modules_install` # It will spend about twenty minutes. (e.g. 03:40-04:00)
## Build an inintramfs
```
emerge -q sys-kernel/genkernel
genkernel --help
```
```
vim /etc/fstab
genkernel all
ls /boot/vmlinu* /boot/initramfs*
```
### Notes
* `emerge -q --autounmask=y --autounmask-write sys-kernel/genkernel` # When display the problem about "have been masked"
    * `etc-update`
    * `-3` # Emerge automatically
    * `emerge -q system-kernel/genkernel`
* `blkid` # Before enter "vim /etc/fstab" you can enter it
* `genkernel all` # It will spend about two hours. (e.g. 04:35-06:15)

# Configure filesystem info
### References
```
UUID=89D2-9757                              /boot   vfat    defaults,noatime   0 2
UUID=4d060c93-6aeb-4b4d-b751-6da0d35192b6   none    swap    sw                 0 0
UUID=30194187-772e-4598-9982-fa120ec59098   /       ext4    noatime            0 1
UUID=f75f68b6-d1b3-4062-9a22-7dbff615efb6   /mnt/Toshiba ext4 defaults       0 0
```

# Configure network
```
echo tux > /etc/hostname
emerge -q net-misc/dhcpcd
rc-update add dhcpcd default
rc-service dhcpcd start
```

# Configure system information
```
passwd root
```
# Configure system logger (Optional)
```
emerge -q app-admin/sysklogd
rc-update add sysklogd default
```

# Configure corn daemon (Optional)
```
emerge -q sys-process/cronie
rc-update add cronie default
```

# Index file (Optional)
```
emerge -q sys-apps/mlocate
```

# Configure filesystem tools (Optional)
```
emerge -q sys-fs/btrfs-progs
```
## References
```
Filesystem          Package
Ext 4               sys-fs/e2fsprogs
XFS                 sys-fs/xfsprogs
ReiserFS            sys-fs/reiserfsprogs
JFS                 sys-fs/jfsutils
VFAT (FAT32, ...)   sys-fs/dosfstools
Btrfs               sys-fs/btrfs-progs
ZFS                 sys-fs/zfs
```

# Select boot loader
## GRUB (UEFI)
```
echo 'GRUB_PLATFORMS="efi-64"' >> /etc/portage/make.conf
emerge -q sys-boot/grub
grub-install --target=x86_64-efi --efi-directory=/boot
grub-mkconfig -o /boot/grub/grub.cfg
```

# Reboot system
```
exit
```
```
cd
umount -l /mnt/gentoo/dev{/shm,/pts,}
umount -R /mnt/gentoo
reboot
```
## Notes
* Remove bootable CD, otherwise the CD might be booted again instead of the new Gentoo system

# User
```
useradd -m -G users,wheel,audio -s /bin/bash yaoniplan
passwd yaoniplan
```

# Configure doas
```
emerge -q app-admin/doas
vim /etc/doas.conf
su heting
```
```
doas vim ~/.bashrc
```
## References
```
permit :wheel
```
```
complete -cf doas
```

# screenfetch
```
doas emerge -q screenfetch
screenfetch
```

# WM
```
doas emerge -q --autounmask-write x11-wm/i3-gaps x11-misc/sddm
doas vim /etc/conf.d/display-manager
doas rc-update add display-manager default
rc-service display-manager start
```
## References
```
CHECKVT=7
DISPLAYMANAGER="sddm"
```
## Notes
* `--autounmask-write`
	* `-3`
	* `y`
	* `doas emerge -q x11-wm/i3-gaps x11-misc/sddm`

# Install google-chrome
```
doas emerge -q --autounmask=y --autounmask-write www-client/google-chrome
```
## Notes
* `--autounmask=y` `--autounmask-write` # Solve a problem about "have been masked"
	* `doas etc-update`
	* `-3`
	* `y`
	* `doas emerge -q www-client/google-chrome`

# Install fonts
```
doas emerge -q media-fonts/wqy-zenhei
doas eselect fontconfig enable 44-wqy-zenhei.conf
```
## Notes
* Reboot the operating system to use the Chinese fonts.

# Install x11-misc/i3lock
```
doas emerge -q x11-misc/i3lock
doas vim ~/.config/i3/config
```
## References
```
# I3lock (a screen locker)
bindsym $mod+o exec i3lock -c 000000
```

# Update ebuild repository
```
doas emerge-webrsync
```

# Update the Gento Linux operating system itself
```
doas emerge -avuDN @world
```

# References
```
yaoniplan@yaoniplan ~ $ screenfetch
         -/oyddmdhs+:.                yaoniplan@yaoniplan
     -odNMMMMMMMMNNmhy+-`             OS: Gentoo 2.9
   -yNMMMMMMMMMMMNNNmmdhy+-           Kernel: x86_64 Linux 5.15.80-gentoo-x86_64
 `omMMMMMMMMMMMMNmdmmmmddhhy/`        Uptime: 0m
 omMMMMMMMMMMMNhhyyyohmdddhhhdo`      Packages: 648
.ydMMMMMMMMMMdhs++so/smdddhhhhdm+`    Shell: bash 5.1.16
 oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.   Resolution: 1366x768
  :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh   WM: i3
    .:+sydNMMMMMNNNmmmdddhhhhhhmMmy   GTK Theme: Adwaita [GTK3]
       /mMMMMMMNNNmmmdddhhhhhmMNhs:   Disk: 17G / 196G (9%)
    `oNMMMMMMMNNNmmmddddhhdmMNhs+`    CPU: Intel Core i5-3230M @ 4x 3.2GHz
  `sNMMMMMMMMNNNmmmdddddmNMmhs/.      GPU: AMD/ATI Seymour [Radeon HD 6400M/7400M Series]
 /NMMMMMMMMNNNNmmmdddmNMNdso:`        RAM: 1432MiB / 11857MiB
+MMMMMMMNNNNNmmmmdmNMNdso/-
yMMNNNNNNNmmmmmNNMmhs+/-`
/hMMNNNNNNNNMNdhs++/-`
`/ohdmmddhys+++/:.`
  `-//////:--.
yaoniplan@yaoniplan ~ $
```
```

```
* https://wiki.gentoo.org/wiki/Handbook:AMD64/Full/Installation
* https://mirrors.ustc.edu.cn/help/gentoo-portage.html
* https://www.bilibili.com/video/BV1ny4y1i7G6?p=2
* https://zjuyk.gitlab.io/posts/i3wm-config/
