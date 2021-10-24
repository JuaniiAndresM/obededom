Administrador = new AdministradorObj();

$(document).ready(function () {
    $('#header').load('/obededom/web/header.html');
    $('#footer').load('/obededom/web/footer.html');
    cargoPropiedades();
});

function cargoPropiedades(){
    var propiedades = Administrador.traerPropiedadesIndex();
    var divPropiedades = document.getElementById("slider-content");
    var nuevaPropiedad = "";
    var departamento = "";
    var precio = "";
    var contadorPropiedades = 0;
    //vacio los elementos anteriores
    divPropiedades.innerHTML = "";
    for (var i = 0; i < propiedades.length; i = i+31){
      if(contadorPropiedades <= 11){
        //comprueba que la propiedad esté habilitada
        if(propiedades[i+28] == 1){
          //comprueba si se muestra el precio
          if(propiedades[i+30] == 1){
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
              <img src="/obededom/media/img/Ejemplo1.jpg" alt="" />
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
                <h1>U$S `+ precio +`</h1>
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
              <img src="/obededom/media/img/Ejemplo1.jpg" alt="" />
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
                <h1>U$S `+ precio +`</h1>
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
    sessionStorage.setItem("idPropiedad", id);
    location.href = 'HTML/Propiedad.html';
  }