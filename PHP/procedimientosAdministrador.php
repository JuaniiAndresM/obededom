<?php
header('Content-Type: text/html; charset=UTF-8');
class  DatosAdministrador{
    public function TraerPropiedadesAdmin(){
        $arrayPropiedades=array();
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL TraigoPropiedades();")) {   
          if ($sentencia->execute()) {    
              $sentencia->bind_result($id_propiedad,$titulo,$tipo_operacion,$precio_venta,$gastos_comunes,$permuta,$financia,$tipo_propiedad,$departamento,$localidad,$direccion,$fecha_construccion,$dormitorios,$baños,$garage,$estado,$oficina,$vivienda_social,$disposicion,$orientacion,$sobre,$distancia_mar,$metros_edificados,$metros_terraza,$metros_terreno,$plantas,$extras,$garantias,$descripcion_propiedad,$activo,$vista_mar,$mostrar_precio,$tipo_precio);
                   while ($sentencia->fetch()) {
                       array_push($arrayPropiedades,$id_propiedad,$titulo,$tipo_operacion,$precio_venta,$permuta,$financia,$tipo_propiedad,$departamento,$localidad,$direccion,$fecha_construccion,$dormitorios,$baños,$garage,$estado,$oficina,$vivienda_social,$disposicion,$orientacion,$sobre,$distancia_mar,$metros_edificados,$metros_terraza,$metros_terreno,$plantas,$extras,$garantias,$descripcion_propiedad,$activo,$vista_mar,$mostrar_precio,$gastos_comunes,$tipo_precio);   
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

    //crea un nuevo tipo de seguridad
    public function EliminarNomenclador($tipoNomenclador, $idNomenclador){
        include "../Database/server.php";
        $sentencia = '';
        $sentenciaNomenclador = '';
        switch($tipoNomenclador){
            case 1: 
                $sentenciaNomenclador = "CALL EliminarTipoPropiedad(?);";
            break;
            case 2:
                $sentenciaNomenclador = "CALL EliminarDormitorios(?);";
            break;
            case 3:
                $sentenciaNomenclador = "CALL EliminarBanios(?);";
            break;
            case 4:
                $sentenciaNomenclador = "CALL EliminarGarage(?);";
            break;
            case 5:
                $sentenciaNomenclador = "CALL EliminarEstados(?);";
            break;
            case 6:
                $sentenciaNomenclador = "CALL EliminarSobre(?);";
            break;
            case 7:
                $sentenciaNomenclador = "CALL EliminarDistanciaMar(?);";
            break;
            case 8:
                $sentenciaNomenclador = "CALL EliminarPlantas(?);";
            break;
            case 9:
                $sentenciaNomenclador = "CALL EliminarComfort(?);";
            break;
            case 10:
                $sentenciaNomenclador = "CALL EliminarSeguridad(?);";
            break;
            case 11:
                $sentenciaNomenclador = "CALL EliminarLocalidad(?);";
            break;
        }
        if ($sentencia = $mysqli->prepare($sentenciaNomenclador)) {
            $sentencia->bind_param('i', $idNomenclador);
            if ($sentencia->execute()) {
                echo "Funciona";
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

        //elimina una propiedad
        public function EliminarPropiedad($idPropiedad){
            include "../Database/server.php";
            $sentencia = '';
            if ($sentencia = $mysqli->prepare("CALL EliminarPropiedad(?);")) {
                $sentencia->bind_param('i', $idPropiedad);
                if ($sentencia->execute()) {
                    array_map('unlink', glob("../media/img/propiedad_".$idPropiedad."/*.*"));
                    rmdir("../media/img/propiedad_".$idPropiedad);
                }else{
                    throw new Exception('Error en prepare: ' . $mysqli->error);
                }
            } else {
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }

        //habilita la propiedad
        public function HabilitarPropiedad($idPropiedad){
            include "../Database/server.php";
            $estado = 1;
            $sentencia = '';
            if ($sentencia = $mysqli->prepare("CALL CambiarEstado(?,?);")) {
                $sentencia->bind_param('ii', $idPropiedad, $estado);
                if ($sentencia->execute()) {
                    echo "Funciona";
                }else{
                    throw new Exception('Error en prepare: ' . $mysqli->error);
                }
            } else {
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }

        //habilita la propiedad
        public function DeshabilitarPropiedad($idPropiedad){
            include "../Database/server.php";
            $estado = 0;
            $sentencia = '';
            if ($sentencia = $mysqli->prepare("CALL CambiarEstado(?,?);")) {
                $sentencia->bind_param('ii', $idPropiedad, $estado);
                if ($sentencia->execute()) {
                    echo "Funciona";
                }else{
                    throw new Exception('Error en prepare: ' . $mysqli->error);
                }
            } else {
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }

        //trae una propiedad especifica (se usa para propiedad.html)
        public function TraerPropiedad($idPropiedad){
            $arrayPropiedad=array();
            include "../Database/server.php";
            $sentencia = '';
            if ($sentencia = $mysqli->prepare("CALL TraigoPropiedad(?);")) {   
                $sentencia->bind_param('i', $idPropiedad);
              if ($sentencia->execute()) {    
                  $sentencia->bind_result($id_propiedad,$titulo,$tipo_operacion,$precio_venta,$gastos_comunes,$permuta,$financia,$tipo_propiedad,$departamento,$localidad,$direccion,$fecha_construccion,$dormitorios,$baños,$garage,$estado,$oficina,$vivienda_social,$disposicion,$orientacion,$sobre,$distancia_mar,$metros_edificados,$metros_terraza,$metros_terreno,$plantas,$extras,$garantias,$descripcion_propiedad,$activo,$vista_mar,$mostrar_precio, $tipo_precio);
                       while ($sentencia->fetch()) {
                           array_push($arrayPropiedad,$id_propiedad,$titulo,$tipo_operacion,$precio_venta,$permuta,$financia,$tipo_propiedad,$departamento,$localidad,$direccion,$fecha_construccion,$dormitorios,$baños,$garage,$estado,$oficina,$vivienda_social,$disposicion,$orientacion,$sobre,$distancia_mar,$metros_edificados,$metros_terraza,$metros_terreno,$plantas,$extras,$garantias,$descripcion_propiedad,$activo,$vista_mar,$mostrar_precio,$gastos_comunes, $tipo_precio);   
                       }
                   }else{
                       throw new Exception('Error en prepare: ' . $mysqli->error);
                   }
               }else{
                   throw new Exception('Error en prepare: ' . $mysqli->error);
               }
               return $arrayPropiedad;
        }

        //trae una propiedad especifica (se usa para propiedad.html)
        public function TraerMensajes(){
            $arrayMensajes=array();
            include "../Database/server.php";
            $sentencia = '';
            if ($sentencia = $mysqli->prepare("CALL TraigoMensajes();")) {   
              if ($sentencia->execute()) {    
                  $sentencia->bind_result($id_mensaje, $cont_mensaje, $tipo_mensaje);
                       while ($sentencia->fetch()) {
                           array_push($arrayMensajes, $id_mensaje, $cont_mensaje, $tipo_mensaje);   
                       }
                   }else{
                       throw new Exception('Error en prepare: ' . $mysqli->error);
                   }
               }else{
                   throw new Exception('Error en prepare: ' . $mysqli->error);
               }
               return $arrayMensajes;
        }

        //elimina un mensaje
        public function EliminarMensaje($idMensaje){
            include "../Database/server.php";
            $sentencia = '';
            if ($sentencia = $mysqli->prepare("CALL EliminarMensaje(?);")) {
                $sentencia->bind_param('i', $idMensaje);
                if ($sentencia->execute()) {
                    echo 1;
                }else{
                    throw new Exception('Error en prepare: ' . $mysqli->error);
                }
            } else {
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }

        //elimina un mensaje
        public function EliminarTodosMensajes(){
            include "../Database/server.php";
            $sentencia = '';
            if ($sentencia = $mysqli->prepare("CALL EliminarMensajes();")) {
                if ($sentencia->execute()) {
                    echo 1;
                }else{
                    throw new Exception('Error en prepare: ' . $mysqli->error);
                }
            } else {
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }
        
}
?>
