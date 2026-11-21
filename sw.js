const VERSION = 'bol-bhai-v4';
const ASSETS = ['./', './index.html', './icon.svg', './apple-touch-icon.png', './manifest.webmanifest'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('bol-bhai-')&&key!==VERSION).map(key=>caches.delete(key)))),self.clients.claim()]));
});
self.addEventListener('fetch', event => {
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(VERSION).then(cache=>cache.put(event.request,copy)).catch(()=>{});}
    return response;
  }).catch(()=>caches.match(event.request).then(cached=>cached||caches.match('./index.html'))));
});
