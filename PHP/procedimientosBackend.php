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

 //trae la cantidad de dormitorios de la bdd
 public function TraerDormitorios(){
    $arrayDormitorios=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoDormitorios();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_dormitorios, $cantidad_dormitorios);
                while ($sentencia->fetch()) {
                    array_push($arrayDormitorios,$id_dormitorios,$cantidad_dormitorios);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayDormitorios;
}

 //trae la cantidad de baños de la bdd
 public function TraerBaños(){
    $arrayBaños=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoBaños();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_baños, $cantidad_baños);
                while ($sentencia->fetch()) {
                    array_push($arrayBaños,$id_baños,$cantidad_baños);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayBaños;
}

//trae la cantidad de garages de la bdd
public function TraerGarages(){
    $arrayGarages=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoGarage();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_garage, $cantidad_garage);
                while ($sentencia->fetch()) {
                    array_push($arrayGarages,$id_garage,$cantidad_garage);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayGarages;
}

//trae la distancia del mar de la bdd
public function TraerDistanciaMar(){
    $arrayDistanciaMar=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoDistanciaMar();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_distancia_mar, $distancia_mar);
                while ($sentencia->fetch()) {
                    array_push($arrayDistanciaMar,$id_distancia_mar,$distancia_mar);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayDistanciaMar;
}

//trae sobre donde queda la propiedad de la bdd
public function TraerSobre(){
    $arraySobre=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoSobre();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_Sobre, $propiedad_sobre);
                while ($sentencia->fetch()) {
                    array_push($arraySobre,$id_Sobre,$propiedad_sobre);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arraySobre;
}

//trae sobre donde queda la propiedad de la bdd
public function TraerEstado(){
    $arrayEstados=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoEstados();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_estados, $tipo_estados);
                while ($sentencia->fetch()) {
                    array_push($arrayEstados,$id_estados,$tipo_estados);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayEstados;
}

//trae la cantidad de plantas de la propiedad de la bdd
public function TraerPlantas(){
    $arrayPlantas=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoPlantas();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_plantas, $cantidad_plantas);
                while ($sentencia->fetch()) {
                    array_push($arrayPlantas,$id_plantas,$cantidad_plantas);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayPlantas;
}

//trae sobre donde queda la propiedad de la bdd
public function TraerComfort(){
    $arrayComfort=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoComfort();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_Comfort, $tipo_comfort);
                while ($sentencia->fetch()) {
                    array_push($arrayComfort,$id_Comfort,$tipo_comfort);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayComfort;
}

//trae sobre donde queda la propiedad de la bdd
public function TraerSeguridad(){
    $arraySeguridad=array();
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL TraigoSeguridad();")) {   
       if ($sentencia->execute()) {    
           $sentencia->bind_result($id_seguridad, $tipo_seguridad);
                while ($sentencia->fetch()) {
                    array_push($arraySeguridad,$id_seguridad,$tipo_seguridad);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arraySeguridad;
}

//guarda la propiedad en la bdd
public function GuardarPropiedad($arrayJSON){
    $arrayDatos = json_decode($arrayJSON);
     include "../Database/server.php";
     $sentencia = '';
   if ($sentencia = $mysqli->prepare("CALL CrearPropiedad(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);")) {  
    $sentencia->bind_param('ssiiissssiiiisiissssiiiisssiii',$arrayDatos[0],$arrayDatos[1],$arrayDatos[2],$arrayDatos[3],$arrayDatos[4],$arrayDatos[5],$arrayDatos[6],$arrayDatos[7],$arrayDatos[8],$arrayDatos[9],$arrayDatos[10],$arrayDatos[11],$arrayDatos[12],$arrayDatos[13],$arrayDatos[14],$arrayDatos[15],$arrayDatos[16],$arrayDatos[17],$arrayDatos[18],$arrayDatos[19],$arrayDatos[20],$arrayDatos[21],$arrayDatos[22],$arrayDatos[23],$arrayDatos[24],$arrayDatos[25],$arrayDatos[26], $arrayDatos[27], $arrayDatos[28], $arrayDatos[29]); 
        if($sentencia->execute()) {
            $sentencia->bind_result($id);
            if($sentencia->fetch()){
                //se fija si hay comfort y seguridad
                if(isset($arrayDatos[28]) && isset($arrayDatos[29])){
                    $arrayComfort = $arrayDatos[28];
                    $arraySeguridad = $arrayDatos[29];
                    //hace un for insertando los comfort con el id de la propiedad creada y el id de los comfort
                    for($i=-1; $i<count($arrayComfort); $i++){
                        if ($sentencia = $mysqli->prepare("CALL InsertComfortPropiedad(?, ?);")) {
                            $sentencia->bind_param('ii', $id, $arrayComfort[$i]);
                            if($sentencia->execute()) {
                            }else{
                                throw new Exception('Error en prepare: ' . $mysqli->error);
                            }
                        }
                    }
                    //hace un for insertando la seguridad con el id de la propiedad creada y el id de la seguridad
                    for($i=0; $i<count($arraySeguridad); $i++){
                        if ($sentencia = $mysqli->prepare("CALL InsertSeguridadPropiedad(?, ?);")) {
                            $sentencia->bind_param('ii', $id, $arraySeguridad[$i]);
                            if($sentencia->execute()) {
                            }else{
                                throw new Exception('Error en prepare: ' . $mysqli->error);
                            }
                        }
                    }
                }
            }
            
            
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayDatos;
}

}
?>
