const CACHE_NAME = 'tripitaka-VERSION_PLACEHOLDER';
const urlsToCache = ['/', '/index.html', '/manifest.json'];

// Install: cache files + activate immediately
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activate: clean old caches + take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first (online = fresh, offline = cached)
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put('/index.html', clone));
          return res;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
