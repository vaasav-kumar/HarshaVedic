/**
 * Paste this into your Google Apps Script project (script.google.com).
 * Deploy as Web app: Execute as "Me", Who has access: "Anyone, even anonymous".
 *
 * Optional: set SPREADSHEET_ID to your Google Sheet ID to append form data to a sheet.
 */

function doPost(e) {
  try {
    var body = e.postData.contents ? JSON.parse(e.postData.contents) : {};
    // body has: name, email, phone, date, time, concern

    // Optional: append to a Google Sheet (set your sheet ID below)
    // var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
    // sheet.appendRow([body.name, body.email, body.phone, body.date, body.time, body.concern, new Date()]);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success', message: 'Consultation request received' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
