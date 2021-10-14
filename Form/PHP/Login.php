<?php
include '../../PHP/procedimientosForm.php';
$login= new Login();

$log = array();

if(isset($_POST['usuario'])){
    $user = $_POST["usuario"];
    $pwd = $_POST["pass"];

    $contra = hash('sha256', $pwd);

    echo $login->login($user, $contra); 
}else{
    $log = array('error'=> true);
    echo "Result: " + json_encode($log);
}
?>