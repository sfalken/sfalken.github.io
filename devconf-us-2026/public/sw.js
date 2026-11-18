const CACHE_NAME = 'usa-trip-v1';
const ASSET_CACHE = 'usa-trip-assets-v1';

// Assets to pre-cache
const PRECACHE_ASSETS = [
  '/usa-trip/',
  '/usa-trip/boston/',
  '/usa-trip/checklist/',
  '/usa-trip/budget/',
  '/usa-trip/log/',
  '/usa-trip/sync/',
  '/usa-trip/about/',
  '/usa-trip/manifest.json',
  '/usa-trip/favicon.svg',
];

// Install: pre-cache core pages
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ASSETS)).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== ASSET_CACHE)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for HTML, cache-first for assets
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip cross-origin requests (Google Fonts, Leaflet CDN, etc.)
  if (url.origin !== location.origin) return;

  const isHTML = event.request.headers.get('accept')?.includes('text/html');

  if (isHTML) {
    // Network-first for HTML pages (avoids stale CSS/JS scoping issues)
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request).then(cached => cached || caches.match('/usa-trip/')))
    );
  } else {
    // Cache-first for static assets
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(ASSET_CACHE).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
  }
});
