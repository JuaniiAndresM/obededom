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
}
?>
