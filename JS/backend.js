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

      guardarPropiedad(arrayDatos, form_data) {
        var imagenes = this;
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom//obededom/PHP/backend.php",
          data: { accion: 14, datosJSON: arrayDatos},
          success: function (idPropiedad) {
            imagenes.guardarImagenes(form_data, idPropiedad);
          },
        });
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
          },
        });
        return Seguridad;
      }

      actualizarPropiedad(arrayDatos, form_data) {
        var imagenes = this;
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 17, datosJSON: arrayDatos},
          success: function (idPropiedad) {
            imagenes.guardarImagenes(form_data, idPropiedad);     
          },
        });
      }

      traerImagenes(idPropiedad) {
        var Imagenes = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 18, idPropiedad: idPropiedad},
          dataType: 'json',
          success: function (data) {
            Imagenes = data;
          },
        });
        return Imagenes;
      }

      traerImagen() {
        var Imagen = [];
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 19},
          dataType: 'json',
          success: function (data) {
            Imagen = data;
          },
        });
        return Imagen;
      }

      guardarImagenes(form_data, idPropiedad) {
        var form_id = new FormData();
        form_id = form_data;
        form_id.append('idPropiedad',idPropiedad);
        form_id.append('accion', 22);
        $.ajax({
          url: "/obededom/PHP/backend.php",
          cache: false,
          contentType: false,
          processData: false,
          data: form_data,
          type: 'post',
          success: function (response) {
            if(response !== ""){
              modal(response);
            }
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) { 
              alert("Status: " + textStatus); alert("Error: " + errorThrown); 
              console.log(XMLHttpRequest);
          }  
        });
      }

      eliminarImagen(idImagen) {
        $.ajax({
          url: "/obededom/PHP/backend.php",     
          type: 'post',
          data: { accion: 20, idImagen: idImagen},
          success: function (response) {
          },
        });
      }

      traerPDF(idPropiedad) {
        var url = "";
        $.ajax({
          url: "/obededom/PHP/backend.php",     
          async: false,
          type: 'post',
          data: { accion: 21, idPropiedad: idPropiedad},
          dataType: 'json',
          success: function (data) {
            url = data;
          },
        });
        return url;
      }

      eliminarPDF(idPropiedad) {
        $.ajax({
          url: "/obededom/PHP/backend.php",    
          async: false, 
          type: 'post',
          data: { accion: 23, idPropiedad: idPropiedad},
          success: function (response) {
          }
        });
      }
    //Envia los datos de la consulta
    datosConsultas(formulario,nombre,mail,telefono,tipoConsulta,comentario) {
        let estado;
        $.ajax({
          type: "POST",
          async: false,
          url: "/obededom/PHP/backend.php",
          data: { accion: 24, formulario: formulario, nombre: nombre, mail: mail, telefono: telefono, tipoConsulta: tipoConsulta, comentario: comentario},
          dataType: 'json',
          success: function (data) {
            estado = data;
          },
        });
        return estado;
    }

}