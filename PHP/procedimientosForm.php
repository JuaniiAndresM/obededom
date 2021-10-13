<?php

class Login{
    function login($usuario, $pass){
        include "../../Database/server.php";

        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL Login(?,?);")) {
            $sentencia->bind_param('ss', $usuario, $pass);
            if ($sentencia->execute()) {
                $sentencia->store_result();
                $sentencia->bind_result($id, $usuario, $password);
                if ($sentencia->fetch()) {
                    if ($usuario == null) {
                        $sentencia->close();

                        return false;
                    } else {
                        $sentencia->close();
                        session_start();

                        $_SESSION['Usuario'] = $usuario;

                        return true;
                    }
                } else {

                    return false;
                }
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }
    function cerrarSesion(){
        session_start();
        session_destroy();
    }
}

?>