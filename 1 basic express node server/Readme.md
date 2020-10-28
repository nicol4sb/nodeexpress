# Demo of basic express features and HTTP protocol

Startup the server :
    node server.js

Send an HTTP request to the server :
Simple GET :
    curl localhost:3000/hello

More elaborate - POST - curl will choose to issue a POST request based on the presence of a body :
    curl --header 'content-type: application/json' localhost:3000/hello --data '{"foo": "bar"}'
