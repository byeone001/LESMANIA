'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "715fc83775c57aafc1992fb1b10edaae",
".git/config": "b16dea8cfeb4c9df4e869b6e56fcb695",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "45a925dabd842b8af0c52265a8762ac7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "01af2fa99788473d7f75fee55465752e",
".git/logs/refs/heads/main": "700eb6fa8a5322a4126a47a3301c3833",
".git/logs/refs/remotes/origin/main": "66582bd9f87b038c490ae0077c7f210e",
".git/logs/refs/remotes/origin/master": "99ca41ccc25b75430da706ed1397fc23",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/08/33aee97024994e94169e6e2318022afcc62ace": "9a3a535e1db6bf140d8776f8223a8b89",
".git/objects/09/811281f3dce4464db4a6ab3e9bf9760ff3838c": "a944c58a0518248df1eec4dbcb4e3c1d",
".git/objects/0b/d7142b87f997cf47dfe7a1462208695bac23ad": "24c1d24b860447662a23948515ac6d1c",
".git/objects/0c/ea121de6e08775c1b82014e9e3313c80cfb966": "f4cb5bfa5c044bf894ece4d30287e018",
".git/objects/10/a95a34bf01da1a354dd65ddc34b71f4576237b": "c8342228dc89bc6591ef9f7c5e78f6a1",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/a5ea222fb9afb4860cc194c41054f4a1103e62": "a921110ee3532b3e4dfc370e1ffba5c6",
".git/objects/23/16f6acc547198259725486924e1763d5326d12": "37d8d852432e760123f957decc529d00",
".git/objects/24/423c52203ef37a31ba2a5076599432279c3960": "6d961222687fbc7443f03c6080292a45",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/3e/f8ccfa566ce2b2348dd4a4557f96adecb33639": "a7f0a88da31f98b137b32662b373d730",
".git/objects/43/89df2e4ecc2ef9961af7e467b125d6fc2ab2bf": "192c9284d393e8fab1a4ead3b3df2317",
".git/objects/44/e0a1aa88bc082be1841c066a47b6530412d683": "b6081145c6624ad97600f1153f03d0eb",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/750c12fefb1982989f32c46d25ab982b7359d3": "8dcc903530888c840b9828fa1d547dbc",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/e318ca4caa10150ce07ba9b9b0dac12a329e3a": "55d9ed1a3deadbd94a1e952daef6b160",
".git/objects/57/501772bd441d11702f66acd92f498015122491": "bcaeee2d8f80aeddd374a0dcc0a35d56",
".git/objects/5b/b539ec31d772a3435e67ab5b501179ad068eee": "ebfff7be7de36e82aa55a0b2ec199628",
".git/objects/5d/0c9a6a4dc59b6f5bb90d1352026814f3bca27a": "8ac9a6699cd42558b9ba8b8e0ed9db6e",
".git/objects/66/fc3b84b4cc6f1cce286ac4b55415c9a18d3298": "07f25a5813c13eb8399e341580c24237",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/83757143bd23d56341d7153d1ca346fb52723c": "f3458247ee893b96af9b51ac80fdc908",
".git/objects/70/c07962f66c98c4b4a6250676668375a14cddc8": "fdbcc0bfe54abbc823de8af1de857f1c",
".git/objects/74/047c7ee1e68404ccf28bc10591fce3fa87657c": "4979fda6cc9049b760334467b74ab4c9",
".git/objects/76/14b2942dd821a60e01b18f24fe3bede5ec23ec": "239f7b8632ba7ef1d3a47a918345c4fe",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/381169d8668b4675a0e8d112302d3013e78056": "28c2914f0c1521c99e82d6bb61095e80",
".git/objects/86/633221f9f6f4e1843d0d9e7cba828897e580d2": "9785baee70a048684f1e4deee349f653",
".git/objects/87/c7ec69bd0237887da474b4ca90e04430549ac6": "08c4359db3ab1123f7cc007e6de1a1d1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/df60ae1e17a345eae65090d6e2c6a530f78a55": "85e1de8ea32428e4cc113172d0dc50bc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/96c3b24a3e49bede335794fe237939a040592c": "b3d57b4f55731fb9dee97d0759e5c9e6",
".git/objects/8e/af8e07350bf901a693dba8b33be82e5e168e17": "4cd9e39f7d2f4ce5a64f86376b002f84",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a9/a3a4b1bf7c422ce3dc5b946ba86b9e70e5c7ab": "086c49fbc47cb01b2dbe5b5f4c8c1df4",
".git/objects/ab/0aa35702bc6aa0d1cb399caaa82784cefdde56": "f46e8e4bbfa45ca20981b3c50f39b9ef",
".git/objects/b1/50c5ed46cdfa910be12f4ea46dcb11ab566a7b": "08d0cb0b0398d2ba96c32cc0755d0d77",
".git/objects/b5/21706e88530379a486a465858cb4444fda0351": "4469ba6869e112cb01bff04cb1f90e23",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/4c2ad6682e9015692e3eae244946f76aca0689": "4c122078136ee42e056c4700f8e2951f",
".git/objects/c1/45c6f309175cb149df4dd464466ee406ea41ac": "20e37fcea47dc3930057df164f6cfa27",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d2/36392999b046de758d2693d5cae1757b17a7e1": "93458d1824d406e7293ad5665d88a760",
".git/objects/d4/16a7b7bedda9306b35f6aa95b8ed9ab1281749": "6425799b768854be36615a5f7c59c383",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/00a4a12595e9599b78bc1ceb40e571e1eceecb": "0e9f4a0dc669be135847fca3be8865eb",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/f84e8b4b5658b2f57da2e08516c57fadcdf963": "f0af591c1fdf239bb72663ff35817aa8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/ba0c5e088000b49012647832aaabe5da3afba3": "ad22838b8bc6a7175af573d164ec20be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/d908ecc7661690f0efdb591d5da3377ffff39b": "0d4e9926b83ce6ede9fe7fed1f048753",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "dfa80d478c8654af9ba94eea82b31fd8",
".git/refs/remotes/origin/main": "dfa80d478c8654af9ba94eea82b31fd8",
".git/refs/remotes/origin/master": "fca2fb2e0514d93c784d4264304ab7bf",
"assets/AssetManifest.bin": "5c5d83f71b47faae554b4124f265c0fd",
"assets/AssetManifest.bin.json": "9ea98d3e9f9e606cd0ebb084f7e7c640",
"assets/AssetManifest.json": "e6234313e6c2fd69288af7f694e4bdbd",
"assets/assets/guru1.jpg": "f0555b59aaa9a964b023447f6b2b97cb",
"assets/assets/guru2.jpg": "4300e9e7bfbb59ef2e66ab3925c78083",
"assets/assets/guru3.jpg": "37d9a4846365029eb8a221c697d62b72",
"assets/assets/html/help_center.html": "01bcde049d187d9f6b327d8a0bb80155",
"assets/assets/panda.png": "db65c3b9cf65b5e2c194a22abe7fb153",
"assets/assets/rahma.jpg": "2e0d005c4019741b105e5bb79aed190f",
"assets/FontManifest.json": "97c2528ecc2fbf4093965257fdba1854",
"assets/fonts/MaterialIcons-Regular.otf": "77f7d45895bfe39f4b394f9757d2baf6",
"assets/NOTICES": "df55ecfe4f5146477178a5dc0f095a05",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "d525be8ec12852388d9e188c590aaf10",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "9bd759202e4630f044b40b3f4b184b08",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01bccb91c85fea9fd3bc5c99d62bf632",
"/": "01bccb91c85fea9fd3bc5c99d62bf632",
"main.dart.js": "953dd5c32e094651cbdbaad59aa17109",
"manifest.json": "1c5fd603809cc1557a783b61ef51a666",
"version.json": "e12d16673f638ed170a5f83edf27c036"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
