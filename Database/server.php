<?php


//Abrir nueva conexion con server MySQL
$mysqli = new mysqli('localhost','root','root','obededom');

//Error de conexion
if ($mysqli->connect_error) {
    die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

?>