FROM busybox
COPY . /app
CMD httpd -f -p 80 -h /app
