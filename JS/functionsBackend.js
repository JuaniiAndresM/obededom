let Backend = new BackendObj();

$(document).ready(function () {
    //Carga los tipos de operacion
    cargarOperaciones();
    //Carga los tipos de propiedad
    cargarTipoPropiedad()
    //Carga los departamentos en los selects
    cargarDepartamentos();
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
