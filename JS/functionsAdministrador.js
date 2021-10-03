let Administrador = new AdministradorObj();

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
    $(".content-soporte").hide();
  } else if (seccion == "nomencladores") {
    $(".content-propiedades").hide();
    $(".content-nomencladores").show();
    $(".content-mensajes").hide();
    $(".content-soporte").hide();
  } else if (seccion == "mensajes") {
    $(".content-propiedades").hide();
    $(".content-nomencladores").hide();
    $(".content-mensajes").show();
    $(".content-soporte").hide();
  } else if (seccion == "inicio") {
    $(".content-inicio").show();
    $(".content-propiedades").hide();
    $(".content-nomencladores").hide();
    $(".content-mensajes").hide();
    $(".content-soporte").hide();
  } else if (seccion == "soporte"){
    $(".content-inicio").hide();
    $(".content-propiedades").hide();
    $(".content-nomencladores").hide();
    $(".content-mensajes").hide();

    $(".content-soporte").show();
    $(".soporte-buttons").show();
    $(".soporte-form").hide();
  }
}

function soporte(soporte){
  $(".soporte-buttons").hide();

  if(soporte == "form"){
    $(".soporte-form").show();
  }
}

function cargoNomencladores(){
}