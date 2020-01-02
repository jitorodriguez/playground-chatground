var express = require('express');
const bodyParser = require('body-parser');

// initialize express app
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true}));

var http = require('http').createServer(app);
var io = require('socket.io')(http);
 
app.post('/messages', (req, res) => {
    var message = req.body;
    io.emit('updatemessage', message);
});

http.listen(7000, function(){
    console.log('I hear you :)');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('sendmessage', (message) => {
        io.emit('updatemessage', message);
    });
});



