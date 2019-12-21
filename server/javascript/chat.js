$(document).ready(function(){

    $('#send').click(function(){
        var chatMessage = {
            user: $('#user').val(),
            message: $('#message').val()
        };

        sendMesage(chatMessage);        
    });

    socket.on('updatemessage', function (data) {
        var htmlMessageBlock = '<p>[' + data.user + ']: ' + data.message + '</p>'; 
        $('#message-container').append(htmlMessageBlock);
    });

    function sendMesage(messagePack)
    {
        $.post("http://localhost:7000/messages", messagePack);
    }

});