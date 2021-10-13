<?php
include '../../PHP/procedimientosForm.php';
$login= new Login();

$log = array();

if(isset($_POST['usuario'])){
    $user = $_POST["usuario"];
    $pwd = $_POST["pass"];

    echo $login->login($user, $pwd); 
}else{
    $log = array('error'=> true);
    echo "Result: " + json_encode($log);
}
?>