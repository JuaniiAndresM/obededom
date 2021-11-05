let Administrador = new AdministradorObj();
let Backend = new BackendObj();

$(document).ready(function () {
  $(".content-inicio").show();
  $(".content-propiedades").hide();
  $(".content-nomencladores").hide();
  $(".content-mensajes").hide();
  $(".content-soporte").hide();

  $('#selectDepartamentos').on('change', function() {
    cargarLocalidad(this.value);
  });
  
  //filtros
  $('.filtro').on('change', function(e) {
    if(this.value == -1){
      $('.propiedad').filter(':not(.'+ this.value +')').show()
      if(this.id = 'filtroDepartamento'){
        $("#filtroLocalidad").empty().append($("<option></option>").attr({"value": -1,"selected": true}).text('Seleccione un Departamento.'));
      }
    }else{
      $('.propiedad').filter(':not(.'+ this.value +')').hide();
      if(this.id = 'filtroDepartamento'){
        cargarFiltroLocalidad(e.target.options[e.target.selectedIndex].getAttribute('id'));
      }
    }
  });

  $('#CrearLocalidad').on('click', function() {
    crearLocalidad();
  });

  $('#crearPropiedad').on('click', function() {
    sessionStorage.removeItem('idPropiedadEditar');
    location.href = "Backend";
  });

  $('.buttonAgregar').on('click', function() {
    crearNomenclador(this.id)
  });

  $('.propiedad-wrapper').on('click', '.propiedad .borrarPropiedad', function(event){
    eliminarPropiedad(this.id);
  });

  $('.propiedad-wrapper').on('click', '.propiedad .habilitar', function(event){
    Administrador.habilitarPropiedad(this.id);
    cargoPropiedades();
    modal("propiedadHabilitada")
  });

  $('.propiedad-wrapper').on('click', '.propiedad .deshabilitar', function(event){
    Administrador.deshabilitarPropiedad(this.id);
    cargoPropiedades();
    modal("propiedadDeshabilitada")
  });

  $('.propiedad-wrapper').on('click', '.propiedad .editar', function(event){
    sessionStorage.removeItem("idPropiedadEditar")
    sessionStorage.setItem("idPropiedadEditar", this.id);
    location.href = 'Backend';
  });

  $('#buscador').on('keyup', function() {
    buscador(this.value);
  });

  $('.nomencladores-actuales').on('click', 'button.buttonEliminar', function(event){
    Administrador.eliminarNomenclador(this.id, this.value)
    modal("borraNomenclador")
    cargoNomencladores();
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
    cargoFiltros();
    cargoPropiedades();
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

function cargoPropiedades(){
  var propiedades = Administrador.traerPropiedades();
  var imagenes = Backend.traerImagen();
  console.log(imagenes);
  var divPropiedades = document.getElementById("seccionPropiedades");
  var nuevaPropiedad = "";
  var departamento = "";
  var urlImagen = "";
  var precio;
  //vacio los elementos anteriores
  divPropiedades.innerHTML = "";
  for (var i = 0; i < propiedades.length; i = i+33){
    //comprueba si tiene imagen
    if(imagenes.indexOf(propiedades[i], 1) != -1){
      urlImagen = imagenes[imagenes.indexOf(propiedades[i], 1) - 1]
    }else{
      urlImagen = "/media/img/Ejemplo1.jpg";
    }

    //comprueba si se muestra el precio
    if(propiedades[i+30] == 1){
      precio = propiedades[i+3]
    }else{
      precio = "A Convenir"
    }
    //comprueba el estado de la propiedad
    if(propiedades[i+28] == 1){
      departamento = comprueboDepartamento(propiedades[i+7]);
      nuevaPropiedad = `<div class='propiedad `+ propiedades[i+28] +` `+ propiedades[i+6].split(" ").join("") + ` `+ propiedades[i+8].split(" ").join("") +` `+ departamento.split(" ").join("") +`' >
                        <div class='estado'>
                          <p><i class="fas fa-check-circle"></i> Activo</p>
                        </div>
                        <div class="card-img">
                          <img src="`+ urlImagen +`" alt="" />
                        </div>
                        <div class="card-content">
                          <h2>`+ propiedades[i+1] +`</h2>

                          <div class="tipo">
                            <p>`+ propiedades[i+6] +`</p>
                          </div>

                          <div class="direccion">
                            <p><i class="fas fa-map-marker-alt"></i> `+ propiedades[i+9] +`, <span id="localidad">`+ propiedades[i+8] +`</span>, <span id="departamento">`+ departamento +`</span></p>
                          </div>
                          <div class="precio">
                            <hr>
                            <p>U$S <span id="precioDolares">`+ precio +`</span></p>
                          </div>
                          
                        </div>
                        <div class="buttons">
                          <button class="deshabilitar" id=`+ propiedades[i] +`><i class="fas fa-times-circle"></i></button>
                          <button class="editar" id=`+ propiedades[i] +`><i class="fas fa-edit"></i></button>
                          <button class="borrarPropiedad" id=`+ propiedades[i] +`><i class="fas fa-trash-alt"></i></button>
                        </div>
                      </div>`
    }else{
      departamento = comprueboDepartamento(propiedades[i+7]);
      nuevaPropiedad = `<div class='propiedad `+ propiedades[i+28] +` `+ propiedades[i+6].split(" ").join("") +` `+ propiedades[i+8].split(" ").join("") +` `+ departamento.split(" ").join("") +`'>
                        <div class='estado inactivo'>
                          <p><i class="fas fa-times-circle"></i> Inactivo</p>
                        </div>
                        <div class="card-img">
                          <img src="`+ urlImagen +`" alt="" />
                        </div>
                        <div class="card-content">
                          <h2>`+ propiedades[i+1] +`</h2>

                          <div class="tipo">
                            <p>`+ propiedades[i+6] +`</p>
                          </div>

                          <div class="direccion">
                            <p><i class="fas fa-map-marker-alt"></i> `+ propiedades[i+9] +`, <span id="localidad">`+ propiedades[i+8] +`</span>, <span id="departamento">`+ departamento +`</span></p>
                          </div>
                          <div class="precio">
                            <hr>
                            <p>U$S <span id="precioDolares">`+ precio +`</span></p>
                          </div>
                          <div class="buttons">
                            <button class="habilitar" id=`+ propiedades[i] +`><i class="fas fa-check-circle"></i></button>
                            <button class="editar" id=`+ propiedades[i] +`><i class="fas fa-edit"></i></button>
                            <button class="borrarPropiedad" id=`+ propiedades[i] +`><i class="fas fa-trash-alt"></i></button>
                          </div>
                          
                        </div>`
    }
    divPropiedades.innerHTML += nuevaPropiedad;
  }
}//    var pdf = Backend.traerPDF(idPropiedad);
function cargoFiltros(){
  //carga los tipos de propiedad
  var arrayTipoPropiedad = Backend.traerTiposPropiedad();
  $("#filtroTipo").empty().append($("<option></option>").attr({"value": -1,"selected": true}).text('Todos'));
  var selectTipoPropiedad = document.getElementById('filtroTipo');
  for (var i = 0; i < arrayTipoPropiedad.length; i = i+2){
      var opt = document.createElement('option');
      opt.value = arrayTipoPropiedad[i+1].split(" ").join("");
      opt.text = arrayTipoPropiedad[i+1];
      selectTipoPropiedad.appendChild(opt);
  }
  //carga los departamentos
  var arrayDepartamentos = Backend.traerDepartamentos();
  $("#filtroDepartamento").empty().append($("<option></option>").attr({"value": -1,"selected": true}).text('Todos'));
  var selectDepartamentos = document.getElementById('filtroDepartamento');
  for (var i = 0; i < arrayDepartamentos.length; i = i+2){
      //crea un elemento option
      var opt = document.createElement('option');
      opt.id = arrayDepartamentos[i];
      //le agrega el id del departamento al value
      opt.value = arrayDepartamentos[i+1].split(" ").join("");
      //le agrega el nombre del departamento al option
      opt.text = arrayDepartamentos[i+1];
      //agrega el elemento al elemento con la id selectDepartamento
      selectDepartamentos.appendChild(opt);
  }
}

function cargarFiltroLocalidad(idDepartamento){
  var arrayLocalidades = Backend.traerLocalidades(idDepartamento);
  var selectLocalidades;
  selectLocalidades = document.getElementById('filtroLocalidad')
  $("#filtroLocalidad").empty().append($("<option></option>").attr({"value": -1,"selected": true}).text('Todos'));
  for (var i = 0; i < arrayLocalidades.length; i = i+2){
      //crea un elemento option
      var opt = document.createElement('option');
      //le agrega el id de la localidad al value
      opt.value = arrayLocalidades[i+1].split(" ").join("");
      //le agrega el nombre de la localidad al option
      opt.text = arrayLocalidades[i+1];
      //agrega el elemento al elemento con la id selectLocalidades
      selectLocalidades.appendChild(opt);
  }
}

function comprueboDepartamento(idDepartamento){
  switch(parseInt(idDepartamento)){
    case 1:
      return "Artigas";
    case 2:
      return "Canelones";
    case 3:
      return "Cerro Largo";
    case 4:
      return "Colonia";
    case 5:
      return "Durazno";
    case 6:
      return "Flores";
    case 7:
      return "Florida";
    case 8:
      return "Lavalleja";
    case 9:
      return "Maldonado";
    case 10:
      return "Montevideo";
    case 11:
      return "Paysandú";
    case 12:
      return "Río Negro";
    case 13:
      return "Rivera";
    case 14:
      return "Rocha";
    case 15:
      return "Salto";
    case 16:
      return "San José";
    case 17:
      return "Soriano";
    case 18:
      return "Tacuarembó";
    case 19:
      return "Treinta y Tres";
    default: "Error"
  }
}

function buscador(value) {
  // Declare variables
  var filter = value.toUpperCase();
  var seccionPropiedades = document.getElementById("seccionPropiedades");
  var tituloPropiedades = seccionPropiedades.getElementsByTagName('h2');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < tituloPropiedades.length; i++) {
    txtValue = tituloPropiedades[i].textContent || tituloPropiedades[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tituloPropiedades[i].parentElement.parentElement.style.display = "";
    } else {
      tituloPropiedades[i].parentElement.parentElement.style.display = "none";
    }
  }
}

function cargoNomencladores(){
  //cargo el tipo de Propiedad
  var tipoPropiedad = Administrador.traerTiposPropiedad();
  var divtipoPropiedad = document.getElementById("tipoPropiedad");
  var contenttipoPropiedad = "";
  for (var i = 0; i < tipoPropiedad.length; i = i+2){
    contenttipoPropiedad += "<div class='input'>"
    contenttipoPropiedad += "<input type='text' disabled placeholder='"+ tipoPropiedad[i+1] +"'><button class='buttonEliminar' id=1 value="+ tipoPropiedad[i] +"><i class='fas fa-times'></i></button>"
    contenttipoPropiedad += "</div>"
  }
  divtipoPropiedad.innerHTML = contenttipoPropiedad;

  //cargo departamentos
  var arrayDepartamentos = Administrador.traerDepartamentos();
  var selectDepartamentos = document.getElementById('selectDepartamentos');
  $("#selectDepartamentos").empty();
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
    contentDormitorios += "<input type='text' disabled placeholder='"+ Dormitorios[i+1] +"'><button class='buttonEliminar' id=2 value="+ Dormitorios[i] +"><i class='fas fa-times'></i></button>"
    contentDormitorios += "</div>"
  }
  divDormitorios.innerHTML = contentDormitorios;

  //cargo los baños
  var Baños = Administrador.traerBaños();
  var divBaños = document.getElementById("Baños");
  var contentBaños = "";
  for (var i = 0; i < Baños.length; i = i+2){
    contentBaños += "<div class='input'>"
    contentBaños += "<input type='text' disabled placeholder='"+ Baños[i+1] +"'><button class='buttonEliminar' id=3 value="+ Baños[i] +"><i class='fas fa-times'></i></button>"
    contentBaños += "</div>"
  }
  divBaños.innerHTML = contentBaños;

  //cargo garages
  var Garages = Administrador.traerGarages();
  var divGarages = document.getElementById("Garages");
  var contentGarages = "";
  for (var i = 0; i < Garages.length; i = i+2){
    contentGarages += "<div class='input'>"
    contentGarages += "<input type='text' disabled placeholder='"+ Garages[i+1] +"'><button class='buttonEliminar' id=4 value="+ Garages[i] +"><i class='fas fa-times'></i></button>"
    contentGarages += "</div>"
  }
  divGarages.innerHTML = contentGarages;

  //cargo el estado de la propiedad
  var EstadoPropiedad = Administrador.traerEstados();
  var divEstadoPropiedad = document.getElementById("EstadoPropiedad");
  var contentEstadoPropiedad = "";
  for (var i = 0; i < EstadoPropiedad.length; i = i+2){
    contentEstadoPropiedad += "<div class='input'>"
    contentEstadoPropiedad += "<input type='text' disabled placeholder='"+ EstadoPropiedad[i+1] +"'><button class='buttonEliminar' id=5 value="+ EstadoPropiedad[i] +"><i class='fas fa-times'></i></button>"
    contentEstadoPropiedad += "</div>"
  }
  divEstadoPropiedad.innerHTML = contentEstadoPropiedad;

  //cargo sobre donde queda la propiedad
  var PropiedadSobre = Administrador.traerSobre();
  var divPropiedadSobre = document.getElementById("PropiedadSobre");
  var contentPropiedadSobre = "";
  for (var i = 0; i < PropiedadSobre.length; i = i+2){
    contentPropiedadSobre += "<div class='input'>"
    contentPropiedadSobre += "<input type='text' disabled placeholder='"+ PropiedadSobre[i+1] +"'><button class='buttonEliminar' id=6 value="+ PropiedadSobre[i] +"><i class='fas fa-times'></i></button>"
    contentPropiedadSobre += "</div>"
  }
  divPropiedadSobre.innerHTML = contentPropiedadSobre;

  //cargo la distancia del mar
  var DistanciaMar = Administrador.traerDistanciamar();
  var divDistanciaMar = document.getElementById("DistanciaMar");
  var contentDistanciaMar = "";
  for (var i = 0; i < DistanciaMar.length; i = i+2){
    contentDistanciaMar += "<div class='input'>"
    contentDistanciaMar += "<input type='text' disabled placeholder='"+ DistanciaMar[i+1] +"'><button class='buttonEliminar' id=7 value="+ DistanciaMar[i] +"><i class='fas fa-times'></i></button>"
    contentDistanciaMar += "</div>"
  }
  divDistanciaMar.innerHTML = contentDistanciaMar;

  //cargo las plantas
  var CantidadPlantas = Administrador.traerPlantas();
  var divCantidadPlantas = document.getElementById("CantidadPlantas");
  var contentCantidadPlantas = "";
  for (var i = 0; i < CantidadPlantas.length; i = i+2){
    contentCantidadPlantas += "<div class='input'>"
    contentCantidadPlantas += "<input type='text' disabled placeholder='"+ CantidadPlantas[i+1] +"'><button class='buttonEliminar' id=8 value="+ CantidadPlantas[i] +"><i class='fas fa-times'></i></button>"
    contentCantidadPlantas += "</div>"
  }
  divCantidadPlantas.innerHTML = contentCantidadPlantas;

  //cargo los comforts
  var TiposComfort = Administrador.traerComfort();
  var divTiposComfort = document.getElementById("TiposComfort");
  var contentTiposComfort = "";
  for (var i = 0; i < TiposComfort.length; i = i+2){
    contentTiposComfort += "<div class='input'>"
    contentTiposComfort += "<input type='text' disabled placeholder='"+ TiposComfort[i+1] +"'><button class='buttonEliminar' id=9 value="+ TiposComfort[i] +"><i class='fas fa-times'></i></button>"
    contentTiposComfort += "</div>"
  }
  divTiposComfort.innerHTML = contentTiposComfort;

  //cargo las seguridades
  var TiposSeguridad = Administrador.traerSeguridad();
  var divTiposSeguridad = document.getElementById("TiposSeguridad");
  var contentTiposSeguridad = "";
  for (var i = 0; i < TiposSeguridad.length; i = i+2){
    contentTiposSeguridad += "<div class='input'>"
    contentTiposSeguridad += "<input type='text' disabled placeholder='"+ TiposSeguridad[i+1] +"'><button class='buttonEliminar' id=10 value="+ TiposSeguridad[i] +"><i class='fas fa-times'></i></button>"
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
    contentLocalidades += "<input type='text' disabled placeholder='"+ Localidades[i+1] +"'><button class='buttonEliminar' id=11 value="+ Localidades[i] +"><i class='fas fa-times'></i></button>"
    contentLocalidades += "</div>"
  }
  divLocalidades.innerHTML = contentLocalidades;
}

function crearLocalidad(){
  var departamento = document.getElementById("selectDepartamentos").value;
  var nuevaLocalidad = document.getElementById("NuevaLocalidad").value
  if(departamento != 0){
    if(nuevaLocalidad == "" || nuevaLocalidad == null){
      modal("ingresarNombreLocalidad")
    }else{
      if(nuevaLocalidad.length < 30){
        //crea la localidad
        Administrador.crearLocalidad(departamento, nuevaLocalidad);
        //recarga las localidades para mostrar lo nuevo
        cargarLocalidad(departamento);
      }else{
        modal("seleccionarDepartamento")
      }
    }
  }else{
    modal("localidadLargo")
  }
}

//tiene todas las funciones de crear nomencladores, cada una separada por el id que recibe
function crearNomenclador(nomenclador){
  switch(nomenclador){
    case "0":
      var nuevoTipoPropiedad = document.getElementById("nuevoTipoPropiedad").value;
      if(nuevoTipoPropiedad === "" || nuevoTipoPropiedad === null || nuevoTipoPropiedad == 0){
        modal("nomencladorIncompleto")
      }else{
        if(nuevoTipoPropiedad.length < 60){
          Administrador.crearTipoPropiedad(nuevoTipoPropiedad);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          modal("nomenclador60")
        } 
      }
      break;
    case "1":
      var nuevoDormitorio = document.getElementById("nuevoDormitorio").value;
      if(nuevoDormitorio === "" || nuevoDormitorio == 0 || nuevoDormitorio == null){
        modal("nomencladorIncompleto")
      }else{
        if(!isNaN(nuevoDormitorio)){
          Administrador.crearDormitorio(nuevoDormitorio);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          alert("no es un numero")
        } 
      }
      break;
    case "2":
      var nuevoBaño = document.getElementById("nuevoBaño").value;
      if(nuevoBaño === ""){
        modal("nomencladorIncompleto")
      }else{
        if(!isNaN(nuevoBaño)){
          Administrador.crearBaño(nuevoBaño);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          alert("no es un numero")
        } 
      }
      break;
    case "3":
      var nuevoGarage = document.getElementById("nuevoGarage").value;
      if(nuevoGarage === ""){
        modal("nomencladorIncompleto")
      }else{

        if(!isNaN(nuevoGarage)){
          Administrador.crearGarage(nuevoGarage);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          alert("no es un numero")
        } 
      }
      break;
    case "4":
      var nuevoEstado = document.getElementById("nuevoEstado").value;
      if(nuevoEstado === "" || nuevoEstado == "" || nuevoEstado == null){
        modal("nomencladorIncompleto")
      }else{

        if(nuevoEstado.length < 100){
          Administrador.crearEstado(nuevoEstado);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          modal("nomenclador100")
        } 
      }
      break;
    case "5":
      var nuevoSobre = document.getElementById("nuevoSobre").value;
      if(nuevoSobre === "" || nuevoSobre == "" || nuevoSobre == null){
        modal("nomencladorIncompleto")
      }else{

        if(nuevoSobre.length < 60){
          Administrador.crearSobre(nuevoSobre);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          modal("nomenclador60")
        } 
      }
      break;
    case "6":
      var nuevaDistanciaMar = document.getElementById("nuevaDistanciaMar").value;
      if(nuevaDistanciaMar === "" || nuevaDistanciaMar == "" || nuevaDistanciaMar == null){
        modal("nomencladorIncompleto")
      }else{

        if(nuevaDistanciaMar.length < 45){
          Administrador.crearDistanciaMar(nuevaDistanciaMar);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          modal("nomenclador45")
        } 
      }
      break;
    case "7":
      var nuevaPlanta = document.getElementById("nuevaPlanta").value;
      if(nuevaPlanta === "" || nuevaPlanta == 0 || nuevaPlanta == null){
        modal("nomencladorIncompleto")
      }else{

        if(!isNaN(nuevaPlanta)){
          Administrador.crearPlanta(nuevaPlanta);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          alert("no es un numero")
        } 
      }
      break;
    case "8":
      var nuevoComfort = document.getElementById("nuevoComfort").value;
      if(nuevoComfort === "" || nuevoComfort == "" || nuevoComfort == null){
        modal("nomencladorIncompleto")
      }else{

        if(nuevoComfort.length < 100){
          Administrador.crearComfort(nuevoComfort);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          modal("nomenclador100")
        } 
      }
      break;
    case "9":
      var nuevaSeguridad = document.getElementById("nuevaSeguridad").value;
      if(nuevaSeguridad === "" || nuevaSeguridad == "" || nuevaSeguridad == null){
        modal("nomencladorIncompleto")
      }else{

        if(nuevaSeguridad.length < 100){
          Administrador.crearSeguridad(nuevaSeguridad);
          modal("creaNomenclador")
          cargoNomencladores();
        }else{
          modal("nomenclador100")
        } 
      }
      break;
    default: 
      alert("no se como pero rompiste los id")
      break;
  }
}

function eliminarPropiedad(idPropiedad){
  Administrador.eliminarPropiedad(idPropiedad);
  modal("propiedadEliminada")
  cargoPropiedades();
}

function cerrarSesion(){
  let user = new Usuario();
  user.cerrarsesion();

  location.reload();
}

function mandarmail(){
  Administrador.mandarMail();
}