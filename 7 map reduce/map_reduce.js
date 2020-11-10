const fs = require('fs');

const HOST = process.env.HOST;

function getMapInput(fileName){
    const path = `${HOST}/${fileName}`;
    return fs.readFileSync(path, 'utf-8');
}

function emitMapResult(key, value){
    fs.appendFileSync(`${HOST}/map_results/${key}.txt`,value);
}

function getReduceInputs(){
    const fileNames = fs.readdirSync(`map_results`,`utf-8`);
    const inputs = [];
    for (const fileName in fileNames){
        const key = fileName.split('.')[0];
        const content = fs.readFileSync(`map_results/${fileName}`,'utf-8');
        inputs.push(key, content.split('\n').filter(value => value !== ''));
    }
    return inputs;
}

function emitReduceResults(key, value){
    const fileName = `map_results/result.txt`;
    fs.appendFileSync(fileName, key + ' ' + value + '\n');
}

module.exports.getMapInput = getMapInput;
module.exports.emitMapResult = emitMapResult;
module.exports.getReduceInputs = getReduceInputs;
module.exports.emitReduceResults = emitReduceResults;