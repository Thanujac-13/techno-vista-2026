/**
 * Techno Vista 2026 registration endpoint.
 * Create/open a Google Sheet, choose Extensions > Apps Script,
 * paste this file, save, then Deploy > New deployment > Web app.
 * Execute as: Me. Access: Anyone (subject to your institution's policy).
 */
const SHEET_NAME = "Registrations";
const HEADERS = ["Timestamp", "Full Name", "Email", "Phone", "College", "Year", "Event"];

function doGet() {
  return ContentService.createTextOutput("Techno Vista registration endpoint is ready.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const required = ["name", "email", "phone", "college", "year", "event"];
    const missing = required.filter(k => !String(data[k] || "").trim());
    if (missing.length) throw new Error("Missing fields: " + missing.join(", "));

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      new Date(), String(data.name).trim(), String(data.email).trim(),
      String(data.phone).trim(), String(data.college).trim(),
      String(data.year).trim(), String(data.event).trim()
    ]);
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}
