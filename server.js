/**
 * Created by: leafchild
 * Date: 2/15/16
 * Time: 07:51
 */

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.broadcast.emit('connected', '<b>New user connected</b>');

	socket.on('disconnect', function(){
		socket.broadcast.emit('disconnected', '<b>User was disconnected</b>');
	});

	socket.on('message', function(msg){
		socket.broadcast.emit('message', msg);
	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});