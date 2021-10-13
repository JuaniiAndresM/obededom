class Usuario{
    login(usuario, password){ 
        var x= false;
        $.ajax({
            async: false,
            type: "POST",
            url: "/obededom/Form/PHP/Login.php",
            data: {usuario: usuario, pass: password},
            success: function(log){
                var txt = log;
                
                x = txt;
                console.log(txt);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }   
        });
        return x;
    }
    cerrarsesion(){
        $.ajax({
            async: false,
            type: "POST",
            url: "/obededom/Form/PHP/CerrarSesion.php",
            success: function(log){
                
            } 
        });
    }
}
