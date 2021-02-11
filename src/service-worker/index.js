/* service-worker.js */
const CACHE_NAME = 'nlp-cache'

// Listen for network requests from the main document
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(['./test'])
    })
  )
})

// Listen for network requests from the main document
self.addEventListener('fetch', function(event) {
  // Return data from cache
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Check if we received a valid response
      if(!response || response.status !== 200 || response.type !== 'basic') {
        return response
      }

      // IMPORTANT: Clone the response. A response is a stream
      // and because we want the browser to consume the response
      // as well as the cache consuming the response, we need
      // to clone it so we have two streams.
      var responseToCache = response.clone()

      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('INTERCEPTED', cache)

          cache.put(event.request, responseToCache)
        })

      return response
    })
  )
})
