# Demo of trivial non distributed rate limiting based on the user header

Startup the server :
    node server.js

curl localhost:3000/index.html -H "user:Joe"
curl localhost:3000/index.html -H "user:Nic"
