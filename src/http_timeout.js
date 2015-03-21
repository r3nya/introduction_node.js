var http = require('http');

http.createServer(function (req, res) {
    setTimeout(function () {
        res.end('World\n');
    }, 1000);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello,\n');
}).listen(1337);

console.log('Server running');
