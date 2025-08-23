import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Force complete cache bust - timestamp: 1724434800
console.log('Portfolio loaded - Cache bust active:', Date.now());

// Clear service worker and caches completely
if ('serviceWorker' in navigator) {
  console.log('SW: Starting complete service worker cleanup...');
  
  // First, unregister all existing service workers
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    console.log('SW: Found', registrations.length, 'service worker registrations');
    
    const unregisterPromises = registrations.map(function(registration) {
      console.log('SW: Unregistering service worker:', registration.scope);
      return registration.unregister();
    });
    
    return Promise.all(unregisterPromises);
  }).then(function(results) {
    console.log('SW: All service workers unregistered:', results);
    
    // Clear all caches
    return caches.keys();
  }).then(function(cacheNames) {
    console.log('SW: Found', cacheNames.length, 'caches to clear');
    
    const deletePromises = cacheNames.map(function(cacheName) {
      console.log('SW: Clearing cache:', cacheName);
      return caches.delete(cacheName);
    });
    
    return Promise.all(deletePromises);
  }).then(function(results) {
    console.log('SW: All caches cleared:', results);
    console.log('SW: Service worker cleanup complete - page will reload automatically');
    
    // Force a hard reload to ensure everything is fresh
    setTimeout(function() {
      window.location.reload(true);
    }, 1000);
  }).catch(function(error) {
    console.error('SW: Cleanup failed:', error);
    // If cleanup fails, still reload to try fresh
    setTimeout(function() {
      window.location.reload(true);
    }, 2000);
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
