function modal(numero_mensaje) {
  $.ajax({
    type: "POST",
    url: "/obededom/Modal/modal.php",
    data: { numero_mensaje: numero_mensaje },
    success: function (response) {
      $(".modal").html(response);
      $(".modal").css('display', 'flex');
    },
  });
}

function cerrar(){
    $(".modal").hide();
}
