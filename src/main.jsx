import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Force complete cache bust - timestamp: 1724434800
console.log('Portfolio loaded - Cache bust active:', Date.now());

// Check if service worker cleanup is needed (only run once)
if ('serviceWorker' in navigator && !sessionStorage.getItem('sw-cleanup-done')) {
  console.log('SW: Checking for service worker cleanup...');
  
  // Mark cleanup as attempted to prevent loops
  sessionStorage.setItem('sw-cleanup-attempted', 'true');
  
  // Check if there are any service workers or caches to clean
  Promise.all([
    navigator.serviceWorker.getRegistrations(),
    caches.keys()
  ]).then(function([registrations, cacheNames]) {
    const hasServiceWorkers = registrations.length > 0;
    const hasCaches = cacheNames.length > 0;
    
    console.log('SW: Found', registrations.length, 'service workers and', cacheNames.length, 'caches');
    
    if (hasServiceWorkers || hasCaches) {
      console.log('SW: Cleanup needed - starting cleanup process...');
      
      // Unregister service workers
      const unregisterPromises = registrations.map(function(registration) {
        console.log('SW: Unregistering service worker:', registration.scope);
        return registration.unregister();
      });
      
      // Clear caches
      const deletePromises = cacheNames.map(function(cacheName) {
        console.log('SW: Clearing cache:', cacheName);
        return caches.delete(cacheName);
      });
      
      return Promise.all([...unregisterPromises, ...deletePromises]);
    } else {
      console.log('SW: No cleanup needed - portfolio is clean!');
      // Mark as permanently done
      sessionStorage.setItem('sw-cleanup-done', 'true');
      return Promise.resolve([]);
    }
  }).then(function(results) {
    if (results.length > 0) {
      console.log('SW: Cleanup completed:', results);
      console.log('SW: Reloading page to apply changes...');
      
      // Mark cleanup as done before reload
      sessionStorage.setItem('sw-cleanup-done', 'true');
      
      // Reload only if we actually cleaned something
      setTimeout(function() {
        window.location.reload(true);
      }, 1000);
    }
  }).catch(function(error) {
    console.error('SW: Cleanup failed:', error);
    // Mark as done even if failed to prevent loops
    sessionStorage.setItem('sw-cleanup-done', 'true');
  });
} else if (sessionStorage.getItem('sw-cleanup-done')) {
  console.log('SW: Cleanup already completed - portfolio running clean!');
} else {
  console.log('SW: Service workers not supported or cleanup not needed');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
