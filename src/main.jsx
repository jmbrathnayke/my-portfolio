import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Force complete cache bust - timestamp: 1724434800
console.log('Portfolio loaded - Cache bust active:', Date.now());

// Register service worker unregister script to clear old caches
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW: Unregister script registered:', registration);
      // Force update to activate immediately
      registration.update();
    })
    .catch(function(error) {
      console.log('SW: Registration failed:', error);
    });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
