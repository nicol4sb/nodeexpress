# Demo of trivial pub sub mechanism

3 terminals
    node server.js
    node publisher.js
    node subscriber.js

Subscriber and publisher listen on the command line to register and subscribe
Server ensures creation of topics and dispatching.

Then add more clients to demo multiple subscriptions.

(for i in `seq 1 200`; do sleep 1; echo new stock price; done) | NAME=STOCK_BROKER TOPIC_ID=stock_prices node publisher.js
