var express = require('express');
const bodyParser = require('body-parser');

// initialize express app
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true}));

var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
 
app.post('/messages', (req, res) => {
    console.log('message sent through');
    var message = req.body;
    io.emit('updatemessage', message);
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('sendmessage', (message) => {
        io.emit('updatemessage', message);
    });
});

http.listen({
    host: 'localhost',
    port: 80,
    exclusive: true
    }, function(){
        console.log('server listening to %j', http.address());
});





