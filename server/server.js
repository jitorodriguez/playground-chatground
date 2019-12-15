var express = require('express');
const bodyParser = require('body-parser');

// initialize express app
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true}));

var http = require('http').createServer(app);
var io = require('socket.io')(http);

/*
var server = app.listen(7000, () => {
    console.log("server is running on port", server.address().port);
});
*/
 
app.post('/messages', (req, res) => {
    var message = req.body;
    console.log(message);
});

http.listen(7000, function(){
    console.log('I hear you :)');
});

io.on('connection', function(socket){
    console.log('a user connected');
});



