<?php
$numero_mensaje = $_POST['numero_mensaje'];

switch($numero_mensaje){
    case 1:
        $mensaje_1 = "Backend Propiedad:";
        $mensaje = "Debe completar todas las opciones seleccionables.";
        break;

    case 2:
        $mensaje_1 = "Backend Propiedad:";
        $mensaje = "Dadsasdasdasds.";
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
