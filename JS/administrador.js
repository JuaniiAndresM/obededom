class AdministradorObj {
  traerPropiedadesIndex() {
    var Propiedades = [];
    $.ajax({
      type: "POST",
      async: false,
      url: "PHP/administrador.php",
      data: { accion: 1 },
      dataType: 'json',
      success: function (data) {
        Propiedades = data;
      },
    });
    return Propiedades;
  }
  traerPropiedades() {
    var Propiedades = [];
    $.ajax({
      type: "POST",
      async: false,
      url: "/obededom/PHP/administrador.php",
      data: { accion: 1 },
      dataType: 'json',
      success: function (data) {
        Propiedades = data;
      },
    });
    return Propiedades;
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
            console.log("estos son los dormitorios: " + data)
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
            Baños = data;
            console.log("estos son los baños: " + data)
          },
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
            console.log("estos son los Garages: " + data)
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
            Distanciamar = data;
            console.log("estos son los Distanciamar: " + data)
          },
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
            Sobre = data;
            console.log("estos son los Sobre: " + data)
          },
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
            console.log("estos son los Estados: " + data)
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
            console.log("estos son los Plantas: " + data)
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
            console.log("estos son los Comfort: " + data)
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
            console.log("estos son los Seguridad: " + data)
          },
        });
        return Seguridad;
      }

      
      crearTipoPropiedad(nuevoTipoPropiedad) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 2, nuevoTipoPropiedad: nuevoTipoPropiedad},
        });
      }

      crearLocalidad(idDepartamento, nuevaLocalidad) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 3, idDepartamento: idDepartamento, nuevaLocalidad: nuevaLocalidad},
        });
      }

      crearDormitorio(nuevoDormitorio) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 4, nuevoDormitorio: nuevoDormitorio},
        });
      }
      
      crearBaño(nuevoBanio) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 5, nuevoBanio: nuevoBanio},
        });
      }

      crearGarage(nuevoGarage) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 6, nuevoGarage: nuevoGarage},
        });
      }

      crearEstado(nuevoEstado) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 7, nuevoEstado: nuevoEstado},
        });
      }

      crearSobre(nuevoSobre) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 8, nuevoSobre: nuevoSobre},
        });
      }

      crearDistanciaMar(nuevaDistanciaMar) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 9, nuevaDistanciaMar: nuevaDistanciaMar},
        });
      }

      
      crearPlanta(nuevaPlanta) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 10, nuevaPlanta: nuevaPlanta},
        });
      }

      crearComfort(nuevoComfort) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 11, nuevoComfort: nuevoComfort},
        });
      }

      crearSeguridad(nuevaSeguridad) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 12, nuevaSeguridad: nuevaSeguridad},
        });
      }

      eliminarNomenclador(tipoNomenclador, idNomenclador) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 13, tipoNomenclador: tipoNomenclador, idNomenclador: idNomenclador},
        });
      }

      eliminarPropiedad(idPropiedad) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 14, idPropiedad: idPropiedad},
        });
      }

      habilitarPropiedad(idPropiedad) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 15, idPropiedad: idPropiedad},
        });
      }
      
      deshabilitarPropiedad(idPropiedad) {
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          data: { accion: 16, idPropiedad: idPropiedad},
        });
      }

      traerPropiedad(idPropiedad) {
        var Propiedades = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/administrador.php",
          dataType: 'json',
          data: { accion: 17, idPropiedad: idPropiedad},
          success: function (data) {
            Propiedades = data;
          },
        });
        return Propiedades;
      }
      
}