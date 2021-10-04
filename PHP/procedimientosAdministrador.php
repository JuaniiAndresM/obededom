<?php
class  DatosAdministrador{
    public function TraerPropiedadesAdmin(){
        $arrayPropiedades=array();
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL TraigoPropiedadesAdmin();")) {   
          if ($sentencia->execute()) {    
              $sentencia->bind_result($id_tipooperacion,$tipo_operacion);
                   while ($sentencia->fetch()) {
                       array_push($arrayPropiedades,$id_tipooperacion,$tipo_operacion);   
                   }
               }else{
                   throw new Exception('Error en prepare: ' . $mysqli->error);
               }
           }else{
               throw new Exception('Error en prepare: ' . $mysqli->error);
           }
           return $arrayPropiedades;
    }

    //crea un nuevo tipo de propiedad
    public function CrearTipoPropiedad($nuevoTipoPropiedad){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertTipoPropiedad(?);")) {
            $sentencia->bind_param('s', $nuevoTipoPropiedad);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    
    //crea la localidad en su respectivo departamento
    public function CrearLocalidad($idDepartamento, $nuevaLocalidad){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertLocalidad(?,?);")) {
            $sentencia->bind_param('is', $idDepartamento, $nuevaLocalidad);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    //crea una nueva cantidad de dormitorios
    public function CrearDormitorio($nuevoDormitorio){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertDormitorio(?);")) {
            $sentencia->bind_param('i', $nuevoDormitorio);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    //crea un nuevo tipo de propiedad
    public function CrearBanio($nuevoBanio){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertBanios(?);")) {
            $sentencia->bind_param('i', $nuevoBanio);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    //crea una nueva cantidad de garages
    public function CrearGarage($nuevoGarage){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertGarage(?);")) {
            $sentencia->bind_param('i', $nuevoGarage);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    //crea un nuevo estado de propiedad
    public function CrearEstado($nuevoEstado){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertEstado(?);")) {
            $sentencia->bind_param('s', $nuevoEstado);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    //crea un nuevo tipo de sobre donde queda la propiedad
    public function CrearSobre($nuevoSobre){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertSobre(?);")) {
            $sentencia->bind_param('s', $nuevoSobre);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    //crea una nueva distancia del mar
    public function CrearDistanciaMar($nuevoDistanciaMar){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertDistanciaMar(?);")) {
            $sentencia->bind_param('s', $nuevoDistanciaMar);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    //crea una cantidad de plantas nueva
    public function CrearPlanta($nuevaPlantas){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertPlantas(?);")) {
            $sentencia->bind_param('i', $nuevaPlantas);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    //crea un tipo de comfort nuevo
    public function CrearComfort($nuevoComfort){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertComfort(?);")) {
            $sentencia->bind_param('s', $nuevoComfort);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    //crea un nuevo tipo de seguridad
    public function CrearSeguridad($nuevoSeguridad){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL InsertSeguridad(?);")) {
            $sentencia->bind_param('s', $nuevoSeguridad);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }
}
?>
