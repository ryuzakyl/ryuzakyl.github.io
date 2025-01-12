---
title: Bash Cheatsheet
---

:::tip

Bash commands that have proven to be very useful for me

:::

## File system

**Find all files matching a pattern**

```bash
# get all files whose name start with 'sidekiq'
$ find /path/to/folder -type f -name "sidekiq*"
```

**Unzip all \*.zip files in the current folder**

```bash
$ unzip *.zip
```

**Replacement of cp command with progress info**

```bash
$ rsync -ah --progress <source> <destination>

# more verbose version
$ rsync -ah -r --info=progress2 <source> <destination>
```

**Compress file or folder as \*.tar.gz**

```bash
# -c: create an archive
# -z: compress the archive with gzip
# -v: verbose mode on
# -f: allows you to specify the filename of the archive
$ tar -czvf file-name.tar.gz /path/to/file/or/folder/to/compress
```

**Extract \*.tar.gz file to specified folder**
```bash
$ tar -xzf foo.tar.gz -C output/
```

**List folder content as treeview**
```bash
$ tree -N -h -l -A
```

**List folder content as treeview and exclude some patters**
```bash
$ tree -N -A -I 'logs|*out'
```

**Get folder sizes in current folder**
```bash
$ du -sh *
```

**Get disks status**
```bash
$ df -H
```

**Filter df -H filesystem and find out the percentage of space**
```bash
$ df -H | grep -vE '^Filesystem|tmpfs|cdrom' | awk '{ print $5 " " $1 }'
```

**Get the last 10 characters of each line in all `.OUT` files in a folder, trim all zeroes to the left and only display unique values**
```bash
$ awk '{print substr($0, length($0)-9)}' *.OUT | sed 's/^0*//' | sort | uniq
```

**Find and list all `.EXP` files in a folder (recursively) where any of their lines contains a specific string ("eb39d5cd-0f8" in this case)**
```bash
$ find . -type f -name "*.EXP" -exec grep -l "eb39d5cd-0f8" {} \; | awk '{print $1}'

# in case the file name has spaces
$ find . -type f -name "*.PCK" -exec grep -l "757694" {} \; | awk '{print $1 $2}'
```

**Get content (unique) from `.PCK` file lines in the range (150, 155) positions**
```bash
# get line content on position 150 of size 5 from .PCK files (without zeros)
$ awk '{print substr($0, 150, 5)}' *.PCK | sed 's/^0*//' | sort | uniq

# get line content on position 150 of size 5 from .PCK files
$ awk '{print substr($0, 150, 5)}' *.PCK | sort | uniq
```

**Load settings from `/etc/sysctl.conf` into the kernel, making the changes effective immediately**
```bash
$ sudo sysctl -p
```

**Compress file with `tar`**
```bash
# compress a folder
$ tar czf file.tar.gz /path/to/folder

# compress current folder and create file with timestamp name
$ tar czf $(date +%Y%m%d-%H%M%S).tar.gz .
```

https://unix.stackexchange.com/questions/46969/compress-a-folder-with-tar

**Refresh DNS cache (Debian/Ubuntu)**

```bash
# restart the systemd-resolved service
$ sudo systemctl restart systemd-resolved

# optionally, flush the DNS cache explicitly
$ resolvectl flush-caches
```

## Network

**List available network interfaces**

```bash
$ ip link show
```

**Mirror an entire website**

```bash
$ wget \
     --recursive \
     --no-clobber \
     --page-requisites \
     --html-extension \
     --convert-links \
     --no-parent \
         www.website.org
```

http://www.linuxjournal.com/content/downloading-entire-web-site-wget

**Resume file download with wget**

```bash
$ wget --continue <url>
```

https://www.cyberciti.biz/tips/wget-resume-broken-download.html

**List process PID listening on port (e.g. list process on port 8000)**

```bash
$ fuser 8000/tcp
```

**Kill process on specific port (e.g. kill process on port 8000)**

```bash
$ fuser -k 8000/tcp
```

**List open ports**

```bash
$ netstat -tuplen
```

**Copy/download folder in AWS instance over rsync to maintain symlinks**

```bash
$ rsync -avz -e "ssh -i /absolute/path/to/file-key.pem" username@host.com:/folder/to/download /path/to/copy/folder/to
```

**Pipe URL content to stdin**

```bash
$ wget -q -O- prometheus-postgres-exporter/metrics | grep pg_up
```

## Databases

**Connect to psql console**

```bash
$ psql -U username -h localhost db_name
```

## Miscellaneous

**Extracting the audio from video files**

```bash
$ /usr/bin/google-chrome-stable %U --disable-web-security --user-data-dir=/tmp/chrome
```

**Extracting the audio from video files**

```bash
$ ffmpeg -i /input/path/to/video/file.mp4 /output/path/to/audio/file.mp3
```

**Convert .avi video into .mp4 video while keeping wuality**

```bash
$ ffmpeg -i input.avi -c:v libx264 -crf 19 -preset slow -c:a aac -b:a 192k -ac 2 -strict -2 output.mp4
```

**Reduce size and quality of video files**

```bash
$ ffmpeg -i /path/to/input/file.mp4 -vcodec libx264 -crf 20 /path/to/output/file.mp4
```

https://unix.stackexchange.com/questions/28803/how-can-i-reduce-a-videos-size-with-ffmpeg

**Chop video based on time**

```bash
$ ffmpeg -ss 00:01:00 -i input.mp4 -to 00:02:00 -c copy output.mp4
```

https://stackoverflow.com/questions/18444194/cutting-the-videos-based-on-start-and-end-time-using-ffmpeg

**Convert video to gif**

```bash
$ ffmpeg -ss 2.0 -t 5.0 -i runtime-protection-dominoes.mp4 -vf "fps=10,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -f gif -loop 0 dominoes.gif
```

* https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality
* https://engineering.giphy.com/how-to-make-gifs-with-ffmpeg/

**Convert `.pdf` document to `.doc` or `.docx`**

```bash
$ soffice --infilter="writer_pdf_import" --convert-to doc /path/to/file.pdf
$ soffice --infilter="writer_pdf_import" --convert-to docx /path/to/file.pdf
```

**Making a bootable usb drive by simply mounting an image**

```bash
# listing block devices
$ lsblk

# if: file to load the image from
# of: partition to mount the image in
$ sudo dd if=/path/to/linux/distro/iso/image/file.iso of=/dev/sdb1
```

**Encode strings as base64 (e.g. your proxy server credentials)**

```bash
$ echo "username:password" | base64
```

**Decode `base64` strings (e.g. your proxy server credentials)**

```bash
$ echo QWxhZGRpbjpvcGVuIHNlc2FtZQ== | base64 --decode
```

**Resize VirtualBox virtual disk from bash**

```bash
$ VBoxManage modifyhd /path/to/virtual-disk/disk.vdi --resize <size-in-mb>
```

**Split .pdf into specific pages**

```bash
$ qpdf input.pdf --pages . 1-10 -- output.pdf
```

https://askubuntu.com/questions/221962/how-can-i-extract-a-page-range-a-part-of-a-pdf/672001#672001

## Desktop Environments

**Restart Cinnamon Desktop Environment from `tty`**

```bash
$ pkill -HUP -f "cinnamon --replace"
```

https://github.com/linuxmint/Cinnamon/issues/4763

## Resources

- [Bash Reference Manual](https://www.gnu.org/software/bash/manual/bash.html)
