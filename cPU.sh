#!/bin/bash

git pull

DATE=$(date "+%Y-%m-%d")

git add .
git commit -m "$DATE"
git push

# clasp push

# Проверяем, передан ли первый аргумент
if [ -z "$1" ]; then
    # Если аргумент не передан, выводим предупреждение и завершаем выполнение скрипта
    echo "Ошибка: не передан аргумент. Укажите файл для выполнения eslint."
    exit 1
fi

# Проверяем, существует ли файл
if [ ! -f "$1" ]; then
    # Если файл не существует, выводим предупреждение и завершаем выполнение скрипта
    echo "Ошибка: файл '$1' не существует."
    exit 1
fi

# Получаем имя файла без расширения
filename=$(basename -- "$1")
filename_no_extension="${filename%.*}"

# Используем имя файла без расширения, добавляем новое расширение и передаем в file_Copy_Date.sh
./file_Copy_Date.sh "$filename_no_extension.drn" drn_BackUps

# Запускаем eslint для переданного файла
npx eslint "$1"

# clasp open