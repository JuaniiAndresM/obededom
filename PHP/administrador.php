<?php
include "procedimientosAdministrador.php";
$llamarFunction = new DatosAdministrador();

switch ($_POST["accion"]) {
    case 1:
        echo json_encode($llamarFunction->TraerPropiedadesAdmin());
    break;
    case 2:
        echo json_encode($llamarFunction->CrearTipoPropiedad($_POST["nuevoTipoPropiedad"]));
    break;
    case 3:
        echo json_encode($llamarFunction->CrearLocalidad($_POST["idDepartamento"], $_POST["nuevaLocalidad"]));
    break;
    case 4:
        echo json_encode($llamarFunction->CrearDormitorio($_POST["nuevoDormitorio"]));
    break;
    case 5:
        echo json_encode($llamarFunction->CrearBanio($_POST["nuevoBanio"]));
    break;
    case 6:
        echo json_encode($llamarFunction->CrearGarage($_POST["nuevoGarage"]));
    break;
    case 7:
        echo json_encode($llamarFunction->CrearEstado($_POST["nuevoEstado"]));
    break;
    case 8:
        echo json_encode($llamarFunction->CrearSobre($_POST["nuevoSobre"]));
    break;
    case 9:
        echo json_encode($llamarFunction->CrearDistanciaMar($_POST["nuevaDistanciaMar"]));
    break;
    case 10:
        echo json_encode($llamarFunction->CrearPlanta($_POST["nuevaPlanta"]));
    break;
    case 11:
        echo json_encode($llamarFunction->CrearComfort($_POST["nuevoComfort"]));
    break;
    case 12:
        echo json_encode($llamarFunction->CrearSeguridad($_POST["nuevaSeguridad"]));
    break;

}
?>