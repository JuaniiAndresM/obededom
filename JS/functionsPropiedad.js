let Administrador = new AdministradorObj();
let Backend = new BackendObj();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

$(document).ready(function () {
  $('#header').load('/web/header.html');
  $('#footer').load('/web/footer.html');
  if(urlParams.get('p')){
    cargoPropiedad(urlParams.get('p'));
  }else{
    location.href = '/Buscar';
  }

  $("#botonConsulta").on('click', function() {
    enviarConsulta();
  });
});

function cargoPropiedad(idPropiedad){
    var propiedad = Administrador.traerPropiedad(idPropiedad);
    var comforts = Backend.traerComfortPropiedad(idPropiedad);
    var seguridades = Backend.traerSeguridadPropiedad(idPropiedad);
    var imagenes = Backend.traerImagenes(idPropiedad);
    var pdf = Backend.traerPDF(idPropiedad);
    console.log(imagenes);
    for(i = 0; i < imagenes.length; i = i+2){
      document.getElementById("sliderImagenes").innerHTML += `
      <div class="img-propiedad">
        <img src=` + imagenes[i+1] + ` alt="">
      </div>
      `;
    }
    departamento = comprueboDepartamento(propiedad[7]);
    document.getElementById("tituloPropiedad").innerHTML = propiedad[1];
    //carga el precio de venta, y si está seteado para que no se muestre, pone precio a convenir.
    if(propiedad[30] == 1){
        //comprueba la moneda
        if(propiedad[32] == 1){
          moneda = "$"
        }else if(propiedad[32] == 2){
          moneda = "U$S"
        }
        document.getElementById("tipoMoneda").innerHTML = moneda;
        document.getElementById("precioVenta").innerHTML = Number(propiedad[3]).toLocaleString()
    }else{
    document.getElementById("precioVenta").innerHTML = "A Convenir"
    }
    document.getElementById("departamentoInicio").innerHTML = departamento;
    document.getElementById("dormitoriosInicio").innerHTML = propiedad[11];
    document.getElementById("inodorosInicio").innerHTML = propiedad[12];
    document.getElementById("edificadosInicio").innerHTML = propiedad[21];
    document.getElementById("tipoPropiedad").innerHTML = propiedad[6];
    document.getElementById("estado").innerHTML = propiedad[14];
    document.getElementById("departamento").innerHTML = departamento;
    document.getElementById("localidad").innerHTML = propiedad[8];
    document.getElementById("disposicion").innerHTML = propiedad[17];
    document.getElementById("orientacion").innerHTML = propiedad[18];
    document.getElementById("inodoros").innerHTML = propiedad[12];
    document.getElementById("dormitorios").innerHTML = propiedad[11];
    document.getElementById("garajes").innerHTML = propiedad[13];
    document.getElementById("mEdificados").innerHTML = propiedad[21];
    document.getElementById("mTerraza").innerHTML = propiedad[22];
    document.getElementById("mTerreno").innerHTML = propiedad[23];
    document.getElementById("fechaConstruccion").innerHTML = propiedad[10];
    document.getElementById("plantas").innerHTML = propiedad[24];
    document.getElementById("propiedadSobre").innerHTML = propiedad[19];
    document.getElementById("gastosComunes").innerHTML = propiedad[31];
    //comprueba si es apto para oficina
    if(propiedad[15] == 1){
        document.getElementById("aptoOficina").innerHTML = "Si";
    }else{
        document.getElementById("aptoOficina").innerHTML = "No";
    }
    //comprueba si es una vivienda social
    if(propiedad[16] == 1){
        document.getElementById("viviendaSocial").innerHTML = "Si";
    }else{
        document.getElementById("viviendaSocial").innerHTML = "No";
    }
    //comprueba si tiene vista al mar
    if(propiedad[29] == 1){
        document.getElementById("vistaMar").innerHTML = "Si";
    }else{
        document.getElementById("vistaMar").innerHTML = "No";
    }
    document.getElementById("distanciaMar").innerHTML = propiedad[20];
    document.getElementById("descripcion").innerHTML = propiedad[27];
    document.getElementById("garantias").innerHTML = propiedad[26];
    if(comforts.length == 0){
      $("#comfort").hide();
    }else{
      for(i = 0; i < comforts.length; i = i+2){
        document.getElementById("listaComfort").innerHTML += "<p>- "+ comforts[i+1] +".</p>";
      }
    }
    if(seguridades.length == 0){
      $("#seguridad").hide();
    }else{
      for(i = 0; i < seguridades.length; i = i+2){
        document.getElementById("listaSeguridad").innerHTML += "<p>- "+ seguridades[i+1] +".</p>";
      } 
    }
    if(pdf !== ""){
        document.getElementById("pdf").setAttribute("src", pdf);
    }else{
        $("#sectionPDF").remove();
    }
    createSliderPropiedad();
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

  function createSliderPropiedad(){
    new Glider(document.querySelector('.slider-content-propiedad'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        scrollLock: false,
        dots: '.slider-indicators',
        arrows: {
            prev: '.slider-anterior',
            next: '.slider-siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 1110,
              settings: {

                slidesToShow: '1',
                slidesToScroll: '1',
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
}

  function enviarConsulta(){
    var propiedad = window.location;
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    var telefono = document.getElementById("telefono").value;
    var comentario = document.getElementById("comentario").value + "  Propiedad -> " +propiedad;
    if(Backend.datosConsultas(1,nombre,mail,telefono,null,comentario) == 1){
      $('#nombre').val("");
      $('#mail').val("");
      $('#telefono').val("");
      $('#comentario').val("");
    }
  }