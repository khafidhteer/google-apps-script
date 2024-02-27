function moveCSVFiles() {
  // Get the destination folder
  // Change folderID with your desired folderID
  var destinationFolder = DriveApp.getFolderById("folderID");

  // Get all CSV files in the root directory of My Drive
  var files = DriveApp.getRootFolder().getFilesByType(MimeType.CSV);

  // Move each CSV file to the destination folder
  while (files.hasNext()) {
    var file = files.next();
    // Ensure file is not in a subfolder
    // In below code it will check the parent of the file
    // and see whether it is has other folders expect it or not
    if (file.getParents().hasNext()) {
      file.moveTo(destinationFolder);
    }
  }
}
