<?php

class Login{
    function login($usuario, $pass){
        $conn = $this->conectar();
        $info = array();
        $sql = "CALL login(?,?)";
        $stmts = $conn->prepare($sql);
        $pass = sha1($pass);
        $stmts->bind_param("ss", $usuario, $pass);
        $us = "";
        if ($stmts->execute()) {
            $stmts->store_result();
            $stmts->bind_result($tipo, $us, $ci, $año, $apellido, $Institucion, $Nombre, $Contacto, $Contraseña, $Nacimiento, $Mail,  $Icono, $ColorIcono, $ColorFondo);
            if ($stmts->fetch()) {
                if ($us == null) {
                    $stmts->close();
                    $info = array('error' => true);
                    return $info;
                } else {
                    $stmts->close();
                    session_start();

                    $_SESSION['icono'] = $Icono;
                    $_SESSION['coloricono'] = $ColorIcono;
                    $_SESSION['colorfondo'] = $ColorFondo;
                    $_SESSION['usuario'] = $us;
                    $_SESSION['tipo'] = $tipo;

                    $info = array('error' => false, 'usuario' => $us, 'tipo' => $tipo);
                    return $info;
                }
            } else {
                $info = array('error' => true);
                return $info;
            }
        } else {
            $info = array('error' => true);
            return $info;
        }
    }
}
?>