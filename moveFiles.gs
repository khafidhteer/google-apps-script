function moveFiles() {
  // Get the destination folder
  // You can get the ID from the URL of your folder 
  // https://drive.google.com/drive/folders/folderID1
  // above URL's folder ID is folderID1
  var document_folder = DriveApp.getFolderById("folderID1");
  var spreadsheet_folder = DriveApp.getFolderById("folderID2");
  var slides_folder = DriveApp.getFolderById("folderID3");
  var csv_folder = DriveApp.getFolderById("folderID4");
  var other_folder = DriveApp.getFolderById("folderID5");

  // Get all Document files in the root directory of My Drive
  var files = DriveApp.getRootFolder().getFiles();
  // Logger.log(files.next())

  // Move each CSV file to the destination folder
  while (files.hasNext()) {
    var file = files.next();
    // Ensure the file is not in a subfolder
    // In the below code it will check whether it has a parent folder or not
    // To get all the MimeType you can see the full list on below URL
    // https://developers.google.com/apps-script/reference/base/mime-type
    if (file.getParents().hasNext()) {
      if (file.getMimeType() == MimeType.GOOGLE_DOCS || file.getMimeType() == MimeType.MICROSOFT_WORD || file.getMimeType() == MimeType.MICROSOFT_WORD_LEGACY) {
        file.moveTo(document_folder);
      } else if (file.getMimeType() == MimeType.GOOGLE_SHEETS || file.getMimeType() == MimeType.MICROSOFT_EXCEL	 || file.getMimeType() == MimeType.MICROSOFT_EXCEL_LEGACY) {
        file.moveTo(spreadsheet_folder);
      } else if (file.getMimeType() == MimeType.GOOGLE_SLIDES || file.getMimeType() == MimeType.MICROSOFT_POWERPOINT	 || file.getMimeType() == MimeType.MICROSOFT_POWERPOINT_LEGACY) {
        file.moveTo(slides_folder);
      } else if (file.getMimeType() == MimeType.CSV) {
        file.moveTo(csv_folder);
      } else {
        file.moveTo(other_folder);
      }
    }
  }
}
