#!/bin/sh
while :
do
  cd ~/note # Change into your repository
  sleep 20
  git add *
  sleep 20
  git add .
  sleep 20
  git commit -m "Update at `date +%F-%T`"
  sleep 20
  git push

  cd ~/grow
  sleep 20
  git add *
  sleep 20
  git add . # Add folder
  sleep 20
  git commit -m "Update at `date +%F-%T`"
  sleep 20
  git push
done
