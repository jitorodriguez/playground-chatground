var express = require('express');
var app = express();

app.use(express.static(__dirname));

var server = app.listen(7000, () => {
    console.log("server is running on port", server.address().port);
   });
 
app.post('/messages', (req, res) => {
    var message = req.body;
    console.log(message);
})