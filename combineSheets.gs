function combineSheets() {
  // Open source spreadsheet
  var spreadsheet = SpreadsheetApp.openById('Spreadsheet Source ID');

  // Get all sheets from source spreadsheet
  var sheets = spreadsheet.getSheets();

  // Open target spreadsheet
  var targetSS = SpreadsheetApp.openById('Spreadsheet Target ID');

  // Get target sheet
  var targetSheet = targetSS.getSheetByName('main');

  // Clear target sheet data
  targetSheet.clearContents();

  // For each sheet in source spreadsheet
  for (var i = 0; i < sheets.length; i++) {
    // Get current sheet
    var sheet = sheets[i];

    // Get data from current sheet
    var data = sheet.getDataRange().getValues();

    // Get sheet name
    var sheetName = sheet.getName();

    // Add sheet name column to data
    for (var j = 0; j < data.length; j++) {
      data[j].push(sheetName); // Add sheet name to end of each row
    }

    // Append data to target sheet
    targetSheet.getRange(targetSheet.getLastRow() + 1, 1, data.length, data[0].length).setValues(data);
  }
}
