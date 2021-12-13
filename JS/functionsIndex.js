Administrador = new AdministradorObj();
Backend = new BackendObj();

$(document).ready(function () {
    $('#header').load('/web/header.html');
    $('#footer').load('/web/footer.html');
<<<<<<< HEAD
    cargoFiltros(1);
    cargoPropiedades();
=======
    cargoFiltros();
    cargoPropiedades();

    $('#filtroDepartamento').on('change', function() {
      cargarFiltroLocalidad(this.value);
    });

    $('#buscarPropiedad').on('click', function() {
      buscarPropiedad();
    });

>>>>>>> 8dbfc234a4bf65a0a1cb44b7b723010974f0b886
    $("#botonConsulta").on('click', function() {
      mandarMail();
      });
});

function cargoPropiedades(){
    var propiedades = Administrador.traerPropiedadesIndex();
    var imagenes = Backend.traerImagen();
    var divPropiedades = document.getElementById("slider-content");
    var nuevaPropiedad = "";
    var departamento = "";
    var urlImagen = "";
    var precio = "";
    var contadorPropiedades = 0;
    //vacio los elementos anteriores
    divPropiedades.innerHTML = "";
    for (var i = 0; i < 297; i = i+33){
      if(contadorPropiedades <= 11){
        //comprueba que la propiedad esté habilitada
        if(propiedades[i+28] == 1){
          //comprueba si tiene imagen
          if(imagenes.indexOf(propiedades[i], 1) != -1){
            urlImagen = imagenes[imagenes.indexOf(propiedades[i], 1) - 1]
          }else{
            urlImagen = "/media/img/Ejemplo1.jpg";
          }
          //comprueba si se muestra el precio
          if(propiedades[i+30] == 1){
            //comprueba la moneda
            if(propiedades[i+32] == 1){
              moneda = "$"
            }else if(propiedades[i+32] == 2){
              moneda = "U$S"
            }
            precio = Number(propiedades[i+3]).toLocaleString()
          }else{
            precio = "Convenir"
          }
          //comprueba el estado de la propiedad
          if(propiedades[i+2] == "Alquiler" || propiedades[i+2] == "Alquiler Temporal"){
            departamento = comprueboDepartamento(propiedades[i+7]);
            nuevaPropiedad = `
            <div class="card" id=`+ propiedades[i] +` data-tipo-operacion=`+ propiedades[i+2].split(" ").join("") +` data-tipo-propiedad=`+ propiedades[i+6].split(" ").join("") +` data-departamento=`+ departamento.split(" ").join("") +` data-localidad=`+ propiedades[i+8].split(" ").join("") +` data-precio=`+ precio +` data-construccion=`+ propiedades[i+10] +` data-habitaciones=`+ propiedades[i+11] +` data-inodoros=`+ propiedades[i+12] +`>
            <div class="estado alquiler">
              <h2><i class="fas fa-key"></i> Alquiler</h2>
            </div>
    
            <div class="card-img">
              <img src="`+ urlImagen +`" alt="" />
            </div>
            <div class="card-content">
              <h3>`+ propiedades[i+1] +`</h3>
              <p>
                <i class="fas fa-map-marker-alt"></i> `+ departamento +`, `+ propiedades[i+8] +`.
              </p>
    
              <div class="info-propiedad">
                <div class="habitaciones">
                  <i class="fas fa-bed"></i>
                  <p>`+ propiedades[i+11] +`</p>
                </div>
                <div class="bath">
                  <i class="fas fa-bath"></i>
                  <p>`+ propiedades[i+12] +`</p>
                </div>
                <div class="size">
                  <i class="fas fa-ruler-combined"></i>
                  <p>`+ propiedades[i+21] +`mts²</p>
                </div>
              </div>
    
              <div class="precio">
                <button class="verPropiedad" onClick="verPropiedad(this.id)" id=`+ propiedades[i] +`><i class="fas fa-home"></i> Ver más</button>
                <h1>`+ moneda +` `+ precio +`</h1>
              </div>
            </div>
          </div>`;
          }else{
            departamento = comprueboDepartamento(propiedades[i+7]);
            nuevaPropiedad = 
            `
            <div class="card" id=`+ propiedades[i] +` data-tipo-operacion=`+ propiedades[i+2].split(" ").join("") +` data-tipo-propiedad=`+ propiedades[i+6].split(" ").join("") +` data-departamento=`+ departamento.split(" ").join("") +` data-localidad=`+ propiedades[i+8].split(" ").join("") +` data-precio=`+ precio +` data-construccion=`+ propiedades[i+10] +` data-habitaciones=`+ propiedades[i+11] +` data-inodoros=`+ propiedades[i+12] +`>
            <div class="estado venta">
                <h2><i class="fas fa-shopping-cart"></i> Venta</h2>
            </div>
    
            <div class="card-img">
              <img src="`+ urlImagen +`" alt="" />
            </div>
            <div class="card-content">
              <h3>`+ propiedades[i+1] +`</h3>
              <p>
                <i class="fas fa-map-marker-alt"></i> `+ departamento +`, `+ propiedades[i+8] +`.
              </p>
    
              <div class="info-propiedad">
                <div class="habitaciones">
                  <i class="fas fa-bed"></i>
                  <p>`+ propiedades[i+11] +`</p>
                </div>
                <div class="bath">
                  <i class="fas fa-bath"></i>
                  <p>`+ propiedades[i+12] +`</p>
                </div>
                <div class="size">
                  <i class="fas fa-ruler-combined"></i>
                  <p>`+ propiedades[i+21] +`mts²</p>
                </div>
              </div>
    
              <div class="precio">
                <button class="verPropiedad" onClick="verPropiedad(this.id)" id=`+ propiedades[i] +`><i class="fas fa-home"></i> Ver más</button>
                <h1>`+ moneda +` `+ precio +`</h1>
              </div>
            </div>
          </div>`;
          }
          divPropiedades.innerHTML += nuevaPropiedad;
          contadorPropiedades++;
        }
      }
    }
  }

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
        opt.value = arrayDepartamentos[i];
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
  
  function verPropiedad(id){
    location.href = 'HTML/Propiedad.html?p='+id;
  }

  function mandarMail(){
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    var tipoConsulta = document.getElementById("tipoConsulta").value;
    var comentario = document.getElementById("comentario").value;
    if([nombre, mail, comentario].indexOf("") < 0){
      if(tipoConsulta != -99){
        
      }else{
        alert("debe seleccionar un tipo de consulta")
      }
    }else{
      alert("debe completar todos los campos")
    }
  }

  function buscarPropiedad(){
    filtroOperacion = document.getElementById("filtroOperacion").value;
    filtroTipo = document.getElementById("filtroTipo").value;
    filtroDepartamento = comprueboDepartamento(document.getElementById("filtroDepartamento").value).split(" ").join("");
    filtroLocalidad = document.getElementById("filtroLocalidad").value;
    parametros = {filtroOperacion: "", filtroTipo: "", filtroDepartamento: "", idDepartamento: "", filtroLocalidad: ""};

    if(filtroOperacion != -1){
      parametros["filtroOperacion"] = filtroOperacion;
    }else{
      parametros["filtroOperacion"] = -1;
    }

    if(filtroTipo != -1){
      parametros["filtroTipo"] = filtroTipo;
    }else{
      parametros["filtroTipo"] = -1;
    }

    if(filtroDepartamento != undefined){
      parametros["filtroDepartamento"] = filtroDepartamento;
      parametros["idDepartamento"] = document.getElementById("filtroDepartamento").value;
    }else{
      parametros["filtroDepartamento"] = -1;
    }

    if(filtroLocalidad != -1){
      parametros["filtroLocalidad"] = filtroLocalidad;
    }else{
      parametros["filtroLocalidad"] = -1;
    }
    localStorage.setItem("parametros", JSON.stringify(parametros));
    location.href = 'Buscar';
  } 