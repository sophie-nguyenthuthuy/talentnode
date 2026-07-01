# Deploy TalentNode lên GitHub Pages

Đây là site tĩnh (HTML/CSS/JS), không cần build → deploy rất đơn giản. Tất cả đường dẫn đều **tương đối** nên chạy tốt cả khi site nằm ở `username.github.io/talentnode/`.

## Cách 1 — Deploy from a branch (đơn giản nhất, không cần Actions)

1. Tạo repo GitHub mới, ví dụ `talentnode` (chính bạn tạo, đăng nhập tài khoản của bạn).
2. Đẩy thư mục này lên nhánh `main`:
   ```bash
   cd talentnode
   git init
   git add .
   git commit -m "TalentNode website"
   git branch -M main
   git remote add origin https://github.com/<username>/talentnode.git
   git push -u origin main
   ```
3. Trên GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)** → **Save**
4. Đợi ~1 phút, site lên tại `https://<username>.github.io/talentnode/`.

## Cách 2 — GitHub Actions (đã kèm sẵn workflow)

File [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) tự publish mỗi lần push lên `main`.
1. Push repo như trên.
2. **Settings → Pages → Source: GitHub Actions**.
3. Mỗi lần push, workflow tự deploy. Xem tiến trình ở tab **Actions**.

## Ghi chú
- File `.nojekyll` đã có sẵn để GitHub phục vụ đúng mọi file (kể cả file bắt đầu bằng `_`).
- **Trước khi deploy**, nhớ nối form vào Google Sheet (xem [`SETUP-google-sheet.md`](SETUP-google-sheet.md)) — nếu không, form chạy chế độ demo.
- Muốn tên miền riêng (vd `talentnode.vn`)? Thêm file `CNAME` chứa domain và trỏ DNS theo hướng dẫn GitHub Pages.
- Ảnh giảng viên đang dùng placeholder (pravatar.cc) — thay bằng ảnh thật trong `DATA.instructors` (`assets/script.js`) trước khi ra mắt.
