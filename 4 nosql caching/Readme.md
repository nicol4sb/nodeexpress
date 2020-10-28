# Demo of basic caching

Startup the server :
    node server.js

Send a request bypassing the cache :
    curl localhost:3000/nocache/index.html

With caching - will be 3s the first time, then instant as served from ... the cache
    curl localhost:3000/withcache/index.html # slow
    curl localhost:3000/withcache/index.html # fast
