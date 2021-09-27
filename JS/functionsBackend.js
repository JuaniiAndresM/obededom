let Backend = new BackendObj();

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
    //Carga una opcion default antes de cargar la localidad del departamento elegido
    $("#selectLocalidades").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Elija un Departamento'));
    //Carga las localidades del departamento que elija
    $('#selectDepartamentos').on('change', function() {
        cargarLocalidad(this.value);
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
}

function cargarComfort(){
    var arrayComfort = Backend.traerComfort();
    for (var i = 0; i < arrayComfort.length; i = i+2){
        $('#comfort').append("<div class='checkbox'><input type='checkbox' name='" + arrayComfort[i+1] + "' id='" + arrayComfort[i] + "'> " + arrayComfort[i+1] + " </div>");
    } 
}

function cargarSeguridad(){
    var arraySeguridad = Backend.traerSeguridad();
    for (var i = 0; i < arraySeguridad.length; i = i+2){
        $('#seguridad').append("<div class='checkbox'><input type='checkbox' name='" + arraySeguridad[i+1] + "' id='" + arraySeguridad[i] + "'> " + arraySeguridad[i+1] + " </div>");
    }
    
}