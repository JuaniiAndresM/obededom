<?php

class Login{
    /*public function loginUser($usuario, $pass){
        include "../../Database/server.php";

        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL Login(?,?);")) {
            echo "Prepare Login ->";
            $sentencia->bind_param('ss', $usuario, $pass);
            if ($sentencia->execute()) {
                echo "Execute -> ";
                $sentencia->store_result();
                $sentencia->bind_result($id, $usuario, $password);
                echo $sentencia->bind_result($id, $usuario, $password);

                if ($sentencia->fetch()) {
                    echo "Fetch -> ";
                    if ($usuario == null) {
                        $sentencia->close();

                        return $mysqli->error;
                    } else {
                        $sentencia->close();
                        session_start();

                        $_SESSION['Usuario'] = $usuario;

                        return $mysqli->error;
                    }
                } else {
                    echo "No entra al Fetch " ;

                    return $mysqli->error;
                }
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
            return false;
        }
    }*/

    public function loginUser($usuario, $pass){
        include "../../Database/server.php";

        $info = array();
        $sql = "CALL Login(?,?)";
        $stmts = $mysqli->prepare($sql);
        $stmts->bind_param("ss", $usuario, $pass);

        if ($stmts->execute()) {
            
            $stmts->store_result();
            $stmts->bind_result($id, $usuario, $password);

            while ($stmts->fetch()) {

                $data = array('ID' => $id, 'Usuario' => $usuario, 'Password' => $password);
                $info[] = $data;
            }
            
            if($info[0]["Usuario"] == null){
                $stmts->close();

                return $mysqli->error;
                
                $info = 0;
            }else{
                $stmts->close();

                session_start();
                $_SESSION['Usuario'] = $usuario;

                $info = 1;
            }
        }else{
            $info = $stmts->error;
        }
        return $info;
    }

    public function cerrarSesion(){
        session_start();
        session_destroy();
    }
}

?>