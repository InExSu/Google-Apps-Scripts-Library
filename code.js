/**
 * The event handler triggered when opening the spreadsheet.
 * @param {Event} e The onOpen event.
 * @see https://developers.google.com/apps-script/guides/triggers#onopene
 */

function onOpen() {

  var spread = SpreadsheetApp.getActiveSpreadsheet();
  spread.toast('Подготовка данных ...');

  sheets_Show_All();
  sheets_Hide_Not_StartsWith('Сводная');

  var sheet = spread.getSheetByName('Задачи ГОД с формулами');
  
  sheet_Rows_Empty_Delete(sheet);
  sheet_Formulas_Fill(sheet);

  spread.toast('Подготовка завершена!');
}

function sheet_Formulas_Fill_Test() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('Задачи ГОД с формулами');
  sheet_Formulas_Fill(sheet);
}

function sheet_Formulas_Fill(sheet) {
  // проходит по ячейкам второй строки листа
  // если в ячейке формула, то протягивает её вниз
  var range = sheet.getRange(2, 1, 1, sheet.getLastColumn());
  var formulas = range.getFormulas()[0];

  for (var i = 0; i < formulas.length; i++) {
    var formula = formulas[i];
    if (formula !== "") {
      var column = String.fromCharCode(65 + i);
      var lastRow = sheet.getLastRow();
      var fillRange = sheet.getRange(column + "2:" + column + lastRow);
      fillRange.setFormula(formula);
    }
  }
}

function sheetEmpty_Test(sheet) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('Задачи ГОД с формулами');
  console.log(sheetEmpty(sheet));
  sheet = spreadsheet.getSheetByName('Лист11');
  console.log(sheetEmpty(sheet));
}

function sheetEmpty(sheet) {
  // лист пуст
  return (sheet.getLastRow() > 0) ?
    false :
    true;
}

function column_Cell_Number_Empty_Not_Test() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('Задачи ГОД с формулами');
  console.log(
    column_Cell_Number_Empty_Not(sheet, 1));

  sheet = spreadsheet.getSheetByName('Лист11');
  // let rowsMax = sheet.getMaxRows();
  // console.log(rowsMax);
  console.log(
    column_Cell_Number_Empty_Not(sheet, 1));
}

function column_Cell_Number_Empty_Not(sheet, column_Number) {
  // вернуть номер строки последней НЕпустой ячейки

  var lastNonEmptyCellRow = -1;

  var lastRow = sheet.getLastRow();

  if (lastRow > 0) {
    var range = sheet.getRange(1, column_Number, lastRow, 1);
    var values = range.getValues();

    for (var i = lastRow - 1; i >= 0; i--) {
      if (values[i][0] !== "") {
        lastNonEmptyCellRow = i + 1;
        break;
      }
    }
  }
  return lastNonEmptyCellRow;
}

function sheet_Rows_Empty_Delete_Test() {
  var spread = SpreadsheetApp.getActive()
  var sheet = spread.getSheetByName('Задачи ГОД с формулами');
  sheet_Rows_Empty_Delete(sheet);
}

// удалить строки, ниже последней в первом столбце
function sheet_Rows_Empty_Delete(sheet) {
  var lastRow = 1 + column_Cell_Number_Empty_Not(sheet, 1);

  if (lastRow > 0) {
    var numRows = 1 + sheet.getMaxRows() - lastRow;

    if (numRows > 0) {
      sheet.deleteRows(lastRow, numRows);
    }
  }
}


/** скрыть листы Не начинающиеся с */
function sheets_Hide_Not_StartsWith(needle) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  needle = needle.toLowerCase();

  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];
    var sheetName = sheet.getName().toLowerCase();

    if (!sheetName.startsWith(needle)) {
      sheet.hideSheet();
    }
  }
}

// показать все листы
function sheets_Show_All() {

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();

  sheets.forEach(sheet => {
    sheet.showSheet();
  });
}
