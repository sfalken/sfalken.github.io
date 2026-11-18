const CACHE_NAME = 'canada-trip-v1';
const STATIC_ASSETS = [
  '/canada-trip/',
  '/canada-trip/vancouver/',
  '/canada-trip/checklist/',
  '/canada-trip/budget/',
  '/canada-trip/log/',
  '/canada-trip/sync/',
  '/canada-trip/about/',
  '/canada-trip/manifest.json',
  '/canada-trip/favicon.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;
  if (!url.pathname.startsWith('/canada-trip')) return;

  if (request.headers.get('Accept')?.includes('text/html')) {
    // Network-first for HTML — avoids stale CSS scoping bugs
    event.respondWith(
      fetch(request)
        .then(res => { const clone = res.clone(); caches.open(CACHE_NAME).then(c => c.put(request, clone)); return res; })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(request, clone));
        return res;
      });
    })
  );
});
