#!/bin/bash

git pull

DATE=$(date "+%Y-%m-%d")

git add .
git commit -m "$DATE"
git push
