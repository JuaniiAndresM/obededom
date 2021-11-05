<?php
$numero_mensaje = $_POST['numero_mensaje'];

switch($numero_mensaje){
    case 1:
        $mensaje_1 = "Error:";
        $mensaje = "Debe completar todas las opciones seleccionables.";
        break;

    case 2:
        $mensaje_1 = "Error:";
        $mensaje = "Debe rellenar todos los espacios que se le proporciona.";
        break;
    case 3:
        $mensaje_1 = "Error:";
        $mensaje = "Se debe proporcionar una descripción de la propiedad y sus garantías. Si no tiene garantías, indique que no tiene.";
        break;
    case 4:
        $mensaje_1 = "Error:";
        $mensaje = "Debe agregar algún comfort o seguridad. Si no aplica para la propiedad, aprete el botón 'No aplican datos de comfort y seguridad para esta propiedad'.";
        break;
    case 5:
        $mensaje_1 = "Éxito!";
        $mensaje = "Se ha guardado la propiedad correctamente. Puede ver su nueva propiedad en el panel administrador.";
        break;
    case 6:
        $mensaje_1 = "Éxito!";
        $mensaje = "Se ha modificado la propiedad correctamente.";
    break;
    case "borraNomenclador":
        $mensaje_1 = "Éxito!";
        $mensaje = "Se ha borrado el nomenclador correctamente.";
        break;
    case "creaNomenclador":
        $mensaje_1 = "Éxito!";
        $mensaje = "Se ha creado el nomenclador correctamente.";
        break;
    case "nomencladorIncompleto":
        $mensaje_1 = "Error:";
        $mensaje = "Debe ingresar un nuevo nomenclador para agregar.";
        break;
    case "nomenclador60":
        $mensaje_1 = "Error:";
        $mensaje = "El valor del nomenclador ingresado no puede superar los 60 caracteres.";
        break;
    case "nomenclador100":
        $mensaje_1 = "Error:";
        $mensaje = "El valor del nomenclador ingresado no puede superar los 100 caracteres.";
        break;
    case "nomenclador45":
        $mensaje_1 = "Error:";
        $mensaje = "El valor del nomenclador ingresado no puede superar los 45 caracteres.";
        break;
    case "propiedadEliminada":
        $mensaje_1 = "Éxito!";
        $mensaje = "La propiedad fue borrada con éxito.";
        break;
    case "propiedadHabilitada":
        $mensaje_1 = "Éxito!";
        $mensaje = "La propiedad fue habilitada con éxito. Todos podrán ver esta propiedad.";
        break;
    case "propiedadDeshabilitada":
        $mensaje_1 = "Éxito!";
        $mensaje = "La propiedad fue deshabilitada con éxito. Ya no es visible para todo el público.";
        break;
    case "LoginCamposVacios":
        $mensaje_1 = "Login:";
        $mensaje = "Debe completar todos lo campos.";
        break;

    case "LoginIncorrecto":
        $mensaje_1 = "Login:";
        $mensaje = "El usuario o contraseña no es correcto.";
        break;

    case "imagenes":
        $mensaje_1 = "Error:";
        $mensaje = "Debe subir al menos una imagen.";
        break;

    case "extensionValida":
        $mensaje_1 = "Error:";
        $mensaje = "Una de las imágenes no tiene la extensión correcta. Asegurese de subir archivos con extensiónes .png, .jpg o .jpeg";
        break;

    case "extensionPDF":
        $mensaje_1 = "Error:";
        $mensaje = "Debe subir un archivo PDF.";
        break;

    case "archivoGrande":
        $mensaje_1 = "Error:";
        $mensaje = "Una de las imágenes subidas supera el tamaño aceptado. Asegurese de que los archivos no superen los 10MB.";
        break;

    case "archivoGV":
        $mensaje_1 = "Error:";
        $mensaje = "Varios archivos tienen extensiónes invalidas o superan el tamaño máximo. Por favor, asegúrese de seguir los requerimientos especificados.";
        break;

    case "muchasimagenes":
        $mensaje_1 = "Error:";
        $mensaje = "Solo se permiten subir 15 imágenes por propiedad.";
        break;

    case "seleccionarDepartamento":
        $mensaje_1 = "Error:";
        $mensaje = "Debe seleccionar un departamento para agregar una localidad..";
        break;

    case "localidadLargo":
        $mensaje_1 = "Error:";
        $mensaje = "El nombre ingresado para la localidad es demasiado largo.";
        break;

    case "ingresarNombreLocalidad":
        $mensaje_1 = "Error:";
        $mensaje = "Debe ingresar un nuevo nombre para la localidad.";
        break;
}


$modal = "  <div class='modal'>
                <div class='modal-wrapper'>
                    <div class='modal-logo'>
                        <img src='/media/svg/Logo.svg' alt=''>
                    </div>
                    <div class='modal-content'>
                        <h1>$mensaje_1</h1>
                        <hr>
                        <p>$mensaje</p>
                        <a onclick='cerrar()'><i class='fas fa-times-circle'></i> Cerrar</a>
                    </div>
                </div>
            </div>";

echo $modal;
return $modal;

?>
