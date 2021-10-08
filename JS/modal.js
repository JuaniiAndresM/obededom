function modal(numero_mensaje) {
  $.ajax({
    type: "POST",
    url: "/obededom/Modal/modal.php",
    data: { numero_mensaje: 1 },
    success: function (response) {
      console.log(response);
      $(".modal").html(response);
    },
  });
}

function cerrar(){
    $(".modal").hide();
}
