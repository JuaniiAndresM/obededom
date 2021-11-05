let Backend = new BackendObj();
let Administrador = new AdministradorObj();
var añoActual = new Date().getFullYear()
var form_data = new FormData();
var contadorImagenes = 0;
var idPropiedadEditar;

$(document).ready(function () {
    cargarTodo();
    $("#galeria").hide();
    $("#previewPDF").hide();
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

    $("#subirborrador").on('click', function() {
        subirBorrador();
        });

    $("#cancelar").on('click', function() {
        if(sessionStorage.getItem("idPropiedadEditar") !== null){
            sessionStorage.removeItem('idPropiedadEditar');
        }
        location.href = 'Administrador';
        });

    if(sessionStorage.getItem("idPropiedadEditar") !== null){
        var idPropiedadEditar = sessionStorage.getItem("idPropiedadEditar");
        cargoDatos(idPropiedadEditar);
        $("#actualizarpropiedad").on('click', function() {
            subirPropiedad(idPropiedadEditar, form_data);
            });
    }else{
        document.getElementById("eliminarPDF").setAttribute("onClick", "eliminarPDF()");
    }

    $("#subirpropiedad").on('click', function() {
        subirPropiedad();
    });

    $('#file-input').click(function(){
        $("#upload-photo").click();
    });

    $("#upload-photo").on('change', function() {
        var tiposValidos = ['image/jpeg', 'image/png'];
        if(contadorImagenes < 14){
            var imagen = this.files;
            for(var i = 0; i < imagen.length; i++){
                if(imagen[i].size < 10000000){
                    if(tiposValidos.includes(imagen[i]["type"])) {
                        form_data.append("imagenes[]", imagen[i]);
                        contadorImagenes++;
                        if(contadorImagenes > 14){
                            modal("muchasimagenes")
                            break;
                        }
                    }else{
                        modal("extensionValida")
                    }
                }else{
                    modal("archivoGrande")
                }
            }
            mostrarImagenes();
        }else{
            modal("muchasimagenes")
        }
    });
    
    $('#file-input-pdf').click(function(){
        $("#upload-pdf").click();
    });

    $("#upload-pdf").on('change', function() {
        var tiposValidos = ['application/pdf'];
            var pdf = this.files;
            console.log(pdf[0]);
            if(pdf[0].size < 10000000){
                if(tiposValidos.includes(pdf[0]["type"])) {
                    form_data.delete("pdf");
                    form_data.append("pdf", pdf[0]);
                    document.getElementById("pdf").setAttribute("src", URL.createObjectURL(pdf[0]));
                    $("#file-input-pdf").hide();
                    $("#previewPDF").show();
                }else{
                    modal("extensionPDF")
                }
            }else{
                modal("archivoGrande")
            }
    });

});

function cargarTodo(){
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
}

function cargarOperaciones(){
    var arrayOperaciones = Backend.traerOperaciones();
    var selectOperaciones = document.getElementById('selectOperaciones');
    $("#selectOperaciones").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayOperaciones.length; i = i+2){
        var opt = document.createElement('option');
        opt.value = arrayOperaciones[i+1];
        opt.text = arrayOperaciones[i+1];
        selectOperaciones.appendChild(opt);
    }
}

function cargarTipoPropiedad(){
    var arrayTipoPropiedad = Backend.traerTiposPropiedad();
    var selectTipoPropiedad = document.getElementById('selectTipoPropiedad');
    $("#selectTipoPropiedad").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayTipoPropiedad.length; i = i+2){
        var opt = document.createElement('option');
        opt.value = arrayTipoPropiedad[i+1];
        opt.text = arrayTipoPropiedad[i+1];
        selectTipoPropiedad.appendChild(opt);
    }
}

function cargarDepartamentos(){
    var arrayDepartamentos = Backend.traerDepartamentos();
    var selectDepartamentos = document.getElementById('selectDepartamentos');
    $("#selectDepartamentos").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
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
    $("#selectLocalidades").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayLocalidades.length; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayLocalidades[i+1];
        //le agrega el nombre de la localidad al option
        opt.text = arrayLocalidades[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectLocalidades.appendChild(opt);
    }
}

function cargarDormitorios(){
    var arrayDormitorios = Backend.traerDormitorios();
    var selectDormitorios = document.getElementById('selectDormitorios');
    $("#selectDormitorios").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayDormitorios.length-2; i = i+2){
            //crea un elemento option
            var opt = document.createElement('option');
            //le agrega el id de la localidad al value
            opt.value = arrayDormitorios[i+1];
            //le agrega el nombre de la localidad al option
            opt.text = arrayDormitorios[i+1];
            //agrega el elemento al elemento con la id selectLocalidades
            selectDormitorios.appendChild(opt);
    }
    //crea el ultimo elemento con un simbolo de más
    var opt = document.createElement('option');
    opt.value = arrayDormitorios.at(-2);
    opt.text = arrayDormitorios.at(-2) + "+";
    selectDormitorios.appendChild(opt);
}

function cargarBaños(){
    var arrayBaños = Backend.traerBaños();
    var selectBaños = document.getElementById('selectBaños');
    $("#selectBaños").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayBaños.length - 2; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayBaños[i+1];
        //le agrega el nombre de la localidad al option
        opt.text = arrayBaños[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectBaños.appendChild(opt);
    }
    //crea el ultimo elemento con un simbolo de más
    var opt = document.createElement('option');
    opt.value = arrayBaños.at(-2);
    opt.text = arrayBaños.at(-2) + "+";
    selectBaños.appendChild(opt);
}

function cargarGarages(){
    var arrayGarages = Backend.traerGarages();
    var selectGarages = document.getElementById('selectGarages');
    $("#selectGarages").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayGarages.length - 2; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayGarages[i+1];
        //le agrega el nombre de la localidad al option
        opt.text = arrayGarages[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectGarages.appendChild(opt);
    }
    //crea el ultimo elemento con un simbolo de más
    var opt = document.createElement('option');
    opt.value = arrayGarages.at(-2);
    opt.text = arrayGarages.at(-2) + "+";
    selectGarages.appendChild(opt);
}

function cargarDistanciamar(){
    var arrayDistanciamar = Backend.traerDistanciamar();
    var selectDistanciamar = document.getElementById('selectDistanciamar');
    $("#selectDistanciamar").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
    var opt = document.createElement('option');
    opt.value = arrayDistanciamar[0];
    opt.text = arrayDistanciamar[1];
    selectDistanciamar.appendChild(opt);
    for (var i = 2; i < arrayDistanciamar.length; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayDistanciamar[i+1];
        //le agrega el nombre de la localidad al option
        opt.text = "<" + arrayDistanciamar[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectDistanciamar.appendChild(opt);
    }
}

function cargarSobre(){
    var arraySobre = Backend.traerSobre();
    var selectSobre = document.getElementById('selectSobre');
    $("#selectSobre").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arraySobre.length; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arraySobre[i+1];
        //le agrega el nombre de la localidad al option
        opt.text = arraySobre[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectSobre.appendChild(opt);
    }
}

function cargarEstado(){
    var arrayEstado = Backend.traerEstados();
    var selectEstado = document.getElementById('selectEstado');
    $("#selectEstado").empty().append($("<option></option>").attr({"value": 0,"selected": true, 'disabled': true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayEstado.length; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayEstado[i+1];
        //le agrega el nombre de la localidad al option
        opt.text = arrayEstado[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectEstado.appendChild(opt);
    }
}

function cargarPlantas(){
    var arrayPlantas = Backend.traerPlantas();
    var selectPlantas = document.getElementById('selectPlantas');
    $("#selectPlantas").empty().append($("<option></option>").attr({"value": 0,"selected": true}).text('Seleccione una Opción'));
    for (var i = 0; i < arrayPlantas.length - 2; i = i+2){
        //crea un elemento option
        var opt = document.createElement('option');
        //le agrega el id de la localidad al value
        opt.value = arrayPlantas[i+1];
        //le agrega el nombre de la localidad al option
        opt.text = arrayPlantas[i+1];
        //agrega el elemento al elemento con la id selectLocalidades
        selectPlantas.appendChild(opt);
    }
    //crea el ultimo elemento con un simbolo de más
    var opt = document.createElement('option');
    opt.value = arrayPlantas.at(-2);
    opt.text = arrayPlantas.at(-2) + "+";
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

function subirPropiedad(idPropiedadEditar){
    var comfortSeguridad;
    var mandarDatos = Backend;
    var arrayDatos = [];
    var tituloPropiedad = document.getElementById('tituloPropiedad').value;
    var tipoOperacion = document.getElementById('selectOperaciones').value;
    var tipoPrecio = document.getElementById('selectTipoPrecio').value;
    var precioVenta = document.getElementById('precioDolares').value;
    var mostrarPrecio = $('#mostrarPrecio').is(":checked");
    if(mostrarPrecio == true){
        mostrarPrecio = 1
    }else{
        mostrarPrecio = 0
    }
    var gastosComunes = document.getElementById('gastosComunes').value;
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
    var vistamar = document.querySelector('input[name="vistamar"]:checked').value;
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
    if(contadorImagenes != 0){
        //comprueba que los selects no estén en la opcion default
        if ( [tipoOperacion, tipoPropiedad, tipoPrecio, departamento, localidad, dormitorios, baños, garage, distanciaMar, propiedadSobre, estadoPropiedad, disposicion, orientacion, cantidadPlantas].indexOf("0") < 0 ) {
            //comprueba que los otros campos no estén vacios
            if ([tituloPropiedad, precioVenta, gastosComunes, direccion, fechaConstruccion, metrosEdificados, metrosTerraza, metrosTerreno].indexOf("") < 0){
                //comprueba que las garantias y la descripción tengan algo.
                if([garantias, descripcion].indexOf("") < 0 ){
                    //verifica si seleccionó garantías o no
                    if(comfortSeguridad != ""){
                        if( arrayComfort.length == 0 && arraySeguridad.length == 0){
                            modal(4);
                        }else{
                            if(idPropiedadEditar != undefined){
                                arrayDatos = [tituloPropiedad, tipoOperacion, precioVenta, permuta, financia, tipoPropiedad, departamento, localidad, direccion,
                                    fechaConstruccion, dormitorios, baños ,garage ,estadoPropiedad, aptoOficina, viviendaSocial, disposicion, orientacion, propiedadSobre, 
                                    distanciaMar, metrosEdificados ,metrosTerraza ,metrosTerreno, cantidadPlantas, extras, garantias, descripcion, estado, 
                                    mostrarPrecio, vistamar, Number.parseInt(idPropiedadEditar), tipoPrecio, gastosComunes, arrayComfort, arraySeguridad];
                                mandarDatos.actualizarPropiedad(JSON.stringify(arrayDatos), form_data);
                                modal(6);
                                limpioFormulario()
                            }else{
                                arrayDatos = [tituloPropiedad, tipoOperacion, precioVenta, permuta, financia, tipoPropiedad, departamento, localidad, direccion,
                                    fechaConstruccion, dormitorios, baños ,garage ,estadoPropiedad, aptoOficina, viviendaSocial, disposicion, orientacion, propiedadSobre, 
                                    distanciaMar, metrosEdificados ,metrosTerraza ,metrosTerreno,
                                    cantidadPlantas, extras, garantias, descripcion, estado, mostrarPrecio, vistamar, tipoPrecio, gastosComunes, arrayComfort, arraySeguridad,];
                                mandarDatos.guardarPropiedad(JSON.stringify(arrayDatos), form_data);
                                modal(5);
                                limpioFormulario()
                            }
                        }
                    }else{
                        if(idPropiedadEditar != undefined){
                            arrayDatos = [tituloPropiedad, tipoOperacion, precioVenta, permuta, financia, tipoPropiedad, departamento, localidad, direccion,
                                fechaConstruccion, dormitorios, baños ,garage ,estadoPropiedad, aptoOficina, viviendaSocial, disposicion, orientacion, propiedadSobre, distanciaMar, metrosEdificados ,metrosTerraza ,metrosTerreno,
                                cantidadPlantas, extras, garantias, descripcion, estado, mostrarPrecio, vistamar, Number.parseInt(idPropiedadEditar), tipoPrecio, gastosComunes];
                            mandarDatos.actualizarPropiedad(JSON.stringify(arrayDatos), form_data);
                            modal(6);
                            limpioFormulario()
                        }else{
                            arrayDatos = [tituloPropiedad, tipoOperacion, precioVenta, permuta, financia, tipoPropiedad, departamento, localidad, direccion,
                                fechaConstruccion, dormitorios, baños ,garage ,estadoPropiedad, aptoOficina, viviendaSocial, disposicion, orientacion, propiedadSobre, distanciaMar, metrosEdificados ,metrosTerraza ,metrosTerreno,
                                cantidadPlantas, extras, garantias, descripcion, estado, mostrarPrecio, vistamar, tipoPrecio, gastosComunes];
                            mandarDatos.guardarPropiedad(JSON.stringify(arrayDatos), form_data);
                            modal(5);
                            limpioFormulario()
                        }
                    }
                }else{
                    modal(3);
                }
            }else{
                modal(2);
            }
        }else{
            modal(1);

        }
    }else{
        modal("imagenes")
    }
    
}

function subirBorrador(){
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

 function cargoDatos(idPropiedad){
    var propiedad = Administrador.traerPropiedad(idPropiedad);
    var comforts = Backend.traerComfortPropiedad(idPropiedad);
    var seguridades = Backend.traerSeguridadPropiedad(idPropiedad);
    var imagenes = Backend.traerImagenes(idPropiedad);
    var pdf = Backend.traerPDF(idPropiedad);
    for(i = 0; i < imagenes.length; i = i+2){
        document.getElementById("galeria").innerHTML += `
        <div class="imagen">
            <img src="`+ imagenes[i+1] +`" alt="">
            <button onClick="eliminarImagenSQL(this, `+ imagenes[i] +`)"><i class="fas fa-times"></i></button>
        </div>
        `;
        contadorImagenes++;
    }
    document.getElementById("cantidadImagenes").innerHTML = contadorImagenes;
    $("#galeria").show();
    $("#subirpropiedad").attr("id", "actualizarpropiedad");
    document.getElementById("actualizarpropiedad").innerHTML = "<i class='fas fa-save'></i> Guardar Cambios"

    $("#tituloPropiedad").val(propiedad[1]).change();
    $("#selectOperaciones").val(propiedad[2]).change();
    $("#precioDolares").val(propiedad[3]).change();
    //se fija si tiene que checkear el precio o no
    if(propiedad[30] == 1){
        $("#mostrarPrecio").prop('checked', true);
    }else{
        $("#mostrarPrecio").prop('checked', false);
    }
    //se fija cual permuta seleccionar
    if(propiedad[4] == 1){
        document.getElementById('premutasi').checked = true;
    }else{
        document.getElementById('premutano').checked = true;
    }
    //se fija cual financia seleccionar
    if(propiedad[5] == 1){
        document.getElementById('financiasi').checked = true;
    }else{
        document.getElementById('financiano').checked = true;
    }
    $("#selectTipoPropiedad").val(propiedad[6]).change();
    $("#selectDepartamentos").val(propiedad[7]).change();
    cargarLocalidad(propiedad[7]);
    $("#selectLocalidades").val(propiedad[8]).change();
    $("#direccion").val(propiedad[9]).change();
    $("#fechaConstruccion").val(propiedad[10]).change();
    $("#selectDormitorios").val(propiedad[11]).change();
    $("#selectBaños").val(propiedad[12]).change();
    $("#selectGarages").val(propiedad[13]).change();
    //se fija cual vistamar seleccionar
    if(propiedad[29] == 1){
        document.getElementById('vistamarsi').checked = true;
    }else{
        document.getElementById('vistamarno').checked = true;
    }
    $("#selectDistanciamar").val(propiedad[20]).change();
    $("#metrosEdificados").val(propiedad[21]).change();
    $("#metrosTerraza").val(propiedad[22]).change();
    $("#metrosTerreno").val(propiedad[23]).change();
    $("#selectSobre").val(propiedad[19]).change();
    $("#selectEstado").val(propiedad[14]).change();
    $("#selectDisposicion").val(propiedad[17]).change();
    $("#selectOrientacion").val(propiedad[18]).change();
    //se fija si es apto para oficina 
    if(propiedad[15] == 1){
        document.getElementById('oficinasi').checked = true;
    }else{
        document.getElementById('oficinano').checked = true;
    }
    //se fija si es una vivienda social
    if(propiedad[16] == 1){
        document.getElementById('viviendasi').checked = true;
    }else{
        document.getElementById('viviendano').checked = true;
    }
    $("#selectPlantas").val(propiedad[24]).change();
    if(comforts == "" && seguridades == ""){
        $("#checkboxcomfort").prop('checked', true);
        $("#section-comfort-seguridad").hide();
    }else{
        for(var i = 0; i < comforts.length; i++){
            $( "#comfort [value='"+ comforts[i] +"']" ).prop('checked', true);
        }

        for(var i = 0; i < seguridades.length; i++){
            $( "#seguridad [value='"+ seguridades[i] +"']" ).prop('checked', true);
        } 
    }

    if(comforts == "" && seguridades == ""){
        $("#checkboxcomfort").prop('checked', true);
        $("#section-comfort-seguridad").hide();
    }else{
        for(var i = 0; i < comforts.length; i++){
            $( "#comfort [value='"+ comforts[i] +"']" ).prop('checked', true);
        }
    }
    CKEDITOR.instances['garantias'].setData(propiedad[26]);
    CKEDITOR.instances['descripcion'].setData(propiedad[27]);

    if(pdf !== ""){
        $("#previewPDF").show();
        $("#file-input-pdf").hide();
        document.getElementById("pdf").setAttribute("src", pdf);
        document.getElementById("eliminarPDF").setAttribute("value", idPropiedad);
        document.getElementById("eliminarPDF").setAttribute("onClick", "eliminarPDFSQL(this.value)");
    }else{
        document.getElementById("eliminarPDF").setAttribute("onClick", "eliminarPDF()");
        $("#previewPDF").hide();
        $("#file-input-pdf").show();
    }
}

function mostrarImagenes(){
    document.getElementById("cantidadImagenes").innerHTML = contadorImagenes;
    var contenido = "";
    imagenes = form_data.getAll("imagenes[]");
    for(var i = 0; i < imagenes.length; i++){
        contenido += `
        <div class="imagen borrar">
            <img src="`+ URL.createObjectURL(imagenes[i]) +`" alt="">
            <button onClick="eliminarImagen(this, `+ i +`)"><i class="fas fa-times"></i></button>
        </div>
        `;
    }
    if(contadorImagenes > 0){
        $("#galeria").show();
    }else{
        $("#galeria").hide();
    }
    $(".borrar").remove();
    document.getElementById("galeria").innerHTML += contenido;
};

function eliminarImagen(element ,idImagen){
    contadorImagenes = contadorImagenes - 1;
    imagenes = form_data.getAll("imagenes[]");
    imagenes.splice(idImagen, 1);
    form_data.delete("imagenes[]");
    for(var i = 0; i < imagenes.length; i++){
        form_data.append("imagenes[]", imagenes[i]);
    }
    $(element).parent('div').remove();
    mostrarImagenes();
}

function eliminarImagenSQL(element ,idImagen){
    contadorImagenes = contadorImagenes - 1;
    Backend.eliminarImagen(idImagen);
    $(element).parent('div').remove();
    mostrarImagenes();
}

function eliminarPDF(){
    form_data.delete("pdf");
    $("#previewPDF").hide();
    $("#file-input-pdf").show();
}

function eliminarPDFSQL(idPropiedad){
    Backend.eliminarPDF(idPropiedad);
    document.getElementById("eliminarPDF").setAttribute("onClick", "eliminarPDF()");
    $("#previewPDF").hide();
    $("#file-input-pdf").show();
}

function limpioFormulario(){
    form_data = new FormData();
    $("#previewPDF").hide();
    $("#file-input-pdf").show();
    $("#selectLocalidades").empty().append($("<option></option>").attr({"value": 0,"selected": selected, 'disabled': true}).text('Elija un Departamento'));
    document.getElementById("galeria").innerHTML = "";
    document.getElementById("selectDisposicion").value = "0";
    document.getElementById("selectOrientacion").value = "0";
    contadorImagenes = 0;
    document.getElementById("cantidadImagenes").innerHTML = contadorImagenes;
    inputReset = document.getElementsByClassName("reset");
    for(var i = 0; i < inputReset.length; i++){
        inputReset[i].value='';
    }
    $("#galeria").hide();
    document.getElementById("comfort").innerHTML = "";
    document.getElementById("seguridad").innerHTML = "";
    if(sessionStorage.getItem("idPropiedadEditar") !== null){
        sessionStorage.removeItem('idPropiedadEditar');
        $("#actualizarpropiedad").attr("id", "subirpropiedad");
        document.getElementById("subirpropiedad").innerHTML = "<i class='fas fa-cart-plus'></i> Subir Propiedad"
    }
    CKEDITOR.instances['garantias'].setData("");
    CKEDITOR.instances['descripcion'].setData("");
    cargarTodo();
}