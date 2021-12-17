<?php
header('Content-Type: text/html; charset=UTF-8');
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
   if ($sentencia = $mysqli->prepare("CALL TraigoBanios();")) {   
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
     $pdf = "pdf/url";
     $sentencia = '';
     $arrayComfort = [];
   if ($sentencia = $mysqli->prepare("CALL CrearPropiedad(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);")) {  
    $sentencia->bind_param('ssiiiissssiiiisiissssiiiisssiiii',$arrayDatos[0],$arrayDatos[1],$arrayDatos[2], $arrayDatos[31],$arrayDatos[3],$arrayDatos[4],$arrayDatos[5],$arrayDatos[6],$arrayDatos[7],$arrayDatos[8],$arrayDatos[9],$arrayDatos[10],$arrayDatos[11],$arrayDatos[12],$arrayDatos[13],$arrayDatos[14],$arrayDatos[15],$arrayDatos[16],$arrayDatos[17],$arrayDatos[18],$arrayDatos[19],$arrayDatos[20],$arrayDatos[21],$arrayDatos[22],$arrayDatos[23],$arrayDatos[24],$arrayDatos[25],$arrayDatos[26], $arrayDatos[27], $arrayDatos[28], $arrayDatos[29], $arrayDatos[30]); 
        if($sentencia->execute()) {
            $sentencia->bind_result($id);
            if($sentencia->fetch()){
                //se fija si hay comfort y seguridad
                if(isset($arrayDatos[32]) && isset($arrayDatos[33])){
                    $arrayComfort = $arrayDatos[32];
                    $arraySeguridad = $arrayDatos[33];
                    //hace un for insertando los comfort con el id de la propiedad creada y el id de los comfort
                    for($i=0; $i<count($arrayComfort); $i++){
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
        return $id;
}

//guarda la propiedad en la bdd
public function ActualizarPropiedad($arrayJSON){
    $arrayDatos = json_decode($arrayJSON);
    include "../Database/server.php";
    $sentencia = '';
    if($sentencia = $mysqli->prepare("CALL ModificarPropiedad(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);")) {  
    $sentencia->bind_param('issiiiissssiiiisiissssiiiisssiiii',$arrayDatos[30], $arrayDatos[0],$arrayDatos[1],$arrayDatos[2], $arrayDatos[32],$arrayDatos[3],$arrayDatos[4],$arrayDatos[5],$arrayDatos[6],$arrayDatos[7],$arrayDatos[8],$arrayDatos[9],$arrayDatos[10],$arrayDatos[11],$arrayDatos[12],$arrayDatos[13],$arrayDatos[14],$arrayDatos[15],$arrayDatos[16],$arrayDatos[17],$arrayDatos[18],$arrayDatos[19],$arrayDatos[20],$arrayDatos[21],$arrayDatos[22],$arrayDatos[23],$arrayDatos[24],$arrayDatos[25],$arrayDatos[26], $arrayDatos[27], $arrayDatos[28], $arrayDatos[29], $arrayDatos[31]); 
        if($sentencia->execute()) {
            //se fija si hay comfort y seguridad
            if(isset($arrayDatos[33]) || isset($arrayDatos[34])){
                if($eliminarComfortSeguridad = $mysqli->prepare("CALL EliminarComfortSeguridad(?);")) {
                    $eliminarComfortSeguridad->bind_param('i', $arrayDatos[30]);
                    if($eliminarComfortSeguridad->execute()) {
                    }else{
                        throw new Exception('Error en prepare: ' . $mysqli->error);
                    }
                }
                $arrayComfort = $arrayDatos[33];
                $arraySeguridad = $arrayDatos[34];
                //hace un for insertando los comfort con el id de la propiedad creada y el id de los comfort
                for($i=0; $i<count($arrayComfort); $i++){
                    if ($sentencia = $mysqli->prepare("CALL InsertComfortPropiedad(?, ?);")) {
                        $sentencia->bind_param('ii', $arrayDatos[30], $arrayComfort[$i]);
                        if($sentencia->execute()) {
                        }else{
                            throw new Exception('Error en prepare: ' . $mysqli->error);
                        }
                    }
                }
                //hace un for insertando la seguridad con el id de la propiedad creada y el id de la seguridad
                for($i=0; $i<count($arraySeguridad); $i++){
                    if ($sentencia = $mysqli->prepare("CALL InsertSeguridadPropiedad(?, ?);")) {
                        $sentencia->bind_param('ii', $arrayDatos[30], $arraySeguridad[$i]);
                        if($sentencia->execute()) {
                        }else{
                            throw new Exception('Error en prepare: ' . $mysqli->error);
                        }
                    }
                }
            }else{
                if($eliminarComfortSeguridad = $mysqli->prepare("CALL EliminarComfortSeguridad(?);")) {
                    $eliminarComfortSeguridad->bind_param('i', $arrayDatos[30]);
                    if($eliminarComfortSeguridad->execute()) {
                    }else{
                        throw new Exception('Error en prepare: ' . $mysqli->error);
                    }
                }
            }
            
            
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayDatos[30];
}

    //trae seguridades de una propiedad especifica
    public function ComfortPropiedad($idPropiedad){
        $arrayComfort = array();
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL TraigoComfortPropiedad(?);")){
            $sentencia->bind_param('i', $idPropiedad);
            if ($sentencia->execute()) {
                $sentencia->bind_result($id_comfort, $tipo_comfort);
                while ($sentencia->fetch()) {
                    array_push($arrayComfort, $id_comfort, $tipo_comfort);
                }
            } else {
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayComfort;
    }

    //trae seguridades de una propiedad especifica
    public function SeguridadPropiedad($idPropiedad){
        $arraySeguridad=array();
        include "../Database/server.php";
        $sentencia = '';
        if($sentencia = $mysqli->prepare("CALL TraigoSeguridadPropiedad(?);")) {
            $sentencia->bind_param('i', $idPropiedad);   
            if ($sentencia->execute()) {    
            $sentencia->bind_result($id_seguridad, $tipo_seguridad);
                while ($sentencia->fetch()) {
                    array_push($arraySeguridad,$id_seguridad, $tipo_seguridad);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arraySeguridad;
    }

    //trae todas las imagenes de una propiedad
    public function TraerImagenes($idPropiedad){
    $arrayImagenes=array();
    include "../Database/server.php";
    $sentencia = '';
    if ($sentencia = $mysqli->prepare("CALL TraigoImagenes(?);")) { 
        $sentencia->bind_param('i', $idPropiedad);     
        if ($sentencia->execute()) {    
            $sentencia->bind_result($id_imagen, $imagen);
            while ($sentencia->fetch()) {
                array_push($arrayImagenes,$id_imagen, $imagen);   
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }else{
        throw new Exception('Error en prepare: ' . $mysqli->error);
    }
    return $arrayImagenes;
    }

    //trae todas las imagenes de una propiedad
    public function TraerImagen(){
        $arrayImagenes=array();
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL TraigoImagen();")) {   
            if ($sentencia->execute()) {    
                $sentencia->bind_result($imagen, $id_propiedad);
                while($sentencia->fetch()) {
                    array_push($arrayImagenes, $imagen, $id_propiedad);   
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $arrayImagenes;
        }

    public function GuardarImagenes($idPropiedad){
        include "../Database/server.php";
        $sentencia = '';
        $archivoGrande = false;
        $extensionInvalida = false;
        $llamarFunction = new DatosBackend();
        define('MB', 1048576);

        // Count total files
        $countfiles = count($_FILES['imagenes']['name']);

        // Crea directorio de la propiedad
        if (!file_exists("../media/img/propiedad_".$idPropiedad)) {
            mkdir("../media/img/propiedad_".$idPropiedad ,0777 ,true);
        }
        // Upload directory
        $upload_location = "../media/img/propiedad_".$idPropiedad."/";

        // To store uploaded files path
        $files_arr = array();

        // Loop all files
        for($index = 0;$index < $countfiles;$index++){

        if(isset($_FILES['imagenes']['name'][$index]) && $_FILES['imagenes']['name'][$index] != ''){
            // File name
            $index_file = $index;
            $temp = explode(".", $_FILES["imagenes"]["name"][$index]);
            $filecheck = $upload_location.'imagen_' . $index . '.*';
            if(glob($filecheck)){
                do{
                    $index_file = $index_file + 1;
                    $filename = 'imagen_' . $index_file . '.' . end($temp);
                    $filecheck = $upload_location.'imagen_' . $index_file . '.*';
                }while(glob($filecheck));
            }else{
                $temp = explode(".", $_FILES["imagenes"]["name"][$index]);
                $filename = 'imagen_' . $index . '.' . end($temp);
            }
            //$filename = $_FILES['imagenes']['name'][$index];

            // Get extension
            $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

            // Valid image extension
            $valid_ext = array("png","jpeg","jpg","jfif");

            // Check extension
            if(in_array($ext, $valid_ext)){

                // File path
                $path = $upload_location.$filename;
                $pathSQL = "/media/img/propiedad_".$idPropiedad."/".$filename;

                // Upload file
                if($_FILES['imagenes']['size'][$index] > 10*MB){
                    $archivoGrande = true;
                }else{
                    if(move_uploaded_file($_FILES['imagenes']['tmp_name'][$index],$path)){
                        $files_arr[] = $path;
                        if ($sentencia = $mysqli->prepare("CALL InsertImagen(?,?);")) {
                            $sentencia->bind_param('is', $idPropiedad, $pathSQL);
                            if ($sentencia->execute()) {
                                if(isset($_FILES['pdf']['name']) && $_FILES['pdf']['name'] != ''){
                                    echo $llamarFunction->GuardarPDF($_POST['idPropiedad']);
                                }
                            }else{
                                throw new Exception('Error en prepare: ' . $mysqli->error);
                            }
                        } else {
                            throw new Exception('Error en prepare: ' . $mysqli->error);
                        }
                    }
                }
                
            }else{
                $extensionInvalida = true;
            }
        }
        }
        if($extensionInvalida){
            echo "extensionValida";
        }elseif($archivoGrande){ 
            echo "archivoGrande";
        }elseif ($archivoGrande && $extensionInvalida){
            echo "archivoGV";
        }
        die;
    }

    public function EliminarImagen($idImagen){
        include "../Database/server.php";
        $sentencia = '';
        if ($sentencia = $mysqli->prepare("CALL EliminarImagen(?);")) {
            $sentencia->bind_param('i', $idImagen);
            if($sentencia->execute()) {
                $sentencia->bind_result($url);
                if($sentencia->fetch()){
                    $urlFinal = str_replace("/media", "../media", $url);
                    unlink($urlFinal);
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    public function TraigoPDF($idPropiedad){
        include "../Database/server.php";
        $sentencia = '';
        $urlPDF = "";
        if ($sentencia = $mysqli->prepare("CALL TraigoPDF(?);")) {  
            $sentencia->bind_param('i', $idPropiedad); 
            if ($sentencia->execute()) {    
                $sentencia->bind_result($pdf);
                if($sentencia->fetch()) {
                    $urlPDF = $pdf;
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        }else{
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
        return $urlPDF;
    }

    public function GuardarPDF($idPropiedad){
        include "../Database/server.php";
        $sentencia = '';
        $archivoGrande = false;
        $extensionInvalida = false;
        // Upload directory
        $upload_location = "../media/pdf/";
        echo "entra al pdf";

        if(isset($_FILES['pdf']['name']) && $_FILES['pdf']['name'] != ''){
            // File name
            $filename = 'propiedad_' . $idPropiedad . '.pdf';
            //$filename = $_FILES['imagenes']['name'][$index];

            // Get extension
            $ext = strtolower(pathinfo($filename, PATHINFO_EXTENSION));

            // Valid pdf extension
            $valid_ext = array("pdf");

            // Check extension
            if(in_array($ext, $valid_ext)){

                // File path
                $path = $upload_location.$filename;
                $pathSQL = "/media/pdf/".$filename;

                // Upload file
                if($_FILES['pdf']['size'] > 10*1048576){
                    $archivoGrande = true;
                }else{
                    if(move_uploaded_file($_FILES['pdf']['tmp_name'],$path)){
                        if ($sentencia = $mysqli->prepare("CALL InsertPDF(?,?);")) {
                            $sentencia->bind_param('is', $idPropiedad, $pathSQL);
                            if ($sentencia->execute()) {
                            }else{
                                throw new Exception('Error en prepare: ' . $mysqli->error);
                            }
                        } else {
                            throw new Exception('Error en prepare: ' . $mysqli->error);
                        }
                    }
                }
                
            }else{
                $extensionInvalida = true;
            }
        }
        die;
    }

    public function EliminarPDF($idPropiedad){
        include "../Database/server.php";
        $sentencia = '';
        echo "entra";
        if ($sentencia = $mysqli->prepare("CALL EliminarPDF(?);")) {
            $sentencia->bind_param('i', $idPropiedad);
            if($sentencia->execute()) {
                $sentencia->bind_result($url);
                if($sentencia->fetch()){
                    echo "algo";
                    $urlFinal = str_replace("/media", "../media", $url);
                    unlink($urlFinal);
                }
            }else{
                throw new Exception('Error en prepare: ' . $mysqli->error);
            }
        } else {
            throw new Exception('Error en prepare: ' . $mysqli->error);
        }
    }

    public function consulta($nombre,$mail,$tipoConsulta,$comentario){
        $datos = array(
            "nombre"=>$nombre,
            "mail"=>$mail,
            "tipoConsulta"=>$tipoConsulta,
            "comentario"=>$comentario
        );
        /*
         codigo del formulario de consultas
        */
        return $datos;
    }

}


?>
