$(document).ready(function () {
  $(".content-inicio").show();
  $(".content-propiedades").hide();
  $(".content-nomencladores").hide();
  $(".content-mensajes").hide();
});

function desplegar() {
  if ($(".sidebar-menu").hasClass("desplegado") == false) {
    $(".sidebar-menu").addClass("desplegado");
  } else {
    $(".sidebar-menu").removeClass("desplegado");
  }
}

function seccion(seccion) {

  $(".content-inicio").hide();

  if (seccion == "propiedades") {
    $(".content-propiedades").show();
    $(".content-nomencladores").hide();
    $(".content-mensajes").hide();
  } else if (seccion == "nomencladores") {
    $(".content-propiedades").hide();
    $(".content-nomencladores").show();
    $(".content-mensajes").hide();
  } else if (seccion == "mensajes") {
    $(".content-propiedades").hide();
    $(".content-nomencladores").hide();
    $(".content-mensajes").show();
  }
}
