function range_Replace_In_Cells_Test() {
    const spread = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spread.getSheetByName('Copy of Дашборд');
    const range = sheet.getDataRange();
    const regex = /SUM of |COUNT of /;

    range_Replace_In_Cells(range, regex, '')
}

function range_Replace_In_Cells(range, regex, replacement) {
    // заменить в диапазоне по отдельным ячейкам

    const sheet = range.getSheet()
    const values = range.getValues();

    for (let row = 0; row < values.length; row++) {
        for (let col = 0; col < values[row].length; col++) {
            const cellValue = values[row][col].toString();
            if (cellValue.match(regex)) {
                sheet.getRange(row + 1, col + 1)
                    .setValue(cellValue
                        .replace(regex, replacement));
            }
        }
    }
}
