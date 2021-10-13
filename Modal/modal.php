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
}


$modal = "  <div class='modal'>
                <div class='modal-wrapper'>
                    <div class='modal-logo'>
                        <img src='/obededom/media/svg/Logo.svg' alt=''>
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
