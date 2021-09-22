class BackendObj {

    //Trae el tipo de operacion
    traerOperaciones() {
        var Operaciones = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "../PHP/backend.php",
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
          url: "../PHP/backend.php",
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
          url: "../PHP/backend.php",
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
          url: "../PHP/backend.php",
          data: { accion: 4, idDepartamento: idDepartamento },
          dataType: 'json',
          success: function (data) {
            Localidades = data;
          },
        });
        return Localidades;
      }

}