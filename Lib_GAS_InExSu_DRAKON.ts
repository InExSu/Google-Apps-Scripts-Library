// Autogenerated with DRAKON Editor 1.31
/*global DEBUG*/

function console_If(msg: string | object) {
    // item 34
    if ((DEBUG === undefined) || (!(DEBUG))) {
        
    } else {
        // item 39
        console.log(msg)
    }
}

function table_2_Map(table, column_Key, column_Item) {
    // item 18
    // таблицу массив из диапазона
    // в словарь
    // item 6
    var map = new Map();
    // item 70001
    let row = 0;
    while (true) {
        // item 70002
        if (row < table.length) {
            
        } else {
            break;
        }
        // item 9
        const key = table[row][column_Key];
        const item = table[row][column_Item];
        // item 10
        if ((key === undefined) || (item === undefined)) {
            
        } else {
            // item 16
            map.set(key, item);
        }
        // item 70003
        row++;
    }
    // item 17
    return map;
}

function table_2_Range(table, cell) {
    // item 28
    /** массив-таблицу в диапазон, начиная с ячейки */
    // item 25
    if (table.length > 0) {
        // item 24
        cell.offset(0, 0, table.length, table[0].length)
        	.setValues(table);
    } else {
        
    }
}



