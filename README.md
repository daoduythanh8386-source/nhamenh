# Nhà Tôi – Kết nối Gia đình & Cộng đồng

Bản web tĩnh (đã build sẵn) của app **Nhà Tôi**: gia phả, công việc, lịch học, lịch gia đình, tài chính cho cả nhà.
Không cần cài đặt hay build – chỉ cần đưa các file này lên GitHub.

## Cấu trúc
| File / thư mục | Vai trò |
|---|---|
| `index.html` | Trang chính (định tuyến kiểu `#/`, chạy được cả ở thư mục con) |
| `404.html` | Bản sao `index.html` cho GitHub Pages |
| `assets/` | JS, CSS đã build |
| `icons/`, `manifest.webmanifest`, `sw.js` | Icon, cài lên màn hình điện thoại (PWA), chạy khi mất mạng |
| `.nojekyll` | Để GitHub Pages phục vụ nguyên file |
| `vercel.json` | Cấu hình cache khi chạy trên Vercel (thay cho `netlify.toml`) |

## Đưa lên GitHub
1. Vào github.com → **New repository** → đặt tên (ví dụ `nhaminh`) → **Create repository**.
2. Bấm **uploading an existing file** (hoặc **Add file → Upload files**), kéo **toàn bộ nội dung bên trong** thư mục này vào (kể cả `assets`, `icons`, `.nojekyll`) → **Commit changes**.

## Cho web chạy
- **GitHub Pages:** Settings → Pages → *Deploy from a branch* → `main` / `(root)` → Save.
  Sau 1–2 phút web có ở `https://<tên-tài-khoản>.github.io/nhaminh/`.
- **Vercel (không có huy hiệu Netlify):** vercel.com → **Add New → Project** → chọn repo → Framework Preset: *Other* → **Deploy**.

## Ghi chú
- Đây là bản đã build; các biến Supabase / AI (`VITE_*`) đang để trống giống bản Netlify.
- Khi cập nhật app: thay file trong `assets/` và `index.html` rồi commit lại.

App Nhà Tôi được xây dựng bởi Đào Duy Thanh © since 2026
