var http    = require('http'),
    cluster = require('cluster'),
    numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    console.log('Master process, (pid: %d)', process.pid);
} else {
    // HTTP server workers
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end('Hello from ' + process.pid + '\n');
    }).listen(1337);

    console.log('Server running at http://localhost:1337 (pid: %d)', process.pid);
}
