# Demo of trivial map reduce across a couple of hosts and minimal files

# generate the files
MAX=3000; (for i in `seq 1 2000`; do echo "$RANDOM%$MAX+1"|bc; done)>> host1/latencies.txt

# execute the steps in order :
run.sh