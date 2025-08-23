// Service Worker Unregister Script
// This script unregisters the service worker and clears all caches

self.addEventListener('install', function(event) {
  console.log('SW: Unregister script installing...');
  // Skip waiting to immediately activate
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('SW: Unregister script activated - clearing all caches...');
  
  event.waitUntil(
    // Delete all caches
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          console.log('SW: Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(function() {
      console.log('SW: All caches cleared - unregistering service worker...');
      // Unregister this service worker
      return self.registration.unregister();
    }).then(function(success) {
      console.log('SW: Service worker unregistered successfully:', success);
      // Reload all controlled clients to clear the service worker
      return self.clients.matchAll();
    }).then(function(clients) {
      clients.forEach(function(client) {
        console.log('SW: Reloading client:', client.url);
        client.navigate(client.url);
      });
    })
  );
});

// Intercept all fetch requests and pass them through without caching
self.addEventListener('fetch', function(event) {
  // Just pass through all requests without caching
  event.respondWith(fetch(event.request));
});
