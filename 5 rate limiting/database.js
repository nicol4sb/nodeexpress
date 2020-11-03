const database = {
    ['index.html']: '<html>Hello World!</html>',
};

module.exports.get =  (key, callback) => {
    callback(database[key]);
};