

$(document).ready(function () {
    //cargo propiedades
    cargoPropiedades()
    cargoFiltros()
    //carga las localidades cuando cambia el departamento
    $('#filtroDepartamento').on('change', function(e) {
      cargarFiltroLocalidad(e.target.options[e.target.selectedIndex].getAttribute('id'));
    });
    //filtros
    $('#buttonBuscar').on('click', function() {
      filtrarPropiedad();
    });
    //mando a propiedad especifica
    $('.propiedades').on('click', '.card .card-content .precio .verPropiedad', function() {
      location.href = 'Propiedad?p='+ this.id;
    });
    

});
function cargoPropiedades(){
    var propiedades = Administrador.traerPropiedades();
    var imagenes = Backend.traerImagen();
    var divPropiedades = document.getElementById("divPropiedades");
    var nuevaPropiedad = "";
    var departamento = "";
    var precio = "";
    var precioFiltro = "";
    //vacio los elementos anteriores
    divPropiedades.innerHTML = "";
    for (var i = 0; i < propiedades.length; i = i+33){
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
          precio = Number(propiedades[i+3]).toLocaleString()
          precioFiltro = propiedades[i+3]
        }else{
          precio = "Convenir";
          precioFiltro = "Convenir";
        }
        //comprueba la moneda
        if(propiedades[i+32] == 1){
          moneda = "$"
        }else if(propiedades[i+32] == 2){
          moneda = "U$S"
        }
        //comprueba el estado de la propiedad
        if(propiedades[i+2] == "Alquiler" || propiedades[i+2] == "Alquiler Temporal"){
          departamento = comprueboDepartamento(propiedades[i+7]);
          nuevaPropiedad = `
          <div class="card" id=`+ propiedades[i] +` data-tipo-operacion=`+ propiedades[i+2].split(" ").join("") +` data-tipo-propiedad=`+ propiedades[i+6].split(" ").join("") +` data-departamento=`+ departamento.split(" ").join("") +` data-localidad=`+ propiedades[i+8].split(" ").join("") +` data-precio=`+ precioFiltro +` data-construccion=`+ propiedades[i+10] +` data-habitaciones=`+ propiedades[i+11] +` data-inodoros=`+ propiedades[i+12] +`>
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
              <button class="verPropiedad" id=`+ propiedades[i] +`><i class="fas fa-home"></i> Ver más</button>
              <h1>`+ moneda +` `+ precio +`</h1>
            </div>
          </div>
        </div>`;
        }else{
          departamento = comprueboDepartamento(propiedades[i+7]);
          nuevaPropiedad = 
          `
          <div class="card" id=`+ propiedades[i] +` data-tipo-operacion=`+ propiedades[i+2].split(" ").join("") +` data-tipo-propiedad=`+ propiedades[i+6].split(" ").join("") +` data-departamento=`+ departamento.split(" ").join("") +` data-localidad=`+ propiedades[i+8].split(" ").join("") +` data-precio=`+ precioFiltro +` data-construccion=`+ propiedades[i+10] +` data-habitaciones=`+ propiedades[i+11] +` data-inodoros=`+ propiedades[i+12] +`>
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
              <button class="verPropiedad" id=`+ propiedades[i] +`><i class="fas fa-home"></i> Ver más</button>
              <h1>`+ moneda +` `+ precio +`</h1>
            </div>
          </div>
        </div>`;
        }
        divPropiedades.innerHTML += nuevaPropiedad;
      }
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
    var seccionPropiedades = document.getElementById("divPropiedades");
    var tituloPropiedades = seccionPropiedades.getElementsByTagName('h3');
  
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

  function cargoFiltros(){
    //carga los tipos de propiedad
    var arrayTipoPropiedad = Backend.traerTiposPropiedad();
    $("#filtroTipoPropiedad").empty().append($("<option></option>").attr({"value": -1,"selected": true}).text('Todos'));
    var selectTipoPropiedad = document.getElementById('filtroTipoPropiedad');
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

  function filtrarPropiedad(){
    propiedades = document.getElementsByClassName("card");
    filtroBuscador = document.getElementById("buscadorIndex").value;
    filtroTipoOperacion = document.getElementById("filtroTipoOperacion").value;
    filtroTipoPropiedad = document.getElementById("filtroTipoPropiedad").value;
    filtroDepartamento = document.getElementById("filtroDepartamento").value;
    filtroLocalidad = document.getElementById("filtroLocalidad").value;
    filtroPrecio = document.getElementById("filtroPrecio").value;
    filtroConstruccion = document.getElementById("filtroConstruccion").value;
    filtroDormitorios = document.getElementById("filtroDormitorios").value;
    filtroInodoros = document.getElementById("filtroInodoros").value;
    $('.card').show();
    if(filtroBuscador !== ""){
      buscador(filtroBuscador);
    }
    if(filtroTipoOperacion != -1){
      $('.card').filter('[data-tipo-operacion!="'+ filtroTipoOperacion +'"]').hide();
    }
    if(filtroTipoPropiedad != -1){
      $('.card').filter('[data-tipo-propiedad!="'+ filtroTipoPropiedad +'"]').hide();
    }
    if(filtroDepartamento != -1){
      $('.card').filter('[data-departamento!="'+ filtroDepartamento +'"]').hide();
      if(filtroLocalidad != -1){
        $('.card').filter('[data-localidad!="'+ filtroLocalidad +'"]').hide();
      }
    }
    if(filtroPrecio !== ""){
      $('.card').filter('[data-precio="Convenir"]').hide();
      if(Number.isInteger(parseInt(filtroPrecio))){
        $("[data-precio]").filter(function () {
          return parseInt($(this).attr('data-precio'), 10) > filtroPrecio;
       }).hide();
      }
    }
    if(filtroConstruccion !== ""){
      if(Number.isInteger(parseInt(filtroConstruccion))){
        $('.card').filter('[data-construccion!="'+ filtroConstruccion +'"]').hide();
      }
    }
    if(filtroDormitorios !== ""){
      if(Number.isInteger(parseInt(filtroDormitorios))){
        $('.card').filter('[data-habitaciones!="'+ filtroDormitorios +'"]').hide();
      }
    }
    if(filtroInodoros !== ""){
      if(Number.isInteger(parseInt(filtroInodoros))){
        $('.card').filter('[data-inodoros!="'+ filtroInodoros +'"]').hide();
      }
    }
  }