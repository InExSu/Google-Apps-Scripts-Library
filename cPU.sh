#!/bin/bash

DATE=$(date "+%Y-%m-%d")

git add .
git commit -m "$DATE"
git push

clasp push

./file_Copy_Date.sh Lib_GAS_InExSu_DRAKON.drn drn_BackUps