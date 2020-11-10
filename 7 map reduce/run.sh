#! /bin/bash

# clean up from a previous run
rm -f host*/map_results/*.txt map_results/*.txt reduce_result/*

# run the map test on all hosts
HOST=host1 node map.js &
HOST=host2 node map.js &

# wait for all to be done
wait

# shuffle
HOSTS=host1,host2 node shuffle.js

# reduce step
node reduce.js

# view the final result 
cat reduce_result/results.txt
