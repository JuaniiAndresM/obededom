<?php
include "procedimientosBackend.php";
$llamarFunction = new DatosBackend();

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

}
?>