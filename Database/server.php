<?php


//Abrir nueva conexion con server MySQL
//$mysqli = new mysqli('localhost','root','root','obededom');
$mysqli = new mysqli('obededompropiedades.com.uy','obededom_giovanna','giovanna2021','obededom_obededom', 33061);

$mysqli->set_charset("utf8");

//Error de conexion
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

?>