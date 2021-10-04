let Administrador = new AdministradorObj();

$(document).ready(function () {
  $(".content-inicio").show();
  $(".content-propiedades").hide();
  $(".content-nomencladores").hide();
  $(".content-mensajes").hide();

  $('#selectDepartamentos').on('change', function() {
    cargarLocalidad(this.value);
  });

  $('#CrearLocalidad').on('click', function() {
    crearLocalidad();
  });

  $('.buttonAgregar').on('click', function() {
    crearNomenclador(this.id)
  });

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
    cargoNomencladores();
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
  //cargo el tipo de Propiedad
  var tipoPropiedad = Administrador.traerTiposPropiedad();
  var divtipoPropiedad = document.getElementById("tipoPropiedad");
  var contenttipoPropiedad = "";
  for (var i = 0; i < tipoPropiedad.length; i = i+2){
    contenttipoPropiedad += "<div class='input'>"
    contenttipoPropiedad += "<input type='text' disabled placeholder='"+ tipoPropiedad[i+1] +"'><button onClick='eliminarTipoPropiedad("+ tipoPropiedad[i] +")'><i class='fas fa-times'></i></button>"
    contenttipoPropiedad += "</div>"
  }
  divtipoPropiedad.innerHTML = contenttipoPropiedad;

  //cargo localidades
  var arrayDepartamentos = Administrador.traerDepartamentos();
  var selectDepartamentos = document.getElementById('selectDepartamentos');
  for (var i = 0; i < arrayDepartamentos.length; i = i+2){
      //crea un elemento option
      var opt = document.createElement('option');
      //le agrega el id del departamento al value
      opt.value = arrayDepartamentos[i];
      //le agrega el nombre del departamento al option
      opt.text = arrayDepartamentos[i+1];
      //agrega el elemento al elemento con la id selectDepartamento
      selectDepartamentos.appendChild(opt);
  }

  //cargo los dormitorios
  var Dormitorios = Administrador.traerDormitorios();
  var divDormitorios = document.getElementById("Dormitorios");
  var contentDormitorios = "";
  for (var i = 0; i < Dormitorios.length; i = i+2){
    contentDormitorios += "<div class='input'>"
    contentDormitorios += "<input type='text' disabled placeholder='"+ Dormitorios[i+1] +"'><button onClick='eliminarDormitorios("+ Dormitorios[i] +")'><i class='fas fa-times'></i></button>"
    contentDormitorios += "</div>"
  }
  divDormitorios.innerHTML = contentDormitorios;

  //cargo los baños
  var Baños = Administrador.traerBaños();
  var divBaños = document.getElementById("Baños");
  var contentBaños = "";
  for (var i = 0; i < Baños.length; i = i+2){
    contentBaños += "<div class='input'>"
    contentBaños += "<input type='text' disabled placeholder='"+ Baños[i+1] +"'><button onClick='eliminarBaños("+ Baños[i] +")'><i class='fas fa-times'></i></button>"
    contentBaños += "</div>"
  }
  divBaños.innerHTML = contentBaños;

  //cargo garages
  var Garages = Administrador.traerGarages();
  var divGarages = document.getElementById("Garages");
  var contentGarages = "";
  for (var i = 0; i < Garages.length; i = i+2){
    contentGarages += "<div class='input'>"
    contentGarages += "<input type='text' disabled placeholder='"+ Garages[i+1] +"'><button onClick='eliminarGarages("+ Garages[i] +")'><i class='fas fa-times'></i></button>"
    contentGarages += "</div>"
  }
  divGarages.innerHTML = contentGarages;

  //cargo el estado de la propiedad
  var EstadoPropiedad = Administrador.traerEstados();
  var divEstadoPropiedad = document.getElementById("EstadoPropiedad");
  var contentEstadoPropiedad = "";
  for (var i = 0; i < EstadoPropiedad.length; i = i+2){
    contentEstadoPropiedad += "<div class='input'>"
    contentEstadoPropiedad += "<input type='text' disabled placeholder='"+ EstadoPropiedad[i+1] +"'><button onClick='eliminarEstadoPropiedad("+ EstadoPropiedad[i] +")'><i class='fas fa-times'></i></button>"
    contentEstadoPropiedad += "</div>"
  }
  divEstadoPropiedad.innerHTML = contentEstadoPropiedad;

  //cargo sobre donde queda la propiedad
  var PropiedadSobre = Administrador.traerSobre();
  var divPropiedadSobre = document.getElementById("PropiedadSobre");
  var contentPropiedadSobre = "";
  for (var i = 0; i < PropiedadSobre.length; i = i+2){
    contentPropiedadSobre += "<div class='input'>"
    contentPropiedadSobre += "<input type='text' disabled placeholder='"+ PropiedadSobre[i+1] +"'><button onClick='eliminarPropiedadSobre("+ PropiedadSobre[i] +")'><i class='fas fa-times'></i></button>"
    contentPropiedadSobre += "</div>"
  }
  divPropiedadSobre.innerHTML = contentPropiedadSobre;

  //cargo la distancia del mar
  var DistanciaMar = Administrador.traerDistanciamar();
  var divDistanciaMar = document.getElementById("DistanciaMar");
  var contentDistanciaMar = "";
  for (var i = 0; i < DistanciaMar.length; i = i+2){
    contentDistanciaMar += "<div class='input'>"
    contentDistanciaMar += "<input type='text' disabled placeholder='"+ DistanciaMar[i+1] +"'><button onClick='eliminarDistanciaMar("+ DistanciaMar[i] +")'><i class='fas fa-times'></i></button>"
    contentDistanciaMar += "</div>"
  }
  divDistanciaMar.innerHTML = contentDistanciaMar;

  //cargo las plantas
  var CantidadPlantas = Administrador.traerPlantas();
  var divCantidadPlantas = document.getElementById("CantidadPlantas");
  var contentCantidadPlantas = "";
  for (var i = 0; i < CantidadPlantas.length; i = i+2){
    contentCantidadPlantas += "<div class='input'>"
    contentCantidadPlantas += "<input type='text' disabled placeholder='"+ CantidadPlantas[i+1] +"'><button onClick='eliminarCantidadPlantas("+ CantidadPlantas[i] +")'><i class='fas fa-times'></i></button>"
    contentCantidadPlantas += "</div>"
  }
  divCantidadPlantas.innerHTML = contentCantidadPlantas;

  //cargo los comforts
  var TiposComfort = Administrador.traerComfort();
  var divTiposComfort = document.getElementById("TiposComfort");
  var contentTiposComfort = "";
  for (var i = 0; i < TiposComfort.length; i = i+2){
    contentTiposComfort += "<div class='input'>"
    contentTiposComfort += "<input type='text' disabled placeholder='"+ TiposComfort[i+1] +"'><button onClick='eliminarTiposComfort("+ TiposComfort[i] +")'><i class='fas fa-times'></i></button>"
    contentTiposComfort += "</div>"
  }
  divTiposComfort.innerHTML = contentTiposComfort;

  //cargo las seguridades
  var TiposSeguridad = Administrador.traerSeguridad();
  var divTiposSeguridad = document.getElementById("TiposSeguridad");
  var contentTiposSeguridad = "";
  for (var i = 0; i < TiposSeguridad.length; i = i+2){
    contentTiposSeguridad += "<div class='input'>"
    contentTiposSeguridad += "<input type='text' disabled placeholder='"+ TiposSeguridad[i+1] +"'><button onClick='eliminarTiposSeguridad("+ TiposSeguridad[i] +")'><i class='fas fa-times'></i></button>"
    contentTiposSeguridad += "</div>"
  }
  divTiposSeguridad.innerHTML = contentTiposSeguridad;
  
}

function cargarLocalidad(idDepartamento){
  var Localidades = Administrador.traerLocalidades(idDepartamento);
  var divLocalidades = document.getElementById("Localidades");
  var contentLocalidades = "";
  for (var i = 0; i < Localidades.length; i = i+2){
    contentLocalidades += "<div class='input'>"
    contentLocalidades += "<input type='text' disabled placeholder='"+ Localidades[i+1] +"'><button onClick='eliminarLocalidades("+ Localidades[i] +")'><i class='fas fa-times'></i></button>"
    contentLocalidades += "</div>"
  }
  divLocalidades.innerHTML = contentLocalidades;
}

function crearLocalidad(){
  var departamento = document.getElementById("selectDepartamentos").value;
  var nuevaLocalidad = document.getElementById("NuevaLocalidad").value
  if(departamento != 0){
    if(nuevaLocalidad == "" || nuevaLocalidad == null){
      alert("error de que debe escribir el nombre de la nueva localidad")
    }else{
      if(nuevaLocalidad.length < 30){
        //crea la localidad
        Administrador.crearLocalidad(departamento, nuevaLocalidad);
        //recarga las localidades para mostrar lo nuevo
        cargarLocalidad(departamento);
      }else{
        alert("error del nombre de la localidad es muy largo")
      }
    }
  }else{
    alert("acá va el error de que debe seleccionar un departamento")
  }
}

//tiene todas las funciones de crear nomencladores, cada una separada por el id que recibe
function crearNomenclador(nomenclador){
  switch(nomenclador){
    case "0":
      var nuevoTipoPropiedad = document.getElementById("nuevoTipoPropiedad").value;
      if(nuevoTipoPropiedad != "" || nuevoTipoPropiedad != null){
        if(nuevoTipoPropiedad.length < 60){
          Administrador.crearTipoPropiedad(nuevoTipoPropiedad);
          cargoNomencladores();
        }else{
          alert("nombre tipo propiedad muy grande")
        } 
      }else{
        alert("debe ingresar un nuevo tipo de propiedad")
      }
      break;
    case "1":
      var nuevoDormitorio = document.getElementById("nuevoDormitorio").value;
      if(nuevoDormitorio != 0 || nuevoDormitorio != null){
        if(!isNaN(nuevoDormitorio)){
          Administrador.crearDormitorio(nuevoDormitorio);
          cargoNomencladores();
        }else{
          alert("no es un numero")
        } 
      }else{
        alert("debe ingresar un nuevo cantidad dormitorios")
      }
      break;
    case "2":
      var nuevoBaño = document.getElementById("nuevoBaño").value;
      if(nuevoBaño != 0 || nuevoBaño != null){
        if(!isNaN(nuevoBaño)){
          Administrador.crearBaño(nuevoBaño);
          cargoNomencladores();
        }else{
          alert("no es un numero")
        } 
      }else{
        alert("debe ingresar un nuevo cantidad baños")
      }
      break;
    case "3":
      var nuevoGarage = document.getElementById("nuevoGarage").value;
      if(nuevoGarage != 0 || nuevoGarage != null){
        if(!isNaN(nuevoGarage)){
          Administrador.crearGarage(nuevoGarage);
          cargoNomencladores();
        }else{
          alert("no es un numero")
        } 
      }else{
        alert("debe ingresar un nuevo cantidad dormitorios")
      }
      break;
    case "4":
      var nuevoEstado = document.getElementById("nuevoEstado").value;
      if(nuevoEstado != "" || nuevoEstado != null){
        if(nuevoEstado.length < 100){
          Administrador.crearEstado(nuevoEstado);
          cargoNomencladores();
        }else{
          alert("nombre tipo propiedad muy grande")
        } 
      }else{
        alert("debe ingresar un nuevo tipo de propiedad")
      }
      break;
    case "5":
      var nuevoSobre = document.getElementById("nuevoSobre").value;
      if(nuevoSobre != "" || nuevoSobre != null){
        if(nuevoSobre.length < 60){
          Administrador.crearSobre(nuevoSobre);
          cargoNomencladores();
        }else{
          alert("nombre tipo propiedad muy grande")
        } 
      }else{
        alert("debe ingresar un nuevo tipo de propiedad")
      }
      break;
    case "6":
      var nuevaDistanciaMar = document.getElementById("nuevaDistanciaMar").value;
      if(nuevaDistanciaMar != "" || nuevaDistanciaMar != null){
        if(nuevaDistanciaMar.length < 100){
          Administrador.crearDistanciaMar(nuevaDistanciaMar);
          cargoNomencladores();
        }else{
          alert("nombre tipo propiedad muy grande")
        } 
      }else{
        alert("debe ingresar un nuevo tipo de propiedad")
      }
      break;
    case "7":
      var nuevaPlanta = document.getElementById("nuevaPlanta").value;
      if(nuevaPlanta != 0 || nuevaPlanta != null){
        if(!isNaN(nuevaPlanta)){
          Administrador.crearPlanta(nuevaPlanta);
          cargoNomencladores();
        }else{
          alert("no es un numero")
        } 
      }else{
        alert("debe ingresar un nuevo cantidad dormitorios")
      }
      break;
    case "8":
      var nuevoComfort = document.getElementById("nuevoComfort").value;
      if(nuevoComfort != "" || nuevoComfort != null){
        if(nuevoComfort.length < 100){
          Administrador.crearComfort(nuevoComfort);
          cargoNomencladores();
        }else{
          alert("nombre tipo propiedad muy grande")
        } 
      }else{
        alert("debe ingresar un nuevo tipo de propiedad")
      }
      break;
    case "9":
      var nuevaSeguridad = document.getElementById("nuevaSeguridad").value;
      if(nuevaSeguridad != "" || nuevaSeguridad != null){
        if(nuevaSeguridad.length < 100){
          Administrador.crearSeguridad(nuevaSeguridad);
          cargoNomencladores();
        }else{
          alert("nombre tipo propiedad muy grande")
        } 
      }else{
        alert("debe ingresar un nuevo tipo de propiedad")
      }
      break;
    default: 
      alert("no se como pero rompiste los id")
      break;
  }
}