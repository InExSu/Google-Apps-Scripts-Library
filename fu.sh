#!/bin/bash

# Путь к вашему файлу
file_path="Lib_GAS_InExSu_DRAKON.ts"

# Отслеживаем изменения в файле и выполняем скрипт при изменении
while fswatch -1 "$file_path"; do
    # Проверяем наличие файла перед выполнением скрипта
    if [ -e "$file_path" ]; then
        echo "Файл $file_path был изменен. Запускаю скрипт с параметром..."
        # Добавьте вашу команду или скрипт с передачей параметра
        ./cPU.sh "$file_path"
    else
        echo "Файл $file_path не существует."
    fi
done
