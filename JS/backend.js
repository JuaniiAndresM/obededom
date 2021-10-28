class BackendObj {

    //Trae el tipo de operacion
    traerOperaciones() {
        var Operaciones = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 1 },
          dataType: 'json',
          success: function (data) {
            Operaciones = data;
          },
        });
        return Operaciones;
    }

    //Trae los tipos de propiedad
    traerTiposPropiedad() {
        var TiposPropiedad = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 2 },
          dataType: 'json',
          success: function (data) {
            TiposPropiedad = data;
          },
        });
        return TiposPropiedad;
      }
    
    //Trae los Departamentos
    traerDepartamentos() {
        var Departamentos = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 3 },
          dataType: 'json',
          success: function (data) {
            Departamentos = data;
          },
        });
        return Departamentos;
      }

      //trae las localidades de un departamento especifico
      traerLocalidades(idDepartamento) {
        var Localidades = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 4, idDepartamento: idDepartamento },
          dataType: 'json',
          success: function (data) {
            Localidades = data;
          },
        });
        return Localidades;
      }

      traerDormitorios() {
        var Dormitorios = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 5 },
          dataType: 'json',
          success: function (data) {
            Dormitorios = data;
          },
        });
        return Dormitorios;
      }

      traerBaños() {
        var Baños = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 6 },
          dataType: 'json',
          success: function (data) {
            Baños = data;         },
        });
        return Baños;
      }
      
      traerGarages() {
        var Garages = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 7 },
          dataType: 'json',
          success: function (data) {
            Garages = data;
          },
        });
        return Garages;
      }

      traerDistanciamar() {
        var Distanciamar = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 8 },
          dataType: 'json',
          success: function (data) {
            Distanciamar = data;          },
        });
        return Distanciamar;
      }

      traerSobre() {
        var Sobre = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 9 },
          dataType: 'json',
          success: function (data) {
            Sobre = data;         },
        });
        return Sobre;
      }

      traerEstados() {
        var Estados = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 10 },
          dataType: 'json',
          success: function (data) {
            Estados = data;
          },
        });
        return Estados;
      }

      traerPlantas() {
        var Plantas = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 11 },
          dataType: 'json',
          success: function (data) {
            Plantas = data;
          },
        });
        return Plantas;
      }

      traerComfort() {
        var Comfort = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 12 },
          dataType: 'json',
          success: function (data) {
            Comfort = data;
          },
        });
        return Comfort;
      }

      traerSeguridad() {
        var Seguridad = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 13 },
          dataType: 'json',
          success: function (data) {
            Seguridad = data;
          },
        });
        return Seguridad;
      }

      guardarPropiedad(arrayDatos) {
        console.log(arrayDatos)
        var resultado;
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 14, datosJSON: arrayDatos},
          success: function (data) {
            resultado = data;
          },
        });
        return resultado;
      }

      traerComfortPropiedad(idPropiedad) {
        var Comfort = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 15, idPropiedad: idPropiedad},
          dataType: 'json',
          success: function (data) {
            Comfort = data;
            console.log(idPropiedad)
            console.log("comfort de la propiedad: " + data)
          },
        });
        return Comfort;
      }

      traerSeguridadPropiedad(idPropiedad) {
        var Seguridad = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 16, idPropiedad: idPropiedad},
          dataType: 'json',
          success: function (data) {
            Seguridad = data;
            console.log("seguridad de la propiedad: " + data)
          },
        });
        return Seguridad;
      }

      actualizarPropiedad(arrayDatos) {
        var resultado;
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 17, datosJSON: arrayDatos},
          success: function (data) {
            resultado = data;         },
        });
        return resultado;
      }


}