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
}
?>