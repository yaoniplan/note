# configuration

## gentoo_media-gfx_feh_wallpaper
```
https://github.com/yaoniplan/note/blob/39392a2f4d5cae08e3cc1751b04c59b6bef776cb/assets/dark_1662509469645_0.jpg
```

## gentoo_environment
```
# "/etc/environment"

# Proxy
export http_proxy="127.0.0.1:7890"
export https_proxy="127.0.0.1:7890"
export no_proxy="localhost, 127.0.0.1"
```

## gentoo_x11-terms_alacritty.yml
```
# "~/.config/alacritty/alacritty.yml"

# Values for `shape`:
#    - ▇ Block
#    - _ Underline
#    - | Beam
cursor:
  style:
    shape: Beam 
    blinking: Always
  blink_interval: 160

  vi_mode_style:
    shape: Beam
  thickness: 0.15
```

## gentoo_x11-wm_i3-gaps_config
```
# "~/.config/i3/config"

# Mod1 is "alt" (you can view the modifier keys by typing "xmodmap" in terminal if you had downloaded "xmodmap")
set $mod Mod1

# Audio_PulseAudio (F10 is "+10%", F9 is "-10%", F11 is "mute" in my laptop)
bindsym $mod+F10 exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ +10% && $refresh_i3status
bindsym $mod+F9 exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ -10% && $refresh_i3status
bindsym $mod+F11 exec --no-startup-id pactl set-sink-mute @DEFAULT_SINK@ toggle && $refresh_i3status

# terminal (e.g. alacritty, fish, ,kitty, st, etc.)
bindsym $mod+Return exec alacritty

# change focus (like vim)
bindsym $mod+h focus left
bindsym $mod+j focus down
bindsym $mod+k focus up
bindsym $mod+l focus right

# alternatively, you can use the cursor keys: (uncomment hotkey below so that avoid conflicting with chrome hotkey)
# bindsym $mod+Left focus left
# bindsym $mod+Down focus down
# bindsym $mod+Up focus up
# bindsym $mod+Right focus right

# move focused window (like vim)
bindsym $mod+Shift+h move left
bindsym $mod+Shift+j move down
bindsym $mod+Shift+k move up
bindsym $mod+Shift+l move right

# split in horizontal orientation (avoid conflicting with "change focus" hotkey)
bindsym $mod+semicolon split h

# exit i3 (logs you out of your X session) (exit i3 without mouse click)
bindsym $mod+Shift+e exit

        bindsym h resize grow width 10 px or 10 ppt
        bindsym j resize shrink height 10 px or 10 ppt
        bindsym k resize grow height 10 px or 10 ppt
        bindsym l resize shrink width 10 px or 10 ppt

        # same bindings, but for the arrow keys
        bindsym Left resize grow width 10 px or 10 ppt
        bindsym Down resize shrink height 10 px or 10 ppt
        bindsym Up resize grow height 10 px or 10 ppt
        bindsym Right resize shrink width 10 px or 10 ppt

# Start i3bar to display a workspace bar (plus the system information i3status
# finds out, if available) (bar is invisible)
bar {
        mode invisible
        status_command i3status
}

# Redshift (install "x11-misc/redshift")
exec --no-startup-id redshift -O 1800
 
# Gaps (install "x11-wm/i3-gaps")
for_window [class="^.*"] border pixel 0
 
# Wallpaper (install "media-gfx/feh")
exec --no-startup-id feh --bg-scale ~/app/i3/gentoo_media-gfx_feh_wallpaper/dark.jpg
 
# Proxy (clash-for-windows)
exec --no-startup-id ~/app/Clash\ for\ Windows-0.20.5-x64-linux/cfw
 
# Assign
assign [class="^Google-chrome$"] number 1
 
# Browser (install "www-client/google-chrome")
exec google-chrome-stable
 
# Text editor (logseq)
exec ~/app/Logseq-linux-x64/Logseq
 
# Scratchpad
bindsym $mod+Shift+minus move scratchpad
bindsym $mod+minus scratchpad show
for_window [class="^Logseq$"] move scratchpad
 
# Screenshot (install "media-gfx/flameshot")
bindsym Print exec flameshot gui
 
# Audio
exec --no-startup-id pulseaudio

# Brightness ("/sys/class" "backlight" "radeon" "brightness")
```

## gentoo_x11-wm_i3-gaps_config_example

```
# i3 config file (v4)
#
# Please see https://i3wm.org/docs/userguide.html for a complete reference!
#
# This config file uses keycodes (bindsym) and was written for the QWERTY
# layout.
#
# To get a config file with the same key positions, but for your current
# layout, use the i3-config-wizard
#

# Font for window titles. Will also be used by the bar unless a different font
# is used in the bar {} block below.
font pango:monospace 8

# This font is widely installed, provides lots of unicode glyphs, right-to-left
# text rendering and scalability on retina/hidpi displays (thanks to pango).
#font pango:DejaVu Sans Mono 8

# Start XDG autostart .desktop files using dex. See also
# https://wiki.archlinux.org/index.php/XDG_Autostart
exec --no-startup-id dex --autostart --environment i3

# The combination of xss-lock, nm-applet and pactl is a popular choice, so
# they are included here as an example. Modify as you see fit.

# xss-lock grabs a logind suspend inhibit lock and will use i3lock to lock the
# screen before suspend. Use loginctl lock-session to lock your screen.
exec --no-startup-id xss-lock --transfer-sleep-lock -- i3lock --nofork

# NetworkManager is the most popular way to manage wireless networks on Linux,
# and nm-applet is a desktop environment-independent system tray GUI for it.
exec --no-startup-id nm-applet

# Use pactl to adjust volume in PulseAudio.
set $refresh_i3status killall -SIGUSR1 i3status
bindsym XF86AudioRaiseVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ +10% && $refresh_i3status
bindsym XF86AudioLowerVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ -10% && $refresh_i3status
bindsym XF86AudioMute exec --no-startup-id pactl set-sink-mute @DEFAULT_SINK@ toggle && $refresh_i3status
bindsym XF86AudioMicMute exec --no-startup-id pactl set-source-mute @DEFAULT_SOURCE@ toggle && $refresh_i3status

# use these keys for focus, movement, and resize directions when reaching for
# the arrows is not convenient
set $up l
set $down k
set $left j
set $right semicolon

# use Mouse+Mod1 to drag floating windows to their wanted position
floating_modifier Mod1

# start a terminal
bindsym Mod1+Return exec i3-sensible-terminal

# kill focused window
bindsym Mod1+Shift+q kill

# start dmenu (a program launcher)
bindsym Mod1+d exec --no-startup-id dmenu_run
# A more modern dmenu replacement is rofi:
# bindsym Mod1+d exec "rofi -modi drun,run -show drun"
# There also is i3-dmenu-desktop which only displays applications shipping a
# .desktop file. It is a wrapper around dmenu, so you need that installed.
# bindsym Mod1+d exec --no-startup-id i3-dmenu-desktop

# change focus
bindsym Mod1+$left focus left
bindsym Mod1+$down focus down
bindsym Mod1+$up focus up
bindsym Mod1+$right focus right

# alternatively, you can use the cursor keys:
bindsym Mod1+Left focus left
bindsym Mod1+Down focus down
bindsym Mod1+Up focus up
bindsym Mod1+Right focus right

# move focused window
bindsym Mod1+Shift+$left move left
bindsym Mod1+Shift+$down move down
bindsym Mod1+Shift+$up move up
bindsym Mod1+Shift+$right move right

# alternatively, you can use the cursor keys:
bindsym Mod1+Shift+Left move left
bindsym Mod1+Shift+Down move down
bindsym Mod1+Shift+Up move up
bindsym Mod1+Shift+Right move right

# split in horizontal orientation
bindsym Mod1+h split h

# split in vertical orientation
bindsym Mod1+v split v

# enter fullscreen mode for the focused container
bindsym Mod1+f fullscreen toggle

# change container layout (stacked, tabbed, toggle split)
bindsym Mod1+s layout stacking
bindsym Mod1+w layout tabbed
bindsym Mod1+e layout toggle split

# toggle tiling / floating
bindsym Mod1+Shift+space floating toggle

# change focus between tiling / floating windows
bindsym Mod1+space focus mode_toggle

# focus the parent container
bindsym Mod1+a focus parent

# focus the child container
#bindsym Mod1+d focus child

# move the currently focused window to the scratchpad
bindsym Mod1+Shift+minus move scratchpad

# Show the next scratchpad window or hide the focused scratchpad window.
# If there are multiple scratchpad windows, this command cycles through them.
bindsym Mod1+minus scratchpad show

# Define names for default workspaces for which we configure key bindings later on.
# We use variables to avoid repeating the names in multiple places.
set $ws1 "1"
set $ws2 "2"
set $ws3 "3"
set $ws4 "4"
set $ws5 "5"
set $ws6 "6"
set $ws7 "7"
set $ws8 "8"
set $ws9 "9"
set $ws10 "10"

# switch to workspace
bindsym Mod1+1 workspace number $ws1
bindsym Mod1+2 workspace number $ws2
bindsym Mod1+3 workspace number $ws3
bindsym Mod1+4 workspace number $ws4
bindsym Mod1+5 workspace number $ws5
bindsym Mod1+6 workspace number $ws6
bindsym Mod1+7 workspace number $ws7
bindsym Mod1+8 workspace number $ws8
bindsym Mod1+9 workspace number $ws9
bindsym Mod1+0 workspace number $ws10

# move focused container to workspace
bindsym Mod1+Shift+1 move container to workspace number $ws1
bindsym Mod1+Shift+2 move container to workspace number $ws2
bindsym Mod1+Shift+3 move container to workspace number $ws3
bindsym Mod1+Shift+4 move container to workspace number $ws4
bindsym Mod1+Shift+5 move container to workspace number $ws5
bindsym Mod1+Shift+6 move container to workspace number $ws6
bindsym Mod1+Shift+7 move container to workspace number $ws7
bindsym Mod1+Shift+8 move container to workspace number $ws8
bindsym Mod1+Shift+9 move container to workspace number $ws9
bindsym Mod1+Shift+0 move container to workspace number $ws10

# reload the configuration file
bindsym Mod1+Shift+c reload
# restart i3 inplace (preserves your layout/session, can be used to upgrade i3)
bindsym Mod1+Shift+r restart
# exit i3 (logs you out of your X session)
bindsym Mod1+Shift+e exec "i3-nagbar -t warning -m 'You pressed the exit shortcut. Do you really want to exit i3? This will end your X session.' -B 'Yes, exit i3' 'i3-msg exit'"

# resize window (you can also use the mouse for that)
mode "resize" {
        # These bindings trigger as soon as you enter the resize mode

        # Pressing left will shrink the window’s width.
        # Pressing right will grow the window’s width.
        # Pressing up will shrink the window’s height.
        # Pressing down will grow the window’s height.
        bindsym $left       resize shrink width 10 px or 10 ppt
        bindsym $down       resize grow height 10 px or 10 ppt
        bindsym $up         resize shrink height 10 px or 10 ppt
        bindsym $right      resize grow width 10 px or 10 ppt

        # same bindings, but for the arrow keys
        bindsym Left        resize shrink width 10 px or 10 ppt
        bindsym Down        resize grow height 10 px or 10 ppt
        bindsym Up          resize shrink height 10 px or 10 ppt
        bindsym Right       resize grow width 10 px or 10 ppt

        # back to normal: Enter or Escape or Mod1+r
        bindsym Return mode "default"
        bindsym Escape mode "default"
        bindsym Mod1+r mode "default"
}

bindsym Mod1+r mode "resize"

# Start i3bar to display a workspace bar (plus the system information i3status
# finds out, if available)
bar {
        status_command i3status
}

#######################################################################
# automatically start i3-config-wizard to offer the user to create a
# keysym-based config which used their favorite modifier (alt or windows)
#
# i3-config-wizard will not launch if there already is a config file
# in ~/.config/i3/config (or $XDG_CONFIG_HOME/i3/config if set) or
# ~/.i3/config.
#
# Please remove the following exec line:
#######################################################################
exec i3-config-wizard
```

## gentoo_x11-terms_alacritty_example.yml
```
# Configuration for Alacritty, the GPU enhanced terminal emulator.

# Import additional configuration files
#
# Imports are loaded in order, skipping all missing files, with the importing
# file being loaded last. If a field is already present in a previous import, it
# will be replaced.
#
# All imports must either be absolute paths starting with `/`, or paths relative
# to the user's home directory starting with `~/`.
#import:
#  - /path/to/alacritty.yml

# Any items in the `env` entry below will be added as
# environment variables. Some entries may override variables
# set by alacritty itself.
#env:
  # TERM variable
  #
  # This value is used to set the `$TERM` environment variable for
  # each instance of Alacritty. If it is not present, alacritty will
  # check the local terminfo database and use `alacritty` if it is
  # available, otherwise `xterm-256color` is used.
  #TERM: alacritty

#window:
  # Window dimensions (changes require restart)
  #
  # Number of lines/columns (not pixels) in the terminal. The number of columns
  # must be at least `2`, while using a value of `0` for columns and lines will
  # fall back to the window manager's recommended size.
  #dimensions:
  #  columns: 0
  #  lines: 0

  # Window position (changes require restart)
  #
  # Specified in number of pixels.
  # If the position is not set, the window manager will handle the placement.
  #position:
  #  x: 0
  #  y: 0

  # Window padding (changes require restart)
  #
  # Blank space added around the window in pixels. This padding is scaled
  # by DPI and the specified value is always added at both opposing sides.
  #padding:
  #  x: 0
  #  y: 0

  # Spread additional padding evenly around the terminal content.
  #dynamic_padding: false

  # Window decorations
  #
  # Values for `decorations`:
  #     - full: Borders and title bar
  #     - none: Neither borders nor title bar
  #
  # Values for `decorations` (macOS only):
  #     - transparent: Title bar, transparent background and title bar buttons
  #     - buttonless: Title bar, transparent background and no title bar buttons
  #decorations: full

  # Background opacity
  #
  # Window opacity as a floating point number from `0.0` to `1.0`.
  # The value `0.0` is completely transparent and `1.0` is opaque.
  #opacity: 1.0

  # Startup Mode (changes require restart)
  #
  # Values for `startup_mode`:
  #   - Windowed
  #   - Maximized
  #   - Fullscreen
  #
  # Values for `startup_mode` (macOS only):
  #   - SimpleFullscreen
  #startup_mode: Windowed

  # Window title
  #title: Alacritty

  # Allow terminal applications to change Alacritty's window title.
  #dynamic_title: true

  # Window class (Linux/BSD only):
  #class:
    # Application instance name
    #instance: Alacritty
    # General application class
    #general: Alacritty

  # GTK theme variant (Linux/BSD only)
  #
  # Override the variant of the GTK theme. Commonly supported values are `dark`
  # and `light`. Set this to `None` to use the default theme variant.
  #gtk_theme_variant: None

#scrolling:
  # Maximum number of lines in the scrollback buffer.
  # Specifying '0' will disable scrolling.
  #history: 10000

  # Scrolling distance multiplier.
  #multiplier: 3

# Font configuration
#font:
  # Normal (roman) font face
  #normal:
    # Font family
    #
    # Default:
    #   - (macOS) Menlo
    #   - (Linux/BSD) monospace
    #   - (Windows) Consolas
    #family: monospace

    # The `style` can be specified to pick a specific face.
    #style: Regular

  # Bold font face
  #bold:
    # Font family
    #
    # If the bold family is not specified, it will fall back to the
    # value specified for the normal font.
    #family: monospace

    # The `style` can be specified to pick a specific face.
    #style: Bold

  # Italic font face
  #italic:
    # Font family
    #
    # If the italic family is not specified, it will fall back to the
    # value specified for the normal font.
    #family: monospace

    # The `style` can be specified to pick a specific face.
    #style: Italic

  # Bold italic font face
  #bold_italic:
    # Font family
    #
    # If the bold italic family is not specified, it will fall back to the
    # value specified for the normal font.
    #family: monospace

    # The `style` can be specified to pick a specific face.
    #style: Bold Italic

  # Point size
  #size: 11.0

  # Offset is the extra space around each character. `offset.y` can be thought
  # of as modifying the line spacing, and `offset.x` as modifying the letter
  # spacing.
  #offset:
  #  x: 0
  #  y: 0

  # Glyph offset determines the locations of the glyphs within their cells with
  # the default being at the bottom. Increasing `x` moves the glyph to the
  # right, increasing `y` moves the glyph upward.
  #glyph_offset:
  #  x: 0
  #  y: 0

  # Thin stroke font rendering (macOS only)
  #
  # Thin strokes are suitable for retina displays, but for non-retina screens
  # it is recommended to set `use_thin_strokes` to `false`.
  #use_thin_strokes: true

  # Use built-in font for box drawing characters.
  #
  # If `true`, Alacritty will use a custom built-in font for box drawing
  # characters (Unicode points 2500 - 259f).
  #
  #builtin_box_drawing: true

# If `true`, bold text is drawn using the bright color variants.
#draw_bold_text_with_bright_colors: false

# Colors (Tomorrow Night)
#colors:
  # Default colors
  #primary:
  #  background: '#1d1f21'
  #  foreground: '#c5c8c6'

    # Bright and dim foreground colors
    #
    # The dimmed foreground color is calculated automatically if it is not
    # present. If the bright foreground color is not set, or
    # `draw_bold_text_with_bright_colors` is `false`, the normal foreground
    # color will be used.
    #dim_foreground: '#828482'
    #bright_foreground: '#eaeaea'

  # Cursor colors
  #
  # Colors which should be used to draw the terminal cursor.
  #
  # Allowed values are CellForeground/CellBackground, which reference the
  # affected cell, or hexadecimal colors like #ff00ff.
  #cursor:
  #  text: CellBackground
  #  cursor: CellForeground

  # Vi mode cursor colors
  #
  # Colors for the cursor when the vi mode is active.
  #
  # Allowed values are CellForeground/CellBackground, which reference the
  # affected cell, or hexadecimal colors like #ff00ff.
  #vi_mode_cursor:
  #  text: CellBackground
  #  cursor: CellForeground

  # Search colors
  #
  # Colors used for the search bar and match highlighting.
  #search:
    # Allowed values are CellForeground/CellBackground, which reference the
    # affected cell, or hexadecimal colors like #ff00ff.
    #matches:
    #  foreground: '#000000'
    #  background: '#ffffff'
    #focused_match:
    #  foreground: '#ffffff'
    #  background: '#000000'

    #bar:
    #  background: '#c5c8c6'
    #  foreground: '#1d1f21'

  # Keyboard regex hints
  #hints:
    # First character in the hint label
    #
    # Allowed values are CellForeground/CellBackground, which reference the
    # affected cell, or hexadecimal colors like #ff00ff.
    #start:
    #  foreground: '#1d1f21'
    #  background: '#e9ff5e'

    # All characters after the first one in the hint label
    #
    # Allowed values are CellForeground/CellBackground, which reference the
    # affected cell, or hexadecimal colors like #ff00ff.
    #end:
    #  foreground: '#e9ff5e'
    #  background: '#1d1f21'

  # Line indicator
  #
  # Color used for the indicator displaying the position in history during
  # search and vi mode.
  #
  # By default, these will use the opposing primary color.
  #line_indicator:
  #  foreground: None
  #  background: None

  # Selection colors
  #
  # Colors which should be used to draw the selection area.
  #
  # Allowed values are CellForeground/CellBackground, which reference the
  # affected cell, or hexadecimal colors like #ff00ff.
  #selection:
  #  text: CellBackground
  #  background: CellForeground

  # Normal colors
  #normal:
  #  black:   '#1d1f21'
  #  red:     '#cc6666'
  #  green:   '#b5bd68'
  #  yellow:  '#f0c674'
  #  blue:    '#81a2be'
  #  magenta: '#b294bb'
  #  cyan:    '#8abeb7'
  #  white:   '#c5c8c6'

  # Bright colors
  #bright:
  #  black:   '#666666'
  #  red:     '#d54e53'
  #  green:   '#b9ca4a'
  #  yellow:  '#e7c547'
  #  blue:    '#7aa6da'
  #  magenta: '#c397d8'
  #  cyan:    '#70c0b1'
  #  white:   '#eaeaea'

  # Dim colors
  #
  # If the dim colors are not set, they will be calculated automatically based
  # on the `normal` colors.
  #dim:
  #  black:   '#131415'
  #  red:     '#864343'
  #  green:   '#777c44'
  #  yellow:  '#9e824c'
  #  blue:    '#556a7d'
  #  magenta: '#75617b'
  #  cyan:    '#5b7d78'
  #  white:   '#828482'

  # Indexed Colors
  #
  # The indexed colors include all colors from 16 to 256.
  # When these are not set, they're filled with sensible defaults.
  #
  # Example:
  #   `- { index: 16, color: '#ff00ff' }`
  #
  #indexed_colors: []

  # Transparent cell backgrounds
  #
  # Whether or not `window.opacity` applies to all cell backgrounds or only to
  # the default background. When set to `true` all cells will be transparent
  # regardless of their background color.
  #transparent_background_colors: false

# Bell
#
# The bell is rung every time the BEL control character is received.
#bell:
  # Visual Bell Animation
  #
  # Animation effect for flashing the screen when the visual bell is rung.
  #
  # Values for `animation`:
  #   - Ease
  #   - EaseOut
  #   - EaseOutSine
  #   - EaseOutQuad
  #   - EaseOutCubic
  #   - EaseOutQuart
  #   - EaseOutQuint
  #   - EaseOutExpo
  #   - EaseOutCirc
  #   - Linear
  #animation: EaseOutExpo

  # Duration of the visual bell flash in milliseconds. A `duration` of `0` will
  # disable the visual bell animation.
  #duration: 0

  # Visual bell animation color.
  #color: '#ffffff'

  # Bell Command
  #
  # This program is executed whenever the bell is rung.
  #
  # When set to `command: None`, no command will be executed.
  #
  # Example:
  #   command:
  #     program: notify-send
  #     args: ["Hello, World!"]
  #
  #command: None

#selection:
  # This string contains all characters that are used as separators for
  # "semantic words" in Alacritty.
  #semantic_escape_chars: ",│`|:\"' ()[]{}<>\t"

  # When set to `true`, selected text will be copied to the primary clipboard.
  #save_to_clipboard: false

#cursor:
  # Cursor style
  #style:
    # Cursor shape
    #
    # Values for `shape`:
    #   - ▇ Block
    #   - _ Underline
    #   - | Beam
    #shape: Block

    # Cursor blinking state
    #
    # Values for `blinking`:
    #   - Never: Prevent the cursor from ever blinking
    #   - Off: Disable blinking by default
    #   - On: Enable blinking by default
    #   - Always: Force the cursor to always blink
    #blinking: Off

  # Vi mode cursor style
  #
  # If the vi mode cursor style is `None` or not specified, it will fall back to
  # the style of the active value of the normal cursor.
  #
  # See `cursor.style` for available options.
  #vi_mode_style: None

  # Cursor blinking interval in milliseconds.
  #blink_interval: 750

  # If this is `true`, the cursor will be rendered as a hollow box when the
  # window is not focused.
  #unfocused_hollow: true

  # Thickness of the cursor relative to the cell width as floating point number
  # from `0.0` to `1.0`.
  #thickness: 0.15

# Live config reload (changes require restart)
#live_config_reload: true

# Shell
#
# You can set `shell.program` to the path of your favorite shell, e.g.
# `/bin/fish`. Entries in `shell.args` are passed unmodified as arguments to the
# shell.
#
# Default:
#   - (macOS) /bin/bash --login
#   - (Linux/BSD) user login shell
#   - (Windows) powershell
#shell:
#  program: /bin/bash
#  args:
#    - --login

# Startup directory
#
# Directory the shell is started in. If this is unset, or `None`, the working
# directory of the parent process will be used.
#working_directory: None

# Send ESC (\x1b) before characters when alt is pressed.
#alt_send_esc: true

# Offer IPC using `alacritty msg` (unix only)
#ipc_socket: true

#mouse:
  # Click settings
  #
  # The `double_click` and `triple_click` settings control the time
  # alacritty should wait for accepting multiple clicks as one double
  # or triple click.
  #double_click: { threshold: 300 }
  #triple_click: { threshold: 300 }

  # If this is `true`, the cursor is temporarily hidden when typing.
  #hide_when_typing: false

# Regex hints
#
# Terminal hints can be used to find text in the visible part of the terminal
# and pipe it to other applications.
#hints:
  # Keys used for the hint labels.
  #alphabet: "jfkdls;ahgurieowpq"

  # List with all available hints
  #
  # Each hint must have a `regex` and either an `action` or a `command` field.
  # The fields `mouse`, `binding` and `post_processing` are optional.
  #
  # The fields `command`, `binding.key`, `binding.mods`, `binding.mode` and
  # `mouse.mods` accept the same values as they do in the `key_bindings` section.
  #
  # The `mouse.enabled` field controls if the hint should be underlined while
  # the mouse with all `mouse.mods` keys held or the vi mode cursor is above it.
  #
  # If the `post_processing` field is set to `true`, heuristics will be used to
  # shorten the match if there are characters likely not to be part of the hint
  # (e.g. a trailing `.`). This is most useful for URIs.
  #
  # Values for `action`:
  #   - Copy
  #       Copy the hint's text to the clipboard.
  #   - Paste
  #       Paste the hint's text to the terminal or search.
  #   - Select
  #       Select the hint's text.
  #   - MoveViModeCursor
  #       Move the vi mode cursor to the beginning of the hint.
  #enabled:
  # - regex: "(ipfs:|ipns:|magnet:|mailto:|gemini:|gopher:|https:|http:|news:|file:|git:|ssh:|ftp:)\
  #           [^\u0000-\u001F\u007F-\u009F<>\"\\s{-}\\^⟨⟩`]+"
  #   command: xdg-open
  #   post_processing: true
  #   mouse:
  #     enabled: true
  #     mods: None
  #   binding:
  #     key: U
  #     mods: Control|Shift

# Mouse bindings
#
# Mouse bindings are specified as a list of objects, much like the key
# bindings further below.
#
# To trigger mouse bindings when an application running within Alacritty
# captures the mouse, the `Shift` modifier is automatically added as a
# requirement.
#
# Each mouse binding will specify a:
#
# - `mouse`:
#
#   - Middle
#   - Left
#   - Right
#   - Numeric identifier such as `5`
#
# - `action` (see key bindings for actions not exclusive to mouse mode)
#
# - Mouse exclusive actions:
#
#   - ExpandSelection
#       Expand the selection to the current mouse cursor location.
#
# And optionally:
#
# - `mods` (see key bindings)
#mouse_bindings:
#  - { mouse: Right,                 action: ExpandSelection }
#  - { mouse: Right,  mods: Control, action: ExpandSelection }
#  - { mouse: Middle, mode: ~Vi,     action: PasteSelection  }

# Key bindings
#
# Key bindings are specified as a list of objects. For example, this is the
# default paste binding:
#
# `- { key: V, mods: Control|Shift, action: Paste }`
#
# Each key binding will specify a:
#
# - `key`: Identifier of the key pressed
#
#    - A-Z
#    - F1-F24
#    - Key0-Key9
#
#    A full list with available key codes can be found here:
#    https://docs.rs/glutin/*/glutin/event/enum.VirtualKeyCode.html#variants
#
#    Instead of using the name of the keys, the `key` field also supports using
#    the scancode of the desired key. Scancodes have to be specified as a
#    decimal number. This command will allow you to display the hex scancodes
#    for certain keys:
#
#       `showkey --scancodes`.
#
# Then exactly one of:
#
# - `chars`: Send a byte sequence to the running application
#
#    The `chars` field writes the specified string to the terminal. This makes
#    it possible to pass escape sequences. To find escape codes for bindings
#    like `PageUp` (`"\x1b[5~"`), you can run the command `showkey -a` outside
#    of tmux. Note that applications use terminfo to map escape sequences back
#    to keys. It is therefore required to update the terminfo when changing an
#    escape sequence.
#
# - `action`: Execute a predefined action
#
#   - ToggleViMode
#   - SearchForward
#       Start searching toward the right of the search origin.
#   - SearchBackward
#       Start searching toward the left of the search origin.
#   - Copy
#   - Paste
#   - IncreaseFontSize
#   - DecreaseFontSize
#   - ResetFontSize
#   - ScrollPageUp
#   - ScrollPageDown
#   - ScrollHalfPageUp
#   - ScrollHalfPageDown
#   - ScrollLineUp
#   - ScrollLineDown
#   - ScrollToTop
#   - ScrollToBottom
#   - ClearHistory
#       Remove the terminal's scrollback history.
#   - Hide
#       Hide the Alacritty window.
#   - Minimize
#       Minimize the Alacritty window.
#   - Quit
#       Quit Alacritty.
#   - ToggleFullscreen
#   - SpawnNewInstance
#       Spawn a new instance of Alacritty.
#   - CreateNewWindow
#       Create a new Alacritty window from the current process.
#   - ClearLogNotice
#       Clear Alacritty's UI warning and error notice.
#   - ClearSelection
#       Remove the active selection.
#   - ReceiveChar
#   - None
#
# - Vi mode exclusive actions:
#
#   - Open
#       Perform the action of the first matching hint under the vi mode cursor
#       with `mouse.enabled` set to `true`.
#   - ToggleNormalSelection
#   - ToggleLineSelection
#   - ToggleBlockSelection
#   - ToggleSemanticSelection
#       Toggle semantic selection based on `selection.semantic_escape_chars`.
#
# - Vi mode exclusive cursor motion actions:
#
#   - Up
#       One line up.
#   - Down
#       One line down.
#   - Left
#       One character left.
#   - Right
#       One character right.
#   - First
#       First column, or beginning of the line when already at the first column.
#   - Last
#       Last column, or beginning of the line when already at the last column.
#   - FirstOccupied
#       First non-empty cell in this terminal row, or first non-empty cell of
#       the line when already at the first cell of the row.
#   - High
#       Top of the screen.
#   - Middle
#       Center of the screen.
#   - Low
#       Bottom of the screen.
#   - SemanticLeft
#       Start of the previous semantically separated word.
#   - SemanticRight
#       Start of the next semantically separated word.
#   - SemanticLeftEnd
#       End of the previous semantically separated word.
#   - SemanticRightEnd
#       End of the next semantically separated word.
#   - WordLeft
#       Start of the previous whitespace separated word.
#   - WordRight
#       Start of the next whitespace separated word.
#   - WordLeftEnd
#       End of the previous whitespace separated word.
#   - WordRightEnd
#       End of the next whitespace separated word.
#   - Bracket
#       Character matching the bracket at the cursor's location.
#   - SearchNext
#       Beginning of the next match.
#   - SearchPrevious
#       Beginning of the previous match.
#   - SearchStart
#       Start of the match to the left of the vi mode cursor.
#   - SearchEnd
#       End of the match to the right of the vi mode cursor.
#
# - Search mode exclusive actions:
#   - SearchFocusNext
#       Move the focus to the next search match.
#   - SearchFocusPrevious
#       Move the focus to the previous search match.
#   - SearchConfirm
#   - SearchCancel
#   - SearchClear
#       Reset the search regex.
#   - SearchDeleteWord
#       Delete the last word in the search regex.
#   - SearchHistoryPrevious
#       Go to the previous regex in the search history.
#   - SearchHistoryNext
#       Go to the next regex in the search history.
#
# - macOS exclusive actions:
#   - ToggleSimpleFullscreen
#       Enter fullscreen without occupying another space.
#
# - Linux/BSD exclusive actions:
#
#   - CopySelection
#       Copy from the selection buffer.
#   - PasteSelection
#       Paste from the selection buffer.
#
# - `command`: Fork and execute a specified command plus arguments
#
#    The `command` field must be a map containing a `program` string and an
#    `args` array of command line parameter strings. For example:
#       `{ program: "alacritty", args: ["-e", "vttest"] }`
#
# And optionally:
#
# - `mods`: Key modifiers to filter binding actions
#
#    - Command
#    - Control
#    - Option
#    - Super
#    - Shift
#    - Alt
#
#    Multiple `mods` can be combined using `|` like this:
#       `mods: Control|Shift`.
#    Whitespace and capitalization are relevant and must match the example.
#
# - `mode`: Indicate a binding for only specific terminal reported modes
#
#    This is mainly used to send applications the correct escape sequences
#    when in different modes.
#
#    - AppCursor
#    - AppKeypad
#    - Search
#    - Alt
#    - Vi
#
#    A `~` operator can be used before a mode to apply the binding whenever
#    the mode is *not* active, e.g. `~Alt`.
#
# Bindings are always filled by default, but will be replaced when a new
# binding with the same triggers is defined. To unset a default binding, it can
# be mapped to the `ReceiveChar` action. Alternatively, you can use `None` for
# a no-op if you do not wish to receive input characters for that binding.
#
# If the same trigger is assigned to multiple actions, all of them are executed
# in the order they were defined in.
#key_bindings:
  #- { key: Paste,                                       action: Paste          }
  #- { key: Copy,                                        action: Copy           }
  #- { key: L,         mods: Control,                    action: ClearLogNotice }
  #- { key: L,         mods: Control, mode: ~Vi|~Search, chars: "\x0c"          }
  #- { key: PageUp,    mods: Shift,   mode: ~Alt,        action: ScrollPageUp,  }
  #- { key: PageDown,  mods: Shift,   mode: ~Alt,        action: ScrollPageDown }
  #- { key: Home,      mods: Shift,   mode: ~Alt,        action: ScrollToTop,   }
  #- { key: End,       mods: Shift,   mode: ~Alt,        action: ScrollToBottom }

  # Vi Mode
  #- { key: Space,  mods: Shift|Control, mode: ~Search,    action: ToggleViMode            }
  #- { key: Space,  mods: Shift|Control, mode: Vi|~Search, action: ScrollToBottom          }
  #- { key: Escape,                      mode: Vi|~Search, action: ClearSelection          }
  #- { key: I,                           mode: Vi|~Search, action: ToggleViMode            }
  #- { key: I,                           mode: Vi|~Search, action: ScrollToBottom          }
  #- { key: C,      mods: Control,       mode: Vi|~Search, action: ToggleViMode            }
  #- { key: Y,      mods: Control,       mode: Vi|~Search, action: ScrollLineUp            }
  #- { key: E,      mods: Control,       mode: Vi|~Search, action: ScrollLineDown          }
  #- { key: G,                           mode: Vi|~Search, action: ScrollToTop             }
  #- { key: G,      mods: Shift,         mode: Vi|~Search, action: ScrollToBottom          }
  #- { key: B,      mods: Control,       mode: Vi|~Search, action: ScrollPageUp            }
  #- { key: F,      mods: Control,       mode: Vi|~Search, action: ScrollPageDown          }
  #- { key: U,      mods: Control,       mode: Vi|~Search, action: ScrollHalfPageUp        }
  #- { key: D,      mods: Control,       mode: Vi|~Search, action: ScrollHalfPageDown      }
  #- { key: Y,                           mode: Vi|~Search, action: Copy                    }
  #- { key: Y,                           mode: Vi|~Search, action: ClearSelection          }
  #- { key: Copy,                        mode: Vi|~Search, action: ClearSelection          }
  #- { key: V,                           mode: Vi|~Search, action: ToggleNormalSelection   }
  #- { key: V,      mods: Shift,         mode: Vi|~Search, action: ToggleLineSelection     }
  #- { key: V,      mods: Control,       mode: Vi|~Search, action: ToggleBlockSelection    }
  #- { key: V,      mods: Alt,           mode: Vi|~Search, action: ToggleSemanticSelection }
  #- { key: Return,                      mode: Vi|~Search, action: Open                    }
  #- { key: K,                           mode: Vi|~Search, action: Up                      }
  #- { key: J,                           mode: Vi|~Search, action: Down                    }
  #- { key: H,                           mode: Vi|~Search, action: Left                    }
  #- { key: L,                           mode: Vi|~Search, action: Right                   }
  #- { key: Up,                          mode: Vi|~Search, action: Up                      }
  #- { key: Down,                        mode: Vi|~Search, action: Down                    }
  #- { key: Left,                        mode: Vi|~Search, action: Left                    }
  #- { key: Right,                       mode: Vi|~Search, action: Right                   }
  #- { key: Key0,                        mode: Vi|~Search, action: First                   }
  #- { key: Key4,   mods: Shift,         mode: Vi|~Search, action: Last                    }
  #- { key: Key6,   mods: Shift,         mode: Vi|~Search, action: FirstOccupied           }
  #- { key: H,      mods: Shift,         mode: Vi|~Search, action: High                    }
  #- { key: M,      mods: Shift,         mode: Vi|~Search, action: Middle                  }
  #- { key: L,      mods: Shift,         mode: Vi|~Search, action: Low                     }
  #- { key: B,                           mode: Vi|~Search, action: SemanticLeft            }
  #- { key: W,                           mode: Vi|~Search, action: SemanticRight           }
  #- { key: E,                           mode: Vi|~Search, action: SemanticRightEnd        }
  #- { key: B,      mods: Shift,         mode: Vi|~Search, action: WordLeft                }
  #- { key: W,      mods: Shift,         mode: Vi|~Search, action: WordRight               }
  #- { key: E,      mods: Shift,         mode: Vi|~Search, action: WordRightEnd            }
  #- { key: Key5,   mods: Shift,         mode: Vi|~Search, action: Bracket                 }
  #- { key: Slash,                       mode: Vi|~Search, action: SearchForward           }
  #- { key: Slash,  mods: Shift,         mode: Vi|~Search, action: SearchBackward          }
  #- { key: N,                           mode: Vi|~Search, action: SearchNext              }
  #- { key: N,      mods: Shift,         mode: Vi|~Search, action: SearchPrevious          }

  # Search Mode
  #- { key: Return,                mode: Search|Vi,  action: SearchConfirm         }
  #- { key: Escape,                mode: Search,     action: SearchCancel          }
  #- { key: C,      mods: Control, mode: Search,     action: SearchCancel          }
  #- { key: U,      mods: Control, mode: Search,     action: SearchClear           }
  #- { key: W,      mods: Control, mode: Search,     action: SearchDeleteWord      }
  #- { key: P,      mods: Control, mode: Search,     action: SearchHistoryPrevious }
  #- { key: N,      mods: Control, mode: Search,     action: SearchHistoryNext     }
  #- { key: Up,                    mode: Search,     action: SearchHistoryPrevious }
  #- { key: Down,                  mode: Search,     action: SearchHistoryNext     }
  #- { key: Return,                mode: Search|~Vi, action: SearchFocusNext       }
  #- { key: Return, mods: Shift,   mode: Search|~Vi, action: SearchFocusPrevious   }

  # (Windows, Linux, and BSD only)
  #- { key: V,              mods: Control|Shift, mode: ~Vi,        action: Paste            }
  #- { key: C,              mods: Control|Shift,                   action: Copy             }
  #- { key: F,              mods: Control|Shift, mode: ~Search,    action: SearchForward    }
  #- { key: B,              mods: Control|Shift, mode: ~Search,    action: SearchBackward   }
  #- { key: C,              mods: Control|Shift, mode: Vi|~Search, action: ClearSelection   }
  #- { key: Insert,         mods: Shift,                           action: PasteSelection   }
  #- { key: Key0,           mods: Control,                         action: ResetFontSize    }
  #- { key: Equals,         mods: Control,                         action: IncreaseFontSize }
  #- { key: Plus,           mods: Control,                         action: IncreaseFontSize }
  #- { key: NumpadAdd,      mods: Control,                         action: IncreaseFontSize }
  #- { key: Minus,          mods: Control,                         action: DecreaseFontSize }
  #- { key: NumpadSubtract, mods: Control,                         action: DecreaseFontSize }

  # (Windows only)
  #- { key: Return,   mods: Alt,           action: ToggleFullscreen }

  # (macOS only)
  #- { key: K,              mods: Command, mode: ~Vi|~Search, chars: "\x0c"                 }
  #- { key: K,              mods: Command, mode: ~Vi|~Search, action: ClearHistory          }
  #- { key: Key0,           mods: Command,                    action: ResetFontSize         }
  #- { key: Equals,         mods: Command,                    action: IncreaseFontSize      }
  #- { key: Plus,           mods: Command,                    action: IncreaseFontSize      }
  #- { key: NumpadAdd,      mods: Command,                    action: IncreaseFontSize      }
  #- { key: Minus,          mods: Command,                    action: DecreaseFontSize      }
  #- { key: NumpadSubtract, mods: Command,                    action: DecreaseFontSize      }
  #- { key: V,              mods: Command,                    action: Paste                 }
  #- { key: C,              mods: Command,                    action: Copy                  }
  #- { key: C,              mods: Command, mode: Vi|~Search,  action: ClearSelection        }
  #- { key: H,              mods: Command,                    action: Hide                  }
  #- { key: H,              mods: Command|Alt,                action: HideOtherApplications }
  #- { key: M,              mods: Command,                    action: Minimize              }
  #- { key: Q,              mods: Command,                    action: Quit                  }
  #- { key: W,              mods: Command,                    action: Quit                  }
  #- { key: N,              mods: Command,                    action: SpawnNewInstance      }
  #- { key: F,              mods: Command|Control,            action: ToggleFullscreen      }
  #- { key: F,              mods: Command, mode: ~Search,     action: SearchForward         }
  #- { key: B,              mods: Command, mode: ~Search,     action: SearchBackward        }

#debug:
  # Display the time it takes to redraw each frame.
  #render_timer: false

  # Keep the log file after quitting Alacritty.
  #persistent_logging: false

  # Log level
  #
  # Values for `log_level`:
  #   - Off
  #   - Error
  #   - Warn
  #   - Info
  #   - Debug
  #   - Trace
  #log_level: Warn

  # Print all received window events.
  #print_events: false
```

## gentoo_environment_example
```
#
# This file is parsed by pam_env module
#
# Syntax: simple "KEY=VAL" pairs on separate lines
#
```

<!-- Backup at 2022-10-18 -->
<!--
- # 基本概念  
  ![操作系统在整个计算机系统的角色](https://doc.shiyanlou.com/linux_base/1-1.png "操作系统在整个计算机系统的角色")
- # 学习路径  
  ![大致的学习路径](https://doc.shiyanlou.com/linux_base/1-8.png)
- # 命令行常用快捷键  
  ```
  Tab #Tab 键补全命令、命令参数、目录
  Ctrl + c #强行终止当前程序
  Ctrl + d #键盘输入结束或推出终端
  Ctrl + s #暂停当前程序，暂停后按下任意键恢复运行
  Ctrl + z #将当前程序放到后台运行，恢复到前台为命令 fg
  Ctrl + a #将光标移至输入行头，相当于 Home 键
  Ctrl + e #将光标移至输入行末，相当于 End 键
  Ctrl + k #删除从光标所在位置到行末
  Alt + Backspace #向前删除一个单词
  Shift + PgUp #将终端显示向上滚动
  Shift + PgDn #将终端显示向下滚动
  键盘上的方向上键和下键 #历史输入命令
  man <command_name> #查看某个命令的说明和使用方式的详细介绍
  <command_name> --help #快速查看它的某个具体参数的作用
  ```
- # Shell 常用通配符  
  ```
  * #匹配 0 或多个字符
  ? #匹配任意一个字符
  [list] #匹配 list 中的任意单一字符
  [^list] #匹配 除 list 中的任意单一字符以外的字符
  [c1-c2] #匹配 c1-c2 中的任意单一字符，如：[0-9][a-z]
  {string1,string2,...} #匹配 c1-c2 中全部字符，如：{1..10}
  ```
- # 用户及文件权限的管理
	- ## 用户管理  
	  ```
	  whoami #查看当前登录用户的用户名
	  ```
- # archlinux  
  *archinstall 命令 //用官方脚本安装 arch(使用前，先换源，即手动添加一个最快的源)*
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
		  pacstrap /mnt base linux linux-firmware vim base-devel networkmanager git
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
		- ### 安装显卡驱动
		  ```
		  pacman -S xf86-video-intel xf86-video-ati #按照具体情况安装显卡驱动（我的GPU: Intel和AMD ATI的）
		  ```
		- ### 在盘上安装 grub
		  ```
		  pacman -S grub efibootmgr
		  mount --mkdir /dev/sda1 /mnt/boot
		  grub-install --target=x86_64-efi --efi-directory=/mnt/boot --bootloader-id=GRUB
		  vim /etc/default/grub #取消这一行的注释，#GRUB_DISABLE_OS_PROBER=false
		  ```
		- ### 安装微码
		  ```
		  pacman -S intel-ucode #按照具体情况安装（amd的cpu，请安装amd-ucode；intel的cpu，请安装intel-ucode）
		  grub-mkconfig -o /boot/grub/grub.cfg #生成 GRUB 配置以激活加载微码更新
		  ```
		- ### gnome  
		  安装 desktop environment 或 windows manager 
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
			  git clone https://aur.archlinux.org/fcitx5-pinyin-moegirl.git #要在有网络代理的情况下git clone
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
		- ### dwm(待完善)   
		  (可选)windows manager
			- ***安装窗口管理器***  
			  w3m suckless.org //使用 w3m 文字式网页浏览器下载(解决下载速度慢的问题)  
			  ```
			  pacman -S xorg xorg-xinit 
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
			- ***快捷键***  
			  ```
			  alt + shift + q #退出 dwm
			  alt + shift + c #关闭窗口
			  alt + enter #切换窗口
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
- # 注意事项
	- ## .AppImage文件执行没有反应  
	  ```
	  ./文件名.AppImage --appimage-extract
	  ```
	- ## 两个硬盘共存  
	  ```
	  #格式化主要存储的硬盘，且不能分区（说明：一个主要装操作系统，另一个主要存储）
	  fdisk -l #查看要格式化的硬盘
	  mkfs.ext4 /dev/sdx #格式化主要存储的硬盘（sdx中的”x“可能是a、b、c、……）
	  ```
	- ## 不能粘贴文件(权限不允许)  
	  ```
	  sudo nautilus #在终端中，以 root 的权限打开文件管理器（我的是nautilus）
	  ```
	- ## invalid or corrupted package(PGP signature)  
	  ```
	  pacman -Sy archlinux-keyring #更新 archlinux-keyring
	  ```
	- ## 字体问题  (font)
	  ```
	  sudo pacman -S wqy-zenhei //安装 wqy-microhei 字体（解决中文乱码问题）
	  sudo pacman -S ttf-jetbrains-mono //安装 ttf-jetbrains-mono 字体（解决英文字体相关问题）
	  ```
- # 参考资料
	- [Installation guide - ArchWiki](https://wiki.archlinux.org/title/Installation_guide)
	- [pacman -ArchWiki](https://wiki.archlinux.org/title/pacman)
-->