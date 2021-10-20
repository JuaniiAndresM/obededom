class Usuario{
    login(usuario, password){ 
        var x= false;
        $.ajax({
            async: false,
            type: "POST",
            url: "Form/PHP/Login.php",
            data: {usuario: usuario, pass: password},
            success: function(log){
                var txt = log;
                x = txt;
            },
            error: function (request, error) {
                console.log(arguments);
                console.log(request.responseText);
                console.log(error);
            }
        });
        return x;
    }
    cerrarsesion(){
        $.ajax({
            async: false,
            type: "POST",
            url: "Form/PHP/CerrarSesion.php",
            success: function(log){
                
            } 
        });
    }
}
