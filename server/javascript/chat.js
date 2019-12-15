$(document).ready(function(){

    $('#send').click(function(){
        var chatMessage = {
            user: $('#user').val(),
            message: $('#message').val()
        };

        sendMesage(chatMessage);        
    });


    function sendMesage(messagePack)
    {
        $.post("http://localhost:7000/messages", messagePack);
    }

});