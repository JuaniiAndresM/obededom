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
                var est2 = JSON.parse(txt);

                if(est2.error == true){
                    x = false;
                }else{
                    sessionStorage.setItem("usuario", est2.usuario);
                    sessionStorage.setItem("tipo", est2.tipo);
                    x = true;
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 
                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }   
        });
        return x;
    }
}
