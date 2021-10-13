function login(){
    var usuario   = $('#usuario').val();
    var password  = $('#password').val();
    
    if(usuario == "" || password == ""){
      console.log("hola");
      $.ajax({
        url: "/obededom/Modal/modal.php",
        type: "POST",
        data: { numero_mensaje: "LoginCamposVacios"},
        success: function (data) {
            document.getElementById("modal").innerHTML = data;
            $(".modal").css('display', 'flex');
        }
      });
    }else{
      let user = new Usuario();
      var log = user.login(usuario, password);
      
        if(log == true){
          location.href = "/ChessUY/Inicio";
      }else{
        var numero_mensaje = 1;

        $.ajax({
          url: "/ChessUY/Modal/modal.php",
          type: "POST",
          data: { numero_mensaje: numero_mensaje},
          success: function (data) {
              document.getElementById("modal").innerHTML = data;
          }
      });
      }
    }
}