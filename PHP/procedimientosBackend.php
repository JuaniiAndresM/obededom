<?php
class  DatosBackend{

    //trae los tipos de operacion
    public function TraerOperaciones(){
        $arrayOperaciones=array();
         include "../Database/server.php";
         $sentencia = '';
       if ($sentencia = $mysqli->prepare("CALL TraigoTipoOperacion();")) {   
           if ($sentencia->execute()) {    
               $sentencia->bind_result($id_tipooperacion,$tipo_operacion);
                    while ($sentencia->fetch()) {
                        array_push($arrayOperaciones,$id_tipooperacion,$tipo_operacion);   
                    }
                }else{
                    throw new Exception('Error en prepare: ' . $mysqli->error);
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
            return $arrayOperaciones;
   }

   //trae los tipos de propiedad
   public function TraerTiposPropiedad(){
    $arrayTipoPropiedad=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoTipoPropiedad();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_tipopropiedad,$tipo_propiedad);
                while ($sentencia->fetch()) {
                    array_push($arrayTipoPropiedad,$id_tipopropiedad,$tipo_propiedad);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayTipoPropiedad;
}

    //trae todos los departamentos de uruguay para los selects desde la base de datos.
    public function TraerDepartamentos(){
        $arrayDepartamentos=array();
         include "../Database/server.php";
         $sentencia = '';
       if ($sentencia = $mysqli->prepare("CALL TraigoDepartamentos();")) {   
           if ($sentencia->execute()) {    
               $sentencia->bind_result($id_departamento,$nombre_departamento);
                    while ($sentencia->fetch()) {
                        array_push($arrayDepartamentos,$id_departamento,$nombre_departamento);   
                    }
                }else{
                    throw new Exception('Error en prepare: ' . $mysqli->error);
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
            return $arrayDepartamentos;
   }

   //trae las localidades de la bdd con el id de departamento
   public function TraerLocalidades($idDepartamento){
    $arrayLocalidades=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoLocalidad(?);")) {  
    $sentencia->bind_param('i', $idDepartamento);   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_localidad, $id_departamento ,$nombre_localidad);
                while ($sentencia->fetch()) {
                    array_push($arrayLocalidades,$id_localidad,$nombre_localidad);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayLocalidades;
}

}
?>
