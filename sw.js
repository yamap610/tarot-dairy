// 離線快取：網頁本身「先抓網路、失敗才用快取」（確保更新馬上看得到）
// 牌面圖片「先用快取」（打開更快、沒網路也能看）
const CACHE = 'tarot-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isImg = /\.(webp|png|jpg)$/i.test(new URL(req.url).pathname);
  if (isImg) {
    e.respondWith(caches.open(CACHE).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok) c.put(req, res.clone()); return res; }))));
  } else {
    e.respondWith(fetch(req).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return res; }).catch(() => caches.match(req)));
  }
});
