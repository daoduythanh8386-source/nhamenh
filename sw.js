/* Service worker Nhà Tôi: mở được app khi mạng yếu/mất mạng.
   - Trang (index.html): lấy mạng trước, mất mạng thì dùng bản đã lưu.
   - Tệp tĩnh cùng tên miền (js/css/ảnh): dùng bản lưu, đồng thời cập nhật nền.
   - Không lưu dữ liệu từ máy chủ khác (thời tiết, Supabase, AI). */
const CACHE = 'nhaminh-v3';
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(['./', './manifest.webmanifest', './icons/logo-128.png', './icons/favicon-32.png'])).catch(() => undefined));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./', copy)); return res; })
        .catch(() => caches.match('./').then((r) => r || caches.match(req))),
    );
    return;
  }
  e.respondWith(
    caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; });
      return hit || net;
    }),
  );
});
