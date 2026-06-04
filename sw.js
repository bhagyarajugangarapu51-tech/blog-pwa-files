self.addEventListener('install', (event) => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  console.log('SW ready for AllCartAlliance');
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
