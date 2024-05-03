'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"pb_public/version.json": "6fc1435e40206106a29aa2dc8629a5d1",
"pb_public/index.html": "ffd031a3f9859334da51a066036e3217",
"pb_public/main.dart.js": "090c0a9ed282e726f481e5a670e8eb1a",
"pb_public/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"pb_public/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pb_public/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"pb_public/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"pb_public/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"pb_public/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"pb_public/manifest.json": "037e0e77d83a05bd14a7640b71a15935",
"pb_public/assets/AssetManifest.json": "cfb353d5e8369b3cc34ff3c7e0d0c98f",
"pb_public/assets/NOTICES": "3bf8d73f6ef818b585279239153c4a92",
"pb_public/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"pb_public/assets/AssetManifest.bin.json": "1075d52da5aee2db3678fbd0b50c1503",
"pb_public/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"pb_public/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"pb_public/assets/AssetManifest.bin": "d3412e407286f192fb6ebac692d280cb",
"pb_public/assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"pb_public/assets/assets/images/parallax/foreground-trees.png": "d507d6ccb000123631a49e84e050eea6",
"pb_public/assets/assets/images/parallax/mountains.png": "ed6474157918bb521b7657076f49fd24",
"pb_public/assets/assets/images/parallax/trees.png": "a8799976ec897f5d83d278e530e7e81b",
"pb_public/assets/assets/images/parallax/bg.png": "8400f2e43cdb2df53c7b459ede375c3a",
"pb_public/assets/assets/images/parallax/mountain-far.png": "d29a3f7182bc85e258a28325e9a66b5e",
"pb_public/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"pb_public/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"pb_public/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"pb_public/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"pb_public/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"pb_public/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"pb_public/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"pb_public/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"pb_public/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"pb_public/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"version.json": "6fc1435e40206106a29aa2dc8629a5d1",
"index.html": "22d363df8fcb51158f96613a33329fe6",
"/": "22d363df8fcb51158f96613a33329fe6",
"main.dart.js": "6f2f7d9cf65523ece42c40c5d2bb46ac",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"hack.service": "15ba1dbe530a9663ab729b62034d1608",
"myapp": "69fe75919238bcc65a7cd8d9441a7d28",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pb_data/logs.db": "27fd34146c6cf96054f8e3cbc928becd",
"pb_data/types.d.ts": "e54930e463c5c252091e982772361378",
"pb_data/data.db": "c66eb4ac1c2817d1895934219ef4c5b9",
"pb_data/logs.db-shm": "b7c14ec6110fa820ca6b65f5aec85911",
"pb_data/logs.db-wal": "d41d8cd98f00b204e9800998ecf8427e",
"pb_data/data.db-shm": "b7c14ec6110fa820ca6b65f5aec85911",
"pb_data/data.db-wal": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "037e0e77d83a05bd14a7640b71a15935",
"assets/AssetManifest.json": "1736ee01b367d9835b0b3959778d8ced",
"assets/NOTICES": "f5ce99d0b69f7a0f7067c5961917a9a4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bca6d432c55340d827df0a842890bd38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5b9b68b5ce716aa61f437b5a51566563",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/parallax/foreground-trees.png": "d507d6ccb000123631a49e84e050eea6",
"assets/assets/images/parallax/mountains.png": "ed6474157918bb521b7657076f49fd24",
"assets/assets/images/parallax/trees.png": "a8799976ec897f5d83d278e530e7e81b",
"assets/assets/images/parallax/bg.png": "8400f2e43cdb2df53c7b459ede375c3a",
"assets/assets/images/parallax/mountain-far.png": "d29a3f7182bc85e258a28325e9a66b5e",
"assets/assets/images/trex.png": "b49d612bb89af5f8609fbcf7dbae0afb",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
