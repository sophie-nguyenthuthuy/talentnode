# Nối form đăng ký/liên hệ vào Google Sheet

Form của TalentNode gửi dữ liệu bằng `fetch` tới một **Google Apps Script Web App**, script này ghi thẳng vào Google Sheet. Không cần server riêng.

## Các bước (làm một lần, ~5 phút)

1. Tạo một **Google Sheet** mới (sheet.new).
2. Trong sheet: menu **Extensions → Apps Script**.
3. Xóa code mẫu, dán toàn bộ nội dung file [`google-apps-script.gs`](google-apps-script.gs) vào, bấm **Save**.
4. Bấm **Deploy → New deployment**:
   - Icon bánh răng → chọn **Web app**.
   - **Execute as:** `Me`
   - **Who has access:** `Anyone`
   - Bấm **Deploy**, cấp quyền cho tài khoản Google của bạn.
5. Copy **Web app URL** (dạng `https://script.google.com/macros/s/AKfy.../exec`).
6. Mở [`register.html`](register.html) và [`contact.html`](contact.html), thay `YOUR_DEPLOYMENT_ID` trong:
   ```html
   <form data-demo data-endpoint="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec">
   ```
   bằng URL vừa copy.

Xong! Mỗi lượt đăng ký → tab **Registrations**, mỗi tin liên hệ → tab **Contacts** (sheet tự tạo cột tiêu đề lần đầu).

## Ghi chú kỹ thuật
- Form gửi bằng `mode: "no-cors"` nên trình duyệt không đọc được phản hồi — đây là điều bình thường với Apps Script; dữ liệu vẫn được ghi. Website luôn hiển thị thông báo thành công.
- Khi endpoint vẫn còn chữ `YOUR_` (chưa cấu hình), form chạy **chế độ demo** (chỉ hiện thông báo, không gửi đi đâu).
- Muốn nhận email mỗi lần có đăng ký? Thêm `MailApp.sendEmail("ban@email.com", "Đăng ký mới", JSON.stringify(p))` vào cuối `doPost` trong script.
- Muốn dùng **Formspree** thay vì Google Sheet? Đổi `data-endpoint` thành `https://formspree.io/f/<id>` — handler tự nhận diện và gửi đúng cách.
