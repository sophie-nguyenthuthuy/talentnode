/**
 * TalentNode — nhận dữ liệu form (đăng ký + liên hệ) vào Google Sheet.
 *
 * CÁCH DÙNG (một lần):
 * 1. Tạo Google Sheet mới. Vào Extensions → Apps Script.
 * 2. Dán toàn bộ file này vào, bấm Save.
 * 3. Deploy → New deployment → chọn type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Bấm Deploy, cấp quyền, rồi copy "Web app URL"
 *    (dạng https://script.google.com/macros/s/XXXX/exec).
 * 4. Dán URL đó vào thuộc tính data-endpoint của <form> trong
 *    register.html và contact.html (thay YOUR_DEPLOYMENT_ID).
 *
 * Sheet sẽ tự tạo 2 tab: "Registrations" và "Contacts".
 */

function doPost(e) {
  var p = (e && e.parameter) || {};
  var source = p._source || "unknown";
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  if (source === "contact") {
    var c = ss.getSheetByName("Contacts") || ss.insertSheet("Contacts");
    if (c.getLastRow() === 0) {
      c.appendRow(["Thời gian", "Họ tên", "Email", "Điện thoại", "Chủ đề", "Nội dung"]);
    }
    c.appendRow([new Date(), p.name || "", p.email || "", p.phone || "", p.subject || "", p.message || ""]);
  } else {
    var r = ss.getSheetByName("Registrations") || ss.insertSheet("Registrations");
    if (r.getLastRow() === 0) {
      r.appendRow(["Thời gian", "Họ tên", "Email", "Điện thoại", "Khóa học", "Trình độ", "Hình thức", "Mục tiêu"]);
    }
    r.appendRow([new Date(), p.name || "", p.email || "", p.phone || "", p.course || "", p.level || "", p.mode || "", p.goal || ""]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
