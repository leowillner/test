var express = require('express'),
    app = express();
    //livereload = require('livereload'),
    //server = livereload;

app.use(express.static(__dirname + '/../public'));
app.listen(parseInt(process.env.PORT, 10), process.env.IP, function() {
//app.listen(process.env.PORT);

//server = livereload.createServer({port: process.env.PORT + 1});
//server = livereload.createServer();
//server.watch(__dirname + "/../public");

    console.log('Express server started on port ' + parseInt(process.env.PORT, 10) + ' on IP ' + process.env.IP);
});