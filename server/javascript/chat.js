$(document).ready(function(){

    $('#send').click(function(){
        var chatMessage = {
            user: $('#user').val(),
            message: $('#message').val()
        };

        sendMesage(chatMessage);        
    });

    socket.on('updatemessage', function (data) {
        var htmlMessageBlock = '<p class="user">[' + data.user + ']</p><p>: ' + data.message + '</p>';
        $('#message-container').append(htmlMessageBlock);
    });

    function sendMesage(messagePack)
    {
        socket.emit('sendmessage', messagePack);
    }

});