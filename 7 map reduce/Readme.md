# Demo of trivial map reduce across a couple of hosts and minimal files

# generate the files
MAX=3000; (for i in `seq 1 200`; do echo "$RANDOM%$MAX+1"|bc >> host1/latencies.txt ; done)

# execute the steps in order :
run.sh