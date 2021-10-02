let Backend = new BackendObj();
var añoActual = new Date().getFullYear()

$(document).ready(function () {
    //Carga los tipos de operacion
    cargarOperaciones();
    //Carga los tipos de propiedad
    cargarTipoPropiedad()
    //Carga los departamentos en los selects
    cargarDepartamentos();
    //Carga los dormitorios en los selects
    cargarDormitorios();
    cargarBaños();
    cargarGarages();
    cargarDistanciamar();
    cargarSobre();
    cargarEstado();
    cargarPlantas();
    cargarComfort();
    cargarSeguridad();
    //carga el maximo de años con el año actual
    document.getElementById("fechaConstruccion").setAttribute("max", añoActual);
    //Carga una opcion default antes de cargar la localidad del departamento elegido
    $("#selectLocalidades").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Elija un Departamento'));
    //Carga las localidades del departamento que elija
    $('#selectDepartamentos').on('change', function() {
        cargarLocalidad(this.value);
      });

    $("#checkboxcomfort").change(function() {
    if(this.checked) {
            $("#section-comfort-seguridad").hide();
        }else{
            $("#section-comfort-seguridad").show();
        }
    });

    $("#subirpropiedad").on('click', function() {
        subirPropiedad();
        });

    $("#subirborrador").on('click', function() {
        subirBorrador();
        });
});


function cargarOperaciones(){
    var arrayOperaciones = Backend.traerOperaciones();
    var selectOperaciones = document.getElementById('selectOperaciones');
    for (var i = 0; i < arrayOperaciones.length; i = i+2){
        var opt = document.createElement('option');
        opt.value = arrayOperaciones[i];
        opt.text = arrayOperaciones[i+1];
        selectOperaciones.appendChild(opt);
    }
}

function cargarTipoPropiedad(){
    var arrayTipoPropiedad = Backend.traerTiposPropiedad();
    console.log(arrayTipoPropiedad);
    var selectTipoPropiedad = document.getElementById('selectTipoPropiedad');
    for (var i = 0; i < arrayTipoPropiedad.length; i = i+2){
        var opt = document.createElement('option');
        opt.value = arrayTipoPropiedad[i];
        opt.text = arrayTipoPropiedad[i+1];
        selectTipoPropiedad.appendChild(opt);
    }
}

function cargarDepartamentos(){
    var arrayDepartamentos = Backend.traerDepartamentos();
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
}

function cargarLocalidad(idDepartamento){
    var arrayLocalidades = Backend.traerLocalidades(idDepartamento);
    var selectLocalidades = document.getElementById('selectLocalidades');
    $("#selectLocalidades").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayLocalidades.length; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayLocalidades[i];
        //le agrega el nombre de la localidad al option
        opt.text = arrayLocalidades[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectLocalidades.appendChild(opt);
    }
}

function cargarDormitorios(){
    var arrayDormitorios = Backend.traerDormitorios();
    var selectDormitorios = document.getElementById('selectDormitorios');
    $("#selectDormitorios").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayDormitorios.length-2; i = i+2){
            //crea un elemento option
            var opt = document.createElement('option');
            //le agrega el id de la localidad al value
            opt.value = arrayDormitorios[i];
            //le agrega el nombre de la localidad al option
            opt.text = arrayDormitorios[i+1];
            //agrega el elemento al elemento con la id selectLocalidades
            selectDormitorios.appendChild(opt);
    }
    //crea el ultimo elemento con un simbolo de más
    var opt = document.createElement('option');
    opt.value = arrayDormitorios.at(-2);
    opt.text = arrayDormitorios.at(-1) + "+";
    selectDormitorios.appendChild(opt);
}

function cargarBaños(){
    var arrayBaños = Backend.traerBaños();
    var selectBaños = document.getElementById('selectBaños');
    $("#selectBaños").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayBaños.length - 2; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayBaños[i];
        //le agrega el nombre de la localidad al option
        opt.text = arrayBaños[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectBaños.appendChild(opt);
    }
    //crea el ultimo elemento con un simbolo de más
    var opt = document.createElement('option');
    opt.value = arrayBaños.at(-2);
    opt.text = arrayBaños.at(-1) + "+";
    selectBaños.appendChild(opt);
}

function cargarGarages(){
    var arrayGarages = Backend.traerGarages();
    var selectGarages = document.getElementById('selectGarages');
    $("#selectGarages").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayGarages.length - 2; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayGarages[i];
        //le agrega el nombre de la localidad al option
        opt.text = arrayGarages[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectGarages.appendChild(opt);
    }
    //crea el ultimo elemento con un simbolo de más
    var opt = document.createElement('option');
    opt.value = arrayGarages.at(-2);
    opt.text = arrayGarages.at(-1) + "+";
    selectGarages.appendChild(opt);
}

function cargarDistanciamar(){
    var arrayDistanciamar = Backend.traerDistanciamar();
    var selectDistanciamar = document.getElementById('selectDistanciamar');
    $("#selectDistanciamar").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Seleccione una Opción'));
    var opt = document.createElement('option');
    opt.value = arrayDistanciamar[0];
    opt.text = arrayDistanciamar[1];
    selectDistanciamar.appendChild(opt);
    for (var i = 2; i < arrayDistanciamar.length; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayDistanciamar[i];
        //le agrega el nombre de la localidad al option
        opt.text = "<" + arrayDistanciamar[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectDistanciamar.appendChild(opt);
    }
}

function cargarSobre(){
    var arraySobre = Backend.traerSobre();
    var selectSobre = document.getElementById('selectSobre');
    $("#selectSobre").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arraySobre.length; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arraySobre[i];
        //le agrega el nombre de la localidad al option
        opt.text = arraySobre[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectSobre.appendChild(opt);
    }
}

function cargarEstado(){
    var arrayEstado = Backend.traerEstados();
    var selectEstado = document.getElementById('selectEstado');
    $("#selectEstado").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayEstado.length; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayEstado[i];
        //le agrega el nombre de la localidad al option
        opt.text = arrayEstado[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectEstado.appendChild(opt);
    }
}

function cargarPlantas(){
    var arrayPlantas = Backend.traerPlantas();
    var selectPlantas = document.getElementById('selectPlantas');
    $("#selectPlantas").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayPlantas.length - 2; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayPlantas[i];
        //le agrega el nombre de la localidad al option
        opt.text = arrayPlantas[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectPlantas.appendChild(opt);
    }
    //crea el ultimo elemento con un simbolo de más
    var opt = document.createElement('option');
    opt.value = arrayPlantas.at(-2);
    opt.text = arrayPlantas.at(-1) + "+";
    selectPlantas.appendChild(opt);
}

function cargarComfort(){
    var arrayComfort = Backend.traerComfort();
    for (var i = 0; i < arrayComfort.length; i = i+2){
        $('#comfort').append("<div class='checkbox'><input type='checkbox' name='comfort' value='" + arrayComfort[i] + "'> " + arrayComfort[i+1] + " </div>");
    } 
}

function cargarSeguridad(){
    var arraySeguridad = Backend.traerSeguridad();
    for (var i = 0; i < arraySeguridad.length; i = i+2){
        $('#seguridad').append("<div class='checkbox'><input type='checkbox' name='seguridad' value='" + arraySeguridad[i] + "'> " + arraySeguridad[i+1] + " </div>");
    }
    
}

function subirPropiedad(){
    alert("hola")
    var comfortSeguridad;
    var mandarDatos = Backend;
    var arrayDatos = [];
    var tituloPropiedad = document.getElementById('tituloPropiedad').value;
    var tipoOperacion = document.getElementById('selectOperaciones').value;
    var precioVenta = document.getElementById('precioDolares').value;
    var mostrarPrecio = $('#mostrarPrecio').is(":checked");
    var permuta = document.querySelector('input[name="permuta"]:checked').value;
    var financia = document.querySelector('input[name="financia"]:checked').value;
    var tipoPropiedad = document.getElementById('selectTipoPropiedad').value;
    var departamento = document.getElementById('selectDepartamentos').value;
    var localidad = document.getElementById('selectLocalidades').value;
    var direccion = document.getElementById('direccion').value;
    var fechaConstruccion = document.getElementById('fechaConstruccion').value;
    var dormitorios = document.getElementById('selectDormitorios').value;
    var baños = document.getElementById('selectBaños').value;
    var garage = document.getElementById('selectGarages').value;
    var permuta = document.querySelector('input[name="vistamar"]:checked').value;
    var distanciaMar = document.getElementById('selectDistanciamar').value;
    var metrosEdificados = document.getElementById('metrosEdificados').value;
    var metrosTerraza = document.getElementById('metrosTerraza').value;
    var metrosTerreno = document.getElementById('metrosTerreno').value;
    var propiedadSobre = document.getElementById('selectSobre').value;
    var estadoPropiedad = document.getElementById('selectEstado').value;
    var disposicion = document.getElementById('selectDisposicion').value;
    var orientacion = document.getElementById('selectOrientacion').value;
    var aptoOficina = document.querySelector('input[name="aptooficina"]:checked').value;
    var viviendaSocial = document.querySelector('input[name="viviendasocial"]:checked').value;
    var cantidadPlantas = document.getElementById('selectPlantas').value;
    if($('#checkboxcomfort').is(":checked") != true){
        alert("true");
        var arrayComfort = []
        $("input:checkbox[name='comfort']:checked").each(function(){
            arrayComfort.push($(this).val());
        });
        var arraySeguridad = []
        $("input:checkbox[name='seguridad']:checked").each(function(){
            arraySeguridad.push($(this).val());
        });
        console.log(arrayComfort)
        console.log(arraySeguridad)
    }else{
        comfortSeguridad = "";
    }
    var garantias = CKEDITOR.instances['garantias'].getData();
    var descripcion = CKEDITOR.instances['descripcion'].getData();
    var extras = document.querySelector('input[name="extra"]').value;
    var estado = 1;
    //comprueba que los selects no estén en la opcion default
    if ( [tipoOperacion, tipoPropiedad, departamento, localidad, dormitorios, baños, garage, distanciaMar, propiedadSobre, estadoPropiedad, disposicion, orientacion, cantidadPlantas].indexOf("0") < 0 ) {
        alert("hola");
        //comprueba que los otros campos no estén vacios
        if ([tituloPropiedad, precioVenta, direccion, fechaConstruccion, metrosEdificados, metrosTerraza, metrosTerreno].indexOf("") < 0){
            //comprueba que las garantias y la descripción tengan algo.
            if([garantias, descripcion].indexOf("") < 0 ){
                //verifica si seleccionó garantías o no
                if(comfortSeguridad != ""){
                    if( arrayComfort.length == 0 && arraySeguridad.length == 0){
                        alert("debe seleccionar al menos un elemento de comfort y seguridad. Si no tiene elementos, desactivelos.")
                    }else{
                        alert("viene acá si todo salió bien")
                        arrayDatos = [tituloPropiedad, tipoOperacion, precioVenta, permuta, financia, tipoPropiedad, departamento, localidad, direccion,
                            fechaConstruccion, dormitorios, baños ,garage ,estadoPropiedad, aptoOficina, viviendaSocial, disposicion, orientacion, propiedadSobre, distanciaMar, metrosEdificados ,metrosTerraza ,metrosTerreno,
                             cantidadPlantas, extras, garantias, descripcion, estado, arrayComfort, arraySeguridad];
                             console.log
                        mandarDatos.guardarPropiedad(JSON.stringify(arrayDatos));
                    }
                }else{
                    alert("viene acá si está todo bien y no seleccionó comfort")
                    arrayDatos = [tituloPropiedad, tipoOperacion, precioVenta, permuta, financia, tipoPropiedad, departamento, localidad, direccion,
                        fechaConstruccion, dormitorios, baños ,garage ,estadoPropiedad, aptoOficina, viviendaSocial, disposicion, orientacion, propiedadSobre, distanciaMar, metrosEdificados ,metrosTerraza ,metrosTerreno,
                         cantidadPlantas, extras, garantias, descripcion, estado];
                    mandarDatos.guardarPropiedad(JSON.stringify(arrayDatos));
                }
            }else{
                alert("debe agregar descripción de la propiedad y garantías")
            }
        }else{
            alert("debe completar todos los campos")
        }
    }else{
        alert("debe completar todas las opciones seleccionables")
    }
    
}

function subirBorrador(){
    alert("hola")
    var comfortSeguridad;
    var mandarDatos = Backend;
    var arrayDatos = [];
    var tituloPropiedad = document.getElementById('tituloPropiedad').value;
    var tipoOperacion = document.getElementById('selectOperaciones').value;
    var precioVenta = document.getElementById('precioDolares').value;
    var mostrarPrecio = $('#mostrarPrecio').is(":checked");
    var permuta = document.querySelector('input[name="permuta"]:checked').value;
    var financia = document.querySelector('input[name="financia"]:checked').value;
    var tipoPropiedad = document.getElementById('selectTipoPropiedad').value;
    var departamento = document.getElementById('selectDepartamentos').value;
    var localidad = document.getElementById('selectLocalidades').value;
    var direccion = document.getElementById('direccion').value;
    var fechaConstruccion = document.getElementById('fechaConstruccion').value;
    var dormitorios = document.getElementById('selectDormitorios').value;
    var baños = document.getElementById('selectBaños').value;
    var garage = document.getElementById('selectGarages').value;
    var permuta = document.querySelector('input[name="vistamar"]:checked').value;
    var distanciaMar = document.getElementById('selectDistanciamar').value;
    var metrosEdificados = document.getElementById('metrosEdificados').value;
    var metrosTerraza = document.getElementById('metrosTerraza').value;
    var metrosTerreno = document.getElementById('metrosTerreno').value;
    var propiedadSobre = document.getElementById('selectSobre').value;
    var estadoPropiedad = document.getElementById('selectEstado').value;
    var disposicion = document.getElementById('selectDisposicion').value;
    var orientacion = document.getElementById('selectOrientacion').value;
    var aptoOficina = document.querySelector('input[name="aptooficina"]:checked').value;
    var viviendaSocial = document.querySelector('input[name="viviendasocial"]:checked').value;
    var cantidadPlantas = document.getElementById('selectPlantas').value;
    if($('#checkboxcomfort').is(":checked") != true){
        alert("true");
        var arrayComfort = []
        $("input:checkbox[name='comfort']:checked").each(function(){
            arrayComfort.push($(this).val());
        });
        var arraySeguridad = []
        $("input:checkbox[name='seguridad']:checked").each(function(){
            arraySeguridad.push($(this).val());
        });
        console.log(arrayComfort)
        console.log(arraySeguridad)
    }else{
        comfortSeguridad = "";
    }
    var garantias = CKEDITOR.instances['garantias'].getData();
    var descripcion = CKEDITOR.instances['descripcion'].getData();
    var extras = document.querySelector('input[name="extra"]').value;
    var estado = 0;
    alert("viene acá si está todo bien y no seleccionó comfort")
    arrayDatos = [tituloPropiedad, tipoOperacion, precioVenta, permuta, financia, tipoPropiedad, departamento, localidad, direccion,
        fechaConstruccion, dormitorios, baños ,garage ,estadoPropiedad, aptoOficina, viviendaSocial, disposicion, orientacion, propiedadSobre, distanciaMar, metrosEdificados ,metrosTerraza ,metrosTerreno,
            cantidadPlantas, extras, garantias, descripcion, estado];
    mandarDatos.guardarPropiedad(JSON.stringify(arrayDatos));
                
    
}

