- #### The abbreviation of "Local Area Network" is "LAN".
    - A computer network
        - Interconnect computers
        - Within a limited area
- ***References***
    - https://en.wikipedia.org/wiki/Local_area_network
    - ChatGPT
- ---
- #### Enable the docker daemon in Nix
    - `doas dockerd &`
- ***Notes***
    - Solve the problem
      ```
      yaoniplan@tux ~/testMath $ docker ps
      Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
      yaoniplan@tux ~/testMath $
      ```
- ***References***
    - https://github.com/docker/for-linux/issues/535#issuecomment-676861423
- ---
- #### Check if a file is a symbolic link in Bash
    - `vi ~/.local/bin/convertMarkdownToHtml.sh`
      ```
      if [[ -L $HOME/note/README.md ]]; then
          ln -s $(find $HOME/note/journals/ | tail -1) $HOME/note/README.md
      fi
      ```
- ***Notes***
    - `-L` # Link
- ***References***
    - `man bash` # `/-L`
    - ChatGPT
- ---
- #### The abbreviation of "Digital Versatile Disc" is "DVD".
    - A format
    - To Store data
- ***Notes***
    - Because to replace Linux server with other Linux distributions.
- ***References***
    - https://en.wikipedia.org/wiki/DVD
- ---
- #### Set a static IP in Arch Linux
    - `doas vim /etc/systemd/network/enp2s0.network`
      ```
      [Match]
      Name=enp2s0

      [Network]
      DHCP=no
      Address=192.168.10.100/24
      Gateway=192.168.10.1
      ```
    - `doas systemctl enable systemd-networkd.service` # Run at boot time
    - `doas systemctl restart systemd-networkd.service` # Apply changes
- ***Notes***
    - `enp2s0` # Replace it with your interface name
        - `ip address` # Get it
    - `192.168.10.100` # Replace it with your desired static IP address
    - `192.168.10.1` # Replace it with your default gataway
        - `ip route | awk '/default/ {print $3}'` # Get it
- ***References***
    - ChatGPT
- ---
