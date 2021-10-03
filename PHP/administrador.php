<?php
include "procedimientosAdministrador.php";
$llamarFunction = new DatosAdministrador();

switch ($_POST["accion"]) {
    case 1:
        echo json_encode($llamarFunction->TraerPropiedadesAdmin());
    break;

}
?>