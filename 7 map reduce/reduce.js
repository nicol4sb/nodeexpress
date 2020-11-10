const mapReduce = require('./map_reduce');

function reduce(key, values){
    const valueCount = values.length;
    mapReduce.emitReduceResult(key, valueCount);
}

const reduceInputs = mapReduce.getReduceInputs();
for(const input of reduceInputs){
    reduce(input[0],input[1]);
}