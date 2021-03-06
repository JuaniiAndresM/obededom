<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-Type: text/html; charset=UTF-8');
include "procedimientosAdministrador.php";
//include "mail.php";
$llamarFunction = new DatosAdministrador();
//$llamarMail = new mails();

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
    case 13:
        echo json_encode($llamarFunction->EliminarNomenclador($_POST["tipoNomenclador"], $_POST["idNomenclador"]));
    break;
    case 14:
        echo json_encode($llamarFunction->EliminarPropiedad($_POST["idPropiedad"]));
    break;
    case 15:
        echo json_encode($llamarFunction->HabilitarPropiedad($_POST["idPropiedad"]));
    break;
    case 16:
        echo json_encode($llamarFunction->DeshabilitarPropiedad($_POST["idPropiedad"]));
    break;
    case 17:
        echo json_encode($llamarFunction->TraerPropiedad($_POST["idPropiedad"]));
    break;
    case 18:
        //$llamarMail->mailLink();
    break;
    case 19:
        echo json_encode($llamarFunction->TraerMensajes());
    break;
    case 20:
        echo json_encode($llamarFunction->EliminarMensaje($_POST["idMensaje"]));
    break;
    case 21:
        echo json_encode($llamarFunction->EliminarTodosMensajes());
    break;

}
?>