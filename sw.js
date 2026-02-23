const CACHE_NAME = 'tripitaka-VERSION_PLACEHOLDER';
const urlsToCache = ['/', '/index.html', '/manifest.json', '/_redirects'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  // Handle navigation requests - fallback to index.html
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then(response => {
        return response || fetch(event.request);
      })
    );
    return;
  }
  
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
