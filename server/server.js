var express = require('express');
const bodyParser = require('body-parser');

// initialize express app
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true}));

var http = require('http').Server(app);
var io = require('socket.io').listen(http);
 
app.post('/messages', (req, res) => {
    console.log('message sent through');
    var message = req.body;
    io.emit('updatemessage', message);
});

http.listen(7000, function(){
    console.log('server listening to %j', http.address());
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('sendmessage', (message) => {
        io.emit('updatemessage', message);
    });
});





