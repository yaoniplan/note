# /etc/skel/.bash_profile

# This file is sourced by bash for login shells.  The following line
# runs your .bashrc and is recommended by the bash info pages.
if [[ -f ~/.bashrc ]] ; then
	. ~/.bashrc
fi

# Proxy
export http_proxy="127.0.0.1:7890"
export https_proxy="127.0.0.1:7890"
export no_proxy="localhost, 127.0.0.1"
