<?php

$servidor = getenv("MYSQLHOST");
$usuario = getenv("MYSQLUSER");
$contraseña = getenv("MYSQLPASSWORD");
$base_datos = getenv("MYSQLDATABASE");
$port = getenv("MYSQLPORT");

$conexion = mysqli_connect($servidor, $usuario, $contraseña, $base_datos, $port);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

?>