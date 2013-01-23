var Path = require('path'),
  connect = require('connect'),
  reloadOnChange = require('watch-connect');

var path = Path.resolve(__dirname + "/../public");

var server = connect();
var options = {watchdir:path, server:server, verbose: true};
server.use(reloadOnChange(options));
server.use(connect.static(path));

server.listen((process.env.PORT), function(){
  console.log('listening on http://127.0.0.1:3000');
  console.log(process.env.IP);
});