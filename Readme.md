# Set of JS experiments related to system design

Demonstrating concepts suchs as

* network protocols and specifically HTTP
* caching
* proxies
* nosql db / redis

# reminders of useful network commands
dig google.com - dns infos
nc -l 8081 - netcat opens a listening socket on port 8081

Simplest netcat HTTP server :
printf 'HTTP/1.1 200 OK\n\n%s' "$(cat index.html)" | netcat -l 8888
& go to localhost:8888

# availability
5 9s = HA = 5'' 26' per year
1MB read in ram .25ms
1MB read on SSD 1ms
1MB read over 1Gb network 10ms (Byte and bit)
1MB read over HDD 20ms
1MB over internet roundtrip EU-US 150ms
