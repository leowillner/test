var    livereload = require('livereload'),
       server = livereload,
       number = 0;
       number = parseInt(process.env.PORT, 10);

//number++;

server = livereload.createServer({port: number});
server.watch(__dirname + "/../public");
console.log('Express server started on port ' + number + ' on IP ' + process.env.IP);