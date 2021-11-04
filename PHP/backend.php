<?php
header('Content-Type: text/html; charset=UTF-8');
include "procedimientosBackend.php";
$llamarFunction = new DatosBackend();
if(isset($_POST["accion"])){
    switch ($_POST["accion"]) {
        case 1:
            echo json_encode($llamarFunction->TraerOperaciones());
        break;
        case 2:
            echo json_encode($llamarFunction->TraerTiposPropiedad());
        break;
        case 3:
            echo json_encode($llamarFunction->TraerDepartamentos());
        break;
        case 4:
            echo json_encode($llamarFunction->TraerLocalidades($_POST["idDepartamento"]));
        break;
        case 5:
            echo json_encode($llamarFunction->TraerDormitorios());
        break;
        case 6:
            echo json_encode($llamarFunction->TraerBaños());
        break;
        case 7:
            echo json_encode($llamarFunction->TraerGarages());
        break;
        case 8:
            echo json_encode($llamarFunction->TraerDistanciaMar());
        break;
        case 9:
            echo json_encode($llamarFunction->TraerSobre());
        break;
        case 10:
            echo json_encode($llamarFunction->TraerEstado());
        break;
        case 11:
            echo json_encode($llamarFunction->TraerPlantas());
        break;
        case 12:
            echo json_encode($llamarFunction->TraerComfort());
        break;
        case 13:
            echo json_encode($llamarFunction->TraerSeguridad());
        break;
        case 14:
            echo json_encode($llamarFunction->GuardarPropiedad($_POST['datosJSON']));
        break;
        case 15:
            echo json_encode($llamarFunction->ComfortPropiedad($_POST['idPropiedad']));
        break;
        case 16:
            echo json_encode($llamarFunction->SeguridadPropiedad($_POST['idPropiedad']));
        break;
        case 17:
            echo json_encode($llamarFunction->ActualizarPropiedad($_POST['datosJSON']));
        break;
        case 18:
            echo json_encode($llamarFunction->TraerImagenes($_POST['idPropiedad']));
        break;
        case 19:
            echo json_encode($llamarFunction->TraerImagen());
        break;
        case 20:
            echo json_encode($llamarFunction->EliminarImagen($_POST['idImagen']));
        break;
        case 21:
            echo json_encode($llamarFunction->TraigoPDF($_POST['idPropiedad']));
        break;
        case 22:
            echo $llamarFunction->GuardarImagenes($_POST['idPropiedad']);    
        break;
        case 23:
            echo json_encode($llamarFunction->EliminarPDF($_POST['idPropiedad']));
        break;
    }
}

?>