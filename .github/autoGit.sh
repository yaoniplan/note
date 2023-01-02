#! /bin/sh
  cd ~/note # Change into directory of your repository
  git pull
  git add --all
  git commit -m "Update at `date +%F_%T`"
  git push
